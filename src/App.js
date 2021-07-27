    import React from 'react';
    import './App.css';
    import Header from './components/header.js';
    import Footer from './components/footer.js';

    class App extends React.Component {
        constructor() {
            super();

            this.state = {
                value: 0,
                numOne: 0,
                numTwo: 0
            }
            this.gerarValor = this.gerarValor.bind(this);
            this.onChangeValue = this.onChangeValue.bind(this);
            this.onChangeNumOne = this.onChangeNumOne.bind(this);
            this.onChangeNumTwo = this.onChangeNumTwo.bind(this);

        }

        gerarValor() {

            var min = Math.ceil(this.state.numOne);
            var max = Math.floor(this.state.numTwo);
            var limit = min - max+1;

            if (this.state.numTwo < this.state.numOne){
                window.alert("Coloque o valor menor primeiro")
                window.location.reload();
                return
            }
            if(this.state.value <= limit){
                window.alert("Quantidade de possiveis resultados superior ao intervalo")
                window.location.reload();
                return
            }
            else{

                var arr = [];

                for (let i = 0; i < this.state.value; i++) {

                    var sugestao = Math.ceil(Math.random() * (max - min)) + min; // Escolher um numero ao acaso
                    while (arr.indexOf(sugestao) >= 0) {  // Enquanto o numero já existir, escolher outro
                        sugestao = Math.ceil(Math.random() * (max - min)) + min;
                    }
                    arr.push(sugestao); // adicionar este numero à array de numeros sorteados para futura referência
                }

                var element = document.getElementById("result");
                element.innerHTML = "Resultado: " +  arr;

                document.getElementById("cardResult").style.display = "flex";

            }


        }

        onChangeValue(event) {
            this.setState({ value: event.target.value })
        }
        onChangeNumOne(event) {
            this.setState({ numOne: event.target.value })
        }
        onChangeNumTwo(event) {
            this.setState({ numTwo: event.target.value })
        }

        render() {
            return (
                <div className="app">
                    <Header />
                    <div className="card--task">
                        <h3>Sortear números</h3>
                        <span >Crie o sorteio de números facilmente utilizando essa opção,
                            você poderá salvar o sorteio e compartilhar o link com outras pessoas.</span>
                        <div className="inputs">
                            <h5>O resultado terá quantos números?</h5>
                            <input type="number" value={this.state.value} onChange={this.onChangeValue} />
                            <h5>entre</h5>
                            <input type="number" value={this.state.numOne} onChange={this.onChangeNumOne} />
                            <h5>e</h5>
                            <input type="number" value={this.state.numTwo} onChange={this.onChangeNumTwo} />
                            <br />
                            <div className="result" id="cardResult">
                                <div className="contentCard">
                                    <span>Tipo de sorteio: Sorteio de números</span>
                                    <span>Números sorteados: {this.state.value}</span>
                                    <span>Intervalo: entre {this.state.numOne} e {this.state.numTwo}</span>
                                    <span id="result"></span>
                                </div>

                            </div>
                            <button onClick={this.gerarValor}>TESTAR SORTEIO</button>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Sortear nomes</h3>
                        <span>Crie o sorteio de nomes, você poderá inserir
                            manualmente ou fazer o upload de um arquivo com os nomes para realizar o sorteio.</span>
                        <button>CRIAR SORTEIO DE NOMES</button>
                    </div>
                    <div className="card">
                        <h3>Sortear amigo secreto</h3>
                        <span>Crie o sorteio de amigo secreto simplificado com essa ferramenta que não
                            exige cadastro. O resultado será enviado para todos os participantes.</span>
                        <button>CRIAR AMIGO SECRETO</button>
                    </div>
                    <Footer />
                </div>
            );
        }
    }

    export default App;

