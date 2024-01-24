import styled from "styled-components";

const SubframeChild = styled.div`
  width: 1450px;
  height: 253px;
  position: relative;
  background: linear-gradient(88.43deg, #faefdb, rgba(218, 218, 218, 0));
  display: none;
  max-width: 100%;
`;
const TheInternationalGemological = styled.div`
  align-self: stretch;
  height: 60px;
  position: relative;
  line-height: 30px;
  display: inline-block;
  z-index: 1;
`;
const IgiHasEstablished = styled.div`
  width: 1149px;
  position: relative;
  letter-spacing: -0.28px;
  line-height: 30px;
  text-align: left;
  display: inline-block;
  max-width: 100%;
  z-index: 1;
`;
const ContentFrame = styled.div`
  width: 1227px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
  max-width: 100%;
`;
const TheIgiReport = styled.div`
  width: 1241px;
  position: relative;
  letter-spacing: -0.28px;
  line-height: 30px;
  text-align: left;
  display: inline-block;
  max-width: 100%;
  z-index: 1;
`;
const Subframe = styled.div`
  flex: 1;
  background: linear-gradient(88.43deg, #faefdb, rgba(218, 218, 218, 0));
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-20xl) var(--padding-48xl) var(--padding-41xl);
  box-sizing: border-box;
  gap: var(--gap-10xl);
  max-width: 100%;
  @media screen and (max-width: 1350px) {
    padding-left: var(--padding-14xl);
    padding-right: var(--padding-14xl);
    box-sizing: border-box;
  }
`;
const LinearFrame = styled.div`
  width: 1445px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const ParentContainerRoot = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  min-height: 292px;
  max-width: 100%;
  flex-shrink: 0;
  text-align: justify;
  font-size: var(--font-size-smi);
  color: var(--color-darkslategray-400);
  font-family: var(--font-mulish);
`;

const ParentContainer = () => {
  return (
    <ParentContainerRoot>
      <LinearFrame>
        <Subframe>
          <SubframeChild />
          <ContentFrame>
            <TheInternationalGemological>
              The International Gemological Institute (IGI) is the world’s
              largest independent gem certification and appraisal institute. The
              IGI is worldwide renowned for its quality services, extensive
              experience and know-how.
            </TheInternationalGemological>
            <IgiHasEstablished>
              IGI has established a network of 18 laboratories and gemological
              schools around the world located in the major diamonds hubs.
            </IgiHasEstablished>
          </ContentFrame>
          <TheIgiReport>
            The IGI Report or IGI certificate is an international passport which
            gives an accurate and unbiased opinion of diamonds (and other
            precious stones) based on the 4 C’s: cut, color, clarity and carat
            weight.
          </TheIgiReport>
        </Subframe>
      </LinearFrame>
    </ParentContainerRoot>
  );
};

export default ParentContainer;
