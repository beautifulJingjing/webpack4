// ------------------------------------------------------------------------------
// name: yinhe-ui.d
// author: caojingjing
// created: 2019/5/6
// ------------------------------------------------------------------------------

import Vue from 'vue';
import { ComponentSize } from './component';
import { IsButton } from "./button";

/** installer's options */
export declare interface InstallOption
{
  /**
   * 全局指定各组件的默认尺寸类型
   * <p>一般取值为：'large' | 'medium' | 'small' | 'mini'</p>
   */
  size?:ComponentSize;

  /**
   * yh-ui 组件库浮层控件的默认起始值
   * @default 2000
   */
  zIndex?:number;

  /**
   * 是否仅设置全局参数，而不必注册组件
   * <p>适用于只需要设置全局参数，而对组件进行自主独立引用的场景。</p>
   */
  onlyOption?:boolean;
}

/** yinhe-ui installer */
export function install( vue:typeof Vue, options:InstallOption );

/** Button Component */
export class Button extends IsButton{}

