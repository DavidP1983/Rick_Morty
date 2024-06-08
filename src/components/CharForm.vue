<template>
    <div class="form">
        <input type="text" v-model="searchQueryName" name="name" placeholder="Фильтрация по имени" class="form__input">
        <button type="button" class="form__button" @click="getInputValName">Применить</button>
    </div>
    <div class="form">
        <input type="text" v-model="searchQueryStatus" name="name" placeholder="Фильтрация по статусу" class="form__input">
        <button type="button" class="form__button" @click="getInputValStatus">Применить</button>
    </div>
    <button type="button" class="form__button reset" @click="reset">К персонажам</button>
</template>

<script>

export default {
    emits: ["createName", "createStatus","createReset"],
    data() {
        return {
            searchQueryName: '',
            searchQueryStatus: ''
        }
    },
    methods: {
        getInputValName() {
            this.$emit("createName", this.searchQueryName);
            this.searchQueryName = '';

        },
        reset() {
            this.$emit("createReset");
            this.searchQueryStatus = ''
            this.searchQueryName = '';
        },

        getInputValStatus() {
            this.$emit("createStatus", this.searchQueryStatus);
            this.searchQueryStatus = '';
        },
    },
}

</script>