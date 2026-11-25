export function classificarTemperatura(temperatura){
	const frio = 20;
	const quente = 30;
	
	let classificacao = "";

	if(temperatura < frio){
		classificacao = "frio";
	} else {
		if (temperatura >= frio && temperatura < quente){
			classificacao = "agradavel";
		} else {
			classificacao = "quente";
		}
	} 

	return classificacao;
}
