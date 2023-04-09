console.log('Hello')
var a = [1,2,3]
console.log(a[2])

console.log('-------')

/*
     1.var is keyword we can declare,redeclare,reassign
     2.let is keyword we cannot redeclare, but reassign
     3.const is keyword which is same as let, but only diff is we cannot reassign
*/

var sum = 0
var numbers = [12,14,15,16]
for (let index = 0; index < numbers.length; index++) {
    sum = sum+numbers[index];
}
console.log(sum)

let total = numbers.reduce((sum,num)=>sum+num,0)
console.log(total)

let fil = numbers.filter(num=>num%2==0)
console.log(fil)

let maps = numbers.map(num=>num*3)
console.log(maps)

let mapSum = maps.reduce((sum,no)=>sum+no,0)
console.log(mapSum)

var newArray = [2,3,4,5,6,7,8]
let newVal = newArray.filter(div=>div%2==0).map(mul=>mul*2).reduce((sum,val)=>sum+val,0)
console.log(newVal)

var arr = Array(2)
arr[0] = 2
arr[1] = 4
console.log(arr)

var arr = [04,03,05,02]
console.log(arr.sort((a,b)=>a-b))
console.log(arr.sort((a,b)=>b-a))

function add(a,b){
    return a+b
}

console.log(add(2,3))

var sum = (a,b)=>a+b
console.log(sum(2,4))

let str = 'Monday'
let element = ''
console.log(str.charAt(2))
console.log(str.indexOf('M'))
console.log(str.includes('Mon'))
for (let i = (str.length)-1; i >= 0; i--) {
     element += str[i];   
}
console.log(element)
function split(){
    return str.split('').reverse().join('');
}
var s = split()
console.log('methods to reverse:',s)
console.log(str.split('d'))

let date1 = '23'
let date2 = '20'
let diff = parseInt(date1)-parseInt(date2)
console.log(diff)
console.log(diff.toString())

//count the occurence of word
let word = "Today is Tuesday"
let value = word.indexOf('day')
let count = 0
while(value!==-1){
    count++
    value = word.indexOf('day',value+1)
}
console.log(count)