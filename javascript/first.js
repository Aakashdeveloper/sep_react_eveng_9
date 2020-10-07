//es5
function add(a,b){
    return a+b
}

add(1,2)
3

//es6
const add = (a,b) => {return a+b}
add(1,2)
3

function add(a,b){
    var out = [a,b]
    return out
}

add(1,2)
2

var city = ["Delhi","Mumbai","Pune"]
city.map((data) => { console.log(data)})

var a = [34,45,36,25,64,12,28]
a.filter((data) => { return data>25})
[34, 45, 36, 64, 28]

var a = [34,45,36,25,64,12,28]
undefined
a.indexOf(34)
0
a.indexOf(12)
5
a.indexOf(11)
-1
a.indexOf(9)
-1