import React from 'react';
import './footer.css';

function footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer--sort">
                    <nav>
                        <div className="sort--title">
                            <a href="">Sorteios</a>
                        </div>
                        <a href="">Sorteio de números</a>
                        <a href="">Sorteio de nomes</a>
                        <a href="">Amigo secreto</a>
                    </nav>
                </div>
                <div className="footer--lang">
                    <nav>
                        <div className="lang--title">
                            <a href="">Idiomas</a>
                        </div>
                        <a href="">Português</a>
                        <a href="">Español</a>
                        <a href="">English</a>
                    </nav>
                </div>

            </div>
            <div className="footer--info">
                <span>© 2021 SorteioGo</span>
            </div>
        </footer>
    );
}

export default footer;
