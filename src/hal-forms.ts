/**
 * HAL-Forms Template.
 *
 * @see http://rwcbook.github.io/hal-forms/
 */
export interface HalFormsTemplate {
  /**
   * Mime-type for the form.
   *
   * If omitted, application/json should be assumed
   */
  contentType?: string;

  /**
   * HTTP Method
   */
  method: string;

  /**
   * List of properties in this HAL Form.
   *
   * If this is not set, the implication is that there are no properties.
   */
  properties?: HalFormsProperty[]

  /**
   * Human-readable title for the form
   */
  title?: string;

  /**
   * Default destination endpoint for the form.
   */
  target?: string;
}

/**
 * HAL-Forms property
 *
 * This type describes a single field in HAL-Forms
 */
export interface HalFormsProperty {

  /**
   * Name of the form field
   */
  name: string;

  /**
   * Human-readable label for the field
   */
  prompt?: string;

  /**
   * The property type.
   *
   * If not specified, this should default to 'text'.
   * This list corresponds with HTML5 input types.
   */
  type?: 'hidden' | 'text' | 'search' | 'tel' | 'url' | 'email' | 'password' | 'date' | 'month' | 'week' | 'time' | 'datetime-local' | 'number' | 'range' | 'color' | 'textarea',

  /**
   * Regular expression for validation the input
   */
  regex?: string;

  /**
   * Is this a required field?
   *
   * Defaults to false.
   */
  required?: boolean;

  /**
   * Is the field read-only?
   */
  readOnly?: boolean;

  /**
   * Whether the value element contains a URI Template.
   *
   * Defaults to false.
   */
  templated?: boolean;

  /**
   * Default or pre-existing value for the field
   */
  value?: string;

  /**
   * Equivalent of the HTML placeholder attribute.
   *
   * Shows a default value in a form control before the user entered any value.
   * This value disappears immediately after a user starts typing.
   */
  placeHolder?: string;

  /**
   * Minimum value for the property.
   *
   * Useful for things like numbers and dates.
   */
  min?: number;

  /**
   * Maximum value for the property.
   *
   * Useful for things like numbers and dates.
   */
  max?: number;

  /**
   * Step value.
   *
   * For example, if set to 10 this will enforce that the value can only be a
   * multiple of 10.
   */
  step?: number;

  /**
   * Minimum length for he value.
   *
   * Useful for string values.
   */
  minLength?: number;

  /**
   * Maximum value for the property.
   *
   * Useful for string values.
   */
  maxLength?: number;

  /**
   * For the 'textarea' type, specifies the number of columns when rendering the textarea
   */
  rows?: number;

  /**
   * For the 'textarea' type, specifies the number of rows when rendering the textarea
   */
  cols?: number;

}
