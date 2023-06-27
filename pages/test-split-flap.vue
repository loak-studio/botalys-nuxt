<template>
    <div class="split-flap">
        <span id="boa"></span>
    </div>
</template>

<style>
.split-flap{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
}
</style>

<script setup>
import { Board } from "ticker-board"
const boa = ref()
onMounted(() => {
   const board = new Board(document.querySelector('#boa'),{
    count:1,
    size:5,
    delay:1,
    theme:'light',
   })
   console.log(board)
   board.updateMessages(['500 L'])
   let value = 500
   setInterval(()=>{
    value = value + 16
    board.updateMessages([value + ' L'])
   }, 3000)
})

</script>