webpackJsonp([93],{173:function(s,n){var a,t,p={};s.exports=a||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var l="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;t&&(l.template=t),l.computed||(l.computed={}),Object.keys(p).forEach(function(s){var n=p[s];l.computed[s]=function(){return n}})},47:function(s,n,a){s.exports=a(173),'<h1>Spinner</h1>\n<blockquote>\n<p>A loading spinner with custom type, size and color.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Spinner } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Spinner.name, Spinner);\n</code></pre>\n<h2>Example</h2>\n<p>Custom type</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"snake"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"double-bounce"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"triple-bounce"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"fading-circle"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- accepts a 0-3 number --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">"0"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">"1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">"3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n</code></pre>\n<p>Custom color</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#26a2ff"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"rgb(100, 100, 100)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"yellow"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n</code></pre>\n<p>Custom size</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">"60"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>type of the spinner. Accepts a name(String) or an index(Number)</td>\n<td>String, Number</td>\n<td>snake <br> double-bounce <br> triple-bounce <br> fading-circle</td>\n<td>snake</td>\n</tr>\n<tr>\n<td>color</td>\n<td>color of the spinner. Hex and RGB format accepted</td>\n<td>String</td>\n<td></td>\n<td>#ccc</td>\n</tr>\n<tr>\n<td>size</td>\n<td>size of the spinner(in pixel)</td>\n<td>Number</td>\n<td></td>\n<td>28</td>\n</tr>\n</tbody>\n</table></div>'!==s.exports.template&&(s.exports.template='<h1>Spinner</h1>\n<blockquote>\n<p>A loading spinner with custom type, size and color.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Spinner } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Spinner.name, Spinner);\n</code></pre>\n<h2>Example</h2>\n<p>Custom type</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"snake"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"double-bounce"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"triple-bounce"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"fading-circle"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- accepts a 0-3 number --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">"0"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">"1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">"3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n</code></pre>\n<p>Custom color</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#26a2ff"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"rgb(100, 100, 100)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"yellow"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n</code></pre>\n<p>Custom size</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">"60"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>type of the spinner. Accepts a name(String) or an index(Number)</td>\n<td>String, Number</td>\n<td>snake <br> double-bounce <br> triple-bounce <br> fading-circle</td>\n<td>snake</td>\n</tr>\n<tr>\n<td>color</td>\n<td>color of the spinner. Hex and RGB format accepted</td>\n<td>String</td>\n<td></td>\n<td>#ccc</td>\n</tr>\n<tr>\n<td>size</td>\n<td>size of the spinner(in pixel)</td>\n<td>Number</td>\n<td></td>\n<td>28</td>\n</tr>\n</tbody>\n</table></div>')}});