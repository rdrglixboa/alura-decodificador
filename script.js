const botaoCriptografar = document.querySelector(".botaoCriptografar")
const botaoDescriptografar = document.querySelector(".botaoDescriptografar")
const imagem = document.querySelector(".imagem")
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

function filtrarEntrada(input){
 input.value = input.value.replace(/[^a-z]/g, '');
}


function criptografar(){
  console.log("Criptografado")
  imagem.classList.toggle("ativo")
  descricao.classList.toggle("ativo")
  container.classList.toggle("ativo")
  resultado.classList.toggle("ativo")



    var texto = document.querySelector('#texto').value;
    console.log("Texto armazenado:", texto); 

    if(texto.includes("a") || texto.includes("e") || texto.includes("i") || texto.includes("o") || texto.includes("u")){

      var textoModificado = texto
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat')

      console.log("O texto original era:" + texto)
      console.log("O texto modificado ficou:" +textoModificado)
      resultado.textContent = textoModificado;
    }
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

   
    if(texto.includes("a") || texto.includes("e") || texto.includes("i") || texto.includes("o") || texto.includes("u")){

      var textoModificado = texto
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u')

      console.log("O texto original era:" + texto)
      console.log("O texto modificado ficou:" +textoModificado)
      resultado.textContent = textoModificado;
    }
}

botaoCriptografar.addEventListener("click", criptografar)
botaoDescriptografar.addEventListener("click", descriptografar)