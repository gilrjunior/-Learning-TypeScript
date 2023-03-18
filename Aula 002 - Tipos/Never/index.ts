const error = ():never => {

    throw new Error('Tivemos um problema');

};

const loop = (): never => {

    while(true){
        console.log("Loop Infinito");
    }

};

const validate = (value: any) => {

    if(typeof value === 'string'){
        return console.log('É uma string');
    }else if(typeof value === 'number'){
        return console.log('É um número');
    }

    console.log(error());

};

//validate("123");
//validate("Gilmar");
validate({nome: 'Gilmar'});