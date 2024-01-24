import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import styled from "styled-components";

const Download3Traced = styled.img`
  height: 15px;
  width: 14.9px;
  position: relative;
`;
const ReadyToShip = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 18px;
  font-weight: 600;
`;
const ThreeColumnsLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const SelectAnyOne = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 18px;
  display: inline-block;
  max-width: 100%;
`;
const ViewAll = styled.div`
  position: relative;
  font-size: var(--font-size-2xs);
  letter-spacing: -0.28px;
  line-height: 18px;
  font-weight: 600;
  color: var(--color-coral-200);
`;
const FrameWithFrames = styled.div`
  height: 19px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xl);
`;
const FrameWithImage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const ThirdColumn = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-4xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-black);
`;
const CallToAction = styled.div`
  width: 940px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
  max-width: 100%;
`;
const TextHeadingFrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-3xs);
  background-color: var(--color-lightgray-200);
  filter: blur(10px);
  border: 1px solid var(--color-gainsboro-200);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: none;
`;
const ImageTracedChild = styled.div`
  align-self: stretch;
  position: relative;
  border-radius: var(--br-3xs);
  background: linear-gradient(180deg, #f8f8f8, #fff);
  border: 1.5px solid var(--color-white);
  box-sizing: border-box;
  height: 197px;
  display: none;
`;
const Kt = styled.b`
  height: 26px;
  position: relative;
  letter-spacing: -0.28px;
  line-height: 18px;
  display: inline-block;
  z-index: 2;
`;
const CertificationGuideJewellery = styled.div`
  height: 33.9px;
  width: 35px;
  position: absolute;
  margin: 0 !important;
  top: -10px;
  right: -20.5px;
  border-radius: 50%;
  border: 2px solid var(--color-mistyrose-200);
  box-sizing: border-box;
  z-index: 3;
`;
const ReturnPolicyFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const GetInTouch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-3xs) var(--padding-2xl) 0px 0px;
`;
const RoseGold = styled.div`
  height: 27.8px;
  flex: 1;
  position: relative;
  font-size: var(--font-size-smi);
  letter-spacing: -0.28px;
  line-height: 18px;
  font-weight: 500;
  text-align: left;
  display: inline-block;
  z-index: 2;
`;
const Blog = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-lgi);
`;
const GroupIcon = styled.img`
  height: 35.8px;
  width: 39.9px;
  position: relative;
  z-index: 2;
`;
const IjSi = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 18px;
  font-weight: 500;
  z-index: 2;
`;
const GroupParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-mini);
`;
const WhyGarnetInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-9xs);
  text-align: left;
  font-size: var(--font-size-smi);
`;
const WhyGarnet = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-lg) 0px var(--padding-mid);
  gap: var(--gap-4xs);
`;
const HeaderLogoContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    rgba(255, 222, 106, 0.74),
    rgba(253, 145, 73, 0.74)
  );
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const MainContentFrame = styled.b`
  position: absolute;
  top: 9px;
  left: 13px;
  letter-spacing: -0.28px;
  line-height: 18px;
  display: inline-block;
  width: 6px;
  height: 16px;
  z-index: 3;
`;
const HeaderLogoContainerParent = styled.div`
  height: 35px;
  flex: 1;
  position: relative;
`;
const Size = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 18px;
  font-weight: 500;
  color: var(--color-darkslategray-300);
  text-align: left;
  z-index: 2;
`;
const FrameParent = styled.div`
  width: 77px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-lg);
`;
const ImageTracedInner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-2xl);
  font-size: var(--font-size-smi);
  color: var(--color-black);
`;
const Inputlabel = styled(InputLabel)``;
const StyledSelect = styled(Select)``;
const Formhelpertext = styled(FormHelperText)``;
const FooterFrame = styled(FormControl)`
  height: 40px;
  font-family: var(--font-mulish);
  font-weight: 700;
  font-size: var(--font-size-smi);
  color: var(--color-darkslategray-400);
  z-index: 2;
`;
const ImageTraced = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-3xs);
  background: linear-gradient(180deg, #f8f8f8, #fff);
  border: 1.5px solid var(--color-white);
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-sm) 0px 0px;
  gap: var(--gap-sm);
  height: 100%;
  z-index: 1;
`;
const TextHeadingFrame = styled.div`
  height: 198px;
  flex: 1;
  position: relative;
  min-width: 132px;
  font-size: var(--font-size-4xs);
