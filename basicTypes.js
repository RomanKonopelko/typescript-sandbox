var str = 'string!';
var num = 10;
var bool = true;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var unknown = '1';
var numArray = [1, 2, 3];
var numArray1 = [1, 2, 4, 5];
//tuple type
var multType = [1, '2'];
var x;
x = ['hello', 10];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var d = Color[2];
console.log(d);
var myName = 'Roman';
var myAge = 25;
function getName() {
    return myName;
}
var getAge = function () { return myAge; };
var voidFunc = function () { return console.log(); };
