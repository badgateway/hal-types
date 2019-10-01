Typescript types for HAL documents
==================================

This repository exports a set of typescript types for
HAL documents.

It exports the following interfaces:

1. `HalLink`, representing an individual [HAL Link][1]
2. `HalResource`, representing a single [HAL document][2], with at least a
   `_links` property and optionally an `_embedded` property.

In addition to the standard HAL Link properties such as `href` and `title`, it
also has support for [Link hints][3], as defined in [draft-nottingham-link-hint][3].

[1]: https://tools.ietf.org/html/draft-kelly-json-hal-00#section-5
[2]: https://tools.ietf.org/html/draft-kelly-json-hal-00#section-4
[3]: https://tools.ietf.org/html/draft-nottingham-link-hint
