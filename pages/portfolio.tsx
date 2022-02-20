import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import PortfolioItem from '@components/PortfolioItem';

const Header = tw.div`
  pt-14
  px-10
  pb-4
  bg-[#054a49]
  text-center
`;

const TopSmallTitle = tw.div`
  text-teal-400
  font-medium
  pb-8
`;
const TopTitle = tw.h1`
  text-white
  text-3xl
  break-words
`;
const TopSubtitle = tw.h2`
  pt-7
  text-teal-100
  font-medium
  text-lg
  pb-7
`;
const PortfolioSection = tw.section`
  pt-10
  pb-10
  px-10
  bg-[#054a49]
  shadow-2xl
  flex
  flex-col
  items-center
  justify-center
  space-y-32
`;

const Portfolio: NextPage = () => {
  return (
    <>
      <Header>
        <TopSmallTitle>100WEBSITES</TopSmallTitle>
        <TopTitle>당신의 생각은 생각 이상.</TopTitle>
        <TopSubtitle>생각에만 머물지마세요. 바로 시작해보세요.</TopSubtitle>
      </Header>
      <PortfolioSection>
        <PortfolioItem
          imgSrc='/bluedothomepage.png'
          imgAlt='블루닷라운지 홈페이지'
          href='https://bluedotlounge.co.kr'
          title='블루닷라운지 독서실 소개 홈페이지'
          descriptions={[
            '무자본으로 시작해서 현재 15여 개의 지점을 운영하고 있는 블루닷라운지 독서실의 홈페이지입니다.',
            '3개월 간 아이디어 회의 끝에 런칭한 끝에 행동하여 성공적으로 확장해나가고 있습니다.',
          ]}
        />
        <PortfolioItem
          imgSrc='/muinspace.png'
          imgAlt='무인공간통합센터 홈페이지'
          href='https://muinspace.co.kr'
          title='무인공간통합센터 홈페이지'
          descriptions={[
            '무인 스터디카페의 솔루션을 제공해주는 무인공간통합센터의 홈페이지입니다.',
            '스터디카페 무인 경영의 거품을 걷어내고, 진정한 혁신을 보여주고 있습니다.',
          ]}
        />
      </PortfolioSection>
    </>
  );
};

export default Portfolio;
