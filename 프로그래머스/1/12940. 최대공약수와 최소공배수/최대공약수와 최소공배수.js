function solution(n, m) {
   // 유클리드 호제법
    // n이 m보다 크다고 가정.
    // n%m의  나머지를 t -> (m,t)로 놓고  
    // m%t의 나머지를 r => (t,,r)로 놓고
    // 나머지가 0이되면 첫번쨰 값이 최대공약수가 됨.
    // 최대공약수*최소공배수 = nxm 이므로
    // 최소공배수 = nxm/최대공약수
    let min = n<m?n:m;
    let max = n<m?m:n;
    
    while(min!==0){
        let result = GCP(max, min);
        max=result[0];
        min=result[1];
    }
    
    return [max, n*m/max]
    
}

function GCP(a,b){
    // a가 무조건 b보다 큼.
    let r = a%b;
    return [b,r];
}