function makePage(){
	let interviste=getInterviste();
	let body=document.getElementById("body");
	let content=body.innerHTML;
	content+="<ol type=\"1\">";
	for(handleIntervista in interviste){
		let intervista=interviste[handleIntervista];
		content+="<li><ol>";
		for(nomeDomanda in intervista){
			let domanda=intervista[nomeDomanda];
			let i;
			content+="<li>";
			for(i=0;i<domanda.length;i++){
				let interazione=domanda[i];
				if(interazione.match("Intervistatore")){
					content+="<p><b>"+interazione.slice(0,15)+"</b>"+interazione.slice(15)+"</p>";
				}else{
					content+="<p><b>"+interazione.slice(0,13)+"</b>"+interazione.slice(13)+"</p>";
				}
			}
			content+="</li>";
		}
		content+="</ol>";
		content+="</li>";
	}
	content+="</ol>";
	body.innerHTML=content;
}
function switchTheme(){
	let main=document.getElementById("body");
	if(main.style.color=="black"){
		main.style.color="white";
		main.style.backgroundColor="black";
	}else{
		main.style.color="black";
		main.style.backgroundColor="white";
	}
}
