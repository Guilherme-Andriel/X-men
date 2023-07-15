const personagens = document.querySelectorAll('.personagem');
const audio = document.querySelector('#myAudio');
const selecionarAudio = document.querySelector('#audioSelecionar');
const logo = document.querySelector('.logo');
let audioAtivado = true;

logo.addEventListener("click", () => {
  if (audioAtivado) {
    audio.play();
    audioAtivado = false;
  } else {
    audio.pause();
    audioAtivado = true;
  }
});


personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        personagem.addEventListener("click", () =>{
            selecionarAudio.src = './src/som/SomDeSelecionar.mp3';
            selecionarAudio.play();
        })

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        removerSelecaoDoPersonagem();
        personagem.classList.add('selecionado');

        alterarImagemPersonagemSelecionado(personagem);

       
        alterarNomePersonagemSelecionado(personagem);

        alterarDescricaoPersonagem(personagem);
        
    })
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
