// Copyright (c) 2025 Lucas Nguyen All rights reserved
//
// Created by: Lucas Nguyen
// Created on: Mar 2025
// This file contains the JS functions for index.html

function enterClicked() {
  // input
  const length = parseFloat(document.getElementById("length").value)
  const width = parseFloat(document.getElementById("width").value)
  const height = parseFloat(document.getElementById("height").value)
  // process
  const surfaceArea = 2 * (width * length + height * length + width * height)
  // output
  document.getElementById("answer").innerHTML =
    "The surface area is: " + surfaceArea + " cm²."
}
