# @clf-internal-stylelint-angular/ng-deep-selector-prefix

Enforces `::ng-deep` to be prefixed by some other selectors first.

## Explanation

If a css selector starts with `::ng-deep` then the style becomes global.
This is due to the way angular implements `ViewEncapsulation.Emulated`.
Angular adds a component hash to every part of the selector in component
styles and the same hash to every html element in the template.
What `::ng-deep` does is to tell angular not to add that hash to the selector
parts coming after it.
```scss
.class-a .class-b {}

// compiles to
.class-a[component-hash] .class-b[component-hash] {}
```

```scss
.class-a ::ng-deep .class-b {}

// compiles to
.class-a[component-hash] .class-b {}
```

```scss
::ng-deep .class-a .class-b {}

// compiles to
.class-a .class-b {}
```
