describe("A suite", function() {
  it("contains spec with a valid expectation", function() {
    expect(true).toBe(true);
  });
  it("contains spec with an invalid expectation", function() {
    expect(true).not.toBe(false);
  });
});
