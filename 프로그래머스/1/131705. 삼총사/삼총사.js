function solution(number) {
    let count = 0;
    
  for(let a = 0; a<number.length; a++){
      for(let b=1; b<number.length;b++){
          for(let c=2;c<number.length;c++){
              if(a<b && b<c && a<c){
                  if(number[a]+number[b]+number[c]===0){
                      count++;
                      // console.log(a, b, c, count)
                      console.log(number[a], number[b], number[c], count)
                  }
              }
          }
      }
  }
    
    return count;
}