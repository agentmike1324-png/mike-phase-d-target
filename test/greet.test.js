import assert from "node:assert/strict";
import test from "node:test";
import { greet, farewell } from "../src/greet.js";

test("greet returns hello", () => {
  assert.equal(greet("world"), "hello, world");
});

test("farewell returns goodbye", () => {
  assert.equal(farewell("world"), "goodbye, world");
});
