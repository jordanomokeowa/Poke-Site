
//INITALIally ASSIGNING VARIABLES--------------------------------------
var pokeURL = "http://pokeapi.co/api/v2/pokemon/";

//--------------------------------------------------------------------



//INIT FUNCTIONS---------------------------------------------------------------------------

function choiceButton(){
  return document.getElementById("game-choice");
}

//page restructuring
function pageChange(){

  $('#feeling-lucky').toggle();
  // $("#pokeID").toggle();
  // $("#poke-search").attr('hidden',true);
  $("#start-btn").attr('hidden',true);
  $('#game-div').attr('hidden',false);
  $("#lucky-div").attr('hidden',true)
}
//

//random number genrator
function getRandomInt(min, max) {
  result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result
}
//

//INIT GEN TO RANDOM ID from NUM
function randIdPicker(num) {
  if (num == "1") {
    return getRandomInt(1, 151);
  }

  else if (num == "2") {
    return getRandomInt(152, 251);
  }

  else if (num == "3") {
    return getRandomInt(252, 386);

  }

  else if (num == "4") {
    return getRandomInt(387, 493);
  }

else if (num >= 5 || num <= 1) {
    alert("Choose Between Generations 1, 2, 3 or 4");
    return
  }

}
//
//
// INIT END ------------------------------------------------------------------------



// START GAME FUNCTION GETTING GENERATION CHOICE FROM USER
function startGame() {

  //rearrange page
  pageChange();
  //rearrange page end

 //match gen choice with random ID
  genPicker = prompt("Choose Generation Number 1-4");
  if (genPicker == "1") {
    var pokeID = randIdPicker(1);
  } else if (genPicker == "2") {
    var pokeID = randIdPicker(2);
  } else if (genPicker == "3") {
    var pokeID = randIdPicker(3);
  } else if (genPicker == "4") {
    var pokeID = randIdPicker(4);
  } else if (genPicker >= 5 || genPicker <= 1) {
    alert("Choose Between Generations 1, 2, 3 or 4");
    startGame();
  }
  //end..............

  pokeURLCom2 = pokeURL + pokeID

  $.getJSON(pokeURLCom2, function(data) {


    var pokeImg = data.sprites.front_default;
    $("#poke-ball").attr("src", pokeImg);
    $("#poke-ball").addClass("ImgLarge")

    var pokeName = data.name;
    var pokeID = data.id;
    var pokeName = data.name;
    var pokeType1 = data.types[0].type.name;
    var typeNumber = data.types.length;
    $("#type1").html(pokeType1);

    console.log(pokeType1);



    function typeNumCheck(){
      if (typeNumber == 1) {
        pokeType2 = "";
        var userGuess = prompt("pokemon type guess").toLowerCase();
        if (userGuess === pokeType1){
          console.log("Well Done");
        }
        else{
          alert("incorrect")
        }
        }
      else {
        var pokeType2 = data.types[1].type.name;
        console.log(pokeType2);
        $("#type2").html(pokeType2);
      }

    }
    $("#poke-ball").ready(typeNumCheck)




    $("#results").html(pokeName + "<p>National_ID:  " + pokeID + "</p>");
  })

}
// END OF STARTGAME FUNCTION
// //ANSWER SUBMIT FUNCTION
// function answerSubmit(num){
//   if (num == 1 ){
//     x = "normal";
//     if (x == pokeType1){
//       prompt("Congrats");
//     }
//     else {
//       return
//     }
//   }
//   if (num == 2 ){
//     x = "fighting";
//     if (x == pokeType1){
//       prompt("Congrats");
//     }
//     else {
//       return
//     }
//   }
//   if (num == 3 ){
//     x = "fighting";
//     if (x == pokeType1){
//       prompt("Congrats");
//     }
//     else {
//       return
//     }
//   }
//   if (num == 4 ){
//     x = "fighting";
//     if (x == pokeType1){
//       prompt("Congrats");
//     }
//     else {
//       return
//     }
//   }
//   if (num == 5 ){
//     x = "fighting";
//     if (x == pokeType1){
//       prompt("Congrats");
//     }
//     else {
//       return
//     }
//   }
//   if (num == 6 ){
//     x = "fighting";
//     if (x == pokeType1){
//       prompt("Congrats");
//     }
//     else {
//       return
//     }
//   }
//   if (num == 7 ){
//     x = "fighting";
//     if (x == pokeType1){
//       prompt("Congrats");
//     }
//     else {
//       return
//     }
//
//   }
//   if (num == 8 ){
//     x = "fighting";
//     if (x == pokeType1){
//       prompt("Congrats");
//     }
//     else {
//       return
//     }
//   }
//   if (num == 9 ){
//     x = "fighting";
//     if (x == pokeType1){
//       prompt("Congrats");
//     }
//     else {
//       return
//     }
//   }
//   if (num == 10 ){
//     x = "fighting";
//     if (x == pokeType1){
//       prompt("Congrats");
//     }
//     else {
//       return
//     }
//   }
//   if (num == 11 ){
//     x = "fighting";
//     if (x == pokeType1){
//       prompt("Congrats");
//     }
//     else {
//       return
//     }
//   }
//   if (num == 12 ){
//     x = "fighting";
//     if (x == pokeType1){
//       prompt("Congrats");
//     }
//     else {
//       return
//     }
//   }
//   if (num == 13 ){
//     x = "fighting";
//     if (x == pokeType1){
//       prompt("Congrats");
//     }
//     else {
//       return
//     }
//   }
//   if (num == 14 ){
//     x = "fighting";
//     if (x == pokeType1){
//       prompt("Congrats");
//     }
//     else {
//       return
//     }
//   }
//   if (num == 15 ){
//     x = "fighting";
//     if (x == pokeType1){
//       prompt("Congrats");
//     }
//     else {
//       return
//     }
//   }
//   if (num == 16 ){
//     x = "fighting";
//     if (x == pokeType1){
//       prompt("Congrats");
//     }
//     else {
//       return
//     }
//   }
//   if (num == 17 ){
//     x = "fighting";
//     if (x == pokeType1){
//       prompt("Congrats");
//     }
//     else {
//       return
//     }
//   }
//   if (num == 18 ){
//     x = "fighting";
//     if (x == pokeType1){
//       prompt("Congrats");
//     }
//     else {
//       return
//     }
//   }
//
// }
// //END



