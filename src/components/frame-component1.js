import styled from "styled-components";

const CertifiedInternationalStanda = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 22px;
  font-weight: 500;
`;
const WeWouldLove = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-smi);
  letter-spacing: -0.28px;
  line-height: 18px;
  font-weight: 600;
  background: linear-gradient(#302f2f, #302f2f),
    linear-gradient(#ffd588, #ffd588), #ffd588;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const CallToAction = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const AdjacentContainerChild = styled.img`
  width: 112.6px;
  height: 31px;
  position: relative;
`;
const AdjacentContainer = styled.div`
  width: 362px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-4xl);
  max-width: 100%;
`;
const Similar = styled.h3`
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
const Styles = styled.div`
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
const OurVisionFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
`;
const WeekdaysHoursFrameA = styled.div`
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
const WeekdaysHoursFrameBChild = styled.div`
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
const WeekdaysHoursFrameB = styled.button`
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
const TollFreeFrame = styled.div`
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
const ContactUsFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  font-size: var(--font-size-xl);
  @media screen and (max-width: 1350px) {
    flex-wrap: wrap;
  }
`;
const PartitionFrame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-20xl);
  max-width: 100%;
  @media screen and (max-width: 800px) {
    gap: var(--gap-lgi);
  }
`;
const PartitionFrameWrapperRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-15xl);
  box-sizing: border-box;
  min-height: 206px;
  max-width: 100%;
  flex-shrink: 0;
  text-align: center;
  font-size: var(--font-size-mini);
  color: var(--color-coral-200);
  font-family: var(--font-mulish);
`;

const FrameComponent1 = () => {
  return (
    <PartitionFrameWrapperRoot>
      <PartitionFrame>
        <AdjacentContainer>
          <CallToAction>
            <CertifiedInternationalStanda>
              100% Certified International Standard
            </CertifiedInternationalStanda>
            <WeWouldLove>WE WOULD LOVE TO MEET YOU ON OUR HANDLES</WeWouldLove>
          </CallToAction>
          <AdjacentContainerChild
            loading="eager"
            alt=""
            src="/group-7409.svg"
          />
        </AdjacentContainer>
        <ContactUsFrame>
          <OurVisionFrame>
            <Similar>SIMILAR</Similar>
            <Styles>STYLES</Styles>
          </OurVisionFrame>
          <TollFreeFrame>
            <WeekdaysHoursFrameA />
            <WeekdaysHoursFrameB>
              <WeekdaysHoursFrameBChild />
              <DiscoverAll>{`Discover all >> `}</DiscoverAll>
            </WeekdaysHoursFrameB>
          </TollFreeFrame>
        </ContactUsFrame>
      </PartitionFrame>
    </PartitionFrameWrapperRoot>
  );
};

export default FrameComponent1;
