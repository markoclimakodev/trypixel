'use client';
import * as Icon from '@phosphor-icons/react';
import { useState } from 'react';

type Tool =
  | 'paint-bucket'
  | 'paint-brush'
  | 'eraser'
  | 'erase-all'
  | 'download';

export function ToolBar() {
  const [isSelected, setIsSelected] = useState<Tool | null>(null);

  const handleIsSelected = (tool: Tool) => {
    if (isSelected === tool) {
      setIsSelected(null);
    } else {
      setIsSelected(tool);
    }
  };

  return (
    <section className='w-fit flex m-auto gap-2 bg-slate-200 p-2 rounded-md shadow-lg'>
      <input
        type='color'
        name='color-picker'
        id='color-picker'
        className='w-8 h-8'
      />
      <Icon.PaintBucket
        weight='fill'
        className={` ${
          isSelected === 'paint-bucket'
            ? 'fill-purple-800 hover:scale-110 border-2 border-purple-800 border-dotted '
            : 'fill-zinc-800 cursor-pointer transition-all ease-in-out border-0'
        }`}
        size={32}
        onClick={() => handleIsSelected('paint-bucket')}
      />
      <Icon.PaintBrush
        weight='fill'
        className={`${
          isSelected === 'paint-brush'
            ? ' fill-purple-800 hover:scale-110 border-2 border-purple-800 border-dotted'
            : 'fill-zinc-800 cursor-pointer transition-all ease-in-out border-0'
        }`}
        size={32}
        onClick={() => handleIsSelected('paint-brush')}
      />
      <Icon.Eraser
        weight='fill'
        className={`${
          isSelected === 'eraser'
            ? ' fill-purple-800 hover:scale-110 border-2 border-purple-800 border-dotted'
            : 'fill-zinc-800 cursor-pointer transition-all ease-in-out border-0'
        }`}
        size={32}
        onClick={() => handleIsSelected('eraser')}
      />
      <Icon.ChalkboardSimple
        weight='fill'
        className={`${
          isSelected === 'erase-all'
            ? ' fill-purple-800 hover:scale-110 border-2 border-purple-800 border-dotted'
            : 'fill-zinc-800 cursor-pointer transition-all ease-in-out border-0'
        }`}
        size={32}
        onClick={() => handleIsSelected('erase-all')}
      />
      <Icon.DownloadSimple
        weight='fill'
        className={`${
          isSelected === 'download'
            ? ' fill-purple-800 hover:scale-110 border-2 border-purple-800 border-dotted'
            : 'fill-zinc-800 cursor-pointer transition-all ease-in-out border-0'
        }`}
        size={32}
        onClick={() => handleIsSelected('download')}
      />
    </section>
  );
}
