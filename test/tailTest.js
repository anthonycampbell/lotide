const assert = require('chai').assert;
const tail = require('../tail');
describe("#tail", () => {
  it("returns 2 for length of tail on ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
  it("returns 'Lighthouse for tail[0] on ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse"); 
  });
  it("returns 'labs' for tail[1] on ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs"); 
  });
  it("does not return 3 for length of tail(['Hello', 'Lighthouse', 'Labs'])", () => {
    assert.isFalse(tail(["Yo Yo", "Lighthouse", "Labs"]).length === 3); 
  });
});