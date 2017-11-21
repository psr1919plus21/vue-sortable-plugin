# Vue plugin for [sortablejs.](https://github.com/RubaXa/Sortable)

![Image of vue-sotable-plugin](https://raw.githubusercontent.com/psr1919plus21/vue-sortable-plugin/master/vue-sotrable-plugin.jpg)

Get *vue-sotrable-plugin*
----------

Here several ways to get *vue-sotrable-plugin*:

**download**
Copypaste plugun in your project:
[Get vue-sotrable-plugin](https://raw.githubusercontent.com/psr1919plus21/vue-sotrable-plugin/master/index.js)

**npm**

    npm install vue-sotrable-plugin


Usage
---------
In order to initialise *vue-sotrable-plugin*  you need to set *vue-sotrable-plugin* code to your Vue instance.

**Example:**

in html:

    <div id="app">
    	<ul id="my-awesome-list">
    	    <li v-for="item in items">{{ item.name }}</li>
    	</ul>
    </div>


in script:

     import {sortable} from 'vue-sotrable-plugin';

     Vue.use(sortable);

     new Vue({
        el: '#app',
        data: {
            items: [
              {name: 'one'},
              {name: 'two'},
              {name: 'three'}
            ]
        },
        mounted() {
          this.sortableInit({
            context: this,
            selectorId: 'my-awesome-list',
            model: 'items',
            settings: {
              onEndCb: function() {

              }
            }
          });
        }
     })


After this *vue-sotrable-plugin* make all items in list sortable and all changes will be reflected in model.

Settings
---------

*vue-sotrable-plugin* add global method `sortableInit` to all Vue incstances including components.

`sortableInit` accepts options object with following fields:

`context` – link for vue instance object.

`selectorId` – Id of sortable items parrent.

`model` – string. Name of sortable array in `data` field.

`settings` – accepts sortablejs [options object](https://github.com/RubaXa/Sortable#options)

`onEndCb` – accepts callback function, that will be run after model changes.

**Caution! vue-sortable-plugin use sortablejs's onEnd callback underhood, dont't override it. Use onEndCb instead.**


License
=======

Copyright (c) 2017 Philipp Gaponenko (psr1919plus21@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
