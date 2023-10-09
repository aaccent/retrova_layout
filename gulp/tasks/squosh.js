import gulp from 'gulp';
import config from '../config';
import gulpSquoosh from 'gulp-squoosh';

const squosh = () => {
  return gulp.src(`${config.src.images}/**/*.{jpg,png}`)
    .pipe(
      gulpSquoosh(({ width, height, size, filePath }) => ({
        preprocessOptions: {},
        encodeOptions: {
          // jxl: {
          //     quality: 80
          // },
          // avif: {
          //     quality: 80
          // },
          webp: {
            quality: 80
          },
          ...(filePath === ".png"
            ? { oxipng: { quality: 100 } }
            : { mozjpeg: { quality: 100 } }),
        },
      }))
    )
    .pipe(gulp.dest(`${config.dest.images}`));
}

export default squosh;
