function solution(schedules, timelogs, startday) {
    // startday: 월1, 화2, 수3, 목4, 금5, 토6, 일7
    // if startday = 1이라면, schedule[5],[6]:주말
    // if startday = 2라면, schedule[4],[5] : 주말 ->> 6-startday, 6-startday+1 : 주말 ->> 무시
    // if startday = 3, schedule[3],[4]
    // if startday = 4, schedule[2],[3]
    // if startday = 5, schedule[1], [2]
    // if startday = 6, schedule[0], [1]
    // if startday = 7, schedule[6], [0] ->> 6, 
    let count = 0;
    let answer = 0; 
    
    schedules = schedules.map((schedule,i)=>{
        let s = String(schedule);
        let hour = s.length===3? s[0] : s[0]+s[1] ;
        let minute = s.length===3? s[1]+s[2] : s[2]+s[3] ;
        
        if(Number(minute)>=50){
            hour = String(Number(hour)+1);
            minute = String(Number(minute)-50);
            
            if(minute.length===1){
                minute='0'+minute;
            }
            
            return Number(hour+minute);
        }else{
           return Number(hour+minute)+10
        }
        
    })
    
    for(let i =0; i<schedules.length;  i++){
        
        
        timelogs[i].map((timelog, dateI)=>{
            // 주말이면 패스
            if(startday===7){
                if(dateI!==6&&dateI!==0){
                    if(timelog <= schedules[i]){
                    count+=1;
                } 
                }
            }else{
                if(dateI!==6-startday && dateI!==7-startday ){
                    // 출근시간 <= 지정시각+10, count ++;

                    // 만약 2359라면 +10했을 때 2369 x, 2409가 되어야함
                    // 시, 분 나누기. if(timelong.length===3){시=timelog[0], 분=timelog[1]+[2]}
                    // if(timelog.length===4){시=timelog[0]+[1], 분=timelog[2]+[3]}
                    //  if(분<=00 && 분>=59){시=시+1, 분=분-50} 

                    if(timelog <= schedules[i]){
                        count+=1;
                    } 
                } 
            }
            
            // 마지막 인덱스라면, count확인해서 answer 추가.
            if(dateI===6){
                if(count===5){
                    answer+=1;
                } 
                count=0;
            }
            
        })
    } 
    
    return answer;
}