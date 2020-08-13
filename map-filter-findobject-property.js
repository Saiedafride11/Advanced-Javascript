//*********  map
// const students = [
//     {id:21 , name : "Omor Sunny"},
//     {id:31 , name : "manna"},
//     {id:41 , name : "kamal"},
//     {id:71 , name : "Deepjol"},
// ]

// const names = students.map(s => s.name);
// const ids = students.map(s=> s.id);
// console.log(names)
// console.log(ids)




//*********  filter
// const students = [
//     {id:21 , name : "Omor Sunny"},
//     {id:31 , name : "manna"},
//     {id:41 , name : "kamal"},
//     {id:71 , name : "Deepjol"},
// ]

// const bigger = students.filter(s => s.id > 40)
// console.log(bigger)




//*********  find
const students = [
    {id:21 , name : "Omor Sunny"},
    {id:31 , name : "manna"},
    {id:41 , name : "kamal"},
    {id:71 , name : "Deepjol"},
]

const result = students.find(s => s.id > 40)
console.log(result)