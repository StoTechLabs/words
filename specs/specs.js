describe ("wordOrder", function() {
  it("returns a word when that word is entered", function() {
    wordOrder("fish").should.equal("fish");
  });
  it("returns multiple words when multiple words are entered", function() {
    wordOrder("fish bait").should.equal("fish bait");
  });
  it("returns unique words when duplicate words are entered", function() {
    wordOrder("fish bait bait").should.equal("fish bait");
  });
  it("counts duplicate words and return the words in the order of the most occurances", function() {
    wordOrder("fish bait bait").should.equal("bait fish");
  }
});
