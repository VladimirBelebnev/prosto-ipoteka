AOS.init();

const toggleButtons = document.querySelectorAll(".question__open-section");
const hiddenSpoilers = document.querySelectorAll(".question__hidden-section");

// Modal Variables

const modalWindowFirst = document.querySelector(".modal-window_first");
const modalWindows = document.querySelectorAll(".modal-window");
const modalClose = document.querySelectorAll(".modal_close");
const dropDownModal = document.querySelector(".drop-down-modal");
const dropDownModalBtn = document.querySelector(".drop-down__btn");
const modalOpenButtons = Array.from(
    [document.querySelector(".home__btn"),
    ...Array.from(document.querySelectorAll(".product__btn-2"))]
);

const feedbackOpenBtn = document.querySelector(".home__achivement_marked");
const feedbackModal = document.querySelector(".modal-window_feedbacks");
const feedbackCloseBtn = document.querySelector(".modal_close-feedbacks");
const calculatorOpenBtns = document.querySelectorAll(".product__btn-1");
const calculatorCloseBtn = document.querySelector(".modal_close-calculator");
const calculatorModal = document.querySelector(".modal-window_calculator");
const tasksOpenBtn = document.querySelector(".footer__link_tasks");
const tasksCloseBtn = document.querySelector(".modal_close-tasks");
const tasksModal = document.querySelector(".modal-window_tasks");
const homeMessage = document.querySelector(".home__info-message");
const homeSkipBtn = document.querySelector(".info-message__skip_home");
const dropDownLinks = document.querySelectorAll(".drop-down-modal__link");
const selectInputButtons = document.querySelectorAll(".select-input__open-section");
const selectInputValues = document.querySelectorAll(".select-input__value");

// Tabs Variables

const tabButtons = document.querySelectorAll(".product__btn-1");
const tabButtons2 = document.querySelectorAll(".calculator__skip-btn");
const tabElements = document.querySelectorAll(".calculator");

// Functions

function toggleSpoilers(element) {
    element.classList.toggle("hidden");
}

function toggleArrow(arrow, cl) {
    arrow.classList.toggle(cl);
}

function tabToggle(clickedBtn, elements, buttons) {
    const clickedNum = Array.from(buttons).findIndex(
        (item) => item == clickedBtn
    );
    elements[clickedNum].classList.toggle("none");
    elements[clickedNum].parentNode.classList.toggle("mb");
    elements[clickedNum].parentNode.parentNode.classList.toggle("mb");

    //   console.log();
}

function openModal(modal) {
    modal.classList.remove("hidden");
}

function hiddenModal(modal) {
    modal.classList.add("hidden");
}


// Event Listeners

Array.from(dropDownLinks).forEach(item => {
    item.addEventListener("click", () => {
        hiddenModal(dropDownModal);
    });
});

homeSkipBtn?.addEventListener("click", (event) => {
    homeMessage?.classList.add("none");
    event.preventDefault();
});

feedbackOpenBtn?.addEventListener("click", (event) => {
    openModal(feedbackModal);
    event.preventDefault();
});

document.querySelector(".achivements-2__subtitle_link")?.addEventListener("click", (event) => {
    openModal(feedbackModal);
    event.preventDefault();
});

document.querySelector(".header__link_feedbacks")?.addEventListener("click", (event) => {
    openModal(feedbackModal);
    event.preventDefault();
});

document.querySelector(".drop-down-modal__link_feedbacks")?.addEventListener("click", (event) => {
    Array.from(modalWindows).forEach(item => item.classList.add("hidden"));
    openModal(feedbackModal);
    event.preventDefault();
});

feedbackCloseBtn?.addEventListener("click", (event) => {
    hiddenModal(feedbackModal);
    event.preventDefault();
});

calculatorOpenBtns?.forEach(item => {
    item.addEventListener("click", (event) => {
        openModal(calculatorModal);
        event.preventDefault();
    });
});

calculatorCloseBtn?.addEventListener("click", (event) => {
    hiddenModal(calculatorModal);
    event.preventDefault();
});

tasksOpenBtn?.addEventListener("click", (event) => {
    openModal(tasksModal);
    event.preventDefault();
});

