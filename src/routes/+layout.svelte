<script lang="ts">
  import { user } from "$lib/firebase";
  import { userData } from "$lib/firebase";
    import "../app.css";
    
    $user;
    $userData;
</script>

<div class="min-h-screen flex flex-col">
    <slot />
</div>