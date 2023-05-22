let cssText = `
#search-jumper {
    font-size: 16px;
}
#search-jumper.search-jumper-showall {
    overflow-y: hidden;
    pointer-events: all;
    overscroll-behavior: contain;
    -ms-scroll-chaining: contain;
    flex-direction: unset;
    max-width: unset;
    max-height: unset;
    text-align: center;
    top: 0;
    bottom: unset;
    height: 100%;
}
#search-jumper.search-jumper-showall>.search-jumper-searchBar {
    display: none;
}
#search-jumper.search-jumper-showall .search-jumper-showallInput {
    background-color: #212022;
    color: white;
    border: none;
    font-size: 20px;
    height: 40px;
    margin-bottom: 0;
    padding: 5px;
    margin: 0 10px;
    box-shadow: #333 0px 0px 2px;
    outline: none;
    box-sizing: border-box;
    cursor: text;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -ms-user-select: none;
    position: fixed;
    width: 50%;
    left: 25%;
    top: 1%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px #7a7a7a;
    pointer-events: all;
}


.search-jumper-historylist {
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: center;
    left: 0;
    top: 60px;
    background: white;
    border-bottom: 1px solid #ddd;
    pointer-events: all;
}
.search-jumper-historylist>a.search-jumper-btn {
}

.search-jumper-searchBarCon {
    all: unset;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2147483646;
    pointer-events: none;
    text-align: center;
    overflow: scroll;
    display: block;
    -ms-overflow-style: none;
    scrollbar-width: none;
    box-sizing: border-box;
    z-index: 2147483647;
    user-select: none;
}
.search-jumper-searchBar {
    z-index: 2147483647;
    overflow-wrap: break-word;
    background: #505050;
    border-radius: 21px!important;
    border: 1px solid #b3b3b3;
    display: inline-flex;
    pointer-events: all;
    margin-top: -25px;
    vertical-align: top;
    opacity: 0.3;
    transition:margin-top 1s ease, margin-left 1s, right 1s, opacity 1s, transform 1s;
    user-select: none;
    text-align: center;
    position: relative;
    box-sizing: border-box;
}
.hideAll>.search-jumper-searchBar {
    margin-top: -40px;
}
.search-jumper-searchBarCon:not(.search-jumper-showall)::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
}
.search-jumper-searchBarCon.search-jumper-scroll {
    pointer-events: all;
    overscroll-behavior: contain;
    -ms-scroll-chaining: contain;
}
.search-jumper-scroll.search-jumper-bottom {
    overflow-y: hidden;
}
.search-jumper-scroll>.search-jumper-searchBar {
    position: static !important;
}
.search-jumper-scroll.search-jumper-right>.search-jumper-searchBar {
    position: absolute !important;
    top: 0;
}
.search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar {
    margin-top: 0px;
}
.search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar:hover,
.search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar.initShow,
.resizePage.search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar,
.search-jumper-scroll.search-jumper-bottom.funcKeyCall>.search-jumper-searchBar,
#search-jumper.in-input.search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar {
    margin-top: 0px;
}


#search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:hover {
    height: auto!important;
    width: 240px!important;
}
#search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
}
.search-jumper-left,
.search-jumper-left .search-jumper-type,
.search-jumper-left>.search-jumper-searchBar,
.search-jumper-right,
.search-jumper-right .search-jumper-type,
.search-jumper-right>.search-jumper-searchBar {
    flex-direction: column;
    max-width: 42px;
    max-height: unset;
}
.search-jumper-left {
    height: 100%;
    text-align: initial;
}
.search-jumper-right {
    left: unset;
    right: 0;
    height: 100%;
}
.searchJumperExpand {
    opacity: 0.8;
}
.searchJumperExpand:hover {
    opacity: 1;
}
.searchJumperExpand>svg {
    transform: rotate(-90deg);
    border-radius: 20px;
    filter: drop-shadow(0px 0px 2px black);
    width: unset;
    height: unset;
    color: black;
}
.search-jumper-type:not(.search-jumper-hide)>span.search-jumper-word {
    filter: drop-shadow(0px 0px 2px black);
}
.search-jumper-left .searchJumperExpand>svg,
.search-jumper-right .searchJumperExpand>svg {
    transform: unset;
}
.search-jumper-bottom {
    top: unset;
    bottom: 0;
    height:  42px;
    max-height: 43px;
    overflow-y: hidden;
}
.search-jumper-left>.search-jumper-searchBar {
    margin-top: 0;
    margin-left: -20px;
}
.hideAll.search-jumper-left>.search-jumper-searchBar {
    margin-left: -40px;
}
.search-jumper-right>.search-jumper-searchBar {
    margin-top: 0;
    right: -20px;
    position: fixed;
}
.hideAll.search-jumper-right>.search-jumper-searchBar {
    right: -40px;
}
.search-jumper-left>.search-jumper-searchBar:hover,
.search-jumper-left>.search-jumper-searchBar.initShow,
.resizePage.search-jumper-left>.search-jumper-searchBar,
.search-jumper-left.funcKeyCall>.search-jumper-searchBar,
#search-jumper.in-input.search-jumper-left>.search-jumper-searchBar {
    margin-top: unset;
    margin-left: 0;
    opacity: 1;
}
.search-jumper-right>.search-jumper-searchBar:hover,
.search-jumper-right>.search-jumper-searchBar.initShow,
.resizePage.search-jumper-right>.search-jumper-searchBar,
.search-jumper-right.funcKeyCall>.search-jumper-searchBar,
#search-jumper.in-input.search-jumper-right>.search-jumper-searchBar {
    margin-top: unset;
    right: 0;
    opacity: 1;
}
.search-jumper-bottom>.search-jumper-searchBar {
    position: relative;
    margin-top: 0px;
}
.hideAll.search-jumper-bottom>.search-jumper-searchBar {
    opacity: 0;
}
.search-jumper-bottom>.search-jumper-searchBar:hover,
.search-jumper-bottom>.search-jumper-searchBar.initShow,
.resizePage.search-jumper-bottom>.search-jumper-searchBar,
.search-jumper-bottom.funcKeyCall>.search-jumper-searchBar,
#search-jumper.in-input.search-jumper-bottom>.search-jumper-searchBar {
    margin-top: 0px;
    opacity: 1;
}
.search-jumper-btn {
    position: relative;
    display: grid;
    padding: 1px;
    margin: 3px;
    cursor: pointer;
    box-sizing: content-box;
    
    width: 32px;
    height:32px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-decoration:none;
    min-width: 32px;
    min-height: 32px;
}
.search-jumper-btn>img {
    width: 32px;
    height: 32px;
}
.search-jumper-btn>b {
    line-height: 32px;
    letter-spacing: 0;
    color: white;
}
.search-jumper-btn.noIcon>b {
    color: #f6e9d2;
}
.search-jumper-btn.noIcon:hover>b {
    color: wheat;
}

.search-jumper-isInPage .search-jumper-btn>div,
.search-jumper-isTargetImg .search-jumper-btn>div,
.search-jumper-isTargetAudio .search-jumper-btn>div,
.search-jumper-isTargetVideo .search-jumper-btn>div,
.search-jumper-isTargetLink .search-jumper-btn>div,
.search-jumper-isTargetPage .search-jumper-btn>div {
    animation-name: changeOpacity;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    animation-delay: 0.1s;
    display: block;
    opacity: 0.1;
}
@keyframes changeOpacity {
    0%   {opacity: 0.1;}
    50%  {opacity: 0.6;}
    100% {opacity: 0.1;}
}
.searchJumper-loading {
    animation-name: changeScale;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
}
@keyframes changeScale {
    0% {
        -webkit-transform:rotate(0deg) scale(1);
        -moz-transform:rotate(0deg) scale(1);
        transform:rotate(0deg) scale(1);
    }
    50% {
        -webkit-transform:rotate(180deg) scale(1.5);
        -moz-transform:rotate(180deg) scale(1.5);
        transform:rotate(180deg) scale(1.5);
    }
    100% {
        -webkit-transform:rotate(360deg) scale(1);
        -moz-transform:rotate(360deg) scale(1);
        transform:rotate(360deg) scale(1);
    }
}

.search-jumper-type.search-jumper-needInPage,
.search-jumper-type.search-jumper-targetImg,
.search-jumper-type.search-jumper-targetAudio,
.search-jumper-type.search-jumper-targetVideo,
.search-jumper-type.search-jumper-targetLink,
.search-jumper-type.search-jumper-targetPage,
.search-jumper-isTargetImg>.search-jumper-type,
.search-jumper-isTargetAudio>.search-jumper-type,
.search-jumper-isTargetVideo>.search-jumper-type,
.search-jumper-isTargetLink>.search-jumper-type,
.search-jumper-searchBar:hover>.search-jumper-type.search-jumper-needInPage,
.search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetImg,
.search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetAudio,
.search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetVideo,
.search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetLink,
.search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetPage,
.search-jumper-searchBar.search-jumper-isTargetImg:hover>.search-jumper-type,
.search-jumper-searchBar.search-jumper-isTargetAudio:hover>.search-jumper-type,
.search-jumper-searchBar.search-jumper-isTargetVideo:hover>.search-jumper-type,
.search-jumper-searchBar.search-jumper-isTargetLink:hover>.search-jumper-type {
    display: none;
}
#search-jumper.in-input .search-jumper-type:not(.search-jumper-hide) {
    width: auto!important;
    height: auto!important;
}
#search-jumper.in-input .sitelistCon>div:not(.input-hide)>a {
    display: flex!important;
}
#search-jumper.in-input .input-hide {
    display: none!important;
}
#search-jumper.in-input .search-jumper-type:not(.input-hide) {
    display: inline-flex!important;
    flex-wrap: nowrap!important;
}
#search-jumper.in-input .search-jumper-btn:not(.input-hide) {
    display: grid!important;
}
#search-jumper>.search-jumper-searchBar>.search-jumper-logo {
    display: inline-flex;
    background: unset;
    padding: 0px;
}
#search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-logo {
    display: none;
}
.search-jumper-searchBar>.search-jumper-type.search-jumper-targetAll,
.search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetAll {
    display: inline-flex;
}
.search-jumper-isInPage>.search-jumper-type.search-jumper-needInPage,
.search-jumper-isTargetImg>.search-jumper-type.search-jumper-targetImg,
.search-jumper-isTargetAudio>.search-jumper-type.search-jumper-targetAudio,
.search-jumper-isTargetVideo>.search-jumper-type.search-jumper-targetVideo,
.search-jumper-isTargetLink>.search-jumper-type.search-jumper-targetLink,
.search-jumper-isTargetPage>.search-jumper-type,
.search-jumper-searchBar.search-jumper-isInPage:hover>.search-jumper-type.search-jumper-needInPage,
.search-jumper-searchBar.search-jumper-isTargetImg:hover>.search-jumper-type.search-jumper-targetImg,
.search-jumper-searchBar.search-jumper-isTargetAudio:hover>.search-jumper-type.search-jumper-targetAudio,
.search-jumper-searchBar.search-jumper-isTargetVideo:hover>.search-jumper-type.search-jumper-targetVideo,
.search-jumper-searchBar.search-jumper-isTargetLink:hover>.search-jumper-type.search-jumper-targetLink,
.search-jumper-searchBar.search-jumper-isTargetPage:hover>.search-jumper-type {
    display: inline-flex;
}
.search-jumper-type,
.search-jumper-logo {
    display: inline-flex;
    box-sizing: border-box;
    background: #d0d0d0;
    border-radius: 20px!important;
    overflow: hidden;
    padding: 0.2px;
    height: 40px;
    width: 40px;
    max-height: 40px;
    min-height: 40px;
    min-width:40px;
    
}
.search-jumper-right>.searchJumperNavBar {
    right: unset;
    left: 0;
}
.search-jumper-right>.searchJumperNavBar>#navMarks>div.navPointer {
    right: unset;
    left: 20px;
    transform: rotate(180deg);
}
.search-jumper-bottom>.search-jumper-input {
    bottom: unset;
    top: 5%;
}
.search-jumper-type.not-expand>a:nth-of-type(10)~a {
    display: none;
}
#search-jumper .sitelist {
    position: fixed;
    text-align: left;
    background: #00000000;
    max-height: 100vh;
    overflow: scroll;
    border: 0;
    pointer-events: none;
    opacity: 0;
    transition:opacity 0.25s ease;
    scrollbar-width: none;
    box-sizing: content-box;
}
#search-jumper .search-jumper-type:hover>.sitelist {
    pointer-events: all;
    opacity: 1;
}
#search-jumper .sitelist>.sitelistCon {
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px #7a7a7a;
    padding: 0 0 10px 0;
    background: white;
    opacity: 1;
    border: 0;
}
#search-jumper .sitelist>.sitelistCon:hover {
    opacity: 1;
}
#search-jumper .sitelist::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
}
#search-jumper .sitelist>.sitelistCon>div {
    padding: 0 10px;
}
#search-jumper .sitelist>.sitelistCon>div:hover {
    background: #f5f7fa;
}
#search-jumper .sitelist a {
    display: flex;
    align-items: center;
    text-decoration: none;
}
#search-jumper .sitelist a>img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    margin-top: unset;
    max-width: unset;
}
#search-jumper .sitelist a>p {
    display: inline-block;
    font-size: 15px;
    font-family: Arial,sans-serif;
    line-height: 25px;
    margin: 5px auto;
    color: #6b6e74;
    flex: 1;
    text-align: left;
    white-space: nowrap;
}
#search-jumper .sitelist>.sitelistCon>p {
    color: #565656;
    margin: 0;
    text-align: center;
    font-size: 16px;
    font-family: Arial, sans-serif;
    font-weight: bold;
    background: #f6f6f6;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    text-overflow: ellipsis;
    padding: 3px 10px;
    position: sticky;
    top: 0;
    pointer-events: none;
}
.search-jumper-searchBar.disable-pointer>.search-jumper-type {
    pointer-events: none;
}
.search-jumper-word {
    background: black;
    color: #ffffff!important;
    font-family: Arial, sans-serif;
    font-weight: bold;
    border-radius: 20px!important;
    font-size: 15px;
    line-height: 32px;
    width: 32px;
    height: 32px;
    min-width: 32px;
    min-height: 32px;
    letter-spacing: 0px;
}
a.search-jumper-word {
    background: #f7f7f7d9;
    color: #111111!important;
    filter: drop-shadow(1px 1px 3px #00000060);
}
a.search-jumper-word>span {
    background: #f7f7f7d9;
    color: #111111!important;
    border-radius: 20px;
}
.search-jumper-word {
    text-shadow: unset;
}
.search-jumper-word:hover {
    text-shadow: 0px 0px 5px #d0d0d0;
}
.search-jumper-type img {
    width: 32px;
    height: 32px;
    margin-top: unset;
}
.funcKeyCall>.search-jumper-tips {
    position: absolute;
}
.search-jumper-tips {
    z-index: 2147483647;
    pointer-events: none;
    position: fixed;
    font-size: xx-large;
    background: #f5f5f5e0;
    border-radius: 10px!important;
    padding: 5px;
    box-shadow: 0px 0px 10px 0px #000;
    font-weight: bold;
    transition: all 0.2s ease;
    color: black;
    white-space: nowrap;
    line-height: 35px;
}
.search-jumper-searchBar>.search-jumper-type.search-jumper-hide {
    background: unset;
    padding: 0px;
    
}
.search-jumper-searchBar:hover>.search-jumper-hide {
   
}
.funcKeyCall>.search-jumper-searchBar>.search-jumper-type.search-jumper-hide {
    display: none;
}
.funcKeyCall>.search-jumper-searchBar:hover>.search-jumper-hide {
    display: none;
}
span.search-jumper-word>img {
    width: 20px;
    height: 20px;
    margin: auto;
}
.search-jumper-searchBar .search-jumper-btn.search-jumper-word:hover {
    background: black;
}
.search-jumper-searchBar a.search-jumper-btn.search-jumper-word:hover {
    background: white;
}
.search-jumper-btn:hover {
    -webkit-transform:scale(1.2);
    -moz-transform:scale(1.2);
    transform:scale(1.2);
    color: white;
    text-decoration:none;
    filter: drop-shadow(1px 1px 3px #00000050);
}
.search-jumper-btn:active {
    -webkit-transform:scale(1.1);
    -moz-transform:scale(1.1);
    transform:scale(1.1);
    transition:unset;
    filter: drop-shadow(1px 1px 5px #000000a0);
}
.search-jumper-searchBar .search-jumper-btn.current {
    overflow: visible;
}
.search-jumper-searchBar .search-jumper-btn.current::before {
    content: '';
    position: absolute;
    right: -2px;
    top: -2px;
    border: 1px solid #00000099;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
    box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 80%);
   
}
.in-input .search-jumper-input {
    display: block;
    box-sizing: content-box;
}
.lock-input .search-jumper-lock-input {
    float: left;
    font-size: 20px;
    top: 14px;
    left: 25px;
    color: darkgrey;
    position: absolute;
    border-right: 2px solid #32373a;
    padding-right: 10px;
    display: block;
}
.search-jumper-input {
    width: 80%;
    min-width: 500px;
    bottom: 3%;
    left: 50%;
    margin: 0 0 0 -40%;
    position: fixed;
    font-family: sans-serif;
    background: #F1F1F1;
    text-align: left;
    box-shadow: 0px 2px 10px rgb(0 0 0 / 80%);
    border: 1px solid rgb(179 179 179 / 70%);
    border-radius: 28px;
    background-color: rgb(51 56 59 / 90%);
    padding: 10px;
    display: none;
    z-index: 2139999999;
    font-size: 20px;
    height: 36px;
    touch-action: none;
}
.inputGroup {
    cursor: grab;
    display: flex;
}
.inputGroup * {
    cursor: default;
}
.search-jumper-input input {
    background-color: #212022;
    color: white;
    border: none;
    font-size: 20px;
    height: 35px;
    margin-bottom: 0;
    padding: 5px;
    margin: 0 10px;
    border-radius: 3px;
    box-shadow: #333 0px 0px 2px;
    width: calc(100% - 20px);
    outline: none;
    box-sizing: border-box;
    cursor: text;
}
#searchJumperInput,
#searchJumperInputKeyWords {
    width: calc(50% - 11px);
    float: left;
    transition: 0.25s width ease;
}
#searchJumperInput {
    margin: 0 1px 0 10px;
}
#searchJumperInputKeyWords {
    margin: 0 10px 0 1px;
}
#filterSites>input:focus {
    width: calc(200% - 20px);
}
.search-jumper-input * {
    box-sizing: border-box;
}
.search-jumper-input input[type="radio"] {
    display: none;
}
.search-jumper-input input:checked + label {
    background: #3a444add;
    color: white;
    font-size: 18px;
}
.search-jumper-input input#filterSitesTab:checked ~ .line {
    left: 25px;
}
.search-jumper-input input#filterSitesTab:checked ~ .content-container #filterSites {
    opacity: 1;
    pointer-events: all;
}
.search-jumper-input input#searchInPageTab:checked ~ .line {
    left: 231px;
}
.search-jumper-input input#searchInPageTab:checked ~ .content-container #searchInPage {
    opacity: 1;
    pointer-events: all;
}
.search-jumper-input label {
    display: inline-block;
    font-size: 18px;
    height: 36px;
    line-height: 36px;
    width: 200px;
    text-align: center;
    background: #2a343acc;
    color: #959595;
    position: relative;
    transition: 0.25s background ease;
    cursor: pointer;
    position: relative;
    top: -46px;
    left: 15px;
    border-radius: 5px 5px 0 0;
    user-select: none;
    pointer-events: all;
    max-width: 40%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.search-jumper-input label::after {
    content: "";
    height: 1px;
    width: 100%;
    position: absolute;
    display: block;
    background: #ccc;
    bottom: 0;
    opacity: 0;
    left: 0;
    transition: 0.25s ease;
}
.search-jumper-input label:hover::after {
    opacity: 1;
}
.search-jumper-input .line {
    background: #1E88E5;
    width: 200px;
    height: 1px;
    top: -1px;
    left: 0;
    transition: 0.25s ease;
    position: absolute;
}
.inputGroup>.svgBtns {
    right: 25px;
    top: 15px;
    position: absolute;
    user-select: none;
    background: rgb(0 0 0 / 50%);
    white-space: nowrap;
    overflow: hidden;
}
.inputGroup>.svgBtns:hover {
    width: auto;
}
.inputGroup svg.checked {
    fill: #1E88E5;
}
@media screen and (max-width: 800px) {
    .search-jumper-input .line {
        display: none;
    }
    .search-jumper-input {
        min-width: 300px;
    }
    .inputGroup>.svgBtns {
        width: 25px;
    }
}
.search-jumper-input .content-container {
    background: #eee;
    position: static;
    font-size: 16px;
}
.search-jumper-input .content-container .inputGroup {
    position: absolute;
    padding: 10px;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    transition: 0.25s ease;
    color: #333;
}
.search-jumper-input svg,
.searchJumperNavBar svg {
    width: 25px;
    height: 25px;
    fill: white;
    cursor: pointer;
    opacity: 0.8;
    transition: 0.25s all ease;
    font-size: 0px;
}
.search-jumper-input .inputGroup:hover svg,
.searchJumperNavBar.show svg {
    pointer-events: all;
}
.search-jumper-input svg *,
.searchJumperNavBar svg * {
    cursor: pointer;
}
.search-jumper-input svg:hover,
.searchJumperNavBar svg:hover {
    -webkit-transform:scale(1.2);
    -moz-transform:scale(1.2);
    transform:scale(1.2);
    opacity: 1;
}
#search-jumper.selectedEle #filterSites>.svgBtns>svg {
    display: inline-block!important;
}
.search-jumper-input>.closeBtn {
    position: absolute;
    right: 0px;
    top: -39px;
    width: 35px;
    height: 35px;
    vertical-align: middle;
    fill: #454a4b;
    overflow: hidden;
    background: white;
    border-radius: 20px;
    pointer-events: all;
}
#searchInPage>.lockWords {
    max-width: 50%;
    position: absolute;
    bottom: 8px;
    left: 20px;
    color: white;
    font-size: 18px;
    display: flex;
    flex-wrap: wrap-reverse;
    max-height: 38px;
    overflow: hidden;
}
#searchInPage>.lockWords:hover {
    overflow-y: auto;
    height: auto;
    max-height: 90vh;
}
#searchInPage>.lockWords>span {
    position: relative;
    padding: 5px;
    cursor: alias;
    user-select: none;
    background: yellow;
    color: black;
    border: 1px solid;
    margin: 2px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    max-width: 100%;
}
#searchInPage>.lockWords .removeWord {
    position: absolute;
    right: 0;
    top: 0;
    display: none;
    opacity: 0.3;
}
#searchInPage>.lockWords .removeWord:hover {
    opacity: 1;
}
#searchInPage>.lockWords>span:hover .removeWord {
    display: block;
    pointer-events: all;
}
#searchInPage>.lockWords .removeWord>svg {
    width: 15px;
    height: 15px;
    fill: black;
    color: black;
    border: 1px solid white;
    border-radius: 10px;
    background: white;
}
#searchInPage>.lockWords>span>em {
    font-size: 12px;
    margin-right: 5px;
    color: unset;
}
.searchJumperNavBar {
    all: unset;
    top: 0px;
    bottom: 0px;
    right: 0px;
    position: fixed;
    width: 20px;
    z-index: 2147483647;
    background: #00000066;
    text-align: center;
    pointer-events: none;
    font-size: 0px;
    opacity: 0;
}
.searchJumperNavBar.show {
    pointer-events: all;
    opacity: 1;
}
.searchJumperNavBar>.closeNavBtn {
    width: 16px;
    height: 16px;
    fill: white;
    cursor: pointer;
}
#navMarks>div.navPointer {
    pointer-events: none;
    position: absolute;
    right: 20px;
    text-shadow: #fff 1px 0 0, #fff 0 1px 0, #fff -1px 0 0, #fff 0 -1px 0;
    font-size: 30px;
    line-height: 0px;
    border: 0;
    margin-top: 2px;
    opacity: 0.8;
    color: black;
}
#navMarks {
    height: 100%;
    width: 100%;
    position: absolute;
}
#navMarks>span {
    height: 0.5vh;
    width: 100%;
    position: absolute;
    border: 1px solid #beb7b7;
    min-height: 3px;
    box-sizing: border-box;
    left: 0;
    border-radius: 0px!important;
}
mark.searchJumper {
    visibility: visible;
    font-style: normal;
    box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 3px;
    border-radius: 3px;
    text-decoration: none;
    padding: 1px 0;
}
mark.searchJumper[data-current=true] {
    border-bottom: 0.2em solid;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    animation: 0.5s linear 0s 5 normal none running currentMark;
}
.searchJumperPosBar {
    background: rgba(29, 93, 163, 0.3);
    position: absolute;
    min-height: 10px;
    min-width: 10px;
    animation-duration: 3s;
    z-index: 2147483647;
    margin: 0;
    opacity: 0;
    pointer-events: none;
    transition: 0.25s all ease;
}
.searchJumperPosBar.searchJumperPosW {
    width: 100%;
    left: 0;
}
.searchJumperPosBar.searchJumperPosH {
    height: 100%;
    top: 0;
    position: fixed;
}
@keyframes fadeit {
    from {opacity: 1;}
    to {opacity: 0;}
}
@keyframes currentMark {
    from {border-color: unset}
    to {border-color: transparent;}
}
#rightSizeChange {
    top: 0;
    opacity: 0;
    height: 55px;
    width: 5px;
    position: absolute;
    cursor: e-resize;
    right: 0;
}
.searchJumper-hide {
    display: none!important;
}
@media (prefers-color-scheme: dark) {
    /* 站点列表 */
    #search-jumper .sitelist > .sitelistCon > p {
        background-color: #252B32 !important;
    }

    #search-jumper .sitelist > .sitelistCon {
        background-color: #1C2127 !important;
    }

    #search-jumper .sitelist > .sitelistCon > div:hover {
        background-color: #283C57 !important;
    }

    #search-jumper .sitelist > .sitelistCon > p,
    #search-jumper .sitelist a > p {
        color: #DADADA !important;
    }

    /* 历史列表 */
    .search-jumper-historylist {
        background-color: #181C20 !important;
    }

    .search-jumper-showall a.search-jumper-word,
    .search-jumper-showall a.search-jumper-word > span {
        background-color: #292A2D !important;
    }

    .search-jumper-tips {
        background-color: #3F4042 !important;
    }

    .search-jumper-showall a.search-jumper-word > span,
    .search-jumper-tips {
        color: #DADADA !important;
    }

    .search-jumper-showall .search-jumper-word:hover {
        text-shadow: 0px 0px 5px #2374FF !important;
    }

    /* 类别 */
    .search-jumper-showall .search-jumper-type,
    .search-jumper-showall .search-jumper-logo {
        background-color: #181C20 !important;
    }
}
`;

export {cssText}