tasksCloseBtn?.addEventListener("click", (event) => {
    hiddenModal(tasksModal);
    event.preventDefault();
});
toggleButtons?.forEach((item) => {
    item.addEventListener("click", (event) => {
        const clickedBtn = event.currentTarget;
        const toggleElement = clickedBtn.nextElementSibling;
        const arrow = clickedBtn.children[1].children[0];

        let content = clickedBtn.nextElementSibling;
        // console.log(clickedBtn.nextElementSibling)
        if (content.style.maxHeight) {
            //this is if the accordion is open
            content.style.maxHeight = null;
            content.classList.remove("is-open");
        } else {
            //if the accordion is currently closed
            content.style.maxHeight = content.scrollHeight + "px";
            content.classList.add("is-open");

            hiddenSpoilers.forEach((item) => {
                if (item != toggleElement) {
                    item.style.maxHeight = null;
                    item.previousElementSibling.children[1].children[0].classList.remove(
                        "question__btn-img_active"
                    );
                }
            });
            toggleSpoilers(toggleElement);
        }
        toggleArrow(arrow, "question__btn-img_active");
    });
});
modalOpenButtons?.forEach((item) => {
    item?.addEventListener("click", (event) => {
        modalWindowFirst?.classList.remove("hidden");

        event.preventDefault();
    });
});
let modalOpenButtons2 = document.querySelectorAll(".task__btn");
modalOpenButtons2?.forEach((item) => {
    item.addEventListener("click", (event) => {
        modalWindowFirst.classList.remove("hidden");

        event.preventDefault();
    });
});
modalWindows?.forEach((item) => {
    item.addEventListener("click", (event) => {
        if (event.target == event.currentTarget) {
            item.classList.add("hidden");
        }
    });
});

modalClose?.forEach((item) => {
    item.addEventListener("click", (event) => {
        modalWindowFirst.classList.add("hidden");
        event.preventDefault();
    });
});
let modal3 = document.querySelector(".achivements-3__btn");
modal3?.addEventListener("click", function (e) {
    document.querySelector("#modal-direktor").classList.remove("hidden");
    e.preventDefault();
});
let modalClosee = document.querySelector(".modal_close_direktor");
modalClosee?.addEventListener("click", function (e) {
    document.querySelector("#modal-direktor").classList.add("hidden");
});

let modalClosee_thank = document.querySelector(".modal_close.close_thank");
modalClosee_thank?.addEventListener("click", function (e) {
    document.querySelector("#modal-thank").classList.add("hidden");
});

let modalClosee_thank_btn = document.querySelector(
    ".close_thank_modal.modal-window__btn"
);
modalClosee_thank_btn?.addEventListener("click", function (e) {
    document.querySelector("#modal-thank").classList.add("hidden");
});

modalClose?.forEach((item) => {
    item.addEventListener("click", (event) => {
        if (event.target == event.currentTarget) {
            item.classList.add("hidden");
        }
    });
});

dropDownModalBtn?.addEventListener("click", (event) => {
    dropDownModal.classList.remove("hidden");
    event.preventDefault();
});
document.querySelector(".calculator__btn")?.addEventListener("click", () => {
    modalWindows.forEach(item => item.classList.add("hidden"));
    document.querySelector("#modal-main").classList.remove("hidden");
});

Array.from(selectInputButtons).forEach(item => {
    item.addEventListener("click", () => {
        const hiddenSection = item.nextElementSibling;
        const select = item.parentElement;

        select.classList.toggle("select-input_active");
        toggleSpoilers(hiddenSection);
    });
});

Array.from(selectInputValues).forEach(item => {
    item.addEventListener("click", (event) => {
        const currentValue = item.parentElement
                                .parentElement
                                .parentElement
                                .previousElementSibling
                                .children[0];
        const input = currentValue.nextElementSibling;

        currentValue.textContent = item.textContent;
        currentValue.setAttribute("data-value", item.textContent.trim());
        console.log(input);
        input.setAttribute("value", item.textContent.trim());
        event.preventDefault();
    });
});

// dropDownModalBtn.addEventListener("click", (event) => {
//     dropDownModal.classList.remove("hidden");
//     event.preventDefault();
// });

// Slider Methods

// let slidePerViewNum = 4;
// let windowWidth = document.documentElement.offsetWidth;

// if (windowWidth < 1250 && windowWidth >= 1100) {
//     slidePerViewNum = 3;
// } else if (windowWidth < 1100 && windowWidth >= 900) {
//     slidePerViewNum = 2;
// } else if (windowWidth < 900) {
//     slidePerViewNum = 1;
// }

// if (windowWidth < 600) {
//     document
//         .querySelector(".achivements-1__items-wrapper")
//         .classList.add("swiper");
//     document
//         .querySelector(".achivements-1__items")
//         .classList.add("swiper-wrapper");
//     document
//         .querySelectorAll(".achivement")
//         .forEach((item) => item.classList.add("swiper-slide"));
//     document.querySelector(".tasks__items-wrapper").classList.add("swiper");
//     document.querySelector(".tasks__items").classList.add("swiper-wrapper");
//     document
//         .querySelectorAll(".task")
//         .forEach((item) => item.classList.add("swiper-slide"));
//     document.querySelector(".companies__items-wrapper").classList.add("swiper");
//     document.querySelector(".companies__items").classList.add("swiper-wrapper");
//     document
//         .querySelectorAll(".companies__item-wrapper")
//         .forEach((item) => item.classList.add("swiper-slide"));

