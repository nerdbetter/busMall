('use strict');

var productArray = [];
var shown = 0;
var totalClicks = 0;
var vote = 0;
var firstImage = document.getElementById('image1');
var secondImage = document.getElementById('image2');
var thirdImage = document.getElementById('image3');

console.log(productArray);

function Product(name, src){
  this.name = name;
  this.image = 'images/' + src;
  this.shown = 0;
  this.vote = 0;
  productArray.push(this);
};

var boots = new Product('boots', 'boots.jpg');
var chair = new Product('chair', 'chair.jpg');
var scissors = new Product('scissors', 'scissors.jpg');
var waterCan = new Product('waterCan', 'water_can.jpg');
var wineGlass = new Product('wineGlass', 'wine_glass.jpg');

function randomizer () {
  return Math.floor(Math.random() * productArray.length);
}

function randomImage() {
  var random1 = randomizer();
  firstImage.src = productArray[random1].image;
  firstImage.name = productArray[random1].name;
  totalShown = productArray[random1].shown++;
  //console.log(firstImage);
  //console.log(totalShown);

  var random2 = randomizer();
  while (random1 === random2){
    random2 = randomizer();
  }
  secondImage.src = productArray[random2].image;
  secondImage.name = productArray[random2].name;
  totalShown = productArray[random2].shown++;
  //console.log(secondImage);
  //console.log(totalShown);

  var random3 = randomizer();
  while (random1 === random3 || random2 === random3){
    random3 = randomizer();
  }
  thirdImage.src = productArray[random3].image;
  thirdImage.name = productArray[random3].name;
  totalShown = productArray[random3].shown++;
  //console.log(thirdImage);
  //console.log(totalShown);

};
function changeImage(){
  if (totalClicks < 25) {
    totalClicks++;
    randomImage();
  }
  else{
    submit.style.display = 'none';
    randomImage();
  }
}
function getVote(){
  var userVote = event.target.querySelector('input:checked');
  if ( userVote.value === '0' ){
    productArray.map(function(product){
      if (product.name === firstImage.name){
        product.vote++;
      }
      console.log(product);
    });
  }
  else if (userVote.value === '1'){
    productArray.map(function(product){
      if (product.name === secondImage.name){
        product.vote++;
      }
      console.log(product);
    });
  }
  else if (userVote.value === '2') {
    productArray.map(function(product){
      if (product.name === thirdImage.name){
        product.vote++;
      }
      console.log(product);
    });
  }
  else{
    console.log('noVote');
  }
};
function formEvents(event){
  event.preventDefault();
  getVote();
  changeImage();
  document.getElementsByClassName('imageSelect')[0].reset();
};
randomImage();
document.getElementsByClassName('imageSelect')[0].addEventListener('submit', formEvents);
