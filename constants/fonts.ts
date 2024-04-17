import localFont from 'next/font/local'

const aeonik = localFont({
    src: [
      {
        path: '../public/Aeonik/Aeonik-Regular.otf',
        weight: '400',
        style: 'normal',
      },
      {
        path: '../public/Aeonik/Aeonik-Medium.otf',
        weight: '500',
        style: 'normal',
  
      },
      {
        path: '../public/Aeonik/Aeonik-Bold.otf',
        weight: '600',
        style: 'normal',
  
      },
      {
        path: '../public/Aeonik/Aeonik-Black.otf',
        weight: '700',
        style: 'normal',
  
      },
    ],
    variable: '--font-aeonik',
  });

  export { aeonik };