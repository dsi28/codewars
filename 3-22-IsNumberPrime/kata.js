function isPrime(num) {
    if(num <=1){
        return false;
    }
    for (let i = 2; i < num; i++) {
        if(i!= num && Number.isInteger(num/i)){
            return false;
        }
    }
    return true;
}
isPrime(2);