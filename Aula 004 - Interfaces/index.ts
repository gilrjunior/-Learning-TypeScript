interface IPessoa {

    nome: string;
    idade: number;
    readonly cpf:string;

}

let pessoa: IPessoa = {

    nome: "Gilmar",
    idade: 20,
    cpf: "734848743-21"

}

class Gilmar implements IPessoa{

    nome: string = "Gilmar";
    idade: number = 20;
    readonly cpf:string = "734848743-21";

}