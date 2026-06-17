//write your code here
document.addEventListener("DOMContentLoaded", () => {
    const desafio = document.getElementById("desafio");
    const ContDesafio = document.getElementById("ContDesafio");
    const ContJuego = document.getElementById("ContJuego");
    const select = document.getElementById("select");
    const playerSel = document.getElementById("playerSel");
    const sheldonSel = document.getElementById("sheldonSel");
    const TextoResultado = document.getElementById("textoResultado");
    const reStart = document.getElementById("restart");
    const uWin = document.getElementById("UWin");
    const uLoose = document.getElementById("ULoose");
    const deadHead = document.getElementById("Empate");
    
    // Reglas
    const reglas = {
        Piedra: ["Lagarto", "Tijeras"],
        Papel: ["Piedra", "Spock"],
        Tijeras: ["Papel", "Lagarto"],
        Lagarto: ["Spock", "Papel"],
        Spock: ["Tijeras", "Piedra"]
    };
    const opciones = Object.keys(reglas);

    // Desafío aceptado 
    desafio.addEventListener("click", () => {
        ContDesafio.classList.add("d-none");
        ContJuego.classList.remove("d-none");
    })

    // Jugar de nuevo
    reStart.addEventListener("click", ()=> {
        ContJuego.classList.remove("d-none");
        select.classList.add("d-none");
        uLoose.classList.add("d-none");
        uWin.classList.add("d-none");
        deadHead.classList.add("d-none");
    })
    // Clicks en armas
    const selección = document.querySelectorAll(".opcionPlayer");
    selección.forEach(arma => {
        arma.addEventListener("click", () => {
            const opcionPlayer = arma.id;
            ContJuego.classList.add("d-none");
            select.classList.remove("d-none");
            // Respuesta de PC
            const opcionPC = opciones[Math.floor(Math.random() * opciones.length)];
            let FinalPlayerSel = `Tú elegiste: ${opcionPlayer}`;
            let FinalPCSel =`Sheldon eligió: ${opcionPC}`;
            let FinalText =""
            if (opcionPlayer === opcionPC) {
                deadHead.classList.remove("d-none");
                FinalText='¡Fascinante! Un empate. No te emociones, solo es una anomalía estadística. Repitamos el experimento.';
            } else if (reglas[opcionPlayer].includes(opcionPC)) {
                uWin.classList.remove("d-none");
                FinalText='¡Imposible! Claramente has hecho trampa o mi café tenía descafeinado. Exijo una revisión de los datos.'
            } else {
                uLoose.classList.remove("d-none");
                FinalText='¡Bazinga! Mi intelecto superior te ha vaporizado. Ve a llorar a tu sitio.';
            }
            playerSel.innerHTML = FinalPlayerSel;
            sheldonSel.innerHTML = FinalPCSel;
            TextoResultado.innerHTML = FinalText; 
        })
    })
})
