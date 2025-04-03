//let go with the closures
// closure are the condition in which a inner function of outer function remembers the varaible , 
// allows the encapslation and maintainces the states

// function outer(){
// var name="ram"

// function inner(){
//     console.log(name)
// }
// inner()
// }
// outer()

//    EXAMPLE 2
function outer(){
let count=0

function increament(){
    count++
    console.log(count)
}
return {increament}
}

const counter=outer()
counter.increament()
counter.increament()
counter.increament()
counter.increament()
counter.increament()