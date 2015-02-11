var anagram = function(word, word_list) {
  var word_letters = word.toLowerCase().split("").sort().join("");
  var matching_words_array = [];
  word_list.forEach( function(possibility) {
    var p_letters = possibility.toLowerCase().split("").sort().join("");
    if (word_letters === p_letters) {
      matching_words_array.push(possibility);
    }
    else if (p_letters.length < word_letters.length) {
      var n = 0;
      while (word_letters.indexOf(p_letters[n]) !== -1 && n <= p_letters.length) {
        if (n === p_letters.length - 1) {
          matching_words_array.push(possibility);
          break;
        };
        n++;
      };
    }
  });
  return matching_words_array.join(", ");
};
