// Dar vida a todo
function empezar() {
    contar(); // Empieza el contador

    cambiarimagen() // Pone la primera foro
    
    BotonEmp.style.display = "none";
    tablatop.style.display = "";
    tablabot.style.display = "";
    tablabuttons.style.display = "";
    tablainf.style.display="";

    realizarAccionesEspeciales(); // Comienza las acciones
    console.log(acciones); // Muestra las acciones

    realizarAccionesingEspeciales(); // Recarga las acciones de ingeniero
    console.log(accionesing); // Muestra las acciones
}

// Duración de cada conteo en milisegundos
const duracionConteo = 1000;

// Contadores
let minutos = 0;
let horas = 0;
let dias = 1;

// Función para mostrar los contadores en el DOM
function mostrarContadores() {
    document.getElementById('horas').innerText = horas;
    document.getElementById('dias').innerText = dias;
}

// Función para realizar el conteo y ejecutar acciones especiales
function contar() {
    mostrarContadores(); // Muestra las horas y los dias

    actualizarInterfazAcc(); // Muestra los recursos

    actualizarInterfazPo(); // Muestra la población

    actualizarInterfazPe() // Muestra los penalizadores

    // Actualiza la variable CSS con el nuevo valor
    document.documentElement.style.setProperty('--temperatura', temperatura + '%');
    document.documentElement.style.setProperty('--esperanza', esperanza + '%');
    document.documentElement.style.setProperty('--descontento', descontento + '%');

    // Lista con las historietas que iran apareciendo

    // Código para el 01D
    if (dias == 1 && horas == 1 && minutos == 1) {
        var url = '../02-FrostPunk/03-Ventanas/08-Historias/01H.html'; // URL del archivo HTML a cargar
        loadContent(url);
    }

    // Código para el 02D
    if (dias == 2 && horas == 1 && minutos == 1) {
        var url = '../02-FrostPunk/03-Ventanas/08-Historias/02H.html'; // URL del archivo HTML a cargar
        loadContent(url);

        temperatura = temperatura + 20;
    }

    // Código para el 03D
    if (dias == 3 && horas == 1 && minutos == 1) {
        var url = '../02-FrostPunk/03-Ventanas/08-Historias/03H.html'; // URL del archivo HTML a cargar
        loadContent(url);
    }

    // Código para el 04D
    if (dias == 4 && horas == 1 && minutos == 1) {
        var url = '../02-FrostPunk/03-Ventanas/08-Historias/04H.html'; // URL del archivo HTML a cargar
        loadContent(url);
    }

    // Código para el 05D
    if (dias == 5 && horas == 1 && minutos == 1) {
        var url = '../02-FrostPunk/03-Ventanas/08-Historias/05H.html'; // URL del archivo HTML a cargar
        loadContent(url);

        temperatura = temperatura + 40;
        descontento = descontento + 20;
    }

    // Código para el 06D
    if (dias == 6 && horas == 1 && minutos == 1) {
        var url = '../02-FrostPunk/03-Ventanas/08-Historias/06H.html'; // URL del archivo HTML a cargar
        loadContent(url);

        temperatura = temperatura - 10;
    }

    // Código para el 07D
    if (dias == 7 && horas == 1 && minutos == 1) {
        var url = '../02-FrostPunk/03-Ventanas/08-Historias/07H.html'; // URL del archivo HTML a cargar
        loadContent(url);
    }

    // Código para el 08D
    if (dias == 8 && horas == 1 && minutos == 1) {
        var url = '../02-FrostPunk/03-Ventanas/08-Historias/08H.html'; // URL del archivo HTML a cargar
        loadContent(url);

        temperatura = temperatura + 20;
    }

    // Código para el 09D
    if (dias == 9 && horas == 1 && minutos == 1) {
        var url = '../02-FrostPunk/03-Ventanas/08-Historias/09H.html'; // URL del archivo HTML a cargar
        loadContent(url);
    }
    
    // Código para el 10D
    if (dias == 10 && horas == 1 && minutos == 1) {
        var url = '../02-FrostPunk/03-Ventanas/08-Historias/10H.html'; // URL del archivo HTML a cargar
        loadContent(url);
    }

    // Código para el 11D
    if (dias == 11 && horas == 1 && minutos == 1) {
        var url = '../02-FrostPunk/03-Ventanas/08-Historias/11H.html'; // URL del archivo HTML a cargar
        loadContent(url);

        temperatura = temperatura + 80;
        descontento = descontento + 30;
    }

    // Código para el 12D
    if (dias == 12 && horas == 1 && minutos == 1) {
        var url = '../02-FrostPunk/03-Ventanas/08-Historias/12H.html'; // URL del archivo HTML a cargar
        loadContent(url);
    }

    // Código para el 13D
    if (dias == 13 && horas == 1 && minutos == 1) {
        var url = '../02-FrostPunk/03-Ventanas/08-Historias/13H.html'; // URL del archivo HTML a cargar
        loadContent(url);
    }

    // Código para el 14D
    if (dias == 14 && horas == 1 && minutos == 1) {
        var url = '../02-FrostPunk/03-Ventanas/08-Historias/14H.html'; // URL del archivo HTML a cargar
        loadContent(url);
    }

    // Código para el 15D
    if (dias == 15 && horas == 1 && minutos == 1) {
        var url = '../02-FrostPunk/03-Ventanas/08-Historias/15H.html'; // URL del archivo HTML a cargar
        loadContent(url);
    }

    // Lista con lo eventos y derrotas

    // Código para el primer caso 2
    if (dias == 2 && horas == 12 && minutos == 1) {
        var url = '../02-FrostPunk/03-Ventanas/07-Eventos/Cartas.html'; // URL del archivo HTML a cargar
        loadContent(url);
    }

    // Código para el segundo caso 5
    if (dias == 5 && horas == 18 && minutos == 1 && pub == 1) {
        var url = '../02-FrostPunk/03-Ventanas/07-Eventos/Pub.html'; // URL del archivo HTML a cargar
        loadContent(url);
    }

    // Código para el tercer caso 8
    if (dias == 8 && horas == 8 && minutos == 1) {
        var url = '../02-FrostPunk/03-Ventanas/07-Eventos/Poblacion.html'; // URL del archivo HTML a cargar
        loadContent(url);

        personas = personas + 40;
        trabajadores = trabajadores + 20;
        ingenieros = ingenieros + 10;
        ninnos = ninnos + 10;

        acampadanone.style.display = "";
        casanone.style.display = "";
        totalcobertura = totalcobertura +3;
    }

    // Código para el cuarto caso 9
    if (dias == 9 && horas == 4 && minutos == 1) {
        var url = '../02-FrostPunk/03-Ventanas/07-Eventos/Explosion.html'; // URL del archivo HTML a cargar
        loadContent(url);
    }

    // Código para el quinto caso 11
    if (dias == 11 && horas == 6 && minutos == 1) {
        var url = '../02-FrostPunk/03-Ventanas/07-Eventos/Tormenta.html'; // URL del archivo HTML a cargar
        loadContent(url);
    }

    // Código para el resto de carbón por día
    if (dias >= 2 && horas == 1 && minutos == 1) {
        carbon = carbon - 40;

        if (eficiencia == 1) {
            carbon = carbon + 10;
        } 

        if (potencia == 1) {
            carbon = carbon - 20;
        } 

        if (automatas == 1) {
            carbon = carbon - 15;
        } 

        if (automatas == 2) {
            carbon = carbon - 30;
        }
    }

    // Código pra el resto de comida por día
    if (dias >= 2 && horas == 1 && minutos == 1) {
        comida = comida - trabajadores;
        comida = comida - ingenieros;
        comida = comida - ninnos;
    }

    // Código para la derrota por comida
    if (dias >= 2 && horas == 2 && minutos == 1 && comida <= 0) {
        var url = '../02-FrostPunk/03-Ventanas/06-Derrota/Comida.html'; // URL del archivo HTML a cargar
        loadContent(url);

        // Redirigir al menú principal después de mostrar el modal
        setTimeout(function() {
            window.location.href = '../../index.html';
        }, 10000); // Espera 10 segundos antes de redirigir
    }

    // Código para la derrota por carbon
    if (dias >= 2 && horas == 2 && minutos == 1 && carbon <= 0) {
        var url = '../02-FrostPunk/03-Ventanas/06-Derrota/Carbon.html'; // URL del archivo HTML a cargar
        loadContent(url);

        // Redirigir al menú principal después de mostrar el modal
        setTimeout(function() {
            window.location.href = '../../index.html';
        }, 10000); // Espera 10 segundos antes de redirigir
    }

    // Código para la derrota por explosión
    if (dias == 10 && horas == 2 && minutos == 1 && proteccion == 0) {
        var url = '../02-FrostPunk/03-Ventanas/06-Derrota/Explosion.html'; // URL del archivo HTML a cargar
        loadContent(url);

        // Redirigir al menú principal después de mostrar el modal
        setTimeout(function() {
            window.location.href = '../../index.html';
        }, 10000); // Espera 10 segundos antes de redirigir
    }

    // Código para la derrota por frio
    if (dias >= 1 && horas == 3 && minutos == 1 && temperatura >= 100) {
        var url = '../02-FrostPunk/03-Ventanas/06-Derrota/Potencia.html'; // URL del archivo HTML a cargar
        loadContent(url);

        // Redirigir al menú principal después de mostrar el modal
        setTimeout(function() {
            window.location.href = '../../index.html';
        }, 10000); // Espera 10 segundos antes de redirigir
    }

    // Código para la derrota por falta de esperanza
    if (dias >= 2 && horas == 2 && minutos == 1 && esperanza <= 10) {
        var url = '../02-FrostPunk/03-Ventanas/06-Derrota/Esperanza.html'; // URL del archivo HTML a cargar
        loadContent(url);

        // Redirigir al menú principal después de mostrar el modal
        setTimeout(function() {
            window.location.href = '../../index.html';
        }, 10000); // Espera 10 segundos antes de redirigir
    }

    // Código para la derrota por descontento
    if (dias >= 2 && horas == 2 && minutos == 1 && descontento >= 90) {
        var url = '../02-FrostPunk/03-Ventanas/06-Derrota/Descontento.html'; // URL del archivo HTML a cargar
        loadContent(url);

        // Redirigir al menú principal después de mostrar el modal
        setTimeout(function() {
            window.location.href = '../../index.html';
        }, 10000); // Espera 10 segundos antes de redirigir
    }

    // Código para calcular enfermos
    if (dias >= 2 && horas == 3 && minutos == 1) {
        enfermos = enfermos + trabajadores;
        enfermos = enfermos + ingenieros;
        enfermos = enfermos + ninnos;

        if (hospicio == 1) {
            enfermos = enfermos - ninnos;
        } 

        if (campamento == 1) {
            enfermos = enfermos - 5;
        } 

        if (campamento == 2) {
            enfermos = enfermos - 10;
        } 

        if (campamento == 3) {
            enfermos = enfermos - 15;
        } 

        if (campamento == 4) {
            enfermos = enfermos - 20;
        } 

        if (campamento == 5) {
            enfermos = enfermos - 25;
        } 

        if (campamento == 6) {
            enfermos = enfermos - 30;
        } 

        if (campamento == 7) {
            enfermos = enfermos - 35;
        } 

        if (campamento == 8) {
            enfermos = enfermos - 40;
        } 

        if (casa == 1) {
            enfermos = enfermos - 10;
        } 

        if (casa == 2) {
            enfermos = enfermos - 20;
        } 

        if (casa == 3) {
            enfermos = enfermos - 30;
        } 

        if (casa == 4) {
            enfermos = enfermos - 40;
        } 

        if (casa == 5) {
            enfermos = enfermos - 50;
        } 

        if (casa == 6) {
            enfermos = enfermos - 60;
        } 

        if (casa == 7) {
            enfermos = enfermos - 70;
        } 

        if (casa == 8) {
            enfermos = enfermos - 80;
        } 

    }

    // Código para curar enfermos
    if (dias >= 2 && horas == 12 && minutos == 1) {
        if (medico == 1) {
            enfermos = enfermos - 10;
        }

        if (medico == 2) {
            enfermos = enfermos - 20;
        }

        if (medico == 3) {
            enfermos = enfermos - enfermos;
        }
    }

    // Código para matar a los enfermos
    if (dias >= 2 && horas == 20 && minutos == 1) {
        muertos = muertos + enfermos;
        enfermos = enfermos - enfermos;
    }

    // Código para contar los muertos
    if (dias >= 2 && horas == 21 && minutos == 1) {    
        if (muertos == 10) {
            trabajadores = trabajadores - 10;
            personas = personas - 10;
            esperanza = esperanza - 10;
        }

        if (muertos == 20) {
            trabajadores = trabajadores - 20;
            personas = personas - 20;
            esperanza = esperanza - 20;
        }
    
        if (muertos == 30) {
            trabajadores = trabajadores - 20;
            ingenieros = ingenieros - 10;
            personas = personas - 30;
            esperanza = esperanza - 30;
        }
    
        if (muertos == 40) {
            trabajadores = trabajadores - 30;
            ingenieros = ingenieros - 10;
            personas = personas - 40;
            esperanza = esperanza - 40;
        }
    
        if (muertos == 50) {
            trabajadores = trabajadores - 40;
            ingenieros = ingenieros - 10;
            personas = personas - 50;
            esperanza = esperanza - 50;
        }
    
        if (muertos == 60) {
            trabajadores = trabajadores - 30;
            ingenieros = ingenieros - 20;
            ninnos = ninnos -10;
            personas = personas - 60;
            esperanza = esperanza - 60;
        }
    
        if (muertos == 70) {
            trabajadores = trabajadores - 40;
            ingenieros = ingenieros - 20;
            ninnos = ninnos - 10;
            personas = personas - 70;
            esperanza = esperanza - 70;
        }
    }

    // Incrementar el contador de minutos
    minutos++;

    // Verificar y reiniciar el contador de minutos
    if (minutos === 2) {
        minutos = 0;

        // Incrementar el contador de horas
        horas++;

        // Verificar y reiniciar el contador de horas
        if (horas === 24) {
            horas = 0;

            // Incrementar el contador de días
            dias++;

            realizarAccionesEspeciales(); // Recarga las acciones de trabajador

            realizarAccionesautEspeciales(); // Recarga las acciones de los automatas
            console.log(acciones); // Muestra las acciones

            realizarAccionesingEspeciales(); // Recarga las acciones de ingeniero
            console.log(accionesing); // Muestra las acciones

            cambiarimagen() // Cambia las fotos
                       
            // Verificar si el contador de días llegó a 16
            if (dias == 16) {
                var url = '../02-FrostPunk/03-Ventanas/07-Eventos/Victoria.html'; // URL del archivo HTML a cargar
                loadContent(url);

                // Redirigir al menú principal después de mostrar el modal
                setTimeout(function() {
                    window.location.href = '../06-Videos/Final.html';
                }, 10000); // Espera 10 segundos antes de redirigir
            }
        }
    }

    // Programar la siguiente ejecución después de la duración del conteo
    setTimeout(contar, duracionConteo);
}

