function narcissistic(value) {
    let value1 =value.toString();
    value1 =value1.split('');
    let x = {
        len: value.toString().length,
        final: 0
    };
    value1.forEach(element => { 
        x.final+= Math.pow(parseInt(element),x.len);
    });
    if(x.final===value){
        return true;
    }
    return false;
}
narcissistic(153);