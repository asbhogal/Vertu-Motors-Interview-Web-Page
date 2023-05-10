import trims from "./trimData";

document.querySelector(".container__trims__section__trim-cards").innerHTML =
  trims
    .map(
      (trim) => `
    <div key=${
      trim.id
    } class="container__trims__section__trim-cards__trim-card">
      <img class="container__trims__section__trim-cards__trim-card__trim-image" src=${
        trim.imgSrc
      } alt="${trim.imgAlt}"/>
      <div class="container__trims__section__trim-cards__trim-card__trim-title">${
        trim.title
      }</div>
      <div class="container__trims__section__trim-cards__trim-card__trim-price">${
        trim.price
      }</div>
      <div class="container__trims__section__trim-cards__trim-card__trim-description">
        <ul class="container__trims__section__trim-cards__trim-card__trim-description__list">
          ${trim.description
            .map((description) => `<li key=${description}>${description}</li>`)
            .join("")}
        </ul>
      </div>
    </div>
  `
    )
    .join("");
