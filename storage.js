('use strict');

function makeThings(index){
  var shown = productArray[index].shown;
  var votes = productArray[index].vote;
  return {shown: shown, vote: vote};
}
function stringThings(){
  var stringy = {};
  for(var i = 0; i < productArray.length; i++){
    stringy[productArray[i].itemName] = stringThings(i);
  }
  return JSON.stringify(obj);
}
window.localStorage.storedObjects = stringThings();
