var anagram = function(word, word_list) {
  var word_list_array = word_list.split(", ");
  var word_letters = word.toLowerCase().split("").sort().join("");
  var matching_words_array = [];
  word_list_array.forEach( function(possibility) {
    // debugger;
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

$(document).ready(function(){
  $("form#anagram").submit(function(event){
    var word = $("input#word").val();
    var word_list = $("input#word_list").val();
    // var result = anagram("star", "rats");
    var result = anagram(word, word_list);

   $(".results1").text(result);

   $("#results").show();
   event.preventDefault();
  });
});
