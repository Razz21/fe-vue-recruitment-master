import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notification', () => {
  // Using only single notification state for simplicity
  const hasNotification = ref<boolean>(false);

  function success() {
    hasNotification.value = true;

    const dismiss = () => {
      hasNotification.value = false;
    };
    setTimeout(dismiss, 3000);

    return dismiss;
  }

  return {
    hasNotification,
    success,
  };
});
