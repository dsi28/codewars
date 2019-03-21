function findUniq(arr) {
    let x = true;
    do {
        let y = arr.shift();
        let temp = arr.slice();
        arr = arr.filter((a)=>{
            return a != y;
        })
        if(temp.join("") == arr.join("")){
            arr[0]=y;
            x=false;
        }else if(arr.length == 1){
            x = false;
        }
    } while (x);
    return arr[0];
}
findUniq([ 0, 1, 1, 1, 1, 1 ])