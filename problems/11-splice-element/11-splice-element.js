/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    let id = someArr.indexOf(null);
    if (id > - 1) {

        someArr[id] = someArr;
        return id;
    } else {
        
        someArr.push(someArr);
        return someArr.length - 1;
    }
}














