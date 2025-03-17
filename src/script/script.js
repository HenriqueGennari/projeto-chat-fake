//DOM contentLoaded conteúdo já careregado
const listaDeContatos = [
    {id : 1,
    nome : "Maria",
    ultimaMensagem : "Olá, vamos programar?",
    horarioUltimaMensagem : "20:20",
    avatar : "src/assets/images/Jessica.png",
    converas : [
        {
            mensagem : "Oi, eu sou a Maria! ",
            tipo : "recebida",
            horario : "20:20"
        },
        {
            mensagem : "Que legal, eu sou o Gennari!",
            tipo : "enviada",
            horario : "20:20"
        },
        {
            mensagem : "Vamos codar juntos?",
            tipo : "recebida",
            horario : "20:20"
        }
    ],
    },
    {id : 2,
        nome : "José",
        ultimaMensagem : "Quer programar comigo?",
        horarioUltimaMensagem : "20:20",
        avatar : "src/assets/images/David.png",
        converas : [
            {
                mensagem : "Oi, eu sou a maria ",
                tipo : "recebida",
                horario : "20:20"
            },
            {
                mensagem : "Que legal, eu sou o Gennari!",
                tipo : "enviada",
                horario : "20:20"
            },
            {
                mensagem : "Vamos codar juntos?",
                tipo : "recebida",
                horario : "20:20"
            }
            
        ],
        
    },
    {id : 3,
        nome : "João",
        ultimaMensagem : "Consegui aquela vaga!",
        horarioUltimaMensagem : "20:20",
        avatar : "src/assets/images/Greg.png",
        converas : [
            {
                mensagem : "Oi, eu sou o João ",
                tipo : "recebida",
                horario : "20:20"
            },
            {
                mensagem : "Que legal, eu sou o Gennari!",
                tipo : "enviada",
                horario : "20:20"
            },
            {
                mensagem : "Vamos codar juntos?",
                tipo : "recebida",
                horario : "20:20"
            }
            
        ],
    },
    {id : 4,
        nome : "José",
        ultimaMensagem : "Tem café?",
        horarioUltimaMensagem : "20:20",
        avatar : "src/assets/images/Emily.png",
        converas : [
            {
                mensagem : "Oi, eu sou José ",
                tipo : "recebida",
                horario : "20:20"
            },
            {
                mensagem : "Que legal, eu sou o Gennari!",
                tipo : "enviada",
                horario : "20:20"
            },
            {
                mensagem : "Tem café ai? ",
                tipo : "recebida",
                horario : "20:20"
            }
            
        ],
    },
    {
    id : 5,
        nome : "Gennari",
        ultimaMensagem : "Exibindo última mensagem!",
        horarioUltimaMensagem : "14:02",
        avatar : "src/assets/images/Emily.png",
        converas : [
            {
                mensagem : "Oi, eu sou o principe",
                tipo : "recebida",
                horario : "20:20"
            },
            {
                mensagem : "Que legal, eu sou o Gennari!",
                tipo : "enviada",
                horario : "20:20"
            },
            {
                mensagem : "Vamos codar juntos?",
                tipo : "recebida",
                horario : "20:20"
            }
            
        ]

    }
]
document.addEventListener("DOMContentLoaded", ()=>{

    let abaFocada = true
    const tituloOriginal = document.title // capturando o titulo do documento 

    const inputMsg = document.querySelector("#inputMensagem")
    inputMsg.placeholder = "Digite sua mensgem!"

    const buttonSend = document.querySelector('.cursor--pointer[src*="Send"]')

    const listaMensagens = document.querySelector(".div--messages"); //ONDE AS MENSAGENS SÃO EXIBIDAS

    const inputBuscaContato = document.querySelector(".div--search input[type='search']")
    console.log(inputBuscaContato)

    const inputBuscaMensagem = document.getElementById("search--message")
    console.log(inputBuscaMensagem)


    function enviarMensagem(){ // PERMITE PEGAR O QUE FOI DIGITADO NO INPUT
        const textoMensagem = inputMsg.value.trim();
        if (textoMensagem === ""){
            alert('Não possui mensagem!')
        } else {
            const mensagemRenderizada = renderizarMensagens("enviada", textoMensagem, "20:33")
            listaMensagens.appendChild(mensagemRenderizada)
            inputMsg.value = '';
            setTimeout(responderMensagem, 2000);
        }   
    }
        const respostasParaOBot = [
            "Olá, tudo bem?",
            "Como você está?",
            "Qual o seu nome?",
            "Meu nome é O Novo Bot",
            "Eu faço o curso do novo programador",
            "Você quer conversar comigo?"
        ]
    function responderMensagem(){ //BOT IRÁ RESPONDER A MENSAGEM
        const posicao = Math.floor(Math.random() * respostasParaOBot.length) //math random sorteia valores entre 0 e 1 
        const menssagemDoBot = respostasParaOBot[posicao];
        const mensagemRenderizada = renderizarMensagens("recebida", menssagemDoBot, "19:33")
        listaMensagens.appendChild(mensagemRenderizada)
    }

    function carregarMensagemContato(index){ //CARREGANDO MENSAGENS DE UM CONTATO ESPECÍFICO
        const contato = listaDeContatos[index];
        listaMensagens.innerHTML = "" //limpando as mensagens
        contato.converas.forEach((conversa)=>{
            const mensagemRenderizada = renderizarMensagens(conversa.tipo, conversa.mensagem,conversa.horario)
            listaMensagens.appendChild(mensagemRenderizada);
        });
    }

    function carregarContatos(filrto = ''){ // EXIBIR OS CONTATOS 
        

        const divContatosElement = document.querySelector(".div--contacts")  // criando variavel que manipule a div
        divContatosElement.innerHTML = '';  // apaga contatos feitos no html

        const contatosFiltrados = listaDeContatos.filter((contato)=>
            contato.nome.toLowerCase().includes(filrto.toLocaleLowerCase()) // caso a função carregar contatos seja passaddaa um filtro, ele será aplicado e retornará
        )

        if (contatosFiltrados.length === 0){
            divContatosElement.innerHTML = '<div><span>Contato não encontrado!</span></div>';
            return; 
        }
        
        contatosFiltrados.forEach((contato,index) =>{
            console.log(contato) // printando cada contato específico
            const divParentElement = document.createElement("div");
            divParentElement.classList.add("flex", "area--contatc", "fade-in" ) // esse comando me permite "enxugar" o elemento abaixo e retirar a div: <div class="flex area--contatc">

            divParentElement.innerHTML = `
                    <div class="flex justify--content--center align--items--center flex--1">
                        <img class="avatar--left--bar" src="${contato.avatar}"">
                    </div>

                    <div class="flex flex--direction--column justify--content--center flex--3">
                        <div class="flex align--items--center infos--contact">
                            <div class="font--family font--weight--bold">${contato.nome}</div>
                        </div>
                        <div class="last--message">
                            ${contato.ultimaMensagem}
                        </div>
                    </div>

                    <div class="flex flex--direction--column flex--1 align--items--end justify--content--center div--last--messages--info ">
                        <div class="hour--last--message">${contato.horarioUltimaMensagem}</div>
                    </div>
                `;

            divParentElement.addEventListener("click", () =>{
                carregarMensagemContato(index);
            }) //permite que eu clique sobre um contato e me apareça a conversa
            divContatosElement.appendChild(divParentElement);
        })

    }

    function renderizarMensagens(tipo,mensagem,horario){ //ADICIONANDO MENSAGENS ATRAVES DO INPUT E EXIBINDO ELAS COMO FORMA DE CHAT
        const divMensagem = document.createElement("div") // criando o elemento div
        const direcao = tipo === "enviada"? "end" : "start"; // verificando se a mensagem é recebida ou enviada
        const stylesDiv = tipo === "enviada"? "you" : "other";

        divMensagem.classList.add("flex","flex--direction--row","width--100",`justify--content--${direcao}`, "fade-in") // adicionando as classes relativo a div pai 

        divMensagem.innerHTML = `
                    <div class=" flex flex--direction--column message ${stylesDiv}">
                        <div class="flex flex--4">
                            ${mensagem}
                        </div>
                        <div class="flex flex--direction--row justify--content--end font--size--12 align--items--center infos--message">
                            <div class="emojis-reaction cursor--pointer">➕</div>
                            <div class="area-emojis"></div>
                            <div>${horario}</div>
                            <img src="src/assets/icons/VectorChecked.png" id="iconeChecked">
                        </div>
                    </div>` 
        // listaMensagens.appendChild(divMensagem)
        return divMensagem
    }

    function buscarMensagem(termo){ //FUNCAO PARA PROCURAR UMA MENSAGEM DENTRO DAS MENSAGENS DE UM CONTATO ABERTO
        let encontrouMensagem = false; //variavel que nos diz se há uma mensagem de acordo com o parametro da busca
        let mensagemElement = document.querySelectorAll(".message")
        mensagemElement.forEach((mensagem) =>{
            const textoOriginal = mensagem.innerText; //texto que é reativo a mensagem que já está na conversa
            const textoNormalizado = textoOriginal.toLowerCase(); //texto em minusculo para padronização na hora de comparar a mensagem que já está na conversa com o texto que foi digitado no input de buscar a mensagem 
            const termoNormalizado = termo.toLowerCase(); //termo que foi passado como parametro em minusculo para poder ser utilizado acima

            if (textoNormalizado.includes(termoNormalizado)){
                encontrouMensagem = true;
                const textoDestacado = textoOriginal.replace(
                    new RegExp(`(${termo})`,"gi"), `<span class='highlight'>$1</span>`)
                    /*usando o replace como (param1, param2)

                    o param1 será uma RegExp do termo passado na funçao buscarMensagem e o "gi" é relativo ao filtro que será retornado, então o g é referente ao global, ou seja, irá retornar todos o termos e o i é referente a NÃO diferenciação de maiúsculas e minúsculas
                    
                    param2 é o que será substituído, nesse caso, será adicionado um span com a classe highlight que destacará o texto e o "$1" pode ser entendido como o valor encontrado pelo param1*/
                    
                mensagem.innerHTML = textoDestacado
                mensagem.style.display = "block" //Exibir a mensagem
            } else {
                mensagem.style.display = "none" //ocultando a mensagem
                listaMensagens.innerHTML = "<div>Não houve resultados</div>";
            }

            if (!encontrouMensagem  && termo !==""){
                listaMensagens.innerHTML = "<div>Não houve resultados</div>";
            } else if (termo === '') {
                mensagemElement.forEach((mensagem)=>{
                    mensagem.style.display = "block";
                    mensagem.innerHTML = mensagem.innerText;
                })
            } 
            // esse bloco é necesário? não poderia apenas colocar o listaMensagens.innerHTML = "<div>Não houve resultados</div>" no else do primeiro if? 
        });
    }

    window.addEventListener("blur", () =>{ // saiu da pagina
        abaFocada = false
        document.title = "O chat saiu!"

    })

    window.addEventListener("focus", ()=>{ // saiu e entrou
        abaFocada = true
        document.title = "O chat voltou!"
    })

    const listaEmojis = [
        "&#128514", "&#128525", "&#128534"
    ]
    const listaEmojis2 = [
        "😂","😍","😖"
    ]
    function abrirMenuReacao(mensagem){ // exibir os emojis na area 
        const areaEmojis = mensagem.querySelector(".area-emojis")

        listaEmojis2.forEach((emoji)=>{
            const emojiElement = document.createElement("span")
            emojiElement.classList.add("emoji-opcao", "cursor--pointer")
            emojiElement.innerHTML = emoji

            emojiElement.addEventListener("click", ()=>{    
                alternarEmoji(mensagem,emoji)
            })

            areaEmojis.appendChild(emojiElement)
        })
    
    }

    function alternarEmoji(mensagem, emoji){
        let reacaoExistente = mensagem.querySelector(".emoji-selecionado") // criando a variavel que por ora será atribuido um queryselector que retornará null, já que essa classe só será criado em outro bloco de condição 

        if (reacaoExistente && reacaoExistente.textContent.includes(emoji)){ // isso serve para apagar o emoji já selecionado por um espaço em branco, fazendo com que não seja possível adicionar mais de um MESMO emoji mas diferente são permitidos por causa da segunda parte da condição "reacaoExistente.textContent.includes(emoji)"

            reacaoExistente.textContent = reacaoExistente.textContent.replace(emoji, "")
            if (reacaoExistente.textContent.trim() === ""){
                reacaoExistente.remove() // apaga do dom a div 
            }
        } else {
            if (!reacaoExistente){ // pela primeira vez que funçao é executada, ela cai aqui direto, adicionando o emoji 
                reacaoExistente = document.createElement("div")
                reacaoExistente.classList.add("emoji-selecionado")
                mensagem.appendChild(reacaoExistente)
            }
            reacaoExistente.textContent += emoji // permite que mais de um emoji seja adicionado a div reacaoExistente
        }

    }

    function notificarNovaMensagem(){

        setInterval(()=>{
            document.title = "Nova Mensagem"
        }, 1000)
    }

    listaMensagens.addEventListener("click", (event)=>{ //criando um listener para poder ter acesso aos emojis
        if (event.target.classList.contains("emojis-reaction")){
            const mensagem = event.target.closest('.message') // retorna o elemento caso haja algum elemento com a classe passada e caso não tenha retorna null
            abrirMenuReacao(mensagem)
        }
    })
    inputBuscaMensagem.addEventListener("input", ()=>{
        const termoDeBusca = inputBuscaMensagem.value;
        buscarMensagem(termoDeBusca);
    })
    
    inputBuscaContato.addEventListener("input", ()=>{
        const termoBusca = inputBuscaContato.value;
        console.log(termoBusca)
        carregarContatos(termoBusca);
    })

    buttonSend.addEventListener("click", ()=>{ // BOTAO PARA ENVIAR A MENSAGEM 
        enviarMensagem();
    }); 

    inputMsg.addEventListener('keypress', (event) =>{ // APERTAR ENTER ENVIA A MENSAGEM 
        if (event.key === 'Enter'){
            enviarMensagem();
        }
    });

    setTimeout(() =>{
        carregarContatos();
    },500)
        
}) //fim do loaded
