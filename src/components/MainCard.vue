<template lang="">
    <div class="main-container">
        <div class="container-one">
            <div class="profile">
                <img src="./img/profile-pic.png" alt="">
                <h2>Chase Key</h2>
                <p>Software Developer</p>
            </div>
            <div class="social-links">
                <a href="https://github.com/chase-key">
                    <div class="link">
                        <div class="icon-git"><font-awesome-icon icon="fa-brands fa-github" /></div>
                        <h2>Github</h2>
                    </div></a>
                <a href="https://linkedin.com/in/Chase-key">
                    <div class="link">
                        <div class="icon-linked"><font-awesome-icon icon="fa-brands fa-linkedin" /></div>
                        <h2>LinkedIn</h2>
                    </div></a>
                    
            </div>
        </div>
        <div class="container-two">
            <div class="about-me">
                <h1>About Me</h1>
                <p>Hello, my name is Chase. I am a self-taught programmer. I love creating and working with back-end and front-end technologies. I come from an Aviation Sciences background. I bring my work discipline, work ethic, obsessive planning and researching mindset into everything I encounter. I'm a coding enthusiast who is plagued with the overwhelming urge to tinker, figure things out, and develop. Learning is a passion for me and I strive everyday to hone my crafts and stay up to date with the latest technologies.
                </p>
            </div>
            <div class="technologies">
                <h1>Technologies Studied</h1>
                <div class="logos">
                    <img src="./img/JS-logo.png" alt="">
                    <img src="./img/Python-logo.png" alt="">
                    <img src="./img/Java-logo.png" alt="">
                    <img id="django" src="./img/Django-logo.png" alt="">
                    <img src="./img/Html-logo.png" alt="">
                    <img src="./img/Css-logo.png" alt="">
                    <img src="./img/Vue-logo.png" alt="">
                    <img src="./img/C-logo.png" alt="">
                </div>
            </div>
            <!-- <div class="btn-container">
                <div class="project-btns">
                    <a href="./img/Chase-Key-Resume.pdf" download>My Resume'</a>
                </div>
            </div> -->
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

    .main-container {
        text-align: center;
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        font-family: 'Poppins', sans-serif;
        padding: 10%;
        z-index: 2;
    }
    .container-one {
        padding: 0px;
        background-color: azure;
        width: 25%;
        border-bottom-left-radius: 65%;
        box-shadow: gray 0px 5px 5px;
    }
    .container-one h2 {
        color: rgb(57, 138, 138);
        font-weight: bold;
    }
    .profile img {
        height: 140px;
        padding-top: 10px;
    }
    .profile p {
        font-weight: 700;
    }
    .profile h2 {
        font-weight: 700;
    }
    .container-two {
        width: 75%;
        background-color: aliceblue;
        border-top-right-radius: 25%;
        box-shadow: gray 10px 5px 5px;
    }
    .container-two h1 {
        color: black;
        padding-top: 6%;
        padding-bottom: 3%;
        text-decoration: underline;
    }
    .container-two p {
        width: 95%;
    }
    .social-links a {
        text-decoration: None;
    }
    .social-links a:hover {
        text-decoration: underline;
    }
    @media (max-width: 603px){
        .social-links a {
            font-size: .5em;
        }
        .container-two p {
            font-size: .7em;
        }
        .container-two h1 {
            font-size: 1.5em;
        }
        .profile img {
            height: 90px;
        }
        .profile {
            font-size: .7em;
        }
        .technologies .logos img {
            height: 30px;
        }
    }
    .link {
        font-size: 0.9em;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .link h2 {
        padding-inline-start: 5px;
        color: black;
        text-decoration: None;
    }
    .icon-linked {
        color: rgb(30, 51, 146);
        font-size: 2em;
    }
    .icon-git {
        color: gray;
        font-size: 2em;
    }
    .logos img {
        height: 50px;
        padding-inline-start: 1px;
    }
    .logos #django {
        margin-left: 15px;
        margin-right: 5px;
    }
    header {
  line-height: 1.5;
}
.logos {
    margin-bottom: 20px;
}
.btn-container {
    padding: 10%;
}
.btn-container .project-btns a {
    justify-content: center;
    color: black;
    padding: 5%;
    text-decoration: None;
    font-size: 1.2em;
    font-weight: 600;
}
.btn-container .project-btns a:hover {
    color: white;
    background-color: rgb(57, 138, 138);
    border-radius: 55%;
    background-size: 5px;
    transition: background-color 1s;
}

/* @media only screen and (max-width: 800px){
    .main-container {
        width: 100%;
    }
} */

/* .logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>