import styled from "styled-components";

const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--color-whitesmoke-100);
  width: 100%;
  height: 100%;
  display: none;
`;
const TextBox = styled.div`
  position: absolute;
  top: 5.2px;
  left: 0px;
  border-radius: var(--br-8xs);
  background: linear-gradient(220.15deg, #f8f8f8, rgba(255, 213, 136, 0));
  width: 100%;
  height: 100%;
`;
const FrameInner = styled.div`position: absolute;
  top: 433.9px;
  left: 322px;
  border-radius: var(--br-3xs);
  background-color: var(--color-gainsboro-500);
  filter: blur(25px);
  width: 241px;
  height: 384px;
  transform:  rotate(180deg);
  transform-origin: 0 0;
  z-index: 3;
  top: ${(p) => p.propTop}
  left: ${(p) => p.propLeft}
`;
const RectangleDiv = styled.div`position: absolute;
  top: 433.9px;
  left: 585px;
  border-radius: var(--br-3xs);
  background-color: var(--color-gainsboro-500);
  filter: blur(25px);
  width: 241px;
  height: 384px;
  transform:  rotate(180deg);
  transform-origin: 0 0;
  z-index: 3;
  top: ${(p) => p.propTop1}
  left: ${(p) => p.propLeft1}
`;
const FrameChild1 = styled.div`
  position: absolute;
  top: -0.1px;
  left: 0px;
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  width: 100%;
  height: 100%;
  display: none;
`;
const Image139Icon = styled.img`
  position: absolute;
  top: -0.1px;
  left: 0px;
  border-radius: var(--br-xl);
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: none;
`;
const FrameChild2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xl);
  background-color: var(--color-aliceblue);
  width: 100%;
  height: 100%;
  display: none;
`;
const DownloadApplicationFrame = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xl);
  background: linear-gradient(
    267.38deg,
    #e5e5e5 36.36%,
    rgba(229, 229, 229, 0)
  );
  width: 100%;
  height: 100%;
`;
const Trending = styled.div`
  position: absolute;
  top: 2.1px;
  left: 20px;
  letter-spacing: -0.28px;
  line-height: 18px;
  font-weight: 500;
  z-index: 2;
`;
const RectangleContainer = styled.div`
  position: absolute;
  top: 13.9px;
  left: 9px;
  border-radius: var(--br-xl);
  background-color: var(--color-aliceblue);
  width: 84px;
  height: 25px;
  z-index: 6;
`;
const Image100Traced = styled.img`
  position: absolute;
  top: 19.9px;
  left: 207px;
  width: 19.9px;
  height: 17.3px;
  z-index: 6;
`;
const Image139Parent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xl);
  width: 100%;
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 5;
  font-size: var(--font-size-4xs);
  background-image: ${(p) => p.propBackgroundImage};
`;
const Div = styled.div`
  position: absolute;
  top: 263px;
  left: 9px;
  font-size: var(--font-size-xl);
  font-weight: 600;
  display: inline-block;
  width: 78px;
  height: 11px;
  white-space: nowrap;
  z-index: 5;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const YemeralyWingsDiamond = styled.div`
  position: absolute;
  top: 291.9px;
  left: 9px;
  letter-spacing: -0.28px;
  line-height: 18px;
  z-index: 5;
`;
const ViewSimilar = styled.div`
  position: absolute;
  top: 352.9px;
  left: 27px;
  letter-spacing: -0.28px;
  line-height: 18px;
  z-index: 5;
`;
const Div1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 600;
  display: inline-block;
  width: 48px;
  height: 11px;
  white-space: nowrap;
  z-index: 6;
`;
const WhyGarnet = styled.div`
  position: absolute;
  top: 8.9px;
  left: 8px;
  background-color: var(--color-darkslategray-400);
  width: 45px;
  height: 1px;
  z-index: 7;
`;
const CTAButton = styled.div`
  position: absolute;
  top: 267px;
  left: 87px;
  width: 53px;
  height: 11px;
`;
const Image136Traced = styled.img`
  position: absolute;
  top: 355.9px;
  left: 8.7px;
  width: 13px;
  height: 13px;
  z-index: 5;
`;
const ContactUsChild = styled.img`
  position: absolute;
  top: -0.1px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 7;
`;
const BuyNow = styled.b`
  position: absolute;
  top: 11px;
  left: 35px;
  font-size: var(--font-size-smi);
  font-family: var(--font-mulish);
  color: var(--color-darkslategray-400);
  text-align: left;
  z-index: 8;
`;
const ContactUs = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  top: 343px;
  left: 114px;
  width: 127px;
  height: 41px;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 261.9px;
  left: 206px;
  width: 21.9px;
  height: 70.6px;
  z-index: 5;
