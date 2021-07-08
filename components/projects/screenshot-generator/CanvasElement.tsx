import { ReactElement, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../store";

const CanvasElement = (): ReactElement => {

    const canvasRef = useRef<HTMLCanvasElement>(null)

    const { backgroundColor, phone } = useSelector((state: AppState) => state.screenshotGeneratorReducer)

    useEffect(() => {
        if (canvasRef.current !== null) {
            const canvas = canvasRef.current
            const context = canvas.getContext('2d')
            context!.fillStyle = backgroundColor
            context!.fillRect(0, 0, canvas.width, canvas.height)
        }
    }, [backgroundColor])

    // useEffect(() => {
    //     if (canvasRef.current !== null) {
    //         const canvas = canvasRef.current
    //         const context = canvas.getContext('2d')
    //         const { width, height } = canvas
    //         const imageData = context?.getImageData(0, 0, width, height)
    //         const data = imageData?.data
    //         console.log(data)
    //     }
    // }, [])

    return (
        <canvas
            id="background"
            width={400}
            height={600}
            ref={canvasRef}
        >
        </canvas>
    );
};

export default CanvasElement;