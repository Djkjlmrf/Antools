import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";

const  sass = gulpSass(dartSass)


export const scss = () => {
    return app.gulp.src(app.path.src.scss, {sourcemap:true})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Scss",
                message: "Error: <%= error.message %>" 
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, "../img/"))

        .pipe(sass({
            outputStyle: "expanded",

        }))

        .pipe(autoprefixer({
            grid: true,
            overrideBrowserlisr: ["last 3 version"],
            cascade: true,
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname: ".min.css",
        }))

        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}