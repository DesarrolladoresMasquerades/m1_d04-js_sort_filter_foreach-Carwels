// ONLY USE THE .forEach() METHOD FOR THIS EXERCISE

// Use this array for all the exercises
let students = [
  {name: 'Rafa', color: 'Blue', candy: 12},
  {name: 'Elise', color: 'Pink', candy: 21},
  {name: 'Bodei', color: 'Yellow', candy: 31},
  {name: 'Jorge', color: 'Red', candy: 11}
]

//EXERCISE 1: print the name of each student

students.forEach((val) => {console.log(val.name)})
/* Answer should be 
   Rafa
   Elise
   Bodei
   Jorge
*/

//EXERCISE 2: print the color of each student that has more than 20 candy's
students.forEach( (val1) => {
  if(val1.candy > 20) {console.log(val1.color)}
})

/* Answer should be
  Pink
  Yellow
*/