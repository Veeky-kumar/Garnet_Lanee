import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-mulish: Mulish;
--font-inter: Inter;
--font-nunito: Nunito;

/* font sizes */
--font-size-4xs: 9px;
--font-size-xs: 12px;
--font-size-5xs: 8px;
--font-size-mini: 15px;
--font-size-smi: 13px;
--font-size-2xs: 11px;
--font-size-lg: 18px;
--font-size-xl: 20px;
--font-size-base: 16px;
--font-size-3xs: 10px;
--font-size-5xs-5: 7.5px;

/* Colors */
--color-white: #fff;
--color-darkslategray-100: #474747;
--color-darkslategray-200: #413e3e;
--color-darkslategray-300: #323232;
--color-darkslategray-400: #302f2f;
--color-darkslategray-500: rgba(48, 47, 47, 0.7);
--color-whitesmoke-100: #f8f8f8;
--color-whitesmoke-200: #f8f6f6;
--color-whitesmoke-300: #f5f5f5;
--color-whitesmoke-400: #f0efef;
--color-whitesmoke-500: #f2eeee;
--color-whitesmoke-600: #efefef;
--color-whitesmoke-700: #eee;
--color-sandybrown-100: #feaa6f;
--color-sandybrown-200: #fe9a57;
--color-gray-100: #fafafa;
--color-gray-200: #807f7f;
--color-gray-300: rgba(0, 0, 0, 0.7);
--color-gray-400: rgba(0, 0, 0, 0.8);
--color-gray-500: rgba(255, 255, 255, 0.95);
--color-gray-600: rgba(255, 255, 255, 0.74);
--color-coral-100: #fd9149;
--color-coral-200: #f77433;
--color-khaki-100: #ffd588;
--color-khaki-200: #f8d686;
--color-khaki-300: rgba(255, 213, 136, 0.25);
--color-khaki-400: rgba(255, 220, 97, 0.74);
--color-lightgray-100: #d1cfcf;
--color-lightgray-200: rgba(209, 207, 207, 0.52);
--color-gainsboro-100: #e5e5e5;
--color-gainsboro-200: #e4e4e4;
--color-gainsboro-300: #e2e2e2;
--color-gainsboro-400: #dfe1df;
--color-gainsboro-500: #dfdddd;
--color-gainsboro-600: #d9d9d9;
--color-aliceblue: #dceff7;
--color-seagreen: #16a06f;
--color-lightsteelblue: #bccfff;
--color-mistyrose-100: #fde3e3;
--color-mistyrose-200: #f9dcdb;
--color-peachpuff: #ffcdaa;
--color-burlywood-100: #e6b591;
--color-burlywood-200: rgba(230, 181, 145, 0.09);
--color-black: #000;
--color-darkgray: #a09d9d;
--color-silver-100: #c4c4c4;
--color-silver-200: #bcb7b0;
--color-silver-300: rgba(196, 196, 196, 0.15);
--color-silver-400: rgba(194, 194, 194, 0.5);
--color-forestgreen: #2d9143;
--color-lightpink: #eea09c;
--color-red: #d91212;
--color-moccasin: #ffe3b9;
--color-darkslateblue: #2c3875;
--color-blueviolet: #531cc6;

/* Gaps */
--gap-52xl: 71px;
--gap-lg: 18px;
--gap-16xl: 35px;
--gap-xl: 20px;
--gap-6xs: 7px;
--gap-8xs: 5px;
--gap-125xl: 144px;
--gap-17xl: 36px;
--gap-53xl: 72px;
--gap-3xs: 10px;
--gap-smi: 13px;
--gap-mini: 15px;
--gap-sm: 14px;
--gap-94xl: 113px;
--gap-9xl: 28px;
--gap-37xl: 56px;
--gap-2xs: 11px;
--gap-10xs: 3px;
--gap-mid: 17px;
--gap-67xl: 86px;
--gap-24xl: 43px;
--gap-6xl: 25px;
--gap-xs: 12px;
--gap-5xl: 24px;
--gap-63xl: 82px;
--gap-22xl: 41px;
--gap-5xs: 8px;
--gap-4xl: 23px;
--gap-4xs: 9px;
--gap-20xl: 39px;
--gap-lgi: 19px;
--gap-10xl: 29px;
--gap-9xs: 4px;
--gap-2xl: 21px;
--gap-147xl: 166px;
--gap-64xl: 83px;
--gap-base: 16px;
--gap-11xs: 2px;
--gap-7xl: 26px;
--gap-35xl: 54px;
--gap-26xl: 45px;
--gap-3xl: 22px;
--gap-44xl: 63px;
--gap-12xl: 31px;
--gap-29xl: 48px;
--gap-14xl: 33px;
--gap-39xl: 58px;
--gap-7xs: 6px;
--gap-21xl: 40px;
--gap-50xl: 69px;
--gap-15xl: 34px;
--gap-56xl: 75px;
--gap-18xl: 37px;
--gap-42xl: 61px;
--gap-11xl: 30px;
--gap-437xl: 456px;
--gap-95xl: 114px;
--gap-209xl: 228px;
--gap-8xl: 27px;

/* Paddings */
--padding-base: 16px;
--padding-612xl: 631px;
--padding-641xl: 660px;
--padding-xl: 20px;
--padding-311xl: 330px;
--padding-296xl: 315px;
--padding-10xs: 3px;
--padding-52xl: 71px;
--padding-19xl: 38px;
--padding-57xl: 76px;
--padding-6xl: 25px;
--padding-16xl: 35px;
--padding-21xl: 40px;
--padding-12xs: 1px;
--padding-8xs: 5px;
--padding-38xl: 57px;
--padding-8xl: 27px;
--padding-9xl: 28px;
--padding-14xl: 33px;
--padding-4xs: 9px;
--padding-5xs: 8px;
--padding-7xs: 6px;
--padding-166xl: 185px;
--padding-27xl: 46px;
--padding-73xl: 92px;
--padding-9xs: 4px;
--padding-11xs: 2px;
--padding-47xl: 66px;
--padding-48xl: 67px;
--padding-24xl: 43px;
--padding-25xl: 44px;
--padding-75xl: 94px;
--padding-55xl: 74px;
--padding-71xl: 90px;
--padding-42xl: 61px;
--padding-18xl: 37px;
--padding-39xl: 58px;
--padding-xs: 12px;
--padding-3xs: 10px;
--padding-10xl: 29px;
--padding-15xl: 34px;
--padding-7xl: 26px;
--padding-2xs: 11px;
--padding-4xl: 23px;
--padding-lg: 18px;
--padding-20xl: 39px;
--padding-41xl: 60px;
--padding-3xl: 22px;
--padding-5xl: 24px;
--padding-6xs: 7px;
--padding-2xl: 21px;
--padding-91xl: 110px;
--padding-smi: 13px;
--padding-36xl: 55px;
--padding-mid: 17px;
--padding-51xl: 70px;
--padding-mini: 15px;
--padding-49xl: 68px;
--padding-sm: 14px;
--padding-lgi: 19px;
--padding-11xl: 30px;
--padding-13xl: 32px;
--padding-17xl: 36px;
--padding-615xl: 634px;
--padding-298xl: 317px;

/* Border radiuses */
--br-8xs: 5px;
--br-3xs: 10px;
--br-11xs: 2px;
--br-xl: 20px;
--br-6xl: 25px;
--br-10xs: 3px;
--br-31xl: 50px;
--br-41xl: 60px;
--br-21xl: 40px;

}
`;
