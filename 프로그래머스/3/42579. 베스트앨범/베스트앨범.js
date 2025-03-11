function solution(genres, plays) {
    // 1. 장르별 총 재생 수 계산
    const totalPlaysByGenre = genres.reduce((acc, genre, i) => {
        acc[genre] = (acc[genre] || 0) + plays[i];
        return acc;
    }, {});
    
    
    // 2. 장르별 총 재생 수 기준으로 정렬
    const sortedGenresByPlays = Object.entries(totalPlaysByGenre)
        .sort((a, b) => b[1] - a[1]) // 재생 수 기준 내림차
    
    // 3. 곡 정보를 정리
    const songInfoList = genres.map((genre, i) => ({
        genre,
        index: i,
        play: plays[i],
    }));

    
    let answer = [];
    
    // 4. 각 장르별 상위 2개 곡 선택
    sortedGenresByPlays.forEach((genre) => {
        const topSongs = songInfoList
            .filter((song) => song.genre === genre[0]) // 해당 장르의 곡만 필터링
            .sort((a, b) => b.play - a.play || a.index - b.index) // 재생 수 내림차순, 같으면 index 오름차순
            .slice(0, 2); // 최대 2개 선택

        answer.push(...topSongs.map((song) => song.index));
    });
    
    return answer;
    
}