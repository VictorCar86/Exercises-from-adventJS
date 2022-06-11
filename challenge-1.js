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