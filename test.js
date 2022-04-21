function findLowestNumber(arr) {
  var lowest = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
    }
  }
  return lowest;
}

function calculateDaysBetweenDates(date1, date2) {
  var oneDay = 24 * 60 * 60 * 1000;
  var firstDate = new Date(date1);
  var secondDate = new Date(date2);
  var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
  return diffDays;
}

function calculateDaysBetweenDates2(date1, date2) {
  var oneDay = 24 * 60 * 60 * 1000;
  var firstDate = new Date(date1);
  var secondDate = new Date(date2);
  var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
  return diffDays;
}

function findHighestNumber(arr) {
  var highest = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }
  return highest;
}

function getUserFirstName(fullName) {
  var firstName = fullName.split(" ")[0];
  return firstName;
}