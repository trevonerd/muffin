import multiEntry from 'rollup-plugin-multi-entry';
import babel from 'rollup-plugin-babel';
// import resolve from 'rollup-plugin-node-resolve';

module.exports = [
    {
        input: 'src/**/*.js',
        output: {
            file: 'dist/logic.js',
            format: 'cjs'
        },
        plugins: [multiEntry(), babel()],
        external: ['react']
    }
];
