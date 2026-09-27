<template>
  <input
    :placeholder="placeholder"
    :type="type"
    :autocomplete="autocomplete"
    :aria-label="placeholder"
  />
</template>

<script setup>
defineProps({
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
})
</script>

<style scoped>
input {
  font-weight: 300;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--color-border);
  width: 100%;
  padding-bottom: 10px;
  color: var(--color-text);
  background-color: transparent;
  font-family: inherit;
  transition: 0.2s ease-in-out;
  font-size: 16px;
}

input::placeholder {
  font-family: inherit;
  color: var(--color-muted);
  font-weight: 300;
  font-size: 16px;
  transition: opacity 0.2s ease;
  opacity: 1;
}

input:focus {
  border-bottom: 1px solid var(--color-secondary);
  color: var(--color-secondary);
}

input:focus::placeholder {
  opacity: 0;
}
</style>
