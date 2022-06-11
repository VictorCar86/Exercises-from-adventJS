// Challenge #3
export default function isValid(letter) {
    let freeAvaliable = true
    let ClosedParent = false
    let letterAvaliable = false
    let firstExist = false
    let maybe = false;
    for (let l=0; l<letter.length; l++){
        let slice = letter.slice(l,l+1)
        if (slice === "[" || slice === "{"){
            freeAvaliable = false
        } if (slice === "(" && !firstExist){
            firstExist = true
            ClosedParent = false
            letterAvaliable = false
        } else {
            if (slice === "("){
                freeAvaliable = false
            }
        }
        if (slice === ")" && !ClosedParent && letterAvaliable){
            ClosedParent = true
            firstExist = false
        } if (
            slice === "a" ||
            slice === "e" ||
            slice === "i" ||
            slice === "o" ||
            slice === "u" ||
            slice === "b" ||
            slice === "c" ||
            slice === "h" ||
            slice === "l" ||
            slice === "m" ||
            slice === "n" ||
            slice === "p" ||
            slice === "s" ||
            slice === "ó"
            ){
            letterAvaliable = true
        }
    }
    if (freeAvaliable && ClosedParent){
        maybe = true
    } else {
        maybe = false
    }
    return maybe
}