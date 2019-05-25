<script>
  import { authStore } from 'stores/auth';

  const logout = () => authStore.setAuthStatus(false);
</script>

<style>
  .heading {
    font-weight: normal;
    margin-bottom: 40px;
  }

  .logout-btn {
    font-size: 1rem;
    font-weight: 500;
    color: white;
    cursor: pointer;
    margin-bottom: 0.5em;
    background-color: var(--accent-color);
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 2em;
    transition: all 0.2s ease 0s;
    padding: 0.625em 1.5em;
  }
  .logout-btn:hover {
    background-color: var(--accent-color-dark);
  }

  .logout-btn:active {
    transform: translateY(5px);
  }
</style>

<svelte:head>
  <title>Revolut | Home</title>
</svelte:head>

<h1 class="heading">You are now logged in</h1>
<button class="logout-btn" on:click={logout}>Logout</button>
