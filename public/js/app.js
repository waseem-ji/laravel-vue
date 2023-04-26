new Vue({
    el: "#app",

    data: {
        skills: [],
    },

    mounted() {
        // /skills
        axios.get("/skills").then((response) => (this.skills = response.data));
    },
});
