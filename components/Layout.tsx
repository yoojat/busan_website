import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import tw from 'tailwind-styled-components';
import { bgColor, menus } from '../libs/options';
import { mediaSize } from '../libs/media';
import { Router } from 'next/router';

const ContentLayout = tw.div<{ $isSideMenuShow: boolean }>`
${(_) => bgColor}
absolute
w-full
mt-20
md:mt-24
-z-50
`;

const Footer = tw.footer`
  bg-green-900
  w-full
  py-5
  text-white
  text-center
`;

interface IProps {
  children: React.ReactNode;
}
export default function Layout({ children }: IProps) {
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
    <>
      <NavBar
        isSideMenuShow={isSideMenuShow}
        setIsSideMenuShow={setIsSideMenuShow}
        menuItems={[...menus]}
      />
      <ContentLayout $isSideMenuShow={isSideMenuShow}>
        <>{children}</>
        <Footer>100WEBSITES</Footer>
      </ContentLayout>
    </>
  );
}
