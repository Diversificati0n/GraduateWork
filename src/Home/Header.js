import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <section id="header">
            <div className="container">
                <nav id="nav">
                    <ul>
                        <li className="icon fa-home active">
                            <Link to="/"><span>Главная</span></Link>
                        </li>
                        <li className="active">
                            <Link to="/news" className="icon fa-bar-chart-o"><span>Новости</span></Link>
                        </li>
                        <li>
                            <Link to="/mortgage-calculator" className="icon fa-retweet"><span>Ипотечный калькулятор</span></Link>
                        </li>
                        <li>
                            <Link to="/realtors" className="icon fa-sitemap"><span>Риэлторы</span></Link>
                        </li>
                    </ul>
                </nav>

                <div className="Logohome">
                    <h1 id="logo"><Link to="/">Новостной портал</Link></h1>
                    <p>Горячие новости рынка недвижимости: взгляд изнутри</p>
                </div>
            </div>
        </section>
    );
}

export default Header;
