//js function 
// 2 paramaters 2 object
//compare objects and return tru or false

// values comparission

obj1 = {a:1, b:2, b:3}
obj2 = {a:1, b:2, b:3}

function test(obj1, obj2){
    for (let index = 0; index < obj1.length; index++) {
        for (let second = 0; second < obj1.length; second++) {
            valueNumbers1 = [...Object.values(obj1)]
            valueNumbers2 = [...Object.values(obj2)]
            if (valueNumbers1[index] == valueNumbers2[second]) {
                return true
            }
        }
    }
    return false
}

let value = test(obj1, obj2)
console.log(value)