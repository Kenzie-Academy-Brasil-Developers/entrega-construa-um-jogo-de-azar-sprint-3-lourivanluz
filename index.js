const selectPlay = document.querySelectorAll('.select_player')
const jogar = document.querySelector('#jogar')
const jogadas = ['pedra','papel','tesoura']

const selectPlayerArray = [...selectPlay]
let imagem = ''
let alt = ''
let pontuacaoEu = 0
let pontuacaoIA = 0
let rodada = 0

for(let i = 0; i<selectPlayerArray.length;i++){
    let elemento = selectPlayerArray[i]
    elemento.addEventListener('click',(e)=>{

        const playEu = document.querySelector('#playEU')
        const playIa = document.querySelector('#playIA')
        playIa.setAttribute('src', "./src/pedra.png")

        imagem = e.target.getAttribute('src')
        alt = e.target.getAttribute('alt')

        playEu.setAttribute('src', '.'+imagem)
        playEu.setAttribute('alt', alt)
        
        
    })
}

jogar.addEventListener('click',()=>{

    const playEu = document.querySelector('#playEU')
    const playIa = document.querySelector('#playIA')
    let index = getARondomNumber(0,2)
    let selectIA = jogadas[index]
    let selectEU = playEu.getAttribute('alt')
    playIa.setAttribute('src', "./src/"+selectIA+".png")
    
    if(selectIA ==='pedra'&& selectEU==='tesoura'||selectIA ==='papel'&& selectEU==='pedra'||selectIA ==='tesoura'&& selectEU==='papel'){
        pontuacaoIA++

    }else if (selectEU===selectIA) {

    }else{
        pontuacaoEu++

    }
    rodada++
    atualizaDados(pontuacaoEu,pontuacaoIA,rodada)
})


function getARondomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1) + min)
}

function atualizaDados(pontuacaoEu,pontuacaoIA,rodada){
    document.querySelector('#placar__eu').innerHTML = pontuacaoEu
    document.querySelector('#placar__ia').innerHTML = pontuacaoIA
    document.querySelector('#rodada').innerHTML = rodada
}