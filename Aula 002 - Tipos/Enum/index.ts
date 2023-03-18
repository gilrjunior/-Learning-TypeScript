enum Mes {

    JAN = "Janeiro",
    FEV = "Fevereiro",
    MAR = "Março",
    DEZ = "Dezembro"

};

let obj: { nome: string, mesAniversário: string } = {

    nome: "Gilmar",
    mesAniversário: Mes.DEZ

};

console.log(obj);