import { Header } from '@/components/Header';

export default function Home() {
  return (
    <section className='w-[600px] m-auto flex   justify-center align-middle'>
      <p className='text-lg flex flex-col gap-4 font-extrabold text-slate-200  bg-slate-200/30 p-16 rounded-lg text-center '>
        Liberte sua criatividade com a Trypixel
      <a href='./pages/playground' className='bg-green-300 font-extrabold text-zinc-900 px-4 py-2 rounded-lg text-center hover:bg-blue-500 hover:text-white'> Clique aqui para começar</a>
      </p>
    </section>
  );
}
