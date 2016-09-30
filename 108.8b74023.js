webpackJsonp([108],{158:function(s,a){var n,t,l={};s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var p="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;t&&(p.template=t),p.computed||(p.computed={}),Object.keys(l).forEach(function(s){var a=l[s];p.computed[s]=function(){return a}})},32:function(s,a,n){s.exports=n(158),'<h1>Header</h1>\n<blockquote>\n<p>Top navigation bar.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Header } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Header.name, Header);\n</code></pre>\n<h2>Usage</h2>\n<p>Fixed at the top of the page</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-header</span> <span class="hljs-attr">fixed</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"fixed top"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-header</span>&gt;</span>\n</code></pre>\n<p><code>left</code> or <code>right</code> slot</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-header</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"long long long long title"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">v-link</span>=<span class="hljs-string">"\'/\'"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"back"</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"left"</span>&gt;</span>back<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"more"</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-header</span>&gt;</span>\n</code></pre>\n<p>Multiple buttons</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-header</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"multiple button"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"left"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">v-link</span>=<span class="hljs-string">"\'/\'"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"back"</span>&gt;</span>back<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"handleClose"</span>&gt;</span>close<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"more"</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-header</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>fixed</td>\n<td>if the header is fixed on top</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>title</td>\n<td>title of the header</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>left</td>\n<td>HTML content on the left</td>\n</tr>\n<tr>\n<td>right</td>\n<td>HTML content on the right</td>\n</tr>\n</tbody>\n</table></div>'!==s.exports.template&&(s.exports.template='<h1>Header</h1>\n<blockquote>\n<p>Top navigation bar.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Header } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Header.name, Header);\n</code></pre>\n<h2>Usage</h2>\n<p>Fixed at the top of the page</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-header</span> <span class="hljs-attr">fixed</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"fixed top"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-header</span>&gt;</span>\n</code></pre>\n<p><code>left</code> or <code>right</code> slot</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-header</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"long long long long title"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">v-link</span>=<span class="hljs-string">"\'/\'"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"back"</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"left"</span>&gt;</span>back<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"more"</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-header</span>&gt;</span>\n</code></pre>\n<p>Multiple buttons</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-header</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"multiple button"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"left"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">v-link</span>=<span class="hljs-string">"\'/\'"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"back"</span>&gt;</span>back<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"handleClose"</span>&gt;</span>close<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"more"</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-header</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>fixed</td>\n<td>if the header is fixed on top</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>title</td>\n<td>title of the header</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>left</td>\n<td>HTML content on the left</td>\n</tr>\n<tr>\n<td>right</td>\n<td>HTML content on the right</td>\n</tr>\n</tbody>\n</table></div>')}});