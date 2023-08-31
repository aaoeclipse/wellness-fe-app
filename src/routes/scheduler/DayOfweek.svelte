<script lang="ts">
    interface Food {
        foods: String[]
    }

     export let DayOfweek: string;

     export let foods: string[];
</script>

<div class="text-black pl-10">
    <h1 class="text-2xl text-blue-600 font-bold font-mono">{DayOfweek}</h1>
    {#each foods as food}
    <p>{food}</p>
    {/each}
</div>