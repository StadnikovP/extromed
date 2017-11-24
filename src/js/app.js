var $window, $document, $html;


var pageApp = {
    'init': function(){
        var $thisApp = $('#app');
        var curApp = $thisApp.attr('data-app');
        this.globalPollifil();
        if (pageApp[curApp]) { pageApp[curApp]($thisApp); }
    },
    'page-address':function($thisApp){
        var $mapPlace = $thisApp.find('[data-target="ymap"]');
        ymaps.ready(function() {

            var mapLat = 55.751244;
            var mapLng = 37.618423;
            var mapZoom = 16;

            var map = new ymaps.Map($mapPlace[0], {
                center: [mapLat, mapLng],
                zoom: mapZoom,
                type: 'yandex#publicMap',
                controls: [],
                behaviors: ['drag', 'dblClickZoom']
            });


            map.controls.add(
                new ymaps.control.ZoomControl(),
                {
                    float: "none",
                    position: {
                        top: 30,
                        right: 30
                    }
                }
            );

            var marker = new ymaps.Placemark(map.getCenter(), {

            }, {
                iconLayout: 'default#image',
                iconImageHref: '/assets/img/map-pin.png',
                iconImageSize: [50,64],
                hideIconOnBalloonOpen: false
            });



            map.geoObjects.add(marker);


        });
    },
    'globalPollifil': function(){
        if (!('classList' in document.documentElement) && Object.defineProperty && typeof HTMLElement !== 'undefined') {
            Object.defineProperty(HTMLElement.prototype, 'classList', {
                get: function() {
                    var self = this;

                    function update(fn) {
                        return function(value) {
                            var classes = self.className.split(/\s+/);
                            var index = classes.indexOf(value);

                            fn(classes, index, value);
                            self.className = classes.join(' ');
                        };
                    }

                    var ret = {
                        add: update(function(classes, index, value) {
                            ~index || classes.push(value);
                        }),

                        remove: update(function(classes, index) {
                            ~index && classes.splice(index, 1);
                        }),

                        toggle: update(function(classes, index, value) {
                            ~index ? classes.splice(index, 1) : classes.push(value);
                        }),

                        contains: function(value) {
                            return !!~self.className.split(/\s+/).indexOf(value);
                        },

                        item: function(i) {
                            return self.className.split(/\s+/)[i] || null;
                        }
                    };

                    Object.defineProperty(ret, 'length', {
                        get: function() {
                            return self.className.split(/\s+/).length;
                        }
                    });

                    return ret;
                }
            });
        }

        (function() {
            var lastTime = 0;
            var vendors = ['ms', 'moz', 'webkit', 'o'];
            for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
                window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                    || window[vendors[x]+'CancelRequestAnimationFrame'];
            }

            if (!window.requestAnimationFrame)
                window.requestAnimationFrame = function(callback, element) {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                        timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };

            if (!window.cancelAnimationFrame)
                window.cancelAnimationFrame = function(id) {
                    clearTimeout(id);
                };
        }());
    },
};

