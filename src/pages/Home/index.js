import React, { useState, useEffect } from 'react'; /*Importa a biblioteca do React*/

/* MINHAS IMPORTAÇÕES = importa as funcionalidades de outros arquivos. Neste caso do CSS, imagem e elipse.*/
import styles from './styles.css';

import Elipse from '../../components/Elipse';

import ebook from '../../image/Ebook.png';

function Home(){

    const [size, setSize] = useState(window.innerWidth);

    const instagram = "https://www.instagram.com/arcadia_308?igsh=aHBhcHViYXpvb2o3"; /*Link da páginda do Instagram da loja*/

    useEffect(() => {
        windowSize();
    }, []);

    function windowSize(){
        setSize(window.innerWidth); /*Atualiza a tela conforme a mudança de tamanho*/
    }

    return(
        <>
            <header className='container'>
                {/* Criando o efeito visual da elipse */}
                <div className='elipse-container'>
                    <div className='elpise-left'>
                        <Elipse size={120} opacity={0.2} styles={'cicle-left-one'}/>
                        <Elipse size={120} opacity={0.6} styles={'cicle-left-two'}/>
                        <Elipse size={120} opacity={5.0} styles={'cicle-left-three'}/>
                    </div>
                      

                </div>

                {/* Texto e Formulário */}
                <div className='information-container'>
                    <div className='information-left'>
                        <div className='information-text'>
                            <h3>ARCÁDIA 308 - VELAS ARTESANAIS</h3>
                            <h1>
                                Renove seu ambiente com nossas velas e desfrute de momentos de paz!<br/>
                                 
                            </h1>

                            <h4>
                                VENHA CONHECER NOSSAS VELAS 
                            </h4>

                            <p>
                                - Produzidas com matérias-primas de alta qualidade. 
                            </p>

                            <p>
                                - Fragrâncias exclusivas que proporcionam uma experiência sensorial única.
                            </p>
                            <p>
                                - Feitas à mão com cuidado e atenção aos detalhes, garantindo qualidade excepcional.
                            </p>
                            <p>
                                - Suporte ao cliente excepcional para garantir sua satisfação total.
                            </p>
                            <p>
                                - Baixe já nosso E-BOOK para mais informações.
                            </p>
                        </div>
                        <div className='information-img'>
                            <img src={ebook} alt="imagem E-book" />
                        </div>
                    </div>
                    <div className='infomation-right'>
                        <form> 
                            <div className='form-input'>
                                <input type="text" className='input' id='firstName'/>
                                <label htmlFor='firstName' className='label-input'>Nome</label>
                            </div>

                            <div className='form-input'>
                                <input type="text" className='input' id='lasttName'/>
                                <label htmlFor='lasttName' className='label-input'>Sobrenome</label>
                            </div>

                            <div className='form-input'>
                                <input type="text" className='input' id='email' />
                                <label htmlFor='email' className='label-input'>E-mail</label>
                            </div>

                            <div className='form-text'>
                                <span>
                                    Receba nosso 'E-BOOK' para informações detalhadas sobre nossas velas artesanais e preços exclusivos.
                                </span>
                            </div>
                            <div className='form-enquete'>
                                <input type="radio" id='formYes' name='option'/>
                                <label htmlFor='formYes'>Sim, eu quero!</label>
                            </div>

                            <div className='form-enquete'>
                                <input type="radio" id='formNo' name='option'/>
                                <label htmlFor='formNo'>Não quero receber.</label>
                            </div>

                            <button className='form-button'>Download do E-book</button>
                        </form>
                    </div>
                </div>

            </header>

            <main>
                <section className='services'>
                    <span>
                        Com nossas velas, você terá acesso a fragrâncias únicas e designs encantadores, criando atmosferas acolhedoras em sua casa. Através de nosso programa, oferecemos dicas de decoração, tutoriais de uso e suporte personalizado para garantir que você desfrute ao máximo de nossos produtos. Transforme sua casa em um santuário de paz e harmonia.
                    </span>
                </section>

                <section className='social-media'>
 
                    <div className='contact'>
                        <a href={instagram} target='blank'>                            
                            <span>Instagram: arcadia_308</span>
                        </a>
                    </div>


                </section>
            </main>


        </>
    )
}

export default Home;