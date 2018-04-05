// curso javascript ninja - Desafio 01

// Declarar uma variável chamada `myvar`, sem valor.
var myvar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;
console.log('Valor de myvar: ' + myvar);

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma = 15 + 8;
console.log('O valor da soma: ' + soma);

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma += 1;
console.log('Novo valor de soma: ' + soma);

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma *= 3;
console.log('Valor de soma multiplicado por 3: ' + soma);

// Qual é o valor da variável `soma` até aqui?
console.log('Valor de soma é igual a 72');

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souninja = true;
console.log('Sou ninja? ' + souninja);

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida = ['arroz', 'feijao', 'ovo'];
console.log('Imprimindo elementos do array diretamente: ' + comida);

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log('Valor do elemento de índice 1 do array comida: ' + comida[1]);

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
console.log('soma é igual a myvar(considerando também o tipo das variáveis)? ', (soma === myvar));

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
console.log('myvar é menor ou igual à variável soma? ', (myvar <= soma));

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao(num, den){
	if(den !== 0){
		return num / den;
	} else{
		return 'Denominador igual a zero. Operação inválida!';
	}
}

// Invoque a função criada acima, passando os parâmetros 10 e 2.
var resultado = divisao(10, 2);
console.log('Resultado da divisão de 10 por 2: ' + resultado);

//ADICIONAL

//testando um divisão inválida
var resultado02 = divisao(10,0);
console.log('Resultado da divisão de 10 por 0: ' + resultado02);