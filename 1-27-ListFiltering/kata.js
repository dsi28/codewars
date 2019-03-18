function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter((e)=>{
        return typeof(e) != 'string';
    })
}
filter_list([1,2,'a','b']);