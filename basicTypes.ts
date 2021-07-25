let str: string = 'string!';

let num: number = 10;

let bool: boolean = true;

let decimal: number = 6;

let hex: number = 0xf00d;

let binary: number = 0b1010;

let octal: number = 0o744;

let unknown: string | number = '1';

let numArray: number[] = [1, 2, 3]

let numArray1: Array<number> = [1, 2, 4, 5]

//tuple type
const multType: [number, string] = [1, '2']

let x: [string, number];
x = ['hello', 10]; 


//enum
	
enum Color {Red=2, Green, Blue};
let c: Color = Color.Green;
let d: string = Color[2]
console.log(d)


const myName: string = 'Roman'

const myAge:number = 25

function getName():string {
    return myName
}

const getAge = (): number => myAge

const voidFunc=():void=> console.log(); 