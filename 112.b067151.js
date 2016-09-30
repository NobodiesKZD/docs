webpackJsonp([112],{154:function(s,a){var n,t,l={};s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var p="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;t&&(p.template=t),p.computed||(p.computed={}),Object.keys(l).forEach(function(s){var a=l[s];p.computed[s]=function(){return a}})},28:function(s,a,n){s.exports=n(154),'<h1>Cell</h1>\n<blockquote>\n<p>A cell to display list, link or form.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Cell } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Cell.name, Cell);\n</code></pre>\n<h2>Example</h2>\n<p>Basic usage</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"说明文字"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<p>Clickable link</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span>\n  <span class="hljs-attr">href</span>=<span class="hljs-string">"//github.com"</span>\n  <span class="hljs-attr">is-link</span>\n  <span class="hljs-attr">value</span>=<span class="hljs-string">"带链接"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<p>With icon</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"more"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"带 icon"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<p>With custom icon</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>icon 是图片<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"icon"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"../assets/100x100.png"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"24"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"24"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<p>Custom content</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span> <span class="hljs-attr">is-link</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: green"</span>&gt;</span>这里是元素<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<p>With description</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"描述信息"</span> <span class="hljs-attr">is-link</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>icon</td>\n<td>cell icon</td>\n<td>String</td>\n<td>back, more</td>\n<td></td>\n</tr>\n<tr>\n<td>title</td>\n<td>title of the cell</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td>content of the cell</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>label</td>\n<td>a description shown underneath the title</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>is-link</td>\n<td>if the cell is a link, works with the href attribute</td>\n<td>Boolean</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>custom content</td>\n</tr>\n<tr>\n<td>title</td>\n<td>custom title</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>custom icon</td>\n</tr>\n</tbody>\n</table></div>'!==s.exports.template&&(s.exports.template='<h1>Cell</h1>\n<blockquote>\n<p>A cell to display list, link or form.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Cell } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Cell.name, Cell);\n</code></pre>\n<h2>Example</h2>\n<p>Basic usage</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"说明文字"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<p>Clickable link</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span>\n  <span class="hljs-attr">href</span>=<span class="hljs-string">"//github.com"</span>\n  <span class="hljs-attr">is-link</span>\n  <span class="hljs-attr">value</span>=<span class="hljs-string">"带链接"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<p>With icon</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"more"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"带 icon"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<p>With custom icon</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>icon 是图片<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"icon"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"../assets/100x100.png"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"24"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"24"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<p>Custom content</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span> <span class="hljs-attr">is-link</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: green"</span>&gt;</span>这里是元素<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<p>With description</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"描述信息"</span> <span class="hljs-attr">is-link</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>icon</td>\n<td>cell icon</td>\n<td>String</td>\n<td>back, more</td>\n<td></td>\n</tr>\n<tr>\n<td>title</td>\n<td>title of the cell</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td>content of the cell</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>label</td>\n<td>a description shown underneath the title</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>is-link</td>\n<td>if the cell is a link, works with the href attribute</td>\n<td>Boolean</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>custom content</td>\n</tr>\n<tr>\n<td>title</td>\n<td>custom title</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>custom icon</td>\n</tr>\n</tbody>\n</table></div>')}});