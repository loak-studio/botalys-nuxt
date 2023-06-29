<template>
    <div class="double-graph__parent">
        <div class="double-graph">
            <div class="double-graph__title-container">
                <h3 class="h4 double-graph__title">
                    <slot name="title" />
                </h3>

            </div>
            <div class="double-graph__graphs">
                <div class="double-graph__graph-container">
                    <h4 class="h3 double-graph__subtitle">
                        <slot name="graph-1-title" />
                    </h4>
                    <slot name="graph-1" />
                </div>
                <div>
                    <h4 class="h3 double-graph__subtitle">
                        <slot name="graph-2-title" />
                    </h4>
                    <slot name="graph-2" />
                </div>
            </div>
            <more-details>
                <slot name="details" />
            </more-details>
        </div>
    </div>
</template>

<style lang="scss">
.double-graph__parent {
    padding: 0 4px;
}

.double-graph {
    padding-top: 40px;
    max-width: 1296px;
    width: 100%;
    border-left: 2px solid var(--nandor);
    border-right: 2px solid var(--nandor);
    margin: 0 auto;
    padding-bottom: 1px;
}

.double-graph__title-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    max-width: 1048px;
    margin: 0 auto;

    &::before {
        content: '';
        height: 2px;
        flex-grow: 1;
        background: var(--dark-jungle-green);
        min-width: 20px;
    }

    &::after {
        content: '';
        height: 2px;
        flex-grow: 1;
        background: var(--dark-jungle-green);
        min-width: 20px;
    }
}

.double-graph__title {
    margin-bottom: 16px;
}

.double-graph__subtitle{
    border-bottom: 2px solid var(--dark-jungle-green);
    max-width: 342px;
    padding-bottom: 12px;
    margin-bottom: 3rem;
}
.double-graph__graphs{
    max-width: 1048px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    margin-bottom: 100px;
}

.double-graph__parent:last-of-type .double-graph{
    border-bottom: 2px solid var(--nandor);
    padding-bottom: 120px;
}
</style>