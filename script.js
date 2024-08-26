const botaoCriptografar = document.querySelector(".botaoCriptografar")
const botaoDescriptografar = document.querySelector(".botaoDescriptografar")
const imagem = document.querySelector(".imagem")
// const texto = document.querySelector("#texto").value
// const resultado = document.querySelector(".resultado")
const descricao = document.querySelector(".descricao")
const container = document.querySelector(".container__mensagem")
const resultado = document.querySelector(".resultado")





console.log(botaoCriptografar)
console.log(botaoDescriptografar)
console.log(imagem)
console.log(texto)
console.log(container)


 imagem.classList.add("ativo")
 descricao.classList.add("ativo")
// texto.classList.remove("ativo")


function criptografar(){
  console.log("Criptografado")
  imagem.classList.toggle("ativo")
  descricao.classList.toggle("ativo")
  container.classList.toggle("ativo")
  resultado.classList.toggle("ativo")



    var textoModificado = document.querySelector('#texto').value;


    resultado.textContent = textoModificado;
    

    console.log("Texto armazenado:", textoModificado); 
}


function descriptografar(){
  console.log("Criptografado")
  imagem.classList.toggle("ativo")
  descricao.classList.toggle("ativo")
  container.classList.toggle("ativo")
  resultado.classList.toggle("ativo")


  
    var texto = document.querySelector('#texto').value;

 

    resultado.textContent = texto;

    console.log("Texto armazenado:", texto); 
}

botaoCriptografar.addEventListener("click", criptografar)
botaoDescriptografar.addEventListener("click", descriptografar)