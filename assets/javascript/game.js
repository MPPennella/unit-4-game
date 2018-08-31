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
    // Possible values "charSelect", "oppSelect", "battleMode"
    state: "",

    // Properties to store combat data
    playerBaseAtk: null,
    playerCurrentAtk: null,
    playerHP: null,

    opponentCounterAtk: null,
    opponentHP: null,

    // Determines if player character and opponent character are selected
    // pcharSelected: false,
    // oppSelected: false,

    // Code executed at launch - sets up initial game state
    startGame() {
        // Set to "charSelect" state
        this.state = "charSelect";

        // Create characters from data and display choices in #characterSelect zone

        for (let i=0; i<this.characters.length; ++i) {
            $("#characterSelect").append(this.createCharDiv(this.characters[i]));
        }

        // Attach listener to atkBtn
        $("#atkBtn").on("click", function() {
           game.attackClicked();
        });
    },

    // Creates a new character card with passed object info using JQuery and returns it
    createCharDiv(charObj) {
        var newChar = $("<div>");
        newChar.addClass("charCard");

        newChar.append("<div class='name' value='"+charObj.id+"'>"+charObj.name+"</div>");
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
            
        if (this.state==="charSelect") {
            // Select this character as the player character
            // TODO: write code to store info of selected character as player
            let id = clicked.children(".name").attr("value");
            let playerChar = this.getCharFromID(id);

            // Set player combat data from selection
            this.playerCurrentAtk = this.playerBaseAtk = playerChar.atkPower;
            this.playerHP = playerChar.hp;

            console.log("Attack: "+this.playerCurrentAtk);
            console.log("Increment: "+this.playerBaseAtk);
            console.log("HP: "+this.playerHP);


            // this.pcharSelected = true;
            this.state = "oppSelect";

            // Mark opponents and move to opponent select area
            let opponents = clicked.siblings();
            opponents.addClass("opponent");
            $("#opponentSelect").append(opponents);
            
        } else if(this.state==="oppSelect") {
            if ( clicked.hasClass("opponent") ) {
                // Select this character as the opponent

                // Pick as current opponent
                $("#battleZone").append(clicked);

                // TODO: write code to store info of selected character as opponent
                console.log("You picked:");
                console.log(clicked);

                // this.oppSelected = true;
                this.state = "battleMode";
            }
        }
    },

    // Handles clicks on #atkBtn
    attackClicked() {
        if (this.state==="battleMode") {
            console.log("Attack");

            // Reduce character HP by opponent's counter value

            // Reduce opponent HP by character's current attack value

            // Increase character's current attack by base attack value

            // if (playerHP == 0) DEFEAT

            // if (opponentHP == 0) Win Match -> remove current opponent
            // if (opponentsRemaining) pick next opponent
            // else WIN GAME
        }
    },

    // Returns character object based on id string
    getCharFromID(idStr) {
        for (let i=0; i<this.characters.length; ++i) {
            if (this.characters[i].id === idStr) return this.characters[i];
        }
    }

}

$(document).ready( function() {
    game.startGame();
});