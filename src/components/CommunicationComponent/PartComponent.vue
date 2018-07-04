<template>

    <div class="PartComponent">
        <h3>Hi from PartComponent</h3>
        <p>
            {{ staticValueA }} <br />
            {{ staticValueB }} <br />
            {{ someValue }}
        </p>
        <ul>
            <li v-for="p in parts" :key="p.id" @click="partSelected(p)">{{ p.title }}</li>
        </ul>
    </div>

</template>

<script>

// Tip: can use the updated life cycle hook to emit event when data in this component is updated

export default {
    name: 'PartComponent',
//   props: [
//       'parts',
//       'staticValueA',
//       'staticValueB',
//   ]

    // prop type validation
    // https://vuejs.org/v2/guide/components-props.html#Prop-Validation
    props: {
      parts: {
          type: Array,
          required: true
      },
      staticValueA: {
          type: String,
          required: true,
          validator: function(value){
              return ['foo', 'bar'].includes(value);
          }
      },
      staticValueB: {
          type: String
      },
      someValue: {
          type: Number
      }
    },
    methods: {
        partSelected(part){
            // We could have emitted directly in the click binding with: $emit()
            this.$emit('partSelected', part);
        }
    }
}

</script>

<style scoped>



</style>
