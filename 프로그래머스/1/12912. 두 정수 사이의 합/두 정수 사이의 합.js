function solution(a, b) {
    let answer = [];
    for(let i = 0; i<=Math.abs(b-a); i++){
        a<b?answer.push(a+i):answer.push(b+i)
    }
    
    return answer.reduce((acc, cur)=> acc+cur,0)
}