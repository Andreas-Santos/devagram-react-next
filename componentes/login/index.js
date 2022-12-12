import Botao from "../botao";
import Image from "next/image";
import InputPublico from "../inputPublico";
import Link from "next/link";
import { useState } from "react";

import imagemChave from "../../public/imagens/chave.svg";
import imagemEnvelope from "../../public/imagens/envelope.svg";
import imagemLogo from "../../public/imagens/logo.svg"


export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <section className={`paginaLogin paginaPublica`}>
            <div className="logoContainer">
                <Image
                    src={imagemLogo}
                    alt="logotipo"
                    fill
                    className="logo"
                />
            </div>

            <div className="conteudoPaginaPublica">
                <form>
                    <InputPublico
                        imagem={imagemEnvelope}
                        tipo="email"
                        texto="E-mail"
                        aoAlterarValor={e => setEmail(e.target.value)}
                        valor={email}
                    />

                    <InputPublico
                        imagem={imagemChave}
                        tipo="password"
                        texto="Senha"
                        aoAlterarValor={e => setSenha(e.target.value) }
                        valor={senha}
                    />

                    <Botao
                        texto="Login"
                        tipo="submit"
                        desabilitado={false}
                    />
                </form>

                <div className="rodapePaginaPublica">
                    <p>Não possui uma conta?</p>
                    <Link href="/cadastro">Faça seu cadastro agora!</Link>
                </div>
            </div>

        </section>
    );
}