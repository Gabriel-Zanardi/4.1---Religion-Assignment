// Made by Gabriel

"use strict"

function myButtonClicked() {
//input
  const firstBase = document.getElementById("base-a").value
  const secondBase = document.getElementById("base-b").value
  const heightOfTrapezium = document.getElementById("height").value
//process
  const areaHalfway = (firstBase * secondBase) * heightOfTrapezium
  const areaAnswer = areaHalfway / 2

//output
  document.getElementById("answer").innerHTML =
  "The area of this trapezium is: " + areaAnswer + " mm²."
}