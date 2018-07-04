<template>

<div class="CommunicationComponent">
    <h2>Communication between components</h2>
    <PartComponent :parts="parts.heads" static-value-a="foo" :staticValueB="'John'" :someValue="someValue" @partSelected="onPartSelected" />
    <PartComponent :parts="parts.bases" static-value-a="bar" :staticValueB="'Doe'" :someValue="someValue" @partSelected="onPartSelected" />
    <hr />
    <div>
        <button @click="changeSomeValue()">Change some value</button>
    </div>
    <hr />
    <CollapsableComponent :title="'Da title'">
        <template slot="first">First</template>
        <template slot="second">Second</template>
    </CollapsableComponent>
    <!--
        A more simple example of slots would look like this
        <CollapsableComponent>
            <p>Content</p>
        </CollapsableComponent>

        // CollapsableComponent.vue
        <div>
            <slot />
        </div>
    -->
</div>

</template>

<script>

import parts from '../../data/parts';
import CollapsableComponent from '../CollapsableComponent';
import PartComponent from './PartComponent';

export default {
  name: 'CommunicationComponent',
  components: {
    CollapsableComponent,
    PartComponent
  },
  data() {
    return {
      parts,
      someValue: 1
    }
  },
  methods: {
      changeSomeValue(){
          this.someValue = 2;
      },
      onPartSelected(part){
          console.log(part);
      }
  }
}

</script>

<style scoped>



</style>
