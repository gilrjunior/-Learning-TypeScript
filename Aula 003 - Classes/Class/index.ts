class Pessoa{

    nome: string;
    idade: number;


    constructor(nome: string, idade: number){

        this.nome = nome;
        this.idade = idade;

    }

};


const pessoa1 = new Pessoa("Gilmar", 20);
const pessoa2 = new Pessoa("Joaquim", 40);

console.log(pessoa1.nome);
console.log(pessoa1.idade);

console.log(pessoa2.nome);
console.log(pessoa2.idade);