//     const swiperThree = new Swiper(".achivements-1__items-wrapper", {
//         slidesPerView: 1.3,
//         spaceBetween: 10,
//         direction: "horizontal",
//         // spaceBetween: 40,
//     });

//     const swiperFour = new Swiper(".tasks__items-wrapper", {
//         slidesPerView: 1,
//         direction: "horizontal",
//         spaceBetween: 40,
//         pagination: {
//             el: ".pag",
//             clickable: true,
//         },
//     });

    // const swiperFive = new Swiper(".companies__items-wrapper", {
    //     slidesPerView: 1.4,
    //     centeredSlides: true,
    //     direction: "horizontal",
    //     spaceBetween: 20,
    //     loop:true,
    //     // autoplay: {
    //     //     delay: 300,
    //     //   },
    //     //   effect: "fade",
    // });
// }

// if (windowWidth < 5000) {
//     document
//         .querySelector(".achivements-1__items-wrapper")
//         .classList.add("swiper");
//     document
//         .querySelector(".achivements-1__items")
//         .classList.add("swiper-wrapper");
//     document
//         .querySelectorAll(".achivement")
//         .forEach((item) => item.classList.add("swiper-slide"));
//     document.querySelector(".tasks__items-wrapper").classList.add("swiper");
//     document.querySelector(".tasks__items").classList.add("swiper-wrapper");
//     document
//         .querySelectorAll(".task")
//         .forEach((item) => item.classList.add("swiper-slide"));
//     document.querySelector(".companies__items-wrapper").classList.add("swiper");
//     document.querySelector(".companies__items").classList.add("swiper-wrapper");
//     document
//         .querySelectorAll(".companies__item-wrapper")
//         .forEach((item) => item.classList.add("swiper-slide"));

//     const swiperThree = new Swiper(".achivements-1__items-wrapper", {
//         slidesPerView: 1,
//         spaceBetween: -70,
//         direction: "horizontal",
//         // spaceBetween: 40,
//     });

//     const swiperFour = new Swiper(".tasks__items-wrapper", {
//         slidesPerView: 1,
//         direction: "horizontal",
//         spaceBetween: 40,
//     });

//     const swiperFive = new Swiper(".companies__items-wrapper", {
//         slidesPerView: 1.4,
//         centeredSlides: true,
//         direction: "horizontal",
//         spaceBetween: 20,
//     });
// }

// const swiperOne = new Swiper(".certificates__slider", {
//     slidesPerView: 1,
//     direction: "horizontal",
//     loop: true,
//     // pagination: {
//     //     el: ".certificates__pagination",
//     //     clickable: true,

//     // },
//     autoplay: {
//         delay: 300,
//     },
//     //   effect: "fade",
//     breakpoints: {
//         600: {
//             slidesPerView: 3,
//             spaceBetween: 10,
//         },
//     },
// });

// const feedbackSlides = document.querySelectorAll(".feedback");
// const feedbackPagination = document.querySelector(".feedbacks__pagination");
// const feedbackWrapper = document.querySelector(".feedbacks__slider-wrapper");

// const swiperTwo = new Swiper(".feedbacks__slider", {
//     slidesPerView: 1,
//     direction: "horizontal",
//     centeredSlides: true,
//     pagination: {
//         el: ".feedbacks__pagination",
//         clickable: true,
//     },

//     spaceBetween: 40,
// });

const form = document.getElementById("form");
let inputName = document.getElementById("name-input");
let inputTel = document.getElementById("phone-input");
let inputSum = document.querySelector("#sum");
let inputPlace = document.querySelector("#place");
let inputDirection = document.querySelector("#type");
const modal = document.getElementById("modal-main");
const thxModal = document.getElementById("thx-modal");
let buttonModalName = document.getElementById("name-input");
let persentPerMonth = 11 / 100 / 12;

let calculatorInputRange = document.querySelectorAll(
    ".calculator-input__range"
);
$(".calculator-input__range").on("change input", function () {
    $(this).parent().find($("input[name=values]")).val($(this).val()); //assign value..

    let width = ($(this).val() / $(this).attr("max")) * 100 + "%";
    let fill = $(this).parent().find(".range-fill");
    if ($(this).val() == 1) {
        fill.width(width);
    } else {
        fill.width(width);
    }
    console.log(this.value);
});

