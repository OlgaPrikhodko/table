<script lang="ts" setup>
import { computed } from "vue";

import Square from "@/icons/CheckboxIcons/Square.vue";
import SquareChecked from "@/icons/CheckboxIcons/SquareChecked.vue";
import SquareIndeterminated from "@/icons/CheckboxIcons/SquareIndeterminated.vue";

const emits = defineEmits(["onChange"]);

const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  checked: {
    type: Boolean,
    default: false,
  },
  indeterminated: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const wrapperClass = computed(() => {
  const { checked, indeterminated } = props;
  return {
    "check-box": true,
    "check-box--checked": checked,
    "check-box--indeterminated": indeterminated,
  };
});

const iconClass = computed(() => {
  const { checked, indeterminated } = props;
  return {
    "check-box__icon": true,
    "check-box__icon--checked": checked,
    "check-box__icon--indeterminated": indeterminated,
  };
});

const handleClick = () => {
  emits("onChange", props.id);
};
</script>

<template>
  <div :class="wrapperClass" role="checkbox" @click="handleClick">
    <span :class="iconClass">
      <SquareIndeterminated v-if="props.indeterminated" />
      <Square v-else-if="!props.checked" />
      <SquareChecked v-else-if="props.checked" />
    </span>
    <span v-if="label" :id="`label-${props.id}`" class="label">
      {{ props.label }}
    </span>
  </div>
</template>

<style lang="css" scoped>
.check-box {
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.check-box__icon {
  display: flex;
  align-items: center;
  height: 1.25rem;
  width: 1.25rem;

  svg {
    color: #999ca1;
  }
}

.check-box__icon--checked {
  height: 1rem;
  width: 1rem;

  svg {
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: var(--color-active);
    border: 1px solid var(--color-active);
    border-radius: 2.5px;
  }
}

.check-box__icon--indeterminated {
  height: 1rem;
  width: 1rem;

  svg {
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: var(--color-active);
    border: 1px solid var(--color-active);
    border-radius: 2.5px;
  }
}
</style>
