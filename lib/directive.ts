import { ObjectDirective, DirectiveBinding, VNode } from 'vue'

type Complete<T> = {
  [P in keyof Required<T>]: Pick<T, P> extends Required<Pick<T, P>> ? T[P] : T[P] | undefined
}

interface AutowidthInput extends HTMLInputElement {
  mirror: HTMLElement
  options: Complete<InputAutoWidthOptions>
  windowResizeHandler?: () => void
  sizerFunc?: (e?: Event) => () => void
}

export interface InputAutoWidthOptions {
  maxWidth?: string
  minWidth?: string
  comfortZone?: string
  watchWindowSize?: boolean
  windowResizeHandlerDebounceTime?: number
  disableNonInputWarning?: boolean
}

const defaults: Complete<InputAutoWidthOptions> = {
  maxWidth: undefined,
  minWidth: undefined,
  comfortZone: '0px',
  watchWindowSize: true,
  windowResizeHandlerDebounceTime: 150,
  disableNonInputWarning: false,
} as const

export const debounce = <T extends (...args: any[]) => any>(callback: T, waitFor: number) => {
  let timeout: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>): ReturnType<T> => {
    let result: any
    timeout && clearTimeout(timeout)
    timeout = setTimeout(() => {
      result = callback(...args)
    }, waitFor)
    return result
  }
}

const checkWidth = (el: AutowidthInput) => {
  const { mirror, options } = el

  if (options.maxWidth) {
    el.style.maxWidth = options.maxWidth
  }

  if (options.minWidth) {
    el.style.minWidth = options.minWidth
  }

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

const copyStylesToMirror = (el: AutowidthInput) => {
  const styles = window.getComputedStyle(el)
  const { options } = el

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
}

const copyStylesAndCheckWidth = (el: AutowidthInput) => {
  copyStylesToMirror(el)
  checkWidth(el)
}

const mergeDefaultsWithOptions = (options: InputAutoWidthOptions): Complete<InputAutoWidthOptions> =>
  Object.assign({}, defaults, options)

export default {
  beforeMount: function (el: AutowidthInput, binding: DirectiveBinding) {
    el.options = mergeDefaultsWithOptions(binding.value as InputAutoWidthOptions)

    if (!el.options.disableNonInputWarning && el.tagName.toLocaleUpperCase() !== 'INPUT') {
      throw new Error('v-input-autowidth can only be used on input elements.')
    }
  },
  mounted: function (el: AutowidthInput, binding: DirectiveBinding, vnode: VNode) {
    const hasVModel = Object.prototype.hasOwnProperty.call(vnode.props, '@onUpdate:modelValue')

    el.sizerFunc = (_e?: Event) => checkWidth.bind(null, el)

    el.mirror = document.createElement('div')
    copyStylesToMirror(el)
    el.mirror.setAttribute('aria-hidden', 'true')
    document.body.appendChild(el.mirror)

    copyStylesAndCheckWidth(el)

    if (!hasVModel) {
      el.addEventListener('input', el.sizerFunc)
    }

    if (el.options.watchWindowSize && el.options.windowResizeHandlerDebounceTime !== undefined) {
      const windowResizeHandler = (_e?: Event) => copyStylesAndCheckWidth(el)
      el.windowResizeHandler = debounce(windowResizeHandler, el.options.windowResizeHandlerDebounceTime)
      window.addEventListener('resize', el.windowResizeHandler, { passive: true })
    }
  },
  updated: function (el: AutowidthInput) {
    if (el.sizerFunc) {
      el.sizerFunc()()
    }
  },
  unmounted: function (el: AutowidthInput) {
    document.body.removeChild(el.mirror)

    if (el.sizerFunc) {
      el.removeEventListener('input', el.sizerFunc)
    }

    if (el.options.watchWindowSize && el.windowResizeHandler) {
      window.removeEventListener('resize', el.windowResizeHandler)
    }
  },
} as ObjectDirective
