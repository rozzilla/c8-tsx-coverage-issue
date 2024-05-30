import { strictEqual } from "node:assert";
import { it, describe } from "node:test";
import { sum } from ".";

describe("test", () => {
  it("should pass", () => {
    strictEqual(sum(40, 2), 42);
  });
});
