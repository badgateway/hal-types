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
   * Link hints, as defined in draft-nottingham-link-hint
   */
  hints?: LinkHints;

  /**
   * A URL that SHOULD provide further information about the resource deprecation.
   */
  deprecation?: string;

  /**
   * MAY be used as a secondary key for selecting Link Objects which share the same relation type.
   */
  name?: string

  /**
   * Its value is a string which is a URI that hints about the profile (as defined by [I-D.wilde-profile-link]) of the target resource.
   */
  profile?: string

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
  _links?: {
    self?: HalLink,
    [rel: string]: HalLink | HalLink[] | undefined;
  };

  /**
   * Embedded resources
   */
  _embedded?: {
    [rel: string]: HalResource | HalResource[] | undefined;
  };

  /**
   * HAL-FORMS
   */
  _templates?: Record<string, HalFormsTemplate>,

} & T;
