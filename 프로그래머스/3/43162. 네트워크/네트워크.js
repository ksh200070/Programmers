function solution(n, computers) {
    let visited = new Array(n).fill(0); // [0,0,0]
    let count = 0;
    
    for(let i =0; i<visited.length; i++){
        if(visited[i]!==1){
            count+=1;
            dfs(visited,computers,i);
        }
        
    }
    return count;
}

function dfs(visited,map,node){
    visited[node]=1;
    
    for(let i=0; i<map[node].length; i++){
        if(map[node][i] && visited[i]===0){
            dfs(visited,map,i)
        }
    }
}