import { HalLink } from './hal';

/**
 * Link hints.
 *
 * See: https://tools.ietf.org/html/draft-nottingham-link-hint
 */
export interface LinkHints {

  /**
   * List of HTTP methods that can be used on the target
   * resource
   */
  allow?: string[];

  /**
   * List of supported formats (used in for example GET responses
   * or PUT requests
   */
  formats?: LinkHintFormats;

  /**
   * List of links that exists at the context of the hint.
   *
   * This allows to specify links that exists at the target
   * resource. For example, you might add an 'edit-form' link
   * on a link, allowing clients to render an edit button
   * for a target.
   */
  links?: {
    [rel: string]: HalLink;
  };

  /**
   * A list of media-types the target resource supports for
   * POST request bodies
   */
  'accept-post'?: LinkHintFormats;

  /**
   * Array of media-types that the target resource supports for
   * PATCH request bodies.
   *
   * Unlike 'accept-post', this does not support objects with
   * schema links or the deprecated flag.
   */
  'accept-patch'?: string[];

  /**
   * Array of range-specifiers the resource supports.
   *
   * The values are equivalent to the contents of the Accept-Ranges
   * HTTP header
   */
  'accept-ranges'?: string[];

  /**
   * List of values for the Prefer header that the resource
   * supports.
   */
  'accept-prefer'?: string[];

  /**
   * A hint that the target resource requires the use of precondition
   * headers such as If-Modified-Since or If-Match for state-changing
   * requests such as PUT, POST, DELETE.
   */
  'precondition-req'?: ('etag'|'last-modified')[];

  /**
   * A list of authentication schemes that are required at the target
   * resource
   */
  'auth-schemes'?: LinkHintAuthScheme[];

  /**
   * A status for the resource.
   *
   * Indicates that the resource is deprecated, or 'gone' (would result in a
   * 410 status code).
   */
  status?: 'deprecated' | 'gone';

}

/**
 * A supported format, indexed by media type
 */
interface LinkHintFormats {

  [mediaType: string]: {
    /**
     * Relevant links to the format.
     *
     * Mainly this could contain a 'profile' or 'describedby'
     * link. These both describe a schema for the format
     */
    links?: {
      [rel: string]: HalLink;
    };

    /**
     * If set to true, it indicates that this format is
     * deprecated
     */
    deprecated?: boolean;
  };
}

interface LinkHintAuthScheme {
  /**
   * A registered authenticaiton scheme such as 'Basic', 'Digest' or 'Bearer'.
   */
  scheme: string;

  /**
   * Realm information from the authentation scheme, similar to the "realm"
   * attribute on the WWW-Authentication header.
   */
  realm?: string;

}
