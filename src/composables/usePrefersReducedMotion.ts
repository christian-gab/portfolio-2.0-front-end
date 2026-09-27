import { onBeforeUnmount, onMounted, ref } from 'vue'

export const usePrefersReducedMotion = () => {
  const mediaQuery: MediaQueryList | undefined =
    typeof window === 'undefined'
      ? undefined
      : window.matchMedia('(prefers-reduced-motion: reduce)')
  const prefersReducedMotion = ref(mediaQuery?.matches ?? false)

  const updatePreference = () => {
    if (mediaQuery) {
      prefersReducedMotion.value = mediaQuery.matches
    }
  }

  onMounted(() => {
    updatePreference()
    mediaQuery?.addEventListener('change', updatePreference)
  })

  onBeforeUnmount(() => {
    mediaQuery?.removeEventListener('change', updatePreference)
  })

  return { prefersReducedMotion }
}
