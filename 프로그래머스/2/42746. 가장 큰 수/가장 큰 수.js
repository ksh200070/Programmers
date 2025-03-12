function solution(numbers) {
    const answer =  numbers.map(v=> String(v)).sort((a,b)=> (b+a)-(a+b));
    
    return answer[0] === '0' ? '0' : answer.join('');
}