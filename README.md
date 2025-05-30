<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# erf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Error function][error-function].

<section class="intro">

The [error function][error-function] is defined as

<!-- <equation class="equation" label="eq:error_function" align="center" raw="\operatorname{erf}(x) = \frac{2}{\sqrt\pi}\int_0^x e^{-t^2}\,\mathrm dt" alt="Error function."> -->

```math
\mathop{\mathrm{erf}}(x) = \frac{2}{\sqrt\pi}\int_0^x e^{-t^2}\,\mathrm dt
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{erf}(x) = \frac{2}{\sqrt\pi}\int_0^x e^{-t^2}\,\mathrm dt" data-equation="eq:error_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/erf/docs/img/equation_error_function.svg" alt="Error function.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-erf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var erf = require( '@stdlib/math-base-special-erf' );
```

#### erf( x )

Evaluates the [error function][error-function].

```javascript
var y = erf( 2.0 );
// returns ~0.9953

y = erf( -1.0 );
// returns ~-0.8427
```

If provided `NaN`, the function returns `NaN`.

```javascript
var y = erf( NaN );
// returns NaN
```

The [error function][error-function] is an [odd function][odd-function]; i.e., `erf(-x) = -erf(x)`. Thus, in accordance with the [IEEE 754][ieee754] standard, if provided `-0`, the function returns `-0`.

```javascript
var y = erf( -0.0 );
// returns -0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random-array-uniform' );
var logEachMap = require( '@stdlib/console-log-each-map' );
var erf = require( '@stdlib/math-base-special-erf' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -10.0, 10.0, opts );

logEachMap( 'x: %0.4f, erf(x): %0.4f', x, erf );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/erf.h"
```

#### stdlib_base_erf( x )

Evaluates the [error function][error-function].

```c
double out = stdlib_base_erf( 2.0 );
// returns ~0.9953

out = stdlib_base_erf( -1.0 );
// returns ~-0.8427
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_erf( const double x );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/erf.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -10.0, -7.78, -5.56, -3.33, -1.11, 1.11, 3.33, 5.56, 7.78, 10.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_erf( x[ i ] );
        printf( "x: %lf, erf(x): %lf\n", x[ i ], v );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/erfc`][@stdlib/math/base/special/erfc]</span><span class="delimiter">: </span><span class="description">complementary error function.</span>
-   <span class="package-name">[`@stdlib/math-base/special/erfinv`][@stdlib/math/base/special/erfinv]</span><span class="delimiter">: </span><span class="description">inverse error function.</span>
-   <span class="package-name">[`@stdlib/math-base/special/erfcinv`][@stdlib/math/base/special/erfcinv]</span><span class="delimiter">: </span><span class="description">inverse complementary error function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-erf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-erf

[test-image]: https://github.com/stdlib-js/math-base-special-erf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-erf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-erf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-erf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-erf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-erf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-erf/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-erf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-erf/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-erf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-erf/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-erf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-erf/blob/main/branches.md

[error-function]: https://en.wikipedia.org/wiki/Error_function

[odd-function]: https://en.wikipedia.org/wiki/Even_and_odd_functions

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/erfc]: https://github.com/stdlib-js/math-base-special-erfc

[@stdlib/math/base/special/erfinv]: https://github.com/stdlib-js/math-base-special-erfinv

[@stdlib/math/base/special/erfcinv]: https://github.com/stdlib-js/math-base-special-erfcinv

<!-- </related-links> -->

</section>

<!-- /.links -->
