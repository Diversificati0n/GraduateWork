import React from 'react';

const Footer = () => {
    return (
        <section id="footer">
            <div className="container">
                <header>
                    <h2>Вопросы или комментарии? <strong>Связаться:</strong></h2>
                </header>
                <div className="row">
                    <div className="col-6 col-12-medium">
                        <section>
                            <form method="post" action="#">
                                <div className="row gtr-50">
                                    <div className="col-6 col-12-small">
                                        <input name="name" placeholder="Имя" type="text" />
                                    </div>
                                    <div className="col-6 col-12-small">
                                        <input name="email" placeholder="Email" type="text" />
                                    </div>
                                    <div className="col-12">
                                        <textarea name="message" placeholder="Сообщение"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <a href="javascript:void(0)" className="form-button-submit button icon fa-envelope">Отправить сообщение</a>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                    <div className="col-6 col-12-medium">
                        <section>
                            <p>Мы готовы выслушать вас и ответить на ваши вопросы, предложения и комментарии. Мы ценим ваше мнение и готовы помочь вам в любых вопросах, связанных с недвижимостью.</p>
                            <div className="row">
                                <div className="col-6 col-12-small">
                                    <ul className="icons">
                                        <li className="icon fa-home">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="auto" viewBox="0 0 576 512">
                                                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                                            </svg> Город<br />
                                            улица, дом, офис
                                        </li>
                                        <li className="icon fa-phone">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="auto" viewBox="0 0 512 512">
                                                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                            </svg>+ 0 (000) 000-00-00
                                        </li>
                                        <li className="icon fa-envelope">
                                            <a href="javascript:void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="auto" viewBox="0 0 512 512">
                                                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                                </svg>info@mail.ru
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-12-small">
                                    <ul className="icons">
                                        <li className="icon fa-twitter">
                                            <a href="javascript:void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="auto" viewBox="0 0 448 512">
                                                    <path d="M31.5 63.5C0 95 0 145.7 0 247V265C0 366.3 0 417 31.5 448.5C63 480 113.7 480 215 480H233C334.3 480 385 480 416.5 448.5C448 417 448 366.3 448 265V247C448 145.7 448 95 416.5 63.5C385 32 334.3 32 233 32H215C113.7 32 63 32 31.5 63.5zM75.6 168.3H126.7C128.4 253.8 166.1 290 196 297.4V168.3H244.2V242C273.7 238.8 304.6 205.2 315.1 168.3H363.3C359.3 187.4 351.5 205.6 340.2 221.6C328.9 237.6 314.5 251.1 297.7 261.2C316.4 270.5 332.9 283.6 346.1 299.8C359.4 315.9 369 334.6 374.5 354.7H321.4C316.6 337.3 306.6 321.6 292.9 309.8C279.1 297.9 262.2 290.4 244.2 288.1V354.7H238.4C136.3 354.7 78 284.7 75.6 168.3z" />
                                                </svg>ВКонтакте
                                            </a>
                                        </li>
                                        <li className="icon fa-instagram">
                                            <a href="javascript:void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="auto" viewBox="0 0 496 512">
                                                    <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25-39.5-3.8-3.8-67.1-61.5-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                                                </svg>Telegram
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div id="copyright" className="container">
                <ul className="links">
                    <li>При использовании материалов гиперссылка на сайт обязательна <br /> &copy; 2020 - 2024 Portal.ru</li>
                </ul>
            </div>
        </section>
    );
};

export default Footer;
