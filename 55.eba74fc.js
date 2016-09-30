webpackJsonp([55],{212:function(s,a){var n,t,l={};s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var p="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;t&&(p.template=t),p.computed||(p.computed={}),Object.keys(l).forEach(function(s){var a=l[s];p.computed[s]=function(){return a}})},86:function(s,a,n){s.exports=n(212),'<h1>Cell</h1>\n<blockquote>\n<p>单元格，可用作展示列表信息、链接或者表单等。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Cell } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Cell.name, Cell);\n</code></pre>\n<h2>例子</h2>\n<p>基础用法</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"说明文字"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<p>可点击的链接</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span>\n  <span class="hljs-attr">href</span>=<span class="hljs-string">"//github.com"</span>\n  <span class="hljs-attr">is-link</span>\n  <span class="hljs-attr">value</span>=<span class="hljs-string">"带链接"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<p>带图标</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"more"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"带 icon"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<p>带自定义图标</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>icon 是图片<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"icon"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"../assets/100x100.png"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"24"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"24"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<p>自定义内容</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span> <span class="hljs-attr">is-link</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: green"</span>&gt;</span>这里是元素<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<p>带备注信息</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"描述信息"</span> <span class="hljs-attr">is-link</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>icon</td>\n<td>图标</td>\n<td>String</td>\n<td>back, more</td>\n<td></td>\n</tr>\n<tr>\n<td>title</td>\n<td>标题</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td>内容</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>label</td>\n<td>备注信息，显示在标题下方</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>is-link</td>\n<td>链接，会显示箭头图标。搭配 href 属性使用</td>\n<td>Boolean</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>自定义显示内容</td>\n</tr>\n<tr>\n<td>title</td>\n<td>自定义标题</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>自定义图标</td>\n</tr>\n</tbody>\n</table></div>'!==s.exports.template&&(s.exports.template='<h1>Cell</h1>\n<blockquote>\n<p>单元格，可用作展示列表信息、链接或者表单等。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Cell } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Cell.name, Cell);\n</code></pre>\n<h2>例子</h2>\n<p>基础用法</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"说明文字"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<p>可点击的链接</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span>\n  <span class="hljs-attr">href</span>=<span class="hljs-string">"//github.com"</span>\n  <span class="hljs-attr">is-link</span>\n  <span class="hljs-attr">value</span>=<span class="hljs-string">"带链接"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<p>带图标</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"more"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"带 icon"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<p>带自定义图标</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>icon 是图片<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"icon"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"../assets/100x100.png"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"24"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"24"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<p>自定义内容</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题文字"</span> <span class="hljs-attr">is-link</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: green"</span>&gt;</span>这里是元素<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<p>带备注信息</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"描述信息"</span> <span class="hljs-attr">is-link</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>icon</td>\n<td>图标</td>\n<td>String</td>\n<td>back, more</td>\n<td></td>\n</tr>\n<tr>\n<td>title</td>\n<td>标题</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td>内容</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>label</td>\n<td>备注信息，显示在标题下方</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>is-link</td>\n<td>链接，会显示箭头图标。搭配 href 属性使用</td>\n<td>Boolean</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>自定义显示内容</td>\n</tr>\n<tr>\n<td>title</td>\n<td>自定义标题</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>自定义图标</td>\n</tr>\n</tbody>\n</table></div>')}});