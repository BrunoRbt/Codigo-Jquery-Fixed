$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    // Aplicando máscaras aos campos
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });

    $('#cep').mask('00000-000', {
        placeholder: '01234-567'
    });

    // Configuração da validação do formulário
    $('form').validate({
        rules: {
            nome: {
                required: true // Validação: Campo obrigatório
            },
            email: {
                required: true, // Validação: Campo obrigatório
                email: true    // Validação: Deve ser um e-mail válido
            },
            telefone: {
                required: true // Validação: Campo obrigatório
            },
            endereco: {
                required: true // Validação: Campo obrigatório
            },
            cep: {
                required: true // Validação: Campo obrigatório
            },
            cpf: {
                required: true // Validação: Campo obrigatório
            }
        },
        messages: {
            nome: "Por favor, insira seu nome completo.",
            email: "Por favor, insira um e-mail válido.",
            telefone: "Por favor, insira seu número de telefone.",
            endereco: "Por favor, insira seu endereço completo.",
            cep: "Por favor, insira seu CEP.",
            cpf: "Por favor, insira seu CPF."
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (event, validator) {
            alert("Por favor, preencha todos os campos obrigatórios para prosseguir com a compra!");
        }
    });
});