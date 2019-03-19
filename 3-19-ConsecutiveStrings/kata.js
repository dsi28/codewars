function longestConsec(strarr, k) {
    let x = strarr.slice();
    x=x.sort((a,b)=>{return b.length-a.length}).splice(0, strarr.length - k+1);
    strarr = strarr.filter((a)=>{
        return x.some((b)=>{
            return a == b;
        }) 
    })
    return strarr.splice(0, k).join('');
}
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2));