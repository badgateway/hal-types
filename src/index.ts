/**
 * A single HAL link
 */
export type HalLink = {

  href: string,
  templated?: boolean,
  title?: string,
  hreflang?: string,

}

/**
 * A HAL document
 */
export type HalResource = {

  _links: {
    [rel: string]: HalLink | HalLink[],
  },
  [property: string]: any,
  _embedded?: {
    [rel: string]: HalResource | HalResource[],
  },

}
