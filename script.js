const baseUrl = "https://viacep.com.br/ws/";

async function buscarEndereco(cep) {
  let mensagemErro = document.getElementById("erro");
  mensagemErro.innerHTML = "";

  try {
    let consultaCEP = await fetch(`${baseUrl}${cep}/json/`);
    let consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro) {
      throw new Error("CEP não existente!");
    }
    let cidade = document.getElementById("cidade");
    let logradouro = document.getElementById("endereco");
    let estado = document.getElementById("estado");
    let bairro = document.getElementById("bairro");
    
    cidade.value = consultaCEPConvertida.localidade;
    logradouro.value = consultaCEPConvertida.logradouro;
    estado.value = consultaCEPConvertida.uf;
    bairro.value = consultaCEPConvertida.bairro;

    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
  } catch (error) {
    mensagemErro.innerHTML = `
      <img class="erro__imagem" src="img/warning.png" alt="Ícone de erro" />
      <p class="erro__texto">CEP inválido. Tente novamente!</p>
    `;
    console.log(error);
  }
};

let cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscarEndereco(cep.value));