<template>
  <button class="button" type="button">
    <svg
      class="button__svg"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
      ></path>
    </svg>
  </button>
</template>

<style scoped>
.button {
  display: inline-flex;
  padding: 0.125rem;
  align-items: center;
  /* border-radius: 0.5rem; */
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  text-align: center;
  color: #6b7280;
  border: none;
  background-color: inherit;
}

button:hover {
  color: #1f2937;
}

.button__svg {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
