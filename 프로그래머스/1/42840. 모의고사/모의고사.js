function solution(answers) {
    let person1 = new Array(answers.length).fill(1).map((v,i)=> (v+i)%5?(v+i)%5:5)
    let person2 = new Array(answers.length).fill(1).map((v,i) => {
        if(!(i%2))return 2;
        
        if((i%8)===1)return 1;
        if((i%8)===3)return 3;
        if((i%8)===5)return 4;
        if((i%8)===7)return 5;
        }
    )
    let person3 = new Array(answers.length).fill(1).map((v,i)=>{
        const quote = Math.floor(i/2);
        
        if(!(quote%5))return 3;
        if((quote%5)===1)return 1;
        if((quote%5)===2)return 2;
        if((quote%5)===3)return 4;
        if((quote%5)===4)return 5;
    })
    
    let count1=0;
    let count2=0;
    let count3=0;
    
    answers.map((answer,i)=>{
        if(answer===person1[i])count1+=1;
        if(answer===person2[i])count2+=1;
        if(answer===person3[i])count3+=1;
    })
    const result = [[1,count1],[2,count2],[3,count3]].sort((a,b)=> b[1]-a[1])
    
    return result.filter((v)=> v[1]>=result[0][1]).map((v,i)=> v[0]).sort((a,b)=> a-b)
    
    
}