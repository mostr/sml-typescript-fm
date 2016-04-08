function generics<T>(input: T) {
    console.log('ok')
}

generics<string>('foobar');
generics<number>(42);


function overwrite<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = source[id];
  }
  return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };
overwrite(x, { b: 10, d: 20 });

// explodes - wrong structure
// overwrite(x, { e: 0 });
