function solution(num, total) {
    let result = new Array(num).fill(0).map((i,v)=>v);
    let sum = result.reduce((acc, cur)=> acc=acc+cur, 0);
    
    while(sum!==total){
         
        if(sum<total){ 
            const last = result[num-1];
            
            result.shift();
            result.push(last+1); 
        }else{
            const first = result[0];
            
            result.pop();
            result.unshift(first-1);
        }
        sum = result.reduce((acc, cur)=> acc=acc+cur, 0);
    }
    return result;     
}