function solution(t, p) {
    let count = 0;
    let array = t.split('');
    
    for(let i=0; i<t.length-p.length+1; i++){
        
        if(Number(array.slice(i, i+p.length).join('')) <= Number(p)){
            // console.log(array)
            count++;
        }
    }
    return count;
}