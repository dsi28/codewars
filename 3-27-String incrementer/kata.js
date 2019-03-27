function incrementString (strng) {
    strng = strng.split('');
    if( isNaN(parseInt(strng[strng.length-1]))){
        strng.push('1');
    }else{
        if(strng[strng.length-1]==9){
            strng[strng.length-1]='0';
            let i=2;
            do {
                if(strng[strng.length-i]==9 ){
                    strng[strng.length-i]='0';
                    i++;
                }else if(isNaN(parseInt(strng[strng.length-i]))){
                    strng.splice(strng.length-i+1,0,'1');
                    i=strng.length;
                }else{
                    strng[strng.length-i]=parseInt(strng[strng.length-i])+1;
                    i=strng.length;
                }
            } while (i<strng.length);
            strng[strng.length-1]=0;
        }else{
            strng[strng.length-1]=parseInt(strng[strng.length-1])+1;
        }
    }
    return strng.join('');
}

incrementString("foobar99")