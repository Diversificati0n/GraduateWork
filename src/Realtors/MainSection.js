import React from 'react';
import AgentsContent from './AgentsContent';
import Sidebar from '../Home/Sidebar';

const MainSection = () => {
    return (
        <section id="main">
            <div className="container">
                <div className="row">
                    <AgentsContent />
                    <Sidebar />
                </div>
            </div>
        </section>
    );
};

export default MainSection;
