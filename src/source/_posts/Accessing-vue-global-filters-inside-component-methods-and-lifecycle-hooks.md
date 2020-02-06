---
title: Accessing vue global filters inside component methods and lifecycle hooks
date: 2020-02-02 15:03:19
metatags: vuejs
description: Learn how to use this.$options.filters to access global filters inside component methods. 
cover: "blog-images/accessing-filters.jpg"
---

I've written this article before, but unfortunately, it got lost on one of my million blogs. 

Filters are one of my favorite features from Vuejs, they are easy to implement and are pretty handy to manipulate or format text inside the template tags. 

If you are not familiar with Filters in Vuejs, here is a more formal concept:

>Vue.js allows you to define filters that can be used to apply common text formatting.

**Example:** Filter to formate a number to USD.

```html
<div class="product">
  <span class="product__price">{{ price | formatPriceToMoney }}</span>
</div>
```

<br />

```javascript
new Vue({
  el: "#app",
  filters: {
    formatPriceToMoney(value) {
      if (value) {
        return value.toLocaleString("en-US", { currency: "USD" });
      } else {
        return 0.0;
      }
    }
  }
});
```

## Filters scope

**Local filters (component)** are defined inside components, within the property `filters` inside the component declaration, as shown in the example above. 

**Global filters** are defined directly from the `Vue` insctance object, by calling the method `.filter(filterName, filterHandler(value) => value)`:

```javascript
import Vue from "vue";

Vue.filter("formatePriceToMoney", value => {
  return value.toLocaleString("en-US", { currency: "USD" });
});
```

Global filters give you the advantage of reusing it across components, without having to worry about reimplementing its logic again, this means that the filter defined above can be used inside any component since it was directly implemented inside the main vue instance.



## Calling a global filter inside of component method or hook lifecycle hook

As seen above, you can reuse any global filter across any component template, but what if you need to format data inside methods or lifecycle hooks with some logic that you've already implemented as a filter?

Before you ask yourself, why would I need that, here are some reasons:

* When you need to pass formatted data to a third party component.
* When you need to pass formatted data to a presentational component.

  
You can perform such action by calling the filter as if it was a method using the `this.$options.filters` property. 

**Example:** Fomating an array of numbers using `.map()` function and `this.$options.filters`

```html
<script>
  export default {
    name: "ListCars",
    data() {
      return {
        prices: [1200, 5400, 12.2, 0.9]
      }
    },
    methods: {
      getPricesFormated() {
        return this.prices.map(price => {
          return this
            .$options
            .filters
            .formatePriceToMoney(price);
        });
      }
    },
    created(){
      // Access filter inside of a lifecycle hook
      console.log(this.$options.filters.formatePriceToMoney(5000));
    }
  }
</script>
```

## References

* [Filters](https://vuejs.org/v2/guide/filters.html)
* [Cover by Tyler Nix](https://unsplash.com/@jtylernix)
