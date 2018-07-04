<template>

<div class="GalleryComponent">
    <!-- can use [headStyle, moreStyles] for multiple calculate properties for style, the last will override if conflict -->
    <h2 :style="headStyle">{{ selectedHead.title }} <span v-if="selectedHead.onSale">(On Sale!)</span></h2>
    <div>
        <img :src="selectedHead.src" />
        <!-- short hand for v-bind:src -->
    </div>
    <div>
        <button @click="selectPrevHead()">PREV</button>
        <button @click="selectNextHead()">NEXT</button>
        <!-- short hand for v-on:click -->
    </div>
    <div>
        <br />
        <button @click="addHeadToCart()">Add to Cart</button>
    </div>
    <div>
        <h3>Cart <span v-if="!cart.length">(empty)</span></h3>
        <table v-if="cart.length">
            <thead>
                <tr>
                    <th>Robot</th>
                    <th>Cost</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <!-- IMPORTANT: Just a side note: never use v-if on a v-for element -->
                <!-- If item is on sale both 1A and 1B apply, the last will override if conflict -->
                <!-- Can use computed properties for class as well -->
                <tr v-for="head in cart" :key="head.id" :class="{'app-some-border-1A': head.onSale, 'app-some-border-1B': head.onSale, 'app-some-border-2': !head.onSale }">
                    <td>{{ head.title }}</td>
                    <td>{{ head.cost }}</td>
                    <td>{{ head.amount }}</td>
                </tr>
            </tbody>
        </table>
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
            selectedIndex: headsFirstIndex,
            cart: []
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
        },
        addHeadToCart(){
            const existsInCart = this.cart.find(head => head.id === this.selectedHead.id);

            if(!existsInCart) {
                this.cart.push(Object.assign({}, this.selectedHead, { amount: 1 }));
            } else {
                existsInCart.amount += 1;
            }
        }
    },
    computed: {
        selectedHead(){
            return parts.heads[this.selectedIndex];
        },
        headStyle(){
            return {
                // can use 'background-color' / backgroundColor for hyphens
                'color': this.selectedHead.onSale ? 'gold' : ''
            }
        }
    }
}

</script>

<style scoped>

h2 {
  margin-top:0;
}

img {
  max-width: 100%;
  height: auto;
}

button + button {
    margin-left: 5px;
}

.app-some-border-1A {
    color: pink;
}

.app-some-border-1B {
    color: gold;
}

.app-some-border-2 {
    border: 2px solid gold;
}

</style>
