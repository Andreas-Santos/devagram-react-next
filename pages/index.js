import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../componentes/avatar'
import Botao from '../componentes/botao'

export default function Home() {
  return (
    <>
      <h1>Olá Mundo!</h1>
      <div style={{width: 200}}>
        <Avatar />
        <Botao texto={'Login'} cor='invertido' manipularClique={() => console.log('botão clicado')} />
      </div>
    </>
  )
}
