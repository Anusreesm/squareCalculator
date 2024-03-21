function squareCalculator(event)
{
    event.preventDefault();
    const no=parseInt(document.getElementById("squareNo").value);
    const squareOfTheNumber=no*no;
    console.log(squareOfTheNumber);
}
document.getElementById("squareCalc").addEventListener("submit",squareCalculator);