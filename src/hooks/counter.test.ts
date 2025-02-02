import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./counter";

describe("useCounter hook", () => {
  test("初期カウントは 0 である", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(0);
  });

  test("addCount を呼び出すとカウントが更新される", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.addCount(5);
    });

    expect(result.current.counter).toBe(5);
  });
});
