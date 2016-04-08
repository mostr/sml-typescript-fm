function dirsToPath(...dirs:string[]):string {
  return dirs.join('/')
}
// same as
// const dirsToPath = (...dirs:string[]):string => dirs.join('/');

console.log(dirsToPath('foo', 'bar', 'baz'));
