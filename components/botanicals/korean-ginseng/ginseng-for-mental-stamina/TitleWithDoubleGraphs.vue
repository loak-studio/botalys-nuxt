<template>
    <div class="double-graph__parent">
        <div class="double-graph">
            <h3>
                <slot name="title"/>
            </h3>
            <more-details>

                <slot name="details"/>
            </more-details>
        </div>
    </div>
</template>

<style>
    .double-graph__parent{
        padding: 0 4px;
    }
    .double-graph{
        max-width: 1296px;
        width: 100%;
        border-left: 2px solid var(--nandor);
        border-right: 2px solid var(--nandor);
        margin: 0 auto;
    }
</style>