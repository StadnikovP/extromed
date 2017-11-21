        </div>

        <div style="display: none;" class="js-form-sigh">
            <div class="sign-form-wrapper">
                <h2>Запись на приём</h2>
                <form action="">
                    <div class="form-input sign-form__name is-form-text">
                        <label>
                            <input type="text" name="name-user" data-validation="text" placeholder="Ваше имя">
                            <svg class="warning" version="1.1" width="15" height="15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 52 52">
                                <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"/>
                                <path d="M26,10c-0.552,0-1,0.447-1,1v22c0,0.553,0.448,1,1,1s1-0.447,1-1V11C27,10.447,26.552,10,26,10z"/>
                                <path d="M26,37c-0.552,0-1,0.447-1,1v2c0,0.553,0.448,1,1,1s1-0.447,1-1v-2C27,37.447,26.552,37,26,37z"/>
                            </svg>
                        </label>
                    </div>
                    <div class="form-input sign-form__phone is-form-text">
                        <label>
                            <input type="text" name="phone-user" data-mask="phone" data-validation="text" placeholder="Телефон">
                            <svg class="warning" version="1.1" width="15" height="15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 52 52">
                                <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"/>
                                <path d="M26,10c-0.552,0-1,0.447-1,1v22c0,0.553,0.448,1,1,1s1-0.447,1-1V11C27,10.447,26.552,10,26,10z"/>
                                <path d="M26,37c-0.552,0-1,0.447-1,1v2c0,0.553,0.448,1,1,1s1-0.447,1-1v-2C27,37.447,26.552,37,26,37z"/>
                            </svg>
                        </label>
                    </div>
                    <div class="form-input sign-form__date is-form-text">
                        <label>
                            <input type="text" name="date" placeholder="Желаемая дата" data-validation="text" >
                            <svg class="warning" version="1.1" width="15" height="15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 52 52">
                                <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"/>
                                <path d="M26,10c-0.552,0-1,0.447-1,1v22c0,0.553,0.448,1,1,1s1-0.447,1-1V11C27,10.447,26.552,10,26,10z"/>
                                <path d="M26,37c-0.552,0-1,0.447-1,1v2c0,0.553,0.448,1,1,1s1-0.447,1-1v-2C27,37.447,26.552,37,26,37z"/>
                            </svg>
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
                            <option value="" selected>Выберите специалиста</option>
                            <option value="doctor1">Доктор1</option>
                            <option value="doctor2">Доктор2</option>
                            <option value="doctor3">Доктор3</option>
                        </select>
                    </div>

                    <button class="sign-form__button js-fb-submit">Записаться</button>
                </form>
            </div>
        </div>
        <script src="/dist/main.js"></script>
<!--        <script src="/src/js/vendors/swiper3.js"></script>-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pagePiling.js/1.5.4/jquery.pagepiling.js"></script>
<!--        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.nanoscroller/0.8.7/javascripts/jquery.nanoscroller.js"></script>-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.js"></script>
        <script src="/src/js/vendors/jquery.onepage-scroll.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCp7kS4HQCuet6Z_hT6EZ_QMAat5uE8kUw&callback=initMap"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>

    </body>
</html>
