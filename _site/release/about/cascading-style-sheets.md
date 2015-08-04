#(CSS) Cascading Style Sheets

#[`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

`display` is CSS's most important property for controlling layout. The `display` property specifies the type of rendering box used for an element. `display` has an initial value of `inline` and applies to all elements. The value `none` let's you turn off the display of an element. 

    Syntax examples:
    
    display: none;
    
    display: inline;
    display: block;
    display: contents;
    display: list-item;
    display: inline-block;

**More `display` examples from [Learn CSS Layout!](http://learnlayout.com/display.html)**

#[`margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) 

`margin` is a CSS property that sets the `margin`that sets the margin for all four sides. It's shorthand for setting the longhand properties of `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.

`margin` accepts one, two, three, or four values (length, percentage, or auto):

*One* single value applies to all four sides.

*Two* values apply first to top and bottom, the second one to left and right.
 
*Three* values apply first to top, second to left and right and third to bottom.
 
*Four* values apply to top, right, bottom and left in that order (clockwise).

    Syntax examples:
    
    margin: 20px;
    margin: 20px 10px;
    margin: 20px 0 0 20px;
    margin: auto;
    margin: 5%;


#[`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width)

`width` is a CSS property that specifies the `width` of the content area of an element. Remember, the content area is the *inside* the padding, border, and margin of the element. Examples of `width` values include, length, percentages, auto, etc. 

    Syntax examples:
    
    width: 250px;
    width: 30em;
    width: 50%;
    width: auto;


#[`padding`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)

`padding` is a CSS property that sets the `padding` space on all sides of an element. The padding area is the space between the content of the element and its border.  It's shorthand for setting the longhand properties of `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`. 

`padding` accepts one, two, three, or four values (length, percentage, or auto):

*One* single value applies to all four sides.

*Two* values apply first to top and bottom, the second one to left and right.
 
*Three* values apply first to top, second to left and right and third to bottom.
 
*Four* values apply to top, right, bottom and left in that order (clockwise).

    Syntax examples:
    
    padding: 5 px;
    padding: 10px 20px;
    padding: 10px 5px 5px 10px;
    padding: auto;
    padding: 10%;

**Just a little more on how `margin`, `width`, and `padding` work together in the box model via [Learn CSS Layout!](http://learnlayout.com/box-model.html)**

#[`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border)

`border` is a CSS property that sets the `border` individual border property values in a single space in the style sheet. `border` can be used to set the style for one or more of: `border-width`, `border-style`, and `border-color`.

    Syntax examples:
    
    border: 2px;
    border: 1px solid;
    border: medium dashed blue;


#[`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

`position` is a CSS property that chooses alternative rules for positioning elements. The initial value of `position` is `static` but can hold also hold properties of `relative`, `absolute`, `fixed`, or `sticky`. 

    Syntax examples:
    
    position: static;
    position: relative;
    position: absolute;
    position: fixed;
    position: sticky;
    
    #element {position: relative; top 20px; left 20px;}
    
The `#element` example positions the element relatively 20px from the top and left of it's normal position.

**[Learn CSS Layout](http://learnlayout.com/position.html) serves as an excellent reference about the `position` property in CSS. Just for fun...here is a practical [example](http://learnlayout.com/position-example.html).**

#[`font`](https://developer.mozilla.org/en-US/docs/Web/CSS/font)

`font` is a shorthand CSS property that sets the element's font to sytstem font using specific keywords. `font-style`,  `font-weight`, `font-size`, `line-height`, `font-family` are all common longhand values. Let's explore!

**font-style**

Do you like *italics*? [`font-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style) allows you to select italic, obliue or normal font faces within a `font-family`.

    font-style: italic;
    
*It's a great day at The Iron Yard!*

**font-weight**

**BOLD!!** [`font-weight`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) is a CSS property that set's the boldness of the font. 

**font-size**

[`font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) is a CSS property that specifies the size of the font. Values for `font-size` range from absolute sizes `xx-small` through `xx-large`, relative sizes `larger`, `smaller`, length represented by `em`, `px`, and percentage. 

    font-size: x-small;
    font-size: larger;
    font-size: 20px;
    font-size: 65%;

**font-family**

[`font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) is a CSS property that let's you set a priority list of `font-family` names for a selected element. You can set multiple values seperated by commas, which indicates alernatives that can be used by the browser. It's best to always include a genric font-family in the event the browser is not able to select from alernatives provided in the priority list. 

    font-family: Lato, Arial, Calibri, sans-serif;

In the example above, Lato is derived from Google Fonts and sourced in `index.html`. The generic font is `sans-serif`


#[`line-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)

`line-height` is a CSS property that applies on block level elements and specifies the minimum height of line boxes within the element. 


#`text`

**[text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)**

`text-align` is a CSS property that describes how inline content is aligned in its parent block element. Common values include `left`, `right`, `center`, and `justify`.

**text-decoration**

[`text-decoration`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) is a CSS property that will set the text decoration to `underline`, `overline`, `line-through`, and `blink`. 

**text-transform**

How about ALL CAPS?!? [`text-transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform) is a CSS property that provides specification on how to capitalize an element's text. `text-transform` values inclue `capitalize`, `lowercase`, `uppercase`, `none`. 


#[`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
