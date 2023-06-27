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

const size = 12

const getMessage = (value)=>{
    let message = ""
    let spacesNeeded = size - value.toString().length  - 1 - 5 //1 is for the L and 5 for the water letters
    message = ' '.repeat(spacesNeeded) + `${value.toString()}` + "L"
    return "WATER" + message
}

onMounted(() => {
   const board = new Board(boa.value,{
    count:1,
    size,
    delay:1,
    theme:'light',
   })
   let value = 500
   board.updateMessages([getMessage(value)])
   setInterval(()=>{
    value = value + 16
    board.updateMessages([getMessage(value)])
   }, 3000)
})

</script>