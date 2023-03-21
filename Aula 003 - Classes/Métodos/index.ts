class Pessoa{

    nome: string;
    idade: number;


    constructor(nome: string, idade: number){

        this.nome = nome;
        this.idade = idade;

    }

    comer(comida: string){

        return `${this.nome} comeu ${comida}`;

    }

    fezAniversario(){

        this.idade++;
        return `${this.nome} completou ${this.idade} anos`;

    }

}

const pessoa1 = new Pessoa("Gilmar Júnior", 20);

console.log(pessoa1.comer("Arroz"));
console.log(pessoa1.fezAniversario());

