import React from 'react';
import Sidebar from './Sidebar';
import ContentNews from './ContentNews';

function MainSection() {
    return (
        <section id="main">
            <div className="container">
                <div className="row">

                    {/* Content */}
                    <ContentNews />

                    {/* Сайдбар */}
                    <Sidebar />
                </div>
            </div>
        </section>
    );
}

export default MainSection;
