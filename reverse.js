function getStringReversed(str){
    let res = str.split('')
    
    return res.reverse().join('')

}

console.log(getStringReversed('abcdefg'))