import { SiGithub, SiLinkedin } from '@icons-pack/react-simple-icons';
import Link from 'next/link';
import Logo from '../Logo';


export function Header() {
  return (
    <header className='header'>
      <Logo />
      <nav className='flex gap-3 text-zinc-800'>
       <Link href="https://www.linkedin.com/in/markoclimako/" target='_blank'>
        <SiLinkedin/>
        </Link>
       <Link href="https://github.com/markoclimakodev" target='_blank'>
         <SiGithub/>
         </Link>
      </nav>
    </header>
  );
}
