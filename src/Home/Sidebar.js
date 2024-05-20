import React from 'react';
import ImgAssets from '../../src/assets/imgAssets';
import SubscriptionForm from './SubscriptionForm';
import CharityInfo from './CharityInfo';
import PriceStatistics from './PriceStatistics';

function Sidebar() {
    return (
        <div id="sidebar" className="col-4 col-12-medium">
            {/* Сайдбар список */}
            <section>
                <ul className="divided">
                    <li>
                        {/* Подписка */}
                        <SubscriptionForm />
                    </li>
                    <li>
                        {/* Подари жизнь */}
                        <CharityInfo />
                    </li>
                    <li>
                        {/* Статистика */}
                        <PriceStatistics />
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Sidebar;
