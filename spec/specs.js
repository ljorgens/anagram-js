describe("anagram", function() {
  it('returns rats', function() {
    expect(anagram('star',['rats'])).to.equal('rats')
  });
  it('returns the anagram from a list of two words', function(){
    expect(anagram("ape",["pea","dog"])).to.equal("pea")
  });
});
