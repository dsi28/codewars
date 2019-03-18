function sumTwoSmallestNumbers(numbers) { 
    class Lows {
        constructor(one, two){
            this.low1=one;
            this.low2=two;
            this.reset();
        }
        reset(){
            if(this.low1>this.low2){
                let temp = this.low2;
                this.low2=this.low1;
                this.low1=temp;
            }
        }
        compare(x){
            if(x<this.low2 || x<this.low1){
                this.low2=x;
                this.reset();
            }
        }
    }
    let lows= new Lows(numbers[0], numbers[1]);
    numbers.shift();
    numbers.shift();
    numbers.forEach(e => {
        lows.compare(e);
    });
    return lows.low1+ lows.low2;
};
sumTwoSmallestNumbers([15, 28, 4, 2, 43]);