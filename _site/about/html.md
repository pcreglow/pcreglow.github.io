#[`HTML`](https://developer.mozilla.org/en-US/docs/Web/HTML)

**`<tags>`**

HTML tags start with a less than sign `<` and end with a greater than sign `>`. This markup is called a tag. 

When using tags, there is a opening tag `< >` and a closing tag `</ >`. The closing tag is identified with a forward slash `/` just after the leading less than sign. Most valid code in HTML requires an opening and closing tags. Let's demonstrate with a simple paragraph tag `<p>`:

    <p> My name is Phillip Creglow </p>

The example above would return "My name is Phillip Creglow" in the viewport, but what if I wanted to bold specific text within the `<p>` tag? In this instance you would *nest* a bold tag within the `<p>` tag.

    <p> My <b>name</b> is Phillip Creglow </p>

This example would return "My **name** is Phillip Creglow".

Tags can also be written without contents that do not include a seperate closing tag. The following tag includes an image source:

  `<img src="football.jpg" alt="Football">`

This tag does not contain any text content but would display an image in the viewport.


**`unordered list element <ul>`**

An unordered list element `<ul>` in HTML is a list! Speficifically, it's a list of items that does not include a numbered order and the list item order in the list is meaningless.

**`ordered list element <ol>`**

Like a `<ul>`, an ordered list element `<ol>` in HTML is a list! Specifically, it's a list of items that *does* include a numbered order.

**`description list element <dl>`**

In HTML, a description list element `<dl>` encloses a list of pairs of terms or descriptions. Common practice is to use the `<dl>` to display a glossary or metadata.  

**`form element <form>`**

The form element `<form>` in HTML is a document section. With `<form>`, the document section contains interactive controls to send information to a web server. 

`<fieldset>` is an HTML element nested in a `<form>` element used to group several controls as well as labels in a web form.

Labels? `<label>` is another HTML element nested in a `<form>` element that represents a caption for an item in a user interface. 

**`<table>`**

The HTML [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) element represents data in two dimensions or more. A `<table>` element has the following flow content:

[`<caption>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption) which represents the title of the table.

[`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup) defines a group of columns within a `<table>`.

[`<thead>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead) defines a set of rows, which defines the head of the columns of the table.

[`<tfoot>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot) defines a set of rows, which summarizes the columns of the table. 

[`<tbody>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody) contains zero or more <tr> elements and is the body of its parent `<table>` elelemt.

[`<tr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr) defines a row of cells in a `<table>`. A `<tr>` elements can contain child elemens [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td) and [`<th>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th). The `<td>` element defines a cell of a table that contains data, while the `<th>` element defines a cell that is a header for a group of cells in a `<table>`.


