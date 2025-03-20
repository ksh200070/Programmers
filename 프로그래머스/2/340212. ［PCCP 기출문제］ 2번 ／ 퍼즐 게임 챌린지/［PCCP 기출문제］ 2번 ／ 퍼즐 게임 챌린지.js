function solution(diffs, times, limit) {
    // (info)
    // 난이도와 소요시간이 정해져있는 n개의 퍼즐을 순서대로 풀어야함..
    // 나의 숙련도에 따라 퍼즐 틀리는 횟수가 바뀜.
    
    // (parameters)
    // diff : 현재 퍼즐 난이도, time_cur : 현재 퍼즐의 소요시간, time_prev : 이전 퍼즐 소요시간, level : 나의 숙련도.
    // (diffs:[1, 5, 3], times:[2, 4, 7], limit)
    
    // (조건)
    // diff(퍼즐난이도)<=level(숙련도=나의난이도), 소요되는 시간 = time_cur
    // diff>level, 소요되는 시간 = (time_cur+time_prev)*(diff-level) + time_cur
    // (단, diff>level 인데, 2번째라면 소요시간 = time_cur)
    
    // (요구사항)
    // 제한시간(limit)안에 퍼즐을 모두 해결하기 위한 숙련도(level)의 최소 정수.
    function calculateTime(level){
        let totalTime = 0;

        for(let i =0; i<diffs.length; i++){
            if(diffs[i]<=level){
                totalTime+=times[i];
            }else{
                totalTime+=(times[i]+times[i-1])*(diffs[i]-level)+times[i];
            }
            
            if(totalTime>limit)return totalTime;
        }
        
        return totalTime;   
    }
    
    let left = 1;
    let right = diffs.reduce((acc, cur)=> Math.max(acc, cur),1)
    let answer = right;
    
    while(left<=right){
        let mid = Math.floor((right+left)/2);
        let totalTime = calculateTime(mid);
        
        if(totalTime>limit){
            left=mid+1;
        }else{
            right=mid-1;
            answer = mid;
        }    
    }
    
    return answer;
}

