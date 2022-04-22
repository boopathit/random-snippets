 const nums = [8, 7, 2, 0, 5, 3, 1]
 const target = 7
 let pairs = [];
 
 for(let i = 0; i < nums.length ; i++){
   for(let j = i+1; j < nums.length ; j++){
     if(nums[i] + nums[j] === target){
      pairs.push([nums[i], nums[j]]);
    }
   }
 }
 
 pairs.forEach((pair)=>{
   console.log(`Pair found (${pair[0]},${pair[1]})`);
 })


//--------------

// const myChars = ["a", "b", "c", "d"];
var myChars = ["a", "b", "c", "d"];
delete myChars[0];
console.log(myChars); //  [undefined, "b", "c", "d"];
console.log(myChars[0]); //  undefined
console.log(myChars.length); // 4


//--------------
const user = {
  name: 'Raj',
  location: {
    city: 'NY',
    state: 'NY'
  }
};
const copy = Object.assign({}, user);
// OR
// const copy = { ...user };
copy.location.city = 'Albany';
console.log('original: ', user.location); // Albany
console.log('copy:', copy.location); // Albany


//-------------
var number = 10;
var display = function () {
  console.log(number);
  var number = 20;
};
display();
//undefined
