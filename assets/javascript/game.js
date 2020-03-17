var gato = {
    health: 120,
    attack: 10,
    counter: 15
}

var rock = {
    health: 130,
    attack: 15,
    counter: 20
}

var crane = {
    health: 150,
    attack: 25,
    counter: 25
}

var kama = {
    health: 100,
    attack: 6,
    counter: 10
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

