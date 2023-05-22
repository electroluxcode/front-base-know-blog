


import { cssText } from './css.js'
localStorage.setItem('cssText', cssText)
import { searchData } from './config.js'
localStorage.setItem('searchData', JSON.stringify(searchData))
function run() {

    let config = {};
    var i18n = (name, param) => {
        return config[name] ? config[name].replace("#t#", param) : name;
    };
    var addStyle;
    addStyle = cssStr => {
        let styleEle = document.createElement("style");
        styleEle.innerHTML = cssStr;
        document.head.appendChild(styleEle);
        return styleEle;
    };
    var storage = {

        setItem: function (key, value) {
        },
        getItem: function (key, cb) {
            var value;

            cb(value);
        }
    };
    var escapeHTMLPolicy;

    function createHTML(html = "") {
        return escapeHTMLPolicy ? escapeHTMLPolicy.createHTML(html) : html;
    }

    var logoBtn, searchBar, searchTypes = [], currentSite = false, inPagePostParams, cacheIcon = {}, cachePool = [];
    // 重要，可以拖拽的事件
    var logoBtnSvg = `<svg t="1550061994320" class="icon" style="" viewBox="0 0 1024 1024" version="1.1"
    xmlns="http://www.w3.org/2000/svg" p-id="1292" xmlns:xlink="http://www.w3.org/1999/xlink"
    width="100" height="100">
        <defs>
            <style type="text/css">
            </style>
        </defs>
        <path d="M836.077037 115.579259a513.327407 513.327407 0 0 0-94.814815-61.345185 512 512 0 0 1-632.414815 773.404445 512 512 0 1 0 727.22963-712.05926z"
        fill="#BDDDFA" p-id="1293"></path>
        <path d="M512 75.851852A436.148148 436.148148 0 1 1 75.851852 512 436.622222 436.622222 0 0 1 512 75.851852m0-75.851852a512 512 0 1 0 512 512A512 512 0 0 0 512 0z"
        fill="#0788FF" p-id="1294"></path>
        <path d="M273.825185 420.598519l-20.48-19.816297c181.854815-187.828148 425.528889-205.368889 724.290371-51.579259l-12.98963 25.315556c-286.340741-147.437037-518.731852-131.792593-690.820741 46.08z"
        fill="#0788FF" p-id="1295"></path>
        <path d="M264.722963 426.192593c-106.761481-54.139259-134.637037-144.782222-81.540741-269.368889l26.168889 11.188148c-46.838519 109.89037-24.557037 186.026667 68.171852 232.865185z"
        fill="#0788FF" p-id="1296"></path>
        <path d="M228.124444 890.69037l-18.962963-21.428148c116.717037-101.451852 133.499259-249.552593 51.2-452.93037l26.737778-10.24c86.186667 212.48 66.37037 375.751111-58.974815 484.598518zM567.277037 992.616296l-23.04-16.687407c169.623704-234.097778 179.579259-470.471111 29.487407-702.577778l23.893334-15.454815c157.108148 243.01037 146.868148 490.097778-30.340741 734.72z"
        fill="#0788FF" p-id="1297"></path>
        <path d="M318.388148 672.995556C111.976296 630.044444 22.281481 526.601481 51.863704 365.605926l28.444444 5.12c-26.642963 144.971852 52.906667 234.477037 243.863704 274.394074zM879.597037 849.825185l-27.306667-8.059259c67.602963-228.219259 53.94963-407.703704-40.675555-533.238519l22.755555-17.066666c100.408889 133.12 115.579259 321.042963 45.226667 558.364444zM192.284444 318.767407l-24.841481-13.179259C250.69037 146.868148 413.961481 66.37037 653.463704 66.37037v28.444445c-228.124444 0-383.241481 75.377778-461.17926 223.952592zM273.066667 834.74963c-69.214815-11.946667-125.914074-37.925926-168.675556-76.894815l18.962963-21.048889c38.684444 35.271111 90.642963 58.785185 154.358519 69.878518z"
        fill="#0788FF" p-id="1298"></path>
    </svg>`;
    var targetElement, cssText, mainStyleEle;
    class SearchBar {
        constructor() {
            console.log(searchData, "dsssssssssssssssss")
            this.scale = searchData.prefConfig.customSize / 100;
            cssText = localStorage.getItem('cssText')

            if (searchData.prefConfig.cssText) cssText += searchData.prefConfig.cssText;
            mainStyleEle = addStyle(cssText);

            let logoCon = document.createElement("span");
            logoCon.className = "search-jumper-hide search-jumper-logo";
            logoBtn = document.createElement("span");
            logoBtn.innerHTML = createHTML(logoBtnSvg);
            logoBtn.className = "search-jumper-btn";
           

            logoCon.appendChild(logoBtn);

            let bar = document.createElement("span");
            bar.className = "search-jumper-searchBar";
            bar.appendChild(logoCon);

            let searchBarCon = document.createElement("div");
            searchBarCon.id = "search-jumper";
            searchBarCon.className = "search-jumper-searchBarCon";
            searchBarCon.appendChild(bar);
            searchBarCon.setAttribute("translate", "no");

            let showallBg = document.createElement("div");
            showallBg.className = "search-jumper-showallBg";
            searchBarCon.appendChild(showallBg);

            let sitelistBox = document.createElement("div");
            sitelistBox.className = "sitelistBox";

            this.sitelistBox = sitelistBox;

            let showallInput = document.createElement("input");
            showallInput.className = "search-jumper-showallInput";

            this.showallInput = showallInput;

            let logoConfigBtn = document.createElement("span");
            logoConfigBtn.innerHTML = createHTML(logoBtnSvg);
            logoConfigBtn.className = "search-jumper-btn";

            let enterHandler = e => {
                bar.classList.remove("initShow");
            };
            bar.addEventListener('mouseenter', enterHandler, false);
            if (searchData.prefConfig.initShow) {
                bar.classList.add("initShow");
            } else {
                let touched = false;
                let touchBodyHandler = e => {
                    touched = false;
                    document.body.removeEventListener('touchstart', touchBodyHandler);
                };
                let touchHandler = e => {
                    if (touched) return;
                    touched = true;
                    bar.classList.add('disable-pointer');
                    setTimeout(() => {
                        bar.classList.remove('disable-pointer');
                    }, 250);
                    document.body.addEventListener("touchstart", touchBodyHandler);
                };
                bar.addEventListener('touchstart', touchHandler, true);
            }

            this.bar = bar;

            let tips = document.createElement("span");
            tips.className = "search-jumper-tips";
            tips.style.opacity = 0;
            searchBarCon.appendChild(tips);
            this.tips = tips;

            this.appendBar();

            let searchJumperNavBar = document.createElement("div");
            searchJumperNavBar.className = "searchJumperNavBar";
            searchJumperNavBar.style.display = "none";
            searchJumperNavBar.innerHTML = createHTML(`
                  <svg class="closeNavBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Close navigation</title><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>
                  <div id="navMarks"></div>
                `);
            searchBarCon.appendChild(searchJumperNavBar);

            let searchJumperExpand = document.createElement("span");
            searchJumperExpand.title = i18n('expand');
            searchJumperExpand.className = "searchJumperExpand search-jumper-btn input-hide";

            this.searchJumperExpand = searchJumperExpand;

            this.navMarks = searchJumperNavBar.querySelector("#navMarks");
            this.closeNavBtn = searchJumperNavBar.querySelector(".closeNavBtn");
            this.searchJumperNavBar = searchJumperNavBar;

            let searchInputDiv = document.createElement("div");
            searchInputDiv.className = "search-jumper-input";
            searchInputDiv.innerHTML = createHTML(`
                <div class="content-container">
                  <div class="inputGroup" id="filterSites">
                    <input spellcheck="false" id="searchJumperInput" placeholder="${i18n("inputPlaceholder")}" list="filterGlob">
                    <input spellcheck="false" id="searchJumperInputKeyWords" placeholder="${i18n("inputKeywords")}">
                    <datalist id="filterGlob">
                    </datalist>
                    <span class="search-jumper-lock-input"></span>
                    <span class="svgBtns">
                      <svg id="copyEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("copyEleBtn")}</title><path d="M706.5 188.4H190.2c-29.8 0-54 24.2-54 54v662.9c0 29.8 24.2 54 54 54h516.3c29.8 0 54-24.2 54-54V242.4c0-29.8-24.2-54-54-54z m-18 698.9H208.2V260.4h480.3v626.9zM313.7 512.2h275.2c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM313.7 715.2h201.6c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM837.2 64.7H302.9c-19.9 0-36 16.1-36 36s16.1 36 36 36h516.3v662.9c0 19.9 16.1 36 36 36s36-16.1 36-36V118.7c0-29.8-24.2-54-54-54z"></path></svg>
                      <svg id="maxEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("maxEleBtn")}</title><path d="M192 832h160a32 32 0 0 1 0 64H160a32 32 0 0 1-32-32V672a32 32 0 0 1 64 0zM182.72 886.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 0 1 45.44 45.44zM832 832V672a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H672a32 32 0 0 1 0-64zM886.72 841.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM192 192v160a32 32 0 0 1-64 0V160a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM137.28 182.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM832 192H672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0zM841.28 137.28a32 32 0 1 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                      <svg id="minEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("minEleBtn")}</title><path d="M672 352h160a32 32 0 0 1 0 64H640a32 32 0 0 1-32-32V192a32 32 0 0 1 64 0zM662.72 406.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 1 1 45.44 45.44zM352 352V192a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H192a32 32 0 0 1 0-64zM406.72 361.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM672 672v160a32 32 0 0 1-64 0V640a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM617.28 662.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM192 672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V672zM361.28 617.28a32 32 0 0 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                      <svg id="pickerBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("pickerBtn")}</title><path d="M874.048 533.333333C863.424 716.629333 716.629333 863.424 533.333333 874.048V917.333333a21.333333 21.333333 0 0 1-42.666666 0v-43.285333C307.370667 863.424 160.576 716.629333 149.952 533.333333H106.666667a21.333333 21.333333 0 0 1 0-42.666666h43.285333C160.576 307.370667 307.370667 160.576 490.666667 149.952V106.666667a21.333333 21.333333 0 0 1 42.666666 0v43.285333c183.296 10.624 330.090667 157.418667 340.714667 340.714667h42.816a21.333333 21.333333 0 1 1 0 42.666666H874.026667z m-42.752 0h-127.786667a21.333333 21.333333 0 0 1 0-42.666666h127.786667C820.778667 330.922667 693.056 203.221333 533.333333 192.704V320a21.333333 21.333333 0 0 1-42.666666 0V192.704C330.922667 203.221333 203.221333 330.944 192.704 490.666667H320a21.333333 21.333333 0 0 1 0 42.666666H192.704c10.517333 159.744 138.24 287.445333 297.962667 297.962667V704a21.333333 21.333333 0 0 1 42.666666 0v127.296c159.744-10.517333 287.445333-138.24 297.962667-297.962667zM512 554.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z"></path></svg>
                    </span>
                  </div>
                  <div class="inputGroup" id="searchInPage">
                    <span class="lockWords"></span>
                    <input spellcheck="false" id="searchJumperInPageInput" title="${i18n("inPageTips")}" placeholder="${i18n("inPagePlaceholder")}">
                    <span class="svgBtns">
                      <svg id="editBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("editBtn")}</title><path d="M928 365.664a32 32 0 0 0-32 32V864a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h429.6a32 32 0 0 0 0-64H160a96 96 0 0 0-96 96v704a96 96 0 0 0 96 96h704a96 96 0 0 0 96-96V397.664a32 32 0 0 0-32-32z"></path><path d="M231.616 696.416a38.4 38.4 0 0 0 44.256 53.792l148-38.368L950.496 185.248 814.72 49.472 290.432 573.76l-58.816 122.656z m111.808-85.12L814.72 140l45.248 45.248-468.992 468.992-77.824 20.16 30.272-63.104z"></path></svg>
                      <svg id="addWord" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("addWord")}</title><path d="M821.364 962h-618.75C123.864 962 62 900.114 62 821.364v-618.75c0-78.75 61.864-140.635 140.614-140.635h618.75c78.75 0 140.636 61.885 140.636 140.635v618.75C962 900.114 900.114 962 821.364 962z m79.265-756.814c0-46.586-35.25-81.815-81.815-81.815H205.186c-46.843-0.214-84.557 34.758-83.165 82.393-0.128 14.4 1.35 613.05 1.35 613.05 0 46.565 35.25 81.815 81.815 81.815h613.628c46.565 0 81.815-35.25 81.815-81.815V205.186z m-173.55 347.657H552.843v174.236c0 16.95-13.736 30.685-30.686 30.685h-0.236a30.686 30.686 0 0 1-30.685-30.685V552.843H296.92a30.686 30.686 0 0 1-30.685-30.686v-0.236c0-16.95 13.735-30.685 30.685-30.685h194.315V296.92c0-16.95 13.735-30.685 30.685-30.685h0.236c16.95 0 30.686 13.735 30.686 30.685v194.315h174.236c16.95 0 30.685 13.735 30.685 30.685v0.236c0 16.95-13.735 30.686-30.685 30.686z"></path></svg>
                      <svg id="emptyBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("emptyBtn")}</title><path d="m159.45829,231.40004l-48.83334,0a36.625,34.1375 0 0 1 0,-68.275l805.75004,0a36.625,34.1375 0 0 1 0,68.275l-683.6667,0l0,603.09581a61.04167,56.89583 0 0 0 61.04167,56.89584l439.50002,0a61.04167,56.89583 0 0 0 61.04167,-56.89584l0,-500.68332a36.625,34.1375 0 0 1 73.25,0l0,500.68332c0,69.12844 -60.12604,125.17084 -134.29167,125.17084l-439.50002,0c-74.16563,0 -134.29167,-56.0424 -134.29167,-125.17084l0,-603.09581zm256.37501,-113.79167a36.625,34.1375 0 0 1 0,-68.275l195.33334,0a36.625,34.1375 0 0 1 0,68.275l-195.33334,0zm-36.625,307.23749a36.625,34.1375 0 0 1 73.25,0l0,273.09999a36.625,34.1375 0 0 1 -73.25,0l0,-273.09999zm195.33334,0a36.625,34.1375 0 0 1 73.25,0l0,273.09999a36.625,34.1375 0 0 1 -73.25,0l0,-273.09999z"/></svg>
                      <svg id="copyInPageBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("copyInPageBtn")}</title><path d="M706.5 188.4H190.2c-29.8 0-54 24.2-54 54v662.9c0 29.8 24.2 54 54 54h516.3c29.8 0 54-24.2 54-54V242.4c0-29.8-24.2-54-54-54z m-18 698.9H208.2V260.4h480.3v626.9zM313.7 512.2h275.2c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM313.7 715.2h201.6c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM837.2 64.7H302.9c-19.9 0-36 16.1-36 36s16.1 36 36 36h516.3v662.9c0 19.9 16.1 36 36 36s36-16.1 36-36V118.7c0-29.8-24.2-54-54-54z"></path></svg>
                      <svg id="recoverBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("recoverBtn")}</title><path d="M502.26 289.06c-0.02 16.95 13.26 30.94 30.18 31.8 123.47 8.79 236.97 70.94 310.89 170.21 73.92 99.28 100.91 225.84 73.93 346.65-41.65-181.74-195.38-316.12-381.05-333.08-8.89-0.6-17.63 2.55-24.09 8.7a31.798 31.798 0 0 0-9.86 23.64v85.15a32.343 32.343 0 0 1-50.67 26.41L114.21 413.02a32.341 32.341 0 0 1-14.46-26.95c0-10.84 5.43-20.96 14.46-26.95L451.6 124.68a32.358 32.358 0 0 1 33.28-2.03 32.355 32.355 0 0 1 17.39 28.44v137.97h-0.01z"></path></svg>
                      <svg id="saveRuleBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("saveRuleBtn")}</title><path d="M579.7 291.4c18.8 0 34.1-15.3 34.1-34.1v-34.1c0-18.8-15.4-34.1-34.1-34.1-18.8 0-34.1 15.3-34.1 34.1v34.1c0 18.7 15.4 34.1 34.1 34.1zM944.7 216.3L808.2 79.9c-6.8-6.8-15.3-10.2-23.9-10.2H170.4c-56.3 0-102.3 46-102.3 102.3v682.1c0 56.3 46 102.3 102.3 102.3H852.5c56.3 0 102.3-46 102.3-102.3V240.2c0.1-8.5-3.3-17-10.1-23.9zM358 137.9h307v182.5c0 11.9-10.2 22.2-22.2 22.2H380.2c-11.9 0-22.2-10.2-22.2-22.2V137.9z m358.1 750.3H306.9V652.9c0-20.5 17.1-37.5 37.5-37.5h334.2c20.5 0 37.5 17 37.5 37.5v235.3z m170.6-34.1c0 18.8-15.3 34.1-34.1 34.1h-66.5V652.9c0-58-47.7-105.7-105.7-105.7h-336c-58 0-105.7 47.7-105.7 105.7v235.3h-68.2c-18.8 0-34.1-15.3-34.1-34.1V172c0-18.8 15.3-34.1 34.1-34.1h119.4v182.5c0 49.5 40.9 90.4 90.4 90.4h262.6c49.5 0 90.4-40.9 90.4-90.4V137.9h37.5l116 116v600.2z"></path></svg>
                      <svg id="pinBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("pinBtn")}</title><path d="m674.8822,92.83803a81.61801,81.04246 0 0 1 25.30158,17.09996l213.75757,212.46631a81.61801,81.04246 0 0 1 -24.70304,131.36982l-75.74151,33.30845l-142.09696,141.257l-11.26329,155.3854a81.61801,81.04246 0 0 1 -139.13151,51.46196l-137.98885,-137.15085l-235.14149,234.56388l-57.83996,-57.18896l235.27751,-234.69896l-142.7499,-141.85131a81.61801,81.04246 0 0 1 51.6642,-138.09635l160.95072,-11.94025l139.5668,-138.74469l32.78324,-75.09935a81.61801,81.04246 0 0 1 107.35489,-42.14208zm-32.45675,74.36997l-38.95901,89.22775l-171.94193,170.99958l-191.25821,14.1284l338.46989,336.3262l13.43977,-185.47917l174.33607,-173.32279l89.69819,-39.44067l-213.78477,-212.43929z"></path></svg>
                      <svg id="locBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${i18n("locBtn")}</title><path d="M357.6 832l-255.2 56c-20 4.8-39.2-10.4-39.2-31.2V569.6c0-15.2 10.4-28 24.8-31.2L243.2 504l53.6 53.6L139.2 592c-7.2 1.6-12.8 8-12.8 16v188c0 10.4 9.6 17.6 19.2 16l192.8-42.4 12.8-3.2 12.8 2.4 306.4 60.8 210.4-47.2c7.2-1.6 12.8-8 12.8-16V580c0-10.4-9.6-17.6-19.2-16L688 606.4l-12 2.4L760 524.8l160.8-36c20-4.8 39.2 10.4 39.2 31.2v286.4c0 15.2-10.4 28-24.8 31.2L672.8 896M512 128c-115.2 0-206.4 101.6-190.4 220 5.6 41.6 26.4 80 56 109.6l0.8 0.8L512 591.2l133.6-132.8 0.8-0.8c29.6-29.6 49.6-68 56-109.6C719.2 229.6 627.2 128 512 128m0-64c141.6 0 256 114.4 256 256 0 70.4-28 133.6-74.4 180L512 681.6 330.4 500C284.8 453.6 256 390.4 256 320 256 178.4 371.2 64 512 64z m64.8 193.6c0-35.2-28.8-64-64-64s-64 28.8-64 64 28.8 64 64 64 64-28 64-64z"></path></svg>
                    </span>
                  </div>
                </div>
                <div id="rightSizeChange"></div>
                `);
            searchBarCon.appendChild(searchInputDiv);

        }



        //重要添加bar的主要方法
        appendBar() {
            if (!this.bar.parentNode.parentNode) {
                document.documentElement.appendChild(this.bar.parentNode);
                ;
            }
        }
        setNav(enable, noSave) {
            if (!noSave) {
                storage.setItem("navEnable", enable || "");
            }
            if (enable) {
                this.locBtn.classList.add("checked");
                this.searchJumperNavBar.style.display = "";
            } else {
                this.locBtn.classList.remove("checked");
                this.searchJumperNavBar.style.display = "none";
                if (this.navPointer.parentNode) this.navPointer.parentNode.removeChild(this.navPointer);
            }
        }

        async initRun() {
            this.customInput = false;
            this.fontPool = [];
            this.allSiteBtns = [];

            this.bar.style.visibility = "hidden";
            let sitesNum = 0;
            let bookmarkTypes = [];
            this.checkSelHandler = e => {
                if (!e.altKey) return;
                if (this.searchInPageTab.checked && window.getSelection().toString()) {
                    this.showSearchInput();
                }
            };
            //重要：侧边栏定位
            for (let siteConfig of searchData.sitesConfig) {
                let isBookmark = siteConfig.bookmark || siteConfig.sites.length > 100 || (/^BM/.test(siteConfig.type) && siteConfig.icon === "bookmark");
                if (isBookmark) {
                    bookmarkTypes.push(siteConfig);
                    continue;
                }
                await this.createType(siteConfig);
                sitesNum += siteConfig.sites.length;
                if (sitesNum > 500) {
                    await sleep(1);
                    sitesNum = 0;
                }
            }
        }


        async createList(sites, type, batchSiteNames) {
            let self = this;
            let list = document.createElement("div");
            list.className = "sitelist";
            let con = document.createElement("div");
            con.className = "sitelistCon";
            list.appendChild(con);
            let title = document.createElement("p");
            title.innerText = type;
            title.title = i18n('batchOpen');

            list.dataset.type = type;
            con.appendChild(title);
            function createItem(siteEle, index) {
                let li = document.createElement("div");
                li.id = "list" + index;
                let icon = siteEle.querySelector("img");
                let a = document.createElement("a");
                a.setAttribute("ref", "noopener noreferrer");
                a.setAttribute("class", "a_turn");

                li.appendChild(a);

                con.appendChild(li);
                // 重要：移入后的图标显示
                if (icon) {
                    let iconSrc = icon.src || icon.dataset.src;
                    if (iconSrc) {
                        let img = document.createElement("img");
                        a.appendChild(img);
                        if (!/^data:/.test(iconSrc)) {
                            img.onload = e => {
                                img.style.width = "";
                                img.style.height = "";
                                img.style.display = "";
                            };
                            img.dataset.src = iconSrc;
                            img.style.width = "1px";
                            img.style.height = "1px";
                            img.style.display = "none";
                        } else {
                            img.src = iconSrc;
                        }
                    }
                }
                let p = document.createElement("p");
                p.innerText = siteEle.dataset.name;
                li.title = siteEle.title;
                li.dataset.name = siteEle.dataset.name;
                a.appendChild(p);
            }
            try {
                for (let [index, siteEle] of sites.entries()) {
                    createItem(siteEle, index)
                    if (index % 50 === 49) await sleep(1);
                }
            } catch (e) {
                for (let index = 0; index < sites.length; index++) {
                    createItem(sites[index], index);
                }
            }
            return list;
        }

        listPos(ele, list) {
            if (!list.dataset.inited) {
                list.dataset.inited = true;
                [].forEach.call(list.querySelectorAll("div>a>img"), img => {
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.dataset.src = "";
                    }
                });
            }
            list.style = "";
            this.preList = list;
            let ew = ele.clientWidth;
            let eh = ele.clientHeight;
            let clientX = ele.offsetLeft + ew / 2 - this.bar.parentNode.scrollLeft;
            let clientY = ele.offsetTop + eh / 2 - this.bar.parentNode.scrollTop;
            let current = ele.offsetParent;

            while (current !== null) {
                clientX += current.offsetLeft;
                clientY += current.offsetTop;
                current = current.offsetParent;
            }
            let viewWidth = window.innerWidth || document.documentElement.clientWidth;
            let viewHeight = window.innerHeight || document.documentElement.clientHeight;
            // 重要：hover时候的偏移
            if (this.bar.clientWidth > this.bar.clientHeight) {
                //横
                if (clientY - eh / 2 < 100) {
                    list.style.top = this.bar.clientHeight + "px";
                } else {
                    list.style.bottom = this.bar.clientHeight + "px";
                }
                clientX -= list.scrollWidth / 2;
                if (clientX > viewWidth - list.scrollWidth - 10) clientX = viewWidth - list.scrollWidth - 10;
                if (clientX < 0) clientX = 0;
                list.style.left = clientX + "px";
            } else {
                //竖
                if (clientX - ew / 2 < 100) {
                    list.style.left = this.bar.clientWidth + "px";
                } else {
                    list.style.right = this.bar.clientWidth + "px";
                }
                clientY -= list.scrollHeight / 2;
                if (clientY > viewHeight - list.scrollHeight) clientY = viewHeight - list.scrollHeight;
                if (clientY < 0) clientY = 0;
                list.style.top = clientY + "px";
            }
        }



        tipsPos(ele, type) {
            this.tips.innerText = type;
            this.tips.style.opacity = 1;
            this.clingPos(ele, this.tips);
        }

        async createType(data) {
            let self = this;
            let type = data.type;
            let icon = data.icon;
            let sites = data.sites;
            let match = false;
            let openInNewTab = typeof data.openInNewTab === 'undefined' ? searchData.prefConfig.openInNewTab : data.openInNewTab;
            let siteEles = [];
            let ele = document.createElement("span");
            ele.className = "search-jumper-type search-jumper-hide";
            if (!searchData.prefConfig.expandType) ele.classList.add("not-expand");
            if (data.match === '0') {
                ele.style.display = 'none';
                ele.classList.add("notmatch");
            } else if (data.match) {
                if (new RegExp(data.match).test(location.href) == false) {
                    ele.style.display = 'none';
                    ele.classList.add("notmatch");
                } else {
                    match = true;
                }
            }
            if (typeof data.description !== 'undefined') {
                ele.dataset.title = type + " - " + data.description;
            } else {
                ele.dataset.title = type;
            }
            ele.dataset.type = type;
            let typeBtn = document.createElement("span");
            let img = document.createElement("img");
            let iEle = document.createElement("b");
            if (type.length >= 3) {
                iEle.innerText = type.substr(0, 3).trim();
                if (!/^\w+$/.test(iEle.innerText)) iEle.innerText = iEle.innerText.substr(0, 2);
            } else iEle.innerText = type;
            iEle.style.fontSize = '10px';
            //iEle.style.color = 'wheat';
            typeBtn.appendChild(iEle);
            img.style.display = "none";
            img.onload = e => {
                img.style.display = "";
                iEle.innerText = '';
                iEle.style.fontSize = '';
                iEle.style.color = '';
            };
            ele.appendChild(typeBtn);
            typeBtn.classList.add("search-jumper-word");
            typeBtn.classList.add("search-jumper-btn");
            typeBtn.classList.add("noIcon");
            let isBookmark = /^BM/.test(type) && data.icon === "bookmark";//書簽就不緩存了
            if (icon) {
                typeBtn.classList.remove("noIcon");
                if (/^[a-z\- ]+$/.test(icon)) {
                    let cache = searchData.prefConfig.cacheSwitch && cacheIcon[icon.trim().replace(/ /g, '_')];
                    if (cache === 'fail') {
                    } else if (cache) {
                        img.src = cache;
                        img.style.width = '100%';
                        img.style.height = '100%';
                        typeBtn.appendChild(img);
                    } else {
                        iEle.className = icon.indexOf("fa") === 0 ? icon : "fa fa-" + icon;
                        this.fontPool.push(iEle);
                    }
                } else {
                    let isBase64 = /^data:/.test(icon);
                    if (isBase64) {
                        img.src = icon;
                    } else {
                        let cache = searchData.prefConfig.cacheSwitch && cacheIcon[icon];
                        if (cache === 'fail') {
                        } else if (cache) {
                            img.src = cache;
                        } else {
                            img.src = icon;
                            if (!cacheIcon[icon] && !isBookmark) cachePool.push(img);
                        }
                    }
                    typeBtn.appendChild(img);
                }
            }
            let batchSiteNames = [];

            // 重要：添加移入目标的事件
            let showTimer, siteList;
            typeBtn.addEventListener('mouseenter', e => {
                if (!self.funcKeyCall && searchData.prefConfig.showSiteLists && (searchData.prefConfig.alwaysShowSiteLists || ele.classList.contains("search-jumper-hide"))) {
                    ele.appendChild(siteList);
                    self.listPos(ele.children[0], siteList);
                } else {
                    self.tipsPos(typeBtn, ele.dataset.title);
                }
                if (searchData.prefConfig.overOpen) {
                    if (!ele.classList.contains("search-jumper-hide")) return;
                    showTimer = setTimeout(() => {
                        typeAction(e);
                    }, 500);
                }
            }, false);

            let isCurrent = false;
            let tooLoog = sites && sites.length > 200;
            async function createItem(site, i) {
                let siteEle = await self.createSiteBtn((tooLoog || searchData.prefConfig.noIcons ? 0 : site.icon), site, openInNewTab, isBookmark);
                siteEle.dataset.type = type;
                siteEle.dataset.id = siteEles.length;
                self.allSiteBtns.push(siteEle);
                ele.appendChild(siteEle);
                siteEles.push(siteEle);
                if (!site.nobatch) batchSiteNames.push(site.name);
                if (!currentSite && (siteEle.dataset.current || match)) {
                    isCurrent = true;
                    siteEle.classList.add('current');
                    if (!searchData.prefConfig.showCurrent) {
                        siteEle.style.display = 'none';
                    }
                    self.setCurrentSite(site);
                    self.currentType = ele;
                }
            }
            // 重要：创造列表
            try {
                for (let [i, site] of sites.entries()) {
                    await createItem(site, i);
                    if (i % 50 === 49) await sleep(1);
                }
            } catch (e) {
                for (let i = 0; i < sites.length; i++) {
                    createItem(sites[i], i);
                }
                await sleep(1);
            }
            siteList = await self.createList(siteEles, ele.dataset.title, batchSiteNames);
            if (isCurrent) {
                self.bar.insertBefore(ele, self.bar.children[0]);
                if (!searchData.prefConfig.disableAutoOpen) {
                    ele.classList.remove("search-jumper-hide");
                    if (sites.length > 10 && !searchData.prefConfig.expandType) {
                        ele.classList.add("not-expand");
                        ele.appendChild(self.searchJumperExpand);
                    }
                    siteEles.forEach(se => {
                        let si = se.querySelector("img");
                        if (si && !si.src && si.dataset.src) {
                            si.src = si.dataset.src;
                        }
                    });
                }
            } else {
                self.bar.insertBefore(ele, self.bar.children[self.bar.children.length - 1]);
            }
            ele.style.width = ele.scrollHeight + "px";
            ele.style.height = ele.scrollHeight + "px";
            siteList.style.display = "none";
            ele.appendChild(siteList);

            searchTypes.push(ele);
            return ele;
        }



        // 重要：创造具体的标签
        async createSiteBtn(icon, data, openInNewTab, isBookmark) {
            let self = this;
            let ele = document.createElement("a");
            // ele.setAttribute("ref", "noopener noreferrer");
            let name = data.name;
            let pointer = !isBookmark && /^\[/.test(data.url);
            if (pointer) {
                ele.dataset.pointer = true;
                let siteNames = JSON.parse(data.url);
                if (siteNames.length === 1) {
                    ele.dataset.clone = true;
                    let findSite = false;
                    for (let i = 0; i < searchData.sitesConfig.length; i++) {
                        if (findSite) break;
                        let typeConfig = searchData.sitesConfig[i];
                        for (let j = 0; j < typeConfig.sites.length; j++) {
                            let siteData = typeConfig.sites[j];
                            if (/^\[/.test(siteData.url)) continue;
                            if (siteData.name == siteNames[0]) {
                                findSite = true;
                                data = siteData;
                                break;
                            }
                        }
                    }
                }
            } else if (/^d:/.test(data.url)) {
                ele.setAttribute('download', '');
                data.url = data.url.replace(/^d:/, '');
            }
            if (typeof data.openInNewTab !== 'undefined') {
                openInNewTab = data.openInNewTab;
            }
            let isPage = /^(https?|ftp):/.test(data.url);
            ele.className = "search-jumper-btn";
            if (typeof data.description !== 'undefined') ele.title = name + " - " + data.description;
            ele.dataset.name = name;
            ele.classList.add("search-jumper-word");
            let word = document.createElement("span");
            if (!isBookmark && name.length >= 3) {
                word.innerText = name.substr(0, 3).trim();
                if (!/^\w+$/.test(word.innerText)) word.innerText = word.innerText.substr(0, 2);
            } else word.innerText = name;
            ele.appendChild(word);
            let img = document.createElement("img");
            img.style.display = "none";
            ele.appendChild(img);
            if (data.nobatch) ele.dataset.nobatch = 1;
            img.onload = e => {
                ele.classList.remove("search-jumper-word");
                ele.removeChild(word);
                img.style.display = "";
            };
            self.stopInput = false;

            let imgSrc;
            if (icon == 0) {
            } else if (icon) {
                imgSrc = icon;
            } else if (!isBookmark && isPage) {
                imgSrc = data.url.replace(/^(https?:\/\/[^\/]*\/).*$/, "$1favicon.ico");
            }
            let isBase64 = imgSrc && /^data:/.test(imgSrc);
            if (isBase64) {
                img.src = imgSrc;
            } else if (imgSrc) {
                let cache = searchData.prefConfig.cacheSwitch && cacheIcon[imgSrc];
                if (cache === 'fail') {
                    if (ele.dataset.current && imgSrc.indexOf(location.host) != -1) {
                        img.dataset.src = imgSrc;
                        cacheIcon[imgSrc] = '';
                        if (!isBookmark && !cacheIcon[imgSrc]) cachePool.push(img);
                    }
                } else if (cache) {
                    img.src = cache;
                } else {
                    img.dataset.src = imgSrc;
                    if (!isBookmark && !cacheIcon[imgSrc]) cachePool.push(img);
                }
            }
            return ele;
        }



        showInPage(_funcKeyCall, e) {
            if (this.bar.contains(targetElement) || this.inInput || (!_funcKeyCall && this.funcKeyCall)) {
                return;
            }

            this.appendBar();
            this.initPos();
        }

        setFuncKeyCall(value) {
            this.funcKeyCall = value;
            if (value) {
                this.bar.parentNode.classList.add("funcKeyCall");
            } else {
                this.bar.parentNode.classList.remove("funcKeyCall");
            }
        }

        initPos(relX, relY, posX, posY) {
            relX = relX || searchData.prefConfig.position.x;
            relY = relY || searchData.prefConfig.position.y;
            posX = posX || searchData.prefConfig.offset.x;
            posY = posY || searchData.prefConfig.offset.y;
            let self = this;
            let setClass = className => {
                self.bar.style.cssText = "";
                self.bar.parentNode.style.cssText = "";
                self.bar.parentNode.className = "search-jumper-searchBarCon " + className;

                let baseSize = Math.min(self.bar.scrollWidth, self.bar.scrollHeight);
                let leftRight = self.bar.parentNode.classList.contains("search-jumper-left") ||
                    self.bar.parentNode.classList.contains("search-jumper-right");
                searchTypes.forEach(ele => {
                    ele.style.width = "";
                    ele.style.height = "";
                    let scrollSize = Math.max(ele.scrollWidth, ele.scrollHeight) + "px";
                    if (ele.classList.contains("search-jumper-hide")) {
                        if (leftRight) {
                            ele.style.height = baseSize + "px";
                        } else {
                            ele.style.width = baseSize + "px";
                        }
                    } else {
                        if (leftRight) {
                            ele.style.height = scrollSize;
                        } else {
                            ele.style.width = scrollSize;
                        }
                    }
                });
            };
            let viewWidth = window.innerWidth || document.documentElement.clientWidth;
            let viewHeight = window.innerHeight || document.documentElement.clientHeight;
            var maxSize = Math.max(self.bar.scrollWidth, self.bar.scrollHeight);

            if (posX > viewWidth - maxSize) {
                posX = viewWidth - maxSize;
            }
            if (posX < 0) {
                posX = 0;
            }

            if (posY > viewHeight - maxSize) {
                posY = viewHeight - maxSize;
            }
            if (posY < 0) {
                posY = 0;
            }
            if (relX == "center" && relY == "top") {
                //上中
                setClass("");
                self.bar.style.position = "relative";
            } else if (relX == "left" && relY == "top") {
                if (posX > posY) {
                    //上左
                    setClass("");
                    self.bar.style.position = "fixed";
                    self.bar.style.left = posX + "px";
                } else {
                    //左上
                    setClass("search-jumper-left");
                    self.bar.style.position = "fixed";
                    self.bar.style.top = posY + "px";
                }
            } else if (relX == "right" && relY == "top") {
                if (posX > posY) {
                    //上右
                    setClass("");
                    self.bar.style.position = "fixed";
                    self.bar.style.right = posX + "px";
                } else {
                    //右上
                    setClass("search-jumper-right");
                    self.bar.style.position = "fixed";
                    self.bar.style.top = posY + "px";
                }
            } else if (relX == "center" && relY == "bottom") {
                //下中
                setClass("search-jumper-bottom");
                self.bar.style.position = "relative";
            } else if (relX == "left" && relY == "bottom") {
                if (posX > posY) {
                    //下左
                    setClass("search-jumper-bottom");
                    self.bar.style.position = "fixed";
                    self.bar.style.left = posX + "px";
                } else {
                    //左下
                    setClass("search-jumper-left");
                    self.bar.style.position = "fixed";
                    self.bar.style.bottom = posY + "px";
                }
            } else if (relX == "right" && relY == "bottom") {
                if (posX >= posY) {
                    //下右
                    setClass("search-jumper-bottom");
                    self.bar.style.position = "fixed";
                    self.bar.style.right = posX + "px";
                } else {
                    //右下
                    setClass("search-jumper-right");
                    self.bar.style.position = "fixed";
                    self.bar.style.bottom = posY + "px";
                }
            } else if (relX == "left" && relY == "center") {
                //左中
                setClass("search-jumper-left");
                self.bar.style.position = "absolute";
                self.bar.style.marginTop = posY + "px";
                self.bar.parentNode.style.display = "flex";
                self.bar.parentNode.style.justifyContent = "center";
            } else if (relX == "right" && relY == "center") {
                //右中
                setClass("search-jumper-right");
                self.bar.style.position = "absolute";
                self.bar.style.marginTop = posY + "px";
                self.bar.parentNode.style.display = "flex";
                self.bar.parentNode.style.justifyContent = "center";
                self.bar.parentNode.style.alignItems = "flex-end";
            }
            searchData.prefConfig.position.x = relX;
            searchData.prefConfig.position.y = relY;
            searchData.prefConfig.offset.x = posX;
            searchData.prefConfig.offset.y = posY;
            setTimeout(() => {
                if (!searchData.prefConfig.disableAutoOpen) {
                    if (self.currentType && !self.currentType.classList.contains('search-jumper-hide')) {
                        self.currentType.style.width = self.currentType.scrollWidth + "px";
                        self.currentType.style.height = self.currentType.scrollHeight + "px";
                    }
                }
            }, 251);
        }
    }


    let draging = false;
    function initListener() {
        console.log(logoBtn)
        let logoSvg = logoBtn.children[0];
        let grabState = 0;//0 未按下 1 已按下 2 已拖动
        let hideTimer;
        let touchStart = false;

        let clientX = e => {
            if (e.type.indexOf('mouse') === 0) {
                return e.clientX;
            } else {
                return e.changedTouches[0].clientX;
            }
        };

        let clientY = e => {
            if (e.type.indexOf('mouse') === 0) {
                return e.clientY;
            } else {
                return e.changedTouches[0].clientY;
            }
        };

        let mouseUpHandler = e => {
            clearTimeout(hideTimer);
            searchBar.bar.classList.remove("grabbing");
            document.removeEventListener('mouseup', mouseUpHandler, false);
            document.removeEventListener('mousemove', mouseMoveHandler, false);
            document.removeEventListener('touchend', mouseUpHandler, false);
            document.removeEventListener('touchmove', mouseMoveHandler, false);
            searchBar.bar.style.marginLeft = "";
            searchBar.bar.style.marginTop = "";
            searchBar.bar.style.transform = "";
            if (grabState === 1) {
                grabState = 0;

                return;
            }
            grabState = 0;
            let viewWidth = window.innerWidth || document.documentElement.clientWidth;
            let viewHeight = window.innerHeight || document.documentElement.clientHeight;
            let baseWidth = viewWidth / 3;
            let baseHeight = viewHeight / 3;
            let relX, relY, posX, posY;
            let curX = clientX(e);
            let curY = clientY(e);
            if (curX < baseWidth) {
                relX = "left";
                posX = parseInt(searchBar.bar.style.left) > 0 ? parseInt(searchBar.bar.style.left) : "0";
            } else if (curX < baseWidth * 2) {
                relX = "center";
                posX = parseInt(searchBar.bar.style.left) - viewWidth / 2;
            } else {
                relX = "right";
                posX = viewWidth - parseInt(searchBar.bar.style.left) - searchBar.bar.scrollWidth;
            }
            if (curY < viewHeight / 2) {
                relY = "top";
                posY = parseInt(searchBar.bar.style.top);
            } else {
                relY = "bottom";
                posY = viewHeight - parseInt(searchBar.bar.style.top) - searchBar.bar.scrollHeight;
                if (posY < 0) {
                    posY = 0;
                }
            }
            logoSvg.style.cursor = "";
            let firstType = searchBar.bar.querySelector('.search-jumper-type:not(.search-jumper-hide)>span');
            if (firstType) firstType.onmousedown();
            searchBar.initPos(relX, relY, posX, posY);
            storage.setItem("searchData", searchData);
        };

        let mouseMoveHandler = e => {
            if (grabState === 1) {
                clearTimeout(hideTimer);
                logoSvg.style.cursor = "grabbing";
                searchBar.bar.style.position = "fixed";
                searchBar.bar.style.marginLeft = "0";
                searchBar.bar.style.marginTop = "0";
                searchBar.bar.style.right = "";
                searchBar.bar.style.bottom = "";
                searchBar.bar.style.transform = "unset";
                searchBar.bar.parentNode.classList.remove("search-jumper-scroll");
                searchBar.bar.className = "search-jumper-searchBar grabbing";
            }
            grabState = 2;
            searchBar.bar.style.left = clientX(e) - searchBar.bar.scrollWidth + 20 + "px";
            searchBar.bar.style.top = clientY(e) - searchBar.bar.scrollHeight + 20 + "px";
        };

        logoBtn.oncontextmenu = function (event) {
            searchBar.bar.style.display = 'none';
            event.preventDefault();
        };

        logoBtn.addEventListener('mousedown', e => {
            if (touchStart) {
                touchStart = false;
                return;
            }
            if (e.which === 3) {
                if (searchData.prefConfig.resizePage) {
                    if (typeof searchBar.initBodyStyle != "undefined") document.body.style.cssText = searchBar.initBodyStyle;
                }
                document.removeEventListener('mouseup', mouseUpHandler, false);
                document.removeEventListener('mousemove', mouseMoveHandler, false);
                document.removeEventListener('touchend', mouseUpHandler, false);
                document.removeEventListener('touchmove', mouseMoveHandler, false);
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            if (searchBar.inInput || e.which === 2 || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
                return;
            }
            grabState = 1;
            document.addEventListener('mouseup', mouseUpHandler, false);
            setTimeout(() => {
                if (grabState === 1) {
                    document.addEventListener('mousemove', mouseMoveHandler, false);
                }
            }, 100);
            hideTimer = setTimeout(() => {
                searchBar.bar.style.display = 'none';
                document.removeEventListener('mouseup', mouseUpHandler, false);
                document.removeEventListener('mousemove', mouseMoveHandler, false);
            }, 2000);
        }, false);

        logoBtn.addEventListener('touchstart', e => {
            e.preventDefault();
            e.stopPropagation();
            touchStart = true;
            grabState = 1;
            document.addEventListener('touchend', mouseUpHandler, false);
            setTimeout(() => {
                if (grabState === 1) {
                    document.addEventListener('touchmove', mouseMoveHandler, false);
                }
            }, 100);
            hideTimer = setTimeout(() => {
                searchBar.bar.style.display = 'none';
                document.removeEventListener('touchend', mouseUpHandler, false);
                document.removeEventListener('touchmove', mouseMoveHandler, false);
            }, 2000);
        }, false);


        if (searchData.prefConfig.enableInPage) {
            let shown = false;

            //重要:点击事件的主函数
            let waitForMouse = false;
            let clickHandler = e => {

                if (shown) {
                    e.preventDefault();
                }
                shown = false;
                document.removeEventListener('click', clickHandler, true);
            };
            let mouseDownHandler = e => {
                console.log(e)
                searchBar.showInPage(true, e);
                if (e.type === 'dblclick') {
                    return;
                }
            };

            document.addEventListener('dblclick', mouseDownHandler);
            setTimeout(() => { mouseDownHandler(document.body) }, 1000)
        }

    }
    function initView() {
        searchBar = new SearchBar();
    }

    async function initRun() {
        await searchBar.initRun();
        initListener();
    }

    async function sleep(time) {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, time);
        })
    }

    var inited = false;
    async function init(cb) {
        if (window.top != window.self && document.body.clientHeight < 100 && document.body.clientWidth < 100) {
            return;
        }
        if (inited) {
            if (cb) cb();
            return;
        }
        if (!document.hidden) {
            inited = true;
            initView();
            initRun();
            if (cb) cb();
        }

    }
    let checkReady = () => {
        if (document.documentElement && document.head && document.body) {
            init();
        } else {
            setTimeout(() => {
                checkReady();
            }, 10);
        }
    };
    checkReady();
}

if (document) {
    run();
} else {
    let checkReady = () => {
        if (document) {
            run();
        } else {
            setTimeout(() => {
                checkReady();
            }, 10);
        }
    };
    checkReady();
}
// 重要：点击事件
setTimeout(() => {
    document.querySelectorAll('.sitelistCon').forEach((value) => {
        value.addEventListener("click", (e) => {
            console.log(e.target)
            alert(e.target.innerText)
        })
    })
}, 100)




