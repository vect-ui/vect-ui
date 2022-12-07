import { dirname, resolve } from 'path'
import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import { execa } from 'execa'
const PKG_PREFIX = '@vect-ui'

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = resolve(rootDir, './packages/vect-ui/dist/types')

const rewriteAlias = code => {
  return code.replaceAll(PKG_PREFIX, 'vect-ui/dist/types/packages')
}

const rewrite = async dirName => {
  let _files = await fs.readdir(dirName, {
    recursive: true
  })
  return await Promise.all([
    ..._files.map(async file => {
      const newFile = resolve(dirName, file)
      const status = await fs.stat(newFile)
      if (status.isFile()) {
        fs.writeFile(newFile, rewriteAlias(await fs.readFile(newFile, 'utf-8')))
      } else if (status.isDirectory()) {
        await rewrite(newFile)
      }
    })
  ])
}

const genDtsByVueTsc = async () => {
  // 生成dts
  // await execa('rimraf', ['./packages/vect-ui/dist/types'], {
  //   cwd: rootDir
  // })

  // 生成dts
  await execa(
    'vue-tsc',
    ['-p', 'tsconfig.main.json', '--emitDeclarationOnly'],
    {
      cwd: rootDir
    }
  )

  // 删除编译产生的icons
  await fs.rm(resolve(outDir, 'packages/icons'), {
    recursive: true
  })

  await rewrite(outDir)

  transform()
}

const transform = async () => {
  const fromDir = resolve(outDir, 'packages/vect-ui')
  const toDir = outDir

  let dir = await fs.readdir(fromDir, {
    recursive: true
  })

  await Promise.all([
    ...dir.map(async file => {
      fs.copyFile(resolve(fromDir, file), resolve(toDir, file))
    })
  ])

  await fs.rm(fromDir, { recursive: true })
}

genDtsByVueTsc()
