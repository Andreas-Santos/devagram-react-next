import Image from 'next/image';
import Navegacao from './Navegacao';

import logoHorizontalImg from '../../public/imagens/logoHorizontal.svg';
import imagemLupa from '../../public/imagens/lupa.svg';

export default function Cabecalho() {
    return (
        <header className='cabecalhoPrincipal'>
            <div className='conteudoCabecalhoPrincipal'>
                <div className='logoCabecalhoPrincipal'>
                    <Image
                        src={logoHorizontalImg}
                        alt='logo devagram'
                        fill
                    />
                </div>

                <div className='barraPesquisa'>
                    <div className='containerImagemLupa'>
                        <Image
                            src={imagemLupa}
                            alt='Icone lupa'
                            fill
                        />
                    </div>

                    <input
                        type='text'
                        placeholder='Pesquisar'
                        value={''}
                        onChange={() => console.log('pesquisando')}
                    />
                </div>

                <Navegacao className='desktop' />
            </div>
        </header>
    );
}