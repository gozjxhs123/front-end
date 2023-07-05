import styled from "styled-components"
import { Link } from "react-router-dom"
import CAI from "../../../assets/CAI.png"

const FirstSection = () => {
    return (
        <FirstSectionWrapper>
            <LeftFirstSection>
                <Title>Ai로 당신의 삶을 안전하게</Title>
                <Text>
                    <div>
                        '여러분의 안전을 지키는 새로운 차원을 경험해보세요.
                    </div>
                    <div>
                        넘어지는 사람을 신속하게 감지하고 즉시 대응함으로써,
                    </div>
                    <div>일상 속의 위험을 최소화합니다.</div>
                    <div>더 이상 걱정하지 않고 편안하게 생활할 수 있는</div>
                    <div>안전한 환경을 제공해드립니다.</div>
                </Text>

                <LocateButton>
                    <Link to="/Login">
                        <StartButton>시작하기</StartButton>
                    </Link>
                </LocateButton>
            </LeftFirstSection>
            <RightFirstSection>
                <CAIImg src={CAI} />
            </RightFirstSection>
        </FirstSectionWrapper>
    )
}

export default FirstSection

const FirstSectionWrapper = styled.div`
    padding-top: 6.2vh;
    display: flex;
    width: 100%;
    height: calc(90% - 6.2vh);
    background: linear-gradient(180deg, rgba(99, 232, 135, 0) 0%, #14dd4c 100%);
    flex-direction: row;
    align-items: center;
`

const LeftFirstSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 45px;
    width: 50%;
    padding-left: 11.5vw;
    align-items: center;
`

const RightFirstSection = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    padding-right: 11.5vw;
    align-items: center;
`

const StartButton = styled.button`
    width: 10.625rem;
    height: 3rem;
    padding: 0;
    padding: 0;
    border-radius: 50px;
    border: none;
    font-size: 18px;
    background-color: #ff7283;
`

const CAIImg = styled.img`
    width: 33.5vw;
    height: 33.5vw;
`

const Title = styled.span`
    width: 100%;
    display: flex;
    flex-direction: flex-end;
    font-size: 2.2rem;
`

const LocateButton = styled.span`
    width: 100%;
    display: flex;
    flex-direction: flex-end;
`

const Text = styled.span`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 200px;
`
