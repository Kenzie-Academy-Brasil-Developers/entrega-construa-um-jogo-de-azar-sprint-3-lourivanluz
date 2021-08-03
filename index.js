const getARondomNumber = (min,max)=>{
    return Math.floor(Math.random()*(max-min+1) + min)
}

const atualizaDados = (pontuacaoEu,pontuacaoIA,rodada,dalay)=>{
    setTimeout(()=>{
        document.querySelector('#placar__eu').innerHTML = pontuacaoEu
        document.querySelector('#placar__ia').innerHTML = pontuacaoIA
        document.querySelector('#rodada').innerHTML = rodada

    },dalay)
    
}

const animaElemento = (elemento,classAnimada,dalay)=>{
    elemento.classList.add(classAnimada)
    setTimeout(()=>{
        elemento.classList.remove(classAnimada)

    },dalay)  
}

const alterarImagemComDalay = (elemento,imagem,dalay)=>{
    setTimeout(()=>{
        elemento.setAttribute('src', imagem)
    },dalay)
}

const selectPlay = document.querySelectorAll('.select_player')
const jogar = document.querySelector('#jogar')
const opcoesJogadaArray = ['pedra','papel','tesoura']

const selectPlayerArray = [...selectPlay]


let imagem = ''
let alt = ''
let pontuacaoEu = 0
let pontuacaoIA = 0
let rodada = 0

for(let i = 0; i<selectPlayerArray.length;i++){
    let elemento = selectPlayerArray[i]
    elemento.addEventListener('click',(e)=>{
        const circulosPequenos = document.querySelectorAll('.ciculoApresentacao--pequeno')
        const circulosPequenosArray = [... circulosPequenos]

        circulosPequenosArray.map((item)=>{
            if (item.classList.contains('ativado')){
                item.classList.remove('ativado')
            }
        })
        const playEu = document.querySelector('#playEU')
        const playIa = document.querySelector('#playIA')
        alt = e.target.getAttribute('alt') 
        playEu.setAttribute('alt', alt)
        let divpai = e.target.parentElement.parentElement
        divpai.classList.add('ativado') 
    })
}


jogar.addEventListener('click',()=>{
 
    const playEu = document.querySelector('#playEU')
    const playIa = document.querySelector('#playIA')
    const divCirculoApresentacaoEu = playEu.parentElement.parentElement
    const divCirculoApresentacaoIA = playIa.parentElement.parentElement
    const divPlacarEu = document.querySelector('.placar__eu')
    const divPlacarIA = document.querySelector('.placar__ia')
    
    let index = getARondomNumber(0,2)
    let selectIA = opcoesJogadaArray[index]
    let selectEU = playEu.getAttribute('alt')

    let imagemIA = "./src/"+selectIA+".png"
    let imagemEU = "./src/"+selectEU+".png"

    alterarImagemComDalay(playIa,'./src/pedra.png',0)
    alterarImagemComDalay(playEu,'./src/pedra.png',0)
    
    animaElemento(divCirculoApresentacaoEu,'ciculoAnimacaoGrande',900)
    animaElemento(divCirculoApresentacaoIA,'ciculoAnimacaoGrande',900)

    alterarImagemComDalay(playIa,imagemIA,900)
    alterarImagemComDalay(playEu,imagemEU,900)
  

    if(selectIA ==='pedra'&& selectEU==='tesoura'||selectIA ==='papel'&& selectEU==='pedra'||selectIA ==='tesoura'&& selectEU==='papel'){
        pontuacaoIA++
        animaElemento(divPlacarIA,'placar--animado',1500)

    }else if (selectEU!==selectIA) {
        pontuacaoEu++
        animaElemento(divPlacarEu,'placar--animado',1500)

    }
    rodada++
    
    atualizaDados(pontuacaoEu,pontuacaoIA,rodada,900)
})  