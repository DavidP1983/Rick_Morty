import { ref } from "vue";

export default function usePagination() {
    const page = ref(1);

    const setPage = (pageNumber) => {
        return page.value = pageNumber;
    };

    return {
        page,
        setPage
    }
}