import {
  type BorderColors,
  type BackgroundColors,
  type Padding,
  type Display,
  type FlexDirection,
  type JustifyContent,
  type AlignItems,
  type Gap,
  type BorderRadius,
  type Position,
  type BorderSizes,
  type TextAlign,
  type FlexWrap,
} from '@/components/box/box-tokens'

export const backgroundStyles: { [key in BackgroundColors]: string } = {
  primary: 'bg-button-primary',
  background: 'bg-background',
  'background-hover': 'bg-background-hover',
  'tag-background-yellow': 'bg-notification-warning-background',
  'tag-background-red': 'bg-tag-background-red',
  'tag-background-green': 'bg-notification-success-background',
}

export const borderColorsStyles: { [key in BorderColors]: string } = {
  'border-interactive': 'border-border-interactive',
  'border-subtle-00': 'border-border-subtle-00',
  'border-subtle-01': 'border-border-subtle-01',
  'border-error': 'border-error',
}

export const borderSizeStyles: { [key in BorderSizes]: string } = {
  'border-1': 'border-[1px]',
  'border-2': 'border-2',
}

export const textAlignStyles: { [key in TextAlign]: string } = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
  start: 'text-start',
  end: 'text-end',
}

export const paddingStyles: { [key in Padding]: string } = {
  'spacing-01': 'p-0.5',
  'spacing-02': 'p-1',
  'spacing-03': 'p-2',
  'spacing-04': 'p-3',
  'spacing-05': 'p-4',
  'spacing-06': 'p-6',
  'spacing-07': 'p-8',
  'spacing-08': 'p-10',
  'spacing-09': 'p-12',
  'spacing-10': 'p-16',
  'spacing-11': 'p-20',
  'spacing-12': 'p-24',
  'spacing-13': 'p-40',
}

export const paddingXStyles: { [key in Padding]: string } = {
  'spacing-01': 'px-0.5',
  'spacing-02': 'px-1',
  'spacing-03': 'px-2',
  'spacing-04': 'px-3',
  'spacing-05': 'px-4',
  'spacing-06': 'px-6',
  'spacing-07': 'px-8',
  'spacing-08': 'px-10',
  'spacing-09': 'px-12',
  'spacing-10': 'px-16',
  'spacing-11': 'px-20',
  'spacing-12': 'px-24',
  'spacing-13': 'px-40',
}

export const paddingYStyles: { [key in Padding]: string } = {
  'spacing-01': 'py-0.5',
  'spacing-02': 'py-1',
  'spacing-03': 'py-2',
  'spacing-04': 'py-3',
  'spacing-05': 'py-4',
  'spacing-06': 'py-6',
  'spacing-07': 'py-8',
  'spacing-08': 'py-10',
  'spacing-09': 'py-12',
  'spacing-10': 'py-16',
  'spacing-11': 'py-20',
  'spacing-12': 'py-24',
  'spacing-13': 'py-40',
}
export const paddingTStyles: { [key in Padding]: string } = {
  'spacing-01': 'pt-0.5',
  'spacing-02': 'pt-1',
  'spacing-03': 'pt-2',
  'spacing-04': 'pt-3',
  'spacing-05': 'pt-4',
  'spacing-06': 'pt-6',
  'spacing-07': 'pt-8',
  'spacing-08': 'pt-10',
  'spacing-09': 'pt-12',
  'spacing-10': 'pt-16',
  'spacing-11': 'pt-20',
  'spacing-12': 'pt-24',
  'spacing-13': 'pt-40',
}

export const paddingRStyles: { [key in Padding]: string } = {
  'spacing-01': 'pr-0.5',
  'spacing-02': 'pr-1',
  'spacing-03': 'pr-2',
  'spacing-04': 'pr-3',
  'spacing-05': 'pr-4',
  'spacing-06': 'pr-6',
  'spacing-07': 'pr-8',
  'spacing-08': 'pr-10',
  'spacing-09': 'pr-12',
  'spacing-10': 'pr-16',
  'spacing-11': 'pr-20',
  'spacing-12': 'pr-24',
  'spacing-13': 'pr-40',
}

