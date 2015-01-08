#Snap#

This is my own flavor of a fully responsive, infinitely nestable 12 column fluid grid. There are a few others like it out in the wild and mine is definitely not the first, but I mainly drew inspiration from [Shelves](http://shelvesgrid.org/) and [Skeleton](http://www.getskeleton.com/).

I've used many grid systems in the past, where I'd go through the normal routine of cleaning up a ton of code and/or removing things I didn't need. I also don't like using any of the popular frameworks (i.e. Bootstrap, Foundation, etc.) because they're just too bloated in my opinion.

So I created my own... with just enough to get a new project off the ground.

##HTML Structure##

There's not much too it.

1. Create a wrapping `div` with the class of `container`.
2. Create a `div` with the class of `row`.
3. Create a few child `div`'s, each with a class of `g-n` (**n** being a number from 1 - 12).
4. Ensure that each column in a row adds up to 12.

###Nesting###

To nest columns, simply create another row inside a column and add more columns inside that row (see example below).

The `g-n` class should always add up to whatever the parent column's class is. For instance, if you have a column with a class of `g-4`, each child column would have a class of `g-2` (or `g-1` + `g-3`).

##Features##

###Base Styles###

I've created a set of "sanitized" styles to get started with. Included is a modified CSS reset, neutral styles for typography, block &amp; inline quotations, links, lists, images, buttons and form elements as well as other miscellaneous "helper" classes.

These are all inside a separate stylesheet, so just delete it if you'd like to start from scratch.

###Spacing &amp; Ordering###

You can use the following classes to add space around columns and/or adjust their stack order if needed (**n** being a number from 1 - 11).

- Prefix Space (padding-left): `prefix-n`
- Suffix Space (padding-right): `suffix-n`
- Push Order (left): `push-n`
- Pull Order: (right) `pull-n`

**Notes:**

- If you use these classes, columns and spaces inside a **top-level** row should still add up to 12.
- It's possible, but not recommended to push or pull nested columns because of alignment issues.

###Tablet Views###

You can use the following classes (in addition to `g-n`) to prevent columns from stacking when your screen gets down to tablet (portrait) size. These will also work on nested columns.

- 2 Equal Columns: `t-g-2`
- 3 Equal Columns: `t-g-3`

###Forced 1/3 Columns###

This helps when you want 3 equal columns that can't fit inside a container (i.e. 3 equal columns inside a `div` with a class of `g-8`). Simply use the `g-1-3` class to achieve this.

##Examples##

**4 Columns:**
```html
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
```

**3 Nested Columns / 3 Column Tablet (Portrait) View:**
```html
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
```
