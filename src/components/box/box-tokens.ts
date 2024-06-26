export type ContainerTags =
  | 'div'
  | 'section'
  | 'article'
  | 'nav'
  | 'aside'
  | 'header'
  | 'footer'
  | 'main'
  | 'figure'
  | 'figcaption'
  | 'button'
  | 'ul'

export type BackgroundColors =
  | 'background'
  | 'background-hover'
  | 'tag-background-yellow'
  | 'tag-background-red'
  | 'tag-background-green'

export type BorderColors =
  | 'border-interactive'
  | 'border-subtle-00'
  | 'border-subtle-01'
  | 'border-error'

export type Padding =
  | 'spacing-01'
  | 'spacing-02'
  | 'spacing-03'
  | 'spacing-04'
  | 'spacing-05'
  | 'spacing-06'
  | 'spacing-07'
  | 'spacing-08'
  | 'spacing-09'
  | 'spacing-10'
  | 'spacing-11'
  | 'spacing-12'
  | 'spacing-13'

export type Margin =
  | 'spacing-01'
  | 'spacing-02'
  | 'spacing-03'
  | 'spacing-04'
  | 'spacing-05'
  | 'spacing-06'
  | 'spacing-07'
  | 'spacing-08'
  | 'spacing-09'
  | 'spacing-10'
  | 'spacing-11'
  | 'spacing-12'
  | 'spacing-13'

export type Display = 'flex' | 'inline-flex' | 'block' | 'inline-block'

export type FlexDirection = 'row' | 'column'

export type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around'

export type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch'

export type Gap =
  | 'spacing-01'
  | 'spacing-02'
  | 'spacing-03'
  | 'spacing-04'
  | 'spacing-05'
  | 'spacing-06'
  | 'spacing-07'
  | 'spacing-08'
  | 'spacing-09'
  | 'spacing-10'
  | 'spacing-11'
  | 'spacing-12'
  | 'spacing-13'

export type BorderRadius =
  | 'border-radius-01'
  | 'border-radius-02'
  | 'border-radius-03'
  | 'border-radius-04'
  | 'border-radius-05'
  | 'border-radius-full'

export type Position = 'relative' | 'absolute' | 'fixed' | 'sticky'

type NumberPercentage = number | `${number}%`

export type Width = NumberPercentage
export type MinWidth = NumberPercentage
export type MaxWidth = NumberPercentage

export type Height = NumberPercentage
export type MinHeight = NumberPercentage
export type MaxHeight = NumberPercentage
