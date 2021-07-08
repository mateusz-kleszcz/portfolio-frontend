import CanvasElement from "../../components/projects/screenshot-generator/CanvasElement";
import MockupCanvas from "../../components/projects/screenshot-generator/MockupCanvas";
import SceneInputs from "../../components/projects/screenshot-generator/SceneInputs"
import TextInputs from "../../components/projects/screenshot-generator/TextInputs";
import style from '../../styles/ScreenshotGenerator.module.scss'

const screenshotgenerator = () => {
    return (
        <div className={style.screenshotGenerator}>
            <CanvasElement />
            <MockupCanvas />
            <TextInputs />
            <SceneInputs />
        </div>
    );
};

export default screenshotgenerator;