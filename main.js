var arrOfImages = ["Bulls.gif","Heat.gif","Jazz.gif","Kings.gif","Knicks.gif","Lakers.gif","Suns.gif","Warriors.gif","Wizards.gif"];
function doubleImages(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
      arr.push(arr[i]);
  }
  return arr;
}
console.log(doubleImages(arrOfImages));

function shuffleCards(arr) {
  for(var i = 0;i < arr.length;i++) {
    var idx1 = Math.floor(Math.random()*arr.length);
    var idx2 = Math.floor(Math.random()*arr.length);
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
  return arr;
}
shuffleCards(arrOfImages);

function displayCards(arr){
  var container = document.getElementById("container");
  for(var i=0;i<arr.length;i++){
    var newImgElement = document.createElement("img");
    newImgElement.src="img/"+arr[i];
    newImgElement.id=i;
    newImgElement.className="card";
    container.appendChild(newImgElement);
  }
}
displayCards(arrOfImages);

function hideACard(idx) {
  var specificCard = document.getElementById(idx);
  specificCard.src = "img/questionmark.jpg";
}
  
for (var i = 0; i < arrOfImages.length; i++) {
  hideACard(i);
}

function revealCard(event) { 
  var clickedImageId = event.target.id;
  var clickedImage = document.getElementById(clickedImageId); 
  clickedImage.src = "/img/" + arrOfImages[clickedImageId];
}

var cards = document.getElementsByClassName("card"); 
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", revealCard);
}



