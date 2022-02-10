import React from 'react';
import NavBar from './NavBar';

interface IProps {
  children: React.ReactNode;
}
export default function Layout({ children }: IProps) {
  return (
    <>
      <NavBar menuItems={[{ name: 'price', path: '/price' }]} />
      <div>{children}</div>
    </>
  );
}