$(".calculator-input__sum").on("input", function () {
    let value = $(this).val();
    let n1 = value.replace(" ", "");
    let n2 = n1.replace("  ", "");
    let n3 = n2.replace(" ₽", "");
    let n4 = n3.replace(" ", "");

    if (isNaN(value)) {
        value = 1;
    }
    if ($(this).val() === "") {
        $(this).parent().find("input[type=range]").val(0);
    } else {
        $(this).parent().find("input[type=range]").attr("value", value);
    }
    if ($(this).parent().find("input[type=range]")) {
        $(this).parent().find("input[type=range]").attr("value", n4);
        let width =
            (+$(this).parent().find("input[type=range]").attr("value") /
                +$(this).attr("max")) *
                100 +
            "%";
        let fill = $(this).parent().find(".range-fill");
        if ($(this).val() == 1) {
            fill.width(width);
        } else {
            fill.width(width);
        }
    }
});

$(":input").inputmask({
    max: 25000000,
});
$("#phone-input").inputmask("+7 999 999-99-99");

document.getElementById("month").oninput = function () {
    let creditTime = document.getElementById("month").value * 12;
    // let valueLine = (this.value - this.min) / (this.max - this.min) * 100
    // this.style.background = 'linear-gradient(to right, #50DFB2 0%, #50DFB2 ' + valueLine + '%, #fff ' + valueLine + '%, white 100%)';
    if (this.value <= 4 || (this.value >= 21 && this.value <= 24)) {
        this.previousElementSibling.textContent = this.value + " год";
        document.querySelector("#time").innerHTML = this.value + " год";
    } else {
        this.previousElementSibling.textContent = this.value + " лет";
        document.querySelector("#time").innerHTML = this.value + " лет";
    }
    //sum on changing
    document.getElementById("amount-1").textContent = Math.round(
        Number(document.getElementById("price").value) *
            (persentPerMonth +
                persentPerMonth /
                    (Math.pow(1 + persentPerMonth, creditTime) - 1))
    );
    document.getElementById("amount-1").textContent =
        document
            .getElementById("amount-1")
            .textContent.replace(/(\d)(?=(\d{3})+$)/g, "$1 ") + "  ₽";
};

//range style for price
document.getElementById("price").oninput = function () {
    console.log(this.value);
    let creditTime = document.getElementById("month").value * 12;
    // this.style.background = 'linear-gradient(to right, #50DFB2 0%, #50DFB2 ' + valueLine + '%, #fff ' + valueLine + '%, white 100%)';
    let amount = this.value.replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
    console.log(amount);
    this.previousElementSibling.setAttribute("value", amount + " ₽");
    console.log(this.value);
    //sum on changing
    document.getElementById("amount-1").textContent = Math.round(
        Number(this.value) *
            (persentPerMonth +
                persentPerMonth /
                    (Math.pow(1 + persentPerMonth, creditTime) - 1))
    );
    document.getElementById("amount-1").textContent =
        document
            .getElementById("amount-1")
            .textContent.replace(/(\d)(?=(\d{3})+$)/g, "$1 ") + "  ₽";
    document.querySelector("#sum").textContent = amount + "  ₽";
};

// //range style for price
// document.getElementById("price").oninput = function () {
//     console.log(this.value);
//     let creditTime = document.getElementById("month").value * 12;
//     // this.style.background = 'linear-gradient(to right, #50DFB2 0%, #50DFB2 ' + valueLine + '%, #fff ' + valueLine + '%, white 100%)';
//     let amount = this.value.replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
//     console.log(amount);
//     this.previousElementSibling.setAttribute("value", amount + " ₽");
//     console.log(this.value);
//     //sum on changing
//     document.getElementById("amount-1").textContent = Math.round(
//         Number(this.value) *
//             (persentPerMonth +
//                 persentPerMonth /
//                     (Math.pow(1 + persentPerMonth, creditTime) - 1))
//     );
//     document.getElementById("amount-1").textContent =
//         document
//             .getElementById("amount-1")
//             .textContent.replace(/(\d)(?=(\d{3})+$)/g, "$1 ") + "  ₽";
//     document.querySelector("#sum").textContent = amount + "  ₽";
// };

// document.getElementById("month-1").oninput = function () {
//     let creditTime = document.getElementById("month-1").value * 12;
//     // let valueLine = (this.value - this.min) / (this.max - this.min) * 100
//     // this.style.background = 'linear-gradient(to right, #50DFB2 0%, #50DFB2 ' + valueLine + '%, #fff ' + valueLine + '%, white 100%)';
//     if (this.value <= 4 || (this.value >= 21 && this.value <= 24)) {
//         this.previousElementSibling.textContent = this.value + " год";
//         document.querySelector("#time-1").textContent = this.value + " год";
//     } else {
//         this.previousElementSibling.textContent = this.value + " лет";
//         document.querySelector("#time-1").textContent = this.value + " лет";
//     }
//     //sum on changing
//     document.getElementById("amount-1-1").textContent = Math.round(
//         Number(document.getElementById("price-1").value) *
//             (persentPerMonth +
//                 persentPerMonth /
//                     (Math.pow(1 + persentPerMonth, creditTime) - 1))
//     );
//     document.getElementById("amount-1-1").textContent =
//         document
//             .getElementById("amount-1-1")
//             .textContent.replace(/(\d)(?=(\d{3})+$)/g, "$1 ") + "  ₽";
// };

