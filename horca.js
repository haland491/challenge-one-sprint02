//selectores
//metodo find 
//const arr=persons.find(p=>p.name===newName)

//function validarperso(name){
  //for(let i  in persons){
  //if( persons[i].name===name) {
    
    //return persons[i].id
 

let palabras=['ALURA','ORACLE','ONE','JAVASCRIPT','HTML'];
let tablero=document.querySelector("canvas").getContext('2d');
let palabrasecreta=""
let intentos=0;



function escojerPalabra(){
	let palabra=palabras[Math.floor(Math.random()*palabras.length)];
	palabrasecreta=palabra;
	console.log(palabrasecreta);
	
}




//iniciar juego
function iniciarJuego(){
	document.getElementById("iniciar-juego").style.display="none";
	escojerPalabra();
	dibujarCanvas();
	hacerTrazos();


}
function mostrarLetra(e){
	console.log(e);
	console.log(intentos++);
	anchura=600/palabrasecreta.length;
	var texto=e.key;
	texto=texto.toUpperCase();
	if(teclaPress(e.keyCode)){ 
	
		for(var j=0; j<palabrasecreta.length;j++){
			if (palabrasecreta[j]===texto) {
		
				tablero.font="30px arial";
    	    	tablero.fillStyle="black";
        		tablero.fillText(texto,575+(anchura*j),590); 
				
			}

			//input.value=""
		}
	}
	else alert("no se aceptan numeros");
}

document.addEventListener("keydown",mostrarLetra);

function teclaPress(num){
	const codnum=[48,49,50,51,52,53,54,55,56,57];
		for(var j in codnum){
			if (codnum[j]===num){
			return false;
			}
		}
	return true;	
}





