AOS.init();

const dataDoEvento = new Date("Oct 04, 2025 19:00:00")
const timeStampDoEvento = dataDoEvento.getTime();

const contasAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMS = 1000 * 60 * 60 * 24;
    const horasEmMS = 1000 * 60 * 60;
    const minutosEmMS = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMS);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMS) / horasEmMS);
    const minutosAteOEvento =  Math.floor((distanciaAteOEvento % horasEmMS) / minutosEmMS);
    const segundosAteOEvento =  Math.floor((distanciaAteOEvento % minutosEmMS) / 1000)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contasAsHoras);
        document.getElementById('contador').innerHTML = `PARABENS!!!`;
    }
}, 1000);