let result
function fatorial(num){
    if(result == undefined){
        result = num
    }
    if(num == 1){
        console.log(result)
        return
    }
    result *= num - 1
    fatorial(num - 1)
}

fatorial(10)