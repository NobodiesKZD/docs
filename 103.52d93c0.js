webpackJsonp([103],{163:function(t,n){var s,a,o={};t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var e="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;a&&(e.template=a),e.computed||(e.computed={}),Object.keys(o).forEach(function(t){var n=o[t];e.computed[t]=function(){return n}})},37:function(t,n,s){t.exports=s(163),'<h1>Loadmore</h1>\n<blockquote>\n<p>A two-direction pull-to-refresh component. Custom HTML templates supported.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Loadmore } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Loadmore.name, Loadmore);\n</code></pre>\n<h2>Example</h2>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-loadmore</span> <span class="hljs-attr">:top-method</span>=<span class="hljs-string">"loadTop"</span> <span class="hljs-attr">:bottom-method</span>=<span class="hljs-string">"loadBottom"</span> <span class="hljs-attr">:bottom-all-loaded</span>=<span class="hljs-string">"allLoaded"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in list"</span>&gt;</span>{{ item }}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-loadmore</span>&gt;</span>\n</code></pre>\n<p>Take upward direction for example: pull the component <code>topDistance</code> pixels away from the top and then release it, the function you appointed as <code>top-method</code> will run</p>\n<pre><code class="language-javascript">loadTop(id) {\n  ...<span class="hljs-comment">// load more data</span>\n  <span class="hljs-keyword">this</span>.$broadcast(<span class="hljs-string">\'onTopLoaded\'</span>, id);\n}\n</code></pre>\n<p>At the end of your <code>top-method</code>, don\'t forget to broadcast the <code>onTopLoaded</code> event so that <code>mint-loadmore</code> removes <code>topLoadingText</code>. Note that a parameter called <code>id</code> is passed to <code>loadTop</code> and <code>onTopLoaded</code>. This is because after the top data is loaded, some reposition work is performed inside a <code>mint-loadmore</code> instance, and <code>id</code> simply tells the component which instance should be repositioned. You don\'t need to do anything more than passing <code>id</code> to <code>onTopLoaded</code> just as shown above.</p>\n<p>For downward direction, things are similar. To invoke <code>bottom-method</code>, just pull the component <code>bottomDistance</code> pixels away from the bottom and then release it</p>\n<pre><code class="language-javascript">loadBottom(id) {\n  ...<span class="hljs-comment">// load more data</span>\n  <span class="hljs-keyword">this</span>.allLoaded = <span class="hljs-literal">true</span>;<span class="hljs-comment">// if all data are loaded</span>\n  <span class="hljs-keyword">this</span>.$broadcast(<span class="hljs-string">\'onBottomLoaded\'</span>, id);\n}\n</code></pre>\n<p>The only difference is that after all data are fetched, you can set <code>bottom-all-loaded</code> to <code>true</code> so that <code>bottom-method</code> will not run any more.</p>\n<h2>Custom HTML templates</h2>\n<p>You can customize the top and bottom DOM using an HTML template</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-loadmore</span> <span class="hljs-attr">:top-method</span>=<span class="hljs-string">"loadTop"</span> <span class="hljs-attr">:top-status.sync</span>=<span class="hljs-string">"topStatus"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in list"</span>&gt;</span>{{ item }}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mint-loadmore-top"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">"topStatus !== \'loading\'"</span> <span class="hljs-attr">:class</span>=<span class="hljs-string">"{ \'rotate\': topStatus === \'drop\' }"</span>&gt;</span>↓<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">"topStatus === \'loading\'"</span>&gt;</span>Loading...<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-loadmore</span>&gt;</span>\n</code></pre>\n<p>For example, to customize the top DOM, you\'ll need to add a variable that syncs with <code>top-status</code> on <code>loadmore</code> tag, and then write your template with a <code>slot</code> attribute set to <code>top</code> and <code>class</code> set to <code>mint-loadmore-top</code>. <code>top-status</code> has three possible values that indicates which status the component is at</p>\n<ul>\n<li><code>pull</code>: if the component is being pulled yet not ready to drop (top distance is within the distance threshold defined by <code>topDistance</code>)</li>\n<li><code>drop</code>: if the component is ready to drop</li>\n<li><code>loading</code>: if <code>topMethod</code> is running</li>\n</ul>\n<h2>Configure texts in top and bottom DOM</h2>\n<p>If you decide not to customize HTML templates, you can configure the texts that comes with <code>loadmore</code>. Take the top DOM for example, corresponding to the three <code>top-status</code> states, configurable options are: <code>topPullText</code>, <code>topDropText</code> and <code>topLoadingText</code>. And <code>bottomPullText</code>, <code>bottomDropText</code> and <code>bottomLoadingText</code> are for the bottom DOM.</p>\n<h2>Auto fill</h2>\n<p>Upon loaded, <code>loadmore</code> will automatically check if it is tall enough to fill its container. If not, <code>bottom-method</code> will run until its container is filled. Turn off <code>auto-fill</code> if you\'d rather handle this manually.</p>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>autoFill</td>\n<td>if <code>true</code>, <code>loadmore</code> will check and fill its container</td>\n<td>Boolean</td>\n<td></td>\n<td>true</td>\n</tr>\n<tr>\n<td>topPullText</td>\n<td>top text when the component is being pulled down</td>\n<td>String</td>\n<td></td>\n<td>\'下拉刷新\'</td>\n</tr>\n<tr>\n<td>topDropText</td>\n<td>top text when the component is ready to drop</td>\n<td>String</td>\n<td></td>\n<td>\'释放更新\'</td>\n</tr>\n<tr>\n<td>topLoadingText</td>\n<td>top text while <code>topMethod</code> is running</td>\n<td>String</td>\n<td></td>\n<td>\'加载中...\'</td>\n</tr>\n<tr>\n<td>topDistance</td>\n<td>distance threshold that triggers <code>topMethod</code>(in pixel)</td>\n<td>Number</td>\n<td></td>\n<td>70</td>\n</tr>\n<tr>\n<td>topMethod</td>\n<td>upward load-more function</td>\n<td>Function</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>bottomPullText</td>\n<td>bottom text when the component is being pulled up</td>\n<td>String</td>\n<td></td>\n<td>\'上拉刷新\'</td>\n</tr>\n<tr>\n<td>bottomDropText</td>\n<td>bottom text when the component is ready to drop</td>\n<td>String</td>\n<td></td>\n<td>\'释放更新\'</td>\n</tr>\n<tr>\n<td>bottomLoadingText</td>\n<td>bottom text while <code>bottomMethod</code> is running</td>\n<td>String</td>\n<td></td>\n<td>\'加载中...\'</td>\n</tr>\n<tr>\n<td>bottomDistance</td>\n<td>distance threshold that triggers <code>bottomMethod</code>(in pixel)</td>\n<td>Number</td>\n<td></td>\n<td>70</td>\n</tr>\n<tr>\n<td>bottomMethod</td>\n<td>downward load-more function</td>\n<td>Function</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>bottomAllLoaded</td>\n<td>if <code>true</code>, <code>bottomMethod</code> can no longer be triggered</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>data list</td>\n</tr>\n<tr>\n<td>top</td>\n<td>custom top HTML template</td>\n</tr>\n<tr>\n<td>bottom</td>\n<td>custom bottom HTML template</td>\n</tr>\n</tbody>\n</table></div>'!==t.exports.template&&(t.exports.template='<h1>Loadmore</h1>\n<blockquote>\n<p>A two-direction pull-to-refresh component. Custom HTML templates supported.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Loadmore } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Loadmore.name, Loadmore);\n</code></pre>\n<h2>Example</h2>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-loadmore</span> <span class="hljs-attr">:top-method</span>=<span class="hljs-string">"loadTop"</span> <span class="hljs-attr">:bottom-method</span>=<span class="hljs-string">"loadBottom"</span> <span class="hljs-attr">:bottom-all-loaded</span>=<span class="hljs-string">"allLoaded"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in list"</span>&gt;</span>{{ item }}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-loadmore</span>&gt;</span>\n</code></pre>\n<p>Take upward direction for example: pull the component <code>topDistance</code> pixels away from the top and then release it, the function you appointed as <code>top-method</code> will run</p>\n<pre><code class="language-javascript">loadTop(id) {\n  ...<span class="hljs-comment">// load more data</span>\n  <span class="hljs-keyword">this</span>.$broadcast(<span class="hljs-string">\'onTopLoaded\'</span>, id);\n}\n</code></pre>\n<p>At the end of your <code>top-method</code>, don\'t forget to broadcast the <code>onTopLoaded</code> event so that <code>mint-loadmore</code> removes <code>topLoadingText</code>. Note that a parameter called <code>id</code> is passed to <code>loadTop</code> and <code>onTopLoaded</code>. This is because after the top data is loaded, some reposition work is performed inside a <code>mint-loadmore</code> instance, and <code>id</code> simply tells the component which instance should be repositioned. You don\'t need to do anything more than passing <code>id</code> to <code>onTopLoaded</code> just as shown above.</p>\n<p>For downward direction, things are similar. To invoke <code>bottom-method</code>, just pull the component <code>bottomDistance</code> pixels away from the bottom and then release it</p>\n<pre><code class="language-javascript">loadBottom(id) {\n  ...<span class="hljs-comment">// load more data</span>\n  <span class="hljs-keyword">this</span>.allLoaded = <span class="hljs-literal">true</span>;<span class="hljs-comment">// if all data are loaded</span>\n  <span class="hljs-keyword">this</span>.$broadcast(<span class="hljs-string">\'onBottomLoaded\'</span>, id);\n}\n</code></pre>\n<p>The only difference is that after all data are fetched, you can set <code>bottom-all-loaded</code> to <code>true</code> so that <code>bottom-method</code> will not run any more.</p>\n<h2>Custom HTML templates</h2>\n<p>You can customize the top and bottom DOM using an HTML template</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-loadmore</span> <span class="hljs-attr">:top-method</span>=<span class="hljs-string">"loadTop"</span> <span class="hljs-attr">:top-status.sync</span>=<span class="hljs-string">"topStatus"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in list"</span>&gt;</span>{{ item }}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mint-loadmore-top"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">"topStatus !== \'loading\'"</span> <span class="hljs-attr">:class</span>=<span class="hljs-string">"{ \'rotate\': topStatus === \'drop\' }"</span>&gt;</span>↓<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">"topStatus === \'loading\'"</span>&gt;</span>Loading...<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-loadmore</span>&gt;</span>\n</code></pre>\n<p>For example, to customize the top DOM, you\'ll need to add a variable that syncs with <code>top-status</code> on <code>loadmore</code> tag, and then write your template with a <code>slot</code> attribute set to <code>top</code> and <code>class</code> set to <code>mint-loadmore-top</code>. <code>top-status</code> has three possible values that indicates which status the component is at</p>\n<ul>\n<li><code>pull</code>: if the component is being pulled yet not ready to drop (top distance is within the distance threshold defined by <code>topDistance</code>)</li>\n<li><code>drop</code>: if the component is ready to drop</li>\n<li><code>loading</code>: if <code>topMethod</code> is running</li>\n</ul>\n<h2>Configure texts in top and bottom DOM</h2>\n<p>If you decide not to customize HTML templates, you can configure the texts that comes with <code>loadmore</code>. Take the top DOM for example, corresponding to the three <code>top-status</code> states, configurable options are: <code>topPullText</code>, <code>topDropText</code> and <code>topLoadingText</code>. And <code>bottomPullText</code>, <code>bottomDropText</code> and <code>bottomLoadingText</code> are for the bottom DOM.</p>\n<h2>Auto fill</h2>\n<p>Upon loaded, <code>loadmore</code> will automatically check if it is tall enough to fill its container. If not, <code>bottom-method</code> will run until its container is filled. Turn off <code>auto-fill</code> if you\'d rather handle this manually.</p>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>autoFill</td>\n<td>if <code>true</code>, <code>loadmore</code> will check and fill its container</td>\n<td>Boolean</td>\n<td></td>\n<td>true</td>\n</tr>\n<tr>\n<td>topPullText</td>\n<td>top text when the component is being pulled down</td>\n<td>String</td>\n<td></td>\n<td>\'下拉刷新\'</td>\n</tr>\n<tr>\n<td>topDropText</td>\n<td>top text when the component is ready to drop</td>\n<td>String</td>\n<td></td>\n<td>\'释放更新\'</td>\n</tr>\n<tr>\n<td>topLoadingText</td>\n<td>top text while <code>topMethod</code> is running</td>\n<td>String</td>\n<td></td>\n<td>\'加载中...\'</td>\n</tr>\n<tr>\n<td>topDistance</td>\n<td>distance threshold that triggers <code>topMethod</code>(in pixel)</td>\n<td>Number</td>\n<td></td>\n<td>70</td>\n</tr>\n<tr>\n<td>topMethod</td>\n<td>upward load-more function</td>\n<td>Function</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>bottomPullText</td>\n<td>bottom text when the component is being pulled up</td>\n<td>String</td>\n<td></td>\n<td>\'上拉刷新\'</td>\n</tr>\n<tr>\n<td>bottomDropText</td>\n<td>bottom text when the component is ready to drop</td>\n<td>String</td>\n<td></td>\n<td>\'释放更新\'</td>\n</tr>\n<tr>\n<td>bottomLoadingText</td>\n<td>bottom text while <code>bottomMethod</code> is running</td>\n<td>String</td>\n<td></td>\n<td>\'加载中...\'</td>\n</tr>\n<tr>\n<td>bottomDistance</td>\n<td>distance threshold that triggers <code>bottomMethod</code>(in pixel)</td>\n<td>Number</td>\n<td></td>\n<td>70</td>\n</tr>\n<tr>\n<td>bottomMethod</td>\n<td>downward load-more function</td>\n<td>Function</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>bottomAllLoaded</td>\n<td>if <code>true</code>, <code>bottomMethod</code> can no longer be triggered</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>data list</td>\n</tr>\n<tr>\n<td>top</td>\n<td>custom top HTML template</td>\n</tr>\n<tr>\n<td>bottom</td>\n<td>custom bottom HTML template</td>\n</tr>\n</tbody>\n</table></div>')}});