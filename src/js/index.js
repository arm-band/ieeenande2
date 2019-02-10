/* IE鎮まり給へ */
ieBuster({
    mainText: "ご利用のインターネットブラウザは推奨環境ではありません。Webサイトの動作が保証できませんので、最新の Google Chrome をご利用ください。",
    linkText: "ダウンロードページへ",
    linkUrl: "www.google.com/intl/ja_ALL/chrome/"
})

$(function() {
    //iPhone・iPad背景画像バグ対処
    mobileSafariRequiem();

    //スクロール対象を取得
    var screlm = scrollElm();
    //ページトップへ戻る
    pageTop(screlm);

    //ページ内スクロール
    pageScroll(screlm);
});

//mobile Saffari対策
function mobileSafariRequiem() {
    var $body = $("body");
    if (bowser.safari && bowser.ios) {
        //iPhoneかiPadならば
        $body.addClass("mobileSafari");
    }
}

//ユーザーエージェントからスクロールを実行する対象を判定
function scrollElm() {
    if("scrollingElement" in document) {
        return document.scrollingElement;
    }
    if(navigator.userAgent.indexOf("WebKit") != -1) {
        return document.body;
    }
    return document.documentElement;
}

//ページトップへ戻る
function pageTop(screlm) {
    var returnPageTop = $(".returnPageTop");

    $(window).on("scroll", function() {
        //スクロール距離が400pxより大きければページトップへ戻るボタンを表示
        var currentPos = $(this).scrollTop();
        if (currentPos > 400) {
            returnPageTop.fadeIn();
        } else {
            returnPageTop.fadeOut();
        }
    });

    //ページトップへスクロールして戻る
    returnPageTop.on("click", function() {
        $(screlm).animate({ scrollTop: 0 }, 1000, "easeInOutCirc");
        return false;
    });
}

//ページ内スクロール
function pageScroll(screlm) {
    var navbarHeight = parseInt($("body").attr("data-offset"));
    if($("#index").length) { //トップページの場合のみ動作
        var $navbar = $("#navbar");
        var speed = 1000;
        $navbar.find("a").on("click", function() {
            var href = $(this).attr("href");
            var targetID = "";
            if(/^(\.\/|\/)$|^(#)?$/.test(href)) { //hrefの値が「/」「./」「#」「」の場合
                targetID = "html";
            }
            else if(/^(\.\/|\/)#.+/.test(href)) { //hrefの値が「/#HOGE」「./#HOGE」「#HOGE」の場合
                targetID = href.slice(RegExp.$1.length); //正規表現の後方参照により"(\.\/|\/)"をRegExp.$1に格納、その文字列の長さを削除し、「#HOGE」だけの状態にして渡す
            }
            else {
                targetID = href;
            }
            var target = $(targetID);
//            var position = target.offset().top - navbarHeight;
            var position = target.offset().top;
            $(screlm).animate({ scrollTop:position }, speed, "easeInOutCirc");
            $navbar.find(".navbar-toggle[data-target=\"#navbarList\"]").click(); //移動したらハンバーガーを折りたたむ
            return false;
        });
    }
    //一般
    $('a[href^="#"]').on("click", function() {
        var href = $(this).attr("href");
        var targetID = href == "#" || href == "" ? "html" : href; //リンク先が#か空だったらhtmlに
        var target = $(targetID);
//        var position = target.offset().top - navbarHeight;
        var position = target.offset().top;
        $(screlm).animate({ scrollTop:position }, speed, "easeInOutCirc");
        return false;
    });
}