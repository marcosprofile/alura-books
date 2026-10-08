const baseUrl = "https://viacep.com.br/ws/";

const campoCEP = document.getElementById("cep");
const mensagemErro = document.getElementById("erro");
const carregamento = document.getElementById("carregamento");

const cidade = document.getElementById("cidade");
const logradouro = document.getElementById("endereco");
const estado = document.getElementById("estado");
const bairro = document.getElementById("bairro");

function limparEndereco() {
  cidade.value = "";
  logradouro.value = "";
  estado.value = "";
  bairro.value = "";
}

async function buscarEndereco(cep) {
  mensagemErro.innerHTML = "";
  limparEndereco();

  const cepNormalizado = cep.trim().replaceAll('-', "");

  if (!/^\d{8}$/.test(cepNormalizado)) {
    mensagemErro.innerHTML = `<p>Informe um CEP com oito números.</p>`;
    return;
  }

  carregamento.textContent = "Buscando endereço...";
  campoCEP.disabled = true;

  try {
    const resposta = await fetch(`${baseUrl}${cepNormalizado}/json/`);

    if (!resposta.ok) {
      throw new Error(`Falha na consulta: HTTP ${resposta.status}`);
    }

    const endereco = await resposta.json();

    if (endereco.erro) {
      mensagemErro.textContent = "CEP não encontrado.";
      return;
    }

    cidade.value = endereco.localidade ?? "";
    logradouro.value = endereco.logradouro ?? "";
    estado.value = endereco.uf ?? "";
    bairro.value = endereco.bairro ?? "";

    return endereco;
  } catch (error) {
    mensagemErro.innerHTML = `<p>Não foi possível consultar o CEP. Tente novamente.</p>`;

    console.error(error);
  } finally {
    carregamento.textContent = "";
    campoCEP.disabled = false;
  }
}

campoCEP.addEventListener("focusout", () => buscarEndereco(campoCEP.value));