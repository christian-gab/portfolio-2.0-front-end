<template>
  <button
    class="circle"
    :class="{ active }"
    type="button"
    :aria-label="`Ir para o projeto ${index + 1}`"
    :aria-current="active ? 'true' : undefined"
  ></button>
</template>

<script setup>
defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  index: {
    type: Number,
    required: true,
  },
})
</script>

<style scoped>
.circle {
  padding: 0;
  border: 0;
  width: 8px;
  height: 8px;
  background-color: var(--color-muted);
  opacity: 0.6;
  border-radius: 50%;
  cursor: pointer;
}

.circle:hover,
.circle:focus-visible {
  background-color: var(--color-tertiary);
}

.circle:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}

.active {
  background-color: var(--color-primary);
  opacity: 1;
}
</style>
