let str: string = 'string!';

let num: number = 10;

let bool: boolean = true;

let unknown: string | number = '1';

let numArray: number[] = [1, 2, 3]

let numArray1: Array<number> = [1, 2, 4, 5]

const multType: [number, string] = [1, '2']

const myName: string = 'Roman'

const myAge:number = 25

function getName():string {
    return myName
}

const getAge = (): number => myAge

const voidFunc=():void=> console.log(); 