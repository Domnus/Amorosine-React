import Link from 'next/link'
import Image from 'next/image'
import logoImage from '../../../public/logo.png'

export default function Header() {
    return (
        <>
            <div className="fullContainer banner" id="homeSection">
                <header>
                    <div className="container">
                        <div className="logo">
                            <Link href="/"><a><Image src={logoImage} width="45" height="45" alt="logo"/></a></Link>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#homeSection">Home</a>
                                </li>

                                <li>
                                    <a href="#aboutSection">Sobre</a>
                                </li>

                                <li>
                                    <a href="#programsSection">Trabalhos</a>
                                </li>

                                <li>
                                    <a href="#gallerySection">Galeria</a>
                                </li>
                                <li>
                                    <Link href="./form"><a target="_blank" rel="noopener">Voluntarie-se</a></Link>
                                </li>
                                <li>
                                    <Link href="./loginAdm"><a target="_blank" rel="noopener">Administrador</a></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <div className="container">
                    <h1>Lutamos por <span>Algo Maior</span></h1>
                    <p>Ajudando a sociedade por meio do esporte desde 2015</p>
                    <button><a id="doacao" href="#programsSection">Fazer doação</a></button>
                </div>
            </div>
        </>
    )
}
