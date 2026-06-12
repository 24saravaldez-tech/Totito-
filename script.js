
//=======================================================================================================================================


let casillas = document.querySelectorAll('.caja')
let contador = 0
let reiniciar = document.querySelector('.botonReinicio')
let jugadasX = []
let jugadasO = []
let jugadasGeneral = ['1']
let casillasUtilizadas = []
let ganador = ''
let seccionAlertas = document.querySelector('.contenedorAlertas')
let alertaTurno = document.querySelector('#alerta-turno')
let alertaTurno2 = document.querySelector('#alerta-turno2')
let nombreJugador = document.querySelector('#nombre-jugador')
let alertaGanador = document.querySelector('#alerta-ganador')
let ganadorLetra = document.querySelector('#ganador-letra')
let alertaEmpate = document.querySelector('#alerta-empate')
let marcadorX = document.querySelector('.marcadorX')
let marcadorO = document.querySelector('.marcadorO')
let marcadorEmpates = document.querySelector('.marcadorEmpates')
let conteoX = 0
let conteoO = 0
let conteoE = 0

alertaTurno.classList.remove('d-none') //muestra
alertaTurno2.classList.add('d-none') //quita


casillas.forEach((boton) => {
    boton.addEventListener('click', (event) => {


        if (jugadasGeneral[0] == '1' && !casillasUtilizadas.includes(event.target.id)) {

            alertaTurno.classList.add('d-none') //muestra
            alertaTurno2.classList.remove('d-none') //quita


            nombreJugador.textContent = 'X'
            jugadasX.push(event.target.id)

            console.log('soy jugadas de X', jugadasX)

            boton.textContent = 'X'
            jugadasGeneral.unshift('2')

            casillasUtilizadas.push(event.target.id)


            console.log('soy jugadas general en la ultima posicion', jugadasGeneral[0])

            if (jugadasX.includes('1') && jugadasX.includes('2') && jugadasX.includes('3') ||
                jugadasX.includes('4') && jugadasX.includes('5') && jugadasX.includes('6') ||
                jugadasX.includes('7') && jugadasX.includes('8') && jugadasX.includes('9') ||
                jugadasX.includes('1') && jugadasX.includes('4') && jugadasX.includes('7') ||
                jugadasX.includes('2') && jugadasX.includes('5') && jugadasX.includes('8') ||
                jugadasX.includes('3') && jugadasX.includes('6') && jugadasX.includes('9') ||
                jugadasX.includes('1') && jugadasX.includes('5') && jugadasX.includes('9') ||
                jugadasX.includes('3') && jugadasX.includes('5') && jugadasX.includes('7')
            ) {
                ganador = 'X'
                conteoX++

                jugadasGeneral = []

                ganadorLetra.textContent = 'X'
                marcadorX.textContent = '🪄 Player X: ' + conteoX
                alertaGanador.classList.remove('d-none') // Se muestra
                alertaTurno.classList.add('d-none')
                alertaTurno2.classList.add('d-none')
            }

        } else if (jugadasGeneral[0] == '2' && !casillasUtilizadas.includes(event.target.id)) {

            alertaTurno.classList.remove('d-none') //muestra
            alertaTurno2.classList.add('d-none') //quita

            boton.textContent = 'O'
            jugadasGeneral.unshift('1')
            jugadasO.push(event.target.id)

            casillasUtilizadas.push(event.target.id)


            if (jugadasO.includes('1') && jugadasO.includes('2') && jugadasO.includes('3') ||
                jugadasO.includes('4') && jugadasO.includes('5') && jugadasO.includes('6') ||
                jugadasO.includes('7') && jugadasO.includes('8') && jugadasO.includes('9') ||
                jugadasO.includes('1') && jugadasO.includes('4') && jugadasO.includes('7') ||
                jugadasO.includes('2') && jugadasO.includes('5') && jugadasO.includes('8') ||
                jugadasO.includes('3') && jugadasO.includes('6') && jugadasO.includes('9') ||
                jugadasO.includes('1') && jugadasO.includes('5') && jugadasO.includes('9') ||
                jugadasO.includes('3') && jugadasO.includes('5') && jugadasO.includes('7')
            ) {
                ganador = 'O'
                conteoO++
                jugadasGeneral = []

                ganadorLetra.textContent = 'O'
                marcadorO.textContent = '🎧 Player O: ' + conteoO
                alertaGanador.classList.remove('d-none')
                alertaTurno.classList.add('d-none')


            }


        }

        if (casillasUtilizadas.length >= 9 && ganador != 'X' && ganador != 'O') {
            alertaEmpate.classList.remove('d-none')
            alertaTurno.classList.add('d-none')
            alertaTurno2.classList.add('d-none')

            conteoE++
            marcadorEmpates.textContent = '🤍 Dead heat: ' + conteoE

        }


    })

})


reiniciar.addEventListener('click', (event) => {
    casillas.forEach((boton) => {
        boton.textContent = ''
        contador = 0
        jugadasO = []
        jugadasX = []
        casillasUtilizadas = []
        jugadasGeneral = ['1']
        ganador = ''


        nombreJugador.textContent = 'X'
        alertaTurno.classList.remove('d-none')
        alertaTurno2.classList.add('d-none')
        alertaGanador.classList.add('d-none')
        alertaEmpate.classList.add('d-none')
    })
})