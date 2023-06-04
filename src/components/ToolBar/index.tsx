import { Tool } from '@/types';
import * as Icon from '@phosphor-icons/react';

interface ToolBarProps {
  selectedColor: (color: string) => void;
  onModeSelected: (mode: Tool) => void;
  selectedMode: Tool;
}

export function ToolBar({
  selectedColor,
  onModeSelected,
  selectedMode,
}: ToolBarProps) {
  return (
    <section className='w-fit flex m-auto gap-2 bg-white p-2 rounded-md shadow-lg'>
      <input
        type='color'
        name='colorPicker'
        id='colorPicker'
        className='w-8 h-8'
        onChange={(event) => selectedColor(event.currentTarget.value)}
        onClick={(event) => onModeSelected(event.currentTarget.id as Tool)}
      />

      <Icon.PaintBucket
        weight='fill'
        className={
          selectedMode === 'paintBucket'
            ? ' outline-purple-800 outline-dotted rounded'
            : 'fill-zinc-800 cursor-pointer transition-all ease-in-out border-0 hover:scale-110'
        }
        size={32}
        id='paintBucket'
        onClick={(event) => onModeSelected(event.currentTarget.id as Tool)}
      />
      <Icon.PaintBrush
        weight='fill'
        className={
          selectedMode === 'paintBrush'
            ? ' outline-purple-800 outline-dotted rounded'
            : 'fill-zinc-800 cursor-pointer transition-all ease-in-out border-0 hover:scale-110'
        }
        size={32}
        id='paintBrush' 
        onClick={(event) => {
          onModeSelected(event.currentTarget.id as Tool);
        }}
      />
      <Icon.Eraser
        weight='fill'
        className={
          selectedMode === 'eraser'
            ? ' outline-purple-800 outline-dotted rounded'
            : 'fill-zinc-800 cursor-pointer transition-all ease-in-out border-0 hover:scale-110'
        }
        size={32}
        id='eraser'
        onClick={(event) => onModeSelected(event.currentTarget.id as Tool)}
      />

      <Icon.ChalkboardSimple
        weight='fill'
        className={
          selectedMode === 'eraseAll'
            ? ' outline-purple-800 outline-dotted rounded'
            : 'fill-zinc-800 cursor-pointer transition-all ease-in-out border-0 hover:scale-110'
        }
        size={32}
        id='eraseAll'
        onClick={(event) =>  onModeSelected(event.currentTarget.id as Tool)}
      />
      
      <Icon.DownloadSimple
        weight='fill'
        className={
          selectedMode === 'download'
            ? ' outline-purple-800 outline-dotted rounded'
            : 'fill-zinc-800 cursor-pointer transition-all ease-in-out border-0 hover:scale-110'
        }
        size={32}
        id='download'
        onClick={(event) => onModeSelected(event.currentTarget.id as Tool)}
      />
    </section>
  );
}