`;
const OnOffMaking = styled.b`
  position: absolute;
  top: 318.9px;
  left: 7px;
  font-size: var(--font-size-2xs);
  letter-spacing: -0.28px;
  line-height: 18px;
  color: var(--color-seagreen);
  z-index: 5;
`;
const RectangleGroup = styled.div`position: absolute;
  top: 49px;
  left: 78px;
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  width: 241px;
  height: 384px;
  z-index: 4;
  top: ${(p) => p.propTop2}
  left: ${(p) => p.propLeft2}
`;
const Div2 = styled.div`
  position: absolute;
  top: 263px;
  left: 9px;
  font-size: var(--font-size-xl);
  font-weight: 600;
  display: inline-block;
  width: 78px;
  height: 11px;
  white-space: nowrap;
  z-index: 9;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const YemeralyWingsDiamond1 = styled.div`
  position: absolute;
  top: 291.9px;
  left: 9px;
  letter-spacing: -0.28px;
  line-height: 18px;
  z-index: 9;
`;
const ViewSimilar1 = styled.div`
  position: absolute;
  top: 352.9px;
  left: 27px;
  letter-spacing: -0.28px;
  line-height: 18px;
  z-index: 9;
`;
const Div3 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 600;
  display: inline-block;
  width: 48px;
  height: 11px;
  white-space: nowrap;
  z-index: 10;
`;
const SecondaryTextFrame = styled.div`
  position: absolute;
  top: 8.9px;
  left: 8px;
  background-color: var(--color-darkslategray-400);
  width: 45px;
  height: 1px;
  z-index: 11;
`;
const Image136Traced1 = styled.img`
  position: absolute;
  top: 355.9px;
  left: 7.8px;
  width: 13px;
  height: 13px;
  z-index: 9;
`;
const FrameChild3 = styled.img`
  position: absolute;
  top: 261.9px;
  left: 205.1px;
  width: 21.9px;
  height: 70.6px;
  z-index: 9;
`;
const OnMakingCharges = styled.b`
  position: absolute;
  top: 318.9px;
  left: 7px;
  font-size: var(--font-size-2xs);
  letter-spacing: -0.28px;
  line-height: 18px;
  display: inline-block;
  color: var(--color-seagreen);
  width: 159px;
  height: 10px;
  z-index: 9;
`;
const Image100Traced1 = styled.img`
  position: absolute;
  top: 19.9px;
  left: 206.1px;
  width: 19.9px;
  height: 17.3px;
  z-index: 10;
`;
const FrameChild4 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xl);
  background-color: var(--color-mistyrose-100);
  width: 100%;
  height: 100%;
  display: none;
`;
const BestSeller = styled.div`
  position: absolute;
  top: 2.1px;
  left: 15px;
  letter-spacing: -0.28px;
  line-height: 18px;
  font-weight: 500;
  z-index: 2;
`;
const GroupDiv = styled.div`
  position: absolute;
  top: 14.9px;
  left: 12px;
  border-radius: var(--br-xl);
  background-color: var(--color-mistyrose-100);
  width: 84px;
  height: 25px;
  z-index: 10;
`;
const Image116Parent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xl);
  width: 100%;
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 9;
  font-size: var(--font-size-4xs);
  background-image: ${(p) => p.propBackgroundImage1};
`;
const RectangleIcon = styled.img`
  position: absolute;
  top: -0.1px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 9;
`;
const BuyNow1 = styled.b`
  position: absolute;
  top: 11px;
  left: 35px;
  font-size: var(--font-size-smi);
  font-family: var(--font-mulish);
  color: var(--color-darkslategray-400);
  text-align: left;
  z-index: 10;
`;
const FrameDiv = styled.div`position: absolute;
  top: 48px;
  left: 344px;
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  width: 241px;
  height: 384px;
  z-index: 8;
  top: ${(p) => p.propTop3}
  left: ${(p) => p.propLeft3}
`;
const Image136Traced2 = styled.img`
  position: absolute;
  top: 355.9px;
  left: 6.9px;
  width: 13px;
  height: 13px;
  z-index: 5;
