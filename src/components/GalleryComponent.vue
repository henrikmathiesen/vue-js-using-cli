<template>

<div>
    <h2>{{ parts.heads[selectedIndex].title }}</h2>
    <div>
        <img :src="parts.heads[selectedIndex].src" />
        <!-- short hand for v-bind:src -->
    </div>
    <div>
        <button @click="selectPrevHead()">PREV</button>
        <button @click="selectNextHead()">NEXT</button>
        <!-- short hand for v-on:click -->
    </div>
</div>

</template>

<script>

import parts from '../data/parts';

const headsFirstIndex = 0;
const headsLastIndex = parts.heads.length - 1;

export default {
    name: 'GalleryComponent',
    data() {
        return {
            parts,
            selectedIndex: headsFirstIndex
        }
    },
    methods: {
        selectPrevHead() {
            if(this.selectedIndex === headsFirstIndex) {
                this.selectedIndex = headsLastIndex;
            } else {
                this.selectedIndex -= 1;
            }
        },
        selectNextHead() {
            if(this.selectedIndex === headsLastIndex) {
                this.selectedIndex = 0;
            } else {
                this.selectedIndex += 1;
            }
        }
    }
}

</script>

<style scoped>

img {
  max-width: 100%;
  height: auto;
}

button + button {
    margin-left: 5px;
}

</style>
