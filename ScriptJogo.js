let newGame = true;
let vidas = 6;
let ListaR = [];
let PalavraCategoria ;
let PalavraSorteio ;
const palavras = [
    palavra1 = {
        nome : "MONKEY D LUFFY",
        categoria : "ANIME",
    },
    palavra2 = {
        nome : "RORONOA ZORO",
        categoria : "ANIME",
    },
    palavra3 = {
        nome : "VINSMONKE SANJI",
        categoria : "ANIME",
    },
    palavra4 = {
        nome : "TRAFALGAR LAW",
        categoria : "ANIME",
    },
    palavra5 = {
        nome : "NICO ROBIN",
        categoria : "ANIME",
    },
    palavra6 = {
        nome : "GO D USOPP",
        categoria : "ANIME"
    },
    palavra7 = {
        nome : "PORTGAS D ACE",
        categoria : "ANIME",
    },
    palavra8 = {
        nome : "EDWARD NEWGATE",
        categoria : "ANIME",
    },
    palavra9 = {
        nome : "DONAQUIXOTE DOFLAMINGO", 
        categoria : "ANIME",
    },
    palavra10 = {
        nome :  "TONY TONY CHOPPER",
        categoria : "ANIME",
    } ,
    palavra11 = {
        nome : "ANAKIN SKYWALKER",
        categoria : "STAR WARS"
    },
    palavra12 = {
        nome : "OBIWAN KENOBI",
        categoria : "STAR WARS",
    },
    palavra13 = {
        nome : "DARTH VADER",
        categoria : "STAR WARS"
    },
    palavra14 = {
        nome : "LEIA ORGANA",
        categoria : "STAR WARS",
    },
    palavra15 = {
        nome : "PADME AMIDALA",
        categoria : "STAR WARS",
    },
    palavra16 = {
        nome : "LUKE SKIWALKER",
        categoria : "STAR WARS",
    },
    palavra17 = {
        nome : "ASTA",
        categoria : "ANIME"
    },
    palavra18 = {
        nome : "GOKU",
        categoria : "ANIME", 
    },
    palavra19 = {
        nome : "VEGETA",
        categoria : "ANIME",
    },
    palavra20 = {
        nome : "GOHAN",
        categoria : "ANIME",
    },
    palavra21 = {
        nome : "YUJI ITADORI",
        categoria : "ANIME",
    },
    palavra22 = {
        nome : "SATORU GOJO",
        categoria : "ANIME",
    },
    palavra23 = { 
        nome : "RYOMEI SUKUNA",
        categoria : "ANIME"
    },
    palavra24 = {
        nome  : "YUNO SPADE",
        categoria : "ANIME",
    },
    palavra25 = {
        nome :  "YAMI SUKEHIRO",
        categoria :  "ANIME",
    },
    palavra26 = {
        nome : "NOELLE SILVA",
        categoria : "ANIME"
    },
    palavra27 = {
        nome : "MAREOLEONA VERMILLION",
        categoria : "ANIME",
    },
    palavra28 = {
        nome : "MIMOSA VERMILLION",
        categoria : "ANIME"
    },
    palavra29 = {
        nome : "MAGNA SWING",
        categoria : "ANIME",
    },
    palavra30 = {
        nome : "LUCK VOLTIA",
        categoria : "ANIME",
    }
];

