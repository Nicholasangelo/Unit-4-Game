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

    var chosenRival;
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
        
// create click event for USER HERO CHOICE
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
    $("#heroTwo").click(function () {
        var userChoice = heroOne.name;
        console.log("You've selected: " + userChoice);
        $("#chooseHero").hide();
        $("#chooseRival").attr("visibility", "visible");
        $("#heroOne").hide();
        $("#heroThree").hide();
        $("#heroFour").hide();
        
        $("#rivalOne").show();
        $("#rivalThree").show();
        $("#rivalFour").show();
    });
    $("#heroThree").click(function () {
        var userChoice = heroOne.name;
        console.log("You've selected: " + userChoice);
        $("#chooseHero").hide();
        $("#chooseRival").attr("visibility", "visible");
        $("#heroTwo").hide();
        $("#heroOne").hide();
        $("#heroFour").hide();
        
        $("#rivalTwo").show();
        $("#rivalOne").show();
        $("#rivalFour").show();
    });
    $("#heroFour").click(function () {
        var userChoice = heroOne.name;
        console.log("You've selected: " + userChoice);
        $("#chooseHero").hide();
        $("#chooseRival").attr("visibility", "visible");
        $("#heroTwo").hide();
        $("#heroThree").hide();
        $("#heroOne").hide();
        
        $("#rivalTwo").show();
        $("#rivalThree").show();
        $("#rivalOne").show();
    });
    // CLICK EVENTS FOR RIVAL CHOICE
    $("#rivalOne").click(function () {
        var chosenRival = rivalOne.name;
        console.log("You've selected: " + chosenRival);
        $("#rivalTwo").hide();
        $("#rivalThree").hide();
        $("#rivalFour").hide();
    });
    $("#rivalTwo").click(function () {
        var chosenRival = rivalOne.name;
        console.log("You've selected: " + chosenRival);
        $("#rivalOne").hide();
        $("#rivalThree").hide();
        $("#rivalFour").hide();
    });
    $("#rivalThree").click(function () {
        var chosenRival = rivalOne.name;
        console.log("You've selected: " + chosenRival);
        $("#rivalTwo").hide();
        $("#rivalOne").hide();
        $("#rivalFour").hide();
    });
    $("#rivalFour").click(function () {
        var chosenRival = rivalOne.name;
        console.log("You've selected: " + chosenRival);
        $("#rivalTwo").hide();
        $("#rivalThree").hide();
        $("#rivalOne").hide();
    });
// });





    });

