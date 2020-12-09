let cao = {
    nome: "Bobila",
    idade: 2,
    ladrar: function (){
        console.log('Wow wow wow');
    },
    contar: function(a,b){
        return a+b;
    },
};

console.log(cao.nome);

cao.ladrar();

var contar = cao.contar(3,3);

console.log(contar);