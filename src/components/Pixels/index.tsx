import { Tool } from '@/types';

interface PixelsProps {
  color: string;
  boardColor: string;
  onClick: () => void;
}

export function Pixels({ color, boardColor,onClick }: PixelsProps) {
  let numberOfPixels: number = 2736;

  return (
    <section
      style={{ backgroundColor: boardColor }}
      className={`w-[90rem] h-[47.40rem]  mx-auto my-6  border-zinc-950 flex align-middle justify-center flex-wrap`}
    >
      {[...Array(numberOfPixels)].map((pixel, index) => {
        return (
          <div
            className='w-[20px] h-[20px] border-[1px] border-zinc-950 block cursor-pointer'
            key={index}
            onClick={(event) => {
              event.currentTarget.style.backgroundColor = color;
            }}
          ></div>
        );
      })}
    </section>
  );
}
