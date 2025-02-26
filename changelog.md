ChangeLog
=========

2.0.0 (2025-02-26)
------------------

* Update link-hint to latest draft. The types changed in a few different
  places, so if you used link-hints, this is likely a BC break for you.
* Fixed: In hal the _links object is recommended, but optional and a HAL
  document doesn\'t need to have a 'self' link. Both of these are corrected to
  be optional. This is more correct, but could also be a BC break if you're
  upgrading from v1.


1.9.0 (2023-01-08)
------------------

* `placeholder` from HAL Forms was incorrectly cased as `placeHolder`. This is
  fixed but could be a BC break. (@dayre)


1.8.0 (2022-06-26)
------------------

* Add `name`, `deprecation` and `profile` properties to HAL Links. These were
  part of the base spec and should always have been there.


1.7.7 (2022-05-04)
------------------

* Fix a second BC breaking change. `_links` should not be omitted. If `_links`
  may be omitted this change might be re-introduce in a major version.


1.7.6 (2022-05-04)
------------------

* Fix bc-breaking change. `_links` values were marked as possibly undefined,
  and this should never have been the case.


1.7.5 (2022-05-04)
------------------

* Added 'minLength' and 'maxLength' to textarea fields. (@dayre)


1.7.4 (2021-02-21)
------------------

* Fixed typing of 'inline'.


1.7.3 (2021-02-21)
------------------

* Add another missing `promptField`, `valueField`.


1.7.2 (2021-02-21)
------------------

* Add `promptField`, `valueField` properties from HAL-Forms.


1.7.1 (2021-02-21)
------------------

* Added type: range
* Now exporting: * `HalFormsSimpleProperty` * `HalFormsRangeProperty` *
  `HalFormsOptionsInline` * `HalFormsOptionsLink`


1.7.0 (2021-02-20)
------------------

* Updated to HAL Forms 2021-02-20, which adds support for the 'options'
  property. This property can be used to generate lists of possible values in
  form fields, including values from external HTTP sources.


1.6.1 (2021-01-03)
------------------

* Fix a bug in new generic `HalResource`. Current version should do what was
  expected.


1.6.0 (2021-01-03)
------------------

* Update to HAL Forms 2020-12-31, which allows multiple Hal Forms to appear in
  a document.
* HalResource is now generic, allowing users to provide a type for other
  properties on this object. By default it's `Record<string, any>`, which makes
  it backwards compatible.


1.5.0 (2020-12-30)
------------------

* Update to HAL-Forms 2020-12-29, which adds support for a `textarea` type, and
  `cols` and `rows` fields on form fields.


1.4.0 (2020-12-20)
------------------

* Update to HAL-Forms 2020-12-17, which adds support for a `type` attribute on
  properties, similar to the HTML `type` attribute.


1.3.0 (2020-12-17)
------------------

* Update to Hal-Forms 2020-12-13, which adds support for a `target` attribute
  on forms, and `placeholder`, `min`, `max`, `step`, `minLength`, `maxLength`
  on properties.


1.2.1 (2020-09-07)
------------------

* Exporting `HalFormsTemplate` and `HalFormsProperty`


1.2.0 (2020-09-07)
------------------

* Added support for 'Hal Forms'. See https://rwcbook.github.io/hal-forms/ for
  details.


1.1.0 (2020-08-15)
------------------

* The `LinkHints` interface is now exported.


1.0.0 (2020-04-16)
------------------

* Stable release
* The 'self' link should always appear on a HAL resource, and only ever once.


0.1.2 (2019-09-30)
------------------

* Forgot to build files before publishing.


0.1.1 (2019-09-30)
------------------

* Added a `type` property on links. This was not in the HAL draft, but it's
  super common and part of the Web Linking model.


0.1.0 (2019-09-30)
------------------

* Use `interface` instead of `type`.
* Support for draft-nottingham-link-hint


0.0.1 (2019-09-30)
------------------

* First version!
