import {computed, isRef, onMounted, ref} from 'vue'
export const windowScrollPosition = () => {
  const scrollPosition = ref(0);

  const updateScrollPosition = () => {
    scrollPosition.value = window.scrollY;
  };

  onMounted(() => {
    window.addEventListener('scroll', updateScrollPosition);
  });

  const onDestroy = () => {
    window.removeEventListener('scroll', updateScrollPosition);
  };

  return {
    scrollPosition,
    onDestroy
  };
}