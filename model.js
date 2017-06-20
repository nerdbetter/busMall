('use strict');

function ProductChoice( name, src){
  this.name = name;
  this.image = 'images/' + src;
  this.totalClicks = 0;
};

var totalClicks = 0;

var boots = new ProductChoice('boots', 'boots.jpg');
var chair = new ProductChoice('chair', 'chair.jpg');
var scissors = new ProductChoice('scissors', 'scissors.jpg');
var waterCan = new ProductChoice('waterCan', 'water_can.jpg');
var wineGlass = new ProductChoice('wineGlass', 'wine_glass.jpg');

var imageArray = [boots, chair, scissors, waterCan, wineGlass];
console.log(imageArray);

function randomizer () {
  return Math.floor(Math.random() * imageArray.length);
}
var firstImage = document.getElementById('image1');
var secondImage = document.getElementById('image2');
var thirdImage = document.getElementById('image3');

function randomImage() {
  var random1 = randomizer();
  firstImage.src = imageArray[random1].image;
  console.log(firstImage);

  var random2 = randomizer();
  while (random1 === random2){
    random2 = randomizer();
  }
  secondImage.src = imageArray[random2].image;

  var random3 = randomizer();
  while (random1 === random3 || random2 === random3){
    random3 = randomizer();
  }
  thirdImage.src = imageArray[random3].image;
};
function changeImage(){
  if (totalClicks < 25) {
    totalClicks++;
    getRandomImage();
  } else {
    submit.style.display = 'block';
    getRandomImage();
  }
}
image1.addEventListener('submit', randomImage);
image1.addEventListener('submit', changeImage);
image2.addEventListener('submit', randomImage);
image2.addEventListener('submit', changeImage);
image3.addEventListener('submit', randomImage);
image3.addEventListener('submit', changeImage);

randomImage();
