import babel from 'rollup-plugin-babel';
import flow from 'rollup-plugin-flow-entry';
import resolve from 'rollup-plugin-node-resolve';


export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/srt-react-renderer.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/srt-react-renderer.esm.js',
      format: 'esm'
    },
  ],
  plugins: [
    flow(),
    babel({ exclude: 'node_modules/**' }),
    resolve(),
  ],
  external: ['react']
};
