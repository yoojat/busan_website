import type { NextPage } from 'next';

import tw from 'tailwind-styled-components';
const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-indigo-600
`;

const Home: NextPage = () => {
  return (
    <Container>
      <div>
        <div>it works</div>
      </div>
    </Container>
  );
};

export default Home;
