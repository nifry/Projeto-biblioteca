// dom
const nome = document.querySelector('#nome')
const uni1 = document.querySelector('#uni1')
const uni2 = document.querySelector('#uni2')
const uni3 = document.querySelector('#uni3')
const cal = document.querySelector('#cal')
const resultado = document.querySelector('#resultado')

//Eventos
cal.addEventListener('click',()=>{

n1=Number(uni1.value)
n2=Number(uni2.value)
n3=Number(uni3.value)

media = (n1+n2+n3)/3

if(media >= 5){
    situacao = 'APROVADO!'
} else {
    situacao = 'REcuperação!'
}

resultado.textContent = `Prezado(a) ${nome.value}, sua média foi calculda, seu resultado é: ${media.toFixed(1)}, voce foi ${situacao}`

})