checkboxHelper
==============

Unify checkbox behaviour acros browsers.

+ Checkboxes go to `checked` when click in `undetermined` state;
+ Checkboxes in `undetermined` state fire the change event;

Set a group of checkboxes to any state using the `cb` helper:

```JavaScript:
var boxes = $(':checkbox');

boxes.cb('disabled'); // Unchecks, disables all checkboxes;
boxes.cb('undetermined'); // Sets all checkboxes to undetermined and enables them, markes them `checked` if required;
boxes.cb('off'); // Uncheckes, enables, all checkboxes;
boxes.cb('checked'); // Checks, enables all checkboxes;
```

To test the state of a checkbox:

```JavaScript:
var box = $(':checkbox');

box.cb(':disabled'); // True if disabled;
box.cb(':undetermined'); // True if undetermined;
box.cb(':off'); // True if not checked, not undetermined;
box.cb(':checked'); // True if checked, not undetermined;
```
