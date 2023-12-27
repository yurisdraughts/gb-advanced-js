"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв должен иметь уникальное id, для упрощения, используем `Date.now()`.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: Date.now(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: Date.now(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: Date.now(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: Date.now(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

function renderData() {
  const createReview = (reviewObj, reviewContainer) => {
    const reviewWrapper = document.createElement("div");
    reviewWrapper.classList.add("review");

    const reviewId = document.createElement("h3");
    reviewId.classList.add("review__header");
    reviewId.innerHTML = reviewObj.id + ":";
    reviewWrapper.appendChild(reviewId);

    reviewWrapper.append(reviewObj.text);
    reviewContainer.appendChild(reviewWrapper);
  };

  for (const item of initialData) {
    const productWrapper = document.createElement("div");
    productWrapper.classList.add("container");

    const productName = document.createElement("h2");
    productName.classList.add("header");
    productName.innerHTML = item.product;
    productWrapper.appendChild(productName);

    const reviewContainer = document.createElement("div");
    productWrapper.appendChild(reviewContainer);

    for (const review of item.reviews) {
      createReview(review, reviewContainer);
    }

    const form = document.createElement("form");
    form.classList.add("form");

    const textarea = document.createElement("textarea");
    textarea.classList.add("form__textarea");
    textarea.setAttribute("placeholder", "Оставьте ваш отзыв...");
    form.appendChild(textarea);

    const messageWrapper = document.createElement("div");
    messageWrapper.classList.add("form__message");
    textarea.addEventListener("input", () => {
      messageWrapper.innerHTML = "";
    });
    form.appendChild(messageWrapper);

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("form__submit");
    submitBtn.setAttribute("type", "submit");
    submitBtn.innerHTML = "Отправить отзыв!";
    form.appendChild(submitBtn);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const text = textarea.value;

      if (text.length < 50) {
        messageWrapper.innerHTML = "Отзыв не может быть короче 50 символов!";
      } else if (text.length > 500) {
        messageWrapper.innerHTML = "Отзыв не может быть длиннее 500 символов!";
      } else {
        const newReview = { id: Date.now(), text };
        item.reviews.push(newReview);
        createReview(newReview, reviewContainer);
        textarea.value = "";
      }
    });

    productWrapper.appendChild(form);

    document.body.appendChild(productWrapper);
  }
}

renderData();
