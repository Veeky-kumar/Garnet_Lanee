import styled from "styled-components";

const FrameChild = styled.div`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: var(--br-3xs);
  background-color: var(--color-silver-400);
  filter: blur(10px);
  width: 120px;
  display: none;
`;
const CashOnDelivery = styled.div`
  align-self: stretch;
  position: relative;
  z-index: 2;
`;
const ImageTraced = styled.div`
  position: absolute;
  top: 0px;
  left: 28.3px;
  border-radius: var(--br-8xs);
  background-color: var(--color-coral-200);
  width: 9.7px;
  height: 2px;
  z-index: 2;
`;
const WhyGarnet = styled.div`
  position: absolute;
  top: 0px;
  left: 40.5px;
  border-radius: var(--br-8xs);
  background-color: var(--color-coral-200);
  width: 9.7px;
  height: 2px;
  z-index: 2;
`;
const Blog = styled.div`
  position: absolute;
  top: 0px;
  left: 0.3px;
  border-radius: var(--br-8xs);
  background: linear-gradient(90deg, #f77433, #feaf38);
  width: 25.9px;
  height: 2px;
  z-index: 2;
  background: ${(p) => p.propBackground};
`;
const TaglineFrame = styled.div`
  height: 2px;
  flex: 1;
  position: relative;
`;
const SubtitleFrame = styled.div`width: 86px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-lg);
  box-sizing: border-box;
  width: ${(p) => p.propWidth1}
  padding: ${(p) => p.propPadding1}
`;
const HeaderLogoContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xs);
`;
const TollFree = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-3xs);
  background-color: var(--color-white);
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const GetInTouchChild = styled.img`position: absolute;
  top: 27px;
  left: 28.3px;
  width: 49.8px;
  height: 38.6px;
  z-index: 2;
  left: ${(p) => p.propLeft1}
  width: ${(p) => p.propWidth2}
`;
const GetInTouch = styled.div`
  width: 120px;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  bottom: 0px;
  left: 0px;
`;
const HeaderLogoContainerParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: var(--padding-lgi) 0px var(--padding-lgi) var(--padding-mini);
  box-sizing: border-box;
  padding: ${(p) => p.propPadding};
`;
const RectangleParentRoot = styled.div`position: absolute;
  top: 72px;
  left: 0px;
  width: 162px;
  height: 120px;
  text-align: left;
  font-size: var(--font-size-2xs);
  color: var(--color-darkslategray-400);
  font-family: var(--font-mulish);
  left: ${(p) => p.propLeft}
  width: ${(p) => p.propWidth}
`;

const FrameComponent3 = ({
  cashOnDelivery,
  group7304,
  propLeft,
  propWidth,
  propPadding,
  propWidth1,
  propPadding1,
  propBackground,
  propLeft1,
  propWidth2,
}) => {
  return (
    <RectangleParentRoot propLeft={propLeft} propWidth={propWidth}>
      <FrameChild />
      <HeaderLogoContainerParent propPadding={propPadding}>
        <HeaderLogoContainer>
          <CashOnDelivery>{cashOnDelivery}</CashOnDelivery>
          <SubtitleFrame propWidth1={propWidth1} propPadding1={propPadding1}>
            <TaglineFrame>
              <ImageTraced />
              <WhyGarnet />
              <Blog propBackground={propBackground} />
            </TaglineFrame>
          </SubtitleFrame>
        </HeaderLogoContainer>
        <GetInTouch>
          <TollFree />
          <GetInTouchChild
            loading="eager"
            alt=""
            src={group7304}
            propLeft1={propLeft1}
            propWidth2={propWidth2}
          />
        </GetInTouch>
      </HeaderLogoContainerParent>
    </RectangleParentRoot>
  );
};

export default FrameComponent3;
