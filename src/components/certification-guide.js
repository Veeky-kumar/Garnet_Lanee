import styled from "styled-components";

const OurServices = styled.b`
  position: relative;
  z-index: 1;
`;
const FranchiseInquiry = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-7xs);
  padding: ${(p) => p.propPadding};
`;
const Image176Traced = styled.img`
  height: 12.4px;
  width: 14.9px;
  position: relative;
  z-index: 1;
  width: ${(p) => p.propWidth};
`;
const GoldRates = styled.div`
  position: relative;
  font-weight: 600;
  z-index: 1;
`;
const EllipseShape = styled.div`height: 12px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs);
  height: ${(p) => p.propHeight}
  flex: ${(p) => p.propFlex}
`;
const Image177Traced = styled.img`height: 13.9px;
  width: 14.9px;
  position: relative;
  min-height: 14px;
  z-index: 1;
  height: ${(p) => p.propHeight1}
  min-height: ${(p) => p.propMinHeight}
`;
const TermsAndConditions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Image178Traced = styled.img`
  height: 9.8px;
  width: 13px;
  position: relative;
  z-index: 1;
  min-height: ${(p) => p.propMinHeight1};
`;
const HeaderContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  flex: ${(p) => p.propFlex1};
`;
const TeamPhotos = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) 0px 0px;
  gap: var(--gap-smi);
  font-size: var(--font-size-4xs);
  color: var(--color-darkslategray-500);
  padding: ${(p) => p.propPadding1};
`;
const CertificationGuideRoot = styled.div`
  height: 108px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  min-width: 151px;
  text-align: left;
  font-size: var(--font-size-mini);
  color: var(--color-coral-100);
  font-family: var(--font-mulish);
  @media screen and (max-width: 800px) {
    flex: 1;
  }
`;

const CertificationGuide = ({
  oURSERVICES,
  image176Traced,
  gOLDRATES,
  image177Traced,
  dIGITALGOLD,
  image178Traced,
  vARIOUSPAYMENTMETHOD,
  propPadding,
  propPadding1,
  propHeight,
  propFlex,
  propWidth,
  propHeight1,
  propMinHeight,
  propFlex1,
  propMinHeight1,
}) => {
  return (
    <CertificationGuideRoot>
      <FranchiseInquiry propPadding={propPadding}>
        <OurServices>{oURSERVICES}</OurServices>
      </FranchiseInquiry>
      <TeamPhotos propPadding1={propPadding1}>
        <EllipseShape propHeight={propHeight} propFlex={propFlex}>
          <Image176Traced alt="" src={image176Traced} propWidth={propWidth} />
          <GoldRates>{gOLDRATES}</GoldRates>
        </EllipseShape>
        <TermsAndConditions>
          <Image177Traced
            alt=""
            src={image177Traced}
            propHeight1={propHeight1}
            propMinHeight={propMinHeight}
          />
          <GoldRates>{dIGITALGOLD}</GoldRates>
        </TermsAndConditions>
        <HeaderContainer propFlex1={propFlex1}>
          <Image178Traced
            alt=""
            src={image178Traced}
            propMinHeight1={propMinHeight1}
          />
          <GoldRates>{vARIOUSPAYMENTMETHOD}</GoldRates>
        </HeaderContainer>
      </TeamPhotos>
    </CertificationGuideRoot>
  );
};

export default CertificationGuide;
