/* cada funcion es una tarea para gulp */
/* esta tarea requiere node.js para ejecutarse */

function tarea() {
    console.log("mi primer tarea");
    /* done -> cuando finaliza */
    /* forma anterior de tener codigo async en js */
    /* cuando se llama significa q ya termino de ejecutarse tarea() */
}

/* llamar funcion con node.js */
/* export. "nombre con el q lo llamo" */
exports.tarea = tarea;

const { src, dest, watch, parallel } = require('gulp');
/*
    src -> identifica directorios
    dest -> permite almacenar en carpeta destino
*/
/*
 el gulp este es el del package.json
y el require es una forma de extraerlo 
extraigo funciones q incluye gulp 
*/

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps')

// Imagenes
const cache = require('gulp-cache');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');

// Javascript
const terser = require('gulp-terser-js');

function css(done) {

    src('src/scss/**/*.scss') // 1 -> identificar archivo sass
        .pipe(sourcemaps.init())
        .pipe(plumber()) // 1 bis -> error no detiene workflow
        .pipe(sass()) // 2 -> compilarlo
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest("build/css")); // 3 -> almacenarla en disco duro
    /* pipe() es algo q se ejecuta dsp de la funcion. puedo tener muchos*/
    console.log('css funciona')
    done();
}

function versionWebp(done) {
    const opciones = {
        quality: 50 // 0 a 100
    };
    src('src/img/**/*.{png, jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))
    done();
}

function imagenes(done) {
    const opciones = {
        optimizationLevel: 3
    };
    src('src/img/**/*.{png, jpg}')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('build/img'))
    done();
}

function javascript(done) {
    src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/js'))
    done();

}

function dev(done) {
    watch('src/scss/**/*.scss', css)
    /* mantiene abierta la funcion */
    done();
}

exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.dev = parallel(imagenes, versionWebp, javascript, dev);


