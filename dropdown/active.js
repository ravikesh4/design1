
try {
    var as = document.querySelectorAll("ul li a");
    for (var i = 0; i < as.length; i++) {
        var link = as[i].getAttribute("href");
        console.log(link);
        if ("/examples/"+link === window.location.pathname) {
            as[i].parentElement.classList.add("active");
            var parent = as[i].parentElement.parentElement.parentElement;
            if (parent.classList.contains("collapse")) {
                parent.classList.remove("collapse");
                }
            }
        }
    } catch (e) {

}


// console.log(window.location.pathname);

    // var as = document.querySelectorAll("ul li a");
    // for (var i = 0; i < as.length; i++) {
    //     var link = as[i].getAttribute("href");
    //     // console.log("aaa");
    //     if ("/examples/"+link === window.location.pathname) {
    //         as[i].parentElement.classList.add("active");

    //     }
    // }


    try {
        var as = document.querySelectorAll("ul li a");
        for (var i = 0; i < as.length; i++) {
            var link = as[i].getAttribute("href");
            if (link === "{{ request.path }}") {
                as[i].parentElement.classList.add("active");
                var parent = as[i].parentElement.parentElement.parentElement;
                if (parent.classList.contains("collapse")) {
                    parent.classList.remove("collapse");
                    }
                }

            }
        } catch (e) {

        }

