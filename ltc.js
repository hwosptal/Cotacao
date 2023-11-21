//requisicao e conversão do LITECOIN

var litecoin = new XMLHttpRequest();
var urlLTC = "https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=BTC,BRL,EUR&extraParams=your_app_name";
var ltcmoeda; 

litecoin.onreadystatechange = function () {
	if(litecoin.readyState == 4 && litecoin.status == 200) {
		
		var getvalue = JSON.parse(litecoin.responseText);
		//ltcmoeda = getvalue.brl;
		ltcmoeda = getvalue.BRL;

		var ltcparagrafo = document.getElementById("paragrafoLTC").innerHTML = ltcmoeda;
	}
}

litecoin.open("GET",urlLTC,true);
litecoin.send();


function checkboxLTC() {
	try { 
		var ltc = parseFloat(valores.value);
		valores.classList.remove("error");

		if(ltc > 0 && !isNaN(ltc) && ltcmoeda) {
			var result = ltc * ltcmoeda;
			
			textoResultado.innerHTML = "Valor LTC: " + result.toFixed(2);
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