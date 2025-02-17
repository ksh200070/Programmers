function solution(n) {
    let nums = [];
    for(let i=1; i<=n; i++){
        if(!(n%i)){
            nums.push(i)
        }
    }
    
    return nums.reduce((acc, cur)=> acc+=cur,0)
}