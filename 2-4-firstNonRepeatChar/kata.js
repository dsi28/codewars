function firstNonRepeatingLetter(s) {
    s= s.split('');
    for (let i = 0; i < s.length; i++) {
        let x = s.filter((c)=>{
            return c.toUpperCase()===s[i].toUpperCase()
        })
        if(x.length===1){
            return x[0];
        }
    }
    return'';
}
console.log(firstNonRepeatingLetter('sTreSS'));