`;
const Kt1 = styled.b`
  position: absolute;
  top: 10px;
  left: 0px;
  letter-spacing: -0.28px;
  line-height: 18px;
  display: inline-block;
  width: 19px;
  height: 26px;
  z-index: 2;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 0.2px;
  left: 4.5px;
  border-radius: 50%;
  border: 2px solid var(--color-khaki-400);
  box-sizing: border-box;
  width: 35px;
  height: 33.9px;
  z-index: 3;
`;
const KtParent = styled.div`
  height: 36px;
  width: 40px;
  position: relative;
`;
const DownloadOnTheAppStorePN = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const DownloadOnTheAppStorePNWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs);
  text-align: left;
  font-size: var(--font-size-smi);
`;
const FrameGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const FrameWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-lg) 0px var(--padding-xl);
  font-size: var(--font-size-4xs);
`;
const FrameParent1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-lg);
`;
const FrameDiv = styled.div`
  width: 123px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4xl);
  box-sizing: border-box;
  color: var(--color-black);
`;
const RectangleDiv = styled.div`
  height: 40px;
  width: 176px;
  position: relative;
  border-radius: 0px 0px var(--br-3xs) var(--br-3xs);
  background: linear-gradient(90.22deg, #f77433, #feaf38);
  border: 1px solid var(--color-gainsboro-200);
  box-sizing: border-box;
  display: none;
`;
const Select1 = styled.b`
  position: relative;
  z-index: 3;
`;
const RectangleGroup = styled.div`
  border-radius: 0px 0px var(--br-3xs) var(--br-3xs);
  background: linear-gradient(90.22deg, #f77433, #feaf38);
  border: 1px solid var(--color-gainsboro-200);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-2xs) var(--padding-51xl) var(--padding-mini)
    var(--padding-49xl);
  z-index: 2;
  text-align: left;
  color: var(--color-darkslategray-400);
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-3xs);
  background: linear-gradient(180deg, #f8f8f8, #fff);
  border: 1.5px solid var(--color-white);
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-mini) 0px 0px;
  gap: var(--gap-sm);
  height: 100%;
  z-index: 1;
`;
const TextHeadingFrame1 = styled.div`
  height: 198px;
  flex: 1;
  position: relative;
  min-width: 132px;
`;
const EllipseDiv = styled.div`
  height: 33.9px;
  width: 35px;
  position: absolute;
  margin: 0 !important;
  top: 8.85px;
  right: -63.4px;
  border-radius: 50%;
  border: 2px solid var(--color-darkgray);
  box-sizing: border-box;
  transform: rotate(142.37deg);
  transform-origin: 0 0;
  z-index: 3;
`;
const RoseGold1 = styled.div`
  height: 27.8px;
  width: 78.9px;
  position: relative;
  font-size: var(--font-size-smi);
  letter-spacing: -0.28px;
  line-height: 18px;
  font-weight: 500;
  text-align: left;
  display: inline-block;
  flex-shrink: 0;
  z-index: 2;
`;
const FrameParent2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const FrameWrapper1 = styled.div`
  width: 162px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-mid);
  box-sizing: border-box;
  text-align: center;
  font-size: var(--font-size-4xs);
`;
const GroupGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-mid);
`;
const SearchIconParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-lg);
  text-align: center;
  color: var(--color-black);
`;
const FrameParent3 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  gap: var(--gap-mini);
`;
const FrameWrapper2 = styled.div`
  width: 122px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-2xl) 0px var(--padding-3xl);
  box-sizing: border-box;
`;
const RectangleParent1 = styled.div`
  border-radius: 0px 0px var(--br-3xs) var(--br-3xs);
  background: linear-gradient(90.22deg, #f77433, #feaf38);
  border: 1px solid var(--color-gainsboro-200);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-2xs) var(--padding-51xl) var(--padding-mini)
    var(--padding-49xl);
  z-index: 2;
  color: var(--color-darkslategray-400);
