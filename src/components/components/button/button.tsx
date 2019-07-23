import { Component, h, Prop } from '@stencil/core';
import { CssClassMap } from '../../utils/interfaces';

@Component({
  tag: 'mtn-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {
  @Prop({ reflectToAttr: true })
  disabled: boolean;

  @Prop()
  type: 'button' | 'reset' | 'submit' = 'button';

  @Prop()
  color: 'primary' | 'accent' | 'light' = 'primary';

  @Prop()
  shape: 'square' | 'round' = 'square';

  @Prop()
  size: 'small' | 'default' | 'large' = 'default';

  render() {
    const classMap = this.getCssClassMap();

    return (
      <button type={this.type} class={classMap} disabled={this.disabled}>
        <slot />
      </button>
    );
  }

  private getCssClassMap(): CssClassMap {
    return {
      [this.color]: true,
      [this.shape]: true,
      [this.size]: true
    };
  }
}
