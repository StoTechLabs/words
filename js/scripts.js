var wordOrder = function(word) {
  var userInput = word.split(" ");
  var outPut = [];
 // var count = [];
 // userInput.forEach( function(word) {
 //  count

  for (var i = 0; i < userInput.length; i++) {
   userInput.forEach(function(word) {
    if (outPut.indexOf(word) === -1) {
      outPut.push(word);
    }
  });
    return outPut.join(" ");
}
