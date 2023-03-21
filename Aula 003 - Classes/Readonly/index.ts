class Pessoa {

    public readonly nome = "Gilmar";

}

const p = new Pessoa();

console.log(p.nome);
//p.nome = "Gilmar Júnior" //não é possível fazer isso por conta do readonly (APENAS LEITURA)