// //range style for price
// document.getElementById("price-1").oninput = function () {
//     let creditTime = document.getElementById("month-1").value * 12;
//     // this.style.background = 'linear-gradient(to right, #50DFB2 0%, #50DFB2 ' + valueLine + '%, #fff ' + valueLine + '%, white 100%)';
//     let amount = this.value.replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
//     this.previousElementSibling.value = amount + "  ₽";
//     //sum on changing
//     document.getElementById("amount-1-1").textContent = Math.round(
//         Number(this.value) *
//             (persentPerMonth +
//                 persentPerMonth /
//                     (Math.pow(1 + persentPerMonth, creditTime) - 1))
//     );
//     document.getElementById("amount-1-1").textContent =
//         document
//             .getElementById("amount-1-1")
//             .textContent.replace(/(\d)(?=(\d{3})+$)/g, "$1 ") + "  ₽";
//     console.log(amount);
//     document.querySelector("#sum-1").innerHTML = amount + "  ₽";
// };

// document.getElementById("month-2").oninput = function () {
//     let creditTime = document.getElementById("month-2").value * 12;
//     // let valueLine = (this.value - this.min) / (this.max - this.min) * 100
//     // this.style.background = 'linear-gradient(to right, #50DFB2 0%, #50DFB2 ' + valueLine + '%, #fff ' + valueLine + '%, white 100%)';
//     if (this.value <= 4 || (this.value >= 21 && this.value <= 24)) {
//         this.previousElementSibling.textContent = this.value + " год";
//         document.querySelector("#time-2").textContent = this.value + " год";
//     } else {
//         this.previousElementSibling.textContent = this.value + " лет";
//         document.querySelector("#time-2").textContent = this.value + " лет";
//     }
//     //sum on changing
//     document.getElementById("amount-1-2").textContent = Math.round(
//         Number(document.getElementById("price-2").value) *
//             (persentPerMonth +
//                 persentPerMonth /
//                     (Math.pow(1 + persentPerMonth, creditTime) - 1))
//     );
//     document.getElementById("amount-1-2").textContent =
//         document
//             .getElementById("amount-1-2")
//             .textContent.replace(/(\d)(?=(\d{3})+$)/g, "$1 ") + "  ₽";
// };

// //range style for price
// document.getElementById("price-2").oninput = function () {
//     let creditTime = document.getElementById("month-2").value * 12;
//     // this.style.background = 'linear-gradient(to right, #50DFB2 0%, #50DFB2 ' + valueLine + '%, #fff ' + valueLine + '%, white 100%)';
//     let amount = this.value.replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
//     this.previousElementSibling.value = amount + "  ₽";
//     //sum on changing
//     document.getElementById("amount-1-2").textContent = Math.round(
//         Number(this.value) *
//             (persentPerMonth +
//                 persentPerMonth /
//                     (Math.pow(1 + persentPerMonth, creditTime) - 1))
//     );
//     document.getElementById("amount-1-2").textContent =
//         document
//             .getElementById("amount-1-2")
//             .textContent.replace(/(\d)(?=(\d{3})+$)/g, "$1 ") + "  ₽";
//     document.querySelector("#sum-2").textContent = amount + "  ₽";
// };

// document.getElementById("input-3").oninput = function () {
//     let creditTime = document.getElementById("month-2").value * 12;
//     // this.style.background = 'linear-gradient(to right, #50DFB2 0%, #50DFB2 ' + valueLine + '%, #fff ' + valueLine + '%, white 100%)';
//     let amount = this.value
//         .replace(/(\d)(?=(\d{3})+$)/g, "$1 ")
//         .replace(" ₽", "");
//     this.previousElementSibling.value = amount + "  ₽";
//     //sum on changing
//     document.getElementById("amount-1-2").textContent = Math.round(
//         Number(
//             this.value
//                 .replace(" ", "")
//                 .replace("  ", "")
//                 .replace(" ₽", "")
//                 .replace(" ", "")
//         ) *
//             (persentPerMonth +
//                 persentPerMonth /
//                     (Math.pow(1 + persentPerMonth, creditTime) - 1))
//     );
//     document.getElementById("amount-1-2").textContent =
//         document
//             .getElementById("amount-1-2")
//             .textContent.replace(/(\d)(?=(\d{3})+$)/g, "$1 ") + "  ₽";
//     document.querySelector("#sum-2").textContent = amount + "  ₽";
// };

