/* Abbreviated getElementByID */
function getId(id) {
    var element = document.getElementById(id);
    if (element == null) {
        alert('Programmer error: ' + id + ' does not exist.');
    }
    return element;
}

function throwAndFlip(animationCard, menuCard, text, hrPosition, vrPosition, timeOut) {
    setTimeout(function () {
        $(animationCard).css("visibility", "visible");
        $(animationCard).animate({
            left: hrPosition,
            top: vrPosition
        }, 250);
    }, timeOut);
    setTimeout(function () {
        $('#' + menuCard + 'Back').css("visibility", "visible");
        $('#' + menuCard + 'Front').css("visibility", "visible");
        getId(menuCard + 'FrontText').innerHTML = text;
    }, timeOut + 350);
    setTimeout(function () {
        $(animationCard).css("visibility", "hidden");
        $('#' + menuCard).flip(true);
    }, timeOut + 700);
}