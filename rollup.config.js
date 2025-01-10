import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/velocityfx.js',
    output: [
        {
            file: 'dist/velocityfx.min.js',
            format: 'umd',
            name: 'VelocityFX',
            plugins: [terser()],
            sourcemap: true
        },
        {
            file: 'dist/velocityfx.js',
            format: 'umd',
            name: 'VelocityFX',
            sourcemap: true
        },
        {
            file: 'dist/velocityfx.esm.js',
            format: 'es',
            sourcemap: true
        }
    ],
    plugins: [
        resolve()
    ]
}; 