import { Worker } from 'node:worker_threads'
import type { Compiler, sources } from 'webpack'

interface CheckerWebpackPluginOption {}

export default class {
  constructor(private option:CheckerWebpackPluginOption) {
    console.log(option)
  }
  
  apply(compiler:Compiler) {
    compiler.hooks.done.tap('done', ({ compilation })=>{
    
    })

    compiler.hooks.emit.tap('emit', compilation=>{
      const { assets } = compilation

      for(const assertName in assets) {
        const cachedSource = assets[assertName]
      }

      assets['report.log'] = {
        source() {
          return ''
        },
        size() {
          return 0
        }
      } as sources.Source

    })

  }
}
