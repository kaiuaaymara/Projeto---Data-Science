from flask import Flask, jsonify, request, url_for, render_template
import joblib
import keras
import pickle

app = Flask(__name__)


# Suponha que estes são os mapeamentos de pilotos e aeroportos para valores numéricos
mapeamento_pilotos = {
    'Perry Burhose': 1,
    'Aaren Greenzf': 2,
    'Aaren Horing': 3,
    # Adicione mais pilotos e seus valores numéricos conforme necessário
}

mapeamento_aeroportos = {
    'Aeroporto 1': 1,
    'Aeroporto 2': 2,
    # Adicione mais aeroportos e seus valores numéricos conforme necessário
}

# Função para prever o status do voo


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/graficos")
def graficos():
    return render_template('graficos.html')


@app.route("/teladeconfirmacao")
def teladeconfirmacao():
    return render_template('teladeconfirmacao.html')


def prever_status_voo(dados_voo):
    modelo = joblib.load("modelo_voos.pkl")
    # Suponha que 'piloto', 'aeroporto' e 'data' são chaves nos dados do voo
    piloto_numerico = mapeamento_pilotos.get(dados_voo['piloto'])
    aeroporto_numerico = mapeamento_aeroportos.get(dados_voo['aeroporto'])

    # Aqui você pode fazer uso dos valores numéricos para previsão
    # (substitua esta lógica pela utilização correta no seu modelo)
    # Retornamos os valores numéricos apenas para demonstração
    return piloto_numerico, aeroporto_numerico


@app.route('/predict', methods=['POST'])
def predict():
    dados_voo = request.json  # Receba os dados do voo enviados pelo JavaScript
    piloto = dados_voo.get('piloto')
    aeroporto = dados_voo.get('aeroporto')
    data = dados_voo.get('data')

    piloto_numerico, aeroporto_numerico = prever_status_voo(dados_voo)

    # Realiza a previsão com os dados convertidos
    if piloto_numerico == 1:
        status = 'voo com probabilidade de atraso'
    elif piloto_numerico == 0:
        status = 'voo com probabilidade de ser cancelado'
    else:
        status = 'voo sairá na hora'

    return jsonify({'piloto': piloto, 'aeroporto': aeroporto, 'data': data,
                    'status': status, 'status_previsto': piloto_numerico})




if __name__ == '__main__':
    app.run(debug=True)
