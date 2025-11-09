// launch.js
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('calendario-container');
    const nomesMeses = [
        "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
        "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
    ];
    const nomesDias = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
    const ano = 2025;

    // Imagens de cada distrito
    const imagensDistritos = [
        'https://raw.githubusercontent.com/tel36214287-star/Um-Calendario-jogos-vorazes/main/publicar/166911114.png',
        'https://raw.githubusercontent.com/tel36214287-star/Um-Calendario-jogos-vorazes/main/publicar/202401939.png',
        'https://raw.githubusercontent.com/tel36214287-star/Um-Calendario-jogos-vorazes/main/publicar/211280998.png',
        'https://raw.githubusercontent.com/tel36214287-star/Um-Calendario-jogos-vorazes/main/publicar/293232634.png',
        'https://raw.githubusercontent.com/tel36214287-star/Um-Calendario-jogos-vorazes/main/publicar/392696179.png',
        'https://raw.githubusercontent.com/tel36214287-star/Um-Calendario-jogos-vorazes/main/publicar/566031016.png',
        'https://raw.githubusercontent.com/tel36214287-star/Um-Calendario-jogos-vorazes/main/publicar/585400009.png',
        'https://raw.githubusercontent.com/tel36214287-star/Um-Calendario-jogos-vorazes/main/publicar/612145833.png',
        'https://raw.githubusercontent.com/tel36214287-star/Um-Calendario-jogos-vorazes/main/publicar/725442475.png',
        'https://raw.githubusercontent.com/tel36214287-star/Um-Calendario-jogos-vorazes/main/publicar/755832705.png',
        'https://raw.githubusercontent.com/tel36214287-star/Um-Calendario-jogos-vorazes/main/publicar/867605455.png',
        'https://raw.githubusercontent.com/tel36214287-star/Um-Calendario-jogos-vorazes/main/publicar/921322687.png'
    ];

    // GIF de destaque
    const gifDestaque = 'https://raw.githubusercontent.com/tel36214287-star/Um-Calendario-jogos-vorazes/main/publicar/5Zeus.gif';

    // Função para gerar cada mês
    function gerarMes(mesIndex, ano) {
        const nomeMes = nomesMeses[mesIndex];
        const divMes = document.createElement('div');
        divMes.className = 'mes';
        divMes.innerHTML = `
            <h2>${nomeMes}</h2>
            <img class="distrito" src="${imagensDistritos[mesIndex]}" alt="Distrito ${mesIndex+1}">
            <img class="gif-destaque" src="${gifDestaque}" alt="GIF Destaque">
        `;

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        thead.innerHTML = '<tr>' + nomesDias.map(d => `<th>${d}</th>`).join('') + '</tr>';
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        const primeiroDia = new Date(ano, mesIndex, 1);
        const diaSemanaInicio = primeiroDia.getDay();
        const ultimoDia = new Date(ano, mesIndex+1, 0).getDate();
        let diaAtual = 1, contadorCelulas = 0;

        while(diaAtual <= ultimoDia){
            const tr = document.createElement('tr');
            for(let i=0;i<7;i++){
                const td = document.createElement('td');
                if(contadorCelulas < diaSemanaInicio || diaAtual > ultimoDia){
                    td.className = 'vazio';
                    td.innerHTML = '&nbsp;';
                } else {
                    td.className = 'dia';
                    td.textContent = diaAtual;
                    diaAtual++;
                }
                tr.appendChild(td);
                contadorCelulas++;
            }
            tbody.appendChild(tr);
        }

        table.appendChild(tbody);
        divMes.appendChild(table);
        container.appendChild(divMes);
    }

    // Gerar todos os meses
    for(let i=0;i<12;i++){
        gerarMes(i, ano);
    }
});
