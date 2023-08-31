<script lang="ts">
  export let handleGenderPicker: (event: Event) => void;
  export let handleKeyDown: (event: Event) => void;
  export let handleOnSubmit: (event: Event) => void;
  export let gender: string;
  export let weight: number;
  export let age: number;
  export let height: number;

</script>


<form on:submit|preventDefault={handleOnSubmit} class="flex-1">
    <!-- Left side -->

    <div class="flex-1 p-4 flex flex-col justify-center w-full">
      <div class="flex flex-col gap-4 flex-1 md:pl-24">
        <div class="flex gap-4 items-center flex-1">
          <div class="w-72 md:w-[24rem] h-16 bg-white flex justify-center">
            <div
              id="male"
              tabindex="0"
              role="button"
              class="w-24 md:w-32 h-full flex items-center justify-center select-none cursor-pointer"
              on:click={handleGenderPicker}
              on:keydown={handleKeyDown}
              style="background-color: {gender === 'male'
                ? 'white'
                : 'rgb(156 163 175)'}; color: {gender === 'male'
                ? 'black'
                : '#4b5563'}"
            >
              Male
            </div>
            <div
              style="background-color: {gender === 'female'
                ? 'white'
                : 'rgb(156 163 175)'}; color: {gender === 'female'
                ? 'black'
                : '#4b5563'}"
              tabindex="0"
              role="button"
              on:click={handleGenderPicker}
              on:keydown={handleKeyDown}
              id="female"
              class="bg-gray-400 w-24 md:w-32 h-full flex items-center justify-center select-none cursor-pointer text-gray-600"
            >
              Female
            </div>
            <div
              style="background-color: {gender === 'other'
                ? 'white'
                : 'rgb(156 163 175)'}; color: {gender === 'other'
                ? 'black'
                : '#4b5563'}"
              tabindex="0"
              role="button"
              on:click={handleGenderPicker}
              on:keydown={handleKeyDown}
              id="other"
              class="bg-gray-400 w-24 md:w-32 h-full flex items-center justify-center select-none cursor-pointer text-gray-600"
            >
              Other
            </div>
          </div>
        </div>
        <!-- Weight -->

        <div class="flex gap-4 items-center relative">
          <div class="flex relative">
            <input
              class="w-[225px] h-[45x]"
              type="number"
              name="weight"
              id="weight"
              bind:value={weight}
            />
            <span
              class="absolute text-gray-600 right-[40px] h-[45px] flex items-center justify-end top-0"
              >kg</span
            >
          </div>
          <label for="weight"> weight</label>
        </div>
        <div class="flex gap-4 items-center relative">
          <div class="flex relative">
            <input
              class="w-[225px]"
              type="number"
              name="weight"
              id="weight"
              bind:value={age}
            />
            <span
              class="absolute text-gray-600 right-[40px] h-[45px] flex items-center justify-end top-0"
              >years</span
            >
          </div>

          <label for="age"> Age</label>
        </div>
        <div class="flex gap-4 items-center relative">
          <span class="absolute left-[170px] text-gray-500">cm</span>
          <input
            class="w-[225px]"
            type="number"
            name="weight"
            id="weight"
            bind:value={height}
          />
          <label for="height"> Height</label>
        </div>
      </div>

      <!-- Right Side -->
      <div
        class=" bg-flight p-4 absolute bottom-[-25px] right-0 md:right-[-50px] w-screen md:w-[500px] h-[100px] flex items-center justify-end gap-12"
      >
        <span class="text-white text-3xl">calculate</span>
        <button
          class="p-4 bg-base rounded hover:bg-yellow-400 font-bold min-w-[50px] transform active:scale-75 transition-transform"
          >→</button
        >
      </div>
    </div>
  </form>