import Vue from 'vue';

/** YinheUI component common definition */
export declare class ComponentBase extends Vue
{
  /** Install component into Vue */
  static install( vue:typeof Vue ):void
}

/**
 * Theme type
 * <code>types: 'primary' | 'success' | 'warning' | 'danger' | 'info'</code>
 */
export type ThemeType = 'primary' | 'success' | 'warning' | 'danger' | 'info';

/**
 * Component size definition for button, input, etc
 * <code>types: 'large' | 'medium' | 'small' | 'mini'</code>
 */
export type ComponentSize = 'large' | 'medium' | 'small' | 'mini';

/**
 * Horizontal alignment
 * <code>types: 'left' | 'center' | 'right'</code>
 */
export type HorizontalAlignment = 'left' | 'center' | 'right';

/**
 * Vertical alignment
 * <code>types: 'top' | 'middle' | 'bottom' | 'baseline'</code>
 */
export type VerticalAlignment = 'top' | 'middle' | 'bottom' | 'baseline';
