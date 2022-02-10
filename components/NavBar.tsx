import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { mediaSize } from '../libs/media';

const Wrapper = tw.div`
justify-between
items-center
flex
md:py-3
py-2
px-7
lg:px-24
fixed
w-full
`;

const MenuBarContainer = tw.div`
block
svg{
  w-7
  h-7
  cursor-pointer
}
z-50
lg:hidden
`;

const ImageContainer = tw.div`
`;

const MenuContainer = tw.div<{ $isSideMenuShow: boolean }>`
fixed
w-4/5
max-w-[18.75em]
h-screen
${(props) => (props.$isSideMenuShow ? 'right-0' : '-right-full')}
transition-all
duration-500
ease-menu-in-out
top-0
lg:h-auto
lg:right-auto
lg:top-auto
lg:w-auto
lg:flex
lg:relative
lg:space-x-2
text-lg
bg-yellow-300
`;

const TopMenuItem = tw.div``;

export default function NavBar() {
  const [isSideMenuShow, setIsSideMenuShow] = useState(false);
  const handleResize = () => {
    if (window.innerWidth > mediaSize.tablet) {
      setIsSideMenuShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <Link href='/'>
        <a>
          <ImageContainer>
            <Image
              src='/logo.png'
              alt='Website In Busan'
              width={200}
              height={50}
              objectFit='contain'
            />
          </ImageContainer>
        </a>
      </Link>
      <MenuContainer $isSideMenuShow={isSideMenuShow}>
        <TopMenuItem>Start</TopMenuItem>
        <TopMenuItem>Start</TopMenuItem>
        <TopMenuItem>Start</TopMenuItem>
      </MenuContainer>

      <MenuBarContainer onClick={() => setIsSideMenuShow((prev) => !prev)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </MenuBarContainer>
    </Wrapper>
  );
}
