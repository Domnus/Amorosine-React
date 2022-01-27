import Image from 'next/image'

import logoImage from '../../public/logo.png'

export default function Footer() {
    return (
            <footer>
                <div className="container">
                    <div className="newsLetterContainer">
                        <Image src={logoImage} alt="logo" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consectetur molestias neque tempore amet quae atque.</p>
                    </div>
                    <div className="linksContainer">
                        <div className="title">Links úteis</div>
                        <ul>
                            <li>
                                <a href="../index.html">Home</a>
                            </li>
                            <li>
                                <a href="https://pt-br.facebook.com/AmorosineTeam/" target="_blank" rel="noreferrer">Facebook</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/amorosineteam/" target="_blank" rel="noreferrer">Instagram</a>
                            </li>

                        </ul>
                    </div>

                    <div className="connectCointainer">
                        <div className="title">Conecte-se conosco</div>
                        <p>Oriente - SP
                            CEP: 17570000
                        </p>
                        <p>emailexemplo@email.com</p>
                        <p>(14)12345-6789</p>
                    </div>
                </div>
            </footer>
    )
}
