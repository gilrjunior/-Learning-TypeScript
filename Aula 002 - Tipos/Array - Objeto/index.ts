let array1: [string, string, number, boolean] = ["Gilmar", "Júnior", 20, true];

let array2: Array<string | number | boolean> = [20, "Gilmar", false, "Júnior"]

let obj1: { nome: string, sobrenome: string, idade: number, faculdade: boolean } = {

    nome: "Gilmar",
    sobrenome: "Júnior",
    idade: 20,
    faculdade: true

}

let obj2: Array<{ nome: string, sobrenome: string, idade: number, faculdade: boolean }> = [

    {

        nome: "Gilmar",
        sobrenome: "Júnior",
        idade: 20,
        faculdade: true

    },
    {

        nome: "Gilmar",
        sobrenome: "Reis",
        idade: 21,
        faculdade: false

    },
    {

        nome: "Gilmar",
        sobrenome: "Oliveira",
        idade: 22,
        faculdade: true

    },
    {

        nome: "Gilmar",
        sobrenome: "Rosa",
        idade: 23,
        faculdade: false

    }

]

console.log(array1)
console.log(array2)
console.log(obj1)
console.log(obj2)
