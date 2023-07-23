// 1. number - 4 | 4.55634534;
// 2. string - 'text' | "text" | `text`;
// 3. boolean - true | false
// 4. undefined
// 5. null
// ------------
// 6. object - { key: value }

const tdsf = 56.7;
let x1;
console.log(x1);
x1 = 4;
console.log(x1);
x1 = 5;
console.log(x1);
x1 = "text";
console.log(x1);
x1 = `text: dsfsadf asdfawerf ${tdsf}`;
console.log(x1);
x1 = true;
console.log(x1);
x1 = undefined;
console.log(x1);

console.log("--------------");

const x2 = false;
console.log(x2);

console.log("--------------");

const pet = {
  name: "Mickey",
  catAge: 3,
  isBlackCat: false,
  key1: undefined,
  key2: null,
  key3: {
    color: "red",
  },
};

console.log(pet.key3.color);

console.log("--------------");

const textVariable = "abcDEfg";
console.log(textVariable);
console.log(`textVariable 3rd char: ${textVariable[2]}`);
console.log(`textVariable length: ${textVariable.length}`);
console.log(`textVariable toLowerCase: ${textVariable.toLowerCase()}`);
console.log(`textVariable toUpperCase: ${textVariable.toUpperCase()}`);
console.log(`textVariable slice: ${textVariable.slice(1, 5)}`);
console.log(`textVariable includes: ${textVariable.includes("DF")}`);

console.log("--------------");

const numberVariable = 4.567;
console.log(numberVariable);
console.log(`numberVariable toFixed: ${numberVariable.toFixed(2)}`);
console.log(`numberVariable toString: ${numberVariable.toString()}`);

console.log("--------------");

const t1 = String("dfasgsdfgsd");
console.log(t1, typeof t1);
const t2 = Number(5.67); //NaN = Not a Number
console.log(t2, typeof t2);
const t3 = Boolean(true); // 0, '', undefined, null, false,
console.log(t3, typeof t3);

console.log("--------------");
// +, -, /, *
console.log(4 + 6);
console.log("4" + "6");
console.log("abc" + "def");
console.log(4 + "6");
console.log(false - "6");

console.log("--------------");
// ==, ===, >, >=, <, <=, ||, ! повертають boolean значення
console.log(4 == "4");
console.log(true == "1");
console.log(4 === 4);
console.log(true === "1");
console.log("a" > "!");
console.log(4 >= 4);
console.log(undefined || undefined);
console.log(!{});
