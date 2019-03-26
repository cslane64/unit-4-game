$(document).ready(function() {
    var vessel = {
        "Submarine": {
            name: "Submarine",
            healthPoints: 150,
            attackPower: 8,
            counterAttack : 5,
            imgSource: "assets/images/submarine.jpg"
        },
        "Carrier": {
            name: "Carrier",
            healthPoints: 150,
            attackPower: 8,
            counterAttack : 5,
            imgSource: "assets/images/carrier.jpg"
        },
        "Frigate": {
            name: "Frigate",
            healthPoints: 150,
            attackPower: 8,
            counterAttack : 5,
            imgSource: "assets/images/frigate.jpg"
        },
        "Battleship": {
            name: "Battleship",
            healthPoints: 150,
            attackPower: 8,
            counterAttack : 5,
            imgSource: "assets/images/battleship.jpeg"
        }

    };
    var wins;
    var heroSelected;
    var enemies = [];
    var enemySelected;
    var attackCount;
    //var opponent; 
// This will render the objects for each vessel to the page
var renderOne = function (vessels, renderArea, vesStatus) {
    var vesDiv = $("<div class='vessels' data-name='" + vessels.name + "'>");
    var vesName = $("<div class='vessels-name'>").text(vessels.name);
    var vesImage = $("<img alt='image' class='vessels-image'>").attr("src", vessels.imgSource);
    var vesHealth = $("<div class='vessels-health'>").text("Health Points " + vessels.healthPoints);
    vesDiv.append(vesName).append(vesImage).append(vesHealth);
    $(renderArea).append(vesDiv);

//adds a class based on the status of the vessel
    if (vesStatus === "enemy") {
        $(vesDiv).addClass("enemy");
    }
    else if (vesStatus === "opponent") {
        var enemySelected = vessels;
        $(vesDiv).addClass("opponent");
    }
    console.log(enemySelected);
};

var displayVessels = function(vesObj, areaRender) {
    if (areaRender === "#piers-section") {
        $(areaRender).empty();
        for (var key in vesObj) {
            if(vesObj.hasOwnProperty(key)) {
                renderOne(vesObj[key], areaRender, "");
            }
        }
    }
    if (areaRender === "#hero-arena") {
        renderOne(vesObj, areaRender, "");
    }
    if (areaRender === "#enemy-arena") {
        for (i=0; i < vesObj.length; i++)
        renderOne(vesObj[i], areaRender, "enemy");
    } 
    

$('.enemy').on("click", function() {
    var name = ($(this).attr("data-name"));
    enemySelected = name;
    console.log(enemySelected.healthPoints);
      areaRender = "#defender-arena";
    if($("#defender-arena").children().length === 0) {
        console.log("1st if works")
        displayVessels(enemySelected, "#defender-arena");
        $(this).hide();
    }
    if (areaRender === "#defender-arena") {
        $(areaRender).empty();
        for (var i = 0; i < enemies.length; i++){
            if (enemies[i].name === vesObj) {
                //console.log(vesObj);
                renderOne(enemies[i], areaRender, "opponent");
            }
        }

        /*for (var key in vesObj);
        { if (vesObj.hasOwnProperty(key)) {
            renderOne(vesObj[key], areaRender, "opponent");
            console.log("Second if statement is true")
        }
        else {
            console.log("For Loop has no match???");
            }
        }*/
    }     

    if (areaRender === "damage-by-player") {
        $("#defender-arena").empty();
        renderOne(vesObj, "#defender-arena", "opponent");

    }
    if (areaRender === "damage-by-enemy") {
        $("#hero-arena").empty();
        renderOne(vesObj, "#hero-arena", "");

    }
    if (areaRender === "Loser") {
        $("#defender-arena").empty();
    }
    

});
    
}

displayVessels(vessel, "#piers-section");

$('.vessels').on("click", function(){
    var name = $(this).attr("data-name");
    console.log(enemySelected);
    //vesSelect = name;
    //console.log(vesSelect);
    
    // console.log (name);

    if (!heroSelected){
        heroSelected = vessel[name];
       for (var key in vessel) {
            if (key !== name) {
                enemies.push(vessel[key]);
            } 
       }
       
    } 
    //console.log(enemies);

    $("#piers-section").hide()

    displayVessels(heroSelected, "#hero-arena");
    displayVessels(enemies, "#enemy-arena");
    displayVessels(enemySelected, "#opponent");
    
    
});
//});
// attack button portion of the game

$("#butt").on("click", function() {
    console.log("button clicked")
 
    if ($("#defender-arena").children().length !== 0) {
        //console.log(enemySelected.keys(config))

       (enemySelected.healthPoints) -= (heroSelected.attackPower * attackCount);
        alert(enemySelected.healthPoints);
       

        if (enemySelected.healthPoints > 0){
            displayVessels(enemySelected, "damage-by-player");

            heroSelected.healthPoints -= enemySelected.counterAttack;

            displayVessels(heroSelected, "damage-by-enemy");

        }
    }

    else {

        displayVessels(enemySelected, "Loser");
        wins++;
        if (wins >= 3){
            alert("Winner Winner, Chicken Dinner");
        }
    }
    attackCount++;

    // Get the health points for the hero and place in a variable
    //heroHealth = $("#vessel-health").text();
    //console.log(heroHealth)
    // Get the health points from the opponent and place in a variable
    //oppHealth = $("#vessel.health").text("")

    //check to be sure that the opponent health points are > 0

    // Begin attack
 
    // subtract hero attack points from opponents health points

    // subtract opponents counter-attack points from hero's health points

    // add base points to hero's attack points

    // check hero health points are > 0 update screen health point  variabes $ displays

    // If hero points < 0 the display a message that YOU LOST

    // check that opponent health points are > 0 update health points variables & display

    // if opponent points are < 0 then display "You defeated opponent" 

    // Select new opponent



    




});
});