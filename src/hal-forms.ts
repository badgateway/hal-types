import { HalLink } from './hal';

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
export interface HalFormsBaseProperty {

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
  type?: string,

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

}

export type HalFormsProperty = HalFormsRangeProperty | HalFormsSimpleProperty | HalFormsTextAreaProperty;

/**
 * Basic HAL-Forms property
 *
 * This type describes a basic HAL forms property.
 */
export interface HalFormsSimpleProperty extends HalFormsBaseProperty {

  /**
   * The property type.
   *
   * If not specified, this should default to 'text'.
   * This list corresponds with HTML5 input types.
   */
  type?: 'hidden' | 'text' | 'search' | 'tel' | 'url' | 'email' | 'password' | 'color' | 'radio' | 'checkbox',

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
   * Options is an experimental feature.
   *
   * This structure is likely to change. This is for experimentation/testing purposes only!
   */
  options?: HalFormsOptions,

}

/**
 * Range HAL-Forms property.
 *
 * This type describes a HAL forms fiels that is has a range, such as numbers and dates.
 * These properties have a min, max and step property.
 *
 * This type describes a basic HAL forms property.
 */
export interface HalFormsRangeProperty extends HalFormsBaseProperty {

  /**
   * The property type.
   *
   * If not specified, this should default to 'text'.
   * This list corresponds with HTML5 input types.
   */
  type: 'date' | 'month' | 'week' | 'time' | 'datetime-local' | 'number' | 'range',

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

}

/**
 * TextArea HAL forms property
 *
 * This type describes a 'textarea' HAL forms field.
 */
export interface HalFormsTextAreaProperty extends HalFormsBaseProperty {

  /**
   * The property type.
   *
   * If not specified, this should default to 'text'.
   * This list corresponds with HTML5 input types.
   */
  type: 'textarea',

  /**
   * For the 'textarea' type, specifies the number of columns when rendering the textarea
   */
  rows?: number;

  /**
   * For the 'textarea' type, specifies the number of rows when rendering the textarea
   */
  cols?: number;

}

/**
 * HalFormsOptions is the 'options' property on fields.
 */
type HalFormsOptions = HalFormsOptionsDataSource & HalFormsOptionsMultiple;

/**
 * Helper type for the 'multiple' property and side-effects of it being set./
 */
type HalFormsOptionsMultiple = {
  /**
   * Allow the user to select exactly 1 value, or more than 1.
   */
  multiple?: false,

  /**
   * Current value of the field. This overrides value from the 'parent'.
   */
  selectedValues?: string|number|boolean

  /**
   * If the data source is an array of objects, use this property for the
   * label.
   *
   * If this is not set, 'prompt' is assumed.
   */
  promptField?: string;

  /**
   * If the data source is an array of objects, use this property for the
   * value
   *
   * If this is not set, 'value' is assumed.
   */
  valueField?: string;

} | {
  /**
   * Allow the user to select exactly 1 value, or more than 1.
   */
  multiple: true,

  /**
   * Current value of the field. This overrides value from the 'parent'.
   */
  selectedValues?: (string|number|boolean)[];

  /**
   * If provided, this will require a minimum number of items to be selected.
   * By default this is 0 if the property is optional, and 1 if it's required.
   */
  minItems?: number;

  /**
   * If provided, this will require a maximum number of items to be selected.
   * By default, there is no upper bound.
   */
  maxItems?: number;

  /**
   * If the data source is an array of objects, use this property for the
   * label.
   *
   * If this is not set, 'prompt' is assumed.
   */
  promptField?: string;

  /**
   * If the data source is an array of objects, use this property for the
   * value
   *
   * If this is not set, 'value' is assumed.
   */
  valueField?: string;

}

/**
 * Helper type for determining the data source for an 'options' property.
 *
 * The data source is either in-line, or fetched from an online source
 */
type HalFormsOptionsDataSource = HalFormsOptionsInline | HalFormsOptionsLink;

/**
 * Helper type for determining the data source for an 'options' property.
 *
 * The data source is either in-line, or fetched from an online source
 */
export type HalFormsOptionsInline = {

  /**
   * List of possible values.
   *
   * Only one of 'inline' or 'link' should be used.
   */
  inline: Record<string, string>[] | [];
}
/**
 * Helper type for determining the data source for an 'options' property.
 *
 * The data source is either in-line, or fetched from an online source
 */
export type HalFormsOptionsLink = {
  /**
   * If link is provided, clients should fetch the list of possible options
   * from this external location.
   *
   * Only one of 'inline' or 'link' should be used.
   */
  link: HalLink,
}
