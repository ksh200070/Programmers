function solution(myStr) {
 return myStr.split(/a|b|c/).filter((v)=> v.length).length? myStr.split(/a|b|c/).filter((v)=> v.length) : ['EMPTY']
}