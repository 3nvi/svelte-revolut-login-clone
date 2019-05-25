<script>
  import { authStore } from 'stores/auth';
  import Login from 'screens/Login';
  import Home from 'screens/Home';
</script>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 350px;
    height: 100%;
    margin: auto;
    background-color: var(--default-background-color);
  }
</style>

<div class="wrapper">
  {#if $authStore.isAuthenticated}
    <Home />
  {:else}
    <Login />
  {/if}
</div>
