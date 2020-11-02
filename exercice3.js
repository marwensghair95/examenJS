const nums=[3,2,1,2,3,4,3,4,5,9,10,11];
const k=3;
// console.log(nums.length / k);
if (nums.length % k ==0) {
    console.log(true);
   for (let i = 0; i < nums.length / k; i++) {
    console.log( nums.slice(0,k));
    nums.splice(0,k)
       
   }
        
    


}
else
{
    console.log(false);
}
