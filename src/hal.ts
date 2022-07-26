import { LinkHints } from './link-hints';
import { HalFormsTemplate } from './hal-forms';

/**
 * A single HAL link
 */
export interface HalLink {

  /**
   * Target of the link
   */
  href: string;

  /**
   * Content-type of the target resource
   */
  type?: string;

  /**
   * If set to true, the href should be interpeted as a URI-Template (RFC6570).
   */
  templated?: boolean;

  /**
   * Human readable title for the link
   */
  title?: string;

  /**
   * Language of the target resource, such as 'en-CA'.
   */
  hreflang?: string;

  /**
   * This property contains a URI that's hints about the 'profile'.
   *
   * @see @{link https://datatracker.ietf.org/doc/html/draft-wilde-profile-link|draft-wilde-profile-link}
   */
  profile?: string;

  /**
   * Name of the link
   *
   * This may be used as a secondary key to find a link, if there are multiple
   * with the same relationship name.
   */
  name?: string;

  /**
   * If this property is present, it implies that the link is deprecated,
   * and should no longer be used.
   *
   * This should be a URL pointing to a page that has more information about
   * the deprecation.
   */
  deprecation?: string;

  /**
   * Link hints, as defined in draft-nottingham-link-hint
   */
  hints?: LinkHints;

}

/**
 * A HAL document
 */
export type HalResource<T extends Record<string, any> = Record<string, any>> = {

  /**
   * List of links, indexed by their relationship.
   *
   * Each value is either a Link, or an array of Links
   */
  _links: {
    self: HalLink;
    [rel: string]: HalLink | HalLink[];
  };

  /**
   * Embedded resources
   */
  _embedded?: {
    [rel: string]: HalResource | HalResource[];
  };

  /**
   * HAL-FORMS
   */
  _templates?: Record<string, HalFormsTemplate>;

} & T;
