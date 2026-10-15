function rectangleArea(width, height) {
    return width * height;
}

function calculateArea() {
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);

    let area = rectangleArea(width, height);

    console.log("Area of rectangle: " + area);
}
