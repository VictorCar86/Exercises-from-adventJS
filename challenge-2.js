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