import { ObjectDirective, DirectiveBinding, VNode } from 'vue'

type Complete<T> = {
  [P in keyof Required<T>]: Pick<T, P> extends Required<Pick<T, P>> ? T[P] : T[P] | undefined
}

interface InputWithMirror extends HTMLInputElement {
  mirror: HTMLElement
}

export interface InputAutoWidthOptions {
  maxWidth?: string
  minWidth?: string
  comfortZone?: string
}

const defaults: Complete<InputAutoWidthOptions> = {
  maxWidth: 'none',
  minWidth: 'none',
  comfortZone: '0px',
} as const

const checkWidth = (el: InputWithMirror, options: Complete<InputAutoWidthOptions>) => {
  const mirror: HTMLElement = el.mirror

  el.style.maxWidth = options.maxWidth || 'none'
  el.style.minWidth = options.minWidth || 'none'

  let val = el.value

  if (!val) {
    val = el.placeholder || ''
  }

  while (mirror.childNodes.length) {
    mirror.removeChild(mirror.childNodes[0])
  }

  mirror.appendChild(document.createTextNode(val))

  const newWidth = mirror.scrollWidth + 2

  if (newWidth != el.scrollWidth) {
    el.style.width = `${newWidth}px`
  }
}

const mergeDefaultWithOptions = (options: InputAutoWidthOptions) => Object.assign({}, defaults, options)

export default {
  beforeMount: function (el: HTMLElement) {
    if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
      throw new Error('v-input-autowidth can only be used on input elements.')
    }
  },
  mounted: function (el: InputWithMirror, binding: DirectiveBinding, vnode: VNode) {
    const options: Complete<InputAutoWidthOptions> = mergeDefaultWithOptions(binding.value)
    const hasVModel = Object.prototype.hasOwnProperty.call(vnode.props, '@onUpdate:modelValue')
    const styles = window.getComputedStyle(el)

    el.mirror = document.createElement('div')

    Object.assign(el.mirror.style, {
      position: 'absolute',
      top: '0',
      left: '0',
      visibility: 'hidden',
      height: '0',
      overflow: 'hidden',
      whiteSpace: 'pre',
      fontSize: styles.fontSize,
      fontFamily: styles.fontFamily,
      fontWeight: styles.fontWeight,
      fontStyle: styles.fontStyle,
      letterSpacing: styles.letterSpacing,
      textTransform: styles.textTransform,
      paddingRight: `calc(${options.comfortZone} + ${styles.paddingRight} + ${styles.borderRightWidth})`,
      paddingLeft: `calc(${styles.paddingLeft} + ${styles.borderLeftWidth})`,
    })

    el.mirror.setAttribute('aria-hidden', 'true')

    document.body.appendChild(el.mirror)

    checkWidth(el, options)

    if (!hasVModel) {
      el.addEventListener('input', checkWidth.bind(null, el, options))
    }
  },
  updated: function (el: InputWithMirror, binding: DirectiveBinding) {
    checkWidth(el, mergeDefaultWithOptions(binding.value))
  },
  unmounted: function (el: InputWithMirror, binding: DirectiveBinding) {
    document.body.removeChild(el.mirror)
    el.removeEventListener('input', checkWidth.bind(null, el, mergeDefaultWithOptions(binding.value)))
  },
} as ObjectDirective