criePalavra();
function criePalavra(){
    const SortPalavra = parseInt(Math.random()* palavras.length)
    PalavraSorteio = palavras[SortPalavra].nome
    PalavraCategoria = palavras[SortPalavra].categoria
}
MontPalvra();
function MontPalvra(){
    const categoria = document.getElementById("tipo");
    categoria.innerHTML = PalavraCategoria;

    const Tela = document.getElementById("Secret-Word");
    Tela.innerHTML = "";
    for(i  =  0; i < PalavraSorteio.length; i++){
        if (ListaR[i] == undefined){
            if(PalavraSorteio[i] === " "){
                ListaR[i] = " "
                Tela.innerHTML =  Tela.innerHTML + " <div class='letrasEspaco'>" +  ListaR[i] + "</div>"
            }
            else{
                ListaR[i] = "&nbsp"
                Tela.innerHTML =  Tela.innerHTML + " <div class='letras'>" +  ListaR[i] + "</div>"
            }
        }
        else{
            if(PalavraSorteio[i] == " "){
                ListaR[i] = " "
                Tela.innerHTML =  Tela.innerHTML + " <div class='letrasEspaco'>" +  ListaR[i] + "</div>"
            }
           else{
                Tela.innerHTML =  Tela.innerHTML + " <div class='letras'>" +  ListaR[i] + "</div>"
            } 
        }
}
}
function VerLetra(letra){
    document.getElementById("T-" + letra).disabled = true;
    if (vidas > 0 ){
        mudarLetra("T-" + letra, false);
        compare(letra);
        MontPalvra();
    }  
}
function mudarLetra(tecla, teclaCerta){
    if(teclaCerta == false){
        document.getElementById(tecla).style.backgroundColor = "#AC1A00";
        document.getElementById(tecla).style.color =  "#FFFFFF";
    }
    else{
        document.getElementById(tecla).style.backgroundColor = "#01E816";
        document.getElementById(tecla).style.color =  "#FFFFFF";
    }
}
console.log(PalavraSorteio)
async function compare(letra){
    const pos = PalavraSorteio.indexOf(letra)
    if(! PalavraSorteio.includes(letra)){
        vidas--
        MudarImagem();
    }
    else{
        mudarLetra("T-" + letra, true);
        for( i = 0; i <PalavraSorteio.length; i++){
            if(PalavraSorteio[i] == letra){
            ListaR[i] = letra;
            }
        }
    }
    const letraTotal = PalavraSorteio.length;
    var letrasCertas = 0;
    for(var i = 0; i < letraTotal; i++){
        if(ListaR[i] == PalavraSorteio[i]){
            letrasCertas++;
        }
        else{
            break
        }
    }
    if(letrasCertas == letraTotal){
        AbriModal("PARABÉNS!!! VOCÊ VENCEU")
        // vidas = 0
        reset();
    }
    if(vidas == 0){
        AbriModal("IXI", "Infelimente você errou! Obrigado por tentar, a palavra secreta era<br>" + PalavraSorteio);
        reset();
    }
}
function MudarImagem(){
    switch(vidas){
        case 5: 
            document.getElementById("img").style.background = "url('./imagens/forca01.png')"
            timer.setTimeout(1.5)
            break;
        case 4: 
            document.getElementById("img").style.background = "url('./imagens/forca02.png')"
            setTimeout(1.5)
            break;
        case 3: 
            document.getElementById("img").style.background = "url('./imagens/forca03.png')"
            setTimeout(1.5)
            break;
        case 2: 
            document.getElementById("img").style.background = "url('./imagens/forca04.png')"
            setTimeout(1.5)
            break;
        case 1: 
            document.getElementById("img").style.background = "url('./imagens/forca05.png')"
            setTimeout(1.5)
            break;
        case 0: 
            document.getElementById("img").style.background = "url('./imagens/forca06.png')"
            setTimeout(0.5)
            break;
        default:
            document.getElementById("img").style.background = "url('./imagens/forca.png')"
    }
}
function AbriModal(titulo, mensagem, som){
    let modTitulo = document.getElementById("exampleModalLabel");
    modTitulo.innerText = titulo;
    let modMensagem = document.getElementById("ModalMensagem");
    modMensagem.innerHTML = mensagem;
    $("#Modal").modal({
        show: true
    });
}
let reiniciar = document.querySelector("#reiniciar")
reiniciar.addEventListener("click", function(){
    newGame = false;
    location.reload();
});
async function timer(tempo){
    return new Promise(s => setTimeout(s, tempo));
}
async function reset(){
    while(newGame == true){
        document.getElementById("reiniciar").style.backgroundColor = "green";
        document.getElementById("reiniciar").style.scale = "1.5";
        await timer(1000)
        document.getElementById("reiniciar").style.backgroundColor = "purple";
        document.getElementById("reiniciar").style.scale = "1.7";
        await timer(1000)
    }
}
