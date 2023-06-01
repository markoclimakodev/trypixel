import Logo from '../Logo';

export function Header() {
  return (
    <header className='header'>
      <Logo />
      <nav className='flex gap-3 text-zinc-800'>
        <a href='/playground' className='links link--blue'>Playground</a>
        <a href='/how-to-use' className='links link--purple'>How to use</a>
        <a href='/contact' className='links link--green'>Contact</a>
      </nav>
    </header>
  );
}
