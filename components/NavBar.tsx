import Image from 'next/image';
import Link from 'next/link';
import { Router } from 'next/router';
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

const MenuBarIcon = tw.svg<{ $isSideMenuShow: boolean }>`
${(props) => (props.$isSideMenuShow ? 'first:hidden' : 'last:hidden')}
w-7
h-7
cursor-pointer
animate-wiggle
`;

const TopMenuItem = tw.div``;

interface MenuItem {
  name: string;
  path: string;
}

interface IProps {
  menuItems: { name: string; path: string; subMenu?: MenuItem[] }[];
}

export default function NavBar({ menuItems }: IProps) {
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

  useEffect(() => {
    Router.events.on('routeChangeComplete', () => setIsSideMenuShow(false));
    return () => {
      Router.events.off('routeChangeComplete', () => setIsSideMenuShow(false));
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
        {menuItems.map((menuItem, index) => (
          <Link href={menuItem.path} key={index}>
            <a>
              <TopMenuItem>{menuItem.name}</TopMenuItem>
            </a>
          </Link>
        ))}
      </MenuContainer>

      <MenuBarContainer onClick={() => setIsSideMenuShow((prev) => !prev)}>
        <MenuBarIcon
          $isSideMenuShow={isSideMenuShow}
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
        </MenuBarIcon>

        <MenuBarIcon
          $isSideMenuShow={isSideMenuShow}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </MenuBarIcon>
      </MenuBarContainer>
    </Wrapper>
  );
}
