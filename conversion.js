let num =33;
 let str = String(num);
 console.log(str);
 console.log(typeof(str));

 str ="12abc";
 console.log(typeof(str));

 num =Number(str);
 console.log(typeof(num));

 console.log(num); // out put not a number 

 let bool =0;  // for 0 boolean is false 
 // 1 boolean is true
 let val =Boolean(bool);
 console.log(val);

 let sc =undefined;
 let score =Number(sc);
 console.log(typeof(score));
 console.log(score);
///////////////////////////////////////////////////////////////////////////// 

// ONLY FOR NULL VALUE

 let my_val=null; // will convet it to 0;
 console.log(my_val);
// num =Number(my_val);
 //console.log(num);
let z =String(my_val);
 console.log(z); // null to string conversion will give you string "null";

 let x =Boolean(my_val);
 console.log(x); // in boolean it will give false (null) 

//////////////////////////////////////////////////////////////////////////// 

// ONLY FOR UNDEFINED VALUES 

let vari =undefined ;
let a = Number(vari);
let b = Boolean(vari);
let c =String(vari);

console.table([a,b,c]);

/*
null conversion to number will give 0

undefined consersion to number will nan

*/
let st_i = "";
let d =Number(st_i);
let e =Boolean(st_i);
console.table([st_i,d,e]);


