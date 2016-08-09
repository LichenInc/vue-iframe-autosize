import { iframeResizer } from 'iframe-resizer'
console.log(iframeResizer);
export default {
  bind() {
    // util.on(this.el, 'load', () => {
    //   const iFrameHeight = `${this.el[0].contentWindow.document.body.scrollHeight}px`
    //   this.el.css('height', iFrameHeight)
    // })
  },
  unbind() {
    // util.on(this.el, 'load')
  }
}
