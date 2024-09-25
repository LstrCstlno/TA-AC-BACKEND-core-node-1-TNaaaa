function areaSquare(length) {
    let area = length*length
    return `The area of a Square is ${area}`
}

function areaReactangle(length, width) {
    let area = length*width;
    return  `The area of a rectangle is ${area}`
}

function areaCircle(radius) {
    const pie = 2.1417
    var area = pie*radius*radius;
        return  `The area of a CIrcle is ${area}`
}

module.exports = {
    areaSquare : areaSquare,
    areaReactangle: areaReactangle,
    areaCircle: areaCircle
}

