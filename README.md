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
5. `halFormsProperty` A single property from a HAL Form.

[1]: https://tools.ietf.org/html/draft-kelly-json-hal-00#section-5
[2]: https://tools.ietf.org/html/draft-kelly-json-hal-00#section-4
[3]: https://tools.ietf.org/html/draft-nottingham-link-hint
[4]: http://rwcbook.github.io/hal-forms/
