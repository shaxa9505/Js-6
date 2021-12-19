// 6-dars

// var num1 = +prompt("sonni yozing");
// var power = +prompt("Darajasini yozing");

// function sum(num1, power){
//     var res = 1;
//     for(let i = 1; i <= power; i++){
//         res *= num1
//     }
//     return res
// }

// console.log((sum(num1, power)));


// var lines = prompt("Yozish kerak")
// var line = +prompt(`nechta kire ${lines} dan`)

// if(lines == null){
//     lines = 3
// }
// else{
//     for(let i = 0; i < line; i++){
//         document.write(lines + "<hr>" + "<br>")
//     }
// }


// MASSIV 

// var arr = [1, "", true, undefined];  jsdagi hamma narsani massivni ichida foydalansak buladi

// var arr = [1, 2, 3, 4, 5, "js", "php", false]

// console.log(arr);
// console.log(arr[1]);
// console.log(arr.length);

// for(var i = 0; i < 8; i++){
//     document.write(arr[i] + "<br>")
// }

// var arr = [1, 2, 3, 4, 5, "PHP", "NODE", 1, 2, 3, 4, 5, "PHP", "NODE", 1, 2, 3, 4, 5, "PHP", "NODE", 1, 2, 3, 4, 5, "PHP", "NODE", 1, 2, 3, 4, 5, "PHP", "NODE",]
// console.log(arr.length);
// console.log(arr[arr.length - 1]);

// var sity = ["Toshkent", "Samarqand", "Jizzax"]
// console.log(sity);
// sity.shift() // bu bowidegi bittasini copadi
// console.log(sity);


// var sity = ["Toshkent", "Samarqand", "Jizzax"]
// console.log(sity);
// sity.unshift("Buxoro") // bu bowidan bitta quwib beradi
// console.log(sity);


// var sity = ["Toshkent", "Samarqand", "Jizzax"]
// console.log(sity);
// sity.pop("Buxoro") // bu oxiridan bitta copadi
// console.log(sity);


// var sity = ["Toshkent", "Samarqand", "Jizzax"]
// console.log(sity);
// sity.push("Buxoro") // bu oxiridan bitta quwip beradi
// console.log(sity);

// var sity = ["Toshkent", "Samarqand", "Jizzax", 3, 4, 5]
// console.log(sity);
// sity.splice(2, 2) // bu nicincisidan bowlap niwta element olib tawlawi
// console.log(sity);


// var sity = ["Toshkent", "Samarqand", "Jizzax", 3, 4, 5];
// console.log(sity);
// sity.slice(3, 6) // bu nicincisidan bowlap niwta element olib tawlawi
// console.log(sity);


// charAt buyam indexOfga uxwagan

// var str = "salom shox";
// console.log(str.charAt(0));


var color = [
    "pink",
    "white",
    "blue",
    "black",
    "yellow",
    "crimson",
    "red",
    "orange",
    "brown"
]
var rand = Math.floor(Math.random() * color.length)
var randColor = color[rand]
var maxAttemp = +prompt("Ragni top uyini nechta urunish xoxlaysiz");
console.log(randColor);

for(let i = 1; i <= maxAttemp; i++){
    var answer = prompt("Rangni top uyini qanaqa rang buliwi mumkin sizda " + i + "-urunish");
    answer =  answer.toLowerCase();
    if(answer == null){
        break;
    }
    else if(answer != randColor){
        continue;
    }
    else{
        document.write("Tabriklaymiz siz " + i + "-urunishda topdingiz");
        break;
    }
}
document.write( "<p>" +  "O`yin tugadi")