var game = {

    // Data for each of the usable characters in the game, including name, picture, and combat values
    characters: [
        {
            id: 'vader',
            name: 'Darth Vader',
            img: 'Darth_Vader.jpg',
            atkPower: 20,
            counterPower: 20,
            hp: 100
        },
        {
            id: 'palpatine',
            name: 'Emperor Palpatine',
            img: 'Emperor_Palpatine.jpg',
            atkPower: 20,
            counterPower: 20,
            hp: 100
        },
        {
            id: 'maul',
            name: 'Darth Maul',
            img: 'Darth_Maul.jpg',
            atkPower: 20,
            counterPower: 20,
            hp: 100
        },
        {
            id: 'revan',
            name: 'Darth Revan',
            img: 'Darth_Revan.jpg',
            atkPower: 20,
            counterPower: 20,
            hp: 100
        }
    ],

    // Code executed at launch - sets up initial game state
    startGame() {
        // Create characters from data and display choices in #characterSelect zone

        for (let i=0; i<this.characters.length; ++i) {
            $("#characterSelect").append(this.createCharDiv(this.characters[i]));
        }

    },

    // Creates a new character card with passed object info using JQuery and returns it
    createCharDiv(charObj) {
        var newChar = $("<div>");
        newChar.addClass("charCard");

        newChar.append("<div>"+charObj.name+"</div>");
        newChar.append("<img src='assets/images/"+charObj.img+"' class='charCardImg'>");
        newChar.append("<div>A: "+charObj.atkPower+" C: "+charObj.counterPower+" HP: "+charObj.hp+"</div>")
        newChar.on("click", function() {
            game.charClicked(this);
        });

        return newChar;
    },

    charClicked(char) {
        let clicked = $(char);
        $("#opponentSelect").append(clicked.siblings());
    }
}

$(document).ready( function() {
    game.startGame();
});