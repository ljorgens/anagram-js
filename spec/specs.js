describe("anagram", function() {
  it('returns rats', function() {
    expect(anagram('star',['rats'])).to.equal('rats')
  });
  it('returns the anagram from a list of two words', function(){
    expect(anagram("ape",["pea","dog"])).to.equal("pea")
  });
  it('returns two anagrams from a list of three words', function() {
    expect(anagram("bluest", ["bluets", "bustle", "hustle"])).to.equal("bluets, bustle")
  });
  it('will take capitalization into account', function() {
    expect(anagram("Hops", ["shop", "Posh", "Koss"])).to.equal("shop, Posh")
  });
  it('will return partial matches', function() {
    expect(anagram("path", ["hat", "art"])).to.equal("hat")
  });
  it('will deal with duplicate letters in partial matches', function() {
    expect(anagram("path", ["hat", "art", "haa"])).to.equal("hat")
  });
  it('will deal with duplicate letters', function() {
    expect(anagram("trees", ["reset", "tea"])).to.equal("reset")
  });
});
