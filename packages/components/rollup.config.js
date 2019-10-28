import multiEntry from 'rollup-plugin-multi-entry';
import babel from 'rollup-plugin-babel';
// import resolve from 'rollup-plugin-node-resolve';

module.exports = [
    {
        input: 'src/components/**/*.js',
        output: {
            file: 'dist/components.js',
            format: 'cjs'
        },
        plugins: [multiEntry(), babel()],
        external: ['react', '@material-ui/core/Button'] // <-- suppresses the warning]
    }
];
