//requisição e conversao do bitcoin

var request = new XMLHttpRequest();
var url = "https://api.bitpreco.com/btc-brl/ticker";

var valores = document.getElementById("valores");
var textoResultado = document.getElementById("textoResultado");
var textoErro = document.getElementById("textoErro");
var bitcoin;

request.onreadystatechange = function() { 
	if (request.readyState == 4 && request.status == 200) {

		var resp = JSON.parse(request.responseText);
		bitcoin = resp.buy;

		//exibe o valor do bitcoin
		var text = document.getElementById("paragrafo").innerHTML = bitcoin;
	}
}

request.open("GET", url, true);
request.send(); 

function checkboxBTC() {
	try { 
		var btc = parseFloat(valores.value);
		valores.classList.remove("error");

		if(btc > 0 && !isNaN(btc) && bitcoin) {
			var result = btc * bitcoin;
			
			textoResultado.innerHTML = "Valor BTC: " + result.toFixed(2);
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

/* fim */