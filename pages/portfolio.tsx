import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import PortfolioItem from '@components/PortfolioItem';
import bluedotLoungeHomepageImg from '../public/portfolio/bluedothomepage.png';
import bluedotLoungeUserPageImg from '../public/portfolio/www.bluedotlounge.net_(macbook).png';
import muinspaceHomepageImg from '../public/portfolio/muinspace.png';
import sologijangHomepageImg from '../public/portfolio/www.sologijang.com_(macbook).png';
import gogaeseodongHomepageImg from '../public/portfolio/gogaeseodong.vercel.app_(macbook).png';
import projSeodongHomepageImg from '../public/portfolio/project-seodong.vercel.app_(macbook).png';

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
        <TopSmallTitle>Busan Webmakers</TopSmallTitle>
        <TopTitle>당신의 생각은 생각 이상.</TopTitle>
        <TopSubtitle>생각에만 머물지마세요. 바로 시작해보세요.</TopSubtitle>
      </Header>
      <PortfolioSection>
        <PortfolioItem
          imgSrc={bluedotLoungeHomepageImg}
          imgAlt='블루닷라운지 홈페이지'
          href='https://bluedotlounge.co.kr'
          title='블루닷라운지 독서실 소개 홈페이지'
          descriptions={[
            '무자본으로 시작해서 현재 15여 개의 지점을 운영하고 있는 블루닷라운지 독서실의 홈페이지입니다.',
            '3개월 간 아이디어 회의 끝에 런칭한 끝에 행동하여 성공적으로 확장해나가고 있습니다.',
          ]}
        />
        <PortfolioItem
          imgSrc={bluedotLoungeUserPageImg}
          imgAlt='블루닷라운지 이용자 페이지'
          href='https://bluedotlounge.co.kr'
          title='블루닷라운지 이용자 페이지'
          descriptions={[
            '블루닷라운지 독서실을 이용할 수 있는 페이지 입니다.',
            '페이지 내에서 결제 및 등록 좌석 배정이 가능합니다.',
          ]}
        />
        <PortfolioItem
          imgSrc={muinspaceHomepageImg}
          imgAlt='무인공간통합센터 홈페이지'
          href='https://muinspace.co.kr'
          title='무인공간통합센터 홈페이지'
          descriptions={[
            '무인 스터디카페의 솔루션을 제공해주는 무인공간통합센터의 홈페이지입니다.',
            '스터디카페 무인 경영의 거품을 걷어내고, 진정한 혁신을 보여주고 있습니다.',
          ]}
        />
        <PortfolioItem
          imgSrc={sologijangHomepageImg}
          imgAlt='솔로기장 홈페이지'
          href='https://www.sologijang.com'
          title='솔로기장 홈페이지'
          descriptions={[
            '솔로가 커플이 되는곳, 솔로기장입니다.',
            '이곳에서 만들어지는 무궁무진한 사랑이야기. 지금 바로 여러분의 사랑을 찾아보세요.',
          ]}
        />
        <PortfolioItem
          imgSrc={gogaeseodongHomepageImg}
          imgAlt='고개서동 홈페이지'
          href='https://gogaeseodong.vercel.app/'
          title='고개서동 홈페이지'
          descriptions={[
            '공간을 업사이클링 하다.',
            '소중한 공간의 특별한 주인공이 되보세요.',
          ]}
        />
        <PortfolioItem
          imgSrc={projSeodongHomepageImg}
          imgAlt='프로젝트 서동 홈페이지'
          href='https://project-seodong.vercel.app/'
          title='프로젝트 서동 홈페이지'
          descriptions={[
            '가깝지만 먼 동네 서동',
            '서동 프로젝트는 서동 지역의 활용가능한 자원들을 통해, 멈춰진 동네에 사람들의 발길이 닿도록 하는 것을 목표로 하고 있습니다.',
          ]}
        />
      </PortfolioSection>
    </>
  );
};

export default Portfolio;
