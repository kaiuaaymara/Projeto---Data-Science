document.addEventListener('DOMContentLoaded', function() {
    const confirmationForm = document.getElementById('confirmationForm');
    confirmationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const pilotoSelecionado = document.getElementById('pilotoSelect').value;
        const aeroportoSelecionado = document.getElementById('aeroportoSelect').value;
        const dataSelecionada = document.getElementById('dataInput').value;

        const dadosVoo = {
            piloto: pilotoSelecionado,
            aeroporto: aeroportoSelecionado,
            data: dataSelecionada
        };

        fetch('/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosVoo)
        })
        .then(response => response.json())
        .then(result => {
            alert(`Status do Voo Previsto: ${result.status}`);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    });
});
