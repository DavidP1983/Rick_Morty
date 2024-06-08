import { computed } from "vue";

export default function useFilterName(filterStatus, allEpisod, searchName) {

    const filterName = computed(() => {
        const res = filterStatus.value.filter((item) => item.name.toLowerCase().includes(searchName.value));
        return [res, allEpisod.value]
    });

    return {
        filterName
    }
}