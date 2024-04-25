import useSwr from 'swr'
import { BASE_URL } from '../utils/comman'



export const useRequest = (path, name) => {
    if (!path) {
        throw new Error('Path is required')
    }

    const url = name ? BASE_URL + path + '/' + name : BASE_URL + path
    const { data, error } = useSwr(url)

    return { data, error }
}