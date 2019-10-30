import multiEntry from 'rollup-plugin-multi-entry';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

module.exports = [
    {
        input: 'src/components/**/*.js',
        output: {
            file: 'dist/components.js',
            format: 'umd',
            name: 'muffin'
        },
        plugins: [
            multiEntry(),
            resolve(),
            babel({
                exclude: 'node_modules/**'
            }),
            commonjs({
                include: /node_modules/,
                namedExports: {
                    'react-is': ['ForwardRef'],
                    'prop-types': ['elementType']
                }
            })
        ],
        external: ['react', 'react-dom']
    }
];
