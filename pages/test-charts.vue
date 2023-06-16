<template>
    <div class="chart-container">
        <canvas id="chart" />
    </div>
</template>

<style>
.chart-container{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10rem 2rem;
}
#chart {
    max-width: 500px;
    max-height: 400px;
}
</style>

<script setup>
import Chart from 'chart.js/auto';

onMounted(() => {
    const ctx = document.getElementById('chart');
    const data = {
        labels: ['WHITE GINSENG', 'RED GINSENG', 'BOTALYS'],
        datasets: [{
            label: 'Rare ginsenosides',
            data: [2, 4, 40],
            backgroundColor: '#FFC300',
            borderColor: "#4D594C",
            borderWidth: 2
        }, {
            label: 'Total Ginsenosides',
            data: [10, 11, 45],
            backgroundColor: '#4D594C',
            borderColor: "#4D594C",
            borderWidth: 0
        }]
    };
    const config = {
        type: 'bar',
        data: data,
        options: {
            plugins:{
                legend:{
                    position:'bottom',
                    labels:{
                        font:{
                            family:'sofia-pro',
                        }
                    }
                },
            },
            scales: {
                x:{
                    grid:{display:false}
                },
                y: {
                    title:{
                        display:true,
                        text:'Ginsenoside concentration',
                        font:'sofia-pro'
                    },
                    beginAtZero: true,
                    ticks:{
                        display:false
                    },
                    border:{
                        display:false
                    }
                }
            }
        },
    };

    new Chart(ctx, config)
})
</script>