export const paddingBStyles: { [key in Padding]: string } = {
  'spacing-01': 'pb-0.5',
  'spacing-02': 'pb-1',
  'spacing-03': 'pb-2',
  'spacing-04': 'pb-3',
  'spacing-05': 'pb-4',
  'spacing-06': 'pb-6',
  'spacing-07': 'pb-8',
  'spacing-08': 'pb-10',
  'spacing-09': 'pb-12',
  'spacing-10': 'pb-16',
  'spacing-11': 'pb-20',
  'spacing-12': 'pb-24',
  'spacing-13': 'pb-40',
}

export const paddingLStyles: { [key in Padding]: string } = {
  'spacing-01': 'pl-0.5',
  'spacing-02': 'pl-1',
  'spacing-03': 'pl-2',
  'spacing-04': 'pl-3',
  'spacing-05': 'pl-4',
  'spacing-06': 'pl-6',
  'spacing-07': 'pl-8',
  'spacing-08': 'pl-10',
  'spacing-09': 'pl-12',
  'spacing-10': 'pl-16',
  'spacing-11': 'pl-20',
  'spacing-12': 'pl-24',
  'spacing-13': 'pl-40',
}

export const marginStyles: { [key in Padding]: string } = {
  'spacing-01': 'm-0.5',
  'spacing-02': 'm-1',
  'spacing-03': 'm-2',
  'spacing-04': 'm-3',
  'spacing-05': 'm-4',
  'spacing-06': 'm-6',
  'spacing-07': 'm-8',
  'spacing-08': 'm-10',
  'spacing-09': 'm-12',
  'spacing-10': 'm-16',
  'spacing-11': 'm-20',
  'spacing-12': 'm-24',
  'spacing-13': 'm-40',
}

export const marginXStyles: { [key in Padding]: string } = {
  'spacing-01': 'mx-0.5',
  'spacing-02': 'mx-1',
  'spacing-03': 'mx-2',
  'spacing-04': 'mx-3',
  'spacing-05': 'mx-4',
  'spacing-06': 'mx-6',
  'spacing-07': 'mx-8',
  'spacing-08': 'mx-10',
  'spacing-09': 'mx-12',
  'spacing-10': 'mx-16',
  'spacing-11': 'mx-20',
  'spacing-12': 'mx-24',
  'spacing-13': 'mx-40',
}

export const marginYStyles: { [key in Padding]: string } = {
  'spacing-01': 'my-0.5',
  'spacing-02': 'my-1',
  'spacing-03': 'my-2',
  'spacing-04': 'my-3',
  'spacing-05': 'my-4',
  'spacing-06': 'my-6',
  'spacing-07': 'my-8',
  'spacing-08': 'my-10',
  'spacing-09': 'my-12',
  'spacing-10': 'my-16',
  'spacing-11': 'my-20',
  'spacing-12': 'my-24',
  'spacing-13': 'my-40',
}
export const marginTStyles: { [key in Padding]: string } = {
  'spacing-01': 'mt-0.5',
  'spacing-02': 'mt-1',
  'spacing-03': 'mt-2',
  'spacing-04': 'mt-3',
  'spacing-05': 'mt-4',
  'spacing-06': 'mt-6',
  'spacing-07': 'mt-8',
  'spacing-08': 'mt-10',
  'spacing-09': 'mt-12',
  'spacing-10': 'mt-16',
  'spacing-11': 'mt-20',
  'spacing-12': 'mt-24',
  'spacing-13': 'mt-40',
}

export const marginRStyles: { [key in Padding]: string } = {
  'spacing-01': 'mr-0.5',
  'spacing-02': 'mr-1',
  'spacing-03': 'mr-2',
  'spacing-04': 'mr-3',
  'spacing-05': 'mr-4',
  'spacing-06': 'mr-6',
  'spacing-07': 'mr-8',
  'spacing-08': 'mr-10',
  'spacing-09': 'mr-12',
  'spacing-10': 'mr-16',
  'spacing-11': 'mr-20',
  'spacing-12': 'mr-24',
  'spacing-13': 'mr-40',
}