`;
const FrameChild5 = styled.img`
  position: absolute;
  top: 261.9px;
  left: 204.2px;
  width: 21.9px;
  height: 70.6px;
  z-index: 5;
`;
const OnMakingCharges1 = styled.b`
  position: absolute;
  top: 318.9px;
  left: 7px;
  font-size: var(--font-size-2xs);
  letter-spacing: -0.28px;
  line-height: 18px;
  display: inline-block;
  color: var(--color-seagreen);
  width: 159px;
  height: 10px;
  z-index: 5;
`;
const FrameChild6 = styled.img`
  position: absolute;
  top: -0.1px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 5;
`;
const BuyNow2 = styled.b`
  position: absolute;
  top: 11px;
  left: 35px;
  font-size: var(--font-size-smi);
  font-family: var(--font-mulish);
  color: var(--color-darkslategray-400);
  text-align: left;
  z-index: 6;
`;
const Image100Traced2 = styled.img`
  position: absolute;
  top: 19.9px;
  left: 205.2px;
  width: 19.9px;
  height: 17.3px;
  z-index: 6;
`;
const FrameChild7 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-6xl);
  background-color: var(--color-lightsteelblue);
  width: 100%;
  height: 100%;
  display: none;
`;
const HeaderFrame = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-6xl);
  background: linear-gradient(
    267.38deg,
    #e5e5e5 36.36%,
    rgba(229, 229, 229, 0)
  );
  width: 100%;
  height: 100%;
`;
const New = styled.div`
  position: absolute;
  top: 2.1px;
  left: 31px;
  letter-spacing: -0.28px;
  line-height: 18px;
  font-weight: 500;
  z-index: 2;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 12.9px;
  left: 13px;
  border-radius: var(--br-6xl);
  background-color: var(--color-lightsteelblue);
  width: 84px;
  height: 25px;
  z-index: 6;
`;
const Image223Parent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xl);
  width: 100%;
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 5;
  font-size: var(--font-size-4xs);
  background-image: ${(p) => p.propBackgroundImage2};
`;
const RectangleParent1 = styled.div`position: absolute;
  top: 50px;
  left: 610px;
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  width: 241px;
  height: 384px;
  z-index: 4;
  top: ${(p) => p.propTop4}
  left: ${(p) => p.propLeft4}
`;
const Div4 = styled.div`
  position: absolute;
  top: 263px;
  left: 9px;
  font-size: var(--font-size-xl);
  font-weight: 600;
  display: inline-block;
  width: 78px;
  height: 11px;
  white-space: nowrap;
  z-index: 8;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const YemeralyWingsDiamond2 = styled.div`
  position: absolute;
  top: 291.9px;
  left: 9px;
  letter-spacing: -0.28px;
  line-height: 18px;
  z-index: 8;
`;
const ViewSimilar2 = styled.div`
  position: absolute;
  top: 352.9px;
  left: 27px;
  letter-spacing: -0.28px;
  line-height: 18px;
  z-index: 8;
