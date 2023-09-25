import {$host} from "./index";

export const fetchAllList = async () => {
    const {data} = await $host.get('api/getAll')
    return data
}

export const fetchSortedList = async () => {
    const {data} = await $host.get('api/get/get')
    return data
}