function solution(n) {
    let answer = String(n).split('').sort((a,b)=> Number(b)-Number(a)).join('');
    
    return Number(answer);
}