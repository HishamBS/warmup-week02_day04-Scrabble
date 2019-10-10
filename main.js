// // Write your code here

// var letterScores = {
//     "A": 1,
//     "B": 3,
//     "C": 3,
//     "D": 2,
//     "E": 1,
//     "F": 4,
//     "G": 2,
//     "H": 4,
//     "I": 1,
//     "J": 8,
//     "K": 5,
//     "L": 1,
//     "M": 3,
//     "N": 1,
//     "O": 1,
//     "P": 3,
//     "Q": 10,
//     "R": 1,
//     "S": 1,
//     "T": 1,
//     "U": 1,
//     "V": 4,
//     "W": 4,
//     "X": 8,
//     "Y": 4
//   };



// function letterScore(word)
// {
//   word = word.toUpperCase()

//   let totalScore = 0;
// for (letter of word)
// {
//   totalScore+=letterScores[letter]
// }

//   console.log(totalScore);
// }

// letterScore("duck");

 
let arr = ["hisham","tariq", "dmdm" , "tmtm"];

//arrow function only one to modify original arrays
arr.forEach((element,index) => {
  console.log(index+" "+element)
  
});

// normal function
arr.forEach(function(element,index) {
  // console.log(index+" "+element)
  
});

// another way to search for stuff in arrays
let findMethod =arr.find(e =>{
  return e == "dmdm"
})
// console.log(findMethod)

//retrun the index of an array element
let findMethod2 =arr.findIndex(e =>{
  return e == "dmdm"
})

//different approach of summing arrays
let numbers = [1,2,3,4,5];
let sum = numbers.reduce((total,e) =>{

return total+e
})

console.log(sum)


//returning a new array based on the 1st one with the things u want to do to it
let mult = numbers.map(e =>{

  return e*2
  })
  
console.log(mult)

//return a 1 condition
let filteredNums = numbers.filter(e=>{
  return e>3
})
console.log(filteredNums)

