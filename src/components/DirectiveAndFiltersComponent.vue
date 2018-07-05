<template>

<div class="DirectiveAndFiltersComponent">
    <h2>Directives and Filters</h2>
    <span v-position:relative.top>Position me</span>
    <!-- relative is the arg, top is a modifier (can add multiple: a.b.c) -->
    <!-- <span v-position:absolute.bottom>Position me</span> -->
    <span @click="pinPadding = '15'" v-position-too="{ type: 'relative', pos: 'top', px: pinPadding }">Position me too {{ pinPadding }}</span>
    <!-- the second directive is sending args as an object, see directive code for how to recieve them -->
    <!-- also we demonstrating how changing pinPadding (by clicking on the span) is updating in the directive -->
</div>

</template>

<script>

// We made this available globally instead, see main.js
// import PositionDirective from '../directives/position-directive';
// import PositionTooDirective from '../directives/position-too-directive';

export default {
    name: 'DirectiveAndFiltersComponent',
    // directives: {
    //     'position': PositionDirective,
    //     'position-too': PositionTooDirective
    // },
    data(){
        return {
            cost: 5000,
            pinPadding: '5'
        }
    }
}

</script>

