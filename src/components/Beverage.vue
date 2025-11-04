<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents v-if="beverageStore.currentSyrup.id === 's1' && beverageStore.currentCreamer.id === 'c1'">
      <template v-slot:top>
        <Base />
      </template>
      <template v-slot:mid>
        <Base />
      </template>
      <template v-slot:bottom>
        <Base />
      </template>
    </Contents>
    <Contents v-else-if="beverageStore.currentSyrup.id === 's1' && beverageStore.currentCreamer.id !== 'c1'">
      <template v-slot:top>
        <Creamer />
      </template>
      <template v-slot:mid>
        <Base />
      </template>
      <template v-slot:bottom>
        <Base />
      </template>
    </Contents>
    <Contents v-else >
      <template v-slot:top>
        <Creamer />
      </template>
      <template v-slot:mid>
        <Syrup />
      </template>
      <template v-slot:bottom>
        <Base />
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";
import {useBeverageStore} from "../stores/beverageStore";
const beverageStore = useBeverageStore();

type Props = {
  isIced: boolean;
};
defineProps<Props>();
</script>
