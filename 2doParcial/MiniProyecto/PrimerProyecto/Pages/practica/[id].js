import Link from 'next/link';
import {useRouter} from 'next/router';
export default function Practica() {
    const router = useRouter();     
    const {id} = router.query;
    return (
        <main>
            <h1>Ruta Dinamica de practica 1</h1>
            <p> El parametro capturado por next es: {id}</p>
                <Link href="/practica/1"><a>Regresar a Inicio</a></Link>
        </main>
    );
}