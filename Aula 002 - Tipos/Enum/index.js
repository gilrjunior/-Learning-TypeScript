var Mes;
(function (Mes) {
    Mes["JAN"] = "Janeiro";
    Mes["FEV"] = "Fevereiro";
    Mes["MAR"] = "Mar\u00E7o";
    Mes["DEZ"] = "Dezembro";
})(Mes || (Mes = {}));
;
var obj = {
    nome: "Gilmar",
    mesAniversário: Mes.DEZ
};
console.log(obj);
