var primenumber = function (prime) {
    var value = []
    for (let i = 0; i < prime.length; i++){
        var c = 0;
        for (let j = 1; j <=prime[i]; j++){
            if (prime[i] % j === 0) {
                c++;
            }
        }
        if (c == 2) {
            value.push(prime[i])
        }
    }
    return value
    
}

console.log(primenumber[5,5,9,2,7,6]);