<template>

<div>
    <h2>{{ selectedHead.title }} <span v-if="selectedHead.onSale">(On Sale!)</span></h2>
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
        <h2>Cart <span v-if="!cart.length">(empty)</span></h2>
        <table v-if="cart.length">
            <thead>
                <tr>
                    <th>Robot</th>
                    <th>Cost</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <!-- just a side note: never use v-if on a v-for element -->
                <tr v-for="head in cart" :key="head.id">
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
