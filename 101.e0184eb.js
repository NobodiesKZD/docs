webpackJsonp([101],{165:function(s,a){var n,t,l={};s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var p="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;t&&(p.template=t),p.computed||(p.computed={}),Object.keys(l).forEach(function(s){var a=l[s];p.computed[s]=function(){return a}})},39:function(s,a,n){s.exports=n(165),'<h1>Navbar</h1>\n<blockquote>\n<p>A top navigation panel, similar to <a v-link="{path:\'/tabbar\'}">Tabbar</a>. Dependent on tab-item.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Navbar, TabItem } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Navbar.name, Navbar);\nVue.component(TabItem.name, TabItem);\n</code></pre>\n<h2>Example</h2>\n<p>Works with <a v-link="{path:\'/tab-container\'}">tab-container</a></p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-navbar</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"page-part"</span> <span class="hljs-attr">:selected.sync</span>=<span class="hljs-string">"selected"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"1"</span>&gt;</span>option A<span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"2"</span>&gt;</span>option B<span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"3"</span>&gt;</span>option C<span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-navbar</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- tab-container --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container</span> <span class="hljs-attr">:active.sync</span>=<span class="hljs-string">"selected"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"n in 10"</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">"\'content \' + n"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"2"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"n in 4"</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">"\'content \' + n"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"3"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"n in 6"</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">"\'content \' + n"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<h3>navbar</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>fixed</td>\n<td>if the component is fixed at the top</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>selected</td>\n<td>id of the selected tab-item</td>\n<td>*</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h3>tab-item</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>id of tab-item</td>\n<td>*</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<h3>navbar</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>content</td>\n</tr>\n</tbody>\n</table></div><h3>tab-item</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>displayed text</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>icon</td>\n</tr>\n</tbody>\n</table></div>'!==s.exports.template&&(s.exports.template='<h1>Navbar</h1>\n<blockquote>\n<p>A top navigation panel, similar to <a v-link="{path:\'/tabbar\'}">Tabbar</a>. Dependent on tab-item.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Navbar, TabItem } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Navbar.name, Navbar);\nVue.component(TabItem.name, TabItem);\n</code></pre>\n<h2>Example</h2>\n<p>Works with <a v-link="{path:\'/tab-container\'}">tab-container</a></p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-navbar</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"page-part"</span> <span class="hljs-attr">:selected.sync</span>=<span class="hljs-string">"selected"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"1"</span>&gt;</span>option A<span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"2"</span>&gt;</span>option B<span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"3"</span>&gt;</span>option C<span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-navbar</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- tab-container --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container</span> <span class="hljs-attr">:active.sync</span>=<span class="hljs-string">"selected"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"n in 10"</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">"\'content \' + n"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"2"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"n in 4"</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">"\'content \' + n"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-container-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"3"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"n in 6"</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">"\'content \' + n"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-container</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<h3>navbar</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>fixed</td>\n<td>if the component is fixed at the top</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>selected</td>\n<td>id of the selected tab-item</td>\n<td>*</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h3>tab-item</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>id of tab-item</td>\n<td>*</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<h3>navbar</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>content</td>\n</tr>\n</tbody>\n</table></div><h3>tab-item</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>displayed text</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>icon</td>\n</tr>\n</tbody>\n</table></div>')}});