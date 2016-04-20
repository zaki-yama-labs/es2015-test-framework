// require("power-assert") じゃなくて assert でもいい
const assert = require("assert");
import add from "../src/add";

describe("add", function () {
  it("should return x + y", function () {
    const result = add(1, 2);
    assert.equal(result, 5);// <= Wrong
  });
});
