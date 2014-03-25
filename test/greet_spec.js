//var expect = require("chai").expect
var greet = require("greet")
describe('greet', function(){
  it("should greet a person by name", function() {
    expect(greet("kaeli")).to.eql("hello, kaeli");
  });

  it("should greet a person flirtatiously if drunk", function() {
    expect(greet("kaeli", true)).to.eql("hello kaeli, you look sexy today");
  });
});