export const marginBStyles: { [key in Padding]: string } = {
  'spacing-01': 'mb-0.5',
  'spacing-02': 'mb-1',
  'spacing-03': 'mb-2',
  'spacing-04': 'mb-3',
  'spacing-05': 'mb-4',
  'spacing-06': 'mb-6',
  'spacing-07': 'mb-8',
  'spacing-08': 'mb-10',
  'spacing-09': 'mb-12',
  'spacing-10': 'mb-16',
  'spacing-11': 'mb-20',
  'spacing-12': 'mb-24',
  'spacing-13': 'mb-40',
}

export const marginLStyles: { [key in Padding]: string } = {
  'spacing-01': 'ml-0.5',
  'spacing-02': 'ml-1',
  'spacing-03': 'ml-2',
  'spacing-04': 'ml-3',
  'spacing-05': 'ml-4',
  'spacing-06': 'ml-6',
  'spacing-07': 'ml-8',
  'spacing-08': 'ml-10',
  'spacing-09': 'ml-12',
  'spacing-10': 'ml-16',
  'spacing-11': 'ml-20',
  'spacing-12': 'ml-24',
  'spacing-13': 'ml-40',
}

export const displayStyles: { [key in Display]: string } = {
  flex: 'flex',
  'inline-flex': 'inline-flex',
  block: 'block',
  'inline-block': 'inline-block',
}

export const flexDirectionStyles: { [key in FlexDirection]: string } = {
  row: 'flex-row',
  column: 'flex-col',
}

export const flexWrapStyles: { [key in FlexWrap]: string } = {
  wrap: 'flex-wrap',
  nowrap: 'flex-nowrap',
  'wrap-reverse': 'flex-wrap-reverse',
}

export const justifyContentStyles: { [key in JustifyContent]: string } = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
}

export const alignItemsStyles: { [key in AlignItems]: string } = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
}

export const gapStyles: { [key in Gap]: string } = {
  'spacing-01': 'gap-0.5',
  'spacing-02': 'gap-1',
  'spacing-03': 'gap-2',
  'spacing-04': 'gap-3',
  'spacing-05': 'gap-4',
  'spacing-06': 'gap-6',
  'spacing-07': 'gap-8',
  'spacing-08': 'gap-10',
  'spacing-09': 'gap-12',
  'spacing-10': 'gap-16',
  'spacing-11': 'gap-20',
  'spacing-12': 'gap-24',
  'spacing-13': 'gap-40',
}

export const gapXStyles: { [key in Gap]: string } = {
  'spacing-01': 'gap-x-0.5',
  'spacing-02': 'gap-x-1',
  'spacing-03': 'gap-x-2',
  'spacing-04': 'gap-x-3',
  'spacing-05': 'gap-x-4',
  'spacing-06': 'gap-x-6',
  'spacing-07': 'gap-x-8',
  'spacing-08': 'gap-x-10',
  'spacing-09': 'gap-x-12',
  'spacing-10': 'gap-x-16',
  'spacing-11': 'gap-x-20',
  'spacing-12': 'gap-x-24',
  'spacing-13': 'gap-x-40',
}

export const gapYStyles: { [key in Gap]: string } = {
  'spacing-01': 'gap-y-0.5',
  'spacing-02': 'gap-y-1',
  'spacing-03': 'gap-y-2',
  'spacing-04': 'gap-y-3',
  'spacing-05': 'gap-y-4',
  'spacing-06': 'gap-y-6',
  'spacing-07': 'gap-y-8',
  'spacing-08': 'gap-y-10',
  'spacing-09': 'gap-y-12',
  'spacing-10': 'gap-y-16',
  'spacing-11': 'gap-y-20',
  'spacing-12': 'gap-y-24',
  'spacing-13': 'gap-y-40',
}
export const borderRadiusStyles: { [key in BorderRadius]: string } = {
  'border-radius-01': 'rounded-[4px]',
  'border-radius-02': 'rounded-[10px]',
  'border-radius-03': 'rounded-xl',
  'border-radius-04': 'rounded-[20px]',
  'border-radius-05': 'rounded-3xl',
  'border-radius-full': 'rounded-full',
}

export const positionStyles: { [key in Position]: string } = {
  absolute: 'absolute',
  relative: 'relative',
  fixed: 'fixed',
  sticky: 'sticky',
  static: 'static',
}
