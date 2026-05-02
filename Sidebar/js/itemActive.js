import { nome, sobrenome, profissao } from "./dateUser.js";

const items = document.querySelectorAll(".sideItem");
const mensagemItem = document.getElementById("mensagemItem");
const nomeUser = document.getElementById("nomeUser");
const nomeProfissao = document.getElementById("nomeProfissao");

nomeUser.textContent = nome + " " + sobrenome;
nomeProfissao.textContent = profissao;

mensagemItem.textContent = items[0].dataset.msg.replace("{nome}" , nome);

for(let i = 0; i < items.length; i++){
    //o for faz o evento de todos items existentes pegos no queryselector , ja que manualmente seria tudo igual ele faz isso com base nos indices
    items[i].addEventListener("click", ()=>{
        //toda todos os itens e remove a classe active deles
        for(let j = 0; j < items.length; j++){
            items[j].classList.remove("active")
        }
        //adiciona no item clicado 
        items[i].classList.add("active");

        mensagemItem.textContent = items[i].dataset.msg.replace("{nome}" , nome);
        //Em cada item do html foi definido um dado(data) chamado mensagem (data-msg) e quando estamos com um item[i] sendo chamado no for exibido a mensagem escrita no data-msg la no html .
    });
};


// jeito manual colocando id em todos e fzd um por 1 (deu certo mas mt longo e repetitivo)

// const item1 = document.getElementById("item1");
// const item2 = document.getElementById("item2");
// const item3 = document.getElementById("item3");
// const item4 = document.getElementById("item4");
// const item5 = document.getElementById("item5");
// const item6 = document.getElementById("item6");

// const mensagemItem = document.getElementById("mensagemItem");

// item1.addEventListener("click", ()=>{
//     item1.classList.add("active");
//     mensagemItem.textContent = "Olá, bem vinda ao Dashboard, Luisa"

//     if(item2.classList.contains("active")) item2.classList.remove("active")
//     if(item3.classList.contains("active")) item3.classList.remove("active")
//     if(item4.classList.contains("active")) item4.classList.remove("active")
//     if(item5.classList.contains("active")) item5.classList.remove("active")
//     if(item6.classList.contains("active")) item6.classList.remove("active")
// });

// item2.addEventListener("click", ()=>{
//     item2.classList.add("active")
//     mensagemItem.textContent = "Olá, bem vinda aos Clientes, Luisa"

//     if(item1.classList.contains("active")) item1.classList.remove("active")
//     if(item3.classList.contains("active")) item3.classList.remove("active")
//     if(item4.classList.contains("active")) item4.classList.remove("active")
//     if(item5.classList.contains("active")) item5.classList.remove("active")
//     if(item6.classList.contains("active")) item6.classList.remove("active")
// });

// item3.addEventListener("click", ()=>{
//     item3.classList.add("active")
//     mensagemItem.textContent = "Olá, bem vinda as Notificações, Luisa"

//     if(item1.classList.contains("active")) item1.classList.remove("active")
//     if(item2.classList.contains("active")) item2.classList.remove("active")
//     if(item4.classList.contains("active")) item4.classList.remove("active")
//     if(item5.classList.contains("active")) item5.classList.remove("active")
//     if(item6.classList.contains("active")) item6.classList.remove("active")
// });

// item4.addEventListener("click", ()=>{
//     item4.classList.add("active")
//     mensagemItem.textContent = "Olá, bem vinda aos Pedidos, Luisa"

//     if(item1.classList.contains("active")) item1.classList.remove("active")
//     if(item2.classList.contains("active")) item2.classList.remove("active")
//     if(item3.classList.contains("active")) item3.classList.remove("active")
//     if(item5.classList.contains("active")) item5.classList.remove("active")
//     if(item6.classList.contains("active")) item6.classList.remove("active")
// });

// item5.addEventListener("click", ()=>{
//     item5.classList.add("active")
//     mensagemItem.textContent = "Olá, bem vinda as Imagens, Luisa"

//     if(item1.classList.contains("active")) item1.classList.remove("active")
//     if(item2.classList.contains("active")) item2.classList.remove("active")
//     if(item3.classList.contains("active")) item3.classList.remove("active")
//     if(item4.classList.contains("active")) item4.classList.remove("active")
//     if(item6.classList.contains("active")) item6.classList.remove("active")
// });

// item6.addEventListener("click", ()=>{
//     item6.classList.add("active")
//     mensagemItem.textContent = "Olá, bem vinda as Configurações, Luisa"

//     if(item1.classList.contains("active")) item1.classList.remove("active")
//     if(item2.classList.contains("active")) item2.classList.remove("active")
//     if(item3.classList.contains("active")) item3.classList.remove("active")
//     if(item4.classList.contains("active")) item4.classList.remove("active")
//     if(item5.classList.contains("active")) item5.classList.remove("active")
// });