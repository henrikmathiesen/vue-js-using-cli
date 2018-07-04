<template>

<div class="CollapsableComponent">
    <h2 @click="open = !open">{{ title }}</h2>
    <div v-if="open">
        <div>
            <slot name="first" />
        </div>
        <div>
            <slot name="second">Default</slot>
        </div>
    </div>
</div>

</template>

<script>

export default {
    name: 'CollapsableComponent',
    props: ['title'],
    data(){
        return {
            open: true
        }
    }
}

</script>

<style scoped>

    h2 {
        cursor:pointer;
    }

</style>
