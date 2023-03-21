// PUBLIC -> TODOS PODEM ACESSAR
// PORTECTED -> SOMENTE A CLASSE E CLASSES FILHAS PODEM ACESSAR
// PRIVATE -> APENAS A PRÓPRIA CLASSE PODE ACESSAR

class Pessoa {

    private nome: string;
    private idade: number;


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

    public get Nome(){

        return this.nome;

    }

    public set Nome(nome: string){

        this.nome = nome;

    }

    public get Idade(){

        return this.idade;

    }

    public set Idade(idade: number){

        this.idade = idade;

    }


}

class Estudante extends Pessoa{

    private _profissao: string;

    constructor(nome: string, idade: number, profissao: string){

        super(nome, idade);
        this._profissao =  profissao;

    }

    public get profissao(){

        return this._profissao;

    }

    public set profissao(profissao: string){

        this._profissao = profissao;

    }


}

const gil = new Estudante("Gilmar Junior", 20, "Engenheiro de Computação");

console.log(gil.Nome); //getter
gil.Nome = "Gilmar"; //setter
console.log(gil.Nome);

