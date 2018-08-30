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

    // Properties to control states

    // Determines if player character and opponent character are selected
    pcharSelected: false,
    oppSelected: false,

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

    // Handles clicks on character portraits
    charClicked(char) {
        let clicked = $(char);
            
        if (!this.pcharSelected) {
            // Select this character as the player character
            // TODO: write code to store info of selected character as player
            this.pcharSelected = true;

            // Mark opponents and move to opponent select area
            let opponents = clicked.siblings();
            opponents.addClass("opponent");
            $("#opponentSelect").append(opponents);
            
        } else if(!this.oppSelected) {
            if ( clicked.hasClass("opponent") ) {
                // Select this character as the opponent

                // Pick as current opponent
                // TODO: write code to store info of selected character as opponent
                console.log("You picked:");
                console.log(clicked);
                this.oppSelected = true;
            }
        }
    }

}

$(document).ready( function() {
    game.startGame();
});