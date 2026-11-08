export default `/* ============================================================
   OrangeHeart（橙心）· 精致微调版
   ------------------------------------------------------------
   基于你提供的官方 OrangeHeart.css 修改，共 13 处微调，
   【保留】橙心全部结构与标志性橙色标题块，只调数值和配色。
   每处改动都带 ✎ 注释，方便逐条核对或删回。
   用法：mdnice → 查看 → 主题 CSS 区域 → 切「自定义」→ 全选替换。
   配色参考：封面琥珀橙 #ffb35c / 深蓝紫 #1a1436
   ============================================================ */

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#nice {
    margin: 0px;
    padding: 0px 10px;
    background: none 0% 0% / auto no-repeat scroll padding-box border-box rgba(0, 0, 0, 0);
    width: auto;
    font-family: Optima, "Microsoft YaHei", PingFangSC-regular, serif;
    font-size: 16px;
    color: #3a3a42;   /* ✎ 微调1 纯黑改柔和深灰，降低手机屏对比压迫 */
    line-height: 1.5em;
    word-spacing: 0em;
    letter-spacing: 0em;
    word-break: break-word;
    overflow-wrap: break-word;
    text-align: left;
}
#nice figure {
    margin: 10px 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#nice figure img {
    border-style: none;
    border-width: 3px;
    border-color: rgba(0, 0, 0, 0.4);
    border-radius: 4px;   /* ✎ 微调2 图片加淡圆角 */
    object-fit: fill;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}
#nice img {
    display: block;
    margin: 0px auto;
    max-width: 100%;
}
#nice figure figcaption {
    color: rgb(136, 136, 136);
    font-size: 14px;
    line-height: 1.5em;
    letter-spacing: 0em;
    text-align: center;
    font-weight: normal;
    margin: 5px 0px 0px;
    padding: 0px;
}

#nice .custom-blockquote {
    margin: 20px 0px;
    padding: 12px 14px 12px 18px;   /* ✎ 微调3 内边距更匀 */
    border-style: none none none solid;
    border-width: 2px;   /* ✎ 微调3 边框 3px->2px */
    border-color: rgba(0, 0, 0, 0.4) rgba(0, 0, 0, 0.4) rgba(0, 0, 0, 0.4) rgb(239, 112, 96);
    border-radius: 0px;
    background: none 0% 0% / auto no-repeat scroll padding-box border-box rgb(255, 249, 249);
    width: auto;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px;
    display: block;
    overflow: auto;
}
#nice .custom-blockquote p {
    color: rgb(0, 0, 0);
    font-size: 15px;
    line-height: 1.8em;
    letter-spacing: 0px;
    text-align: left;
    font-weight: normal;
    margin: 0px;
}
/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
    color: #3a3a42;   /* ✎ 微调1 段落同正文色 */
    font-size: 16px;
    line-height: 1.8em;
    letter-spacing: 0em;
    text-align: left;
    text-indent: 0em;
    margin: 0px;
    padding: 8px 0px;
}
#nice * {
    cursor: auto;   /* ✎ 微调4 原为 pointer，整篇文字都显示手型，去掉 */
}

#nice hr {
    margin: 24px 0px;   /* ✎ 微调5 上下留白 10px->24px，分节更清楚 */
    padding: 0px;
    border-style: solid none none;
    border-width: 1px 0px 0px;   /* ✎ 微调5 只留上边线 */
    border-color: #e6e6ea #e6e6ea #e6e6ea;   /* ✎ 微调5 纯黑->淡灰 */
    border-radius: 0px;
    background: none 0% 0% / auto no-repeat scroll padding-box border-box rgba(0, 0, 0, 0);
    width: auto;
    height: 1px;
}

/* 一级标题 */
#nice h1 {
    margin: 30px 0px 15px;
    padding: 0px;
    display: block;
}

/* 一级标题内容 */
#nice h1 .content {
    font-size: 24px;
    color: #1a1436;   /* ✎ 微调6 深蓝紫，对齐封面主色 */
    line-height: 1.5em;
    letter-spacing: 0em;
    text-align: left;
    font-weight: bold;
    display: block;
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1 .prefix {
    display: none;
}
#nice h1 .suffix {
    display: none;
}

/* 二级标题 */
#nice h2 {
    border-color: transparent transparent rgba(239, 112, 96, 0.4);   /* ✎ 微调7 下边框改淡橙 */
    margin: 30px 0px 15px;
    padding: 0px;
    align-items: unset;
    background-attachment: scroll;
    background-clip: border-box;
    background-color: unset;
    background-image: none;
    background-origin: padding-box;
    background-position: 0% 0%;
    background-repeat: no-repeat;
    background-size: auto;
    border-style: none none solid;
    border-width: 0px 0px 1px;   /* ✎ 微调7 2px->1px */
    border-radius: 0px;
    box-shadow: none;
    display: flex;
    flex-direction: unset;
    float: unset;
    height: auto;
    justify-content: unset;
    line-height: 1.1em;
    overflow: unset;
    position: relative;
    text-align: left;
    text-shadow: none;
    transform: none;
    width: auto;
    -webkit-box-reflect: unset;
}

/* 二级标题内容 */
#nice h2 .content {
    font-size: 20px;   /* ✎ 微调8 22->20，手机上更秀气 */
    color: rgb(255, 255, 255);
    background: none 0% 0% / auto no-repeat scroll padding-box border-box rgb(239, 112, 96);
    line-height: 1.5em;
    letter-spacing: 0em;
    align-items: unset;
    border-style: none;
    border-width: 1px;
    border-color: rgb(0, 0, 0);
    border-radius: 5px 5px 0px 0px;   /* ✎ 微调8 圆角 3->5 */
    box-shadow: none;
    content: unset;
    display: inline-block;
    font-weight: bold;
    flex-direction: unset;
    float: unset;
    height: auto;
    justify-content: unset;
    margin: 0px 5px 0px 0px;
    overflow: unset;
    padding: 5px 14px 4px;   /* ✎ 微调8 上下留白，白字不贴边 */
    position: relative;
    text-align: left;
    text-indent: 0em;
    text-shadow: none;
    transform: none;
    width: auto;
    -webkit-box-reflect: unset;
}
#nice h2 .prefix {
    display: none;
}
#nice h2 .suffix {
    display: none;
}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {
    border-color: rgb(0, 0, 0) transparent rgb(239, 235, 233) rgb(0, 0, 0);   /* 官方原值：上/左为 none，黑色不渲染 */
    align-items: unset;
    background-attachment: scroll;
    background-clip: border-box;
    background-color: unset;
    background-image: none;
    background-origin: padding-box;
    background-position: 0% 0%;
    background-repeat: no-repeat;
    background-size: auto;
    border-style: none solid solid none;
    border-width: 1px 14px 24px 1px;   /* ✎ 微调9 折角 20x36 -> 14x24，更含蓄 */
    border-radius: 0px;
    box-shadow: none;
    color: rgb(0, 0, 0);
    content: " ";
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    flex-direction: unset;
    float: unset;
    height: auto;
    justify-content: unset;
    letter-spacing: 0px;
    line-height: 1.1em;
    margin: 0px;
    overflow: unset;
    padding: 0px;
    position: relative;
    text-align: left;
    text-indent: 0em;
    text-shadow: none;
    transform: none;
    width: auto;
    -webkit-box-reflect: unset;
}

/* 三级标题 */
#nice h3 {
    margin: 30px 0px 15px;
    padding: 0px;
    display: block;
}

/* 三级标题内容 */
#nice h3 .content {
    font-size: 20px;
    color: #1a1436;   /* ✎ 微调6 */
    line-height: 1.5em;
    letter-spacing: 0em;
    text-align: left;
    font-weight: bold;
    display: block;
}
#nice h3 .prefix,#nice h3 .suffix{
    display: none;
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
    list-style-type: disc;
    margin: 8px 0px;
    padding: 0px 0px 0px 25px;
    color: rgb(0, 0, 0);
}
#nice ul li section {
    color: #3a3a42;   /* ✎ 微调1 */
    font-size: 16px;
    line-height: 1.8em;
    letter-spacing: 0em;
    text-align: left;
    font-weight: normal;
}
#nice ul section {
    margin-top: 5px;
    margin-bottom: 5px;
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
    list-style-type: decimal;
    margin: 8px 0px;
    padding: 0px 0px 0px 25px;
    color: rgb(0, 0, 0);
}

/* 列表内容，不要设置li
 */
#nice ol li section {
    color: #3a3a42;   /* ✎ 微调1 */
    font-size: 16px;
    line-height: 1.8em;
    letter-spacing: 0em;
    text-align: left;
    font-weight: normal;
}
#nice ol section {
    margin-top: 5px;
    margin-bottom: 5px;
}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice blockquote {
    margin: 20px 0px;
    padding: 12px 14px 12px 18px;   /* ✎ 微调3 */
    border-style: none none none solid;
    border-width: 2px;   /* ✎ 微调3 */
    border-color: rgba(0, 0, 0, 0.4) rgba(0, 0, 0, 0.4) rgba(0, 0, 0, 0.4) rgb(239, 112, 96);
    border-radius: 0px;
    background: none 0% 0% / auto no-repeat scroll padding-box border-box rgb(255, 249, 249);
    width: auto;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px;
    display: block;
    overflow: auto;
}

/* 引用文字 */
#nice blockquote p {
}
#nice .table-container {
    margin: 0px;
    padding: 0px;
    overflow-x: auto;
}
#nice .table-container table {
    display: table;
    text-align: left;
}
#nice .table-container table thead tr th:nth-of-type(n) {
    min-width: 85px;
}
#nice .table-container table thead tr th {
    color: rgb(0, 0, 0);
    font-size: 16px;
    line-height: 1.5em;
    letter-spacing: 0em;
    text-align: left;
    font-weight: bold;
    background: none 0% 0% / auto no-repeat scroll padding-box border-box rgb(250, 247, 243);   /* ✎ 微调10 冷灰->暖白，贴合橙调 */
    width: auto;
    height: auto;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(204, 204, 204, 0.4);
    border-radius: 0px;
    padding: 5px 10px;
}
#nice .table-container table tbody {
    font-size: 16px;
    line-height: 1.5em;
    letter-spacing: 0em;
    text-align: left;
    font-weight: normal;
    border: 0px;
}
#nice .table-container table tbody tr:nth-of-type(2n+1) {
    color: rgb(0, 0, 0);
    background: none 0% 0% / auto no-repeat scroll padding-box border-box rgb(255, 255, 255);
    width: auto;
    height: auto;
}
#nice .table-container table tbody tr:nth-of-type(2n+1) td {
    border-style: solid;
    border-width: 1px;
    border-color: rgba(204, 204, 204, 0.4);
    border-radius: 0px;
}
#nice .table-container table tbody tr td:nth-of-type(n) {
    min-width: 85px;
}
#nice .table-container table tbody tr td {
    padding: 5px 10px;
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
  color: rgb(239, 112, 96);
  border-bottom: 1px solid rgba(239, 112, 96, 0.35);   /* ✎ 微调11 下划线淡化 */
}

/* 加粗 */
#nice strong {
    color: #1a1436;   /* ✎ 微调12 加粗用深蓝紫，让重点句轻轻跳出来，但仍不是彩色 */
    font-weight: bold;
    background: none 0% 0% / auto no-repeat scroll padding-box border-box rgba(0, 0, 0, 0);
    width: auto;
    height: auto;
    margin: 0px;
    padding: 0px;
    border-style: none;
    border-width: 3px;
    border-color: rgba(0, 0, 0, 0.4);
    border-radius: 0px;
}

/* 斜体 */
#nice em {
}

/* 加粗斜体 */
#nice em strong {
}

/* 删除线 */
#nice del {
}

#nice pre.custom {
    margin: 10px 0px;
    padding: 0px;
}
#nice .custom {
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;
    text-align: left;
}
#nice .custom:before {
    content: '';
    display: block;
    background: url(https://cdn.jsdelivr.net/gh/queryDuan/img/PicGo/btn_icon.svg);
    height: 30px;
    width: 100%;
    background-size: 40px;
    background-repeat: no-repeat;
    background-color: #282c34;
    margin-bottom: -7px;
    border-radius: 5px;
    background-position: 10px 10px;
}
#nice pre.custom code {
    display: -webkit-box;
    font-family: Consolas, Monaco, Menlo, monospace;
    font-size: 12px;
}
#nice .custom code {
    padding-top: 15px;
    background: #282c34;
    border-radius: 5px;
}
#nice pre.custom code span {
    line-height: 26px;
}
#nice p code {
    color: rgb(239, 112, 96);
    font-size: 14px;
    line-height: 1.8em;
    letter-spacing: 0em;
    background: rgba(239, 112, 96, 0.08);   /* ✎ 微调13 淡橙底，代码更成形 */
    width: auto;
    height: auto;
    border-style: none;
    border-width: 3px;
    border-color: rgb(0, 0, 0) rgba(0, 0, 0, 0.4) rgba(0, 0, 0, 0.4);
    overflow-wrap: break-word;
    padding: 2px 5px;
    border-radius: 4px;
    margin: 0px 2px;
    font-family: "Operator Mono", Consolas, Monaco, Menlo, monospace;
    word-break: break-all;
}
.hljs-string, .hljs-regexp, .hljs-addition, .hljs-attribute, .hljs-meta-string {
    color: #98c379;
}
.hljs-link {
    text-decoration: underline;
}
.hljs-string, .hljs-regexp, .hljs-addition, .hljs-attribute, .hljs-meta-string {
    color: #98c379;
}


/* 脚注文字 */
#nice .footnote-word {
  color: #ff3502;
}

/* 脚注上标 */
#nice .footnote-ref {
  color: rgb(239, 112, 96);
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
}

/* 参考资料编号 */
#nice .footnote-num {
}

/* 参考资料文字 */
#nice .footnote-item p { 
}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

#nice .imageflow-layer1 {
    margin: 20px 0px 10px;
    padding: 0px;
    border: none;
    overflow: hidden;
}
#nice .imageflow-layer2 {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
}
#nice .imageflow-layer3 {
    flex: 0 0 100%;
}
#nice .imageflow-img {
    display: inline-block;
}
#nice .imageflow-caption {
    text-align: center;
    margin: 0px;
    padding: 0px;
}
#nice .footnotes-sep {
    margin: 30px 0px 15px;
    padding: 0px;
    border-style: none;
    border-width: 3px;
    border-color: rgba(0, 0, 0, 0.4);
    border-radius: 0px;
    background: none 0% 0% / auto no-repeat scroll padding-box border-box rgba(0, 0, 0, 0);
    width: auto;
    height: auto;
}
#nice .footnotes-sep::before {
    display: block;
    content: "参考资料";
    color: #1a1436;   /* ✎ 微调6 */
    font-size: 18px;
    line-height: 1.5em;
    letter-spacing: 0em;
    text-align: left;
    font-weight: bold;
}
#nice .footnotes {
    margin: 0px;
    padding: 0px;
    border-style: none;
    border-width: 3px;
    border-color: rgba(0, 0, 0, 0.4);
    border-radius: 0px;
    background: none 0% 0% / auto no-repeat scroll padding-box border-box rgba(0, 0, 0, 0);
    width: auto;
    height: auto;
}
#nice .footnotes span {
    font-size: 14px;
    line-height: 1.8em;
    letter-spacing: 0em;
}
#nice .footnote-item {
    display: flex;
}
#nice .footnotes .footnote-num {
    color: rgba(0, 0, 0, 0.6);
    display: inline;
    width: 10%;
    background: none;
    font-size: 80%;
    font-family: ptima-Regular, Optima, PingFangSC-light, PingFangTC-light, "PingFang SC", Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    padding-top: 2px;
}
#nice .footnotes span {
    font-size: 14px;
    line-height: 1.8em;
    letter-spacing: 0em;
}
#nice .footnote-item p em {
    color: #3a3a42;   /* ✎ 微调1 */
    font-weight: normal;
    font-style: italic;
    background: none 0% 0% / auto no-repeat scroll padding-box border-box rgba(0, 0, 0, 0);
    width: auto;
    height: auto;
    border-style: none;
    border-width: 3px;
    border-color: rgba(0, 0, 0, 0.4);
    border-radius: 0px;
}
#nice em {
    color: #3a3a42;   /* ✎ 微调1 */
    font-style: italic;
    background: none 0% 0% / auto no-repeat scroll padding-box border-box rgba(0, 0, 0, 0);
    width: auto;
    height: auto;
    margin: 0px;
    padding: 0px;
    border-style: none;
    border-width: 3px;
    border-color: rgba(0, 0, 0, 0.4);
    border-radius: 0px;
}

/* 行内公式
 */
#nice .inline-equation svg {  
}`;
