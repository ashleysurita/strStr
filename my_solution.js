function(haystack, needle) {
    if(!haystack.includes(needle)) return -1
    if(!needle.length) return 0
    
    let i = 0
    while(i < haystack.length){
        
        if(haystack.slice(i, i + needle.length) === needle){
            return i
        } else {
            i++            
        }                  
    }
    
    return i
};
