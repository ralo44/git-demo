function name() {
    let obj = {}
    for (let index = 0; index < array.length; index++) {
        let element = array[index]        
        if(obj[element]){
            obj[element]+=1
        }else{
            obj[element] = 1
        }
    }
   //  return obj
   let maxValue = Math.max(...Object.values(obj))
    return maxValue
}
const array = [5, 5, 5, 2, 2, 12, 2, 2, 9, 4];

value = name(array)
console.log(value)