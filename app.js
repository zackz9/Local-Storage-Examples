const local = window.localStorage
// console.log(local)


/*/
    Store data in localstorage
/*/

// local.setItem('name', 'john')
// local.setItem('age', 30)
// console.log(local)


/*/
    Get data from localstorage
/*/

let name = local.getItem('name')
let age = local.getItem('age')
console.log({name, age})


/*/
    Updating data in localstorage
/*/

local.setItem('name', 'johnyaaa')
local.age = 500;
name = local.getItem('name')
age = local.getItem('age')
console.log(name, age)


/*/
    Deleting data from localstorage
/*/

// local.removeItem('name')
name = local.getItem('name')
age = local.getItem('age')

// console.log(local)
// console.log({name, age})

// Removing all items 
local.clear()

name = local.getItem('name')
age = local.getItem('age')

console.log(local)
// console.log({name, age})



