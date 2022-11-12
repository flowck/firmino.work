---
title: "CSS: links with sliding underline effect through pseudo-elements"
date: 2020-02-06 23:58:27
metatags: css
description: In this tutorial, I show a technique to replace the default underline effect using pseud-elements.
cover: "posts/css-links-with-sliding-underline-effect-through-pseudo-elements.jpg"
---

When building my [blog](https://changani.me), I decided to get rid of the default underline styling on `<a>` elements to use my custom underline effect. If you still don't know what kind of style I am talking about, just try to hover this [link](https://changani.me) or any other link in the blog post content.

> Check the final result [here](https://codepen.io/firminochangani/pen/mdJdKGY)

As you could see, when you hover a link in the content, two lines under the text start growing from left to right and from right to left with a slightly sliding effect. I did this with pseudo elements, and bellow I will show you can implement a similar effect on your website or web application.

## The a element

Our first target is the `<a>` element, which comes with default CSS properties that we need to restart first, like color and the most important one, text-decoration:

```css
a {
  color: #0099cc;
  position: relative;
  text-decoration: none;
}
```

- The`color` property was set to some variation of blue
- The `position` property was set to `relative`. Below, I will explain why.
- The `text-decoration` was set to `none`. This is the property that will style the `<a>` element with the line under the text.

## Adding the pseudo-elements

```css
a::before,
a::after {
  bottom: 0;
  width: 0%;
  content: "";
  height: 2px;
  position: absolute;
  transition: width 0.5s;
  background-color: #0099cc;
}

a::before {
  left: 0;
}

a::after {
  right: 0;
}
```

The two lines that form the `underline` effect in the final result that we intend to achieve are in fact pseudo-elements attacthed to the `<a>` element.

In the code above, the first block describes the common CSS definitions between `::before` and `::after`:

- `bottom` is set to `0` because I want the underline to actually appear under the text, in this case, the `<a>` element.
- `width` is initially set to `0`, it means that you won't be able to see anything until the mouse is over the text. The `:hover` selector is not defined yet.
- `content` is a property required for the pseudo-elements. In this case, I set it to an empty string.
- The value of `height` can be arbitrary. However, you may want to define a value that visually will match the `<a>` element font-size.
- The `position` was set to `absolute` so we are able to manipulate the `left`, `right` and `bottom` properties, in order to align both pseudo-elements relative to the `<a>` element.
- To give the sliding effect I defined the `transition` property relative to the `width` property with a duration of `0.5` seconds.
- And of course the `background-color`. This can be anything you feel comfortable with.

Then in the code above, there are two more blocks, and they were defined so each pseudo-element could be aligned in the left and right side of the `<a>` tag.

## Handling on mouse hover

At this point, you should not see any effect yet, and that's because both pseudo-elements were defined with the `width` property set to `0`. This makes sense because the desired effect is that the underline only appears when the mouse is on top of the link.

```css
a:hover::before,
a:hover::after {
  width: 50%;
}
```

In the code above I am saying this: each time the mouse hovers an element, the `::before` and `::after` pseudo-elements should have its `width` value set to `50%`. _Voilà_, you should be able to see the underline effect I described at the beginning of this article.

You can see the final result [here](https://codepen.io/firminochangani/pen/mdJdKGY) too.

## References

[Post cover by Keith Johnson](https://unsplash.com/photos/iCmw64XrJFI)
