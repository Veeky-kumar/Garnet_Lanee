import styled from "styled-components";

const VectorChild = styled.div`
  height: 100px;
  width: 1439px;
  position: relative;
  background-color: var(--color-white);
  display: none;
  max-width: 100%;
`;
const Complete = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.28px;
  line-height: 18px;
  font-weight: 400;
  font-family: inherit;
  background: linear-gradient(#f77433, #f77433),
    linear-gradient(#f77433, #f77433), #f77433;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 14px;
  }
`;
const TheLook = styled.div`
  position: relative;
  font-size: var(--font-size-smi);
  letter-spacing: -0.28px;
  line-height: 18px;
  font-weight: 600;
  background: linear-gradient(#302f2f, #302f2f),
    linear-gradient(#ffd588, #ffd588), #ffd588;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;
`;
const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const Text = styled.div`
  height: 1px;
  flex: 1;
  position: relative;
  background-color: var(--color-gainsboro-600);
  min-width: 651px;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 800px) {
    min-width: 100%;
  }
`;
const BlogChild = styled.div`
  height: 40px;
  width: 131px;
  position: relative;
  border-radius: var(--br-8xs);
  background: linear-gradient(88.77deg, #f77433, #feaf38);
  border: 1px solid var(--color-peachpuff);
  box-sizing: border-box;
  display: none;
`;
const DiscoverAll = styled.div`
  position: relative;
  font-size: var(--font-size-smi);
  letter-spacing: -0.28px;
  line-height: 18px;
  font-weight: 600;
  font-family: var(--font-mulish);
  background: linear-gradient(#302f2f, #302f2f),
    linear-gradient(#ffd588, #ffd588), #ffd588;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: left;
  z-index: 2;
`;
const Blog = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-peachpuff);
  padding: var(--padding-2xs) var(--padding-4xl) var(--padding-2xs)
    var(--padding-lg);
  background-color: transparent;
  border-radius: var(--br-8xs);
  background: linear-gradient(88.77deg, #f77433, #feaf38);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  z-index: 1;
  &:hover {
    background-color: var(--color-burlywood-200);
    border: 1px solid var(--color-burlywood-100);
    box-sizing: border-box;
  }
`;
const Text1 = styled.div`
  width: 1147px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-sm);
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    flex-wrap: wrap;
  }
`;
const VectorRoot = styled.section`
  align-self: stretch;
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-10xl) var(--padding-15xl) var(--padding-7xl)
    var(--padding-18xl);
  box-sizing: border-box;
  min-height: 114px;
  gap: var(--gap-xl);
  max-width: 100%;
  flex-shrink: 0;
  text-align: center;
  font-size: var(--font-size-xl);
  font-family: var(--font-mulish);
  @media screen and (max-width: 1350px) {
    flex-wrap: wrap;
  }
`;

const Vector = () => {
  return (
    <VectorRoot>
      <VectorChild />
      <Image>
        <Complete>COMPLETE</Complete>
        <TheLook>THE LOOK</TheLook>
      </Image>
      <Text1>
        <Text />
        <Blog>
          <BlogChild />
          <DiscoverAll>{`Discover all >> `}</DiscoverAll>
        </Blog>
      </Text1>
    </VectorRoot>
  );
};

export default Vector;