var moduleApp = {
    'init': function () {
        this.resizeGlobal();
        this.resizeLogo();
        this.executeModules();
        this.executeSFX();
        this.globalActions();
        this.toolsGlobalSubscribe();
        this.pageLoader();
        this.startupMessage();
        this.initSlider();
        this.pagePilingInit();
        this.formValidation();
        this.mobileMenu();

    },
    'executeModules':function(){
        $('[data-is]').each(function(i,thisModule){
            var $thisModule = $(thisModule);
            var thisModuleName = $thisModule.attr('data-is');
            if(moduleApp[thisModuleName]) { moduleApp[thisModuleName]($thisModule); }
        });
    },
    'executeSFX':function(){
        if (appConfig.mobileVersion || device.tablet()) { return false; }
        $('[data-sfx]').each(function(i,thisModule){
            var $thisModule = $(thisModule);
            var thisModuleName = $thisModule.attr('data-sfx');
            if(moduleApp.SFXModules[thisModuleName]) { moduleApp.SFXModules[thisModuleName]($thisModule); }
        });
    },
    'globalActions':function(){

        //tabs
        $('.js-tabs-controls').on('click', function(e){
            e.preventDefault();

            var $this = $(this),
                $item = $this.closest('.tabs-controls-item'),
                $parent = $this.closest('.js-tabs-wrapper'),
                $contentItem = $parent.find('.js-tabs-item'),
                itemNumber = $item.index();

            $contentItem.eq(itemNumber)
                .add($item)
                .addClass('active')
                .siblings()
                .removeClass('active');

            var $perent = $this.parents('.window-direction');
            if($(document).width() > 900) {
                if ($this.hasClass('js-price')) {
                    $perent.addClass('full-screen__container');
                }
                else {
                    $perent.removeClass('full-screen__container');
                }
            }
        });

        //accordions
        $('.js-accordion-trigger').on('click', function(e){
            e.preventDefault();

            var
                $this = $(this),
                item = $this.closest('.accordion-item'),
                list = $this.closest('.accordion-list'),
                items = list.find('.accordion-item'),
                content = item.find('.accordion-inner'),
                otherContent = list.find('.accordion-inner'),
                duration = 300;

            if (!item.hasClass('active')) {
                items.removeClass('active');
                item.addClass('active');

                otherContent.stop(true, true).slideUp(duration);
                content.stop(true, true).slideDown(duration);

            } else {
                content.stop(true, true).slideUp(duration);
                item.removeClass('active');
            }

        });

        //init menu section
        $('#myMenu .menu-link').on('click', function(){
            $('body').toggleClass('openMenu');
            $('.js-m-btn-menu').toggleClass('active');
        });

        //pop-up form sign
        $('.js-sign').on('click', function(){
            var template = $('.js-form-sigh').html();
            $.fancybox.open({
                wrapCSS : 'fb-fancy-default',
                type: 'html',
                content: template,
                padding: 0,
                autoScale: false,
                fitToView: false,
                openEffect  : 'drop',
                closeEffect: 'drop',
                nextEffect: 'fade',
                prevEffect : 'fade',
                openSpeed: 300,
                closeSpeed: 300,
                nextSpeed: 300,
                prevSpeed: 300,
                beforeShow:function(){
                    // var $thisFancy = $('.fancybox-inner');
                    //
                    // var $thisChosen = $thisFancy.find('[data-is="chosen"]');
                    // moduleApp.chosen($thisChosen);
                    //
                    // var $cityTarget = $thisFancy.find('.js-fb-city-target');
                    //
                    // $thisFancy.find('.js-fb-city-action').on('change',function(){
                    //     var action = !!($(this).find('option:selected').attr('data-city'));
                    //     if (action) {
                    //         $cityTarget.slideDown(200, function(){
                    //             if (!$cityTarget.hasClass('state-inited')) {
                    //                 $cityTarget.addClass('state-inited');
                    //                 $cityTarget.find('select').chosen({
                    //                     no_results_text: "Нет результатов"
                    //                 });
                    //             }
                    //         });
                    //     }
                    //     else {
                    //         $cityTarget.slideUp(200);
                    //     }
                    // });
                    //
                    //

                    //
                    //

                },
                afterShow:function(){
                    var $thisSubmit = $('.fancybox-inner .js-fb-submit');//$thisFancy.find('.js-fb-submit');
                    // console.log($thisSubmit);
                    moduleApp.formValidation($thisSubmit);

                }
            });
        });


        //hover element price
        $('.js-item-element').hover(function () {
            var $this = $(this),
                $parent = $this.parents('.price-list'),
                $allElements = $parent.find('.js-item-element');

            $allElements.toggleClass('disabled');
            $this.toggleClass('disabled').toggleClass('active');

        });


        $('.js-certificates').on('click', function(){
            var updateSize = true;
            var $this = $(this),
               thisSertificat = $this.parent('div').find('.certificat-list').slideToggle(300);

            $this.toggleClass('active');

            setTimeout(function(){
                moduleApp.initSlider(updateSize);
            }, 400);
        });
    },
    'resizeGlobal': function(){
        window.addEventListener('resize', resizeInitFunction);

        function resizeInitFunction(){
            moduleApp.resizeLogo();
            moduleApp.pagePilingInit();

            var w=screen.width,
                h=screen.height;

            if (w < 737 || h < 737 || device.mobile()) {
                appConfig.mobileVersion = true;
            }
            appConfig.desktopVersion = !appConfig.mobileVersion;
        }
    },
    'resizeLogo': function(){
        if($(document).width() < 941){
            $('.logo svg').attr('viewBox', '0 0 47 44');
            $('.mCustomScrollbar').attr('class', '');
        }
        else{
            $('.logo svg').attr('viewBox', '0 0 248 44');
        }
    },
    'pagePilingInit': function(){
        var $listSection = $('.main section');
        var configTime = {
                delay: 1550,
                animationTime: 500,
                delayNextPage: 1550
            };
        var GlobalStatePage = 1;
        var sequenceTimeline = new TimelineLite();

        if(history.replaceState){
            var hash = window.location.hash;
            var page_index = 1;

            if(hash != ''){
                $('.menu-list .menu-item').each(function(ind, elt){
                    if(hash == $(elt).find('a').attr('href')){
                        page_index = $(elt).find('a').attr('data-index');
                        return;
                    }
                    GlobalStatePage = page_index;
                });
            }
            else{
                GlobalStatePage = 1;
                showRouter(GlobalStatePage);
            }
        }

        //button menu
        $('.js-m-btn-menu').on('click', function(e){
            e.preventDefault();

            var $this = $(this);

            if(appConfig.desktopVersion){
                if($this.hasClass('active')){
                    hideRouter('menu');
                    showRouter(GlobalStatePage);
                }
                else{
                    hideRouter(GlobalStatePage);
                    showRouter('menu');
                }
            }


            $this.toggleClass('active');
            $('body').toggleClass('openMenu');
        });


        $(".main").onepage_scroll({
            sectionContainer: "section",
            responsiveFallback: 940,
            loop: false,
            animationTime: configTime.animationTime,
            delay: configTime.delay,
            updateURL: true,
            customClick: true,
            customMove: function(next){
                if(appConfig.desktopVersion){
                    hideRouter('menu');
                }
                showRouter(next);
                GlobalStatePage = next;
            },
            clickMove: function(next){
                hideRouter(1);
                showRouter(next);
                GlobalStatePage = next;
            },
            moveUp: function(index, next){
                hideRouter(index);
                showRouter(next);
                GlobalStatePage = next;
            },
            moveDown: function(index, next){
                hideRouter(index);
                showRouter(next);
                GlobalStatePage = next;
            }
        });


        function showRouter(indexPageShow){

            switch(indexPageShow) {
                case 1:
                    showMainPage();
                    break;
                case 2:
                    showChoicePage();
                    break;
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    showDirectionPage(indexPageShow);
                    break;
                case 8:
                    showExpertsPage();
                    break;
                case 9:
                    showReviewsPage();
                    break;
                case 10:
                    showStockPage();
                    break;
                case 11:
                    showContactsPage();
                    break;
                case 'menu':
                    showMenu()
                    break;
                default:
                    break;
            }
        }

        function hideRouter(indexPageHide){

            switch(indexPageHide) {
                case 1:
                    hideMainPage();
                    break;
                case 2:
                    hideChoicePage();
                    break;
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    hideDirectionPage(indexPageHide);
                    break;
                case 8:
                    hideExpertsPage();
                    break;
                case 9:
                    hideReviewsPage();
                    break;
                case 10:
                    hideStockPage();
                    break;
                case 11:
                    hideContactsPage();
                    break;
                case 'menu':
                    hideMenu();
                    break;
                default:
                    break;
            }
        }


        function showMainPage(){
            var $indexPage = $listSection.eq(0),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2'),
                $containerLeft = $indexPage.find('.container__left');

            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .set($containerLeft, {y:'70px', opacity:0})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
                .to($containerLeft, .8, {y:0, opacity:1}, "-=.7")
        }
        function hideMainPage(){
            var $indexPage = $listSection.eq(0),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');

            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
        }

        function showChoicePage(){
            var $indexPage = $listSection.eq(1),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2'),
                $containerRight = $indexPage.find('.container__right');

            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .set($containerRight, {y:'70px', opacity:0})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
                .to($containerRight, .8, {y:0, opacity:1}, "-=.5")
        }
        function hideChoicePage(){
            var $indexPage = $listSection.eq(1),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');

            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
        }

        function showDirectionPage(index){
            var $indexPage = $listSection.eq(index-1),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2'),
                $blueBlock = $indexPage.find('.blue-block'),
                $containerLeft = $indexPage.find('.container__left');

            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .set($blueBlock, {x:'-100%'})
                .set($containerLeft, {y:'70px', opacity:0})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
                .to($blueBlock, .5, {x:'0%'}, "-=.5")
                .to($containerLeft, .8, {y:0, opacity:1}, "-=.7")
        }
        function hideDirectionPage(index){

            var $indexPage = $listSection.eq(index-1),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2'),
                $blueBlock = $indexPage.find('.blue-block');

            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .to($blueBlock, .5, {x:'100%'}, "-=.7")
                .set($indexPage, {'z-index':0})
        }

        function showExpertsPage(){
            var $indexPage = $listSection.eq(7),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2'),
                $containerRight = $indexPage.find('.container__right'),
                $slideCenterElement = $indexPage.find('.slide-center-element');

            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .set($containerRight, {y:'70px', opacity:0})
                .set($slideCenterElement, {x:'-100%', opacity: 0})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
                .to($containerRight, .8, {y:0, opacity:1}, "-=.5")
                .to($slideCenterElement, .6, {x:'0%', opacity: 1}, "-=.1")
        }
        function hideExpertsPage(){
            var $indexPage = $listSection.eq(7),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');

            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
        }

        function showReviewsPage(){
            var $indexPage = $listSection.eq(8),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2'),
                $containerRight = $indexPage.find('.container__right'),
                $slideCenterElement = $indexPage.find('.slide-center-element');

            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .set($containerRight, {y:'70px', opacity:0})
                .set($slideCenterElement, {x:'-100%', opacity: 0})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
                .to($containerRight, .8, {y:0, opacity:1}, "-=.5")
                .to($slideCenterElement, .6, {x:'0%', opacity: 1}, "-=.1")
        }
        function hideReviewsPage(){
            var $indexPage = $listSection.eq(8),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');

            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
        }

        function showStockPage(){
            var $indexPage = $listSection.eq(9),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2'),
                $containerLeft = $indexPage.find('.container__left');

            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .set($containerLeft, {y:'70px', opacity: 0})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
                .to($containerLeft, .7, {y:'0px', opacity: 1}, "-=.3")
        }
        function hideStockPage(){
            var $indexPage = $listSection.eq(9),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');

            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
        }

        function showContactsPage(){
            var $indexPage = $listSection.eq(10),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2'),
                $containerLeft = $indexPage.find('.container__left');

            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .set($containerLeft, {y:'70px', opacity: 0})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
                .to($containerLeft, .7, {y:'0px', opacity: 1}, "-=.3")
        }
        function hideContactsPage(){
            var $indexPage = $listSection.eq(10),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');

            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0});
        }

        function showMenu(){
            var $containerMenu = $('.container-menu'),
                $containerLeft = $('.container-menu .container__left'),
                $containerRight = $('.container-menu .container__right');

            sequenceTimeline
                .set($containerMenu, {x:'100%'})
                .set($containerLeft, {y:'100px', 'opacity':0})
                .set($containerRight, {y:'100px', 'opacity':0})
                .to($containerMenu, .7, {'opacity':1})
                .to($containerMenu, .7, {x:'0%'}, "-=.5")
                .to($containerLeft, .6, {y:0,'opacity':1}, "-=.4")
                .to($containerRight, .6, {y:0, 'opacity':1}, "-=.4")
        }
        function hideMenu(){
            var $containerMenu = $('.container-menu');

            sequenceTimeline
                .to($containerMenu, .7, {'opacity':0})
                .to($containerMenu, .7, {x:'100%'}, "-=.5")
        }

    },
    'initSlider': function(update){
        var configSlideChoice = {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            on: {
                init: function () {
                    addProgressSlide();
                    animationProgreeBar();
                },
            },

        };

        var mySwiper = new Swiper('.js-slider-choice', configSlideChoice);

        mySwiper.on('slideChange', function () {
            removeProgressSlide();
            addProgressSlide();
        });

        mySwiper.on('slideChangeTransitionStart', function () {
            animationProgreeBar();
        });

        function addProgressSlide(){
            var progressBar = '<div class="js-progress progress-bar-slider"></div>';
            $('.js-slider-choice').append(progressBar);
        }

        function removeProgressSlide(){
            $('.js-slider-choice .js-progress').remove();
        }

        function animationProgreeBar(){
            $('.js-slider-choice .js-progress').addClass('animation-progress');
        }



        var configSliderExperts = {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            navigation: {
                nextEl: '.js-next-experts',
                prevEl: '.js-prev-experts',
            },
            simulateTouch: false,
            allowTouchMove: false
        };

        var configSliderExpertsContent = {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            simulateTouch: false,
            autoHeight: true,
            observer: true,
            navigation: {
                nextEl: '.js-next-experts',
                prevEl: '.js-prev-experts',
            },
            allowTouchMove: false
        };


        var expertsSwiper = new Swiper('.js-slider-experts', configSliderExperts);
        var expertsContentSwiper = new Swiper('.js-slider-experts-content', configSliderExpertsContent);

        if(update){
            expertsContentSwiper.updateSize();
        }


        // var configSliderReviews = {
        //     slidesPerView: 1,
        //     spaceBetween: 0,
        //     centeredSlides: true,
        //     navigation: {
        //         nextEl: '.js-next-reviews',
        //         prevEl: '.js-prev-reviews',
        //     },
        //     simulateTouch: false,
        //     allowTouchMove: false
        // };

        var configSliderReviewsContent = {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            autoHeight: true,
            navigation: {
                nextEl: '.js-next-reviews',
                prevEl: '.js-prev-reviews',
            },
            // allowTouchMove: false,
        };

        // var reviewsSwiper = new Swiper('.js-slider-reviews', configSliderReviews);
        var reviewsContentSwiper = new Swiper('.js-slider-reviews-content', configSliderReviewsContent);


    },
    'toolsGlobalSubscribe':function($thisModule){
        $document.on('click','.ts-submit',function(e){
            e.preventDefault();
            var $this = $(this);
            var $parent =  $this.closest('.is-tools-subscribe');
            var $thisInput = $parent.find('.ts-input');
            var regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


            if (regexEmail.test($thisInput.val()) && $thisInput.val().length > 0) {
                $parent.find('.ts-form').submit();
            } else {
                $thisInput.addClass('state-bounce');
                setTimeout(function(){
                    $thisInput.removeClass('state-bounce').focus();
                }, 400);
            }

        });
    },
    'pageLoader': function(){
        $document.on('click','a',function(){
            var $this = $(this);
            var noProgress = false;

            var href = $this.attr('href');
            var targetBlank = $this.attr('target') || false;
            var inSwiper = $this.closest('.swiper-container').length;
            var downloadAttr = $this.attr('download');
            if (typeof downloadAttr !== typeof undefined && downloadAttr !== false) {
                noProgress = true;
            }

            if (
                !href ||
                href.indexOf('mailto') > -1 ||
                href.indexOf('#') > -1 ||
                href.indexOf('javascript') > -1 ||
                href.indexOf('tel') > -1 ||
                $this.hasClass('no-preloader') ||
                $this.hasClass('js-fancy-image') ||
                href.length === 0 ||
                href === 'undefined' ||
                targetBlank ||
                inSwiper
            ) { noProgress = true; }

            if (noProgress) {
                return true;
            } else {
                $("#body").removeClass('jsfx-loaded');
                return true;
            }
        });

        $("#body").addClass('jsfx-loaded');
    },
    'startupMessage':function(){
        if (appConfig.startupMessage.title && appConfig.startupMessage.message) {
            var template = '<div class="fb-modal-default">';
            template += '<div class="fbp-title">'+appConfig.startupMessage.title+'</div>';
            template += '<div class="fbp-message">'+appConfig.startupMessage.message+'</div>';
            template += '<div class="cntr"><a href="#" class="is-button-a js-fancy-close"><span>Ок</span></a></div>';
            template += '</div>';

            $.fancybox.open({
                wrapCSS : 'fb-fancy-default fb-fancy-no-close',
                content: template,
                padding: 0,
                autoScale: false,
                fitToView: false,
                openEffect  : 'drop',
                closeEffect: 'drop',
                nextEffect: 'fade',
                prevEffect : 'fade',
                openSpeed: 300,
                closeSpeed: 300,
                nextSpeed: 300,
                prevSpeed: 300
            });
        }
    },
    'SFXModules':{
        'sfx-a':function($thisModule){
            var gfxFromLeft = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-translatex':'-40'
            };

            var gfxFromRight = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-translatex':'40'
            };

            $thisModule.find('.lt-column-left .lt-tile').addClass('scrollme animateme').attr(gfxFromLeft);
            $thisModule.find('.lt-column-right .lt-tile').addClass('scrollme animateme').attr(gfxFromRight);
        },
        'sfx-b':function($thisModule){
            var gfxFromLeft = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-translatex':'-40'
            };

            var gfxFormRight = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-translatex':'40'
            };

            $thisModule.find('.lt-row:even').find('.lt-row-content-inner').addClass('scrollme animateme').attr(gfxFromLeft);
            $thisModule.find('.lt-row:even').find('.lt-row-image').addClass('scrollme animateme').attr(gfxFormRight);
            $thisModule.find('.lt-row:odd').find('.lt-row-content-inner').addClass('scrollme animateme').attr(gfxFormRight);
            $thisModule.find('.lt-row:odd').find('.lt-row-image').addClass('scrollme animateme').attr(gfxFromLeft);
        },
        'sfx-c':function($thisModule){
            var gfxFromRight = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-translatex':'40'
            };

            $thisModule.addClass('scrollme animateme').attr(gfxFromRight);
        },
        'sfx-d':function($thisModule){
            return false;
            var gfxFromLeft = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-translatex':'-40'
            };

            var gfxFormRight = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-translatex':'40'
            };

            $thisModule.find('.lt-row:even').find('.lt-row-content-inner').addClass('scrollme animateme').attr(gfxFromLeft);
            $thisModule.find('.lt-row:even').find('.lt-row-image').addClass('scrollme animateme').attr(gfxFormRight);
            $thisModule.find('.lt-row:odd').find('.lt-row-content-inner').addClass('scrollme animateme').attr(gfxFormRight);
            $thisModule.find('.lt-row:odd').find('.lt-row-image').addClass('scrollme animateme').attr(gfxFromLeft);
        },
        'sfx-e':function($thisModule){

            var gfxFromLeft = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-opacity':'0'
            };
            $thisModule.find('.hc-year-box').addClass('scrollme animateme').attr(gfxFromLeft);
        }
    },
    'formValidation': function ($submitBtn, submitFunction) {
        console.log($submitBtn);

        var params = {
            'formValidationAttr':'data-validation',
            'formInputClass':'is-form-text',
            'formCheckboxClass':'is-form-checkbox',
            'formShowErrorClass':'form-show-error',
            'submitDisabledClass':'state-disabled',
            'submitProgressClass':'state-progress'
        };

        $submitBtn = $submitBtn || $('.js-form-submit');
        submitFunction = submitFunction || false;
        $submitBtn.closest('form').addClass('is-form-validation');
        $submitBtn.click(function(e){
            e.preventDefault();
            var $this = $(this);
            if ($this.hasClass(params.submitDisabledClass) || $this.hasClass(params.submitProgressClass)) {
                return false;
            }
            var $form = $this.closest('form');
            var $forms = $form.find('['+params.formValidationAttr+']');
            var result = formChecking($forms, true);
            if (result) {
                if (submitFunction) {
                    submitFunction($form);
                } else {
                    $this.addClass(params.submitProgressClass);
                    $form.submit();
                }
            } else {
                $forms.on('keyup keypress change', function(){
                    var $current = $(this);
                    setTimeout(function(){ formChecking($current); }, 50);
                });
            }
            return false;
        });

        $(document).on('keydown', function (e) {
            return true;
            if (e.keyCode == 13) {
                var $thisFocus = $(document.activeElement);
                if ($thisFocus.is('textarea')) {
                    return true;
                }
                if ($thisFocus.closest('.form-select').length) {
                    return true;
                }
                if ($thisFocus.closest('.is-form-validation').length) {
                    $submitBtn.trigger('click');
                }
                return false;
            }
        });

        function formChecking($inp, onFocus) {


            onFocus = onFocus || false;

            var noError = true;

            $inp.each(function (ind, elm) {
                var $this = $(elm);

                var mask = $this.attr(params.formValidationAttr);
                var value = $this.val();
                var placeHolder = $this.attr('placeholder');
                var regex;
                var subError = true;

                if (mask == 'text') {
                    if ((value.length < 1) || (value == placeHolder)) {
                        noError = false;
                        $this.closest('.'+params.formInputClass).addClass(params.formShowErrorClass);
                        if (onFocus) {
                            $this.focus();
                            onFocus = false;
                        }
                    } else {
                        $this.closest('.'+params.formInputClass).removeClass(params.formShowErrorClass);
                    }
                }

                if (mask == 'text-visible') {
                    if ($this.is(':visible') && ((value.length < 1) || (value == placeHolder))) {
                        noError = false;
                        $this.closest('.'+params.formInputClass).addClass(params.formShowErrorClass);
                        if (onFocus) {
                            $this.focus();
                            onFocus = false;
                        }
                    } else {
                        $this.closest('.'+params.formInputClass).removeClass(params.formShowErrorClass);
                    }
                }

                if (mask == 'email') {
                    regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if (!regex.test(value) || (value == placeHolder)) {
                        noError = false;
                        $this.closest('.'+params.formInputClass).addClass(params.formShowErrorClass);
                        if (onFocus) {
                            $this.focus();
                            onFocus = false;
                        }
                    } else {
                        $this.closest('.'+params.formInputClass).removeClass(params.formShowErrorClass);
                    }
                }

                if (mask == 'email-visible') {
                    regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if ($this.is(':visible') && (!regex.test(value) || (value == placeHolder))) {
                        noError = false;
                        $this.closest('.'+params.formInputClass).addClass(params.formShowErrorClass);
                        if (onFocus) {
                            $this.focus();
                            onFocus = false;
                        }
                    } else {
                        $this.closest('.'+params.formInputClass).removeClass(params.formShowErrorClass);
                    }
                }

                if (mask == 'opt-email') {
                    regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if(value != ''){
                        if (!regex.test(value) || (value == placeHolder)) {
                            noError = false;
                            $this.closest('.'+params.formInputClass).addClass(params.formShowErrorClass);
                            if (onFocus) {
                                $this.focus();
                                onFocus = false;
                            }
                        } else {
                            $this.closest('.'+params.formInputClass).removeClass(params.formShowErrorClass);
                        }
                    } else {
                        $this.closest('.'+params.formInputClass).removeClass(params.formShowErrorClass);
                    }
                }

                if (mask == 'file') {
                    var parts = $(this).val().split('.');
                    if (parts==""){
                        noError = false;
                        $this.closest('.'+params.formInputClass).addClass(params.formShowErrorClass);
                        if (onFocus) {
                            $this.focus();
                            onFocus = false;
                        }
                    }
                    else {
                        $this.closest('.'+params.formInputClass).removeClass(params.formShowErrorClass);
                    }
                }

                if (mask == 'checkbox') {
                    if ($this.is(':visible') && (!$this.is(':checked'))) {
                        noError = false;
                        $this.closest('.'+params.formCheckboxClass).addClass(params.formShowErrorClass);
                    } else {
                        $this.closest('.'+params.formCheckboxClass).removeClass(params.formShowErrorClass);
                    }
                }

                if (mask == 'vacancy-file-link') {

                    var $thisGroup = $('['+params.formValidationAttr+'="vacancy-file-link"]:visible');

                    if ($thisGroup.length === 0) { return true; }

                    $thisGroup.each(function(i,e){
                        if ($(e).val().length > 0) { subError = false; }
                    });

                    if (subError) {
                        noError = false;
                        $thisGroup.closest('.'+params.formInputClass).addClass(params.formShowErrorClass);
                    } else {
                        $thisGroup.closest('.'+params.formInputClass).removeClass(params.formShowErrorClass);
                    }

                }

            });

            return noError;
        }


        // add mask

        $submitBtn.closest('form').find('[data-mask]').each(function(i,thisForm){
            var $thisForm = $(thisForm);
            var thisMask = $thisForm.attr('data-mask');
            if (thisMask=="phone") { $thisForm.addClass('state-with-mask').mask("+7 (999) 999 99 99", {placeholder:"–"}); }
        });
    },
    'mobileMenu': function(){
        if(window.innerWidth < 941){

            var hash = window.location.hash,
                page_index = 0;

            if(hash != ''){
                $('.menu-list .menu-item').each(function(ind, elt){
                    if(hash == $(elt).find('a').attr('href')){
                        page_index = $(elt).find('a').attr('data-index');
                        return;
                    }
                });

                var $section = $('.page' + page_index),
                    topPositionSection = $section.offset().top - 66;

                setTimeout(function(){
                    $('html,body').animate({'scrollTop': topPositionSection}, 500);
                }, 500);
            }

            $('.menu-link').on('click', function(e){
                e.preventDefault();

                $('.menu-item').removeClass('active');
                $(this).parent('.menu-item').addClass('active');

                var url = $(this).attr('href');

                if(history.replaceState){
                    var href = window.location.href.substr(0,window.location.href.indexOf('#')) + url;
                    history.pushState( {}, document.title, href );
                }

                var $section = $('.page' + $(this).attr('data-index'));
                // console.log($(this).attr('data-index'));
                var topPositionSection = $section.offset().top - 66;

                $('html,body').animate({'scrollTop': topPositionSection}, 500);

            })
        }
    }
};


$(document).ready(function(){
    // init globals
    $window = $(window);
    $document = $(document);
    $html = $('html');

    pageApp.init();
    moduleApp.init();

});


function initMap() {
    var uluru = {lat: 56.00926295, lng: 37.85537839};
    var markerIcon = "/dist/img/map-pin.png";

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru,
        mapTypeControl: false,
        fullscreenControl: false,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 13
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#144b53"
                    },
                    {
                        "lightness": 14
                    },
                    {
                        "weight": 1.4
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#315b94"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#315b94"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 5
                    },
                    {
                        "color": "#315b94"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#315b94"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#315b94"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#487bc2"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#487bc2"
                    },
                    {
                        "lightness": 25
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#487bc2"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#487bc2"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#487bc2"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#487bc2"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#2b4e7e"
                    }
                ]
            }
        ]
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: markerIcon,
    });
}


