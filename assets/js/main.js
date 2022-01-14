jQuery(document).ready(function ($) {

    /*---JavaScript For Menu---*/
    const searchBtn = document.querySelector(".search-icon");
    const cancleBtn = document.querySelector(".cancle-icon");
    const form = document.querySelector("form");

    cancleBtn.onclick = () => {

        searchBtn.classList.remove("hide");
        cancleBtn.classList.remove("show");
        form.classList.remove("active");
    }

    searchBtn.onclick = () => {
        form.classList.add("active");
        searchBtn.classList.add("hide");
        cancleBtn.classList.add("show");
    }



    $('.menu-icon').click(function () {
        $(this).toggleClass("click");
        $('.menu-item ul').toggleClass("show");
    });



    /*---JavaScript For Hero Area---*/
    $(".hero-slides").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
        autoplay: false,

    });

    /*---JavaScript ForAbout Area---*/
    $(".about-cursol").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        autoplay: false,

    });

    /*---JavaScript For Client Feedback---*/
    $(".client-feedback").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        autoplay: false,

    });

    /*---JavaScript For Portfolio---*/
    $(".portfolio-filter li").on('click', function () {
        $(".portfolio-filter li").removeClass("active");
        $(this).addClass("active");
        var filtervalue = $(this).attr("data-filter");

        $(".portfolio-list").isotope({
            filter: filtervalue,
            percentPosition: true,
            masonry: {

                columnWidth: '.col-md-3',

            }
        });
    });

    $('.portfolio-list').isotope({
        percentPosition: true,
        masonry: {

            columnWidth: '.col-md-3',

        }
    });



});
