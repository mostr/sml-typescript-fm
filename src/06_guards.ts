// guards
function foo(x: number | string) {
  return (typeof x === "string") ? x.length : x + 1;
}

function bar(x: Date|String) {
  if(x instanceof Date) {
    return x.getUTCDate();
  }
  if(x instanceof String) {
    return x.length;
  }
}
