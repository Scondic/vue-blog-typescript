export type ClassNameList = Array<string | undefined>
export type NoStrictEntityMods = Record<string, string | boolean | number | undefined>
export type ClassNameInitilizer = (blockName: string, elemName?: string) => ClassNameFormatter
export interface ClassNameFormatter {
  (): string
  (mods?: NoStrictEntityMods | null, mix?: ClassNameList): string
  (elemName: string, elemMix?: ClassNameList): string
  (elemName: string, elemMods?: NoStrictEntityMods | null, elemMix?: ClassNameList): string
}

export type Preset = {
  n?: string
  e?: string
  m?: string
  v?: string
}

export function withNaming(preset: Preset): ClassNameInitilizer {
  const nameSpace = preset.n || ''
  const modValueDelimiter = preset.v || preset.m

  function stringify(b: string, e?: string, m?: NoStrictEntityMods | null, mix?: ClassNameList) {
    const entityName = e ? nameSpace + b + preset.e + e : nameSpace + b
    let className = entityName

    if (m) {
      const modPrefix = ' ' + className + preset.m

      for (const k in m) {
        if (m.hasOwnProperty(k)) {
          const modVal = m[k]

          if (modVal === true) {
            className += modPrefix + k
          } else if (modVal) {
            className += modPrefix + k + modValueDelimiter + modVal
          }
        }
      }
    }

    if (mix !== undefined) {
      for (let i = 0, len = mix.length; i < len; i++) {
        const value = mix[i]

        if (!value || typeof value.valueOf() !== 'string') continue

        const mixes = value.valueOf().split(' ')

        for (let j = 0; j < mixes.length; j++) {
          const val = mixes[j]
          if (val !== entityName) {
            className += ' ' + val
          }
        }
      }
    }

    return className
  }

  return function cnGenerator(b: string, e?: string): ClassNameFormatter {
    return (
      elemOrMods?: NoStrictEntityMods | string | null,
      elemModsOrBlockMix?: NoStrictEntityMods | ClassNameList | null,
      elemMix?: ClassNameList
    ) => {
      if (typeof elemOrMods === 'string') {
        if (Array.isArray(elemModsOrBlockMix)) {
          return stringify(b, elemOrMods, undefined, elemModsOrBlockMix)
        }
        return stringify(b, elemOrMods, elemModsOrBlockMix, elemMix)
      }
      return stringify(b, e, elemOrMods, elemModsOrBlockMix as ClassNameList)
    }
  }
}

export const cn = withNaming({
  e: '-',
  m: '_'
})
