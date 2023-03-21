class Utils{

    static cloneObject(object: Array<{}>){

        return JSON.parse(JSON.stringify(Object.assign(object)));

    }

}

const tenis1: {tamanho: number, estoque: boolean} = {

    tamanho: 40,
    estoque: true

};

const tenis2: {tamanho: number, estoque: boolean} = {

    tamanho: 42,
    estoque: false

};

console.log(Utils.cloneObject([tenis1, tenis2]));


