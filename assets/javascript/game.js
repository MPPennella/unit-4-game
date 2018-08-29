var game = {

    // Code executed at launch - sets up initial game state
    startGame() {
        // Create characters from data and display choices in #characterSelect zone

        // TESTING CODE
        var newChar = $("<img src='assets/images/Darth_Vader.jpg' width='300px'>");
        $("#characterSelect").append(newChar);
        $(newDiv).on("click", function() {
            console.log("CLICKED");
        });

    }
}

$(document).ready( function() {
    game.startGame();
});