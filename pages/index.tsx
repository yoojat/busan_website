import type { NextPage } from 'next';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import BodyItem from '@components/BodyItem';

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
  space-y-24
`;

const MessageSection = tw.section`
  bg-orange-50
  mt-20
  flex
  justify-between
  flex-wrap
`;

const MessageContentContainer = tw.div`
  max-w-7xl
  pl-10
  lg:pl-40
  pt-10
  pb-10

`;

const MessageTitle = tw.h1`
  font-normal
  text-2xl
  mb-7
`;

const MessageSubtitle = tw.h2`
  text-slate-500
  font-normal
`;

const MessageSubtitleHead = tw.h3`
  pb-1 font-medium text-slate-900`;
const MessaegSubtitleContent = tw.p`
`;

const MessageImgContainer = tw.div`
  w-full
  md:w-96
  h-60
  relative
`;

const Home: NextPage = () => {
  return (
    <>
      <TopSection>
        <TopContentContainer>
          <HeadSection>
            <TitleContainer>
              <TopSmallTitle>
                <h3>부산 웹사이트 전문 제작</h3>
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
                src={'/webmaking.jpg'}
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
        <BodyItem
          imageSrc={'/consulting.jpg'}
          imageAlt={'web_consulting'}
          titleDescription={'웹사이트 제작에 대해서 잘 모르시나요?'}
          subtitleDescription={'꼭 저희를 통해서 진행하지 않으셔도 됩니다.'}
          smallDescriptionTitle={'무료로 상담해드립니다.'}
          smallSubDescriptionContents={[
            '웹사이트 업체가 부르는 가격은 천차만별일 겁니다.',
            '거품을 없애는 방법을 알려드리겠습니다.',
          ]}
        />
        <BodyItem
          imageSrc={'/nodesign.jpg'}
          imageAlt={'we have no designer but'}
          titleDescription={'저희는 디자이너는 없습니다.'}
          subtitleDescription={'대신 참고하실 사이트만 알려주세요!'}
          smallDescriptionTitle={'저희는 디자이너는 없습니다. 단!'}
          smallSubDescriptionContents={[
            '똑같이 만들어 낼 개발 능력은 있습니다.',
            '하지만 퀄리티는 보장합니다.',
            '실력으로 확실한 웹사이트를 제작해드리며,',
            '디자이너는 없지만 거품은 없는 가격으로 만들어드립니다.',
          ]}
        />
        <BodyItem
          imageSrc={'/maintaining.jpg'}
          imageAlt={'maintaining'}
          titleDescription={'무료로 유지보수 해드립니다.'}
          subtitleDescription={'끝까지 책임지겠습니다.'}
          smallDescriptionTitle={'관리가 안될까봐 걱정하지마세요.'}
          smallSubDescriptionContents={[
            '유지보수를 끝까지 책임지겠습니다.',
            '문제가 있다면 말씀만해주세요.',
          ]}
        />
      </BodySection>
      <MessageSection>
        <MessageContentContainer>
          <MessageTitle>생각을 현실로 만드세요.</MessageTitle>
          <MessageSubtitle>
            <MessageSubtitleHead>
              좋은 생각이 있다면 실행을 시켜야합니다.
            </MessageSubtitleHead>
            <MessaegSubtitleContent>
              좋은 생각은 누구나 할 수 있습니다.
              <br />
              하지만 행동은 아무나 할 수 없습니다.
              <br />
              지금 바로 시작해보세요.
            </MessaegSubtitleContent>
          </MessageSubtitle>
        </MessageContentContainer>
        <MessageImgContainer>
          <Image
            src='/moving.jpg'
            alt='move yourself'
            layout='fill'
            objectFit='cover'
            // width={800}
            // height={600}
          />
        </MessageImgContainer>
      </MessageSection>
    </>
  );
};

export default Home;
