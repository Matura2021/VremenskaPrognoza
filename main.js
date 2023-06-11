//Povezivanje sajta
function provera(){
    let grad = document.prognoza.grad.value;
    document.getElementById('vebsajt').src = 'https://naslovi.net/vremenska-prognoza/' + grad;
}
