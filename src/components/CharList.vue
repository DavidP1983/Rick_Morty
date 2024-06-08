<template>
    <!-- character[0] -->
        <div class="wrapper__article" v-for="(char, index) in character[0]" :key="char.id">
            <div class="wrapper__img">
                <img v-bind:src="char.image" v-bind:alt="char.name">
            </div>
            <div class="wrapper__desc">
                <h2 class="wrapper__desc_title">{{ char.name }}</h2>
                <div class="wrapper__desc_status">
                    <span :class="[char.status === `Alive` ? `status_alive` : `status_dead`]"
                        v-bind:data-id="char.status"></span>{{ char.status }} - {{ char.species }}
                </div>
                <div class="wrapper__desc_location">
                    <span class="wrapper__desc-gray">Last known location:</span>
                    <h5 class="wrapper__desc_location_title">{{ char.location.name }}</h5>
                </div>
                <div class="wrapper__desc_seen">
                    <span class="wrapper__desc-gray">First seen in:</span>
                    <h5 class="wrapper__desc_seen_title">{{ character[1] ? character[1][index]?.name: "null"}}</h5>
                </div>
            </div>
        </div>
    
</template>

<script>

export default {
    props: {
        character: {
            types: Array || [],
            require: true
        },
    }
}
</script>