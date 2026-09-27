<template>
  <div class="container" role="img" :aria-label="name">
    <div class="content">
      <slot v-if="!icon"></slot>
      <font-awesome-icon v-else class="icon" :icon="icon" />
    </div>

    <span v-if="name" class="skill-name">{{ name }}</span>
  </div>
</template>

<script setup>
defineOptions({ name: 'HabilidadeCard' })

defineProps({
  icon: {
    type: [Object, Array],
    required: false,
    default: null,
  },
  name: {
    type: String,
    required: false,
    default: '',
  },
})
</script>

<style scoped>
.container {
  position: relative;
  width: 160px;
  height: 160px;
  background-color: color-mix(in srgb, var(--color-surface) 92%, transparent);
  border: 2px solid var(--color-border);
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.082);
  transition:
    border-color 0.25s ease,
    background-color 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.container:hover {
  border: 2px solid var(--color-primary);
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease;
}

.container:hover .content {
  transform: translateY(-4px);
}

.skill-name {
  position: absolute;
  left: 50%;
  bottom: 12px;
  transform: translate(-50%, 18px);
  opacity: 0;
  padding: 7px 12px;
  border-radius: 10px;
  background: var(--color-primary);
  color: var(--color-on-primary);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  white-space: nowrap;
  backdrop-filter: blur(6px);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.skill-name::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 12px;
  height: 12px;
  background: var(--color-primary);
  border-radius: 2px;
}

.container:hover .skill-name {
  opacity: 1;
  transform: translate(-50%, 0);
}

:deep(i) {
  display: block;
  font-size: 90px;
  color: var(--color-secondary);
  line-height: 1;
}

:deep(img) {
  width: 80px;
  height: auto;
}

.icon {
  width: 90px;
  height: 90px;
  color: var(--color-secondary);
  transition: transform 0.25s ease;
}
</style>