// Array donde se guradaran las fotos que iran apareciendo según el día que sea
imagenesdia=new Array();
imagenesdia[1]="../04-Imagenes/01D.png";
imagenesdia[2]="../04-Imagenes/02D.png";
imagenesdia[3]="../04-Imagenes/03D.png";
imagenesdia[4]="../04-Imagenes/04D.png";
imagenesdia[5]="../04-Imagenes/05D.png";
imagenesdia[6]="../04-Imagenes/06D.png";
imagenesdia[7]="../04-Imagenes/07D.png";
imagenesdia[8]="../04-Imagenes/08D.png";
imagenesdia[9]="../04-Imagenes/09D.png";
imagenesdia[10]="../04-Imagenes/10D.png";
imagenesdia[11]="../04-Imagenes/11D.png";
imagenesdia[12]="../04-Imagenes/12D.png";
imagenesdia[13]="../04-Imagenes/13D.png";
imagenesdia[14]="../04-Imagenes/14D.png";
imagenesdia[15]="../04-Imagenes/15D.png";
imagenesdia[16]="../04-Imagenes/15D.png";

// Funcion para sacar las fotos
function cambiarimagen() {
    document.getElementById('progreso').src = imagenesdia[dias];
}

// Valores de derrota
var enfermos = 0;
var muertos = 0;

