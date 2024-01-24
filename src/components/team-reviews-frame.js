import styled from "styled-components";

const Gold = styled.b`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 22px;
`;
const KtYellowGold = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 22px;
`;
const DownloadOurApplication = styled.div`
  width: 165px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm);
`;
const LogoContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4xs);
`;
const GParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lg);
`;
const VectorChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--color-whitesmoke-400);
  width: 100%;
  height: 100%;
  display: none;
`;
const Image105Traced = styled.img`
  position: absolute;
  top: 3px;
  left: 4.1px;
  width: 6px;
  height: 10.7px;
  z-index: 1;
`;
const Vector = styled.div`
  height: 18px;
  width: 18px;
  position: relative;
  border-radius: var(--br-8xs);
  background-color: var(--color-whitesmoke-400);
`;
const ImageTraced = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8xs);
`;
const Text = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 1px;
  left: 0px;
  letter-spacing: -0.28px;
  line-height: 22px;
`;
const Text1 = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 22px;
  z-index: 1;
`;
const Text2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-6xs);
`;
const TextFrame = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lg);
`;
const Div = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 22px;
  white-space: nowrap;
`;
const ImageTraced1 = styled.div`
  width: 322px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const Div1 = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: -0.28px;
  line-height: 22px;
  white-space: nowrap;
`;
const B = styled.b`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 22px;
  white-space: nowrap;
`;
const Parent = styled.div`
  width: 55px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const TermsAndConditionsText = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  color: var(--color-gray-200);
  @media screen and (max-width: 1125px) {
    flex-wrap: wrap;
  }
`;
const SiteMapText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm);
  max-width: 100%;
`;
const TeamReviewsFrameRoot = styled.div`
  width: 1204px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-2xl);
  box-sizing: border-box;
  min-height: 103px;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-coral-200);
  font-family: var(--font-mulish);
`;

const TeamReviewsFrame = () => {
  return (
    <TeamReviewsFrameRoot>
      <SiteMapText>
        <Gold>Gold</Gold>
        <TermsAndConditionsText>
          <DownloadOurApplication>
            <KtYellowGold>14 KT Yellow Gold</KtYellowGold>
            <Gold>Total Gold Value</Gold>
          </DownloadOurApplication>
          <GParent>
            <KtYellowGold>₹3,072 / g</KtYellowGold>
            <LogoContainerWrapper>
              <KtYellowGold>-</KtYellowGold>
            </LogoContainerWrapper>
          </GParent>
          <TextFrame>
            <ImageTraced>
              <KtYellowGold>2.960 g</KtYellowGold>
              <Vector>
                <VectorChild />
                <Image105Traced alt="" src="/image-105-traced.svg" />
              </Vector>
            </ImageTraced>
            <TextWrapper>
              <Text2>
                <Text>-</Text>
                <Text1>-</Text1>
              </Text2>
            </TextWrapper>
          </TextFrame>
          <ImageTraced1>
            <Div>₹9,093</Div>
          </ImageTraced1>
          <Parent>
            <Div1>₹9,093</Div1>
            <B>₹9,093</B>
          </Parent>
        </TermsAndConditionsText>
      </SiteMapText>
    </TeamReviewsFrameRoot>
  );
};

export default TeamReviewsFrame;
