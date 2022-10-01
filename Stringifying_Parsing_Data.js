/*/
    Stringifying Parsing Data
/*/
const local = window.localStorage
const data = [
    {model: "MIATA", brand: 'MAZDA'},
    {model: "AUDI RS6 AVANT", brand: 'AUDI'},
    {model: "IMPREZA STI", brand: 'SUBARU'}
]

const newDataFormat = JSON.stringify(data)

console.log(JSON.stringify(data))

localStorage.setItem('cars', newDataFormat)

//Convert this dta aback into an array

let storedArray = localStorage.getItem('cars')

// To Convert this data into an array u can use parse method
storedArray = JSON.parse(storedArray)


console.log(storedArray)