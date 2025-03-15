import checkerWebpackPlugin from '../dist/index.js'

/**
 * @returns {import('webpack').Configuration}
 */
export default ()=>{
  return {
    entry:'./index.js',
    plugins:[
      new checkerWebpackPlugin({
        eslintConfig:'',
        
      })
    ],
    mode:'development'
  }
}
