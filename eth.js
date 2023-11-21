var eth = new XMLHttpRequest();
var urlETH = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,BRL,EUR";
var paragrafoETH = document.getElementById("paragrafoETH");
var moedaETH;

eth.onreadystatechange = function () {
	if (eth.readyState == 4 && eth.status == 200) {
		var getETH = JSON.parse(eth.responseText);
		if (getETH.hasOwnProperty("BRL")) {
			moedaETH = getETH.BRL;
			paragrafoETH.innerHTML = moedaETH;
		} else {
			console.error("a api nao tem valor em brl");
		}
	}
}

eth.open("GET",urlETH,true);
eth.send();

function checkboxETH() {
	try { 
		var eth = parseFloat(valores.value);
		valores.classList.remove("error");

		if(eth > 0 && !isNaN(eth) && moedaETH) {
			var result = eth * moedaETH;
			
			textoResultado.innerHTML = "Valor ETH: " + result;
		} else {
			throw "Preencha com numeros válidos!";
		}  
		textoErro.innerHTML = "";
	}catch(err) {
		textoErro.innerHTML = "Erro: " + err + "<br>";
		textoResultado.innerHTML = "";
		valores.classList.add("error");
	}
}