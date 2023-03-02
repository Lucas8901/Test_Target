/**
 *
 1) Observe o trecho de código abaixo:

    int INDICE = 13, SOMA = 0, K = 0;

    enquanto K < INDICE faça

    {

    K = K + 1;

    SOMA = SOMA + K;

    }
    imprimir(SOMA);

    Ao final do processamento, qual será o valor da variável SOMA?
 *  */ 

    let indice = 13;
    let soma = 0;
    let k = 0;

    while(k < indice){
        k += 1;
        console.log(`${soma+=k}`)
    }

    console.log(soma)


/**
 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.


IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
 */
var n1 = 1;
var n2 = 1;
var resultado = 0;

for( var i = 0; i < 100; i++){

    resultado = n1 + n2;
    n1 = n2;
    n2 = resultado
}


/**
 3) Descubra a lógica e complete o próximo elemento:



a) 1, 3, 5, 7, ( resultado = 9 ) 

b) 2, 4, 8, 16, 32, 64, ( resultado = 128 )

c) 0, 1, 4, 9, 16, 25, 36, ( resultado = 49 ) 

d) 4, 16, 36, 64,( resultado = 100 ) 

e) 1, 1, 2, 3, 5, 8, ( resultado = 13 )

f) 2,10, 12, 16, 17, 18, 19, ( resultado = 200 )

 */

/**
 * 4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia,
 *      qual estará mais próximo a cidade de Ribeirão Preto?
 * 
 R: AMBOS ESTARAO A MESMA DISTANCIA DE RIBEIRÃO PRETO
 POIS QUANDO SE CRUZAREM NA RODOVIA OS DOIS ESTARAO A MESMA DISTACIA  DE RIBEIRAO PRETO  APOS ISSO O CARRO POR SER MAIS RAPIDO
 PODERA CHEGAR PRIMEIRO MAIS NO INSTANTE EM QUE SE CRUZAREM ESTARAO NA MESMA DISTACIA
 */

 // 5 -Escreva um programa que inverta os caracteres de um string.

 function invert (str){
    let saida = '';
    for(let i = str.length -1; i >= 0; i--){
        saida += str[i]
    }
    console.log(saida);
}

invert('RIBEIRAO PRETO')