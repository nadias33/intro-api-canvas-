var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// 1ER EJEMPLO DE TRAZO
//ctx.fillStyle ="green";
//ctx.fillRect(10, 10, 100, 100);

// 1 TRAZO RECTANGULAR 
 //ctx.fillRect(25,25,100,100);
 //ctx.clearRect(45,45,60,60);
 //ctx.strokeRect(50,50,50,50);

// triangulo
 //ctx.beginPath();
 //ctx.moveTo(75,50);
 //ctx.lineTo(100,75);
// ctx.lineTo(100,25);
 //ctx.fill();

 // trazo de pluma 
// ctx.beginPath();
 //ctx.arc(75,75,50,0, Math.PI * 2, true);
 //ctx.moveTo(110,75);
 //ctx.arc(75,75,35,0, Math.PI, false);
 //ctx.moveTo(65,65);
 //ctx.arc(60,65,5,0, Math.PI * 2, true);
 //ctx.moveTo(95,65);
 //ctx.arc(90,65,5,0, Math.PI * 2, true);
 //ctx.stroke();

 //  trazo lineas 
//ctx.beginPath ();
//ctx.moveTo(25,25);
//ctx.lineTo(105,25);
//ctx.lineTo(25,105);
//ctx.fill();

// triangulo contorneado

//ctx.beginPath();
//ctx.moveTo(125,125);
//ctx.lineTo(125,45);
//ctx.lineTo(45,125);
//ctx.closePath();
//ctx.stroke();

// Arcos
//for (let i = 0; i < 4; i++) {
    //for (let j = 0; j < 3; j++) {
      //ctx.beginPath();
      //const x = 25 + j * 50; // Coordenada x
      //const y = 25 + i * 50; // Coordenada y
      //const radius = 20; // Radio del Arco
     // const startAngle = 0; // Punto inicial del Círculo
      //const endAngle = Math.PI + (Math.PI * j) / 2; // Punto final del Círculo
      //const counterclockwise = i % 2 !== 0; // En el sentido de las agujas del reloj o en sentido contrario

      //ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

      //if (i > 1) {
       // ctx.fill();
      //else {
       // ctx.stroke();
     // }
   // }
 // }
   // Ejemplo de curvas cuadráticas
   ctx.beginPath();
   ctx.moveTo(75, 25);
   ctx.quadraticCurveTo(25, 25, 25, 62.5);
   ctx.quadraticCurveTo(25, 100, 50, 100);
   ctx.quadraticCurveTo(50, 120, 30, 125);
   ctx.quadraticCurveTo(60, 120, 65, 100);
   ctx.quadraticCurveTo(125, 100, 125, 62.5);
   ctx.quadraticCurveTo(125, 25, 75, 25);
   ctx.stroke();
 
