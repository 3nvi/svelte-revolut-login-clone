import { writable } from 'svelte/store';

const createAuthStore = () => {
  const { subscribe, update } = writable({ isAuthenticated: false });

  return {
    subscribe,
    setAuthStatus: authStatus =>
      update(prevState => ({ ...prevState, isAuthenticated: authStatus })),
  };
};

export const authStore = createAuthStore();
