// Challenge #1
export default function contarOvejas(ovejas) {
    let ovejasNew = []
    ovejas.map((listArray)=>{
      let countN = 0
      let countA = 0
      let color = listArray.color
      for (let n = 0; n < listArray.name.length; n++){
          let name = listArray.name.slice(n,n+1)
          if (name === "n"|| name === "N"){
              countN++
          } else if (name === "a" || name === "A"){
              countA++
          }
      } if (countN && countA && color === "rojo"){
          ovejasNew.push({name: `${listArray.name}`, color: `${listArray.color}`})
      }
  })
    return ovejasNew
  }

// Challenge #2
export default function listGifts(letter) {
    let frase_sumatoria = "";
    let objeto_entregar = {};
    function incluyePalabra(obj, buscarTexto) {
        return Object.keys(obj).some(key => key === buscarTexto);
       }
       for (let i=0; i < letter.length+1; i++) {
           const confirmacionLinea = frase_sumatoria.slice(0, 1);
           let texto = letter.slice(i, i+1);
           if (i === letter.length){
               texto = " ";
           }
           if (texto === " ") {
               if (!incluyePalabra(objeto_entregar, frase_sumatoria)) {
                   objeto_entregar[frase_sumatoria] = 1
                   if (confirmacionLinea === "_" || frase_sumatoria === " " || frase_sumatoria === ""){
                       delete objeto_entregar[frase_sumatoria];
                   }
                   frase_sumatoria = "";
               } else {
               const valor = objeto_entregar[frase_sumatoria];
               objeto_entregar[frase_sumatoria] = valor +1;
               frase_sumatoria = "";
               }
           } else {
               frase_sumatoria = frase_sumatoria + texto;
           }
       }
   return objeto_entregar
   }

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