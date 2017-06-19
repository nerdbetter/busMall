('use strict');

function productChoice(name, file){
  this.name = name,
  this.file = file;
};

var boots = new productChoice(boots, 'images/boots.jpg');
var chair = new productChoice(chair, 'images/chair.jpg');
var scissors = new productChoice(scissors, 'images/scissors.jpg');
var waterCan = new productChoice(waterCan, 'images/water_can.jpg');
var wineGlass = new productChoice(wineGlass, 'images/wine_glass.jpg');
