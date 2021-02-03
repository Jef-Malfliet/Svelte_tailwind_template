<script type="ts">
  import { deleteMe } from "./scripts/scripts";
  import Tailwindcss from "./style/Tailwindcss.svelte";
</script>

<Tailwindcss />

<div class="flex flex-col lg:flex-row justify-between m-2">
  <div class="bg-blue-900 rounded-md p-4 mr-0 lg:mr-8 mb-4 lg:mb-0">
    <div class="text-8xl font-bold text-white">
      This is a temporary component.</div>
  </div>

  <div class="flex flex-col justify-end bg-gray-900 rounded-md p-4">
    <div class="text-4xl font-semibold text-white mt-4 text-right">{deleteMe()}</div>
  </div>
</div>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
