import Botao from "../botao";
import Image from "next/image";
import InputPublico from "../inputPublico";
import Link from "next/link";
import UsuarioService from "../../services/UsuarioService";
import { useState } from "react";
import { validarEmail, validarSenha } from '../../utils/validadores';

import imagemChave from "../../public/imagens/chave.svg";
import imagemEnvelope from "../../public/imagens/envelope.svg";
import imagemLogo from "../../public/imagens/logo.svg"

const usuarioService = new UsuarioService();

export default function Login({ aposAutenticacao }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [estaSubmetendo, setEstaSubmetendo] = useState(false);

    const validarFormulario = () => {
        return (
            validarEmail(email)
            && validarSenha(senha)
        );
    }

    const aoSubmeter = async (e) => {
        e.preventDefault();
        if(!validarFormulario()) {
            return;
        }

        setEstaSubmetendo(true);

        try{
            await usuarioService.login({
                login: email,
                senha: senha
            });

            if (aposAutenticacao) {
                aposAutenticacao();
            }

            // TODO: redirecionar o usuario para a home
        }catch(error){
            alert(
                "Erro ao realizar o login." + error?.response?.data?.erro
            );
        }

        setEstaSubmetendo(false);
    }

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
                <form onSubmit={aoSubmeter}>
                    <InputPublico
                        imagem={imagemEnvelope}
                        tipo="email"
                        texto="E-mail"
                        aoAlterarValor={e => setEmail(e.target.value)}
                        valor={email}
                        mensagemValidacao="O e-mail informado é inválido"
                        exibirMensagemValidacao={email && !validarEmail(email)}
                    />

                    <InputPublico
                        imagem={imagemChave}
                        tipo="password"
                        texto="Senha"
                        aoAlterarValor={e => setSenha(e.target.value) }
                        valor={senha}
                        mensagemValidacao="Precisa de pelo menos 3 caracteres"
                        exibirMensagemValidacao={senha && !validarSenha(senha)}
                    />

                    <Botao
                        texto="Login"
                        tipo="submit"
                        desabilitado={!validarFormulario() || estaSubmetendo}
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