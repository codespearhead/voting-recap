async function fetchPartialView(pathToFile) {
  const parser = new DOMParser();
  let fetchedData = await fetch(pathToFile);
  fetchedData = await fetchedData.text();
  fetchedData = parser.parseFromString(fetchedData, "text/html");
  return fetchedData.body;
}

// TODO
// function fillCard(cardView, cardData) {
// 		return cardView;
// }

function appendCard(cardView) {
  document
    .getElementById("voting-recap-card-safearea")
    .insertAdjacentHTML("beforeend", cardView.innerHTML);
}

(async function main() {
  let cardData = await fetch("./db.json");
  cardData = await cardData.json();

  const cardView = {
    yesCardPartial: await fetchPartialView(
      "./voting-recap-card-container.html"
    ),
    noCardPartial: await fetchPartialView(
      "./voting-recap-card-container-variant.html"
    ),
  };

  cardData.forEach((e) => {
    let correctCardView;
    switch (e["PEC da UEA"]) {
      case "Sim":
        console.log("Sim");
        correctCardView = cardView.yesCardPartial;
        break;
      case "":
        console.log("Não");
        correctCardView = cardView.noCardPartial;
        break;
    }
    // function fillCard(cardView, cardData);
    appendCard(correctCardView);
  });
})();
