<template>
    <main class="wiki">
        <div class="container">
            <h1 class="wiki__title">The Rick and Morty</h1>
            <CharForm 
            @createName="getInputValName" 
            @createStatus="getInputValStatus" 
            @createReset="reset"/>
            <div class="wrapper__pagination">
                <div class="wrapper__pagination_btn" v-for="pageNumber in totalPage" :key="pageNumber"
                    :class="{ 'wrapper__pagination_current': pageNumber === page }" @click="setPage(pageNumber)">
                    {{ pageNumber }}
                </div>
            </div>
            <div class="wiki__result">Кол-во найденных статей: {{ currentPageAmount }}</div>
            <div class="wrapper">

                <CharList :character="filterName" v-if="!isCharLoading && !isError" />
                <div v-else-if="isError" class="wrapper__loading">Ошибка загрузки</div>
                <div v-else class="wrapper__loading">Идет загрузка...</div>

            </div>
        </div>
    </main>
</template>

<script>
import CharForm from '@/components/CharForm';
import CharList from "@/components/CharList";
import useChar from '@/hooks/useChar';
import useFilterStatus from '@/hooks/useFilterStatus';
import useFilterName from '@/hooks/useFilterName';
import usePagination from '@/hooks/usePagination';
import useSearch from '@/hooks/useSearch';


export default {
    components: {
        CharForm, CharList
    },
    data() {
        return {
        }
    },
    setup() {
        const {setPage, page} = usePagination();
        const{ 
            allChar, 
            allEpisod,  
            isCharLoading,
            isError,
            totalPage,
            currentPageAmount} = useChar(page);

        const {getInputValName,getInputValStatus, reset, searchStatus, searchName} = useSearch();
        const {filterStatus} = useFilterStatus(allChar, searchStatus);
        const {filterName} = useFilterName(filterStatus, allEpisod, searchName);
       

        return {
            allChar,
            allEpisod,
            isCharLoading,
            isError,
            currentPageAmount,
            filterName,
            totalPage,
            page,
            setPage,
            getInputValName,
            getInputValStatus,
            reset,
            searchName,
            searchStatus
        }
    }
}
</script>

<style lang="scss">
@import "../src/styles/global.scss"
</style>