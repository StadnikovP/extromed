        </div>

        <div style="display: none;" class="js-form-sigh">
            <div class="sign-form-wrapper">
                <h2>Запись на приём</h2>
                <form action="">
                    <div class="form-input sign-form__name">
                        <label>
                            <input type="text" name="name-user" placeholder="Ваше имя">
                        </label>
                    </div>
                    <div class="form-input sign-form__phone">
                        <label>
                            <input type="text" name="phone-user" placeholder="Телефон">
                        </label>
                    </div>
                    <div class="form-input sign-form__date">
                        <label>
                            <input type="text" name="date" placeholder="Желаемая дата">
                        </label>
                    </div>
                    <div class="form-select sign-form__time">
                        <select name="time" id="time" class="">
                            <option value="" selected>Удобное время</option>
                            <option value="1">8-00</option>
                            <option value="2">9-00</option>
                            <option value="3">10-00</option>
                        </select>
                    </div>
                    <div class="form-select sign-form__age">
                        <select name="age" class="">
                            <option value="Grown" selected>Взрослый</option>
                            <option value="child">Ребенок</option>
                        </select>
                    </div>
                    <div class="form-select sign-form__specialist">
                        <select name="specialist" class="">
                            <option value="" selected>Выберете специалиста</option>
                            <option value="doctor1">Доктор1</option>
                            <option value="doctor2">Доктор2</option>
                            <option value="doctor3">Доктор3</option>
                        </select>
                    </div>

                    <button class="sign-form__button">Записаться</button>
                </form>
            </div>
        </div>
        <script src="/dist/main.js"></script>
<!--        <script src="/src/js/vendors/swiper3.js"></script>-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pagePiling.js/1.5.4/jquery.pagepiling.js"></script>
<!--        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.nanoscroller/0.8.7/javascripts/jquery.nanoscroller.js"></script>-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.js"></script>
        <script src="/src/js/vendors/jquery.onepage-scroll.js"></script>
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCp7kS4HQCuet6Z_hT6EZ_QMAat5uE8kUw&callback=initMap"></script>

        <script>
//            $('.menu-link').on('click', function(){
//                var $this = $(this),
//                    url = $this.attr('href'),
//                    $section = $(url),
//                    topPositionSection = $section.offset().top;
//
//                $('.menu-item').removeClass('active');
//                $this.parent('div').addClass('active');
//
//                $('html,body').animate({'scrollTop': topPositionSection}, 500);
//            });
        </script>
        <script>
            $(document).ready(function(){

            });

        </script>
    </body>
</html>
