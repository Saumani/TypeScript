let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

/*
let strArr: string[];
let anyArr: any[];
*/

let strArr:Array<string>;
let anyArr:Array<any>;

let strNumTuple: [string, number]

myString = 'Hello'.slice(0,3);
myNum = -22;
myBool = false;
myVar = true;

strArr=['Hello', 'world'];
anyArr=['Hello', 'world', 2021];

strNumTuple = ['Hello', 4];

let myVoid: void = undefined;
let myNull: null = null;

console.log(myVoid);