// document.getElementById("input-2").oninput = function () {
//     let creditTime = document.getElementById("month-1").value * 12;
//     // this.style.background = 'linear-gradient(to right, #50DFB2 0%, #50DFB2 ' + valueLine + '%, #fff ' + valueLine + '%, white 100%)';
//     let amount = this.value
//         .replace(/(\d)(?=(\d{3})+$)/g, "$1 ")
//         .replace(" ₽", "");
//     this.previousElementSibling.value = amount + "  ₽";
//     //sum on changing
//     document.getElementById("amount-1-1").textContent = Math.round(
//         Number(
//             this.value
//                 .replace(" ", "")
//                 .replace("  ", "")
//                 .replace(" ₽", "")
//                 .replace(" ", "")
//         ) *
//             (persentPerMonth +
//                 persentPerMonth /
//                     (Math.pow(1 + persentPerMonth, creditTime) - 1))
//     );
//     document.getElementById("amount-1-1").textContent =
//         document
//             .getElementById("amount-1-1")
//             .textContent.replace(/(\d)(?=(\d{3})+$)/g, "$1 ") + "  ₽";
//     document.querySelector("#sum-1").textContent = amount + "  ₽";
// };

// document.getElementById("input-1").oninput = function () {
//     let creditTime = document.getElementById("month-1").value * 12;
//     // this.style.background = 'linear-gradient(to right, #50DFB2 0%, #50DFB2 ' + valueLine + '%, #fff ' + valueLine + '%, white 100%)';
//     let amount = this.value
//         .replace(/(\d)(?=(\d{3})+$)/g, "$1 ")
//         .replace(" ₽", "");
//     this.previousElementSibling.value = amount + "  ₽";
//     //sum on changing
//     document.getElementById("amount-1").textContent = Math.round(
//         Number(
//             this.value
//                 .replace(" ", "")
//                 .replace("  ", "")
//                 .replace(" ₽", "")
//                 .replace(" ", "")
//         ) *
//             (persentPerMonth +
//                 persentPerMonth /
//                     (Math.pow(1 + persentPerMonth, creditTime) - 1))
//     );
//     document.getElementById("amount-1").textContent =
//         document
//             .getElementById("amount-1")
//             .textContent.replace(/(\d)(?=(\d{3})+$)/g, "$1 ") + "  ₽";
//     document.querySelector("#sum").textContent = amount + "  ₽";
// };

//data for copyright
// let date = new Date();
// let year = date.getFullYear();
// document.querySelector(".footer__textt").innerHTML =
//     "© Все права защищены 2005-" + year;

//Phone MASK
let phoneInput = document.getElementById("phone-input");
let getInputNumberValue = function (input) {
    return input.value.replace(/\D+/g, "");
};

let onPhoneInput = function (e) {
    let input = e.target,
        inputValue = getInputNumberValue(input),
        formattedInputValue = "";

    if (!inputValue) {
        return (input.value = "");
    }

    if (["7", "8", "9"].indexOf(inputValue[0]) > -1) {
        if (inputValue[0] == "9") {
            inputValue = "7" + inputValue;
        }
        let firstSymbols =
            inputValue[0] == "8" || inputValue[0] == "+" ? "+7" : "+7";
        formattedInputValue = firstSymbols;
        if (inputValue.length > 1) {
            formattedInputValue += " (" + inputValue.substring(1, 4);
        }
        if (inputValue.length >= 5) {
            formattedInputValue += ") " + inputValue.substring(4, 7);
        }
        if (inputValue.length >= 8) {
            formattedInputValue += "-" + inputValue.substring(7, 9);
        }
        if (inputValue.length >= 10) {
            formattedInputValue += "-" + inputValue.substring(9, 11);
        }
    } else {
        formattedInputValue = "+" + inputValue.substring(0, 16);
    }
    input.value = formattedInputValue;
};

if (phoneInput) {
    phoneInput.addEventListener("input", onPhoneInput);
}

