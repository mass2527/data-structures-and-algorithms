test("array", () => {
  const sixByteMemories = new ArrayBuffer(6);

  // look at sixByteMemories as 8 bit units
  const a8 = new Uint8Array(sixByteMemories);
  a8[0] = 8;
  a8[2] = 8;
  expect(Array.from(a8)).toEqual([8, 0, 8, 0, 0, 0]);

  // look at sixByteMemories as 16 bit units
  const a16 = new Uint16Array(sixByteMemories);

  a16[0] = 16;
  a16[2] = 16;

  expect(Array.from(a16)).toEqual([16, 8, 16]);
});
