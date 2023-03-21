// PUBLIC -> TODOS PODEM ACESSAR
// PORTECTED -> SOMENTE A CLASSE E CLASSES FILHAS PODEM ACESSAR
// PRIVATE -> APENAS A PRÓPRIA CLASSE PODE ACESSAR

class Pessoa {

    protected nome: string;
    protected idade: number;


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

}

class Gilmar extends Pessoa{

    private _profissao: string;

    constructor(nome: string, idade: number, profissao: string){

        super(nome, idade);
        this._profissao =  profissao;

    }

    public getProfissao(){

        return `${this.nome} é ${this._profissao}`;

    }

}

const gil = new Gilmar("Gilmar Junior", 20, "Engenheiro de Computação");

console.log(gil);

