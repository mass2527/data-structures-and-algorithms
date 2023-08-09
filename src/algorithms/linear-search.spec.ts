import { linearSearch } from "./linear-search";

test("linear search", () => {
  const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
  expect(linearSearch(foo, 69)).toBe(true);
  expect(linearSearch(foo, 1336)).toBe(false);
  expect(linearSearch(foo, 69420)).toBe(true);
  expect(linearSearch(foo, 69421)).toBe(false);
  expect(linearSearch(foo, 1)).toBe(true);
  expect(linearSearch(foo, 0)).toBe(false);
});
