<script lang="ts" setup>
import { ref } from "vue";
import { useEmployeesStore } from "@/stores/employees";
import { useResizable } from "@/composables/useResizable";

import TableRefreshButton from "@/components/TableRefreshButton.vue";
import { Fragment } from "vue-frag";
import { useHeaderTitlesStore } from "@/stores/headerTitles";
import { storeToRefs } from "pinia";

const headerTitlesStore = useHeaderTitlesStore();
const { headerTitles, headerCols } = storeToRefs(headerTitlesStore);

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
      <col
        v-for="{ name, width } in headerCols"
        :key="name"
        :style="{ width: width + 'px' }"
      />
    </colgroup>
    <thead class="table__head">
      <tr>
        <th class="table-head__cell table-head__checkbox">
          <input
            class="table__checkbox"
            type="checkbox"
            id="headerCheckbox"
            v-model="allChecked"
            :checked="employeesStore.getCheckedState"
            :indeterminate.prop="employeesStore.getIndeterminatedState"
            @click="onToggleCheckedAll(!allChecked)"
          />
        </th>
        <th
          class="table-head__cell"
          v-for="({ name, title }, index) in headerTitles"
          :key="name"
          :colspan="getColspan(name)"
        >
          <p class="table-head__text">{{ title }}</p>
          <div
            class="table__resize-handle"
            @mousedown="startResize($event, index)"
          ></div>
        </th>
        <th class="table-head__last-child">
          <TableRefreshButton />
        </th>
      </tr>
    </thead>
  </Fragment>
</template>

<style scoped>
.table__head {
  border: 1px solid var(--color-border);
  border-right: none;
}

.table-head__cell {
  font-weight: bold;
  padding: 0.7rem 1rem;
}

.table-head__text {
  font-weight: bold;
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
