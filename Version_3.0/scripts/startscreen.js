/** 
* Set-up menu cards for flipping and starts placing menu cards 
*/
$(document).ready(function () {
    placeMainCards();
    $(".mainCard").flip({ // Main menu cards flipping
        axis: 'y',
        trigger: 'manual',
        front: ".back",
        back: ".front"
    });
    $(".pracCard").flip({ // Practice cards flipping
        axis: 'y',
        trigger: 'manual',
        front: ".back",
        back: ".front"
    });
    $(".loginCard").flip({ // Practice cards flipping
        axis: 'x',
        trigger: 'manual',
        front: ".back",
        back: ".front"
    });
    // Detects the id of the clicked division in the main menu division and executes functions accordingly
    $(".menuMainBox").click(function (event) {
        // Variable for the clicked element's id
        var target = event.target.id;
        // Places practice menu cards when Practice menu card's front or front text division is clicked
        if (target.substring(0, 14) == "menuMain1Front") {
            placePracCards();
            // Re-stacks practice menu cards when Practice menu card's back or back text division is clicked
        } else if (target.substring(0, 13) == "menuMain1Back") {
            restackPracCards();
            // Executes the placeLoginCard function when Login main menu's front is clicked
        } else if (target.substring(0, 14) == "menuMain3Front") {
            placeLoginCard();
            // Executes the restackLoginCard function when Login main menu's back is clicked
        } else if (target.substring(0, 13) == "menuMain3Back") {
            restackLoginCard();
            // Executes the switchScreen function when other menu cards' front is clicked
        } else if (target.substring(9, 14) == "Front") {
            switchScreen(target);
        }
    });
    // Detects the id of the clicked division in the practice menu division and executes functions accordingly
    $(".menuPracBox").click(function (event) {
        // Variable for the clicked element's id      
        var target = event.target.id;
        // Executes the switchScreen function when practice menu cards' front is clicked
        if (target.substring(9, 14) == "Front") {
            switchScreen(target);
        }
        if (target == "addition") {
            switchScreen("menuPrac0Front");
        }
        if (target == "subtraction") {
            switchScreen("menuPrac1Front");
        }
        if (target == "multiplication") {
            switchScreen("menuPrac2Front");
        }
        if (target == "division") {
            switchScreen("menuPrac3Front");
        }
    });
    // Detects the id of the clicked division in the login division and executes functions accordingly
    $(".menuLoginBox").click(function (event) {
        // Variable for the clicked element's id
        var target = event.target.id;
        switchMenu(target);
    });
});