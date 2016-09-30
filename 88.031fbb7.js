webpackJsonp([88],{178:function(t,n){var s,a,o={};t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var e="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;a&&(e.template=a),e.computed||(e.computed={}),Object.keys(o).forEach(function(t){var n=o[t];e.computed[t]=function(){return n}})},52:function(t,n,s){t.exports=s(178),'<h1>Toast</h1>\n<blockquote>\n<p>A brief toast box. Custom location, duration and style supported.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Toast } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n</code></pre>\n<h2>Example</h2>\n<p>Basic Usage</p>\n<pre><code class="language-javascript">Toast(<span class="hljs-string">\'Upload Complete\'</span>);\n</code></pre>\n<p>To configure more options, invoke <code>Toast</code> with an object</p>\n<pre><code class="language-javascript">Toast({\n  message: <span class="hljs-string">\'Upload Complete\'</span>,\n  position: <span class="hljs-string">\'bottom\'</span>,\n  duration: <span class="hljs-number">5000</span>\n});\n</code></pre>\n<p>If you need to put an icon font above the text, just add another key named <code>iconClass</code> and set it to whatever icon class you wish to use(please prepare icon fonts your self)</p>\n<pre><code class="language-javascript">Toast({\n  message: <span class="hljs-string">\'operation success\'</span>,\n  iconClass: <span class="hljs-string">\'icon icon-success\'</span>\n});\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>message</td>\n<td>toast text content</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>position</td>\n<td>location of the toast</td>\n<td>String</td>\n<td>\'top\'<br>\'bottom\'<br>\'middle\'</td>\n<td>\'middle\'</td>\n</tr>\n<tr>\n<td>duration</td>\n<td>time duration(in millisecond)</td>\n<td>Number</td>\n<td></td>\n<td>3000</td>\n</tr>\n<tr>\n<td>className</td>\n<td>class name of the toast</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>iconClass</td>\n<td>class name of the icon font</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>'!==t.exports.template&&(t.exports.template='<h1>Toast</h1>\n<blockquote>\n<p>A brief toast box. Custom location, duration and style supported.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Toast } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n</code></pre>\n<h2>Example</h2>\n<p>Basic Usage</p>\n<pre><code class="language-javascript">Toast(<span class="hljs-string">\'Upload Complete\'</span>);\n</code></pre>\n<p>To configure more options, invoke <code>Toast</code> with an object</p>\n<pre><code class="language-javascript">Toast({\n  message: <span class="hljs-string">\'Upload Complete\'</span>,\n  position: <span class="hljs-string">\'bottom\'</span>,\n  duration: <span class="hljs-number">5000</span>\n});\n</code></pre>\n<p>If you need to put an icon font above the text, just add another key named <code>iconClass</code> and set it to whatever icon class you wish to use(please prepare icon fonts your self)</p>\n<pre><code class="language-javascript">Toast({\n  message: <span class="hljs-string">\'operation success\'</span>,\n  iconClass: <span class="hljs-string">\'icon icon-success\'</span>\n});\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>message</td>\n<td>toast text content</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>position</td>\n<td>location of the toast</td>\n<td>String</td>\n<td>\'top\'<br>\'bottom\'<br>\'middle\'</td>\n<td>\'middle\'</td>\n</tr>\n<tr>\n<td>duration</td>\n<td>time duration(in millisecond)</td>\n<td>Number</td>\n<td></td>\n<td>3000</td>\n</tr>\n<tr>\n<td>className</td>\n<td>class name of the toast</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>iconClass</td>\n<td>class name of the icon font</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>')}});