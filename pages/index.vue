<template>
    <!-- use class instead of className, className doesn't fully load style on initial page load-->
    <div class="linkSection">
        <NuxtLink class="aboutLink" to="about">click here to go to about</NuxtLink>
    </div>
    <NuxtWelcome />
</template>

<style lang="scss">
.linkSection{
    width: 100vw;
    background-color: rgb(30, 28, 28);
    text-align: center;
    .aboutLink {
        width: 100%;
        color: $primary;
    }
}
</style>
