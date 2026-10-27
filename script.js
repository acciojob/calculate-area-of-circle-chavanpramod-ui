function calculateArea() {
    let radius = prompt("Enter the radius of the circle:");
    let r = Number(radius);
    let area = Math.PI * r * r;
    let formattedArea = area.toFixed(2);
    alert(`The area of the circle with radius ${r} is ${formattedArea}`);
}
calculateArea();