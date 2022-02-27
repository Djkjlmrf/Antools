import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = `./dist`;
const srcFolder = `./src`;


export const path = {
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        img: `${buildFolder}/img/`,
        files: `${buildFolder}/files/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/js/style.js`,
        img: `${srcFolder}/img/**/*.{jpg,svg,jpeg,png,webp,gif}`,
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        img: `${srcFolder}/img/**/*.{jpg,svg,jpeg,png,webp,gif}`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}