<template>
    <div>
        <nav>
            <img src='./assets/DroplitLabsLogo.svg' />
            <div class='tag-line'>
                We <span class='icon'><img src='./assets/noun_Heart_2070148_00e49b.svg' /></span> Open Source
            </div>
        </nav>
        <div class='intro'>
            There are few things we've built at <a href='https://droplit.io'>droplit.io</a> that we love so much, we decided to go the extra mile to polish, document, and share with the world.
        </div>
        <div class='container'>
            <div class='projects'>
                <a class="project" v-for="project of projects" v-bind:key="project.name" v-bind:href='project.url' v-bind:style='{ background: project.background }'>
                    <div class='name'>{{project.name}}</div>
                    <div class='logo'>
                        <img v-bind:src="'./assets/' + project.logo">
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

interface Project {
    name: string;
    url: string;
    logo: string;
    background?: string; // Hex color. i.e. #123abc 
}

@Component({
    components: {}
})
export default class Home extends Vue {
    projects: Project[] = [
        {
            name: 'Universal-WS',
            url: 'https://github.com/droplit/universal-ws',
            logo: 'UniversalWSLogo.svg',
        },
        {
            name: 'worqr',
            url: 'https://github.com/droplit/worqr',
            logo: 'WorqrLogo.svg',
        },
        {
            name: 'bashr',
            url: 'https://github.com/droplit/bashr',
            logo: 'BashrLogo.svg',
            background: '#E3E3E3'
        },
        {
            name: 'SerialTransport',
            url: 'https://github.com/droplit/serial-transport',
            logo: 'SerialTransportLogo.svg',
        }
    ];
}
</script>

<style lang='scss' scoped>
@import "./styles/_media.scss";
nav {
    background: #292b2e;
    color: #9f9f9f;
    width: 100%;
    text-align: center;
    padding-top: 100px;
    padding-bottom: 50px;
    img {
        height: 200px;
        width: 200px;
    }
    .tag-line {
        padding-top: 30px;
        font-size: 1.25em;
        .icon img {
            height: 1em;
            width: 1em;
            margin-bottom: -2px;
        }
    }
}
.intro {
    color: #ffffff;
    padding: 40px;
    text-align: center;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.25em;
    line-height: 1.25em;
}
.container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 20px;
    .projects {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 1fr;
        grid-gap: 15px;
        padding:15px;

        @media (max-width: $width-tablets) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: $width-phones) {
            grid-template-columns: repeat(1, 1fr);
        }

        .project {
            display: block;
            background: #292b2e;
            text-align: center;
            transition: background 200ms linear;
            &:hover {
                background: lighten(#292b2e, 5%);
            }
            .name {
                height: 60px;
                line-height: 60px;
                font-size: 1em;
                color: white;
                background-color: #1d1d1d;
            }
            .logo {
                padding: 15%;
                height: calc(100% - 60px);
                img {
                    width: 100%;
                    position: relative;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
    }
}
</style>
