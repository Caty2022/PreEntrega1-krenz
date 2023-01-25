// simulador piedra, papel o tijera

// armamos las funciones
function ataque(jugador) {
  if (jugador == 1) {
    alert("Elegiste PIEDRA");
  } else if (jugador == 2) {
    alert("Elegiste PAPEL");
  } else if (jugador == 3) {
    alert("Elegiste TIJERA");
  }
}

function oponente(rival) {
  if (rival == 0) {
    alert("La maquina eligió PIEDRA");
  } else if (rival == 1) {
    alert("La maquina eligió PAPEL");
  } else if (rival == 2) {
    alert("La maquina eligió TIJERA");
  }
}

function resultado(rival, jugador) {
  if (rival == jugador - 1) {
    alert("EMPATASTE!");
  } else if (rival == 0 && jugador == 2) {
    alert("GANASTE");
  } else if (rival == 1 && jugador == 3) {
    alert("GANASTE");
  } else if (rival == 2 && jugador == 1) {
    alert("GANASTE");
  } else {
    alert("PERDISTE");
  }
}

// Damos la bienvenida al jugador
alert("¡¡Bienvenido!! Preparate para jugar:");
let validar = 1;
while (validar != 2) {
  let bandera = false;
  let jugador = null;

  // el jugador debe selecionar una opcion (1,2,3 son las unica que puede elegir)
  do {
    jugador = prompt("Escribe 1 para PIEDRA, 2 para PAPEL, 3 para TIJERA");
    if (jugador >= 1 && jugador <= 3) {
      bandera = true;
      ataque(jugador);
    } else if ((bandera = false));
  } while (bandera == false);
  while (bandera == true) {
    // la maquina selecciona su ataque
    let rival = Math.round(Math.random() * 2);
    oponente(rival);

    // mostramos el resultado
    resultado(rival, jugador);
    bandera = false;
  }

  // preguntamos si quiere volver a jugar
  do {
    validar = prompt(
      "¿Desea Volver a Jugar? (Presione 1 para continuar o 2 para salir)"
    );
  } while (validar != 1 && validar != 2);
}

// saludamos para terminar
alert("¡¡HASTA LA PROXIMA!!");
