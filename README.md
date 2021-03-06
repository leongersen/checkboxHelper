checkboxHelper
==============

jQuery plugin to unify checkbox behaviour across browsers. Based on this [jQuery issue](https://github.com/jquery/jquery/issues/1698) and this [question on StackOverflow](http://stackoverflow.com/questions/10099158/how-to-deal-with-browser-differences-with-indeterminate-checkbox).

For more info on `indeterminate` checkboxes, see [this CSStricks article](http://css-tricks.com/indeterminate-checkboxes/).

+ Checkboxes go to `checked` when click in `indeterminate` state;
+ Checkboxes in `indeterminate` state fire the change event;
+ Works for mouse and keyboard interactions;

Set a group of checkboxes to any state using the `cb` helper:

```JavaScript
var boxes = $(':checkbox');

boxes.cb('disabled'); // Unchecks, disables all checkboxes;
boxes.cb('indeterminate'); // Sets all checkboxes indeterminate, enabled, checked if required;
boxes.cb('off'); // Uncheckes, enables, all checkboxes;
boxes.cb('checked'); // Checks, enables all checkboxes;
```

To test the state of a checkbox:

```JavaScript
var box = $(':checkbox');

box.cb(':disabled'); // True if disabled;
box.cb(':indeterminate'); // True if indeterminate;
box.cb(':off'); // True if not checked, not indeterminate;
box.cb(':checked'); // True if checked, not indeterminate;
```
