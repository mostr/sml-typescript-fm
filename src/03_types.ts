function multiply(a: number, b: number) {
  return a * b;
}

// type inferred
const result = multiply(10, 2);
console.log(result);



function strOrArray(strPath: string): string|string[] {
  let parts = strPath.split('/');
  return parts.length > 1 ? parts : strPath;
}

console.log('is array?', Array.isArray(strOrArray('foo')));
console.log('is array?', Array.isArray(strOrArray('foo/bar/baz')));




interface Quack {
  quack(): void
}

interface Walk {
  walk(): void
}

function acceptQuacksAndWalksTogether(obj: Quack&Walk) {
  console.log('Obj provided is fine');
}

const qw = {
  quack() {
    console.log('quack');
  },
  walk() {
    console.log('walk')
  }
};

const q = {
  quack() {
    console.log('just quack')
  }
};

acceptQuacksAndWalksTogether(qw);

// explodes - wrong type
// acceptQuacksAndWalksTogether(q);


type UserName = string

function greetUser(user: UserName): void {
  console.log('Hello', user);
}


type UserAge = number

function getTuple(user: any): [UserName, UserAge] {
  return [user.name, user.age]
}

let tuple = getTuple({name: 'John Doe', age: 30});
let [uName, uAge] = tuple;
console.log(tuple);
console.log(uName, uAge);