// Función para actualizar la interfaz con los valores actuales
function actualizarInterfazPe() {
    document.getElementById('valorEnfermos').innerText = enfermos+ " Enfermos";
    document.getElementById('valorMuertos').innerText = muertos+ " Muertos";
}

// Valores de los recursos que irán cambiando según realices acciones
var madera = 50;
var metal = 20;
var carbon = 80;
var comida = 120;
var nucleos = 0;

// Valores de las personas que hay nada más empezar
var personas = 60;
var trabajadores = 30;
var ingenieros = 20;
var ninnos = 10;

// Función para actualizar la interfaz con los valores actuales
function actualizarInterfazPo() {
    document.getElementById('valorTrabajadores').innerText = trabajadores+ " Trabajadores";
    document.getElementById('valorIngenieros').innerText = ingenieros+ " Ingenieros";
    document.getElementById('valorNinnos').innerText = ninnos+ " Niños";
}

// Valores para las acciones
var acciones = 0;
var accionesing = 0;

// Función para realizar acciones especiales según el número de trabajadores
function realizarAccionesEspeciales() {
    if (trabajadores >= 10 && trabajadores < 20) {
        acciones=acciones + 1;
    } else if (trabajadores >= 20 && trabajadores < 30) {
        acciones=acciones + 2;
    } else if (trabajadores >= 30 && trabajadores < 40) {
        acciones=acciones + 3;
    } else if (trabajadores >= 40 && trabajadores < 50) {
        acciones=acciones + 4;
    } else if (trabajadores >= 50) {
        acciones=acciones + 5;
    }
}

