import { html, LitElement } from 'lit'
import { property } from 'lit/decorators.js'
import '../../components/wui-text/index.js'
import { resetStyles } from '../../utils/ThemeUtil.js'
import type { ColorType, IconType } from '../../utils/TypeUtil.js'
import { customElement } from '../../utils/WebComponentsUtil.js'
import '../wui-icon-box/index.js'
import styles from './styles.js'

@customElement('wui-snackbar')
export class WuiSnackbar extends LitElement {
  public static override styles = [resetStyles, styles]

  // -- State & Properties -------------------------------- //
  @property() public backgroundColor: ColorType = 'accent-100'

  @property() public iconColor: ColorType = 'accent-100'

  @property() public icon: IconType = 'checkmark'

  @property() public message = ''

  // -- Render -------------------------------------------- //
  public override render() {
    return html`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wui-snackbar': WuiSnackbar
  }
}
