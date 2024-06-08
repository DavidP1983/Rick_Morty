
import { ref, onMounted, watchEffect } from "vue";

export default function useChar(page) {
    const allChar = ref([]);
    const allEpisod = ref([]);
    const isCharLoading = ref(true);
    const isError = ref(false);
    const currentPageAmount = ref(0);
    const totalPage = ref(10);


    const fetchingChar = async (pageNumber = 1) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`);
            if (!response.ok) {
                throw new Error(`Could not fetch data, status: ${response.status}`);
            }
            const res = await response.json();
            return res;

        } catch (e) {
            isCharLoading.value = false;
            isError.value = true;

        }
    }

    const fetchingEpisod = async () => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/episode/`);
            if (!response.ok) {
                throw new Error(`Could not fetch data, status: ${response.status}`);
            }
            const res = await response.json();
            return res;

        } catch (e) {
            isCharLoading.value = false;
            isError.value = true;

        }
    }

    const getAllPromise = async () => {
        const promise = Promise.all([fetchingChar(page.value), fetchingEpisod()]);
        promise.then((data) => {
            allChar.value = data[0].results;
            allEpisod.value = data[1].results;
        })
            .catch((e) => {
                console.log(e)
                console.error("ошибка");
            })
            .finally(() => {
                currentPageAmount.value = allChar.value.length;
                isCharLoading.value = false;
            })

    }

    onMounted(getAllPromise);
    watchEffect(getAllPromise);

    return {
        allChar,
        allEpisod,
        isCharLoading,
        isError,
        totalPage,
        currentPageAmount
    }

}

