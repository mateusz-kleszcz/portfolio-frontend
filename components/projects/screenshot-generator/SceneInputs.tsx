import { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBackgroundColor } from '../../../actions/screenshotGeneratorActions/changeBackgroundColor';
import { changePhone } from '../../../actions/screenshotGeneratorActions/changePhone';
import { changeSize } from '../../../actions/screenshotGeneratorActions/changeSize';
import { AppState } from '../../../store';
import styles from '../../../styles/ScreenshotGenerator.module.scss'

const SceneInputs = (): ReactElement => {

    const dispatch = useDispatch()

    const { backgroundColor, phone, size } = useSelector((state: AppState) => state.screenshotGeneratorReducer)

    const handleBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeBackgroundColor(e.target.value))
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changePhone(e.target.value))
    }

    const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const size = parseInt(e.target.value)
        dispatch(changeSize(size))
    }

    const phones = ['Iphone 11']

    return (
        <div className={styles.sceneInputs}>
            <label htmlFor="background">Background Color:</label>
            <input
                type="color"
                name="background"
                id="background"
                value={backgroundColor}
                onChange={handleBackgroundChange}
            />
            <label htmlFor="layout">Layout:</label>
            <select name="layout" id="layout">

            </select>
            <label htmlFor="phone">Phone:</label>
            <select name="phone" id="phone" onChange={handlePhoneChange}>
                {phones.map((phone, index) => <option value={phone} key={index}>{phone}</option>)}
            </select>
            <label htmlFor="phone-size">Phone Size:</label>
            <input
                type="range"
                name="phone-size"
                id="phone-size"
                value={size}
                onChange={handleSizeChange}
                min={120}
                max={1080}
            />
            <div>{size}</div>
        </div>
    );
};

export default SceneInputs;