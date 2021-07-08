import { AppActions, CHANGE_ALBUM_FAIL, CHANGE_ALBUM_SUCCESS } from "../../types/actions"
import { Dispatch } from "redux"
import { Song } from "../../types/Player"

const albumChangeSuccess = (selectedAlbumSongs: Song[], selectedAlbumName: string): AppActions => ({
    type: CHANGE_ALBUM_SUCCESS,
    selectedAlbumSongs,
    selectedAlbumName
})

const albumChangeFail = (err: string): AppActions => ({
    type: CHANGE_ALBUM_FAIL,
    errorMessage: err,
})

export const changeAlbum = (_id: string, albumName: string) => async (dispatch: Dispatch<AppActions>) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ADDRESS}/api/player/albums`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ _id })
        })
        const json = await res.json()
        const { files } = json
        dispatch(albumChangeSuccess(files, albumName))
    } catch (err) {
        dispatch(albumChangeFail(err))
    }
}