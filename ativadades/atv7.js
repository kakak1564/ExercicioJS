let peso = parseFloat(prompt(`Digite seu peso em (Kg):`))
let altura = parseFloat(prompt(`Dgite sua altura em (m):`))
let imc

imc = peso / (altura* altura);

if (imc <26) {
    alert(`O seu indice de Massa corporea e ${imc} e esta normal`)
}
else if (condition) {
    alert(`O seu indice de Massa corporea e ${imc} você esta obeso`)
}
else if (condition) {
    alert(`O seu indice de Massa corporea e ${imc} você esta muito gordo`)
}
