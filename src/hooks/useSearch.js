import { ref } from "vue";


export default function useSearch() {

    const searchName = ref('');
    const searchStatus = ref('');

    const getInputValName = (name) => {
        searchName.value = name;
    }
    const getInputValStatus = (status) => {
        searchStatus.value = status;
    }

    const reset = () => {
        searchName.value = '';
        searchStatus.value = '';
    }

    return {
        getInputValName,
        getInputValStatus,
        reset,
        searchName,
        searchStatus
    }

}