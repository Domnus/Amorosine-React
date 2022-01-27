import Input from '../Input'

export default function Form() {
    return (
        <form>
            <fieldset>
                <legend className="titulo">Dados pessoais</legend>

                <section>
                    <Input classDiv="input-box" classInput="inputUser" idInput="nome" nameInput="nome" typeInput="text" placeholderInput=" " classLabel="labelInput" textLabel="Nome" />
                    <Input classDiv="input-box" classInput="inputUser" idInput="sobrenome" nameInput="sobrenome" typeInput="text" placeholderInput=" " classLabel="labelInput" textLabel="Sobrenome" />
                    <Input classDiv="input-box" classInput="inputUser" idInput="cpf" nameInput="cpf" typeInput="text" placeholderInput=" " classLabel="labelInput" textLabel="CPF" />
                    <Input classDiv="input-box" classInput="inputUser" idInput="email" nameInput="email" typeInput="text" placeholderInput=" " classLabel="labelInput" textLabel="Email" />
                    <Input classDiv="input-box" classInput="inputUser" idInput="telefone" nameInput="telefone" typeInput="text" placeholderInput=" " classLabel="labelInput" textLabel="Telefone" />
                </section>

                <section>
                    <p>*Sexo</p>
                    <label className="radio"><input type="radio" name="sexo" value="F" required />Feminino</label>
                    <label className="radio"><input type="radio" name="sexo" value="M" />Masculino</label>
                    <label className="radio"><input type="radio" name="sexo" value="O" />Outro</label>
                </section>


                <section>
                    <label><p>*Data de Nascimento</p></label>
                    <input id="data_nascimento" type="date" name="data" required />
                </section>

                <legend className="titulo">Endereço</legend>

                <section>
                    <Input classDiv="input-box" classInput="inputUser" idInput="cep" nameInput="cep" typeInput="text" placeholderInput=" " classLabel="labelInput" textLabel="CEP" />
                    <Input classDiv="input-box" classInput="inputUser" idInput="rua" nameInput="rua" typeInput="text" placeholderInput=" " classLabel="labelInput" textLabel="Rua" />
                    <Input classDiv="input-box" classInput="inputUser" idInput="numero" nameInput="numero" typeInput="text" placeholderInput=" " classLabel="labelInput" textLabel="Número" />
                    <Input classDiv="input-box" classInput="inputUser" idInput="bairro" nameInput="bairro" typeInput="text" placeholderInput=" " classLabel="labelInput" textLabel="Bairro" />
                    <Input classDiv="input-box" classInput="inputUser" idInput="cidade" nameInput="cidade" typeInput="text" placeholderInput=" " classLabel="labelInput" textLabel="Cidade" />
                    <Input classDiv="input-box" classInput="inputUser" idInput="uf" nameInput="uf" typeInput="text" placeholderInput=" " classLabel="labelInput" textLabel="UF" />
                    <Input classDiv="input-box" classInput="inputUser" idInput="complemento" nameInput="complemento" typeInput="text" placeholderInput=" " classLabel="labelInput" textLabel="Complemento" />
                </section>

            </fieldset>

            <button className="submit" type="submit" name="submitform">Voluntariar-se</button>
        </form>
    )
}
