String.prototype.toJadenCase = function () {
    //this.valueOf='x' //this.replace(/ /g+1, 'x');
    return this.replace(/^\w| ./g, function (a) {
        return a.toUpperCase();
    })
};
str= 'one two three'
str.toJadenCase();
str.length;