import babel from 'rollup-plugin-babel';
import flow from 'rollup-plugin-flow-entry';


export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/stupid-rich-text.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/stupid-rich-text.esm.js',
      format: 'esm'
    },
  ],
  plugins: [
    flow(),
    babel({ exclude: 'node_modules/**' }),
  ],
};
