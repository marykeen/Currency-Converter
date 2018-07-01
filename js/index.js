 
 function currencies(){
 	let convertFrom = document.getElementById('converting_from');
 	let convertTo = document.getElementById('converting_to');
 	let xHttp = new XMLHttpRequest();
 	xHttp.onreadystatechange = function(){
 		if (this.readyState == 4 && this.status == 200){
 			let obj = JSON.parse(this.responseText);
 			let options ="";
 			for (let key in obj.results){
 				options = '$(options)<option>$(key)</option>';
 			}
 			convertFrom.innerHTML = options;
 			convertTo.innerHTML = options;
 		}
 	};
 	xHttp.open('GET', 'https://free.currencyconverterapi.com/api/v5/currencies', true);
 	xHttp.send();
 };



function convertCurrency(){
	let convertFrom = document.getElementById('converting_from').value;
 	let convertTo = document.getElementById('converting_to').value;
 	let amount = document.getElementById('amount').value;
 	let result = document.getElementById('result').value;
 	if (convertFrom.length>0 && convertTo.length>0){
 		let xHttp = new XMLHttpRequest() {
 			if (this.readyState == 4 && this.status == 200){
 				let obj = JSON.parse(this.responseText);
 				console.log(obj);
 				let money = obj['$(convertFrom)_$(convertTo)'];
 				if(money != undefined){
 					result.innerHTML = parseFloat(amount) * parseFloat(money);
 				}

 			}
 		};
 		xHttp.open('GET', 'https://free.currencyconverterapi.com/api/v5/convert?q=$(convertFrom)_$(convertTo)&compact=ultra', true);
 	xHttp.send();

 	}
};


  
console.log("Hello");
