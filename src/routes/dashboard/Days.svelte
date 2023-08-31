<script lang="ts">
  export let day: string;
  export let data: DayData;

  let newData: [string, number][] = Object.keys(data.Food).map((key) => [
    data.Food[key],
    data["Quantity (g)"][key],
  ]);
</script>

<div class="flex flex-col flex-1 px-4 py-2">
  <h1 class="text-3xl pb-2">{day}</h1>
  <div class="flex flex-col">
    {#each newData as [food, quantity]}
      <div class="flex w-full justify-between md:pl-4">
        <span class="max-w-[75%]">• {food}</span>
        <span class="text-lg">{Math.floor(quantity)}g</span>
      </div>
    {/each}
  </div>
</div>
