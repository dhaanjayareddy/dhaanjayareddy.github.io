(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-us-contact-us-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- wrapper -->\n<div class=\"wrapper\" id=\"contact-us\">\n    <!-- about-me-intro -->\n    <section class=\"section bg-parallax page-intro text-center\" data-background=\"assets/images/contact-locations.jpg\">\n        <div class=\"bg-overlay\" style=\"opacity: 0.3\"></div>\n        <div class=\"container\">\n            <h1>CONTACT US</h1>\n            <h3>RELY ON US FOR YOUR FUTURE</h3>\n        </div>\n    </section>\n    <!-- icon-box -->\n    <section class=\"section section-form section-form-reserve section-contact-form-2\">\n        <div class=\"container\">\n            <div class=\"section-form-header text-center\">\n                <div class=\"section-form-header-icon\">\n                    <i class=\"dslc-icon dslc-icon-as-globe\"></i>\n                </div>\n                <h3>\n                    Nexgile is a Great Support\n                </h3>\n                <p>\n                    \"We're here to help you with a great team\"\n                </p>\n                <div class=\"divider divider-line-heading divider-fullwidth\">\n                    <div class=\"line-middle\"></div>\n                </div>\n            </div>\n            <div class=\"section-form-content\">\n                <div class=\"col-md-12 icon-box-area\" style=\"float: none !important;\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <div id=\"card-india\" class=\"icon-box-type-7 clearfix address-card-outer\">\n                                <div class=\"icon-box-header address-card-icon\">\n                                    <div class=\"icon-box-icon address-card-icon-box\">\n                                        <i class=\"dslc-icon dslc-icon-as-location\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"icon-box-content address-card-content\">\n                                    <h3>\n                                        INDIA\n                                    </h3>\n                                    <p>4th Floor, Tower B, Win Win Towers, <br>JNTU-Hi-Tech City Main Road, Hi-Tech City, <br>Madhapur, Hyderabad, Telangana - 500081, INDIA</p>\n                                    <p>Phone: +91 40 2970 2266</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div id=\"card-usa\" class=\"icon-box-type-7 clearfix address-card-outer\">\n                                <div class=\"icon-box-header address-card-icon\">\n                                    <div class=\"icon-box-icon address-card-icon-box\">\n                                        <i class=\"dslc-icon dslc-icon-as-paperplane\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"icon-box-content address-card-content\">\n                                    <h3>\n                                        USA\n                                    </h3>\n                                    <p>215 Fourier Ave # 140, Fremont, <br>CA 94587, USA</p>\n                                    <p>Phone: +1 218 499 9906 <br> Phone: +1 415 992 7668</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div id=\"card-aus\" class=\"icon-box-type-7 clearfix address-card-outer\">\n                                <div class=\"icon-box-header address-card-icon\">\n                                    <div class=\"icon-box-icon address-card-icon-box\">\n                                        <i class=\"glyphicon glyphicon-pushpin\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"icon-box-content address-card-content\">\n                                    <h3>\n                                        Australia\n                                    </h3>\n                                    <p>2/13-17, Llewellyn Street, <br>Rhodes NSW-2138, Australia</p>\n                                    <p>Phone: +61 406953563 </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div id=\"form-messages\"></div>\n                <form id=\"contact-us-form\" (submit)=\"sendClientContactInfo($event)\" class=\"monalisa-form monalisa\">\n                    <div class=\"row\">\n                        <div class=\"card aling-padding card-getintouch-style mt-4 col-xs-12 col-sm-6 col-md-6\">\n                            <div style=\"width: 75%\">\n                                <p class=\"head text-left\">Get In Touch</p>\n                            </div>\n\n                            <div class=\"input-group\" style=\"width: 75%;\">\n                                <input (change)=\"onInputValueChange('inputName')\" type=\"text\" class=\"form-control added-Style radious_zero\" required id=\"inputName\">\n                                <label style=\"left: 7px;z-index:9;\" class=\"input-pop-label\" id=\"labelinputName\" for=\"exampleInputName\">Name</label>\n                            </div>\n\n                            <div class=\"input-group\" style=\"width: 75%;\">\n                                <input (change)=\"onInputValueChange('inputReachEmail')\" type=\"text\" class=\"form-control added-Style radious_zero\" required id=\"inputReachEmail\">\n                                <label style=\"left: 7px;z-index:9;\" class=\"input-pop-label\" id=\"labelinputReachEmail\" for=\"exampleInputEmail\">Email</label>\n                            </div>\n\n                            <div class=\"input-group\" style=\"width: 75%;\">\n                                <input (change)=\"onInputValueChange('inputSubject')\" type=\"text\" class=\"form-control added-Style radious_zero\" required id=\"inputSubject\">\n                                <label style=\"left: 7px;z-index:9;\" class=\"input-pop-label\" id=\"labelinputSubject\" for=\"exampleInputSubject\">Subject</label>\n                            </div>\n\n                            <div style=\"width: 75% !important;\">\n                                <fieldset class=\"form-group \">\n                                    <textarea style=\"padding-top: 10px;padding-left: 30px;width: 100% !important;height: auto;\" (change)=\"onInputValueChange('inputDescription')\" rows=\"3\" type=\"text\" class=\"form-control added-Style radious_zero\" required id=\"inputDescription\"></textarea>\n                                    <label style=\"left: 7px;\" class=\"input-pop-label\" id=\"labelinputDescription\" for=\"exampleInputDescription\">Description</label>\n                                </fieldset>\n                            </div>\n                            <div class=\"submit-button-container text-left\">\n                                <button class=\"submit-button btn btn-warning btn-lg btn-black\">\n                                    Submit\n                                </button>\n                            </div>\n                            <div *ngIf=\"showContactProgressBar\" class=\"row pl-0 ml-0 progress-bar-contaier\">\n                                <div class=\"progress-div container align-self-center\">\n                                    <div class=\"progress mx-5\" style=\"height: 3rem;\">\n                                        <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-xs-12 col-sm-6 col-md-6 pt-4\">\n\n                            <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.021347918228!2d78.38364401527112!3d17.458692305339003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb917d15a9816d%3A0xe9880ad379f4749c!2sNexgile+Technologies+(Nexgile)!5e0!3m2!1sen!2sin!4v1523874917045\"\n                                width=\"45\" height=\"465\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </section>\n</div>\n<!-- /wrapper -->"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-style {\n    margin-top: 0px !important;\n    font-family: \"Roboto\", \"Arial\", sans-serif;\n    font-size: 22px;\n    line-height: 44px;\n    /* font-weight: 600 !important; */\n    letter-spacing: -1px;\n    /* padding: 0px 0px !important; */\n    padding-top: 20px;\n    letter-spacing: normal;\n    padding-left: 0px !important;\n    text-transform: uppercase;\n    margin-right: 10px;\n    width: auto;\n    margin-bottom: 0px !important;\n}\n\n.input-group {\n    padding-bottom: 20px;\n}\n\nfieldset.form-group {\n    position: relative;\n    padding-bottom: 20px;\n}\n\n.radious_zero {\n    border-radius: 0px !important;\n}\n\n.added-Style {\n    height: 35px;\n    font-size: 15px;\n    border: 1px solid #d1d2d3;\n    padding-left: 7px !important;\n}\n\n.contact-us-input {\n    border: none;\n    color: #f15a29 !important;\n    height: 35px;\n    width: 75%;\n    /* border-radius: 10px; */\n    background-color: #fff;\n    font-size: 16px;\n    padding-left: 5px;\n    border: 1px solid #d3d3d3;\n}\n\n.contact-us-textarea {\n    border: none;\n    color: #f15a29;\n    height: auto;\n    width: 75%;\n    border-radius: 10px;\n    background-color: #fff;\n    font-size: 16px;\n    padding-left: 5px;\n    border: 1px solid #d3d3d3;\n}\n\ntextarea {\n    border-color: #f15a29;\n    color: #f15a29;\n    border: 1px solid #f15a29;\n    padding-left: 5px;\n    width: 60%;\n}\n\n::-webkit-input-placeholder {\n    color: silver;\n}\n\n::-moz-placeholder {\n    color: silver;\n}\n\n::-ms-input-placeholder {\n    color: silver;\n}\n\n::placeholder {\n    color: silver;\n}\n\n.reach-us-contact-info {\n    margin-top: 15px;\n    border: 2px solid silver;\n    border-radius: 2px;\n}\n\n.head {\n    font-size: 25px;\n    font-family: \"Roboto\", sans-serif;\n    font-weight: 600;\n    margin-bottom: 20px;\n}\n\n.info-label {\n    font-weight: 500 !important;\n    margin-right: 5px;\n    /* padding: 8px; */\n}\n\n.desc-label {\n    font-weight: 500 !important;\n    margin-top: 1px !important;\n    vertical-align: 35px;\n    margin-right: 5px;\n}\n\n.submit-button {\n    font-weight: 600;\n    padding: 7px;\n    height: 42px;\n    width: 109px;\n    color: white;\n    background: linear-gradient(60deg, #f15a29, #fb8c00);\n    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4);\n}\n\n.card-getintouch-style {\n    /* #eff0f1; */\n    background: #f5f6f7;\n    align-items: center;\n    text-align: center;\n    /* border: none; */\n    border-radius: none;\n}\n\n.submit-button-container {\n    padding-bottom: 15px;\n    padding-top: 20px;\n    width: 75%;\n}\n\n.progress-bar-contaier {\n    height: 100%;                         \n    position: absolute;\n    width: 100%;\n    background-color: #f5f6f7;\n    z-index: 9\n}\n\n@media (max-width: 768px) {\n    .aling-padding {\n        margin: 15px;\n    }\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ntextarea:-webkit-autofill,\ntextarea:-webkit-autofill:hover,\ntextarea:-webkit-autofill:focus,\nselect:-webkit-autofill,\nselect:-webkit-autofill:hover,\nselect:-webkit-autofill:focus {\n    box-shadow: 0 0 0px 1000px white inset;\n    transition: background-color 5000s ease-in-out 0s;\n}\n\n.address-card-outer {\n    padding: 18px;\n    border-radius: 2px;\n    box-shadow: 0.5px 0.5px 5px #4c4c4c;\n    height: auto;\n    min-height: 325px !important;\n    margin-top: 20px;\n}\n\n.address-card-icon {\n    margin-top: -70px;\n}\n\n.address-card-content {\n    margin-top: 50px !important;\n    left: 0px !important;\n    float: none !important;\n    padding-left: 25px;\n}\n\n.address-card-icon-box {\n    background: linear-gradient(60deg, #f15a29, #fb8c00);\n}\n\n/* form lable styles */\n\n.lable-top-aling {\n    color: #F15A29;\n    top: -.9rem !important;\n    font-weight: 600 !important;\n    opacity: 1 !important;\n}\n\n.input-pop-label {\n    position: absolute;\n    top: 7px;\n    left: 1rem;\n    transition: all .3s ease-in-out;\n    cursor: text;\n    font-size: 14px;\n    font-family: \"Roboto\", sans-serif !important;\n    font-weight: 400;\n    opacity: 0.6;\n    margin-left: 0px;\n}\n\ninput:focus {\n    outline: none !important;\n    box-shadow: 0 0 4px #c1c1c1;\n}\n\n:focus+.input-pop-label {\n    color: #F15A29;\n    top: -.9rem;\n    background: inherit;\n    font-weight: 600;\n    opacity: 1;\n}\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child>.btn,\n.input-group-btn:first-child>.btn-group>.btn,\n.input-group-btn:first-child>.dropdown-toggle,\n.input-group-btn:last-child>.btn-group:not(:last-child)>.btn,\n.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle) {\n    border-top-right-radius: none !important;\n    border-bottom-right-radius: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsMENBQTBDO0lBQzFDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFGQTtJQUNJLGFBQWE7QUFDakI7O0FBRkE7SUFDSSxhQUFhO0FBQ2pCOztBQUZBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLG9EQUFvRDtJQUNwRCxvRkFBb0Y7QUFDeEY7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTs7Ozs7Ozs7O0lBVUksc0NBQXNDO0lBQ3RDLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0RBQW9EO0FBQ3hEOztBQUdBLHNCQUFzQjs7QUFFdEI7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDViwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGVBQWU7SUFDZiw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMkJBQTJCO0FBQy9COztBQUVDO0lBQ0csY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTs7Ozs7OztJQU9JLHdDQUF3QztJQUN4QywyQ0FBMkM7QUFDL0MiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1zdHlsZSB7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgLyogZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50OyAqL1xuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgIC8qIHBhZGRpbmc6IDBweCAwcHggIWltcG9ydGFudDsgKi9cbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dC1ncm91cCB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmZpZWxkc2V0LmZvcm0tZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnJhZGlvdXNfemVybyB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hZGRlZC1TdHlsZSB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMmQzO1xuICAgIHBhZGRpbmctbGVmdDogN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWN0LXVzLWlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICNmMTVhMjkgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDc1JTtcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XG59XG5cbi5jb250YWN0LXVzLXRleHRhcmVhIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICNmMTVhMjk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjE1YTI5O1xuICAgIGNvbG9yOiAjZjE1YTI5O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMTVhMjk7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgd2lkdGg6IDYwJTtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHNpbHZlcjtcbn1cblxuLnJlYWNoLXVzLWNvbnRhY3QtaW5mbyB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBzaWx2ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uaGVhZCB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmluZm8tbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAvKiBwYWRkaW5nOiA4cHg7ICovXG59XG5cbi5kZXNjLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMXB4ICFpbXBvcnRhbnQ7XG4gICAgdmVydGljYWwtYWxpZ246IDM1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgd2lkdGg6IDEwOXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNmMTVhMjksICNmYjhjMDApO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYSgyNTUsIDE1MiwgMCwgMC40KTtcbn1cblxuLmNhcmQtZ2V0aW50b3VjaC1zdHlsZSB7XG4gICAgLyogI2VmZjBmMTsgKi9cbiAgICBiYWNrZ3JvdW5kOiAjZjVmNmY3O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIGJvcmRlcjogbm9uZTsgKi9cbiAgICBib3JkZXItcmFkaXVzOiBub25lO1xufVxuXG4uc3VibWl0LWJ1dHRvbi1jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHdpZHRoOiA3NSU7XG59XG5cbi5wcm9ncmVzcy1iYXItY29udGFpZXIge1xuICAgIGhlaWdodDogMTAwJTsgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjc7XG4gICAgei1pbmRleDogOVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuYWxpbmctcGFkZGluZyB7XG4gICAgICAgIG1hcmdpbjogMTVweDtcbiAgICB9XG59XG5cbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxcbnRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGwsXG50ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxudGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxcbnNlbGVjdDotd2Via2l0LWF1dG9maWxsLFxuc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG5zZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMHB4IDEwMDBweCB3aGl0ZSBpbnNldDtcbiAgICBib3gtc2hhZG93OiAwIDAgMHB4IDEwMDBweCB3aGl0ZSBpbnNldDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzO1xufVxuXG4uYWRkcmVzcy1jYXJkLW91dGVyIHtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiAwLjVweCAwLjVweCA1cHggIzRjNGM0YztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogMzI1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYWRkcmVzcy1jYXJkLWljb24ge1xuICAgIG1hcmdpbi10b3A6IC03MHB4O1xufVxuXG4uYWRkcmVzcy1jYXJkLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDUwcHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbn1cblxuLmFkZHJlc3MtY2FyZC1pY29uLWJveCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjZjE1YTI5LCAjZmI4YzAwKTtcbn1cblxuXG4vKiBmb3JtIGxhYmxlIHN0eWxlcyAqL1xuXG4ubGFibGUtdG9wLWFsaW5nIHtcbiAgICBjb2xvcjogI0YxNUEyOTtcbiAgICB0b3A6IC0uOXJlbSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dC1wb3AtbGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDdweDtcbiAgICBsZWZ0OiAxcmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgY3Vyc29yOiB0ZXh0O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDRweCAjYzFjMWMxO1xufVxuXG4gOmZvY3VzKy5pbnB1dC1wb3AtbGFiZWwge1xuICAgIGNvbG9yOiAjRjE1QTI5O1xuICAgIHRvcDogLS45cmVtO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpmaXJzdC1jaGlsZCxcbi5pbnB1dC1ncm91cC1hZGRvbjpmaXJzdC1jaGlsZCxcbi5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQ+LmJ0bixcbi5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQ+LmJ0bi1ncm91cD4uYnRuLFxuLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZD4uZHJvcGRvd24tdG9nZ2xlLFxuLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkPi5idG4tZ3JvdXA6bm90KDpsYXN0LWNoaWxkKT4uYnRuLFxuLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkPi5idG46bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSkge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-service.service */ "./src/app/app-service.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);






let ContactUsComponent = class ContactUsComponent {
    constructor(appService, cookieService) {
        this.appService = appService;
        this.cookieService = cookieService;
        this.showContactProgressBar = false;
        _utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].loadAllScripts();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            const height = jquery__WEBPACK_IMPORTED_MODULE_5__('#card-india').height();
            jquery__WEBPACK_IMPORTED_MODULE_5__('#card-usa').css('height', height);
            jquery__WEBPACK_IMPORTED_MODULE_5__('#card-aus').css('height', height);
        }, 200);
    }
    ngOnInit() {
        const browserName = this.getBrowserName();
        const elements = document.getElementsByClassName('contact-us-input');
        if (browserName === 'safari') {
            document.getElementById('name').style.height = '36px';
            document.getElementById('email').style.height = '36px';
            document.getElementById('subject').style.height = '36px';
        }
        jquery__WEBPACK_IMPORTED_MODULE_5__('#contact-us-form div.input-group label, #contact-us-form fieldset label').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).prev().focus();
        });
    }
    getBrowserName() {
        const agent = window.navigator.userAgent.toLowerCase();
        switch (true) {
            case agent.indexOf('edge') > -1:
                return 'edge';
            case agent.indexOf('opr') > -1 && !!window.opr:
                return 'opera';
            case agent.indexOf('chrome') > -1 && !!window.chrome:
                return 'chrome';
            case agent.indexOf('trident') > -1:
                return 'ie';
            case agent.indexOf('firefox') > -1:
                return 'firefox';
            case agent.indexOf('safari') > -1:
                return 'safari';
            default:
                return 'other';
        }
    }
    sendClientContactInfo(event) {
        this.showContactProgressBar = true;
        event.preventDefault();
        let guid = this.cookieService.get('uuid');
        if (!guid) {
            guid = '';
        }
        const params = `guid=${guid}&contactName=${event.target[0].value}&contactEmail=${event.target[1].value}
                    &subject=${event.target[2].value}&message=${event.target[4].value}`;
        this.appService.postContactInfo(params).subscribe(res => {
            setTimeout(() => {
                this.showContactProgressBar = false;
            }, 2000);
            jquery__WEBPACK_IMPORTED_MODULE_5__('#contact-us-form').find('.lable-top-aling').removeClass('lable-top-aling');
            event.target.reset();
        }, err => {
            setTimeout(() => {
                this.showContactProgressBar = false;
            }, 2000);
            jquery__WEBPACK_IMPORTED_MODULE_5__('#contact-us-form').find('.lable-top-aling').removeClass('lable-top-aling');
            event.target.reset();
        });
    }
    onInputValueChange(inputId) {
        if (jquery__WEBPACK_IMPORTED_MODULE_5__(`#${inputId}`).val()) {
            document.getElementById(`label${inputId}`).classList.add('lable-top-aling');
        }
        else {
            document.getElementById(`label${inputId}`).classList.remove('lable-top-aling');
        }
    }
};
ContactUsComponent.ctorParameters = () => [
    { type: _app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html"),
        styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], ContactUsComponent);



/***/ }),

/***/ "./src/app/contact-us/contact-us.module.ts":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.module.ts ***!
  \*************************************************/
/*! exports provided: ContactUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





const routes = [
    { path: 'Reach-us', component: _contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"] }
];
let ContactUsModule = class ContactUsModule {
};
ContactUsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ]
    })
], ContactUsModule);



/***/ })

}]);
//# sourceMappingURL=contact-us-contact-us-module-es2015.js.map