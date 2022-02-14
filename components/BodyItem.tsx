import Image from 'next/image';
import tw from 'tailwind-styled-components';

const BodyItemWrapper = tw.div`
  px-10
  max-w-screen-lg
  mx-auto
  flex
  flex-col
  lg:flex-row
  justify-center
  items-center
  w-full
  lg:w-auto
  lg:justify-between
  lg:odd:flex-row-reverse
  lg:items-start
`;
const DescriptionImage = tw.div`
  w-full
  h-96
  lg:h-64
  lg:max-w-md
  relative
`;
const DescriptionBox = tw.div`
  lg:max-w-md
  mt-10
  lg:mt-0
  w-full
`;
const TitleDescription = tw.h2`
  text-green-900
  text-2xl
  mb-3
`;
const SubTitleDescription = tw.div`
  text-gray-500
  mb-5
`;
const SmallDescription = tw.div``;
const SmallDescriptionTitle = tw.div``;
const SmallSubDescriptionContent = tw.div``;

interface IProps {
  imageSrc: string;
  imageAlt: string;
  titleDescription: string;
  subtitleDescription: string;
  smallDescriptionTitle: string;
  smallSubDescriptionContents: string[];
}

export default function BodyItem({
  imageSrc,
  imageAlt,
  titleDescription,
  subtitleDescription,
  smallDescriptionTitle,
  smallSubDescriptionContents,
}: IProps) {
  return (
    <BodyItemWrapper>
      <DescriptionImage>
        <Image
          src={imageSrc}
          alt={imageAlt}
          // width={800}
          // height={500}
          layout='fill'
          objectFit='cover'
        />
      </DescriptionImage>

      <DescriptionBox>
        <TitleDescription>{titleDescription}</TitleDescription>
        <SubTitleDescription>{subtitleDescription}</SubTitleDescription>
        <SmallDescription>
          <SmallDescriptionTitle>{smallDescriptionTitle}</SmallDescriptionTitle>
          <SmallSubDescriptionContent>
            {smallSubDescriptionContents.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </SmallSubDescriptionContent>
        </SmallDescription>
      </DescriptionBox>
    </BodyItemWrapper>
  );
}
