// Copyright (c) 2025 Lucas Nguyen All rights reserved
//
// Created by: Lucas Nguyen
// Created on: Mar 2025
// This file contains the JS functions for index.html

function enterClicked() {
  // input
  const length = document.getElementById("length").value
  const width = document.getElementById("width").value
  const height = document.getElementById("height").value
  // output
  document.getElementById("answer").innerHTML =
    "The surface area is: " + (2 * ((width * length) + (height * length) + (width * height))) + "cm²."
}
