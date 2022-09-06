import { AfterViewInit, Component, EventEmitter, Input, Output, ViewEncapsulation, ElementRef } from '@angular/core';

/**
 * @typedef {"primary" | "secondary" | "danger" | "primary-outline" | "secondary-outline" | "danger-outline" | "primary-text" | "secondary-text" | "danger-text"} ButtonType
 * @typedef { "basic" | "raised" |  "stroked" | "flat" | "icon" | "circle" | "mini-circle"} ButtonStyling
 * @typedef {"small" | "medium" | "large"} ButtonSize
 */

/*
Note: material design has "accent" and "secondary" really meaning the same thing. We call it "secondary", but styling is referred to as "accent"
*/

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MyButtonComponent implements AfterViewInit {
  // chosenIcon = icons.faPersonRunning;

  private el: HTMLElement;

  /**
   * Button contents
   * @deprecated Use content projection instead. This exists because of the stories and typescript requiring valid props. TODO: Remove this requirement
   */
  @Input() text: string = 'Button';

  /**
   * Type of button. Automatically styles the button to match the type. This will override other bindings.
   * @param {ButtonType} type
   */
  @Input() type: "primary" | "secondary" | "danger" | "primary-outline" | "secondary-outline" | "danger-outline" | "primary-text" | "secondary-text" | "danger-text" | undefined;

  /**
   * Style of the button
   * Possible values: basic, raised, stroked, flat, icon, circle, mini-circle
   * @param {ButtonStyling} styling
   */
  @Input() styling: "basic" | "raised" | "stroked" | "flat" | "icon" | "circle" | "mini-circle" = 'basic';

  /**
   * Color of the button
   * @param {ButtonType} color - The color of the button
   */
  @Input() color: 'primary' | 'secondary' | 'danger' = 'primary';

  /**
   * Size of the button
   * @param {ButtonSize} size - Size of the button
   */
  @Input() size: "small" | "medium" | "large" = 'medium';

  /**
   * Whether or not the button is disabled
   */
  @Input() disabled: boolean = false;

  /**
   * The aria-label for the button
   * @param {string} [ariaLabel] - The aria-label for the button
   */
  @Input() ariaLabel: string | undefined;

  /**
   * The adopted style sheet for the component (using Constructable Stylesheets)
   * @see https://web.dev/constructable-stylesheets/
   * @param {CSSStyleSheet} [adoptedStyleSheet] - The adopted style sheet for the component
   */
  @Input() adoptedStyleSheet: CSSStyleSheet | undefined;

  /**
   * Optional click handler
   */
  @Output() onClick = new EventEmitter<Event>(); // TODO: It appears that Storybook looks for an 'on*' event to track actions, which goes against Angular linting rules

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }


  /**
   * Get color based off button type or specific color
   */
  get buttonColor(): string {
    switch (this.type) {
      case 'primary':
      case 'primary-outline':
      case 'primary-text':
        return 'primary';
      case 'secondary':
      case 'secondary-outline':
      case 'secondary-text':
        return 'accent';
      case 'danger':
      case 'danger-outline':
      case 'danger-text':
        return 'warn';
      default:
        //Translate "secondary" to "accent" and "danger" to "warn" for material
        return this.color == 'secondary' ? 'accent'
          : this.color == 'danger' ? 'warn'
            : this.color;
    }
  }

  /**
   * Get styling based off button type or specific styling
   */
  get buttonStyling(): string {
    switch (this.type) {
      case 'primary':
      case 'secondary':
      case 'danger':
        return 'flat';
      case 'primary-outline':
      case 'secondary-outline':
      case 'danger-outline':
        return 'stroked';
      case 'primary-text':
      case 'secondary-text':
      case 'danger-text':
        return 'basic';
      default:
        //If the styling is circle, but we've also set the size to small, then we want to use mini-circle. Warn in the console that this isn't good practice
        if (this.styling == 'circle' && this.size == 'small') {
          console.warn('Using a "small" sized circle button is not recommended. Use a mini-circle button instead.');
          return 'mini-circle';
        }
        return this.styling;
    }
  }

  get buttonSizeClass(): string {
    switch (this.size) {
      case 'small':
        return 'sf-button__small';
      case 'medium':
        return 'sf-button__medium';
      case 'large':
        return 'sf-button__large';
      default:
        return 'sf-button__medium';
    }
  }

  ngAfterViewInit(): void {
    // debugger;
    //If we have an adoptedStyleSheet, then add it to the shadow root
    if (this.adoptedStyleSheet && this.el.shadowRoot) {
      let shadowRoot = this.el.shadowRoot;
      shadowRoot.adoptedStyleSheets = [this.adoptedStyleSheet];
    }
  }

}