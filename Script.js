console.log('Hello World');

const input1 = document.querySelector ('#numero1');
const input2 = document.querySelector ('#numero2')
const button =  document.querySelector ('#btnsumar');
const button1 =  document.querySelector ('#btnrestar');
const button2 =  document.querySelector ('#btnmultiplicar');
const button3 =  document.querySelector ('#btndividir');
const presultado =  document.querySelector ('#resultado');


button.addEventListener('click',sumar);
button1.addEventListener('click',restar);
button2.addEventListener('click',multiplicar);
button3.addEventListener('click',dividir);


function sumar() {
    const sumaResultado =  input1.value + input2.value;
    presultado.innerHTML = sumaResultado;
};

function restar() {
    const sumaResultado =  input1.value - input2.value;
    presultado.innerHTML = sumaResultado;
};
function multiplicar() {
    const sumaResultado =  input1.value * input2.value;
    presultado.innerHTML = sumaResultado;
};
function dividir() {
    const sumaResultado =  input1.value / input2.value;
    presultado.innerHTML = sumaResultado;
};
