import whateverIsDefault from './07_modules_export';
import {print, YET_ANOTHER} from './07_modules_export';

print(whateverIsDefault);
print(YET_ANOTHER);

/*
 the following requires node.d.ts as it uses node built-in path module
 invoke `npm bin`/tsd install node --save if you don't already have node definitions in place
 */
//import * as path from 'path';
//function absolutePath(dir: string): string {
//  return path.join(__dirname, dir);
//}
//console.log(absolutePath('foo'));
