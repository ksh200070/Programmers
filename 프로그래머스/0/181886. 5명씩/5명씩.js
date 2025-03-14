function solution(names) {
    let grouped = [];
    let answer = [];
    names.map((name, i)=>{
        if(grouped.length===5){
            answer.push(grouped[0])
            grouped = [];
        }
        
        grouped.push(name);
        
        if(i===names.length-1){
            answer.push(grouped[0])
        }
    })
    
    return answer;
}