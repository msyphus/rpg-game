var gato = {
    name: "Gato",
    image: "assets/images/gato.JPG",
    health: 120,
    attack: 10,
    powerGain: 10,
    counter: 15,
    quote: "Welcome to my jungle; I've got fun and games!",
    attackQuote: "Benção!"
}

var rock = {
    name: "Rock Norris",
    image: "assets/images/karate.jpg",
    health: 130,
    attack: 15,
    powerGain: 15,
    counter: 20,
    quote: "Seriously?! Do I look like a guy you'd want to mess with?",
    attackQuote: "My dad is Chuck!"
}

var crane = {
    name: "Crane",
    image: "assets/images/crane.jpg",
    health: 150,
    attack: 25,
    powerGain: 25,
    counter: 25,
    quote: "Forget the Karate Kid, I invented the crane kick!",
    attackQuote: "I can beat you standing on one foot!"
}

var kama = {
    name: "Kamaitachi",
    image: "assets/images/ninja.jpg",
    health: 100,
    attack: 6,
    powerGain: 6,
    counter: 10,
    quote: "Did you see that?...No?...My point exactly!",
    attackQuote: "Ippon!"
}

var player = "";
var cpu = "";
var playerObj;
var cpuObj;
var userChosen = false;
var cpuChosen = false;
var charDead = [];

$(document).ready(function() {
    $(this).on("click", ".opponentCard", function(event) {
        if(userChosen === false) {
        
        player = event.currentTarget.attributes.value.value;
        if(player === "kama") {
            playerObj = kama;
        }
        if(player === "crane") {
            playerObj = crane;
        }
        if(player === "rock") {
            playerObj = rock;
        }
        if(player === "gato") {
            playerObj = gato;
        }
        $("#userChar").text(playerObj.name);
        $("#userImg").attr("src", playerObj.image);
        $("#userImg").show();
        $("#userQuote").text(playerObj.quote);
        $("#userHealth").text(`Health: ${playerObj.health}`);
        userChosen = true;
        $(this).on("click", false); //disable clicking on what has been selected
        $(this).attr("class","disabled");
    } else {
        cpu = event.currentTarget.attributes.value.value;
        if(cpu === "kama") {
            cpuObj = kama;
        }
        if(cpu === "crane") {
            cpuObj = crane;
        }
        if(cpu  === "rock") {
            cpuObj = rock;
        }
        if(cpu === "gato") {
            cpuObj = gato;
        }
        $("#chalChar").text(cpuObj.name);
        $("#chalImg").attr("src", cpuObj.image);
        $("#chalImg").show();
        $("#chalQuote").text(cpuObj.quote);
        $("#chalHealth").text(`Health: ${cpuObj.health}`);
        $("#userFightInfo").text("");
        $("#chalFightInfo").text("");
        cpuChosen = true;
    }
    });

    function newGame() {
        if(cpuChosen === true) {
            $(".opponentCard").on("click", false);
            $("#attack").show();
            $("#startGame").hide();
        }
    };

    $("#startGame").on("click", function() {
        newGame();
    });
    
    function fight() {
        playerObj.health -= cpuObj.counter;
        $("#userHealth").text(`Health: ${playerObj.health}`);
        cpuObj.health -= playerObj.attack;
        $("#chalHealth").text(`Health: ${cpuObj.health}`);
        playerObj.attack = playerObj.attack + playerObj.powerGain;
        if(playerObj.health <= 0) {
            $("#attack").hide();
            $("#tryAgain").show();
            $("#userFightInfo").text("You Lose!");
            $("#chalFightInfo").text("Champion!");
        }
        if(cpuObj.health <= 0) {
            charDead.push(cpu);
            charDisable();
            if(charDead.length < 3) {
                $("#attack").hide();
                $("#startGame").show();
                $("#userFightInfo").append("You Win!" + "<br>" + "Select New Challenger");
                $("#chalFightInfo").text("Vanquished!");
                $(".opponentCard").off("click", false);
            } else {
                $("#attack").hide();
                $("#tryAgain").show();
                $("#userFightInfo").append("You are the Grand Champion!" + "<br>" + "Fight Again!")
                $("#chalFightInfo").text("Vanquished!");
            }
        }
    };

    $("#attack").on("click", function() {
        fight();
    });

    function retry () {
        location.reload(true);
    }
    
    $("#tryAgain").on("click", function () {
        retry();
    });

    function charDisable() {
        if(charDead.includes("kama") === true) {
            $("div[value|='kama']").attr("class", "disabled");
        }
        if(charDead.includes("crane") === true) {
            $("div[value|='crane']").attr("class", "disabled");
        }
        if(charDead.includes("rock") === true) {
            $("div[value|='rock']").attr("class", "disabled");
        }
        if(charDead.includes("gato") === true) {
            $("div[value|='gato']").attr("class", "disabled");
        }
    }
})

//Choose opponent by clicking picture, opponent hidden from lineup and displays in challengerWindow

//Click attack button = user damages challenger (challenger loses health points).  Update points display and fight dialogue
//opponent automatically counter attacks damaging user. Display points and fight dialogue
//user attack starts at x then increases by x every attack -- user does not counterattack.  opponent only counterattacks
//counterattacks do not change value

//If challenger health <=0: challengerWindow empties, challenger displayed 50% opacity or greyscale in lineup. Victory message
//in fight dialogue.  User health does not change. Choose another opponent, etc. until all opponents defeated = Champion!
//If user health <=0: game over message in fight dialogue, userWindow 50% opacity or greyscale

