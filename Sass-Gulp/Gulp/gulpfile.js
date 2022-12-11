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

const { src, dest, watch } = require('gulp');
const sass = require("gulp-sass")(require('sass'));
const plumber = require("gulp-plumber");

/*
 el gulp este es el del package.json
y el require es una forma de extraerlo 
extraigo funciones q incluye gulp 
*/
/*
    src -> identifica directorios
    dest -> permite almacenar en carpeta destino
*/

function css(done) {

    src('src/scss/**/*.scss') // 1 -> identificar archivo sass
        .pipe(plumber()) // 1 bis -> error no detiene workflow
        .pipe(sass()) // 2 -> compilarlo
        .pipe(dest("build/css")); // 3 -> almacenarla en disco duro
    /* pipe() es algo q se ejecuta dsp de la funcion. puedo tener muchos*/
    console.log('css funciona')
    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css)
    /* mantiene abierta la funcion */
    done();
}


exports.css = css;
exports.dev = dev;


