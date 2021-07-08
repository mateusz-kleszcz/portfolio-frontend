import { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeText } from '../../../actions/screenshotGeneratorActions/changeText';
import { AppState } from '../../../store';
import styles from '../../../styles/ScreenshotGenerator.module.scss'

const TextInputs = (): ReactElement => {

    const dispatch = useDispatch()

    const { text } = useSelector((state: AppState) => state.screenshotGeneratorReducer)

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeText(text))
    }

    return (
        <div className={styles.textInputs}>
            <textarea
                name="text"
                id="tex"
                cols={30}
                rows={10}
                value={text}
                onChange={handleTextChange}
            />
        </div>
    );
};

export default TextInputs;