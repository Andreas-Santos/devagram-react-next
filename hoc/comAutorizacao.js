import Cabecalho from "../componentes/layout/Cabcalho";
import { useRouter } from "next/router";
import UsuarioService from "../services/UsuarioService"

const usuarioService = new UsuarioService();

export default function comAutorizacao(Componente) {
    return (props) => {
        const router = useRouter();

        if (typeof window !== 'undefined') {
            if (!usuarioService.estaAutenticado()) {
                router.replace('/');
                return null;
            }

            return (
                <>
                    <Cabecalho />
                    <Componente {...props} />
                </>
            );
        }

        return null;
    }
}