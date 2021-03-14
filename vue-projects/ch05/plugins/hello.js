export default {
  install: (app, options) => {
    // baca dari options yang didefinisikan saat menggunakan plugins
    const { dataFromOption } = options

    // inject method
    app.config.globalProperties.log = (message) => {
      // jika message kosong maka yang ditampilkan dataFromOption
      console.log('global method : '+ (message || dataFromOption))
    }

    // inject method
    app.config.globalProperties.$log = (message) => {
      // jika message kosong maka yang ditampilkan dataFromOption
      console.log('global method : '+ (message || dataFromOption))
    }

    // inject directive
    app.directive('focus', {
      // diterakan ketika hooks mounted
      mounted (el, binding, vnode, oldVnode) {
        console.log('global directive : set focus')
        el.focus()
      }
    })

    // inject mixins
    app.mixin({
      // inject hooks created
      created() {
        console.log('mixin created : '+dataFromOption)
      }
    })
  }
}