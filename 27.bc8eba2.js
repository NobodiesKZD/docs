webpackJsonp([27],{114:function(s,a,n){s.exports=n(240),'<h1>Button</h1>\n<blockquote>\n<p>按钮，提供几种基础样式和尺寸，可自定义图标。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Button.name, Button);\n</code></pre>\n<h2>例子</h2>\n<p>改变颜色</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"default"</span>&gt;</span>default<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span>&gt;</span>danger<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n</code></pre>\n<p>改变大小</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>small<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"large"</span>&gt;</span>large<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"normal"</span>&gt;</span>normal<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n</code></pre>\n<p>禁用按钮</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">disabled</span>&gt;</span>disabled<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n</code></pre>\n<p>幽灵按钮</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">plain</span>&gt;</span>plain<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n</code></pre>\n<p>带图标</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"back"</span>&gt;</span>back<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"more"</span>&gt;</span>更多<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n</code></pre>\n<p>自定义图标</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"../assets/100x100.png"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"20"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"20"</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"icon"</span>&gt;</span>\n  带自定义图标\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>plain</td>\n<td>幽灵按钮</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>禁用状态</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>type</td>\n<td>按钮显示样式</td>\n<td>String</td>\n<td>default, primary, danger</td>\n<td>default</td>\n</tr>\n<tr>\n<td>size</td>\n<td>尺寸</td>\n<td>String</td>\n<td>small, normal, large</td>\n<td>normal</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>图标</td>\n<td>String</td>\n<td>more, back</td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>显示的文本内容</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>自定义显示的图标</td>\n</tr>\n</tbody>\n</table></div>'!==s.exports.template&&(s.exports.template='<h1>Button</h1>\n<blockquote>\n<p>按钮，提供几种基础样式和尺寸，可自定义图标。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Button.name, Button);\n</code></pre>\n<h2>例子</h2>\n<p>改变颜色</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"default"</span>&gt;</span>default<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span>&gt;</span>danger<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n</code></pre>\n<p>改变大小</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>small<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"large"</span>&gt;</span>large<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"normal"</span>&gt;</span>normal<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n</code></pre>\n<p>禁用按钮</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">disabled</span>&gt;</span>disabled<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n</code></pre>\n<p>幽灵按钮</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">plain</span>&gt;</span>plain<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n</code></pre>\n<p>带图标</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"back"</span>&gt;</span>back<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"more"</span>&gt;</span>更多<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n</code></pre>\n<p>自定义图标</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"../assets/100x100.png"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"20"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"20"</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"icon"</span>&gt;</span>\n  带自定义图标\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>plain</td>\n<td>幽灵按钮</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>禁用状态</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>type</td>\n<td>按钮显示样式</td>\n<td>String</td>\n<td>default, primary, danger</td>\n<td>default</td>\n</tr>\n<tr>\n<td>size</td>\n<td>尺寸</td>\n<td>String</td>\n<td>small, normal, large</td>\n<td>normal</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>图标</td>\n<td>String</td>\n<td>more, back</td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>显示的文本内容</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>自定义显示的图标</td>\n</tr>\n</tbody>\n</table></div>')},240:function(s,a){var n,t,l={};s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var p="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;t&&(p.template=t),p.computed||(p.computed={}),Object.keys(l).forEach(function(s){var a=l[s];p.computed[s]=function(){return a}})}});