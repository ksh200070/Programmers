function solution(k, score) {
    const heap = [];  // 최소 힙을 사용할 배열
    const result = [];  // 매일 발표된 명예의 전당 최하위 점수
    
    for (let i = 0; i < score.length; i++) {
        // 최소 힙에 새로운 점수를 추가
        heap.push(score[i]);
        heap.sort((a, b) => a - b);  // 오름차순 정렬
        
        // 명예의 전당이 k개를 넘으면 최하위 점수를 제거
        if (heap.length > k) {
            heap.shift();  // 가장 작은 점수를 제거
        }
        
        // 명예의 전당의 최하위 점수를 기록
        result.push(heap[0]);  // 최소 힙의 루트 값이 최하위 점수
    }

    return result;
}
