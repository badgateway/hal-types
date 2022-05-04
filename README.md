Typescript types for HAL documents
==================================

This repository exports a set of typescript types for
HAL documents.

It exports the following interfaces:

1. `HalLink`, representing an individual [HAL Link][1]
2. `HalResource`, representing a single [HAL document][2], with at least a
   `_links` property and optionally `_embedded` property and `_templates` properties.
3. `LinkHints`, an extension to links, as defined in [draft-nottingham-link-hint][3].
4. `HalFormsTemplate`, A [HAL Forms][4] template object.
5. `HalFormsProperty` A single property from a HAL Form.

[1]: https://tools.ietf.org/html/draft-kelly-json-hal-00#section-5
[2]: https://tools.ietf.org/html/draft-kelly-json-hal-00#section-4
[3]: https://tools.ietf.org/html/draft-nottingham-link-hint
[4]: http://rwcbook.github.io/hal-forms/

# Usage

This example shows how to create a TypeScript type for your HAL-based resource, by extending the `HALResource` type.
```TypeScript
import { HalResource, HalLink } from 'hal-types';

export type ExampleResource = HalResource & {
  _links: {
    copyright: HalLink;
    related?: HalLink[];
    "http://example.net/foo": HalLink;
  }
  _embedded: {
    alternate: HalResource;
    collection?: HalResource;
    author: HalResource[];
  }
  title: string;
  pageCount?: number;
  description: {
    summary: string;
    introduction: string;
  };
}
```
Note that the `self` link does not need to be included as this is already provided by `HalResource`.

While this is not readily apparent in this example, the properties within the `_links` and `_embedded` objects must be [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml) (though this is not enforced). This example mostly uses registered Link Relations which you can refer to by name. In many cases, you will need to use custom Link Relations (called [extension relation types](https://www.rfc-editor.org/rfc/rfc8288.html#section-2.1.2)), which take the form of a URI (e.g. the link `http://example.net/foo` in this example).
