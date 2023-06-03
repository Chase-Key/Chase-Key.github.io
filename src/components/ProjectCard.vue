<template>
    <!-- <div class="header">
        <div class="title">
            <h1>Projects</h1>
        </div>
    </div> -->
    <div class="main-container">
        
        <div class="project-card" v-bind:key="items">
            <h2>{{ projectData.ProjectArray[0].title }}</h2>
            <iframe src="https://www.youtube.com/embed/j97J-mf9z0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>{{ projectData.ProjectArray[0].about }}</p>
            <a href="{{ projectData.ProjectArray[0].link }}">link</a>
        </div>
        <div class="project-card">
            <h2>{{ projectData.ProjectArray[1].title }}</h2>
            <iframe src="https://www.youtube.com/embed/7_PgYPSg34Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>{{ projectData.ProjectArray[1].about }}</p>
            <a href="{{ projectData.ProjectArray[1].link }}">link</a>
        </div>
        <div class="project-card">
            <h2>{{ projectData.ProjectArray[2].title }}</h2>
            <iframe src="https://www.youtube.com/embed/kH_MplOYLPc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>{{ projectData.ProjectArray[2].about }}</p>
            <a href="{{ projectData.ProjectArray[2].link }}">link</a>
        </div>
    </div>
</template>

<script>

import jsonData from './projects.json'
export default {
    data(){
        return{
            projectData: jsonData
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
    .main-container {
        justify-content: center;
        align-items: center;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        color: black;
        font-family: 'Poppins', sans-serif;
        margin-top: -5%;
        margin-bottom: -850px;
    }
    .project-card {
        margin: 10px;
        flex-wrap: 0 0 40%;
        box-shadow: gray 5px 5px 5px;
        padding: 10px;
        border-top-right-radius: 20%;
        border-bottom-left-radius: 30%;
        background-color: azure;
        width: 450px;
    }
    .project-card iframe {
        height: 15rem;
        width: 25rem;
    }
    .project-card p{
        padding: 10px;
    }
    /* .header {
        justify-content: center;
        display: flex;
        background-color: gray;
    }
    .header h1 {
        color: black;
        font-family: 'Poppins', sans-serif;
        margin-top: -50%;
        box-shadow: black 3px 3px 8px;
        background-color: azure;
        border-top-right-radius: 25%;
        border-bottom-left-radius: 25%;
        text-decoration: underline;
    } */
</style>