function merge(str1,str2){
    let mergeStr="";
    let i=0,j=0;
    while (i<str1.length || j<str2.length) {
        if (i<str1.length) {
            mergeStr=mergeStr+str1[i]
            i++
        }
        if (j<str2.length) {
            mergeStr=mergeStr+str2[j]
            j++
        }
    }
    return mergeStr
}

console.log(merge("hello","World123"));
