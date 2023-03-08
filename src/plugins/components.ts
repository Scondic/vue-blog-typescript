import type { App, Component } from 'vue'

type Components = {
  [key: string]: Component & {
    default: any
  }
}

export const registerComponentsPlugin = (app: App): void => {
  const components = import.meta.glob('../components/*.vue', { eager: true })

  Object.entries(components as Components).forEach(([path, component]) => {
    const pathSplit = path.split('/')
    const componentName = pathSplit[pathSplit.length - 1].split('.vue')[0]

    app.component(`Base${componentName}`, component.default)
  })
}
