function solution(number, limit, power) {
    let totalWeight = 0;

    // 1부터 number까지 각 기사의 공격력을 계산
    for (let i = 1; i <= number; i++) {
        // i의 약수 개수를 구하기
        let divisorCount = 0;

        // i의 약수를 구하기 위해 1부터 sqrt(i)까지 반복
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                divisorCount++;  // j는 약수
                if (j !== i / j) {
                    divisorCount++;  // i / j도 약수 (i / j != j인 경우)
                }
            }
        }

        // 약수 개수가 limit을 초과하면 power를 사용
        if (divisorCount > limit) {
            totalWeight += power;
        } else {
            totalWeight += divisorCount;
        }
    }

    return totalWeight;
}