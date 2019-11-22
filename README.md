# Snap

[![Snap releases](https://img.shields.io/github/release/markhillard/Snap.svg)](https://github.com/markhillard/Snap/releases)

Snap is an infinitely nestable 12 column fluid grid. Use it for rapid prototyping, wireframes, or fully functional websites ready for production. This simple, yet extensible grid system is focused on efficient code, maintainability, and browser support.

## HTML Structure

You can use Snap's structural classes on any type of HTML element.

1. Create a wrapping tag with the class of `container`.
2. Create a tag inside the wrapper with the class of `row`.
3. Create a few child tags inside the row, each with a class prefix of `g-` and a number from 1 - 12.
4. Ensure that each column in a row adds up to a maximum of 12.

For a simple one column area, just add one column in a row with a class of `g-12` (100% width). To control the width, use any other `g-` class prefix along with any spacing/ordering classes (see below).

### Nesting

To nest columns, simply create another row inside a column and add more columns inside that row (see examples below).

Each column in a nested row that starts with the `g-` class prefix should always add up to whatever the parent column's class is. For instance, if a parent column has a class of `g-4`, each child column could have a class of `g-2` (or `g-1` + `g-3`).

### Spacing &amp; Ordering

You can use the following classes to add space around columns and/or adjust their stack order if needed (**n** being a number from 1 - 11).

- Prefix Space (padding-left): `prefix-n`
- Suffix Space (padding-right): `suffix-n`
- Push Order (left): `push-n`
- Pull Order: (right) `pull-n`

**Notes:**

- If you use these classes, columns and spaces inside a **top-level** row should still add up to 12.
- It's possible, but not recommended to push or pull nested columns because of alignment issues.

### Forced Equal Columns

This helps when you want 2 or 3 equal columns that can't fit inside a container equally (i.e. 3 columns inside an element with a class of `g-8`). Simply use the `g-1-2` or `g-1-3` classes to achieve this.

### Tablet Views

You can use the following classes (in addition to the `g-` class prefix) to prevent columns from stacking when your screen gets down to tablet (portrait) size. These will also work on nested columns.

- 2 Equal Columns: `t-g-2`
- 3 Equal Columns: `t-g-3`

## Examples

**4 Columns:**
```html
<div class="container">
    <div class="row">
        <div class="g-3">
            <h3>g-3</h3>
        </div>
        <div class="g-3">
            <h3>g-3</h3>
        </div>
        <div class="g-3">
            <h3>g-3</h3>
        </div>
        <div class="g-3">
            <h3>g-3</h3>
        </div>
    </div>
</div>
```

**3 Nested Columns / 3 Column Tablet (Portrait) View:**
```html
<div class="container">
    <div class="row">
        <div class="g-4 t-g-3">
            <h3>g-4</h3>
            <div class="row">
                <div class="g-2">
                    <h3>g-2</h3>
                </div>
                <div class="g-2">
                    <h3>g-2</h3>
                </div>
            </div>
        </div>
        <div class="g-4 t-g-3">
            <h3>g-4</h3>
            <div class="row">
                <div class="g-2">
                    <h3>g-2</h3>
                </div>
                <div class="g-2">
                    <h3>g-2</h3>
                </div>
            </div>
        </div>
        <div class="g-4 t-g-3">
            <h3>g-4</h3>
            <div class="row">
                <div class="g-2">
                    <h3>g-2</h3>
                </div>
                <div class="g-2">
                    <h3>g-2</h3>
                </div>
            </div>
        </div>
    </div>
</div>
```

## Features

### Base Styles

I've created a set of "sanitized" styles to get started with. Included is a modified CSS reset, neutral styles for typography, block &amp; inline quotations, links, lists, images, buttons, and form elements as well as other miscellaneous "helper" classes.

These are all inside a separate stylesheet, so just delete it if you'd like to start from scratch.

## Browser Support

Snap works in all modern web browsers and IE9+.

## Copyright

&copy; 2016 Mark Hillard

[MIT License](LICENSE.md)
