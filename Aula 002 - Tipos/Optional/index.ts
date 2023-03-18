const fn = (nome: string, idade?: number) => { // ? -> define que uma variavel é opcional

    if(!idade){
        return `Nome: ${nome}, Idade: sem valor definido`;
    }

    return `Nome ${nome}, Idade: ${idade}`;

};

console.log(fn("Gilmar", 20))
console.log(fn("Gilmar"))

let obj:{nome: string, idade?: number} = {nome: "Gilmar"}
