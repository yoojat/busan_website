import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';

const Wrapper = tw.div`
  bg-[#054a49]
  pt-14
  px-10
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

const ImageContainer = tw.div``;

const Home: NextPage = () => {
  return (
    <Wrapper>
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
          <br />꼭 저희를 선택하지 않아도 됩니다. 무료로 상담 받아보시고
          결정하세요!
        </SubText>
        <ButotnContainer>
          <ContactBtn>상담하기</ContactBtn>
        </ButotnContainer>
      </TitleContainer>
      <ImageContainer></ImageContainer>
    </Wrapper>
  );
};

export default Home;
