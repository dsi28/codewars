var sum_pairs=function(ints, s){
    //does not work with negatives
    // ints =ints.filter((a)=>{
    //     return a <= s;
    // });
    console.log('list: '+ints)
    if(ints.some((a)=>{
        let x=ints.slice(ints.indexOf(a)+1);
        return x.some((b)=>{
            if(a+b===s){
                ints.unshift([a,b]);
            }
            return a+b===s;
        }) 
    })){
        console.log('ans: '+ints[0]);
        return ints[0];
    }else{
        console.log('no match');
        return undefined;
    }
}

sum_pairs([5, 9, 13, -3], 10);