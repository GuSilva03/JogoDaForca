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
        nome : "PADMÉ AMIDALA",
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
    console.log(PalavraSorteio)
    console.log(PalavraCategoria)
    for(letra of PalavraSorteio){
        ListaR.push(" ");
    }
}
MontPalvra();
function MontPalvra(){
    const categoria = document.getElementById("tipo");
    categoria.innerHTML = PalavraCategoria;

    const Tela = document.getElementById("Secret-Word");
    Tela.innerHTML = "";
    
    for(i  =  0; i < PalavraSorteio.length; i++){
        if (ListaR[i] == undefined){
            ListaR[i] = "&nbsp;"
            Tela.innerHTML =  Tela.innerHTML + " <div class='letras'>" +  ListaR[i] + "</div>"
        }
        else{
            Tela.innerHTML =  Tela.innerHTML + " <div class='letras'>" +  ListaR[i] + "</div>"
        }
    }
}
function VerLetra(letra){
    console.log(vidas)
    if (vidas > 0 ){
        mudarLetra("T-" + letra);
        compare(letra);
        MontPalvra();
    }
    
}
function mudarLetra(tecla){
    document.getElementById(tecla).style.backgroundColor = "#AC1A00";
    document.getElementById(tecla).style.color =  "#FFFFFF";
   
}   
function compare(letra){
    const pos = PalavraSorteio.indexOf(letra)
    if(! PalavraSorteio.includes(letra)){
        vidas--
        MudarImagem();
    }
    else{
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
            console.log("opa")
        }
        else{
            break
        }
    }
    if(letrasCertas == letraTotal){
        alert("BOA MEU NOBRE")
    }
    if(vidas == 0){
        alert("PERDEU")
    }
}
function MudarImagem(){
    switch(vidas){
        case 5: 
            document.getElementById("img").style.background = "url('./imagens/forca01.png')"
            break;
        case 4: 
            document.getElementById("img").style.background = "url('./imagens/forca02.png')"
            break;
        case 3: 
            document.getElementById("img").style.background = "url('./imagens/forca03.png')"
            break;
        case 2: 
            document.getElementById("img").style.background = "url('./imagens/forca04.png')"
            break;
        case 1: 
            document.getElementById("img").style.background = "url('./imagens/forca05.png')"
            break;
        case 0: 
            document.getElementById("img").style.background = "url('./imagens/forca06.png')"
            break;
        default:
            document.getElementById("img").style.background = "url('./imagens/forca.png')"
    }
}

