document.getElementById("lorem").onsubmit = async (event) => {
  event.preventDefault();
  const el = await webflow.getSelectedElement();
  if (el && el.textContent) {
    el.setTextContent("Hey there world!");
    await el.save();
  }
  if (el.type === "Block") {
    const jiffPom = `₍ᐢ•ᴥ•ᐢ₎`;

    // create new element
    const newEl = webflow.createDOM("p");
    newEl.setTextContent(jiffPom);

    // get existing style or create new one
    const style = await webflow.getStyleByName("jiff-pom");
    if (style) {
      newEl.setStyles([style]);
    } else {
      const jiffPomStyle = webflow.createStyle("jiff-pom");
      jiffPomStyle.setProperties({
        color: "blue",
        "font-size": "80px",
        "line-height": "1.5",
      });
      await jiffPomStyle.save();
    }

    // get existing children and add new element
    const existingChildren = el.getChildren();
    el.setChildren([...existingChildren, newEl]);

    await el.save();
  }
};
