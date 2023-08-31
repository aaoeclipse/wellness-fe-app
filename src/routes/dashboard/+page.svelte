<script lang="ts">
  import DietForm from "./DietForm.svelte";
  import Days from "./Days.svelte";
  import { onMount } from "svelte";
  import Chatgpt from "./Chatgpt.svelte";
  import Loading from "./Loading.svelte";
  import { error } from "@sveltejs/kit";

  let userEmail = "";
  let weight = 65.0;
  let gender = "male";
  let age = 18;
  let height = 155;

  let resp: WeeklyFood = {};

  let loading = false;

  let male = true;
  let female = false;
  let other = false;

  async function handleOnSubmit(e: Event) {
    let bmr = calCal();
    console.log(`Sending: ${age} ${weight} ${height} ${gender} ${bmr}`);
    const response = await fetch("http://52.14.100.249:8000/diet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ kg: Math.floor(weight), calories: bmr }),
    });

    if (response.ok) {
      resp = await response.json();
    }
  }

  function handleGenderPicker(e: Event) {
    const target = e.currentTarget as HTMLElement;
    gender = target.id;
  }

  async function handleChatCall(request: string) {
    loading = true;
    const response = await fetch("http://52.14.100.249:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: request, diet_plan: resp }),
    });

    if (response.ok) {
      try {
        let newresp = await response.json();
        resp = newresp
      } catch (error) {
        console.error(error);
      }
    }
    loading = false;
  }

  function calCal() {
    let bmr = 0;
    switch (gender) {
      case "male":
        //BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years)
        bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
        break;
      case "female":
        // BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years)
        bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
        break;
      case "other":
        bmr = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
        break;
      default:
        break;
    }
    return Math.floor(bmr);
  }

  function handleKeyDown(e: Event) {}
</script>

<!-- for women: BMR = 655 + (9.6 × body weight in kg) + (1.8 × body height in cm) - (4.7 × age in years); for men: BMR = 66 + (13.7 × weight in kg) + (5 × height in cm) - (6.8 × age in years -->

<div
  class="min-h-screen w-screen flex flex-col content-center justify-center items-center pb-10 bg-fdark bg-opacity-30"
>
  {#if resp.hasOwnProperty("Monday")}
    <h1 class="text-center text-white text-4xl pt-10">Diet</h1>
  {:else}
    <h1 class="text-center text-white text-4xl font-semibold">Your information</h1>
  {/if}
  <div
    class="bg-slate-200 w-screen md:w-1/2 md:min-h-[400px] min-h-[600px] mt-10 shadow-md flex
    relative pt-6 rounded h-full
    "
  >
    {#if resp.hasOwnProperty("Monday")}
      {#if loading}
        <div class="flex-1 h-full w-full flex flex-col justify-center items-center">
          <Loading />
        </div>
      {:else}
        <div class="flex flex-col gap-4">
          <Chatgpt {handleChatCall} data={resp} />
          <div
            class="px-4 py-2 bg-dark w-32 self-end bg-sdark text-white rounded hover:bg-slight"
            role="button"
          >
            Download CSV
          </div>
          {#each Object.entries(resp) as [day, data]}
            <Days {day} {data} />
          {/each}
        </div>
      {/if}
    {:else}
      <DietForm
        {age}
        {weight}
        {handleGenderPicker}
        {handleOnSubmit}
        {handleKeyDown}
        {gender}
        {height}
      />
    {/if}
  </div>
</div>
