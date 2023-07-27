//create class called svg that has a text and a shape property and a set shape, a set text a render method.
class SVG {
    // constructor defines properties of class
    constructor() {
        this.text = ""
        this.shape = ""
    }
    // methods are actions that a class can take 
    setShape(choicenShape) {
        this.shape = choicenShape.render()

    }
}
class Svg {
    constructor() {
        this.textElement = ""
        this.shapeElement = ""
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">`
    }
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="green">`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
}