`;
const RectangleContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-3xs);
  background: linear-gradient(180deg, #f8f8f8, #fff);
  border: 1.5px solid var(--color-white);
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xl) 0px 0px;
  gap: var(--gap-4xs);
  width: 100%;
  z-index: 1;
`;
const TextHeadingFrame2 = styled.div`
  height: 198px;
  flex: 1;
  position: relative;
  min-width: 132px;
  text-align: left;
`;
const HeaderLogoContainer1 = styled.div`
  width: 618px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-26xl);
  min-width: 618px;
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    flex: 1;
  }
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    gap: var(--gap-3xl);
    min-width: 100%;
  }
`;
const ReturnPolicyFrame1 = styled.img`
  height: 65px;
  width: 65px;
  position: relative;
  border-radius: var(--br-8xs);
  object-fit: cover;
  min-height: 65px;
`;
const ReturnPolicyFrame2 = styled.img`
  height: 65px;
  width: 66px;
  position: relative;
  border-radius: var(--br-8xs);
  object-fit: cover;
  min-height: 65px;
`;
const FramesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  gap: var(--gap-lg);
`;
const JewelleryGiftingFrame = styled.div`
  height: 19px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const CopyrightInfoFrame = styled.img`
  width: 65px;
  height: 65px;
  position: absolute;
  margin: 0 !important;
  bottom: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  object-fit: cover;
`;
const CertificationGuide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs);
  position: relative;
`;
const TollFreeNumber = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-35xl);
`;
const ContactUsForm = styled.div`
  height: 228px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-4xs);
  box-sizing: border-box;
  min-width: 234px;
  text-align: left;
  color: var(--color-black);
  @media screen and (max-width: 1125px) {
    flex: 1;
  }
`;
const PressRelease = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    flex-wrap: wrap;
  }
`;
const OurTeamReviews = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-7xs);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-smi);
  color: var(--color-darkslategray-300);
`;
const RightSidebar = styled.div`
  width: 1036px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-mid);
  max-width: 100%;
`;
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
const LeftSidebarInner = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  border-radius: var(--br-8xs);
  background-color: var(--color-whitesmoke-100);
  border: 1px solid var(--color-whitesmoke-500);
  box-sizing: border-box;
`;
const LeftSidebar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-22xl);
  max-width: 100%;
  @media screen and (max-width: 800px) {
    gap: var(--gap-xl);
  }
`;
const ContentAreaRoot = styled.section`
  width: 1347px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-mid);
  box-sizing: border-box;
  min-height: 353px;
  max-width: 100%;
  flex-shrink: 0;
  text-align: center;
  font-size: var(--font-size-mini);
  color: var(--color-coral-200);
  font-family: var(--font-mulish);
`;

