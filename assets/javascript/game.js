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
    
    var hero;
    var villan;
    var enemies = [];
    var opponent;
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
    else if (vesStatus === "defender") {
        Opponent = vessels;
        console.log(opponent);
        $(vesDiv).addClass("opponent");

    }
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
    areaRender = "#defender-arena";
    var text = areaRender;
    if($("#defender-arena").children().length === 0) {
        console.log("this is true");
        displayVessels(name, "#defender-arena");
        console.log((this) + name);
        $(this).hide();
        
    }
    if (areaRender === "#defender-arena") {
        console.log("First if statement is true")
        $(areaRender).empty();
        console.log(text);
        console.log(enemies);
        for (var key in vesObj)
        console.log(vesObj[i]); {
            if(vesObj.hasOwnProperty(key)) {
                renderOne(vesObj[key], areaRender, "opponent");
                console.log("Second if statement is true")
        
            }
                
                
             else {
                console.log("For Loop has no match???");
            }
        }
    }     

    
    

});
    
}



displayVessels(vessel, "#piers-section");

$('.vessels').on("click", function(){
    var name = $(this).attr("data-name");
    
    // console.log (name);

    if (!hero){
        hero = vessel[name];
       for (var key in vessel) {
            if (key !== name) {
                enemies.push(vessel[key]);
            } 
       }
       
    } 
    //console.log(enemies);

    $("#piers-section").hide()

    displayVessels(hero, "#hero-arena");
    displayVessels(enemies, "#enemy-arena");
    

})
});
// attack button portion of the game

$("#butt").on("click", function() {
    alert("The button has been pushed");

    // Get the health points for the hero and place in a variable

    // Get the health points from the opponent and place in a variable
    oppHealth = $("#vessel.health").text("")

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



    


})