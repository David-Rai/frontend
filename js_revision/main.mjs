//this is main js file
import add from './sum.mjs'
import {names} from './sum.mjs'

console.log(add(2,3))
console.log({...names,c:"Kam"})