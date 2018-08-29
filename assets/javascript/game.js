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
        }
    ],

    // Code executed at launch - sets up initial game state
    startGame() {
        // Create characters from data and display choices in #characterSelect zone

        for (let i=0; i<this.characters.length; ++i) {
            this.createCharDiv(this.characters[i]);
        }

    },

    createCharDiv(charObj) {
        var newChar = $("<div>");
        newChar.append("<div>"+charObj.name+"</div>");
        newChar.append("<img src='assets/images/"+charObj.img+"' width='300px'>");
        $("#characterSelect").append(newChar);
        $(newChar).on("click", function() {
            console.log("CLICKED");
        });
    }
}

$(document).ready( function() {
    game.startGame();
});