<template>

    <div class="NavigateToMeComponent">
        <h2>Navigate to me</h2>
        <h3>{{ part.title }}</h3>
        <h4>{{ part.type }}</h4>
        <p>
            {{ part.description }}
        </p>
    </div>

</template>

<script>

    import parts from '../data/parts';

    export default {
        name: 'NavigateToMeComponent',
        // props: ['partType', 'id'],
        // Take route params as props, so we dont have to couple this component with the router
        // Also see router/index.js
        // We could validate id like this: Number.isInteger(+value) , see PartComponent for custom prop validation
        computed: {
            part(){
                const { partType, id } = this.$route.params; // if using route params as props: const { partType, id } = this;
                return parts[partType].find(p => p.id === +id);
            }
        }
    }

</script>

<style scoped>

h2 {
  margin-top:0;
}

</style>
