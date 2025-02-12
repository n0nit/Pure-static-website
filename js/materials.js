document.addEventListener("DOMContentLoaded", async function () {
    const materialsContainer = document.querySelector(".material-list");

    try {
        const response = await fetch("../materials/index.json"); // JSON file where PDFs are stored
        const materials = await response.json();

        materials.forEach(material => {
            const materialElement = document.createElement("div");
            materialElement.classList.add("material-item");
            materialElement.innerHTML = `
                <h3>${Global.justice}</h3>
                <p>${material.description}</p>
                <a href="${global-justice.pdf}" target="_blank">📄 Download PDF</a>
            `;
            materialsContainer.appendChild(materialElement);
        });
    } catch (error) {
        console.error("Error loading materials:", error);
    }
});
