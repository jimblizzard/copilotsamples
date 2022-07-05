// copilot demos

function getLowestNumberInArray(array) {
    var lowestNumber = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < lowestNumber) {
            lowestNumber = array[i];
        }
    }
    return lowestNumber;
}

function getHeaviestFootballPlayer(array) {
    var heaviestPlayer = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i].weight > heaviestPlayer.weight) {
            heaviestPlayer = array[i];
        }
    }
    return heaviestPlayer;
}

