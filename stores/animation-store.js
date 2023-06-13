let played = false
export const hasAnimationBeenPlayed = (ok)=>{
    if(!played){
        played = true
        return false
    }
    return true
}