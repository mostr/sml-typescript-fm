async function doStuff() {
  const a = await waitForA();
  const b = await waitForB(a);
  return b;
}

function waitForA(): Promise<number> {
  return new Promise((res, rej) => {
    setTimeout(() => res(10), 2000);
  });
}

function waitForB(a: number): Promise<number> {
  return Promise.resolve(a + 10)
}

doStuff().then(console.log);
