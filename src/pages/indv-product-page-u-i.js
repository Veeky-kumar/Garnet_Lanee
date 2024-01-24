import NavBarLinks from "../components/nav-bar-links";
import ContainerFrame from "../components/container-frame";
import styled from "styled-components";
import ContentArea from "../components/content-area";
import ReturnPolicyFrame from "../components/return-policy-frame";
import TeamReviewsFrame from "../components/team-reviews-frame";
import FrameComponent2 from "../components/frame-component2";
import ParentContainer from "../components/parent-container";
import FrameComponent1 from "../components/frame-component1";
import FranchiseEnquiryFrame from "../components/franchise-enquiry-frame";
import Vector from "../components/vector";
import TollFreeNumber from "../components/toll-free-number";
import FrameComponent from "../components/frame-component";
import CertificationGuideJewellery from "../components/certification-guide-jewellery";

const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--color-whitesmoke-100);
  border: 1px solid var(--color-whitesmoke-500);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: none;
`;
const SubtitleInner = styled.div`
  height: 1px;
  flex: 1;
  position: relative;
  border-radius: var(--br-8xs);
  background-color: var(--color-whitesmoke-100);
  border: 1px solid var(--color-whitesmoke-500);
  box-sizing: border-box;
  max-width: 100%;
`;
const Subtitle = styled.div`
  width: 1333px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 48px 0px;
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
`;
const PriceBreakup = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 18px;
  font-weight: 500;
`;
const ShowLess = styled.div`
  position: relative;
  font-size: var(--font-size-2xs);
  letter-spacing: -0.28px;
  line-height: 18px;
  font-weight: 600;
  color: var(--color-coral-200);
  text-align: left;
`;
const WhyGarnetText = styled.div`
  height: 19px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-smi);
`;
const ImageTraced = styled.div`
  height: 26px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-21xl) 0px 41px;
  box-sizing: border-box;
`;
const Unnamed1Traced = styled.img`
  height: 19.7px;
  width: 24.9px;
  position: relative;
`;
const BisHallmark = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 18px;
  font-weight: 600;
`;
const CopyrightGarnetSymbol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
`;
const ContainerHeader = styled.div`
  align-self: stretch;
  height: 4px;
  position: relative;
  background: linear-gradient(90deg, #fd9149, #ffd588);
  z-index: 1;
`;
const SiteMapListing = styled.div`
  height: 36px;
  width: 125px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs);
  color: var(--color-coral-200);
`;
const Image67Traced = styled.img`
  height: 15.4px;
  width: 24.9px;
  position: relative;
`;
const Igi = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: -0.28px;
  line-height: 18px;
  font-weight: 500;
`;
const GroupFrames = styled.div`
  height: 20px;
  width: 67px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const TracedIcon = styled.img`
  height: 22px;
  width: 24.9px;
  position: relative;
  min-height: 22px;
  z-index: 1;
`;
const Sgl = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: -0.28px;
  line-height: 18px;
  font-weight: 500;
  margin-left: -8px;
`;
const TracedImage = styled.div`
  width: 79px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const SiteMapListingParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const MainContentFrameInner = styled.div`
  width: 497px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 49px;
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-mini);
  color: var(--color-darkslategray-300);
  @media screen and (max-width: 800px) {
    padding-left: var(--padding-5xl);
    padding-right: var(--padding-5xl);
    box-sizing: border-box;
  }
`;
const MainContentFrame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-xs);
  max-width: 100%;
`;
const SubheaderText = styled.section`
  width: 1379px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-3xl);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  text-align: center;
  font-size: var(--font-size-smi);
  color: var(--color-darkslategray-400);
  font-family: var(--font-mulish);
`;
const IndvProductPageUiChild = styled.div`
  align-self: stretch;
  position: relative;
  background-color: var(--color-white);
  height: 100px;
  display: none;
`;
const BuyNow = styled.b`
  position: relative;
  display: none;
`;
const IndvProductPageUiRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-darkslategray-400);
  font-family: var(--font-mulish);
`;

const IndvProductPageUI = () => {
  return (
    <IndvProductPageUiRoot>
      <NavBarLinks />
      <ContainerFrame />
      <Subtitle>
        <SubtitleInner>
          <FrameChild />
        </SubtitleInner>
      </Subtitle>
      <ContentArea />
      <SubheaderText>
        <MainContentFrame>
          <ImageTraced>
            <WhyGarnetText>
              <PriceBreakup>{`PRICE BREAKUP `}</PriceBreakup>
              <ShowLess>Show less</ShowLess>
            </WhyGarnetText>
          </ImageTraced>
          <ReturnPolicyFrame />
          <TeamReviewsFrame />
          <FrameComponent2 />
          <MainContentFrameInner>
            <SiteMapListingParent>
              <SiteMapListing>
                <CopyrightGarnetSymbol>
                  <Unnamed1Traced
                    loading="eager"
                    alt=""
                    src="/unnamed-1-traced.svg"
                  />
                  <BisHallmark>BIS Hallmark</BisHallmark>
                </CopyrightGarnetSymbol>
                <ContainerHeader />
              </SiteMapListing>
              <GroupFrames>
                <Image67Traced
                  loading="eager"
                  alt=""
                  src="/image-67-traced.svg"
                />
                <Igi>IGI</Igi>
              </GroupFrames>
              <TracedImage>
                <TracedIcon loading="eager" alt="" src="/1-2-traced.svg" />
                <Sgl>SGL</Sgl>
              </TracedImage>
            </SiteMapListingParent>
          </MainContentFrameInner>
        </MainContentFrame>
      </SubheaderText>
      <ParentContainer />
      <IndvProductPageUiChild />
      <FrameComponent1 />
      <FranchiseEnquiryFrame />
      <BuyNow>Buy Now</BuyNow>
      <BuyNow>Buy Now</BuyNow>
      <Vector />
      <BuyNow>Buy Now</BuyNow>
      <BuyNow>Buy Now</BuyNow>
      <BuyNow>Buy Now</BuyNow>
      <TollFreeNumber />
      <BuyNow>Buy Now</BuyNow>
      <FrameComponent />
      <CertificationGuideJewellery />
    </IndvProductPageUiRoot>
  );
};

export default IndvProductPageUI;
