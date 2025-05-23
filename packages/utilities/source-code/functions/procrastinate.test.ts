import { expect, test } from "vitest";

import { procrastinate } from "./procrastinate";

test("最初に作成した値を使い回している", function () {
  function target() {
    return {};
  }
  expect(target()).not.toBe(target());

  const procrastinated = procrastinate(target);
  expect(procrastinated()).toBe(procrastinated());
});

test("実行されるまで値が作成されない", function () {
  let called = false;
  const procrastinated = procrastinate(function () {
    called = true;
    return {};
  });
  expect(called).toBe(false);
  procrastinated();
  expect(called).toBe(true);
});
