import { describe, expect, test } from "vitest";
import { sum } from "./sum";

describe("sum.ts", () => {
  test("sum test", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
