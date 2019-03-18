function array_diff(a, b) {
    b.forEach(e => {
        a=  a.filter((a)=>{
            return a != e;
        });
    });
    return a;
};
//simple test
console.log(array_diff([1,3,3,5,1,3,7,2,3,2,2], [2,3]))