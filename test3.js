// this is another js file for copilot samples

function howManyDaysAgo(date) {
    var today = new Date();
    var diff = today.getTime() - date.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function whatDayWasMyBirtdayOn(date) {
    var today = new Date();
    var diff = today.getTime() - date.getTime();
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days % 7;
}

// find all images without alternate text
// and give them a red border
function findImagesWithoutAlt() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        if (images[i].alt == "") {
            images[i].style.border = "2px solid red";
        }
    }
}