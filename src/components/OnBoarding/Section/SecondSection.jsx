import styled from "styled-components"
import Computer from "../../../assets/Computer.svg"
import Person from "../../../assets/Person.svg"

const SecondSection = () => {
    return (
        <SecondSectionWrapper>
            <LeftFirstSection>
                <EBox>
                    <Title>AI 기반 분석</Title>
                    <Explain>
                        MobileNet 기반의 PoseNet을 이용하여 행동을 Machine
                        Learning 기술을 활용하여 넘어짐을 에측합니다.
                    </Explain>
                    <PersonWrapper>
                        <PersonImg src={Person} />
                    </PersonWrapper>
                </EBox>
            </LeftFirstSection>
            <RightFirstSection>
                <EBox>
                    <Title>체계적 시스템</Title>
                    <Explain>
                        관리자 별로 로그가 반 영구히 저장되어. 체계적인 모니터링
                        & 관리가 가능합니다.
                    </Explain>
                    <ComputerWrapper>
                        <ComputerImg src={Computer} />
                    </ComputerWrapper>
                </EBox>
            </RightFirstSection>
        </SecondSectionWrapper>
    )
}

export default SecondSection

const SecondSectionWrapper = styled.div`
    width: 100vw;
    height: 60vh;
    display: flex;
    flex-direction: row;
`

const LeftFirstSection = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 10vw;
    align-items: center;
    width: 50vw;
    height: 100%;
`

const RightFirstSection = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-left: 10vw;
    align-items: center;
    width: 50vw;
    height: 100%;
`

const EBox = styled.div`
    border-radius: 40px;
    border: 3px solid var(--main-pink, #ff7283);
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.25);
    padding: 3% 2% 3% 2%;
    box-sizing: border-box;
    width: 50%;
    height: 75%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
`

const Title = styled.span`
    color: #000;
    font-size: 1.5rem;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    align-items: center;
`

const Explain = styled.span`
    color: #000;
    text-align: center;
    font-size: 1rem;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const PersonWrapper = styled.div``

const PersonImg = styled.img`
    width: 132px;
    height: 202px;
`

const ComputerWrapper = styled.div``

const ComputerImg = styled.img`
    width: 180px;
    height: 180px;
`
