import Footer from '../components/Footer'
import Script from 'next/script'

export default function AdmPage() {
    return (
        <>
            <Script id="showImage">
            {
                `
                    function showImage(src,target) {
                        var fr=new FileReader();
                        fr.onload = function(e) { target.src = this.result; };

                        src.addEventListener("change",function() {
                            fr.readAsDataURL(src.files[0]);
                        });
                    }

                    var src = document.getElementById("src");
                    var target = document.getElementById("target");
                    showImage(src,target);
                `
                }
            </Script>

            <div id="addAcaoModal" className="addModal">

                <div id="conteudo" className="model-body">

                    <div className="modal-content">

                        <div className="modal-header">
                            <h2>Nova Ação Social</h2>
                        </div>

                        <form className="formAcoes">

                            <div className="input-box">
                                <label className="labelInputAdm" >Nome da Ação*</label>
                                <input className="inputUserAdm" type="text" id="nome" name="nomeAcao" required />
                            </div>

                            <div className="input-box">
                                <label className="labelInputAdm" >Descrição da Ação*</label>
                                <input className="inputUserAdm" type="text" id="descricao" name="descricaoAcao" required />
                            </div>

                            <div className="input-box">
                                <label className="labelInputAdm" >Imagem*</label>
                                <input className="inputUserAdm" id="src" type="file" name="imagem" accept="image/png, image/jpeg, image/jpg" required />
                                <img id="target"/>

                            </div>

                            <button className="submit botaoEnviar" type="submit" name="submitform" >Enviar</button>


                        </form>

                    </div>

                </div>

            </div>

            <section className="programs" id="programsSection">
                <div className="container">
                    <h2 className="sectionTitle">Ações Sociais</h2>

                    <div className="boxContainer" id="acoesSociais"></div>

                </div>

                <button className="botaoEnviar" id="addAcao" onClick={() => {
                        var addAcaoModal = document.getElementById("addAcaoModal");
                        var addButton = document.getElementById("addAcao");

                        addButton.onclick = function() {
                            addAcaoModal.style.display = "block";
                        };
                                        window.onclick = function (event) {
                            if (event.target == addAcaoModal) {
                                addAcaoModal.style.display = "none";
                            }
                        };
                    }
                }
                >Adicionar Ação Social</button>
            </section>

            <Footer />
        </>
    )
}
