
export default {
  bind() {
    this.el.on('load', () => {
      const iFrameHeight = `${element[0].contentWindow.document.body.scrollHeight}px`
      element.css('height', iFrameHeight)
    })
  },
  unbind() {
    this.el.off('load')
  }
}
