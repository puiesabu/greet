greet = require "greet"

describe "greet", ->
  it "should greet a person by name", ->
    expect(greet "kaeli").to.equal "hello, kaeli"

  it "should greet a person flirtatiously if drunk", ->
    expect(greet "kaeli", true).to.equal "hello kaeli, you look sexy today"
