/**
* Screen transitions
*
* @param menuSelected
*                      Selected division's id
*/
function switchScreen(menuSelected) {
    switch (menuSelected.substring(0, 9)) {
        // Swtiches the screen to play mode when Play menu is clicked  
        case "menuMain0":
            //$("body").load("./playmode.php");
            window.location.href = './playmode.php';
            break;
        // Swtiches the screen to leaderboard when High Score menu is clicked  
        case "menuMain2":
            //$("body").load("./leaderboard.php");
            window.location.href = './leaderboard.php';
            break;
        // Option for practice mode: addition 
        case "menuPrac0":

            break;
        // Option for practice mode: subtraction 
        case "menuPrac1":

            break;
        // Option for practice mode: mulitplication 
        case "menuPrac2":

            break;
        // Option for practice mode: division 
        case "menuPrac3":

            break;
    }
}