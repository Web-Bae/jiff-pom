var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.getElementById("lorem").onsubmit = (event) => __awaiter(this, void 0, void 0, function* () {
    event.preventDefault();
    const el = yield webflow.getSelectedElement();
    if (el && el.textContent) {
        el.setTextContent("Hey there world!");
        yield el.save();
    }
    if (el.type === "Block") {
        const jiffPom = `₍ᐢ•ᴥ•ᐢ₎`;
        // create new element
        const newEl = webflow.createDOM("p");
        newEl.setTextContent(jiffPom);
        // get existing style or create new one
        const style = yield webflow.getStyleByName("jiff-pom");
        if (style) {
            newEl.setStyles([style]);
        }
        else {
            const jiffPomStyle = webflow.createStyle("jiff-pom");
            jiffPomStyle.setProperties({
                color: "blue",
                "font-size": "80px",
                "line-height": "1.5",
            });
            yield jiffPomStyle.save();
        }
        // get existing children and add new element
        const existingChildren = el.getChildren();
        el.setChildren([...existingChildren, newEl]);
        yield el.save();
    }
});
