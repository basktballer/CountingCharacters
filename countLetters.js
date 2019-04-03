console.log(countLetters("lighthouse in the house"));

function countLetters(str) {

  var answer = {} ;

  var convert = str.split(' ').join('').toLowerCase();

  console.log(convert);

  for (var i = 0; i < convert.length; i++) {
    var currentLetter = convert[i];

    if (!answer[currentLetter]) {
      answer[currentLetter] = 1;
    }
    else {
      answer[currentLetter] += 1;

    }

  }

  return answer;

}

