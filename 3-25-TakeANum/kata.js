function sumDigPow(a, b) {
    let arr =[];
    for (let i = a; i <= b; i++) {
        let x = i.toString().split('');
        let y=0;
        for(let j = 1; j<=x.length; j++){
            y = y + (Math.pow( parseInt(x[j-1]) ,j) );
        }
        if(y == i){
            arr.push(i);
        }
    }
    return arr;
}
sumDigPow(1, 89) 