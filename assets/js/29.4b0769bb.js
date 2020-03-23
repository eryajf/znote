(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{422:function(t,v,_){"use strict";_.r(v);var e=_(2),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("Boxx"),t._v(" "),_("p",[t._v("TCP/UDP协议是"),_("strong",[t._v("传输层协议")]),t._v("，主要解决数据如何在网络中传输，而HTTP是"),_("strong",[t._v("应用层协议")]),t._v("，主要解决如何包装数据。")]),t._v(" "),_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#tcp"}},[t._v("TCP")]),_("ul",[_("li",[_("a",{attrs:{href:"#tcp三次握手-★"}},[t._v("TCP三次握手 ★")])]),_("li",[_("a",{attrs:{href:"#为什么tcp客户端最后还要发送一次确认呢？"}},[t._v("为什么TCP客户端最后还要发送一次确认呢？")])])])]),_("li",[_("a",{attrs:{href:"#udp"}},[t._v("UDP")])]),_("li",[_("a",{attrs:{href:"#tcp和udp区别"}},[t._v("TCP和UDP区别")])]),_("li",[_("a",{attrs:{href:"#tcp与udp的适用场景"}},[t._v("TCP与UDP的适用场景")])]),_("li",[_("a",{attrs:{href:"#websocket"}},[t._v("WebSocket")])]),_("li",[_("a",{attrs:{href:"#http"}},[t._v("HTTP")]),_("ul",[_("li",[_("a",{attrs:{href:"#http-协议格式"}},[t._v("HTTP 协议格式")])]),_("li",[_("a",{attrs:{href:"#http-method"}},[t._v("HTTP Method")])]),_("li",[_("a",{attrs:{href:"#http-status-code和status-text"}},[t._v("HTTP Status code和Status text")])]),_("li",[_("a",{attrs:{href:"#http-head-http-头"}},[t._v("HTTP Head (HTTP 头)")])]),_("li",[_("a",{attrs:{href:"#http-request-body"}},[t._v("HTTP Request Body")])])])]),_("li",[_("a",{attrs:{href:"#https"}},[t._v("HTTPS")])]),_("li",[_("a",{attrs:{href:"#http2"}},[t._v("HTTP2")])])])]),_("p"),t._v(" "),_("p",[t._v("简单理解： “IP”代表网际协议，TCP和UDP使用该协议从一个网络传送数据包到另一个网络。把IP想像成一种高速"),_("code",[t._v("公路")]),t._v("，它允许其它协议在上面行驶并找到到其它电脑的出口。TCP和UDP是高速公路上的"),_("code",[t._v("卡车")]),t._v("，它们携带的"),_("code",[t._v("货物")]),t._v("就是像HTTP，文件传输协议FTP这样的协议等。")]),t._v(" "),_("p",[t._v("当然还有像SOCKET这种抽象层：TCP/IP网络的API。Socket（相当于"),_("code",[t._v("码头/车站")]),t._v("）是应用层与TCP/IP协议族通信的中间软件抽象层，它是一组接口。socket是在应用层和传输层之间的一个抽象层，它把TCP/IP层复杂的操作抽象为几个简单的接口供应用层调用已实现进程在网络中通信。")]),t._v(" "),_("p",[t._v("TCP提供有保证的数据传输，UDP不提供，而"),_("u",[t._v("HTTP就是基于TCP实现的应用层协议")]),t._v("。")]),t._v(" "),_("h2",{attrs:{id:"tcp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[t._v("#")]),t._v(" TCP")]),t._v(" "),_("p",[t._v("TCP是一种"),_("strong",[t._v("面向连接的、可靠的")]),t._v("传输层协议；")]),t._v(" "),_("p",[t._v("TCP协议建立在不可靠的网络层 IP 协议之上，IP协议并不能提供任何可靠性机制，TCP的可靠性完全由自己实现；")]),t._v(" "),_("p",[t._v("TCP采用的最基本的可靠性技术是：确认与"),_("strong",[t._v("超时重传机制")]),t._v("、"),_("strong",[t._v("流量控制机制")]),t._v("（别发的太快已保证对方能收到）；")]),t._v(" "),_("h3",{attrs:{id:"tcp三次握手-★"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手-★"}},[t._v("#")]),t._v(" TCP三次握手 ★")]),t._v(" "),_("p",[t._v("*   第一次握手：客户端向服务器发送请求报文段，其中同步位SYN=1，序号SEQ=x（表明传送数据时的第一个数据字节的序号是x），等待服务器确认；")]),t._v(" "),_("p",[t._v("*   第二次握手：服务器收到客户端发来的请求，如果同意建立连接，就发回一个确认报文段，该报文段中同步位SYN=1，确认号ACK=x+1，序号SEQ=y；")]),t._v(" "),_("p",[t._v("*   第三次握手：客户端收到服务器的确认报文段后，还需要向服务器给出确认，向其发送确认包ACK(ack=y+1)，进而完成三次握手。")]),t._v(" "),_("h3",{attrs:{id:"为什么tcp客户端最后还要发送一次确认呢？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么tcp客户端最后还要发送一次确认呢？"}},[t._v("#")]),t._v(" 为什么TCP客户端最后还要发送一次确认呢？")]),t._v(" "),_("p",[t._v("一句话，主要防止已经失效的连接请求报文突然又传送到了服务器，从而产生错误。")]),t._v(" "),_("p",[t._v("如果使用的是两次握手建立连接，假设有这样一种场景，"),_("strong",[t._v("客户端发送了第一个请求连接并且没有丢失，只是因为在网络结点中滞留的时间太长了")]),t._v("，由于TCP的客户端迟迟没有收到确认报文，以为服务器没有收到，此时重新向服务器发送这条报文，此后客户端和服务器经过两次握手完成连接，传输数据，然后关闭连接。此时此前滞留的那一次请求连接，网络通畅了到达了服务器，这个报文本该是失效的，但是，两次握手的机制将会让客户端和服务器再次建立连接，这将导致不必要的错误和资源的浪费。")]),t._v(" "),_("p",[t._v("如果采用的是三次握手，就算是那一次失效的报文传送过来了，服务端接受到了那条失效报文并且回复了确认报文，但是客户端不会再次发出确认。由于服务器收不到确认，就知道客户端并没有请求连接。")]),t._v(" "),_("h2",{attrs:{id:"udp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#udp"}},[t._v("#")]),t._v(" UDP")]),t._v(" "),_("p",[t._v("UDP是一种"),_("strong",[t._v("无连接的、不可靠的")]),t._v("传输层协议； 提供了有限的差错检验功能；目的是希望"),_("strong",[t._v("以最小的开销来达到网络环境中的进程通信目的")]),t._v("。")]),t._v(" "),_("p",[t._v("UDP（用户数据报协议）- 类似发短信：")]),t._v(" "),_("ol",[_("li",[t._v("只管发送，不确认对方是否接收到")]),t._v(" "),_("li",[t._v("将数据及源和目的封装成数据包中，不需要建立连接")]),t._v(" "),_("li",[t._v("每个数据包的大小限制在64K之内")]),t._v(" "),_("li",[t._v("因为无需连接，因此是不可靠协议")]),t._v(" "),_("li",[t._v("不需要建立连接，速度快")])]),t._v(" "),_("p",[t._v("随着现代网速的提升，UDP协议以其简单、传输快的优势，在越来越多场景下取代了TCP ， 如网页浏览、流媒体、实时游戏、物联网。")]),t._v(" "),_("h2",{attrs:{id:"tcp和udp区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp和udp区别"}},[t._v("#")]),t._v(" TCP和UDP区别")]),t._v(" "),_("p",[t._v("TCP：")]),t._v(" "),_("p",[t._v("面向连接、传输可靠（保证数据正确性）、有序（保证数据顺序）、传输大量数据（流模式）、速度慢、对系统资源的要求多，程序结构较复杂，\n每一条TCP连接只能是点到点的，\nTCP首部开销20字节。")]),t._v(" "),_("p",[t._v("UDP：")]),t._v(" "),_("p",[t._v("面向非连接 、传输不可靠（可能丢包）、无序、传输少量数据（数据报模式）、速度快，对系统资源的要求少，程序结构较简单 ，\nUDP支持一对一，一对多，多对一和多对多的交互通信，\nUDP的首部开销小，只有8个字节。")]),t._v(" "),_("h2",{attrs:{id:"tcp与udp的适用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp与udp的适用场景"}},[t._v("#")]),t._v(" TCP与UDP的适用场景")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("TCP用于在传输层有必要实现可靠传输的情况。")])]),t._v(" "),_("li",[_("p",[t._v("UDP主要用于那些对高速传输和实时性有较高要求的通信或广播通信。")]),t._v(" "),_("p",[t._v("举一个通过 IP 电话进行通话的例子。如果使用 TCP，数据在传送途中如果丢失就会被重发，这样就会导致无法流畅地传输通话人的声音。而采用UDP，它不会进行重发处理，从而也就不会有声音大幅度延迟到达的问题，即使有部分数据丢失，也只是会影响某一小部分的通话。")])])]),t._v(" "),_("h2",{attrs:{id:"websocket"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[t._v("#")]),t._v(" WebSocket")]),t._v(" "),_("p",[t._v("可以把WebSocket想象成HTTP(应用层)，HTTP和Socket什么关系，WebSocket和Socket就是什么关系。")]),t._v(" "),_("p",[t._v("HTTP 协议有一个缺陷：通信只能由客户端发起，做不到服务器主动向客户端推送信息。")]),t._v(" "),_("p",[t._v("WebSocket 协议在2008年诞生，2011年成为国际标准。所有浏览器都已经支持了。它的最大特点就是，"),_("strong",[t._v("服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息")]),t._v("，是真正的双向平等对话，属于服务器推送技术的一种。")]),t._v(" "),_("h2",{attrs:{id:"http"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),_("p",[t._v("HTTP 标准由 IETF 组织制定。")]),t._v(" "),_("p",[t._v("HTTP 协议是基于 TCP 协议出现的，对 TCP 协议来说，TCP 协议是一条双向的通讯通道，HTTP 在 TCP 的基础上，规定了 Request-Response 模式。这个模式决定了通讯必定由浏览器端首先发起。")]),t._v(" "),_("p",[t._v("HTTP 是存粹的文本协议，它是规定了使用 TCP 协议来传输文本格式的一个应用层协议。")]),t._v(" "),_("h3",{attrs:{id:"http-协议格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-协议格式"}},[t._v("#")]),t._v(" HTTP 协议格式")]),t._v(" "),_("p",[_("img",{attrs:{src:"/znote/img/other/http001.jpg",alt:"http-image"}})]),t._v(" "),_("h3",{attrs:{id:"http-method"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-method"}},[t._v("#")]),t._v(" HTTP Method")]),t._v(" "),_("ul",[_("li",[t._v("GET：浏览器通过地址栏访问页面都是 GET 方法。")]),t._v(" "),_("li",[t._v("POST：表单提交产生 POST 方法。")]),t._v(" "),_("li",[t._v("HEAD：HEAD 跟 GET 类似，只返回请求头，多数由 JavaScript 发起。")]),t._v(" "),_("li",[t._v("PUT：添加资源，语义上的约束。")]),t._v(" "),_("li",[t._v("DELETE ：删除资源，语义上的约束。")]),t._v(" "),_("li",[t._v("CONNECT：CONNECT 多用于 HTTPS 和 WebSocket。")]),t._v(" "),_("li",[t._v("OPTIONS：一般用于调试，多数线上服务都不支持。")]),t._v(" "),_("li",[t._v("TRACE：一般用于调试，多数线上服务都不支持。")])]),t._v(" "),_("h3",{attrs:{id:"http-status-code和status-text"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-status-code和status-text"}},[t._v("#")]),t._v(" HTTP Status code和Status text")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("1xx：临时回应，表示客户端请继续，被浏览器 HTTP 库直接处理掉了，不会让上层应用知晓")])]),t._v(" "),_("li",[_("p",[t._v("2xx：请求成功")]),t._v(" "),_("ul",[_("li",[t._v("200：请求成功")])])]),t._v(" "),_("li",[_("p",[t._v("3xx：表示请求的目标由变化，希望客户端进一步处理")]),t._v(" "),_("ul",[_("li",[t._v("301&302：当前资源已经被转移，永久性与临时性的转移。 301 更接近一种报错，提示客户端下次别来了。")]),t._v(" "),_("li",[t._v("304：客户端本地已经由缓存的版本，并且在 Request 中告诉了服务端，当服务端通过时间或者 tag，发现没有更新的时候，就会返回一个不含 body 的 304 状态。")])])]),t._v(" "),_("li",[_("p",[t._v("4xx：客户端请求错误")]),t._v(" "),_("ul",[_("li",[t._v("403：无权限")]),t._v(" "),_("li",[t._v("404：表示请求的页面不存在")])])]),t._v(" "),_("li",[_("p",[t._v("5xx：服务端请求错误")]),t._v(" "),_("ul",[_("li",[t._v("500：服务端错误")]),t._v(" "),_("li",[t._v("503：服务端暂时性错误，可以一会再试")])])])]),t._v(" "),_("h3",{attrs:{id:"http-head-http-头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-head-http-头"}},[t._v("#")]),t._v(" HTTP Head (HTTP 头)")]),t._v(" "),_("blockquote",[_("p",[t._v("可以看作键值对。")])]),t._v(" "),_("p",[_("strong",[t._v("Request Header")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Request Header")]),t._v(" "),_("th",[t._v("规定")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Accept")]),t._v(" "),_("td",[t._v("浏览器端接受的格式")])]),t._v(" "),_("tr",[_("td",[t._v("Accept-Encoding")]),t._v(" "),_("td",[t._v("浏览器端接受的编码方式")])]),t._v(" "),_("tr",[_("td",[t._v("Accpet-Language")]),t._v(" "),_("td",[t._v("浏览器端接受的语言，用于服务器端判断多语言")])]),t._v(" "),_("tr",[_("td",[t._v("Cache-Control")]),t._v(" "),_("td",[t._v("控制缓存的时效性")])]),t._v(" "),_("tr",[_("td",[t._v("Connection")]),t._v(" "),_("td",[t._v("连接方式，如果是 keep-alive，且服务器端支持，则会复用连接")])]),t._v(" "),_("tr",[_("td",[t._v("Host")]),t._v(" "),_("td",[t._v("HTTP访问使用的域名")])]),t._v(" "),_("tr",[_("td",[t._v("If-Modified-Since")]),t._v(" "),_("td",[t._v("上次访问时的更改时间，如果服务器认为此时间后自己没有更新，则会给出 304 响应")])]),t._v(" "),_("tr",[_("td",[t._v("If-None-Match")]),t._v(" "),_("td",[t._v("上次访问时使用的 E-Tag，通常是页面的信息摘要，这个比更改时间更准确一些")])]),t._v(" "),_("tr",[_("td",[t._v("User-Agent")]),t._v(" "),_("td",[t._v("客户端标识")])]),t._v(" "),_("tr",[_("td",[t._v("Cookie")]),t._v(" "),_("td",[t._v("客户端存储的 Cookie 字符串")])])])]),t._v(" "),_("p",[_("strong",[t._v("Response Header")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Response Header")]),t._v(" "),_("th",[t._v("规定")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Cache-Control")]),t._v(" "),_("td",[t._v("缓存控制，用于通知各级缓存保存的时间，例如 max-age=0 表示不要缓存")])]),t._v(" "),_("tr",[_("td",[t._v("Connection")]),t._v(" "),_("td",[t._v("连接类型，Keep-Alive表示复用连接")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Encoding")]),t._v(" "),_("td",[t._v("内容编码方式，通常是gzip")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Length")]),t._v(" "),_("td",[t._v("内容的长度，有利于浏览器判断内容是否已经结束")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Type")]),t._v(" "),_("td",[t._v("内容类型，所有请求网页的都是 text/html")])]),t._v(" "),_("tr",[_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("当前的服务器日期")])]),t._v(" "),_("tr",[_("td",[t._v("ETag")]),t._v(" "),_("td",[t._v("页面的信息摘要，用于判断是否需要重新到服务器端取回页面")])]),t._v(" "),_("tr",[_("td",[t._v("Expires")]),t._v(" "),_("td",[t._v("过期时间，用于判断下次请求是否需要到服务器端取回页面")])]),t._v(" "),_("tr",[_("td",[t._v("Keep-Alive")]),t._v(" "),_("td",[t._v("保持连接不断时需要的一些信息，如 timeout=5，max=100")])]),t._v(" "),_("tr",[_("td",[t._v("Last-Modified")]),t._v(" "),_("td",[t._v("页面上次修改的时间")])]),t._v(" "),_("tr",[_("td",[t._v("Server")]),t._v(" "),_("td",[t._v("服务器软件的类型")])]),t._v(" "),_("tr",[_("td",[t._v("Set-Cookie")]),t._v(" "),_("td",[t._v("设置 cookie 可以存在多个")])]),t._v(" "),_("tr",[_("td",[t._v("Via")]),t._v(" "),_("td",[t._v("服务器端的请求链路，对一些调试场景至关重要的一个头")])])])]),t._v(" "),_("h3",{attrs:{id:"http-request-body"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-request-body"}},[t._v("#")]),t._v(" HTTP Request Body")]),t._v(" "),_("blockquote",[_("p",[t._v("HTTP 请求的 body 主要用于提交表单场景。比较自由，服务端认可即可。")])]),t._v(" "),_("p",[t._v("常见的 body 格式：")]),t._v(" "),_("ul",[_("li",[t._v("application/json")]),t._v(" "),_("li",[t._v("application/x-www-form-urlencoded")]),t._v(" "),_("li",[t._v("multipart/form-data")]),t._v(" "),_("li",[t._v("text/xml")])]),t._v(" "),_("p",[t._v("使用 html 的 form 标签提交产生的 html 请求，默认会产生 application/x-www-form-urlencoded 数据格式，当由文件上传时，则使用 multipart/form-data。")]),t._v(" "),_("h2",{attrs:{id:"https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" HTTPS")]),t._v(" "),_("blockquote",[_("p",[t._v("在 HTTP 协议的基础上，HTTPS 和 HTTP2 规定了更复杂的内容，但是它基本保持了 HTTP 的设计思想，即：使用上的 Request-Response 模式。")])]),t._v(" "),_("p",[t._v("HTTPS 作用：")]),t._v(" "),_("ul",[_("li",[t._v("确定请求的目标服务端身份")]),t._v(" "),_("li",[t._v("保证传输的数据不会被网络中间节点窃听或者篡改")])]),t._v(" "),_("p",[t._v("HTTPS 是使用加密通道来传输 HTTP 的内容。 HTTPS 首先与服务端建立一条 TLS 加密通道。TLS 构建于 TCP 协议之上，它实际上是对传输的内容做一次加密，所以从传输内容上看，HTTPS 跟 HTTP 没有任何区别。")]),t._v(" "),_("h2",{attrs:{id:"http2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http2"}},[t._v("#")]),t._v(" HTTP2")]),t._v(" "),_("blockquote",[_("p",[t._v("HTTP 2 是 HTTP 1.1 的升级版本。")])]),t._v(" "),_("p",[t._v("HTTP 2.0 最大的改进有两点，一是支持服务端推送，二是支持 TCP 连接推送。")]),t._v(" "),_("p",[t._v("服务端推送能够在客户端发送第一个请求到服务端时，提前把一部分内容推送给客户端，放入缓存中，可以避免客户端请求顺序带来的并行度不高，从而导致性能问题。")]),t._v(" "),_("p",[t._v("TCP 连接复用，则使用同一个 TCP 连接来传输多个 HTTP 请求，避免了 TCP 连接建立时的三次握手开销，和初建 TCP 连接时传输窗口小的问题。")])],1)}),[],!1,null,null,null);v.default=a.exports}}]);