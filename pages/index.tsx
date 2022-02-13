import type { NextPage } from 'next';
import Image from 'next/image';
import tw from 'tailwind-styled-components';

const TopSection = tw.div`
  pt-14
  px-10
  pb-20
  bg-[#054a49]

`;
const TopContentContainer = tw.div`
  flex
  lg:justify-between
  lg:items-center
  flex-wrap
  max-w-screen-lg
  mx-auto
`;

const HeadSection = tw.section`
w-full
lg:w-auto
`;
const ImageSection = tw.section`
hidden
lg:block
`;

const TitleContainer = tw.div``;
const TopSmallTitle = tw.div`
  text-teal-400
  font-medium
  pb-8
`;
const BigTitle = tw.div`
  text-white
  text-3xl
  break-words
`;
const SubText = tw.div`
  pt-7
  text-teal-100
  font-medium
  text-lg
  pb-7
`;
const ButotnContainer = tw.div``;
const ContactBtn = tw.button`
bg-emerald-600
w-full
rounded-md
py-3
mb-10
text-white
font-bold
cursor-pointer
hover:bg-emerald-700
transition-all
duration-300
active:bg-emerald-900
`;

const ImageContainer = tw.div`
  relative
  `;

const BodySection = tw.section`
  mt-20
  
`;
const BodyItem = tw.div`
  px-10
  max-w-screen-lg
  mx-auto
  flex
  flex-wrap
  flex-col
  justify-center
  items-center
  lg:items-start
  lg:flex-row
  lg:justify-between
`;
const DescriptionImage = tw.div`
  max-w-md
`;
const DescriptionBox = tw.div`
  max-w-md
  mt-10
  lg:mt-0
`;
const TitleDescription = tw.h2`
  text-green-900
  text-2xl
  mb-3
`;
const SubTitleDescription = tw.div`
  text-gray-500
  mb-12
`;
const SmallDescription = tw.div``;
const SmallDescriptionTitle = tw.div``;
const SmallSubDescriptionContent = tw.div``;

const Home: NextPage = () => {
  return (
    <>
      <TopSection>
        <TopContentContainer>
          <HeadSection>
            <TitleContainer>
              <TopSmallTitle>
                <h3>웹사이트 전문 제작</h3>
              </TopSmallTitle>
              <BigTitle>
                <h1>마음에 들지 않으면 100% 환불해드립니다.</h1>
              </BigTitle>
              <SubText>
                홈페이지, 웹사이트를 제작하실려고 하시나요?
                <br />
                수많은 업체 중에서 선택하기 어려우신가요?
                <br />꼭 저희를 선택하지 않아도 됩니다.
                <br />
                무료로 상담 받아보시고 결정하세요!
              </SubText>
              <ButotnContainer>
                <ContactBtn>상담하기</ContactBtn>
              </ButotnContainer>
            </TitleContainer>
          </HeadSection>
          <ImageSection>
            <ImageContainer>
              <Image
                src={'/main_image.jpg'}
                alt='make_web_main_image'
                width={400}
                height={300}
                objectFit='cover' // change to suit your needs
                className='rounded-tr-3xl' // just an example
              />
            </ImageContainer>
          </ImageSection>
        </TopContentContainer>
      </TopSection>
      <BodySection>
        <BodyItem>
          <DescriptionImage>
            <Image
              src={'/main_image2.jpg'}
              alt='make_web_main_image'
              width={800}
              height={500}
              objectFit='cover'
            />
          </DescriptionImage>

          <DescriptionBox>
            <TitleDescription>
              Selling online has never been easier
            </TitleDescription>
            <SubTitleDescription>
              Set up your store in minutes and bring your brand to life
            </SubTitleDescription>
            <SmallDescription>
              <SmallDescriptionTitle>
                Drag-and-drop store builder
              </SmallDescriptionTitle>
              <SmallSubDescriptionContent>
                Choose from over 70 professional and free store themes.Customize
                colours, imagery, and fonts with ease. No design skills
                required.
              </SmallSubDescriptionContent>
            </SmallDescription>
          </DescriptionBox>
        </BodyItem>
      </BodySection>
    </>
  );
};

export default Home;
