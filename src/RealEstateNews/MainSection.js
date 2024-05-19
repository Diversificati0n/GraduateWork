import React from 'react';
import Sidebar from '../Home/Sidebar';
import News from './News';


function MainSection() {
    return (
        <section id="main">
            <div className="container">
                <div className="row">

                    {/* Content */}
                    <News />

                    {/* Сайдбар */}
                    <Sidebar />
                </div>
            </div>
        </section>
    );
}

export default MainSection;