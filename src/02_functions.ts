function dirsToPath(...dirs:string[]):string {
  return dirs.join('/')
}

console.log(dirsToPath('foo', 'bar', 'baz'));


/*
the following requires node.d.ts as it uses node built-in path module
invoke `npm bin`/tsd install node --save if you don't already have node definitions in place
 */

//import * as path from 'path';
//const absolutePath = (dir: string): string => path.join(__dirname, dir);
//console.log(absolutePath('foo'));
