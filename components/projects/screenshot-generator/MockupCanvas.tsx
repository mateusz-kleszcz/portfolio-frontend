import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../store";

const imageSrc = '/Plik_036.jpeg'

interface Coordinates {
    startX: number,
    startY: number,
    endX: number,
    endY: number,
}

const MockupCanvas = () => {

    const { phone, size } = useSelector((state: AppState) => state.screenshotGeneratorReducer)

    const [isMockupLoaded, setIsMockupLoaded] = useState(false)

    const mockupElemnent = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        if (mockupElemnent.current !== null) {
            setIsMockupLoaded(false)
            const canvas = mockupElemnent.current
            const context = canvas.getContext('2d')
            context!.imageSmoothingEnabled = false
            const image = new Image()
            image.src = `/${phone}.png`
            image.onload = () => {
                const scale = canvas.width / image.width
                canvas.height = image.height * scale
                context!.drawImage(image, 0, 0, canvas.width, image.height * scale)
                setIsMockupLoaded(true)
            }
        }
    }, [phone, size])

    useEffect(() => {
        if (isMockupLoaded) {
            if (mockupElemnent.current !== null) {
                const canvas = mockupElemnent.current
                const ctx = canvas.getContext('2d')
                const imageData = ctx!.getImageData(0, 0, canvas.width, canvas.height)
                const data: Uint8ClampedArray = imageData!.data
                const coordinates: Coordinates = {
                    startX: 0,
                    startY: 0,
                    endX: 0,
                    endY: 0,
                }
                console.log(data)
                for (let i = 0; i < data.length; i += 4) {

                    if (
                        data[i] == 0
                        && data[i + 1] == 255
                        && data[i + 2] == 19
                    ) {
                        const value = Math.floor(i / 4 / 1080) - 1
                        coordinates.startY = value
                        break
                    }
                }
                for (let i = data.length - 1; i >= 0; i -= 4) {
                    if (
                        data[i - 3] == 0
                        && data[i - 2] == 255
                        && data[i - 1] == 19
                    ) {
                        const value = Math.floor(i / 4 / 1080) + 1
                        coordinates.endY = value
                        break
                    }
                }
                for (let i = 0; i < 1080; i += 4) {
                    for (let j = 0; j < data.length; j += 4 * 1080) {
                        const pixel = 4 * i + j * 1080
                        if (
                            data[pixel] == 0
                            && data[pixel + 1] == 255
                            && data[pixel + 2] == 19
                        ) {
                            if (coordinates.startX == 0)
                                coordinates.startX = i - 1
                            else
                                coordinates.endX = i + 2
                            break
                        }
                    }
                }
                const chujek = new Image()
                chujek.src = imageSrc
                chujek.onload = () => {
                    const { startX, startY, endX, endY } = coordinates
                    // console.log(startX, startY, endX, endY)
                    ctx!.drawImage(chujek, startX, startY, endX - startX, endY - startY)
                }
            }
        }
    }, [isMockupLoaded])

    return (
        <>
            <canvas
                id="mockup"
                width={1080}
                ref={mockupElemnent}
            >
            </canvas>
        </>
    );
};

export default MockupCanvas;