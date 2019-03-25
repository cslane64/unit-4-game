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

var displayVessels = function(charObj, areaRender) {
    if (areaRender === "#piers-section") {
        $(areaRender).empty();
        for (var key in charObj) {
            if(charObj.hasOwnProperty(key)) {
                renderOne(charObj[key], areaRender, "");
            }
        }
    }
    if (areaRender === "#hero-arena") {
        renderOne(charObj, areaRender, "");
    }
    if (areaRender === "#enemy-arena") {
        for (i=0; i < charObj.length; i++)
        renderOne(charObj[i], areaRender, "enemy");
    } 
    

$(document).on("click", ".enemy", function() {
    var name = ($(this).attr("data-name"));
    //alert("Handler for enemy on click called");
   
    
    if($("#defender-arena").children().length === 0) {
        console.log("this is true");
        displayVessels(name, "#defender-arena");
        console.log((this) + name);
        $(this).hide();
        
    }
    if (areaRender === "#defender-arena") {
        console.log("First if statement is true")
        $(areaRender).empty();
        for (i=0; i < enemies.length; i++) {
            if(enemies[i].name === charObj) {
                console.log("Second if statement is true")
        renderOne(enemies[i], areaRender, "defender");
            } else {
                console.log("This works");
            }
        }
    }     

});
    
}



displayVessels(vessel, "#piers-section");

$(document).on("click", ".vessels", function(){
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
