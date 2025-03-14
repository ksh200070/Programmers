function solution(my_string, m, c) {
    let toArray = my_string.split('');
    let answer = '';
    
    for(let i =0; i<my_string.length; i++){
        if(i%m === c-1){
            answer+=toArray[i];
        }
    }
    return answer;
}