function realizarAccionesingEspeciales() {
    if (ingenieros >= 30) {
        accionesing=accionesing + 1;
    }
}

function realizarAccionesautEspeciales() {
    if (automatas == 1) {
        acciones=acciones + 1;
    } else if (automatas == 2) {
        acciones=acciones + 2;
    } 
}

// Lo que ganas con las acciones
var summadera = 20;
var summetal = 10;
var sumcarbon = 40;
var sumcomida = 60;
var sumnucleo = 1;

// Funciones de las acciones

// Función para actualizar la interfaz con los valores actuales
function actualizarInterfazAcc() {
    document.getElementById('valorMadera').innerText = madera+ " Madera";
    document.getElementById('valorMetal').innerText = metal+ " Metal";
    document.getElementById('valorCarbon').innerText = carbon+ " Carbón";
    document.getElementById('valorComida').innerText = comida+ " Comdia";
    document.getElementById('valorNucleos').innerText = nucleos+ " Nucleos";
    document.getElementById('valorAutomatas').innerText = automatas+ " Automatas";
}

// Función para realizar la acción de obtener madera
function ReMadera() {
    if (acciones > 0) {
        acciones=acciones - 1; // Resta uno a "acciones"
        madera += summadera; // Suma el valor de "summadera" al valor de "madera"
    }
}

