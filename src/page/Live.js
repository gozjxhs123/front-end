import Webcam from "react-webcam"
import { useCallback, useEffect, useRef, useState } from "react"
import styled from "styled-components"

const Live = () => {
    const webcamRef = useRef(null)
    const [value, setValue] = useState(1)

    const capture = () => {
        console.log(1)
        setValue(e => e + 1)
        const imgsrc = webcamRef.current.getScreenshot()
        console.log(imgsrc)
    }

    useEffect(() => {
        const capturetick = () => setTimeout(capture, 50000)
        // time : 5000
        const tick = capturetick()
        return () => clearTimeout(tick)
    }, [value])

    return (
        <Total>
            <WebcamSpace>
                <Webcam className="LiveCam" audio={false} ref={webcamRef} />
            </WebcamSpace>
            <Right>
                <Box>
                    <Top>
                        <DateLocate>
                            <Date>날짜</Date>
                        </DateLocate>
                        <HourLocate>
                            <Hour>시간</Hour>
                        </HourLocate>
                    </Top>
                    <Bottom></Bottom>
                </Box>
            </Right>
        </Total>
    )
}

export default Live

const Total = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: space-evenly;
    align-items: center;
`

const WebcamSpace = styled.div`
    & > .LiveCam {
        width: 80%;
    }
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 40%;
    height: 100%;
`

const Box = styled.div`
    border: 3px solid var(--main-green, #63e887);
    border-radius: 10px;
    box-shadow: 0px 4px 12px 1px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    width: 80%;
    height: 45%;
    display: flex;
`

const Top = styled.div`
    width: 100%;
    height: 12%;
    border-bottom: 3px solid var(--main-green, #63e887);
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const DateLocate = styled.div``

const Date = styled.span`
    display: flex;
    text-align: left;
    width: 13.5vw;
    padding-left: 2vw;
`

const HourLocate = styled.div``

const Hour = styled.span`
    display: flex;
    text-align: left;
    width: 13.5vw;
    padding-left: 3vw;
`

const Bottom = styled.div``
