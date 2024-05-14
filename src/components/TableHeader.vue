<script lang="ts" setup>
import { ref } from "vue";
import { useEmployeesStore } from "@/stores/employees";
import { useResizable } from "@/composables/useResizable";

import TableRefreshButton from "@/components/TableRefreshButton.vue";
import { Fragment } from "vue-frag";
import { useHeaderTitlesStore } from "@/stores/headerTitles";
import { storeToRefs } from "pinia";

const headerTitlesStore = useHeaderTitlesStore();
const { headerTitles } = storeToRefs(headerTitlesStore);

const employeesStore = useEmployeesStore();
const { startResize } = useResizable();

const getColspan = (name: string) => {
  return name === "title" ? 2 : 1;
};

const allChecked = ref(false);
const onToggleCheckedAll = (val: boolean) => {
  employeesStore.setAllEmployeersChecked(val);
};
</script>

<template>
  <Fragment>
    <colgroup>
      <col class="table-cell__fixed" />
      <col class="table-cell__fixed" />
      <col
        v-for="{ name, width } in headerTitles"
        :key="name"
        :style="{ width: width + 'px' }"
      />
      <col class="table-cell__fixed" />
    </colgroup>
    <thead class="table__head">
      <tr>
        <th class="table-th table-cell__checkbox">
          <input
            class="table__checkbox"
            type="checkbox"
            id="headerCheckbox"
            v-model="allChecked"
            @click="onToggleCheckedAll(!allChecked)"
          />
        </th>
        <th
          v-for="({ name, title }, index) in headerTitles"
          :key="name"
          :colspan="getColspan(name)"
        >
          <p>{{ title }}</p>
          <div
            class="table__resize-handle"
            @mousedown="startResize($event, index)"
          ></div>
        </th>
        <th><TableRefreshButton /></th>
      </tr>
    </thead>
  </Fragment>
</template>

<style scoped>
.table-cell__fixed {
  width: 50px;
}

.table__resize-handle {
  position: absolute;
  top: 0;
  right: -3px;
  bottom: 0;
  width: 5px;
  cursor: col-resize;
  background: var(--color-border);
}
</style>