// Función para realizar la acción de obtener metal
function ReMetal() {
    if (acciones > 0) {
        acciones=acciones - 1; // Resta uno a "acciones"
        metal += summetal; // Suma el valor de "summetal" al valor de "metal"
    }
}

// Función para realizar la acción de obtener carbon
function ReCarbon() {
    if (acciones > 0) {
        acciones=acciones - 1; // Resta uno a "acciones"
        carbon += sumcarbon; // Suma el valor de "sumcarbon" al valor de "carbon"
    }
}

// Función para realizar la acción de obtener comida
function ReComida() {
    if (acciones > 0) {
        acciones=acciones - 1; // Resta uno a "acciones"
        comida += sumcomida; // Suma el valor de "sumcomida" al valor de "comida"
    }
}

// Función para realizar la acción de obtener nucleo
function ReNucleo() {
    if (accionesing > 0 && metal >= 50) {
        accionesing=accionesing - 1; // Resta uno a "acciones"
        metal=metal - 50; // Resta 50 a "metal"
        nucleos += sumnucleo; // Suma el valor de "sumnucleo" al valor de "nucleos"
        vecesCrear++;

        if (vecesCrear === 2) {
            crearvapor.style.display = "none";
        }
    }
}

// Valores de la tecnología
var automatas = 0;
var capacidad = 0;
var eficiencia = 0;
var potencia = 0;
var proteccion = 0;
var viviendas= 0;

