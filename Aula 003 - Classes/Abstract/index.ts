// PUBLIC -> TODOS PODEM ACESSAR
// PORTECTED -> SOMENTE A CLASSE E CLASSES FILHAS PODEM ACESSAR
// PRIVATE -> APENAS A PRÓPRIA CLASSE PODE ACESSAR

abstract class Pessoa {

    private nome: string;
    private idade: number;
    protected abstract salario: number;


    constructor(nome: string, idade: number) {

        this.nome = nome;
        this.idade = idade;

    }

    public comer(comida: string) {

        return `${this.nome} comeu ${comida}`;

    }

    public fezAniversario() {

        this.idade++;
        return `${this.nome} completou ${this.idade} anos`;

    }

    public get Nome() {

        return this.nome;

    }

    public set Nome(nome: string) {

        this.nome = nome;

    }

    public get Idade() {

        return this.idade;

    }

    public set Idade(idade: number) {

        this.idade = idade;

    }


}

class Professor extends Pessoa {

    protected salario: number;

    constructor(nome: string, idade: number, salario: number) {

        super(nome, idade);
        this.salario = salario;

    }

    public get Salario() {

        return this.Salario;

    }

    public set Salario(salario: number) {

        this.Salario = salario;

    }

}

class Estudante extends Pessoa {

    private _profissao: string;
    protected salario: number;

    constructor(nome: string, idade: number, profissao: string, salario: number) {

        super(nome, idade);
        this._profissao = profissao;
        this.salario = salario;

    }

    public get profissao() {

        return this._profissao;

    }

    public set profissao(profissao: string) {

        this._profissao = profissao;

    }

    public get Salario() {

        return this.Salario;

    }

    public set Salario(salario: number) {

        this.Salario = salario;

    }


}

const gil = new Estudante("Gilmar Junior", 20, "Engenheiro de Computação", 1500);

console.log(gil);


