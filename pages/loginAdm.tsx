import Link from 'next/link'

export default function LoginAdm() {
    return (
        <main className="login">
            <div className="login_container">
                <h1 className="login_title">Login ADM</h1>
                <form className="login_form" action="">
                    <input className="login_input" type="email" placeholder="Email" />
                    <span className="login_input_border"></span>

                    <input className="login_input" type="password" placeholder="Password" />
                    <span className="login_input_border"></span>

                    <Link href='/admPage'><input className="login_submit" type="submit" value="Login" ></input></Link>
                    <a className="login_reset" href="#">Esqueci minha senha</a>
                </form>
            </div>
        </main>
    )
}
