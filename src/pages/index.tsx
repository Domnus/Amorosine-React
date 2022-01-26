import Header from '../components/Header/'
import Footer from '../components/Footer/'
import Link from 'next/link'
import Image from 'next/image'

import galeria1 from '../assets/img/galeria1.jpeg'
import galeria2 from '../assets/img/galeria2.jpeg'
import galeria3 from '../assets/img/galeria3.jpeg'
import galeria4 from '../assets/img/galeria4.jpeg'
import galeria5 from '../assets/img/galeria5.jpeg'
import galeria6 from '../assets/img/galeria6.jpeg'

function HomePage() {
  return (
      <>
        <Header />

        <section className="fullContainer" id="aboutSection">
            <div className="container">
                <h2 className="sectionTitle">Sobre nós</h2>
                <p>
                    Por meio do Taekwondo tivemos a ideia de fazer açoes sociais, doar, agasalhos, alimentos, entre outros, já ajudamos diversas pessoas em diversos momentos, seja parte desse grupo.
                </p>
                <div className="cards">
                    <div className="donationBox">
                        <p>Faça doação de sangue, alimento, agasalho entre outros.</p>
                        <button><a id="doacao" href="#programsSection">Doar agora</a></button>
                    </div>

                    <div className="volunteerBox">
                        <div className="title">Torne-se voluntário</div>
                        <p>Seja um voluntario e faça parte deste grupo.</p>

                        <Link href="./form"><a target="_blank" rel="noopener"><button>Inscrição</button></a></Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="programs" id="programsSection">
            <div className="container">
                <h2 className="sectionTitle">Trabalhos</h2>

                <div className="boxContainer">
                    <div className="box">
                        <div className="cardImage"></div>
                        <div className="programTitle">Aulas de Taekwondo
                        <div className="donationCount">Descrição título 1</div>
                        <button className="botao1">Doar agora</button>
                            </div>

                    </div>

                    <div className="box">
                        <div className="cardImage"></div>
                            <div className="programTitle">Campanha do agasalho
                                <div className="donationCount">Descrição título 2</div>
                                <button>Doar agora</button>
                            </div>

                    </div>

                    <div className="box">
                        <div className="cardImage"></div>
                            <div className="programTitle">Doação de sangue
                                <div className="donationCount">Descrição título 3</div>
                                <button>Doar agora</button>
                            </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="gallery" id="gallerySection">
            <div className="container">
                <div className="sectionTitle">Galeria</div>

                <div className="galleryContainer">
                    <div className="item">
                        <span className="title">Professor Flávio Amorosine</span>
                        <Image src={galeria1} alt="primeira foto" />
                    </div>

                    <div className="item">
                        <span className="title">Aula em Oriente</span>
                        <Image src={galeria2} alt="segunda foto" />
                    </div>

                    <div className="item">
                        <span className="title">De pai pra filho</span>
                        <Image src={galeria3} alt="terceira foto" />
                    </div>

                    <div className="item">
                        <span className="title">Campeonato infantil</span>
                        <Image src={galeria4} alt="quarta foto" />
                    </div>

                    <div className="item">
                        <span className="title">Aula adulta em Oriente</span>
                        <Image src={galeria5} alt="quinta foto" />
                    </div>

                    <div className="item">
                        <span className="title">Aula infantil em Oriente</span>
                        <Image src={galeria6} alt="sexta foto" />
                    </div>
                </div>
            </div>
        </section>

        <Footer />

      </>
  )
}

export default HomePage
