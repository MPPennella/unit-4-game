var game = {

    // Data for each of the usable characters in the game, including name, picture, and combat values
    characters: [
        {
            id: 'vader',
            name: 'Darth Vader',
            img: 'Darth_Vader.jpg',
            atkPower: 15,
            counterPower: 15,
            hp: 200
        },
        {
            id: 'palpatine',
            name: 'Emperor Palpatine',
            img: 'Emperor_Palpatine.jpg',
            atkPower: 50,
            counterPower: 30,
            hp: 100
        },
        {
            id: 'maul',
            name: 'Darth Maul',
            img: 'Darth_Maul.jpg',
            atkPower: 30,
            counterPower: 20,
            hp: 140
        },
        {
            id: 'revan',
            name: 'Darth Revan',
            img: 'Darth_Revan.jpg',
            atkPower: 20,
            counterPower: 30,
            hp: 160
        }
    ],

    // Properties to control states
    // Possible values "charSelect", "oppSelect", "battleMode", "endOfGame"
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
        this.setupCharCards();
        
        // Attach listener to atkBtn
        $("#atkBtn").on("click", function() {
           game.attackClicked();
        });
    },

    // Ran at end of game, creates Reset button to begin game again
    endGame() {
        this.state = "endOfGame";

        var resetButton = $("<button>Reset</button>");

        resetButton.on("click", function() {
            // Empty all game zones of any remaining content
            $("#characterSelect").empty();
            $("#opponentSelect").empty();
            $("#battleZone").empty();
            $("#combatLog").empty();

            // Recreate character cards and set game to character selection
            game.setupCharCards();
            game.state = "charSelect";

            // Remove reset button
            $(this).remove();

        });

        resetButton.insertAfter($("#atkBtn"));
    },

    // Uses the data stored in characters array to populate #characterSelect with available character choices
    setupCharCards() {
        for (let i=0; i<this.characters.length; ++i) {
            $("#characterSelect").append(this.createCharDiv(this.characters[i]));
        }
    },

    // Creates a new character card with passed object info using JQuery and returns it
    createCharDiv(charObj) {
        var newChar = $("<div>");
        newChar.addClass("charCard");

        newChar.append("<div class='name' value='"+charObj.id+"'>"+charObj.name+"</div>");
        newChar.append("<img src='assets/images/"+charObj.img+"' class='charCardImg'>");
        newChar.append("<div>Atk: <span class='atk'>"+charObj.atkPower+"</span>&emsp;Ctr: "+charObj.counterPower+"&emsp;HP: <span class='hp'>"+charObj.hp+"</span></div>")
        newChar.on("click", function() {
            game.charClicked(this);
        });

        return newChar;
    },

    // Handles clicks on character portraits
    charClicked(char) {
        let clicked = $(char);
        let id = clicked.children(".name").attr("value");
            
        if (this.state==="charSelect") {
            // Select this character as the player character
            // TODO: write code to store info of selected character as player
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
                let oppChar = this.getCharFromID(id);

                // Set opponent combat data from selection
                this.opponentCounterAtk = oppChar.counterPower;
                this.opponentHP = oppChar.hp;

                console.log("Attack: "+this.opponentCounterAtk);
                console.log("HP: "+this.opponentHP);

                // Pick as current opponent
                $("#battleZone").append(clicked);

                // this.oppSelected = true;
                this.state = "battleMode";
            }
        }
    },

    // Handles clicks on #atkBtn
    attackClicked() {
        if (this.state==="battleMode") {
            // Reduce character HP by opponent's counter value
            this.playerHP -= this.opponentCounterAtk;
            // Reduce opponent HP by character's current attack value
            this.opponentHP -= this.playerCurrentAtk;

            // Write damage done to #combatLog
            $("#combatLog").text("You attacked for "+this.playerCurrentAtk+" damage, "+"OPPONENT"+" attacked for "+this.opponentCounterAtk+" damage");

            console.log("Damage dealt: "+this.playerCurrentAtk);

            console.log("Player HP: "+this.playerHP);
            console.log("Opponent HP: "+this.opponentHP);

            // Increase character's current attack by base attack value
            this.playerCurrentAtk += this.playerBaseAtk;

            // Update character cards with new Atk and HP
            $("#characterSelect > .charCard >> .atk").text(this.playerCurrentAtk);
            $("#characterSelect > .charCard >> .hp").text(this.playerHP);
            $("#battleZone > .opponent >> .hp").text(this.opponentHP);

            // if (playerHP == 0) DEFEAT
            if (this.playerHP<=0) {
                $("#combatLog").append("<div>You were defeated</div>");
                console.log("DEFEAT");
                
                this.endGame();
            }
            // else if (opponentHP == 0) Win Match -> remove current opponent
            else if (this.opponentHP<=0) {
                $("#battleZone").empty();

                $("#combatLog").append("<div>You defeated "+"OPPONENT"+"</div>");
                console.log("OPPONENT DEFEATED");

                // if (opponentsRemaining) pick next opponent
                if ( $("#opponentSelect").children().length > 0 ) {
                    $("#combatLog").append("<div>Choose your next opponent</div>");
                    console.log("PICK NEXT OPPONENT");

                    this.state = "oppSelect"
                } else { // else WIN GAME
                    $("#combatLog").append("<div>You are the true master of the Dark Side!</div>");
                    console.log("VICTORY");

                    this.endGame();
                }
            }

            
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