// mail
let btn = document.getElementById("submit-button");
if (form) {
    form.addEventListener("submit", formSend);
    async function formSend(e) {
        e.preventDefault();
        let form = $("#form");
        var client_name = inputName.value;
        var client_phone = inputTel.value;
        var client_sum = inputSum.value;
        var client_place = inputPlace.value;
        var client_direction = inputDirection.value;
        let orderTmp = `<b>Заявка с формы обратной связи:</b>

<b>Имя:</b>
${client_name}

<b>Телефон:</b>
${client_phone}

<b>Сумма:</b>
${client_sum}

<b>Регион:</b>
${client_place}

<b>Тип кредита:</b>
${client_direction}
`;
        $.ajax({
            url: "https://api.telegram.org/bot2139909234:AAFwDwctBvgY2PqirxtbXlB_74RmzTMLATI/sendMessage",
            data: {
                chat_id: -1001574161774,
                text: orderTmp,
                parse_mode: "HTML",
            },
            type: "post",
            success: function () {
                form[0].reset();
                modalWindowFirst.classList.add("hidden");
                document
                    .querySelector("#modal-thank")
                    .classList.remove("hidden");

                ym(80158765, "reachGoal", "lead");
            },
            error: function () {
                console.log("error");
            },
        });
        onSubmit(btn);
        capcha
        grecaptcha.ready(function() {
            grecaptcha.execute('6LcvcHcbAAAAAIK0p3EOUNozdBTyiYrfTzCeomT1', { action: 'contact' }).then(function(token) {
                $.ajax({
                    url: '../sendmail.php',
                    method: 'POST',
                    data: ({ type: 'grecaptcha3', 'secret': token }),
                    success: function(res) {
                        if (res === 'ok') {
                            ym(80158765, 'reachGoal', 'lead');
                            gtag('event', 'Lead', { 'event_category': 'Lead', 'event_action': 'Push' });

                        } else if (res === 'error') {
                            modal.classList.add('hidden');
                            alert("Ошибка");
                        }
                    }
                })
            });
        });
    }
}

function onSubmit(btn) {
    try {
        Comagic.addOfflineRequest({
            name: $("[name = form-name]").val(),
            phone: $("[name = form-tel]").val(),
            sum: $("[name = sum]").val(),
            place: $("[name = place]").val(),
            direction: $("[name = type]").val(),
        });
    } catch (e) {
        console.log(e);
    }
    const dataForm = JSON.stringify({
        name: inputName.value,
        phone: inputTel.value,
        sum: inputSum.value,
        place: inputPlace.value,
        direction: inputDirection.value,
        buttonName: buttonModalName.value,
    });

    fetch("../sendmail.php", {
        method: "POST",
        body: dataForm,
    })
        .then((res) => {
            modal.classList.add("hidden");
            thxModal.classList.remove("hidden");
            setTimeout(() => {
                thxModal.classList.add("hidden");
                modal.classList.add("hidden");
            }, 5000);
        })
        .catch((err) => {
            console.log("err - ", err);
        });
    form.reset();
}
const whatsappNumber = "79152797789";
function sendToWhatsapp(text, whatsappNumber) {
    text = encodeURIComponent(text);

    let url = "https://wa.me/" + whatsappNumber + "?text=" + text;

    window.open(url);
}
function onSubmit(btn) {
    form.addEventListener("submit", (e) => {
        const text =
            buttonModalName.value +
            "; Имя: " +
            inputName.value +
            "; Телефон" +
            inputTel.value +
            "; Сумма: " +
            inputSum.value +
            "; Регион:" +
            inputPlace.value
            "; Тип кредита: " +
            inputDirection.value;
        // sendToWhatsapp(text, whatsappNumber);
    });
}
0;
// let tasks = document.querySelectorAll(".tasks .swiper-slide");
// tasks.forEach(function (item) {
//     console.log(item.offsetHeight);
//     // console.log(item.offsetParent)
// });
// let buttonProjectsToggler = document.querySelector(".link_project3 p");
// buttonProjectsToggler.addEventListener("click", function (e) {
//     console.log("1");
//     let content = this.nextElementSibling;
//     // console.log(clickedBtn.nextElementSibling)
//     if (content.style.maxHeight) {
//         //this is if the accordion is open
//         content.style.maxHeight = null;
//         content.classList.remove("is-open");
//     } else {
//         //if the accordion is currently closed
//         content.style.maxHeight = content.scrollHeight + "px";
//         content.classList.add("is-open");
//     }
// });
// let buttonProjectsToggler2 = document.querySelector(".mini-acc");
// buttonProjectsToggler2.addEventListener("click", function (e) {
//     console.log("1");
//     let content = this.nextElementSibling;
//     console.log(this.nextElementSibling);
//     if (content.style.maxHeight) {
//         //this is if the accordion is open
//         content.style.maxHeight = null;
//         content.classList.remove("is-open");
//     } else {
//         //if the accordion is currently closed
//         content.style.maxHeight = content.scrollHeight + "px";
//         content.classList.add("is-open");
//     }
// });
// let calculatorInputRange = document.querySelectorAll(
//     ".calculator-input__range"
// );
// $(".calculator-input__range").on("change input", function () {
//     $(this).parent().find($("input[name=values]")).val($(this).val()); //assign value..

