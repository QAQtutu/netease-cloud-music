const requireComponent = require.context('./', true, /\.vue$/);

import { App } from 'vue'

function changeStr(str: String) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const install = (Vue: App) => {

  const req = require.context('@/assets/icons', false, /\.svg$/)
  const requireAll = (requireContext: any) => requireContext.keys().map(requireContext)
  requireAll(req)

  requireComponent.keys().forEach(fileName => {
    const config = requireComponent(fileName);
    console.log(config) // ./Sanjiaoxing.vue 然后用正则拿到Sanjiaoxing
    const componentName = changeStr(
      fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
    )
    const component = config.default || config
    console.log(component.name ? component.name : componentName)
    Vue.component(component.name ? component.name : componentName, component);
  })


}

export default {
  install // 对外暴露install方法
}