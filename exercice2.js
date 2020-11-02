const l1=[9,9,9,9,9,9,9,];
const l2=[9,9,9,9];
let lr=[];
let l=[];
let x="";
let y="";

const l11= l1.reverse();
const l12= l2.reverse();
 
l11.forEach(i => {
   x+=i.toString();
});
console.log(x);

l12.forEach(j => {
    y+=j.toString();
 });
 console.log(y);

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
