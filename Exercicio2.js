let myArray = [[1,2,3,4],[5,6,7,8]]
const sizeArray = [
    myArray.length,
    myArray.reduce((x, y) => Math.max(x, y.length), 0)
]
let size = [0, 0]

function showArray(...array){
    if(size[0] < sizeArray[0]){
        if(size[1] < sizeArray[1]){
            console.log(array[size[0]][size[1]])
            size[1]++
            return showArray(...myArray)
        }else{
            size[0]++
            size[1] = 0
            return showArray(...myArray)
        }
    }
}

showArray(...myArray)