import Botao from "../../componentes/botao";
import Image from "next/image";
import InputPublico from "../../componentes/inputPublico";
import Link from "next/link";
import { UploadImagem } from "../../componentes/uploadImagem";
import { useState } from "react";

import imagemChave from "../../public/imagens/chave.svg";
import imagemEnvelope from "../../public/imagens/envelope.svg";
import imagemLogo from "../../public/imagens/logo.svg"
import imagemUsuarioAtivo from "../../public/imagens/usuarioAtivo.svg"
import imagemAvatar from "../../public/imagens/avatar.svg"


export default function Cadastro() {
    
    const [imagem, setImagem] = useState(null);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacaoSenha, setconfirmacaoSenha] = useState("");
    
    return (
        <section className={`paginaCadastro paginaPublica`}>
            <div className="logoContainer desktop">
                <Image
                    src={imagemLogo}
                    alt="logotipo"
                    fill
                    className="logo"
                />
            </div>

            <div className="conteudoPaginaPublica">
                <form>
                    <UploadImagem
                        imagemPreviewClassName="avatar avatarPreview"
                        imagemPreview={imagem?.preview || imagemAvatar.src}
                        setImagem={setImagem}
                    />
                    
                    <InputPublico
                        imagem={imagemUsuarioAtivo}
                        tipo="text"
                        texto="Nome Completo"
                        aoAlterarValor={e => setNome(e.target.value)}
                        valor={nome}
                    />

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
                        aoAlterarValor={e => setSenha(e.target.value)}
                        valor={senha}
                    />

                    <InputPublico
                        imagem={imagemChave}
                        tipo="password"
                        texto="Confirmar Senha"
                        aoAlterarValor={e => setconfirmacaoSenha(e.target.value)}
                        valor={confirmacaoSenha}
                    />

                    <Botao
                        texto="Cadastrar"
                        tipo="submit"
                        desabilitado={false}
                    />
                </form>

                <div className="rodapePaginaPublica">
                    <p>Já possuí uma conta?</p>
                    <Link href="/">Faça seu login agora!</Link>
                </div>
            </div>
        </section>
    );
}