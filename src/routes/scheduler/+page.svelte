<script lang="ts">
  import { onMount } from "svelte";
    import DayOfweek from "./DayOfweek.svelte";

    export let kg: number;
    export let calories: number;

    onMount(async () => {
    let response = await fetch("https://localhost:", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ kg: kg, calories: calories }) // convert Json object to a string
    });

    let data = await response.json();
    console.log(data); // log the response to the console
  });
</script>

<div class="w-screen text-white pt-32 flex justify-center">
    <div
    class="bg-slate-200 w-screen md:w-1/2 min-h-screen my-10 shadow-md flex flex-col
    relative pt-6 rounded gap-4 py-8">
    <DayOfweek DayOfweek="Monday" foods={["one", "two", "three"]} />
    <DayOfweek DayOfweek="Tuesday" foods={["one", "two", "three"]} />
    <DayOfweek DayOfweek="Wednesday" foods={["one", "two", "three"]} />
    <DayOfweek DayOfweek="Thrusday" foods={["one", "two", "three"]} />
    <DayOfweek DayOfweek="Friday" foods={["one", "two", "three"]} />
    <DayOfweek DayOfweek="Saturday" foods={["one", "two", "three"]} />
    <DayOfweek DayOfweek="Sunday" foods={["one", "two", "three"]} />
  </div>

</div>
