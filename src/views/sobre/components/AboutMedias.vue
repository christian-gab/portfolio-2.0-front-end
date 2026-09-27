<template>
  <a :href="href" :aria-label="name" target="_blank" rel="noopener noreferrer">
    <div class="container-social-media">
      <font-awesome-icon class="icon" :icon="icon" />
    </div>
  </a>
</template>

<script setup>
defineProps({
  icon: {
    type: [Object, Array],
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.container-social-media {
  border-radius: 4px;
  border: 2px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: ease 0.3s;
}

.icon {
  color: var(--color-primary-text);
  width: 25px;
  height: 25px;
}

.container-social-media:hover .icon {
  color: var(--color-secondary);
}

.container-social-media:hover {
  border: 2px solid var(--color-secondary);
}
</style>
