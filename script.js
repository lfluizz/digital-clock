//Variaveis
const hora = document.getElementById('hr');
const minutos = document.getElementById('min');
const segundos = document.getElementById('seg');

//Arrays

/*Para manipular o dia da semana e dia do mês com o objeto DATE */
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro' , 'Outubro', 'Novembro', 'Dezembro'];
const semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

//Funções
function atualizarHoras() {
    const data = new Date();

    const hr = formatarData( data.getHours() );   
    const min = formatarData( data.getMinutes() );     
    const seg = formatarData( data.getSeconds() );       

    hora.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg; 

    atualizarData();
    atualizarMsgEfundo(hr);
}

/* função para inserir um 0 a esquerda quando o horario/dia for menor que 10 */
function formatarData(horario) {
    return horario.toString().padStart(2, '0');
}


function atualizarData() {

    const data = new Date();

    const ano = data.getFullYear();
    
    /*Acessa o índice do mês no array, com o número retornado pelo getMonth */
    const mes = meses[ data.getMonth() ].toLowerCase();

    const diaMes = formatarData(data.getDate ());

    /*Acessa o índice do dia da semana no array */
    const diaSemana = semana[data.getDay() ];

    document.getElementById('data').textContent = `${diaMes} de ${mes}, ${ano}`
    document.getElementById('dia').textContent = diaSemana;
}

function atualizarMsgEfundo(hr) {

    const mensagem = document.getElementById('mensagem');
    const bodyPagina = document.body

    if( hr >= 6 && hr < 12 ){
        mensagem.innerText = 'Bom dia';
        bodyPagina.style.backgroundImage =  "url('images/ng.png') ";

    } else if( hr >= 12 && hr < 18 ) {
        mensagem.innerText = 'Boa tarde';
        bodyPagina.style.backgroundImage =  "url('images/tarde.png') "

    } else if ( hr >= 18 && hr <= 23 ) {
        mensagem.innerText = 'Boa noite';
        bodyPagina.style.backgroundImage =  "url('images/noite.png') ";
        
    } else {
        mensagem.innerText = 'Boa madrugada';
        bodyPagina.style.backgroundImage =  "url('images/madrugada.png') ";

    }
}


//Chamada para as funções
atualizarHoras();
setInterval(atualizarHoras, 1000);



