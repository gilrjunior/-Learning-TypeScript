// PUBLIC -> TODOS PODEM ACESSAR
// PORTECTED -> SOMENTE A CLASSE E CLASSES FILHAS PODEM ACESSAR
// PRIVATE -> APENAS A PRÓPRIA CLASSE PODE ACESSAR

class Pessoa {

    public nome: string;
    public idade: number;
    private _salario: number;


    constructor(nome: string, idade: number, salario: number) {

        this.nome = nome;
        this.idade = idade;
        this._salario = salario;

    }

    public comer(comida: string) {

        return `${this.nome} comeu ${comida}`;

    }

    public fezAniversario() {

        this.idade++;
        return `${this.nome} completou ${this.idade} anos`;

    }

}

const pessoa = new Pessoa("Gilmar Júnior", 20, 10000);

console.log(pessoa.comer("Arroz"));
console.log(pessoa.fezAniversario());

