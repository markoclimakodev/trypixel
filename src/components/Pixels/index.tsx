interface PixelsProps {
  color: string;
  backgroundColor: string;
  onClick: () => void;
  pixelColor: string | undefined;
}

export function Pixels({ color, backgroundColor, pixelColor }: PixelsProps) {
  let numberOfPixels: number = 2736;

  return (
    <section
      style={{ backgroundColor: backgroundColor }}
      className={`w-[90rem] h-[47.41rem]  mx-auto my-6  border-zinc-950 flex align-middle justify-center flex-wrap`}
    >
      {[...Array(numberOfPixels)].map((pixel, index) => {
        return (
          <div
          style={{ backgroundColor: pixelColor }}
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
