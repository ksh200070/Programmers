function solution(phone_book) {
    let hashmap = {};
    
    for(const k of phone_book){
        hashmap[k]=true;
    }
    
    for(const k of phone_book){
        for(let i=1; i<k.length; i++){
            let prefix = k.substring(0,i);
            
            if(hashmap[prefix]){
                return false;
            }
        }
    }
    
    return true;
}