const ContentArea = () => {
  return (
    <ContentAreaRoot>
      <LeftSidebar>
        <RightSidebar>
          <CallToAction>
            <ThreeColumnsLayout>
              <Download3Traced alt="" src="/download-3-traced-1.svg" />
              <ReadyToShip>Ready to Ship</ReadyToShip>
            </ThreeColumnsLayout>
            <ThirdColumn>
              <FrameWithImage>
                <SelectAnyOne>
                  Select any one of the combination, if you are looking for fast
                  delivery.
                </SelectAnyOne>
                <FrameWithFrames>
                  <ReadyToShip>More 18 Rings</ReadyToShip>
                  <ViewAll>View All</ViewAll>
                </FrameWithFrames>
              </FrameWithImage>
            </ThirdColumn>
          </CallToAction>
          <OurTeamReviews>
            <PressRelease>
              <HeaderLogoContainer1>
                <TextHeadingFrame>
                  <TextHeadingFrameChild />
                  <ImageTraced>
                    <ImageTracedChild />
                    <WhyGarnet>
                      <Blog>
                        <GetInTouch>
                          <ReturnPolicyFrame>
                            <Kt>14Kt</Kt>
                            <CertificationGuideJewellery />
                          </ReturnPolicyFrame>
                        </GetInTouch>
                        <RoseGold>Rose Gold</RoseGold>
                      </Blog>
                      <WhyGarnetInner>
                        <GroupParent>
                          <GroupIcon loading="eager" alt="" src="/group.svg" />
                          <IjSi>IJ-SI</IjSi>
                        </GroupParent>
                      </WhyGarnetInner>
                    </WhyGarnet>
                    <ImageTracedInner>
                      <FrameParent>
                        <HeaderLogoContainerParent>
                          <HeaderLogoContainer />
                          <MainContentFrame>8</MainContentFrame>
                        </HeaderLogoContainerParent>
                        <Size>Size</Size>
                      </FrameParent>
                    </ImageTracedInner>
                    <FooterFrame
                      variant="filled"
                      sx={{
                        borderRadius: "0px 0px 0px 0px",
                        width: "176px",
                        height: "40px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "40px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "40px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "40px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "40px",
                          alignItems: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInput-input": { m: 0, p: 0 },
                        "& .MuiInputBase-input": {
                          textAlign: "left",
                          p: "0 !important",
                        },
                      }}
                    >
                      <Inputlabel color="primary" />
                      <Select color="primary" disableUnderline displayEmpty />
                      <Formhelpertext />
                    </FooterFrame>
                  </ImageTraced>
                </TextHeadingFrame>
                <TextHeadingFrame1>
                  <TextHeadingFrameChild />
                  <RectangleParent>
                    <ImageTracedChild />
                    <FrameWrapper>
                      <FrameGroup>
                        <Blog>
                          <KtParent>
                            <Kt1>14Kt</Kt1>
                            <FrameItem />
                          </KtParent>
                          <RoseGold>Rose Gold</RoseGold>
                        </Blog>
                        <DownloadOnTheAppStorePNWrapper>
                          <DownloadOnTheAppStorePN>
                            <GroupIcon
                              loading="eager"
                              alt=""
                              src="/group-1.svg"
                            />
                            <IjSi>IJ-SI</IjSi>
                          </DownloadOnTheAppStorePN>
                        </DownloadOnTheAppStorePNWrapper>
                      </FrameGroup>
                    </FrameWrapper>
                    <FrameDiv>
                      <FrameParent1>
                        <HeaderLogoContainerParent>
                          <HeaderLogoContainer />
                          <MainContentFrame>7</MainContentFrame>
                        </HeaderLogoContainerParent>
                        <Size>Size</Size>
                      </FrameParent1>
                    </FrameDiv>
                    <RectangleGroup>
                      <RectangleDiv />
                      <Select1>Select</Select1>
                    </RectangleGroup>
                  </RectangleParent>
                </TextHeadingFrame1>
                <TextHeadingFrame2>
                  <TextHeadingFrameChild />
                  <RectangleContainer>
                    <ImageTracedChild />
                    <FrameWrapper1>
                      <FrameParent2>
                        <ReturnPolicyFrame>
                          <Kt>14Kt</Kt>
                          <EllipseDiv />
                        </ReturnPolicyFrame>
                        <RoseGold1>Rose Gold</RoseGold1>
                      </FrameParent2>
                    </FrameWrapper1>
                    <FrameWrapper2>
                      <FrameParent3>
                        <GroupGroup>
                          <GroupIcon
                            loading="eager"
                            alt=""
                            src="/group-2.svg"
                          />
                          <IjSi>IJ-SI</IjSi>
                        </GroupGroup>
                        <SearchIconParent>
                          <HeaderLogoContainerParent>
                            <HeaderLogoContainer />
                            <MainContentFrame>9</MainContentFrame>
                          </HeaderLogoContainerParent>
                          <Size>Size</Size>
                        </SearchIconParent>
                      </FrameParent3>
                    </FrameWrapper2>
                    <RectangleParent1>
                      <RectangleDiv />
                      <Select1>Select</Select1>
                    </RectangleParent1>
                  </RectangleContainer>
                </TextHeadingFrame2>
              </HeaderLogoContainer1>
              <ContactUsForm>
                <TollFreeNumber>
                  <FramesContainer>
                    <ReturnPolicyFrame1
                      loading="eager"
                      alt=""
                      src="/rectangle-2233@2x.png"
                    />
                    <ReturnPolicyFrame2
                      loading="eager"
                      alt=""
                      src="/rectangle-2234@2x.png"
                    />
                    <ReturnPolicyFrame2
                      loading="eager"
                      alt=""
                      src="/rectangle-2235@2x.png"
                    />
                  </FramesContainer>
                  <CertificationGuide>
                    <JewelleryGiftingFrame>
                      <ReadyToShip>More Yellow Gold Rings</ReadyToShip>
                      <ViewAll>View All</ViewAll>
                    </JewelleryGiftingFrame>
                    <CopyrightInfoFrame
                      loading="eager"
                      alt=""
                      src="/rectangle-2233@2x.png"
                    />
                  </CertificationGuide>
                </TollFreeNumber>
              </ContactUsForm>
            </PressRelease>
          </OurTeamReviews>
        </RightSidebar>
        <LeftSidebarInner>
          <FrameChild />
        </LeftSidebarInner>
      </LeftSidebar>
    </ContentAreaRoot>
  );
};

export default ContentArea;
