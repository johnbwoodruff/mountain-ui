import { TestWindow } from '@stencil/core/testing';
import { Button } from './button';

describe('my-component', () => {
  it('should build', () => {
    expect(new Button()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLButtonElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Button],
        html: '<mtn-button></mtn-button>'
      });
    });
  });
});
