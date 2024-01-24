import styled from "styled-components";

const CertificationGuideFrame = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  height: 50px;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: linear-gradient(90deg, #f77433, #feaf38);
`;
const Component = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 22px;
  font-weight: 500;
  z-index: 1;
`;
const CertificateGuideFrame = styled.div`
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xl) 0px 0px;
  box-sizing: border-box;
`;
const P = styled.p`
  margin: 0;
`;
const RateTxt = styled.span`
  line-break: anywhere;
`;
const Rate = styled.div`
  height: 44px;
  position: relative;
  letter-spacing: -0.28px;
  line-height: 22px;
  font-weight: 500;
  display: flex;
  align-items: center;
  z-index: 1;
`;
const CertificateGuideFrame1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-3xs) 0px 0px;
`;
const ApproxWeightTxtContainer = styled.span``;
const CertificateGuideFrame2 = styled.div`
  width: 126px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0px 0px;
  box-sizing: border-box;
`;
const CertificateGuideFrame3 = styled.div`
  width: 92px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xl) 0px 0px;
  box-sizing: border-box;
`;
const ReturnPolicyFrameRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-91xl) var(--padding-smi) var(--padding-2xl);
  position: relative;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-white);
  font-family: var(--font-mulish);
  @media screen and (max-width: 1350px) {
    padding-right: var(--padding-36xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 1125px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 800px) {
    padding-right: var(--padding-8xl);
    box-sizing: border-box;
  }
`;

const ReturnPolicyFrame = () => {
  return (
    <ReturnPolicyFrameRoot>
      <CertificationGuideFrame type="text" />
      <CertificateGuideFrame>
        <Component>COMPONENT</Component>
      </CertificateGuideFrame>
      <CertificateGuideFrame1>
        <Rate>
          <RateTxt>
            <P></P>
            <P>RATE</P>
          </RateTxt>
        </Rate>
      </CertificateGuideFrame1>
      <CertificateGuideFrame2>
        <Rate>
          <ApproxWeightTxtContainer>
            <P></P>
            <P>APPROX. WEIGHT</P>
          </ApproxWeightTxtContainer>
        </Rate>
      </CertificateGuideFrame2>
      <CertificateGuideFrame3>
        <Component>VALUE</Component>
      </CertificateGuideFrame3>
      <Rate>
        <RateTxt>
          <P></P>
          <P>DISCOUNT</P>
        </RateTxt>
      </Rate>
      <Rate>
        <ApproxWeightTxtContainer>
          <P></P>
          <P>FINAL VALUE</P>
        </ApproxWeightTxtContainer>
      </Rate>
    </ReturnPolicyFrameRoot>
  );
};

export default ReturnPolicyFrame;
