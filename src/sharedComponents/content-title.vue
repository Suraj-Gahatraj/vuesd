
<template>
    <div class="pl-0 p-6 pt-4 pb-4 w-100 border-b-2 border-indigo-10">
                <h1 class="font-semibold text-1xl ">{{ heading }}</h1>
                <p class="text-sm">
                  {{ title }}
                </p>
              </div>
</template>
<script>
export default {
  props: [
    "heading",
    "title"
]
}
</script>


<style >
</style>