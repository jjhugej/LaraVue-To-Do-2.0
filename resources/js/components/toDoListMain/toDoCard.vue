<template>
    <div class="container">
        <article class="message">
            <div class="message-header">
                <p>{{ title }}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {{ notes }}
            </div>
        </article>
    </div>
</template>

<script>
export default {
    props: ["id", "title", "notes"],
    data: function() {
        return {};
    },
    mounted() {}
};
</script>
