import {ref} from "vue";

const userId = ref()
const messages = ref()
const userInfo = ref()

export const userStore = () => {
    return {
        userId,
        messages,
        userInfo
    }
}