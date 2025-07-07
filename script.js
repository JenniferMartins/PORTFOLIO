/*JAVASCRIPT*/

/*INSERIR OS NÚMEROS NO CAMPO*/
function insert(num){
	var numero = document.getElementById('estilo-resultado').innerHTML;
	document.getElementById('estilo-resultado').innerHTML = numero + num;
}

/*LIMPAR TODOS OS NÚMEROS DO CAMPO DE UMA VEZ*/
function clean(){
	document.getElementById('estilo-resultado').innerHTML = "";
}

/*REMOVER OS NÚMEROS DO CAMPO, UM POR UM*/
function back(){
	var resultado = document.getElementById('estilo-resultado').innerHTML;
	document.getElementById('estilo-resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

/*CALCULAR OS NÚMEROS*/
function calcular(){
	var resultado = document.getElementById('estilo-resultado').innerHTML;
	if(resultado){
		document.getElementById('estilo-resultado').innerHTML = eval(resultado);
	}
}