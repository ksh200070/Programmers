function solution(numbers, hand) {
    // 키패드 위치를 (row, col) 형식으로 지정
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        0: [3, 1]
    };
    
    // 왼손과 오른손의 초기 위치는 *와 #에서 시작
    let left = [3, 0];  // * 위치
    let right = [3, 2]; // # 위치
    let result = "";

    // 숫자에 대한 손가락 사용 규칙 처리
    for (let num of numbers) {
        if (num === 1 || num === 4 || num === 7) {
            // 왼손으로 처리
            result += "L";
            left = keypad[num];
        } else if (num === 3 || num === 6 || num === 9) {
            // 오른손으로 처리
            result += "R";
            right = keypad[num];
        } else {
            // 2, 5, 8, 0은 가까운 손으로 처리
            const leftDist = Math.abs(left[0] - keypad[num][0]) + Math.abs(left[1] - keypad[num][1]);
            const rightDist = Math.abs(right[0] - keypad[num][0]) + Math.abs(right[1] - keypad[num][1]);

            if (leftDist < rightDist) {
                result += "L";
                left = keypad[num];
            } else if (rightDist < leftDist) {
                result += "R";
                right = keypad[num];
            } else {
                // 거리가 같을 경우 hand에 따라 결정
                if (hand === "left") {
                    result += "L";
                    left = keypad[num];
                } else {
                    result += "R";
                    right = keypad[num];
                }
            }
        }
    }

    return result;
}
