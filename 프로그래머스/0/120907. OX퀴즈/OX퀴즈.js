function solution(quiz) {
    let result = [];
    
    for(let i = 0; i<quiz.length; i++){
        let line = quiz[i].split(' = ');
        let cal = line[0].split(' ');
        
        let first = Number(cal[0]);
        let expression = cal[1];
        let second = Number(cal[2]);
        
        let answer = Number(line[1]);
        
        if(expression==='+'){
            if(first+second === answer){
                result.push('O')
            }else{
                result.push('X')
            }
        }else if(expression==='-'){
            if(first-second === answer){
                result.push('O');
            }else{
                result.push('X')
            }
        }
        
        
    }
    
    return result
}