`;
const Div5 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 600;
  display: inline-block;
  width: 48px;
  height: 11px;
  white-space: nowrap;
  z-index: 9;
`;
const FrameChild8 = styled.div`
  position: absolute;
  top: 8.9px;
  left: 8px;
  background-color: var(--color-darkslategray-400);
  width: 45px;
  height: 1px;
  z-index: 10;
`;
const Image136Traced3 = styled.img`
  position: absolute;
  top: 355.9px;
  left: 5.9px;
  width: 13px;
  height: 13px;
  z-index: 8;
`;
const FrameChild9 = styled.img`
  position: absolute;
  top: 261.9px;
  left: 203.3px;
  width: 21.9px;
  height: 70.6px;
  z-index: 8;
`;
const OnMakingCharges2 = styled.b`
  position: absolute;
  top: 318.9px;
  left: 7px;
  font-size: var(--font-size-2xs);
  letter-spacing: -0.28px;
  line-height: 18px;
  display: inline-block;
  color: var(--color-seagreen);
  width: 159px;
  height: 10px;
  z-index: 8;
`;
const RectangleParent2 = styled.div`
  position: absolute;
  top: 13.9px;
  left: 8px;
  border-radius: var(--br-xl);
  background-color: var(--color-aliceblue);
  width: 84px;
  height: 25px;
  z-index: 9;
`;
const Image100Traced3 = styled.img`
  position: absolute;
  top: 19.9px;
  left: 203.2px;
  width: 19.9px;
  height: 17.3px;
  z-index: 9;
`;
const Image217Parent = styled.div`
  position: absolute;
  top: 0px;
  left: 1px;
  border-radius: var(--br-xl);
  width: 100%;
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 8;
  font-size: var(--font-size-4xs);
  background-image: ${(p) => p.propBackgroundImage3};
`;
const FrameChild10 = styled.img`
  position: absolute;
  top: -0.1px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 8;
`;
const BuyNow3 = styled.b`
  position: absolute;
  top: 11px;
  left: 35px;
  font-size: var(--font-size-smi);
  font-family: var(--font-mulish);
  color: var(--color-darkslategray-400);
  text-align: left;
  z-index: 9;
`;
const RectangleParent3 = styled.div`position: absolute;
  top: 49px;
  left: 876px;
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  width: 241px;
  height: 384px;
  z-index: 7;
  top: ${(p) => p.propTop5}
  left: ${(p) => p.propLeft5}
`;
const Image136Traced4 = styled.img`
  position: absolute;
  top: 355.9px;
  left: 5px;
  width: 13px;
  height: 13px;
  z-index: 8;
`;
const FrameChild11 = styled.img`
  position: absolute;
  top: 263.9px;
  left: 202.3px;
  width: 21.9px;
  height: 70.6px;
  z-index: 8;
`;
const RectangleParent4 = styled.div`
  position: absolute;
  top: 12.9px;
  left: 9px;
  border-radius: var(--br-xl);
  background-color: var(--color-aliceblue);
  width: 84px;
  height: 25px;
  z-index: 9;
`;
const Image100Traced4 = styled.img`
  position: absolute;
  top: 68.9px;
  left: 203.3px;
  width: 19.9px;
  height: 17.3px;
  z-index: 9;
`;
const Image112Parent = styled.div`
  position: absolute;
  top: 1px;
  left: 0px;
  border-radius: var(--br-xl);
  width: 100%;
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 8;
  font-size: var(--font-size-4xs);
  background-image: ${(p) => p.propBackgroundImage4};
`;
const RectangleParent5 = styled.div`position: absolute;
  top: 49px;
  left: 1144px;
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  width: 241px;
  height: 384px;
  z-index: 7;
  top: ${(p) => p.propTop6}
  left: ${(p) => p.propLeft6}
`;
const RectangleParent6 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--color-whitesmoke-100);
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const OurTeamReviewsFrameChild = styled.div`position: absolute;
  top: 433.9px;
  left: 851px;
  border-radius: var(--br-3xs);
  background-color: var(--color-gainsboro-500);
  filter: blur(25px);
  width: 241px;
  height: 384px;
  transform:  rotate(180deg);
  transform-origin: 0 0;
  display: none;
  z-index: 3;
  top: ${(p) => p.propTop7}
  left: ${(p) => p.propLeft7}
`;
const OurTeamReviewsFrameItem = styled.div`position: absolute;
  top: 433.9px;
  left: 1117px;
  border-radius: var(--br-3xs);
  background-color: var(--color-gainsboro-500);
  filter: blur(25px);
  width: 241px;
  height: 384px;
  transform:  rotate(180deg);
  transform-origin: 0 0;
  display: none;
  z-index: 3;
  top: ${(p) => p.propTop8}
  left: ${(p) => p.propLeft8}
`;
const OurTeamReviewsFrameInner = styled.div`position: absolute;
  top: 349.9px;
  left: 554px;
  border-radius: 50%;
  background-color: var(--color-whitesmoke-500);
  filter: blur(4px);
  width: 10px;
  height: 3px;
  display: none;
  z-index: 4;
  top: ${(p) => p.propTop9}
  left: ${(p) => p.propLeft9}
`;
const EllipseDiv = styled.div`position: absolute;
  top: 349.9px;
  left: 554px;
  border-radius: 50%;
  background-color: var(--color-whitesmoke-500);
  filter: blur(4px);
  width: 10px;
  height: 3px;
  display: none;
  z-index: 5;
  top: ${(p) => p.propTop10}
  left: ${(p) => p.propLeft10}
`;
const OurTeamReviewsFrameChild1 = styled.div`position: absolute;
  top: 349.9px;
  left: 554px;
  border-radius: 50%;
  background-color: var(--color-whitesmoke-500);
  filter: blur(4px);
  width: 10px;
  height: 3px;
  display: none;
  z-index: 6;
  top: ${(p) => p.propTop11}
  left: ${(p) => p.propLeft11}
`;
const OurTeamReviewsFrameChild2 = styled.div`position: absolute;
  top: 349.9px;
  left: 554px;
  border-radius: 50%;
  background-color: var(--color-whitesmoke-500);
  filter: blur(4px);
  width: 10px;
  height: 3px;
  display: none;
  z-index: 7;
  top: ${(p) => p.propTop12}
  left: ${(p) => p.propLeft12}
`;
const OurTeamReviewsFrameChild3 = styled.div`position: absolute;
  top: 349.9px;
  left: 911px;
  border-radius: 50%;
  background-color: var(--color-whitesmoke-500);
  filter: blur(4px);
  width: 10px;
  height: 3px;
  display: none;
  z-index: 4;
  top: ${(p) => p.propTop13}
  left: ${(p) => p.propLeft13}
`;
const OurTeamReviewsFrameChild4 = styled.div`position: absolute;
  top: 349.9px;
  left: 911px;
  border-radius: 50%;
  background-color: var(--color-whitesmoke-500);
  filter: blur(4px);
  width: 10px;
  height: 3px;
  display: none;
  z-index: 5;
  top: ${(p) => p.propTop14}
  left: ${(p) => p.propLeft14}
`;
const OurTeamReviewsFrameChild5 = styled.div`position: absolute;
  top: 349.9px;
  left: 911px;
  border-radius: 50%;
  background-color: var(--color-whitesmoke-500);
  filter: blur(4px);
  width: 10px;
  height: 3px;
  display: none;
  z-index: 6;
  top: ${(p) => p.propTop15}
  left: ${(p) => p.propLeft15}
`;
const OurTeamReviewsFrameChild6 = styled.div`position: absolute;
  top: 433.9px;
  left: 1385px;
  border-radius: var(--br-3xs);
  background-color: var(--color-gainsboro-500);
  filter: blur(25px);
  width: 241px;
  height: 384px;
  transform:  rotate(180deg);
  transform-origin: 0 0;
  display: none;
  z-index: 3;
  top: ${(p) => p.propTop16}
  left: ${(p) => p.propLeft16}
`;
const OurTeamReviewsFrameChild7 = styled.div`position: absolute;
  top: 349.9px;
  left: 1179px;
  border-radius: 50%;
  background-color: var(--color-whitesmoke-500);
  filter: blur(4px);
  width: 10px;
  height: 3px;
  display: none;
  z-index: 4;
  top: ${(p) => p.propTop17}
  left: ${(p) => p.propLeft17}
`;
const OurTeamReviewsFrameChild8 = styled.div`position: absolute;
  top: 349.9px;
  left: 1179px;
  border-radius: 50%;
  background-color: var(--color-whitesmoke-500);
  filter: blur(4px);
  width: 10px;
  height: 3px;
  display: none;
  z-index: 5;
  top: ${(p) => p.propTop18}
  left: ${(p) => p.propLeft18}
`;
const OurTeamReviewsFrameChild9 = styled.div`position: absolute;
  top: 349.9px;
  left: 1179px;
  border-radius: 50%;
  background-color: var(--color-whitesmoke-500);
  filter: blur(4px);
  width: 10px;
  height: 3px;
  display: none;
  z-index: 6;
  top: ${(p) => p.propTop19}
  left: ${(p) => p.propLeft19}
`;
const OurTeamReviewsFrameRoot = styled.div`
  height: 504px;
  flex: 1;
  position: relative;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-darkslategray-400);
  font-family: var(--font-mulish);
`;

