import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/animatex.js',
    output: [
        {
            file: 'dist/animatex.min.js',
            format: 'umd',
            name: 'AnimateX',
            plugins: [terser()],
            sourcemap: true
        },
        {
            file: 'dist/animatex.js',
            format: 'umd',
            name: 'AnimateX',
            sourcemap: true
        },
        {
            file: 'dist/animatex.esm.js',
            format: 'es',
            sourcemap: true
        }
    ],
    plugins: [
        resolve()
    ]
}; 