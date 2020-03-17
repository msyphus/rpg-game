var gato = {
    name: "Gato",
    health: 120,
    attack: 10,
    counter: 15,
    quote: "Welcome to my jungle; I've got fun and games!",
    attackQuote: "Benção!"
}

var rock = {
    name: "Rock Norris",
    health: 130,
    attack: 15,
    counter: 20,
    quote: "Seriously?! Do I look like a guy you'd want to mess with?",
    attackQuote: "My dad is Chuck!"
}

var crane = {
    name: "Crane",
    health: 150,
    attack: 25,
    counter: 25,
    quote: "Forget the Karate Kid, I invented the crane kick!",
    attackQuote: "I can beat you standing on one foot!"
}

var kama = {
    name: "Kamaitachi",
    health: 100,
    attack: 6,
    counter: 10,
    quote: "Did you see that?...No?...My point exactly!",
    attackQuote: "Ippon!"
}

//All character displayed in opponentLineUp
//Choose character by clicking picture
//Chosen character hidden from opponentLineUp, displays in userWindow
//Choose opponent by clicking picture, opponent hidden from lineup and displays in challengerWindow

//Click attack button = user damages challenger (challenger loses health points).  Update points display and fight dialogue
//opponent automatically counter attacks damaging user. Display points and fight dialogue
//user attack starts at x then increases by x every attack -- user does not counterattack.  opponent only counterattacks
//counterattacks do not change value

//If challenger health <=0: challengerWindow empties, challenger displayed 50% opacity or greyscale in lineup. Victory message
//in fight dialogue.  User health does not change. Choose another opponent, etc. until all opponents defeated = Champion!
//If user health <=0: game over message in fight dialogue, userWindow 50% opacity or greyscale

