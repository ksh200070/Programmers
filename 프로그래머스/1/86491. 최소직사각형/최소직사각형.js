function solution(sizes) {
    let min = 0;
    let max = 0;
    
    sizes.map((size)=> {
        if(size[0]<size[1]){
            if(min<size[0])min=size[0];
            if(max<size[1])max=size[1];
        }else{
            if(min<size[1])min=size[1];
            if(max<size[0])max=size[0];
        }
    });
    
    return min*max;
}