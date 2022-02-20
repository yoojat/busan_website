import tw from 'tailwind-styled-components';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const PortfolioItemContainer = tw.div`
  max-w-7xl
  flex
  flex-col
  justify-between
  items-center
  lg:flex-row
  lg:even:flex-row-reverse
  lg:items-center

`;
const PortfolioImgContainer = styled.div`
  & > span {
    box-shadow: 0 5px 40px #002d2d;
    border-radius: 5px;
  }
`;
const TwPortfolioImgContainer = tw(PortfolioImgContainer)`
  text-center
  mb-10
  lg:max-w-md
  px-8
`;

const PortfolioDescription = tw.div`
w-full
`;

interface IProps {
  imgSrc: string;
  imgAlt: string;
  href: string;
  title: string;
  descriptions: string[];
}

export default function PortfolioItem({
  imgSrc,
  imgAlt,
  href,
  title,
  descriptions,
}: IProps) {
  return (
    <PortfolioItemContainer>
      <TwPortfolioImgContainer>
        <Image
          src={imgSrc}
          alt={imgAlt}
          objectFit='cover'
          width={1200}
          height={800}
        />
      </TwPortfolioImgContainer>
      <PortfolioDescription>
        <h1 className='text-xl font-medium text-white underline hover:text-emerald-200'>
          <Link href={href}>
            <a target='_blank'>{title}</a>
          </Link>
        </h1>
        {descriptions.map((description, index) => (
          <p key={index} className='text-lg font-normal text-white'>
            {description}
          </p>
        ))}

        <div className='mt-5 text-center'>
          <Link href={href}>
            <a target='_blank'>
              <div className='mt-5 inline-block rounded-md bg-teal-400 px-10 py-3 font-bold text-teal-900 hover:bg-teal-100'>
                사이트 방문
              </div>
            </a>
          </Link>
        </div>
      </PortfolioDescription>
    </PortfolioItemContainer>
  );
}
