('use strict');

function productChoice( productName, image){
  this.productName = productName;
  this.image = 'images/' + image;
  this.totalClicks = 0;
};

var boots = new productChoice(boots, 'boots.jpg');
var chair = new productChoice(chair, 'chair.jpg');
var scissors = new productChoice(scissors, 'scissors.jpg');
var waterCan = new productChoice(waterCan, 'water_can.jpg');
var wineGlass = new productChoice(wineGlass, 'wine_glass.jpg');

var imageArray = [boots, chair, scissors, waterCan, wineGlass];
console.log(imageArray);

function randomizer () {
  return Math.floor(Math.random() * imageArray.length);
}
var firstImage = document.getElementsByClassName('image1');
var secondImage = document.getElementsByClassName('image2');
var thirdImage = document.getElementsByClassName('image3');

function randomImage() {
  var random1 = randomizer();
  firstImage.image = imageArray[random1].image;
  console.log(firstImage);

  var random2 = randomizer();
  while (random1 === random2){
    random2 = randomizer();
  }
  secondImage.image = imageArray[random2].image;

  var random3 = randomizer();
  while (random1 === random3 || random2 === random3){
    random3 = randomizer();
  }
  thirdImage.image = imageArray[random3].image;
};
function changeImage(){
  if (totalClicks < 15) {
    totalClicks++;
    getRandomImage();
  } else {
    submit.style.display = 'block';
    getRandomImage();
  }
}

randomImage();
