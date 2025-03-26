function solution(arr, delete_list) {
    return arr.filter((a)=> delete_list.indexOf(a)<0??a)
}