//     let width = ($(this).val() / $(this).attr("max")) * 100 + "%";
//     let fill = $(this).parent().find(".range-fill");
//     if ($(this).val() == 1) {
//         fill.width(width);
//     } else {
//         fill.width(width);
//     }
// });

// $(".calculator-input__sum").on("input", function () {
//     let value = $(this).val();
//     let n1 = value.replace(" ", "");
//     let n2 = n1.replace("  ", "");
//     let n3 = n2.replace(" ₽", "");
//     let n4 = n3.replace(" ", "");

//     if (isNaN(value)) {
//         value = 1;
//     }
//     if ($(this).val() === "") {
//         $(this).parent().find("input[type=range]").val(0);
//     } else {
//         $(this).parent().find("input[type=range]").attr("value", value);
//     }
//     if ($(this).parent().find("input[type=range]")) {
//         $(this).parent().find("input[type=range]").attr("value", n4);
//         let width =
//             (+$(this).parent().find("input[type=range]").attr("value") /
//                 +$(this).attr("max")) *
//                 100 +
//             "%";
//         let fill = $(this).parent().find(".range-fill");
//         if ($(this).val() == 1) {
//             fill.width(width);
//         } else {
//             fill.width(width);
//         }
//     }
// });

// $(":input").inputmask({
//     max: 25000000,
// });
$("#phone-input").inputmask("+7 999 999-99-99");

$("#submit-button").click(function (e) {
    e.preventDefault();

    let form = $(this).parent().parent();
    let orderData = form.serializeArray();
    let url = document.URL;
    let orderTmp = `
  <b>наименование услуги:</b>
  <b>Оформить онлайн</b>
  `;

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(),
        success: function (data) {
            $.ajax({
                // url: "https://api.telegram.org/bot5032083731:AAHgaXiE4h3iLibvR4DAW8kBj5yoi6vuXiw/sendMessage",
                data: {
                    chat_id: 1437882255,
                    text: orderTmp,
                    parse_mode: "HTML",
                },
                type: "get",
                success: function () {
                    form[0].reset();
                    console.log(orderTmp);
                },
                error: function () {
                    alert("error");
                },
            });
        },
        error: function (data) {
            alert("error");
        },
    });
});

// Sliders

let slidePerViewNum = 4;
let windowWidth = document.documentElement.offsetWidth;

if (windowWidth < 1250 && windowWidth >= 1100) {
    slidePerViewNum = 3;
} else if (windowWidth < 1100 && windowWidth >= 900) {
    slidePerViewNum = 2;
} else if (windowWidth < 900) {
    slidePerViewNum = 1;
}

if (windowWidth < 600) {
    document
        .querySelector(".achivements-1__items-wrapper")
        .classList.add("swiper");
    document
        .querySelector(".achivements-1__items")
        .classList.add("swiper-wrapper");
    document
        .querySelectorAll(".achivement")
        .forEach((item) => item.classList.add("swiper-slide"));
    document.querySelector(".companies__items-wrapper").classList.add("swiper");
    document.querySelector(".companies__items").classList.add("swiper-wrapper");
    document
        .querySelectorAll(".companies__item-wrapper")
        .forEach((item) => item.classList.add("swiper-slide"));

    const swiperThree = new Swiper(".achivements-1__items-wrapper", {
        slidesPerView: 1.3,
        spaceBetween: 10,
        direction: "horizontal",
        // spaceBetween: 40,
    });

}

const swiperOne = new Swiper(".certificates__slider", {
    slidesPerView: 1,
    direction: "horizontal",
    loop: true,
    // pagination: {
    //     el: ".certificates__pagination",
    //     clickable: true,

    // },
    autoplay: {
        delay: 300,
    },
    //   effect: "fade",
    breakpoints: {
        600: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    },
});
document.querySelector(".tasks__items-wrapper").classList.add("swiper");
    document.querySelector(".tasks__items").classList.add("swiper-wrapper");
    document
        .querySelectorAll(".task")
        .forEach((item) => item.classList.add("swiper-slide"));

const swiperFour = new Swiper(".tasks__items-wrapper", {
    slidesPerView: 1,
    direction: "horizontal",
    spaceBetween: 40,
    pagination: {
        el: ".pag",
        clickable: true,
    },
    breakpoints: {
        1000: {
            slidesPerView: 2,
        },
    },
});

const feedbackSlides = document.querySelectorAll(".feedback");
const feedbackPagination = document.querySelector(".feedbacks__pagination");
const feedbackWrapper = document.querySelector(".feedbacks__slider-wrapper");

const swiperTwo = new Swiper(".feedbacks__slider", {
    slidesPerView: 1,
    direction: "horizontal",
    centeredSlides: true,
    pagination: {
        el: ".feedbacks__pagination",
        clickable: true,
    },

    spaceBetween: 40,
});