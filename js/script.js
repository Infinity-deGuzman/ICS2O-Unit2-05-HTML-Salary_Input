// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by: Infinity de Guzman
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function enterClicked () {
  // this code will calculate your actual pay and the amount the government takes

  // input
  const hours = parseInt(document.getElementById("hours-worked").value)
  const rate = parseInt(document.getElementById("hourly-rate").value)

  // process
  const pay = (hours * rate) * (1.00 - 0.18)
  const government = (hours * rate) * (1.00 - 0.82)

  //output
  document.getElementById('pay').innerHTML = 'Your pay will be: $' + pay.toFixed(2)
  document.getElementById('government').innerHTML = 'The government will take: $' + government.toFixed(2)
}
