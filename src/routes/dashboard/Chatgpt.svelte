<script lang="ts">
    export let data: WeeklyFood = {};
    export let handleChatCall: (request: string) => void;
    
    let request = "";

    async function handleOnSubmit(e: Event) {
        handleChatCall(request);
    }
</script>

<form on:submit|preventDefault={handleOnSubmit} class="flex-1 flex justify-center gap-8">
    <input bind:value={request} class="w-1/2 rounded" id="chat" placeholder="ask chatgpt" >
    <input type="submit" value="Ask" class="border border-spacing-1 border-slate-900 px-8 py-2 cursor-pointer hover:bg-slight transition-colors duration-500 hover:text-white">
</form>