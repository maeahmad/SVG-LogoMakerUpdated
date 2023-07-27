// import inquirer fs svg class shape classes. 
// Runs the application using imports from lib.
const filesystem = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./shapes");
const Svg = require("./svg");


//Array of questions to ask the user shape choice, shape color, text choice, and text color.
const questions = [
    {
        type: "input",
        name: "text",
        message: "Text: Please enter up to (3) Characters: ",
    },
    {
        type: "input",
        name: "text-color",
        message: "Text Color: Please enter a color keyword (or a hexadecimal number): ",
    },
    {
        type: "input",
        name: "shape",
        message: "Shape Color: Please enter a color keyword (or a hexadecimal number): ",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Choose which Pixel Image you would like? ",
        choices: ["Circle", "Square", "Triangle"]
    },
];

//function to write data to file
function writeToFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Well Done! you have generated a logo.svg file!");
    });
}

async function init() {
    console.log("Starting init")
    var svgString = "";
    var svg_file = "logo.svg";

    const answers = await inquirer.prompt(questions);
    var user_text = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        user_text = answers.text;
    } else {
        console.log("Incorrect user text field detected! Please make sure to enter between 1 to 3 Characters only");
        return;
    }
    console.log("User text: [" + user_text + "]");
    let user_font_color = answers["text-color"];
    console.log("User font color: [" + user_font_color + "]");
    let user_shape_type = answers["pixel-image"];
    console.log("User entered shape = [" + user_shape_type + "]");

    let user_shape;
    if (user_shape_type === "Square" || user_shape_type === "square") {
        user_shape = new Square();
        console.log("User choice square shape")
    }
    else if (user_shape_type === "Circle" || user_shape_type === "circle") {
        user_shape = new Circle();
        console.log("User choice circle shape")
    }
    else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
        user_shape = new Triangle();
        console.log("User choice triangle shape")
    }
    else {
        console.log("Invalid shape!")
    }
    user_shape.setColor(user_font_color);

    var svg = new Svg();
    svg.setTextElement(user_text, user_font_color)
    svg.setShapeElement(user_shape);
    svgString = svg.render();

    console.log("Displaying shape:\n\n" + svgString)

    console.log("Shape creation is completed!")
    console.log("writing shape to file...")
    writeToFile(svg_file, svgString)
}

init()