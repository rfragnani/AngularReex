$('#formContato').on('submit', function(e){
    if (!e.isDefaultPrevented()) {
        var url = '/core/contacts/new';

        var mensagem = {
            name: $('#nomeClienteId').val(),
            email: $('#emailClienteId').val(),
            phone: $('#telefoneClienteId').val(),
            message: $('#messageClienteId').val()
        }
        
        $.ajax({
            url: url,
            async: false,
            beforeSend: function(xhr){
                xhr.setRequestHeader("Authorization", "Basic " + btoa('reex:xSuWGmFdN4TfzzkLySvlAWmM4opf156ZDpDk/bq3ka0CTQrSXRqc+UvgQOPPsBs2'));
            },
            method: 'POST',
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8',
            data: JSON.stringify(mensagem),
            success: function(data){
                //window.location.url = '/index.html';
                alert('Mensagem enviada com sucesso');
            },
            error: function(error){
                //alert('deu pau');
                //window.location.url = '/index.html';
                alert('Desculpe nos, mas aconteceu um erro ao enviar sua mensagem! Por favor, tente mais tarde ou envie um email para contato@reex.com.br');
                console.log(error);
            } 
        });
        return false;
    }
});

