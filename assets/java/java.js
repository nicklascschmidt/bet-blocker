
    var startDate = "2017-02-13";
    var endDate = "2017-02-13";
    var apiKey = "bdca922fc5166acd71413f149462c1a2a01766f862a8cbcb93de2b1cd79df47d";
    var oddsURL = "https://apifootball.com/api/?action=get_odds&from=" + startDate + "&to=" + endDate + "&APIkey=" + apiKey;
    var headToHeadURL = "https://apifootball.com/api/?action=get_H2H&firstTeam=Chelsea&secondTeam=Arsenal&APIkey=" + apiKey;

    var testURL = "https://apifootball.com/api/?action=get_odds&APIkey=" + apiKey + "&match_id=297289";

    var myEventID = "25861179737";
    var myLeagueID = "20336";
    var mashapeURL = "https://bettingodds-bettingoddsapi-v1.p.mashape.com/events/2018-07-12";
    var mashapeEventURL = "https://bettingodds-bettingoddsapi-v1.p.mashape.com/event/" + myEventID;
    var mashapeLeagueURL = "https://bettingodds-bettingoddsapi-v1.p.mashape.com/events/league/" + myLeagueID;

    var gameArray = [];
    var gameArrayObjects = [];
    var gameArrayFinal = [];
    var foundGame = null;


    var result;
    function pickRandomProperty(obj) {
        var count = 0;
        for (var prop in obj)
            if (Math.random() < 1/++count)
            result = prop;
        return result;
    }

    function pickProperty(obj) {

    }

    $.ajax({
      url: mashapeLeagueURL,
      method: "GET",
      headers: {
        "X-Mashape-Key": "WQSDOtC0d2msh4drUXOK9uJAyRf8p1CBBJRjsnvXZGXdLnmhAi"
      }
    }).then(function(response) {
/*
        pickRandomProperty(response);


        console.log(result);
        console.log(response[result]);
*/
        console.log(response);
        console.log(response);
        console.log(Object.values(response));
        var responseArray = Object.values(response);



        for (var n=0; n < responseArray.length; n++) {

            var gameText = responseArray[n].away.name + responseArray[n].home.name + responseArray[n].datetime.value;


            for (var m=-1; m < gameArray.length; m++) {
                if (gameText === gameArray[m]) {
                    console.log("duplicate found");
                    foundGame = true;
                }
            }

            if (foundGame !== true) {
                gameArray.push(gameText);
                gameArrayObjects.push(responseArray[n]);
            }
            foundGame = null;

        }
        console.log(gameArrayObjects);


        for (var n=0; n < 3; n++) {
            var randomNum = Math.floor(Math.random() * gameArrayObjects.length);
            console.log(randomNum);
            gameArrayFinal.push(gameArrayObjects[randomNum]);
        }
        console.log(gameArrayFinal);





/*
        for (var n=0; n < 3; n++) {
            var gameText = responseArray[n].away.name + responseArray[n].home.name + responseArray[n].datetime.value;
            

            if (foundGame !== null) {
                
            }
            

            var foundGame = null;
            for ____ {
                if (foundGame!== null ) {
                    foundGame = ___
                }
            }

            AskedQuestionsKeys.indexOf(long string of game)
            if game = -1 then it doesn't exist so DO IT



            
            console.log(responseArray[n].away.name + " vs. " + responseArray[n].home.name + " at " + responseArray[n].datetime.value + " and the ID is " + responseArray[n].id);
            var ;
            if (game[n] === game2||game1 === game3) {
                if( game2 === game1||game2 === game3) {
                    if(game3 === game1 || game3 === game2){
                        getGames();
                    }
                }                
            } else{
                return;
            }
            
        }*/

//        console.log(response["25870692671"]);
  //      console.log(response["25862364303"]);
        

    });


