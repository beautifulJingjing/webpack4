// ------------------------------------------------------------------------------
// name: button.d
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2018/11/7
// ------------------------------------------------------------------------------

import { ComponentBase, ComponentSize, ThemeType } from './component';

/** Button type */
export type ButtonType = ThemeType | 'text';

/** Same as native button's type */
export type ButtonNativeType = 'button' | 'submit' | 'reset' | 'menu';

/** Button Component */
export declare class IsButton extends ComponentBase
{
  /** Button size */
  size:ComponentSize;

  /** Button type */
  type:ButtonType;

  /** Determine whether it's a plain button */
  plain:boolean;

  /** Determine whether it's a round button */
  round:boolean;

  /** Determine whether it's loading */
  loading:boolean;

  /** Disable the button */
  disabled:boolean;

  /** Button icon, accepts an icon name of Element icon component */
  icon:string;

  /** Same as native button's autofocus */
  autofocus:boolean;

  /** Same as native button's type */
  nativeType:ButtonNativeType;
}