// //answer hider function feature........
// function answerHider(){
//   var rINT = Math.floor(Math.random()*6 +1);
//   console.log(rINT);
// }
//random INT FUNCT V2
// end
// random int function
function genPicker(num) {
  if (num == 1) {
    return getRandomInt(1, 151);

  } else if (num == 2) {
    return getRandomInt(152, 251);
  } else if (num == 3) {
    return getRandomInt(252, 386);
  } else if (num == 4) {
    return getRandomInt(387, 493);
  }

}
//rand INT FUNCTION end
// feeling lucky function
function feelingLucky(i){
  var param = genPicker(i);

  var pokeURLCom = pokeURL + param
  $("#poke-ball").attr('hidden', true)
  $.getJSON(pokeURLCom, function(data) {

    var pokeID = data.id;
    var pokeName = data.name;
    var pokeType1 = data.types[0].type.name;
    var pokeImg = data.sprites.front_default;

    $("#poke-ball").attr("src", pokeImg);

    var typeNum = data.types.length;

    if (typeNum == 1) {
      var pokeType2 = ""


    } else {
      var pokeType2 = data.types[1].type.name;
    }

    $("#results").html(pokeName);
    $("#type1").html(pokeType1);
    $("#type2").html(pokeType2);
    $("#poke-ball").attr('hidden', false);
    $('#poke-ball').addClass("ImgLarge");
    return pokeName
  });



}
//


// Recall data from user input pokeID num value. START//
function pokeSubmit() {
  var param = document.getElementById("pokeID").value;
  var pokeURLCom = pokeURL + param
  console.log(pokeURLCom)

  $("#poke-ball").attr('hidden', true)
  $.getJSON(pokeURLCom, function(data) {

    var pokeID = data.id;
    var pokeName = data.name;
    var pokeType1 = data.types[0].type.name;
    var pokeImg = data.sprites.front_default;

    $("#poke-ball").attr("src", pokeImg);

    var typeNum = data.types.length;

    if (typeNum == 1) {
      var pokeType2 = ""


    } else {
      var pokeType2 = data.types[1].type.name;
    }

    $("#results").html(pokeName);
    $("#type1").html(pokeType1);
    $("#type2").html(pokeType2);
    $("#poke-ball").attr('hidden', false);
    $('#poke-ball').addClass("ImgLarge");
    return pokeName
  });

};
// END
