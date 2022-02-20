import Image from 'next/image';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import { logo, title } from '@libs/options';

const TopBarWrapper = tw.div`
justify-between
items-center
flex
h-20
md:h-24
px-7
lg:px-24
fixed
w-full
bg-white
`;

const MenuBarContainer = tw.div`
block
z-50
lg:hidden

`;

const ImageContainer = tw.div`
w-36
h-16
relative
mt-5
`;

const MenuContainer = tw.div<{ $isSideMenuShow: boolean }>`
fixed
w-4/5
max-w-[18.75em]
h-screen
${(props) => (props.$isSideMenuShow ? 'right-0' : '-right-full')}
transition-all
lg:transition-none
duration-500
ease-menu-in-out
top-0
lg:h-auto
lg:right-auto
lg:top-auto
lg:w-auto
lg:flex
lg:relative
lg:space-x-7
text-lg
bg-zinc-100
z-50
px-8
pt-5
lg:px-0
lg:pt-5
lg:bg-transparent
`;

const MenuBarIcon = tw.svg<{ $isSideMenuShow: boolean }>`
${(props) => (props.$isSideMenuShow ? 'first:hidden' : 'last:hidden')}
w-7
h-7
cursor-pointer
animate-wiggle
`;

const TopMenuItem = tw.div`
text-base
font-medium
pb-5
`;

const DarkCover = tw.div<{ $isSideMenuShow: boolean }>`
${(props) => (props.$isSideMenuShow ? 'bg-gray-900/80' : '')}
${(props) => (props.$isSideMenuShow ? 'visible' : 'invisible')}
transition-all
duration-500
w-full
h-full
fixed
-z-10
`;

const SideBarLogoContainer = tw.div`
lg:hidden
border-b
border-b-gray-400
mb-5
`;

interface MenuItem {
  name: string;
  path: string;
}

interface IProps {
  menuItems: { name: string; path: string; subMenu?: MenuItem[] }[];
  isSideMenuShow: boolean;
  setIsSideMenuShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavBar({
  menuItems,
  isSideMenuShow,
  setIsSideMenuShow,
}: IProps) {
  return (
    <>
      <TopBarWrapper>
        <Link href='/'>
          <a>
            <ImageContainer>
              <Image
                src={logo}
                alt={title}
                // width={170}
                // height={100}
                layout='fill'
                objectFit='contain'
              />
            </ImageContainer>
          </a>
        </Link>
        <MenuContainer $isSideMenuShow={isSideMenuShow}>
          <SideBarLogoContainer>
            <Link href='/'>
              <a>
                <Image
                  src={logo}
                  alt={title}
                  width={150}
                  height={100}
                  objectFit='contain'
                />
              </a>
            </Link>
          </SideBarLogoContainer>
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
      </TopBarWrapper>
      <DarkCover
        onClick={() => setIsSideMenuShow(false)}
        $isSideMenuShow={isSideMenuShow}
      />
    </>
  );
}
