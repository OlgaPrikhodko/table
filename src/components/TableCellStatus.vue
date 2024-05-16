<script lang="ts" setup>
type TableStatusCellProps = {
  statusType: "status" | "userStatus";
  statusText?: string | null;
};

const props = defineProps<TableStatusCellProps>();

const statusClass = {
  "status--valid": props.statusText === "valid",
  "status--expired": props.statusText === "expired",
  "status--canceled": props.statusText === "canceled",
};

const userStatusClass = {
  "status--valid": props.statusText === "active",
};
</script>

<template>
  <span
    class="status"
    :class="statusType === 'status' ? statusClass : userStatusClass"
    >{{ statusText }}</span
  >
</template>

<style scoped>
.status {
  text-transform: capitalize;
  border-radius: 0.6rem;
  padding: 3px 10px;
  font-weight: bold;
  font-size: 0.75rem;
}

.status--valid {
  background-color: var(--color-active);
}

.status--expired {
  background-color: #ff8383;
  color: #690000;
}

.status--canceled {
  background-color: #dedfe5;
  color: #65696e;
}
</style>
