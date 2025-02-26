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
  formats?: string[];

  /**
   * A list of media-types the target resource supports for
   * POST request bodies
   */
  'accept-post'?: string[];

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
   * resource, for example 'Basic', 'Digest', 'Bearer'.
   */
  'auth-schemes'?: string[];

  /**
   * A list of authentication realms available at the target
   */
  'auth-realms'?: string[];

  /**
   * A status for the resource.
   *
   * Indicates that the resource is deprecated, or 'gone' (would result in a
   * 410 status code).
   */
  status?: 'deprecated' | 'gone';

}
