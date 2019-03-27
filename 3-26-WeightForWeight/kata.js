function orderWeight(strng) {
    strng = strng.split(' ');
    let weightList=[];
    class NumWeight{
        constructor(weight){
            this.weight = weight;
            let x = weight.split('');
            let order=0;
            x.forEach(e => {
                order= order + Number.parseInt(e);
            });
            this.order = order;
        }
    }
    strng.forEach(e => {
        weightList.push(new NumWeight(e));
    });
    weightList= weightList.sort((a, b)=>{
        if(a.order == b.order){
            if(a.weight<b.weight){
                return -1;
            }else  if(a.weight>b.weight){
                return 1;
            }else{
                return 0;
            }
        }else{
            return a.order - b.order;
        }
    });
    strng='';
    weightList.forEach(e =>{
        strng = strng+e.weight+' ';
    });
    return strng.slice(0, strng.length-1);
}
orderWeight("1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703");