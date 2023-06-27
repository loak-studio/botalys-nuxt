<template>
    <div class="split-flap">
        <span ref="boa"></span>
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
const boa = ref()
useHead({
    script:[
        {
            src:'/ticker-board.min.js'
        }
    ]
})
onMounted(() => {
   const board = new Board(boa.value,{
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