// Fuciones de tecnologia

// Variable para llevar el conteo de las veces que puedes hacer automatas
var vecesCrear = 0;
var vecesAutomata = 0;

// Función para recolectar automata
function TecAutomata() {
    if (nucleos > 0 && metal >= 100) {
        automatas=automatas + 1; // Suma uno a "automatas"
        nucleos=nucleos - 1; // Resta uno a "nucleos"
        metal=metal - 100; // Resta 100 a "metal"
        vecesAutomata++;
        console.log(automatas); // Muestra los valores

        if (vecesAutomata === 1) {
            valorAutomatas.style.display = "";
        }

        if (vecesAutomata === 2) {
            automatanone.style.display = "none";
            valorNucleos.style.display = "none";
        }
    }
}

// Función para tecnología de capacidad
function TecCapacidad() {
    if (madera >= 20 && metal >= 20) {
        capacidad=capacidad + 1; // Suma uno a "capacidad"
        madera=madera - 20; // Resta 20 a "madera"
        metal=metal - 20; // Resta 20 a "metal"
        summadera=summadera + 20; // Suma 20 a "summadera"
        summetal=summetal + 10;  // Suma 10 a "summetal"
        sumcarbon=sumcarbon + 40; // Suma 20 a "sumcarbon"
        sumcomida=sumcomida + 40; // Suma 20 a "sumcomida"
        trineosnone.style.display = "none";
        console.log(capacidad); // Muestra los valores
        console.log(summadera); // Muestra los valores
        console.log(summetal); // Muestra los valores
        console.log(sumcarbon); // Muestra los valores
        console.log(sumcomida); // Muestra los valores
    }
}

// Función para tecnología de eficiencia
function TecEficiencia() {
    if (madera >= 10 && metal >= 20) {
        eficiencia=eficiencia + 1; // Suma uno a "eficiencia"
        madera=madera - 10; // Resta 10 a "madera"
        metal=metal - 20; // Resta 20 a "metal"
        rendimientonone.style.display = "none";
        console.log(eficiencia); // Muestra los valores
    }
}

// Función para tecnología de potencia
function TecPotencia() {
    if (metal >= 10 && temperatura == 60) {
        potencia=potencia + 1; // Suma uno a "potencia"
        temperatura=temperatura - 50 // Aumenta la capacidad de "temperatura" en 50
        metal=metal - 10; // Resta 10 a "metal"
        calornone.style.display = "none";
        console.log(potencia); // Muestra los valores
    }
}

// Función para tecnología de protección
function TecProteccion() {
    if (madera >= 10 && metal >= 30) {
        proteccion=proteccion + 1; // Suma uno a "proteccion"
        madera=madera - 10; // Resta 10 a "madera"
        metal=metal - 30; // Resta 30 a "metal"
        explosionnone.style.display = "none";
        console.log(proteccion); // Muestra los valores
    }
}

