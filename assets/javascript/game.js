$(document).ready(function() {
    var vessels = {
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

var renderOne = function (vessels, renderArea, vesStatus) {
    var vesDiv = $("<div class='vessels' data-name='" + vessels.name + "'>");
    var vesName = $("<div class='vessels-name'>").text(vessels.name);
    var vesImage = $("<img alt='image' class='vessels-image'>").attr("src", vessels.imgSource);
    var vesHealth = $("<div class='vessels-health'>").text("Health Points " + vessels.healthPoints);
    vesDiv.append(vesName).append(vesImage).append(vesHealth);
    $(renderArea).append(vesDiv);

    if (vesStatus === "enemy") {
        $(vesDiv).addClass("enemy");
    }
    else if (vesStatus === "defender") {
        Opponent = character
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
        renderOne(charObj[i], "#enemy-arena", "enemy");
    } 

$(document).on("click", ".enemy", function() {
    var name = $(this).attr("data-name");

    if($("#defender-arena").children().length === 0) {
        displayVessels(name, "#defender-arena");
        $(this).hide();
    }

    if (areaRender === "#defender-arena") {
        $(areaRender).empty();
        for (i=0; i < charObj.length; i++) {
            if(enemies[i].name === charObj) {
        renderOne(charObj[i], areaRender, "defender");
            }
        }
    } 

});
    
}



displayVessels(vessels, "#piers-section");

$(document).on("click", ".vessels", function(){
    var name = $(this).attr("data-name");

   
    console.log (hero);

    if (!hero){
        hero = vessels[name];
       for (var key in vessels) {
            if (key !== name) {
                enemies.push(vessels[key]);
            } 
       }
       
    } 
    console.log(enemies);

    $("#piers-section").hide()

    displayVessels(hero, "#hero-arena");
    displayVessels(enemies, "#enemy-arena");


})
});
