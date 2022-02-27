
import imagemin from 'gulp-imagemin';

export const img = () => {
    return (
        app.gulp.src(app.path.src.img)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Images",
                message: "Error: <%= error.message %>" 
            })
        ))
        
        .pipe(app.plugins.newer(app.path.build.img))
        .pipe(app.gulp.dest(app.path.build.img))
        .pipe(app.gulp.src(app.path.src.img))
        .pipe(app.plugins.newer(app.path.build.img))

        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 3,
        }))

        .pipe(app.gulp.dest(app.path.build.img))
        .pipe(app.plugins.browsersync.stream())
    ) 
}