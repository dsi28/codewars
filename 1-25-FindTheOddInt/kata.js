function findOdd(A) {
    //happy coding!
    class Odd{
        constructor(value, count){
            this.value= value;
            this.count=count;
        }
    }
    let x = [new Odd('x',2)];
    A.forEach(e => {
        let i = x.find(o => o.value === e);
        if(i != undefined){
            i.count++;
        }else{
            x.push(new Odd(e, 1));
        }
    });
    x.unshift();
    console.log(x);
    return x.find(o => o.count & 1 ===1).value;
    // console.log(` ${y.value}  ${y.count}`);
    // return y.value;
}
findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);