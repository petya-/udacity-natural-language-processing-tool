import { isValidURL } from "./urlChecker";

async function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let urlInput = document.getElementById("name").value;
  if (!isValidURL(urlInput)) {
    return alert("Invalid URL!");
  }

  try {
    const res = await (
      await fetch("/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: urlInput,
        }),
      })
    ).json();

    updateUI(res);
  } catch (error) {
    console.log(error);
  }
}

function updateUI(response) {
  const resultsSection = document.getElementById("results-section");
  resultsSection.classList.toggle("visible");

  const container = document.getElementById("results");
  container.textContent = "";

  const fragment = document.createDocumentFragment(); // DocumentFragment instead of a <div> for permormance
  for (let property in response) {
    const newElement = document.createElement("div");
    newElement.innerHTML = `<p><strong>${property.toUpperCase()}:</strong></p> <p><span>${
      response[property]
    }</span></p>`;

    newElement.classList.add("flex-item");
    fragment.appendChild(newElement);
  }

  container.appendChild(fragment); // reflow and repaint once here
}

export { handleSubmit };
