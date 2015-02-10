var anagram = function(word, word_list){
  var word_letters = word.split("").sort();
  var matching_words_array = [];
  word_list.forEach(function(possibility) {
    if (word.split("").sort == possibility.split("").sort) {
    matching_words_array.push(possibility);
  }
  });
  return matching_words_array.join(" ");
};
