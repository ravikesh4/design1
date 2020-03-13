
try {
            var as = document.querySelectorAll(".panel a");
            for (var i = 0; i < as.length; i++) {
                var link = as[i].getAttribute("href");
                if ("/"+link === window.location.pathname) {
                    as[i].parentElement.classList.add("active");
                    if (parent.classList.contains("sub-menu")) {
                        parent.classList.remove("collapse");
                        }
                    }
                }
            } catch (e) {

        }


console.log(window.location.pathname);
try {
    var as = document.querySelectorAll(".panel a");
    for (var i = 0; i < as.length; i++) {
        var link = as[i].getAttribute("href");
        if ("/"+link === window.location.pathname) {
            as[i].parentElement.classList.add("active");
        }

    }
} catch (e) {

}
      