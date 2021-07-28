import React from 'react';
import './header.css';

class header extends React.Component {

    constructor(){
        super();

        this.mostrarMenu = this.mostrarMenu.bind(this);
    }

    mostrarMenu(){
        const actionMobile = document.getElementById("action");

        function toggleMenu(){
            const nav = document.getElementById('nav');
            nav.classList.toggle('active')
        }

        actionMobile.addEventListener('click', toggleMenu);
    }

    render() {
        return (
            <header className="header">
                <div className="header--body">
                    <div className="header--text" id="action">
                        <h1 className="header--destaque">SorteioGram</h1>
                        <h1 className="header--text--two">Crie Sorteios Online Grátis</h1>
                    </div>
                </div>
                <nav className="header--nav" id="nav">
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
