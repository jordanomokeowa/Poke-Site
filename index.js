//INITALIZING COMMON VARIABLES
var pokeURL = "http://pokeapi.co/api/v2/pokemon/"

// START GAME FUNCTION GETTING GENERATION CHOICE FROM USER
function startGame(){
  var genPicker = prompt("Choose Generation Number 1-4");
    //page restructuring
  $("#feeling-lucky").toggle();
  $("#pokeID").toggle();
  $("#poke-search").attr('hidden',true);
  $("#start-btn").attr('hidden',true);
  $("#game-div").attr('hidden',false);
  $("#lucky-div").attr('hidden',true)
  // restrcture end

  if (genPicker == "1"){
    //getRandomInt(1,151);
    typeGame(1,151);
    }
    else if(genPicker == "2"){
      //getRandomInt(152,251);
      typeGame(152,251);
    }
    else if(genPicker == "3"){
      //getRandomInt(252,386);
      typeGame(252,386);

    }
    else if(genPicker == "4"){
      //getRandomInt(387,493);
      typeGame(387,493);
    }
    else if(genPicker>=5 || genPicker<=1){
      alert("Choose Between Generations 1, 2, 3 or 4");
      startGame();
    }

}
// END OF STARTGAME FUNCTION

//TYPE GAME START
function typeGame(a,b){
  getRandomInt(a,b);
  var type1 = $("#type1").html();
  var type2 = $("#type1").html();

  result type1


  });


  console.log(type1);
  console.log(type2);

}
//TYPE GAME END

// //answer hider function feature........
// function answerHider(){
//   var rINT = Math.floor(Math.random()*6 +1);
//   console.log(rINT);
// }
//random INT FUNCT V2
// end
// random int function
function getRandomInt(min, max) {
  var rINT = Math.floor(Math.random() * (max - min + 1)) + min;
  pokeURLCom2 = pokeURL + rINT;


  $.getJSON(pokeURLCom2, function(data) {


    var pokeURLImg = data.sprites.front_default;
    $("#poke-ball").attr("src", pokeURLImg);
    $("#poke-ball").addClass("ImgLarge")





    var pokeName = data.name;
    var pokeID = data.id;
    var pokeName = data.name;
    const pokeType1 = data.types[0].type.name;


    if (data.types.length == 1) {
     pokeType2 = ""
    }
    else {
      var pokeType2 = data.types[1].type.name;
      console.log(pokeType2);
    }


    $("#results").html(pokeName + "<p>National_ID:  " + pokeID +"</p>");
    $("#poke-ball").attr("src", pokeURLImg)
    $('#poke-ball').addClass("ImgLarge")
    $("#type1").html(pokeType1);
    $("#type2").html(pokeType2);





  })

}
//rand INT FUNCTION end



// Recall data from user input pokeID num value. START//
function pokeSubmit() {
  var param = document.getElementById("pokeID").value;
  var pokeURLCom = pokeURL + param
  $("#poke-ball").attr('hidden',true)


  $.getJSON(pokeURLCom, function(data) {

    var pokeID = data.id;
    var pokeName = data.name;
    var pokeType1 = data.types[0].type.name;
    var pokeURLImg = data.sprites.front_default;

    //aiming for faster img load w/ positioning


    $("#poke-ball").attr("src", pokeURLImg);

    var typeNum = data.types.length;

    if (typeNum == 1) {
      var pokeType2 = ""


    }else {
      var pokeType2 = data.types[1].type.name;
    }

    // console.log(pokeURLImg);
    // console.log("ID..." + pokeID);
    // console.log(pokeName);
    console.log(pokeType1);
    console.log(pokeType2);


    $("#results").html(pokeName);
    $("#type1").html(pokeType1);
    $("#type2").html(pokeType2);

    $("#poke-ball").attr('hidden',true);
    $('#poke-ball').addClass("ImgLarge");

    return pokeName



  });

}
// END
