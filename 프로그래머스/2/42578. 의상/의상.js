function solution(clothes) {
    let hashmap = {};
    clothes.map((cloth)=> {
        if(!!hashmap[cloth[1]]){
            hashmap[cloth[1]]+=1;
        }else{
            hashmap[cloth[1]]=1;
        }
    })
    
    let answer = 1;
    for(const key in hashmap){
        answer=answer*(hashmap[key]+1);
    }
    return answer-1;
}