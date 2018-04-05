// Curso JavaScript Ninja - Challenge 02

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(num01, num02){
	return num01 + num02;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = soma(10, 20);
console.log('Valor inicial da soma: ' + resultado);

// realizando a soma por 5 do resultado obtido
resultado+=5;

// Qual o valor atualizado dessa variável?
console.log('Valor atualizado da variável: ' + resultado);
// Declare uma nova variável, sem valor.
var valor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function atribuir(valAtribuir){
	valor = valAtribuir;
	return 'O valor da variável agora é ' + valor;
}


// Invoque a função criada acima.
var retorno = atribuir(150);
console.log(retorno);

// Qual o retorno da função? (Use comentários de bloco).
/*O retorno foi este: O valor da variável agora é 150*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function operacao(arg01, arg02, arg03){
	if(arg01 === undefined || arg02 === undefined || arg03 === undefined){
		return 'Preencha os valores corretamente';
	} else{
		return arg01 * arg02 * arg03 + 2;
	}
}

//outra forma de implementação
/*
function operacao(arg01, arg02, arg03){
	if(arg01 === undefined || arg02 === undefined || arg03 === undefined){
		return 'Preencha os valores corretamente';
	} 
	return arg01 * arg02 * arg03 + 2;
}
*/

// Invoque a função criada acima, passando só dois números como argumento.
var retornoFunc = operacao(10,20);
console.log('Retorno: ' + retornoFunc);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// O retorno é este: Preencha os valores corretamente

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
retornoFunc = operacao(10, 20, 30);
console.log('Retorno: ' + retornoFunc);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//O retorno é este: 6002

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function analiseNums(arg01, arg02, arg03){
	if (arg01 !== undefined && arg02 === undefined && arg03 === undefined) {
		return arg01;
	} else if (arg01 !== undefined & arg02 !== undefined && arg03 === undefined){
		return arg01 + arg02;
	} else if (arg01 !== undefined && arg02 !== undefined && arg03 !== undefined){
		if (arg03 !== 0){
			return (arg01 + arg02) / arg03;
		}else{
			return 'Divisão por zero. Escolha outro valor para o terceiro argumento';
		}
	} else if(arg01 === undefined && arg02 === undefined && arg03 === undefined){
		return false;
	} else{
		return null;
	}
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
//passando nenhum argumento
var nResultado = analiseNums(); //false
console.log('Resultado (sem argumentos): ' + nResultado);

//passando um argumento
nResultado = analiseNums(10); //10
console.log('Resultado (passando um argumento): ' + nResultado);

//passando dois agumentos
nResultado = analiseNums(10, 20); // 30
console.log('Resultado (passando dois argumentos): ' + nResultado);

// passando três argumentos
nResultado = analiseNums(10, 20, 30); // 1
console.log('Resultado (passando três argumentos): ' + nResultado);
