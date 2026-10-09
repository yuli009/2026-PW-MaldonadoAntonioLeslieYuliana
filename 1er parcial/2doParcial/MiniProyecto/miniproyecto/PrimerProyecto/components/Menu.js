import Link from 'next/link'; 
 
export default function Menu() {
  return (
    <nav>  
        <Link href="/"><a>Inicio</a></Link>
        <Link href="/"><a>Practica</a></Link>    
    </nav>
  );
}