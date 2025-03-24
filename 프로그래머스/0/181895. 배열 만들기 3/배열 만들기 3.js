function solution(arr, intervals) {
    let answer = [];
    intervals.map((interval, i)=>{
        const a = arr.slice(interval[0], interval[1]+1);
        answer.push(...a)
    })
    return answer;
}