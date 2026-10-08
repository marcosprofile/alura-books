# Consulta de CEP com JavaScript

Formulário de endereço com preenchimento automático a partir de uma consulta à API ViaCEP, desenvolvido com HTML, CSS e JavaScript.

Projeto de estudo realizado no curso **JavaScript: consumindo e tratando dados de uma API**, da Alura, e ampliado com validação de CEP, estado de carregamento e tratamento de diferentes falhas.

## Funcionalidades

- Consulta ao sair do campo de CEP.
- Normalização do CEP, removendo espaços externos e hífens.
- Validação do formato com oito dígitos antes da requisição.
- Preenchimento automático de cidade, endereço, estado e bairro.
- Limpeza dos dados de endereço antes de uma nova consulta.
- Mensagem de carregamento durante a busca.
- Bloqueio temporário do campo de CEP durante a requisição.
- Mensagens para formato inválido, CEP não encontrado e falha na consulta.
- Verificação do status HTTP da resposta.

## Tecnologias

- HTML
- CSS
- JavaScript
- Fetch API
- ViaCEP

## Como executar

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto no VS Code.
3. Inicie o arquivo HTML do formulário com a extensão Live Server ou outro servidor estático local.
4. Informe um CEP com oito números, com ou sem hífen, e saia do campo para realizar a consulta.

É necessário acesso à internet para consultar a API. Não é necessário configurar um backend próprio para esse exercício.

## Como funciona

O evento `focusout` inicia a busca. Antes da requisição, o CEP é normalizado e validado. A função assíncrona consulta o endpoint abaixo com `fetch` e converte a resposta para JSON:

```text
https://viacep.com.br/ws/{cep}/json/
```

Se a consulta retornar um endereço, os dados preenchem os campos do formulário. Caso a API informe um CEP inexistente ou a requisição falhe, a interface exibe uma mensagem correspondente.

O bloco `finally` encerra o estado de carregamento e libera o campo de CEP, tanto em caso de sucesso quanto de falha.

## Aprendizados

- Fluxo síncrono e assíncrono do JavaScript.
- Consumo de APIs com `fetch` e `async/await`.
- Conversão de respostas para JSON.
- Tratamento de erros com `try`, `catch` e `finally`.
- Diferença entre falha HTTP e erro informado nos dados da API.
- Manipulação do DOM e eventos de interação.
- Validação de formato com expressão regular.
- Feedback de carregamento e erro na interface.

## Limitações

- A validação de oito dígitos verifica apenas o formato; a existência do CEP é confirmada pela API.
- Alguns CEPs podem retornar endereço ou bairro vazios, permitindo o preenchimento manual.
- O projeto consulta endereços; não salva nem envia os dados do formulário para um sistema de cadastro.

## Próximos passos

- Recriar a interface em React.
- Controlar endereço, carregamento e mensagens com estados.
- Integrar a consulta a um fluxo de cadastro completo.
- Adicionar testes para os cenários de sucesso e falha.

## Referências

- [ViaCEP](https://viacep.com.br/)
- [Curso da Alura](https://www.alura.com.br/curso-online-java-script-consumindo-tratando-dados-de-uma-api)

## Autor

Marcos Laurindo Ferreira

- [GitHub](https://github.com/marcosprofile)
- [Portfólio](https://marcotech.dev.br)
