let $window, $document, $html;


let pageApp = {
    'init': function(){
        let $thisApp = $('#app');
        let curApp = $thisApp.attr('data-app');
        this.globalPollifil();
        if (pageApp[curApp]) { pageApp[curApp]($thisApp); }
    },
    'page-address':function($thisApp){
        let $mapPlace = $thisApp.find('[data-target="ymap"]');
        ymaps.ready(function() {

            let mapLat = 55.751244;
            let mapLng = 37.618423;
            let mapZoom = 16;

            let map = new ymaps.Map($mapPlace[0], {
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

            let marker = new ymaps.Placemark(map.getCenter(), {

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
                    let self = this;

                    function update(fn) {
                        return function(value) {
                            let classes = self.className.split(/\s+/);
                            let index = classes.indexOf(value);

                            fn(classes, index, value);
                            self.className = classes.join(' ');
                        };
                    }

                    let ret = {
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
            let lastTime = 0;
            let vendors = ['ms', 'moz', 'webkit', 'o'];
            for(let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
                window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                    || window[vendors[x]+'CancelRequestAnimationFrame'];
            }

            if (!window.requestAnimationFrame)
                window.requestAnimationFrame = function(callback, element) {
                    let currTime = new Date().getTime();
                    let timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    let id = window.setTimeout(function() { callback(currTime + timeToCall); },
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

let moduleApp = {
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

    },
    'executeModules':function(){
        $('[data-is]').each(function(i,thisModule){
            let $thisModule = $(thisModule);
            let thisModuleName = $thisModule.attr('data-is');
            if(moduleApp[thisModuleName]) { moduleApp[thisModuleName]($thisModule); }
        });
    },
    'executeSFX':function(){
        if (appConfig.mobileVersion || device.tablet()) { return false; }
        $('[data-sfx]').each(function(i,thisModule){
            let $thisModule = $(thisModule);
            let thisModuleName = $thisModule.attr('data-sfx');
            if(moduleApp.SFXModules[thisModuleName]) { moduleApp.SFXModules[thisModuleName]($thisModule); }
        });
    },
    'globalActions':function(){

        //tabs
        $('.js-tabs-controls').on('click', function(e){
            e.preventDefault();

            let $this = $(this),
                $item = $this.closest('.tabs-controls-item'),
                $parent = $this.closest('.js-tabs-wrapper'),
                $contentItem = $parent.find('.js-tabs-item'),
                itemNumber = $item.index();

            $contentItem.eq(itemNumber)
                .add($item)
                .addClass('active')
                .siblings()
                .removeClass('active');

            let $perent = $this.parents('.window-direction');
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

            let
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


        //button menu
        $('.js-m-btn-menu').on('click', function(e){
           e.preventDefault();

           let $this = $(this);

            $this.toggleClass('active');

            $('body').toggleClass('openMenu');
        });

        //init menu section
        $('#myMenu .menu-link').on('click', function(){
            $('body').toggleClass('openMenu');
            $('.js-m-btn-menu').toggleClass('active');
        });

        //pop-up form sign
        $('.js-sign').on('click', function(){
            let template = $('.js-form-sigh').html();
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
                    // let $thisFancy = $('.fancybox-inner');
                    //
                    // let $thisChosen = $thisFancy.find('[data-is="chosen"]');
                    // moduleApp.chosen($thisChosen);
                    //
                    // let $cityTarget = $thisFancy.find('.js-fb-city-target');
                    //
                    // $thisFancy.find('.js-fb-city-action').on('change',function(){
                    //     let action = !!($(this).find('option:selected').attr('data-city'));
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
                    // let $thisSubmit = $thisFancy.find('.js-fb-submit');
                    // moduleApp.formValidation($thisSubmit);
                    //
                    //

                }
            });
        });


        //hover element price
        $('.js-item-element').hover(function () {
            let $this = $(this),
                $parent = $this.parents('.price-list'),
                $allElements = $parent.find('.js-item-element');

            $allElements.toggleClass('disabled');
            $this.toggleClass('disabled').toggleClass('active');

        });


        $('.js-certificates').on('click', function(){
            let updateSize = true;
            let $this = $(this),
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
        }
    },
    'resizeLogo': function(){
        if($(document).width() < 900){
            $('.logo svg').attr('viewBox', '0 0 47 44');
            $('.mCustomScrollbar').attr('class', '');
        }
        else{
            $('.logo svg').attr('viewBox', '0 0 248 44');
        }
    },
    'pagePilingInit': function(){
        let $listSection = $('.main section');
        let configTime = {
                delay: 1550,
                animationTime: 500,
                delayNextPage: 1550
            };


        startAnimation(1);

        $(".main").onepage_scroll({
            sectionContainer: "section",
            responsiveFallback: 1000,
            loop: false,
            animationTime: configTime.animationTime,
            delay: configTime.delay,
            updateURL: true,
            beforeMove: function(index){
                console.log('before ' + index);
                // $listSection.eq(index-1).removeClass('active-animate')
                // $listSection.eq(index-1).addClass('disabled-animate');

                // startAnimation(index);

            },
            afterMove: function(index){
                // console.log('after ' + index);
                // $listSection.eq(index-1).removeClass('disabled-animate')
                // $listSection.eq(index-1).addClass('active-animate');
            },
            customMove: function(index){
                // console.log('custom ' + index);
            },
            moveUp: function(index, next){
                // animation(index, next);
                animationRouterUp(index, next);
            },
            moveDown: function(index, next){
                // animation(index, next);
                animationRouterDown(index, next);
            }
        });

        function startAnimation(index){
            $listSection.eq(index-1).addClass('active-page');
            let $list1 = $listSection.eq(index-1).find('.js-white-list');
            let $list2 = $listSection.eq(index-1).find('.js-white-list2');
            let sequenceTimeline = new TimelineLite();

            // console.log($listSection.eq(index-1));
            sequenceTimeline
                .to($list2, 1, {x:"100%"})
                .to($list1, 1, {x:"100%"}, "-=.5")
        }

        let directionCountIndex = 0;
        let directionCountNext = 0;

        function animationRouterDown(index, next){

            let tl = new TimelineLite();
            // console.log($listSection.eq(index-1));
            //.add(TweenLite.set($listSection.eq(index-1), {'z-index':0}))
            //.add(TweenLite.set($listSection.eq(index-1), {'z-index':0}))

            switch(next) {
                case 1:
                    tl.add(hideChoicePage).add(showMainPage);
                    break;
                case 2:
                    tl.add(hideMainPage).add(showChoicePage);
                    break;
                case 3:
                    directionCountNext = next;
                    tl.add(hideChoicePage).add(showDirectionPage);
                    break;
                case 4:
                case 5:
                case 6:
                case 7:
                    directionCountIndex = index;
                    directionCountNext = next;
                    tl.add(hideDirectionPage).add(showDirectionPage);
                    break;
                case 8:
                    directionCountIndex = index;
                    tl.add(hideDirectionPage).add(showExpertsPage);
                    break;
                case 9:
                    tl.add(hideExpertsPage).add(showReviewsPage);
                    break;
                case 10:
                    tl.add(hideReviewsPage).add(showStockPage);
                    break;
                case 11:
                    tl.add(hideStockPage).add(showContactsPage);
                    break;
                case 'menu':
                    break;
                default:
                    break;
            }
        }

        function animationRouterUp(index, next){

            let tl = new TimelineLite();
            // console.log($listSection.eq(index-1));
            //.add(TweenLite.set($listSection.eq(index-1), {'z-index':0}))
            //.add(TweenLite.set($listSection.eq(index-1), {'z-index':0}))
            console.log(next);
            switch(next) {
                case 1:
                    tl.add(hideChoicePage).add(showMainPage);
                    break;
                case 2:
                    directionCountIndex = index;
                    tl.add(hideDirectionPage).add(showChoicePage);
                    break;
                case 3:
                case 4:
                case 5:
                case 6:
                    directionCountIndex = index;
                    directionCountNext = next;
                    tl.add(hideDirectionPage).add(showDirectionPage);
                    break;
                case 7:
                    directionCountIndex = index;
                    directionCountNext = next;
                    tl.add(hideExpertsPage).add(showDirectionPage);
                    break;
                case 8:
                    tl.add(hideReviewsPage).add(showExpertsPage);
                    break;
                case 9:
                    tl.add(hideStockPage).add(showReviewsPage);
                    break;
                case 10:
                    tl.add(hideContactsPage).add(showStockPage);
                    break;
                case 11:
                    break;
                case 'menu':
                    break;
                default:
                    break;
            }
        }

        let sequenceTimeline = new TimelineLite();

        function showMainPage(index, next){
            let $indexPage = $listSection.eq(0),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');

            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();

            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
        }

        function hideMainPage(index, next){
            let $indexPage = $listSection.eq(0),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');

            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();

            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
        }

        function showChoicePage(index){
            let $indexPage = $listSection.eq(1),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
        }
        function hideChoicePage(index){
            let $indexPage = $listSection.eq(1),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
        }

        function showDirectionPage(index){
            console.log(directionCountNext);
            let $indexPage = $listSection.eq(directionCountNext-1),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            // console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
        }
        function hideDirectionPage(index){

            let $indexPage = $listSection.eq(directionCountIndex-1),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            // console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
        }

        function showExpertsPage(index){
            let $indexPage = $listSection.eq(7),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
        }
        function hideExpertsPage(index){
            let $indexPage = $listSection.eq(7),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');

            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
        }

        function showReviewsPage(index){
            let $indexPage = $listSection.eq(8),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
        }
        function hideReviewsPage(index){
            let $indexPage = $listSection.eq(8),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
        }

        function showStockPage(index){
            let $indexPage = $listSection.eq(9),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
        }
        function hideStockPage(index){
            let $indexPage = $listSection.eq(9),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
        }

        function showContactsPage(index){
            let $indexPage = $listSection.eq(10),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($indexPage, {'z-index':50})
                .set($list1Index, {x:'0%'})
                .set($list2Index, {x:'0%'})
                .to($list2Index, .7, {x:'100%'})
                .to($list1Index, .7, {x:'100%'}, "-=.3")
        }
        function hideContactsPage(index){
            let $indexPage = $listSection.eq(10),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2');
            console.log($indexPage);
            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
        }




        function animation(index, next){
            let $indexPage = $listSection.eq(index-1),
                $nextPage = $listSection.eq(next-1),
                $list1Index = $indexPage.find('.js-white-list'),
                $list2Index = $indexPage.find('.js-white-list2'),
                $list1Next = $nextPage.find('.js-white-list'),
                $list2Next = $nextPage.find('.js-white-list2');

            let sequenceTimeline2 = new TimelineLite();
            sequenceTimeline2
                .set($list1Index, {x:'-100%'})
                .set($list2Index, {x:'-100%'})
                .to($list1Index, .7, {x:'0%'})
                .to($list2Index, .7, {x:'0%'}, "-=.3")
                .set($indexPage, {'z-index':0})
                .set($nextPage, {'z-index':50})
                .to($list2Next, .5, {x:'100%'})
                .to($list1Next, .5, {x:'100%'}, "-=.2");
        }

        // function startAnimation(index){};
        function showPage(index){};
        function hidePage(index){};

    },
    'initSlider': function(update){
        let configSlideChoice = {
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

        let mySwiper = new Swiper('.js-slider-choice', configSlideChoice);

        mySwiper.on('slideChange', function () {
            removeProgressSlide();
            addProgressSlide();
        });

        mySwiper.on('slideChangeTransitionStart', function () {
            animationProgreeBar();
        });

        function addProgressSlide(){
            let progressBar = '<div class="js-progress progress-bar-slider"></div>';
            $('.js-slider-choice').append(progressBar);
        }

        function removeProgressSlide(){
            $('.js-slider-choice .js-progress').remove();
        }

        function animationProgreeBar(){
            $('.js-slider-choice .js-progress').addClass('animation-progress');
        }



        let configSliderExperts = {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            navigation: {
                nextEl: '.js-next-experts',
                prevEl: '.js-prev-experts',
            },
            simulateTouch: false
        };

        let configSliderExpertsContent = {
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
        };


        let expertsSwiper = new Swiper('.js-slider-experts', configSliderExperts);
        let expertsContentSwiper = new Swiper('.js-slider-experts-content', configSliderExpertsContent);

        if(update){
            expertsContentSwiper.updateSize();
        }


        let configSliderReviews = {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            navigation: {
                nextEl: '.js-next-reviews',
                prevEl: '.js-prev-reviews',
            },
            simulateTouch: false
        };

        let configSliderReviewsContent = {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            autoHeight: true,
            navigation: {
                nextEl: '.js-next-reviews',
                prevEl: '.js-prev-reviews',
            },
        };

        let reviewsSwiper = new Swiper('.js-slider-reviews', configSliderReviews);
        let reviewsContentSwiper = new Swiper('.js-slider-reviews-content', configSliderReviewsContent);


    },
    'toolsGlobalSubscribe':function($thisModule){
        $document.on('click','.ts-submit',function(e){
            e.preventDefault();
            let $this = $(this);
            let $parent =  $this.closest('.is-tools-subscribe');
            let $thisInput = $parent.find('.ts-input');
            let regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


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
            let $this = $(this);
            let noProgress = false;

            let href = $this.attr('href');
            let targetBlank = $this.attr('target') || false;
            let inSwiper = $this.closest('.swiper-container').length;
            let downloadAttr = $this.attr('download');
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
            let template = '<div class="fb-modal-default">';
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
            let gfxFromLeft = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-translatex':'-40'
            };

            let gfxFromRight = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-translatex':'40'
            };

            $thisModule.find('.lt-column-left .lt-tile').addClass('scrollme animateme').attr(gfxFromLeft);
            $thisModule.find('.lt-column-right .lt-tile').addClass('scrollme animateme').attr(gfxFromRight);
        },
        'sfx-b':function($thisModule){
            let gfxFromLeft = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-translatex':'-40'
            };

            let gfxFormRight = {
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
            let gfxFromRight = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-translatex':'40'
            };

            $thisModule.addClass('scrollme animateme').attr(gfxFromRight);
        },
        'sfx-d':function($thisModule){
            return false;
            let gfxFromLeft = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-translatex':'-40'
            };

            let gfxFormRight = {
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

            let gfxFromLeft = {
                'data-when':'enter',
                'data-from':'.8',
                'data-to':'0',
                'data-opacity':'0'
            };
            $thisModule.find('.hc-year-box').addClass('scrollme animateme').attr(gfxFromLeft);
        }
    },
    'formValidation': function ($submitBtn, submitFunction) {

        let params = {
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
            let $this = $(this);
            if ($this.hasClass(params.submitDisabledClass) || $this.hasClass(params.submitProgressClass)) {
                return false;
            }
            let $form = $this.closest('form');
            let $forms = $form.find('['+params.formValidationAttr+']');
            let result = formChecking($forms, true);
            if (result) {
                if (submitFunction) {
                    submitFunction($form);
                } else {
                    $this.addClass(params.submitProgressClass);
                    $form.submit();
                }
            } else {
                $forms.on('keyup keypress change', function(){
                    let $current = $(this);
                    setTimeout(function(){ formChecking($current); }, 50);
                });
            }
            return false;
        });

        $(document).on('keydown', function (e) {
            return true;
            if (e.keyCode == 13) {
                let $thisFocus = $(document.activeElement);
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

            let noError = true;

            $inp.each(function (ind, elm) {
                let $this = $(elm);

                let mask = $this.attr(params.formValidationAttr);
                let value = $this.val();
                let placeHolder = $this.attr('placeholder');
                let regex;
                let subError = true;

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
                    let parts = $(this).val().split('.');
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

                    let $thisGroup = $('['+params.formValidationAttr+'="vacancy-file-link"]:visible');

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
            let $thisForm = $(thisForm);
            let thisMask = $thisForm.attr('data-mask');
            if (thisMask=="phone") { $thisForm.addClass('state-with-mask').mask("+7 (999) 999 99 99", {placeholder:"–"}); }
        });
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
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru,
        mapTypeControl: false,
        fullscreenControl: false,
        // rotateControl: false,
        // streetViewControl: false,
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
        map: map
    });
}


