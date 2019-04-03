console.log(returnPositions("lighthouse in the house"));

function returnPositions(str) {

  var answer = {} ;

  var convert = str.split(' ').join('').toLowerCase();

  console.log(convert);

  for (var i = 0; i < convert.length; i++) {
    var currentLetter = convert[i];

    if (!answer[currentLetter]) {
      answer[currentLetter] = [i];
    }
    else {
      answer[currentLetter].push(i);

    }

  }

  return answer;

}

