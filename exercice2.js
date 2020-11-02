const l1=[9,9,9,9,9,9,9];
const l2=[9,9,9,9];

console.log(l1);
console.log(l2);

let l=[]; //somme de deux tableau entier
let lr=[];//somme de deux tableau chaine

let x=""; //table 1 entier
let y=""; //table 2 entier

const l11= l1.reverse();
const l12= l2.reverse();
 
l11.forEach(i => {
   x+=i.toString();
});


l12.forEach(j => {
    y+=j.toString();
 });


 const somme= parseInt(x)+ parseInt(y);
 const sommeS=somme.toString();

 for (let i = 0; i < sommeS.length; i++) {

        lr.push(sommeS[i])   
 }
 
 lr.forEach(i => { 
    l.push(parseInt(i));
 });

 const resulat=l.reverse();
 console.log(resulat);
