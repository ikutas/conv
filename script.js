var asplist = ["valuecommerce", "a8.net"];

window.onload = function() {
    setTimeout(sconv, 3000);
}

function sconv() {
    var ref = document.referrer;
    var keywords = "";

    if (1 < ref.length) {
        var result = [];
        var query = ref.substring(ref.indexOf("?") + 1);
        var parameters = query.split('&');
        for (var i = 0; i < parameters.length; i++) {
            var element = parameters[i].split('=');
            result[element[0]] = decodeURI(element[1]);
        }
        keywords = result.p;
    }

    if ((ref.indexOf("search.yahoo.co.jp") > 0) && (keywords)) {
        $("a").on("click", function(e) {
            var tohref = e.currentTarget.href;

            $.each(asplist, function(index, aspname) {
                if (tohref.indexOf(aspname) > 0) {

                    var _data = {
                        "key": keywords,
                        "asp": aspname,
                        "viewsite": window.location.href,
                        "refurl": tohref
                    };

                    $.ajax({
                        type: "post",
                        data: _data,
                        url: "http://ikutas.xsrv.jp/cg/",
                        success: function(data) {
                            console.log("success");
                        },
                        error: function(data) {
                            console.log("error");
                        }
                    })
                }
            });
        });
    }
}
