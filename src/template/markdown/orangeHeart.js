export default `/* 全局属性
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
    color: rgb(0, 0, 0);
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
    border-radius: 0px;
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
    padding: 10px 10px 10px 20px;
    border-style: none none none solid;
    border-width: 3px;
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
    color: rgb(0, 0, 0);
    font-size: 16px;
    line-height: 1.8em;
    letter-spacing: 0em;
    text-align: left;
    text-indent: 0em;
    margin: 0px;
    padding: 8px 0px;
}
#nice * {
    cursor: pointer;
}

#nice hr {
    margin: 10px 0px;
    padding: 0px;
    border-style: solid none none;
    border-width: 1px 3px 3px;
    border-color: rgb(0, 0, 0) rgba(0, 0, 0, 0.4) rgba(0, 0, 0, 0.4);
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
    color: rgb(0, 0, 0);
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
    border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(239, 112, 96);
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
    border-width: 1px 1px 2px;
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
    font-size: 22px;
    color: rgb(255, 255, 255);
    background: none 0% 0% / auto no-repeat scroll padding-box border-box rgb(239, 112, 96);
    line-height: 1.5em;
    letter-spacing: 0em;
    align-items: unset;
    border-style: none;
    border-width: 1px;
    border-color: rgb(0, 0, 0);
    border-radius: 3px 3px 0px 0px;
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
    padding: 3px 10px 1px;
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
    border-color: rgb(0, 0, 0) transparent rgb(239, 235, 233) rgb(0, 0, 0);
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
    border-width: 1px 20px 36px 1px;
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
    color: rgb(0, 0, 0);
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
    color: rgb(1, 1, 1);
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
    color: rgb(1, 1, 1);
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
    padding: 10px 10px 10px 20px;
    border-style: none none none solid;
    border-width: 3px;
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
    background: none 0% 0% / auto no-repeat scroll padding-box border-box rgb(240, 240, 240);
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
  border-bottom: 1px solid rgb(239, 112, 96);
}

/* 加粗 */
#nice strong {
    color: rgb(0, 0, 0);
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
    background: none 0% 0% / auto no-repeat scroll padding-box border-box transparent;
    width: auto;
    height: auto;
    border-style: none;
    border-width: 3px;
    border-color: rgb(0, 0, 0) rgba(0, 0, 0, 0.4) rgba(0, 0, 0, 0.4);
    overflow-wrap: break-word;
    padding: 2px 4px;
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
    color: rgb(0, 0, 0);
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
    color: rgb(0, 0, 0);
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
    color: rgb(0, 0, 0);
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
