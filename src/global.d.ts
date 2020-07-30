declare const __PATH_PREFIX__: string
declare module '*.png'
declare module '*.jpg'
declare module '*.svg'
declare module '*.eot'
declare module '*.eot#iefix'
declare module '*.ttf'
declare module '*.woff'
declare module '*.woff2'
declare module '*.eot?pnm0hs'
declare module '*.eot?pnm0hs#iefix'
declare module '*.ttf?pnm0hs'
declare module '*.woff?pnm0hs'
declare module '*.svg?pnm0hs#icomoon'
declare module '*.svg#glyphicons_halflingsregular'

type ItemLink = {
  name: string
  href: string | undefined
}
type Breadcrumbs = ItemLink[]
