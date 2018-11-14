heroes = [];
var userChoice;

var heroes = [
    heroOne = {
        name: "Hero one",
        weapon: "Laser",
        HP: "115",
        attackPower: "10",
        CounterAp: "9",
    },
    heroTwo = {
        name: "Hero Two",
        weapon: "Mits",
        HP: "200",
        attackPower: "6",
        CounterAp: "5",
    },
    heroThree = {
        name: "Hero Three",
        weapon: "Sword",
        HP: "155",
        attackPower: "8",
        CounterAp: "6",
    },
    heroFour = {
        name: "Hero Four",
        weapon: "Chain",
        HP: "130",
        attackPower: "7",
        CounterAp: "8",
    }]

    var chosenEnemy;
    var enemyGallery = [];


// start some business
    $(document).ready(function () {
// set hero HP
        $("#heroOneHp").append(heroOne.HP);
        $("#heroTwoHp").append(heroTwo.HP);
        $("#heroThreeHp").append(heroThree.HP);
        $("#heroFourHp").append(heroFour.HP);

        $("#rivalOne").hide();
        $("#rivalTwo").hide();
        $("#rivalThree").hide();
        $("#rivalFour").hide();
        
// create click event in which user chooses one object from an array
    $("#heroOne").click(function () {
        var userChoice = heroOne.name;
        console.log("You've selected: " + userChoice);
        $("#chooseHero").hide();
        $("#chooseRival").attr("visibility", "visible");
        $("#heroTwo").hide();
        $("#heroThree").hide();
        $("#heroFour").hide();
        
        $("#rivalTwo").show();
        $("#rivalThree").show();
        $("#rivalFour").show();
        
    
    });
// });





    });

