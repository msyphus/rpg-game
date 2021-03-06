var gato = {
    name: "Gato",
    image: "assets/images/gato.JPG",
    bg: "assets/images/gatoBg.jpg",
    health: 110,
    attack: 10,
    powerGain: 10,
    counter: 18,
    quote: "Welcome to my jungle; I've got fun and games!",
    attackQuote: "Benção!"
}

var rock = {
    name: "Rock Norris",
    image: "assets/images/karate.jpg",
    bg: "assets/images/karateBg.jpg",
    health: 120,
    attack: 12,
    powerGain: 12,
    counter: 20,
    quote: "Seriously?! Do I look like a guy you'd want to mess with?",
    attackQuote: "My dad is Chuck!"
}

var crane = {
    name: "Crane",
    image: "assets/images/crane.jpg",
    bg: "assets/images/craneBg1.jpg",
    health: 130,
    attack: 15,
    powerGain: 15,
    counter: 25,
    quote: "Forget the Karate Kid, I invented the crane kick!",
    attackQuote: "I can beat you standing on one foot!"
}

var kama = {
    name: "Kamaitachi",
    image: "assets/images/ninja.jpg",
    bg: "assets/images/ninjaBg.jpg",
    health: 100,
    attack: 20,
    powerGain: 20,
    counter: 15,
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
        $("body").css("background-image", `url(${playerObj.bg})`);
        $("#userChar").text(playerObj.name);
        $("#userImg").attr("src", playerObj.image);
        $("#userImg").show();
        $("#userQuote").text(playerObj.quote);
        $("#userHealth").text(`Health: ${playerObj.health}`);
        userChosen = true;
        $(this).on("click", false);
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
        $("#userFightInfo").text("");
        $("#chalFightInfo").text("");
        playerObj.health -= cpuObj.counter;
        $("#userHealth").text(`Health: ${playerObj.health}`);
        $("#userFightInfo").append(playerObj.attackQuote + "<br>" + `${cpuObj.name} loses ${playerObj.attack} health points.`);
        cpuObj.health -= playerObj.attack;
        $("#chalHealth").text(`Health: ${cpuObj.health}`);
        $("#chalFightInfo").append(cpuObj.attackQuote + "<br>" + `${playerObj.name} loses ${cpuObj.counter} health points.`)
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
                $("#userFightInfo").text("");
                $("#attack").hide();
                $("#startGame").show();
                $("#userFightInfo").append("You Win!" + "<br>" + "Select New Challenger");
                $("#chalFightInfo").text("Vanquished!");
                $(".opponentCard").off("click", false);
                cpuChosen = false;
            } else {
                $("#userFightInfo").text("");
                $("#attack").hide();
                $("#tryAgain").show();
                $("#userFightInfo").append("You are the Grand Champion!" + "<br>" + "Fight Again!")
                $("#chalFightInfo").text("Vanquished!");
            }
        }
        if(cpuObj.health <= 0 && playerObj.health <= 0) {
            $("#attack").hide();
            $("#tryAgain").show();
            $("#startGame").hide();
            $("#userFightInfo").text("Double KO!");
            $("#chalFightInfo").text("Double KO!");
            $(".opponentCard").on("click", false);
           
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