import React from 'react';
import './header.css';

class header extends React.Component {

    constructor(){
        super();

        this.mostrarMenu = this.mostrarMenu.bind(this);
    }

    mostrarMenu(){
    
        var aux = document.getElementById("indent");
        aux.classList.add("btn-menu-active")

        var aux2 = document.getElementById("btn-menu");
        aux2.classList.add("remove");
    }

    render() {
        return (
            <header className="header">
                <div className="header--body">
                    <div className="header--img">
                        <img src="https://www.sorteiogo.com/static/images/logo.png" />
                    </div>
                    <div className="header--text">
                        <h1 className="header--destaque">SorteioGo</h1>
                        <h1 className="header--text--two">Crie Sorteios Online Grátis</h1>
                    </div>
                </div>
                <nav className="header--nav" id="indent">
                    <a href="">Sorteio de números</a>
                    <a href="">Sorteio de nomes</a>
                    <a href="">Amigo secreto</a>
                </nav>
                <span class="btn-menu" id="btn-menu" onClick={this.mostrarMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </header>
        );
    }

}
export default header;
