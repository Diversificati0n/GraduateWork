import React from 'react';

function Sidebar() {
    return (
        <div id="sidebar" className="col-4 col-12-medium">

            {/* Сайдбар список */}
            <section>
                <ul className="divided">

                    <li>
                        {/* Подписка */}
                        <article className="box excerpt">
                            <div className="subscription-form">
                                <form action="javascript:void(0)" method="post"> {/* URL для обработки формы */}
                                    <input type="email" name="email" placeholder="Введите ваш email" required />
                                    <a href="javascript:void(0)" className="button icon fa-file">Подписаться</a>
                                </form>
                            </div>
                        </article>
                    </li>

                    <li>
                        {/* Excerpt */}
                        <article className="box excerpt">
                            <header>
                                <span className="date">July 28</span>
                                <h3><a href="#">And another post</a></h3>
                            </header>
                            <p>Lorem ipsum dolor odio facilisis convallis. Etiam non nunc vel est suscipit convallis non id orci lorem ipsum sed magna consequat feugiat lorem dolore.</p>
                        </article>
                    </li>

                    <li>
                        {/* Подари жизнь */}
                        <article className="box excerpt">
                            <header>
                                <h3 className='SidebarGL'><a href="javascript:void(0)">Подари жизнь</a></h3>
                            </header>
                            <a href="javascript:void(0)" className="image left"><img src="images/pic06.jpg" alt="картинка" /></a>
                            <p>описание организации</p>
                            <ul className="actions">
                                <li><a href="javascript:void(0)" className="button icon fa-file">Подари жизнь</a></li>
                            </ul>
                        </article>
                    </li>



                    <li>
                        {/* Статистика */}
                        <article className="box excerpt">
                            <div className="price-statistics">
                                <h2>Статистика цен на жилье</h2>
                                <p>Средняя цена за квадратный метр</p>
                                <p>2020 год: $1000</p>
                                <p>2021 год: $1100</p>
                                <p>2022 год: $1200</p>
                                <p>2023 год: $1250</p>
                                <p>2024 год (прогноз): $1300</p>
                                <p>Цены на жилье продолжают уверенно расти, что делает инвестиции в недвижимость привлекательными. Прогнозируется дальнейшее увеличение цен в ближайшие годы.</p>
                            </div>
                        </article>
                    </li>

                </ul>
            </section>
        </div>
    );
}

export default Sidebar;
