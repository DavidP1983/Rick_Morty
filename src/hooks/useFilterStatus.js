import { computed } from "vue"

export default function useFilterStatus(allChar, searchStatus) {


    const filterStatus = computed(() => {
        return allChar.value.filter((item) => item.status.toLowerCase().includes(searchStatus.value))
    });

    return {
        filterStatus
    }
}