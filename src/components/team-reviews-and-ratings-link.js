import styled from "styled-components";

const JewelleryKnowledge = styled.b`
  position: relative;
  z-index: 1;
`;
const Image187Traced = styled.img`
  height: 10.2px;
  width: 13px;
  position: relative;
  z-index: 1;
  min-height: ${(p) => p.propMinHeight};
`;
const GoldGuide = styled.div`
  position: relative;
  font-weight: 600;
  z-index: 1;
`;
const Image187TracedParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs);
  flex: ${(p) => p.propFlex};
`;
const Image188Traced = styled.img`
  height: 10px;
  width: 12px;
  position: relative;
  z-index: 1;
`;
const SiteMapPrivacyPolicyFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-xs);
  flex: ${(p) => p.propFlex1};
`;
const Image189Traced = styled.img`
  height: 10.4px;
  width: 13px;
  position: relative;
  z-index: 1;
`;
const SiteMapPrivacyPolicyFrame1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm);
  font-size: var(--font-size-4xs);
  color: var(--color-darkslategray-500);
`;
const TeamReviewsAndRatingsLinkRoot = styled.div`
  height: 105px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  min-width: 190px;
  text-align: left;
  font-size: var(--font-size-mini);
  color: var(--color-coral-100);
  font-family: var(--font-mulish);
  @media screen and (max-width: 450px) {
    flex: 1;
  }
  min-width: ${(p) => p.propMinWidth};
`;

const TeamReviewsAndRatingsLink = ({
  jEWELLERYKNOWLEDGE,
  image187Traced,
  gOLDGUIDE,
  image188Traced,
  dIAMONDGUIDE,
  image189Traced,
  jEWELLERYGUIDE,
  propMinWidth,
  propFlex,
  propMinHeight,
  propFlex1,
}) => {
  return (
    <TeamReviewsAndRatingsLinkRoot propMinWidth={propMinWidth}>
      <JewelleryKnowledge>{jEWELLERYKNOWLEDGE}</JewelleryKnowledge>
      <FrameParent>
        <Image187TracedParent propFlex={propFlex}>
          <Image187Traced
            alt=""
            src={image187Traced}
            propMinHeight={propMinHeight}
          />
          <GoldGuide>{gOLDGUIDE}</GoldGuide>
        </Image187TracedParent>
        <SiteMapPrivacyPolicyFrame propFlex1={propFlex1}>
          <Image188Traced alt="" src={image188Traced} />
          <GoldGuide>{dIAMONDGUIDE}</GoldGuide>
        </SiteMapPrivacyPolicyFrame>
        <SiteMapPrivacyPolicyFrame1>
          <Image189Traced alt="" src={image189Traced} />
          <GoldGuide>{jEWELLERYGUIDE}</GoldGuide>
        </SiteMapPrivacyPolicyFrame1>
      </FrameParent>
    </TeamReviewsAndRatingsLinkRoot>
  );
};

export default TeamReviewsAndRatingsLink;
