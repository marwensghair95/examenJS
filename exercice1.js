const ch="hello";

if (ch.length) {
   
    const ch1= ch.substr((ch.lastIndexOf(" ")+1),ch.length) 
    console.log(ch1.length);
   }
    

else
{
    console.log("word not exist");
}
//-------------------exemple 2------------//
const ch2="hello";

if (ch.length) {
   if (ch.lastIndexOf(" ")) {
       console.log("last word not exist");
   } else
   {
    const ch3= ch.substr((ch.lastIndexOf(" ")+1),ch.length) 
    console.log(ch3.length);
   }
    
}
else
{
    console.log("word not exist");
}