// Función para tecnología de viviendas
function TecViviendas() {
    if (madera >= 10 && metal >= 10) {
        viviendas=viviendas + 1; // Suma uno a "viviendas"
        madera=madera - 10; // Resta 10 a "madera"
        metal=metal - 10; // Resta 10 a "metal"
        mejoresnone.style.display = "none";
        casanone.style.display = "";
        console.log(viviendas); // Muestra los valores
    }
}

// Valores edificios
var campamento = 0;
var casa = 0;
var cementerio = 0;
var hospicio = 0;
var medico = 0;
var pub = 0;

// Funciones para construir

// Variable para llevar el conteo de las veces que se usa cada construcción
var totalcobertura = 5;
var cobertura = 0;
var vecesCementerio = 0;
var vecesHospicio = 0;
var vecesMedico = 0;
var vecesPub = 0;

// Función para construir campamento
function ConsCampamento() {
    if (madera >= 10 && cobertura < totalcobertura) {
        campamento=campamento + 1; // Suma uno a "campamento"
        madera=madera - 10; // Resta 10 a "madera"
        cobertura=campamento + casa;
        console.log(campamento); // Muestra los valores

        if (cobertura === 8 && campamento === 0) {
            acampadanone.style.display = "none";
        }
    }
}

// Función para construir casa
function ConsCasa() {
    if (metal >= 20 && cobertura <= totalcobertura && campamento > 0) {
        campamento=campamento - 1 // Resta uno a "campamento"
        casa=casa + 1; // Suma uno a "casa"
        metal=metal - 20; // Resta 20 a "metal"
        cobertura=campamento + casa;
        console.log(campamento); // Muestra los valores
        console.log(casa); // Muestra los valores

        if (cobertura === 8 && casa === 8) {
            casanone.style.display = "none";
        }
    }
}

// Función para construir cementerio
function ConsCementerio() {
    if (madera >= 10 && metal >= 10 && vecesCementerio < 1) {
        cementerio=cementerio + 1; // Suma uno a "cementerio"
        madera=madera - 10; // Resta 10 a "madera"
        metal=metal - 10; // Resta 10 a "metal"
        esperanza=esperanza + 30 // Suma 30 a "esperanza"
        vecesCementerio++;
        console.log(cementerio); // Muestra los valores

        if (vecesCementerio === 1) {
            descansonone.style.display = "none";
        }
    }
}

// Función para construir hospicio
function ConsHospicio() {
    if (madera >= 10 && metal >= 10 && vecesHospicio < 1) {
        hospicio += 1; // Suma uno a "hospicio"
        madera -= 10; // Resta 10 a "madera"
        metal -= 10; // Resta 10 a "metal"
        vecesHospicio++;
        console.log(hospicio); // Muestra los valores

        if (vecesHospicio === 1) {
            hostalnone.style.display = "none";
        }
    }
}

// Función para construir médico
function ConsMedico() {
    if (madera >= 10 && vecesMedico < 3) {
        medico=medico + 1; // Suma uno a "medico"
        madera=madera - 10; // Resta 10 a "madera"
        vecesMedico++;
        console.log(medico); // Muestra los valores
        console.log(enfermos); // Muestra los valores

        if (vecesMedico === 3) {
            mediconone.style.display = "none";
        }
    }
}

// Función para construir pub
function ConsPub() {
    if (madera >= 10 && metal >= 10 && vecesPub < 1) {
        pub=pub + 1; // Suma uno a "pub"
        madera=madera - 10; // Resta 10 a "madera"
        metal=metal - 10; // Resta 10 a "metal"
        descontento=descontento - 50 // Resta 50 a "descontento"
        vecesPub++;
        console.log(pub); // Muestra los valores

        if (vecesPub === 1) {
            pubnone.style.display = "none";
        }
    }
}

// Controlador de las barras

// Agrega un valor para la temperatura
var temperatura = 10;
var esperanza = 50;
var descontento = 50;