const OurTeamReviewsFrame = ({
  image139,
  image100Traced,
  image136Traced,
  rectangle1932,
  group7490,
  image136Traced1,
  group7492,
  image116,
  image100Traced1,
  rectangle2106,
  image136Traced2,
  group7495,
  rectangle2107,
  image223,
  image100Traced2,
  image136Traced3,
  group7498,
  image217,
  image100Traced3,
  rectangle2108,
  image136Traced4,
  group7509,
  image112,
  image100Traced4,
  rectangle2510,
  propTop,
  propLeft,
  propTop1,
  propLeft1,
  propTop2,
  propLeft2,
  propBackgroundImage,
  propTop3,
  propLeft3,
  propBackgroundImage1,
  propTop4,
  propLeft4,
  propBackgroundImage2,
  propTop5,
  propLeft5,
  propBackgroundImage3,
  propTop6,
  propLeft6,
  propBackgroundImage4,
  propTop7,
  propLeft7,
  propTop8,
  propLeft8,
  propTop9,
  propLeft9,
  propTop10,
  propLeft10,
  propTop11,
  propLeft11,
  propTop12,
  propLeft12,
  propTop13,
  propLeft13,
  propTop14,
  propLeft14,
  propTop15,
  propLeft15,
  propTop16,
  propLeft16,
  propTop17,
  propLeft17,
  propTop18,
  propLeft18,
  propTop19,
  propLeft19,
}) => {
  return (
    <OurTeamReviewsFrameRoot>
      <RectangleParent6>
        <FrameChild />
        <FrameChild />
        <TextBox />
        <FrameInner propTop={propTop} propLeft={propLeft} />
        <RectangleDiv propTop1={propTop1} propLeft1={propLeft1} />
        <RectangleGroup propTop2={propTop2} propLeft2={propLeft2}>
          <FrameChild1 />
          <Image139Parent propBackgroundImage={propBackgroundImage}>
            <Image139Icon alt="" src={image139} />
            <RectangleContainer>
              <FrameChild2 />
              <DownloadApplicationFrame />
              <Trending>TRENDING</Trending>
            </RectangleContainer>
            <Image100Traced alt="" src={image100Traced} />
          </Image139Parent>
          <Div>₹22,323</Div>
          <YemeralyWingsDiamond>Yemeraly Wings Diamond...</YemeralyWingsDiamond>
          <ViewSimilar>View Similar</ViewSimilar>
          <CTAButton>
            <Div1>₹22,323</Div1>
            <WhyGarnet />
          </CTAButton>
          <Image136Traced alt="" src={image136Traced} />
          <ContactUs>
            <ContactUsChild alt="" src={rectangle1932} />
            <BuyNow>Buy Now</BuyNow>
          </ContactUs>
          <GroupIcon loading="eager" alt="" src={group7490} />
          <OnOffMaking>10 % on off Making Charges</OnOffMaking>
        </RectangleGroup>
        <FrameDiv propTop3={propTop3} propLeft3={propLeft3}>
          <FrameChild1 />
          <Div2>₹22,323</Div2>
          <YemeralyWingsDiamond1>
            Yemeraly Wings Diamond...
          </YemeralyWingsDiamond1>
          <ViewSimilar1>View Similar</ViewSimilar1>
          <CTAButton>
            <Div3>₹22,323</Div3>
            <SecondaryTextFrame />
          </CTAButton>
          <Image136Traced1 alt="" src={image136Traced1} />
          <FrameChild3 loading="eager" alt="" src={group7492} />
          <OnMakingCharges>10 % on Making Charges</OnMakingCharges>
          <Image116Parent propBackgroundImage1={propBackgroundImage1}>
            <Image139Icon alt="" src={image116} />
            <Image100Traced1 alt="" src={image100Traced1} />
            <GroupDiv>
              <FrameChild4 />
              <DownloadApplicationFrame />
              <BestSeller>BEST SELLER</BestSeller>
            </GroupDiv>
          </Image116Parent>
          <ContactUs>
            <RectangleIcon alt="" src={rectangle2106} />
            <BuyNow1>Buy Now</BuyNow1>
          </ContactUs>
        </FrameDiv>
        <RectangleParent1 propTop4={propTop4} propLeft4={propLeft4}>
          <FrameChild1 />
          <Div>₹22,323</Div>
          <YemeralyWingsDiamond>Yemeraly Wings Diamond...</YemeralyWingsDiamond>
          <ViewSimilar>View Similar</ViewSimilar>
          <CTAButton>
            <Div1>₹22,323</Div1>
            <WhyGarnet />
          </CTAButton>
          <Image136Traced2 alt="" src={image136Traced2} />
          <FrameChild5 loading="eager" alt="" src={group7495} />
          <OnMakingCharges1>10 % on Making Charges</OnMakingCharges1>
          <ContactUs>
            <FrameChild6 alt="" src={rectangle2107} />
            <BuyNow2>Buy Now</BuyNow2>
          </ContactUs>
          <Image223Parent propBackgroundImage2={propBackgroundImage2}>
            <Image139Icon alt="" src={image223} />
            <Image100Traced2 alt="" src={image100Traced2} />
            <RectangleParent>
              <FrameChild7 />
              <HeaderFrame />
              <New>NEW</New>
            </RectangleParent>
          </Image223Parent>
        </RectangleParent1>
        <RectangleParent3 propTop5={propTop5} propLeft5={propLeft5}>
          <FrameChild1 />
          <Div4>₹22,323</Div4>
          <YemeralyWingsDiamond2>
            Yemeraly Wings Diamond...
          </YemeralyWingsDiamond2>
          <ViewSimilar2>View Similar</ViewSimilar2>
          <CTAButton>
            <Div5>₹22,323</Div5>
            <FrameChild8 />
          </CTAButton>
          <Image136Traced3 alt="" src={image136Traced3} />
          <FrameChild9 loading="eager" alt="" src={group7498} />
          <OnMakingCharges2>10 % on Making Charges</OnMakingCharges2>
          <Image217Parent propBackgroundImage3={propBackgroundImage3}>
            <Image139Icon alt="" src={image217} />
            <RectangleParent2>
              <FrameChild2 />
              <DownloadApplicationFrame />
              <Trending>TRENDING</Trending>
            </RectangleParent2>
            <Image100Traced3 alt="" src={image100Traced3} />
          </Image217Parent>
          <ContactUs>
            <FrameChild10 alt="" src={rectangle2108} />
            <BuyNow3>Buy Now</BuyNow3>
          </ContactUs>
        </RectangleParent3>
        <RectangleParent5 propTop6={propTop6} propLeft6={propLeft6}>
          <FrameChild1 />
          <Div4>₹22,323</Div4>
          <YemeralyWingsDiamond2>
            Yemeraly Wings Diamond...
          </YemeralyWingsDiamond2>
          <ViewSimilar2>View Similar</ViewSimilar2>
          <CTAButton>
            <Div5>₹22,323</Div5>
            <FrameChild8 />
          </CTAButton>
          <Image136Traced4 alt="" src={image136Traced4} />
          <FrameChild11 alt="" src={group7509} />
          <OnMakingCharges2>10 % on Making Charges</OnMakingCharges2>
          <Image112Parent propBackgroundImage4={propBackgroundImage4}>
            <Image139Icon alt="" src={image112} />
            <RectangleParent4>
              <FrameChild2 />
              <DownloadApplicationFrame />
              <Trending>TRENDING</Trending>
            </RectangleParent4>
            <Image100Traced4 alt="" src={image100Traced4} />
          </Image112Parent>
          <ContactUs>
            <RectangleIcon alt="" src={rectangle2510} />
            <BuyNow1>Buy Now</BuyNow1>
          </ContactUs>
        </RectangleParent5>
      </RectangleParent6>
      <OurTeamReviewsFrameChild propTop7={propTop7} propLeft7={propLeft7} />
      <OurTeamReviewsFrameItem propTop8={propTop8} propLeft8={propLeft8} />
      <OurTeamReviewsFrameInner propTop9={propTop9} propLeft9={propLeft9} />
      <EllipseDiv propTop10={propTop10} propLeft10={propLeft10} />
      <OurTeamReviewsFrameChild1
        propTop11={propTop11}
        propLeft11={propLeft11}
      />
      <OurTeamReviewsFrameChild2
        propTop12={propTop12}
        propLeft12={propLeft12}
      />
      <OurTeamReviewsFrameChild3
        propTop13={propTop13}
        propLeft13={propLeft13}
      />
      <OurTeamReviewsFrameChild4
        propTop14={propTop14}
        propLeft14={propLeft14}
      />
      <OurTeamReviewsFrameChild5
        propTop15={propTop15}
        propLeft15={propLeft15}
      />
      <OurTeamReviewsFrameChild6
        propTop16={propTop16}
        propLeft16={propLeft16}
      />
      <OurTeamReviewsFrameChild7
        propTop17={propTop17}
        propLeft17={propLeft17}
      />
      <OurTeamReviewsFrameChild8
        propTop18={propTop18}
        propLeft18={propLeft18}
      />
      <OurTeamReviewsFrameChild9
        propTop19={propTop19}
        propLeft19={propLeft19}
      />
    </OurTeamReviewsFrameRoot>
  );
};

export default OurTeamReviewsFrame;
