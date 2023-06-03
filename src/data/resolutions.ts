interface Resolution {
  pixels: number;
  width: string;
  height: string;
}

//https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures
interface Resolutions {
  [key: number]: Resolution;
}

export const resolutions:Resolutions = {
  1920: { pixels: 2736, width: '90rem', height: '47.40rem' },
  1600: { pixels: 2088, width: '90rem', height: '36.26rem' },
  1280: { pixels: 1568, width: '70rem', height: '34.90rem' },
  1536: { pixels: 2048, width: '80rem', height: '39.90rem' },
  1440: { pixels: 2048, width: '80rem', height: '39.90rem' },
  1366: { pixels: 1792, width: '80rem', height: '34.90rem' },
  375: { pixels: 384, width: '20rem', height: '29.90rem' },
  360: { pixels: 368, width: '20rem', height: '28.7rem' },
  412: { pixels: 560, width: '20rem', height: '43.72rem' },
};
