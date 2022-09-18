function dibujarCanvas() {
	tablero.fillStyle = "#E5E5E5"
	tablero.fillRect(0,0,1200,800);
	tablero.beginPath();
	tablero.fillStyle="#0A3871"
	tablero.fillRect(573,503,400,5)
}
	

function hacerTrazos(){
	let guiones=palabrasecreta.length;
	var anchura=600/guiones;
	x=570;
	y=600;
	for (var i = 0; i <guiones; i++) {
		tablero.moveTo(x+(anchura*i),y);
		tablero.lineTo(x+(anchura*i)+30,y);
		tablero.stroke();

	}

	

}