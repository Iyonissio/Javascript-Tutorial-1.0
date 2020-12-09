var idade = 20;
var nome = 'yoyo';

if( idade==20 && nome =='yoyo'){
    console.log('Validou &&');
} else {
    console.log('Invalidou || ');
}

var idade2 = 2;
var nome2 = 'Yola';

if (idade2==3 || nome2=='Yola'){
    console.log('Operador Ou Sucesso');
}


if ((idade==20 && nome=='yoyo') || idade2==3 ){
    console.log('Testando as duas condicoes Exito');
}