function subscribeUser() {
    const email = document.getElementById("emailInput").value.trim();
    const message = document.getElementById("subscribeMessage");

    if (email === "") {
        showMessage("Будь ласка, введіть email.", true);
        return;
    }

    let emails = JSON.parse(localStorage.getItem("subscribers") || "[]");

    if (emails.includes(email)) {
        showMessage("Цей email вже підписаний!", true);
        return;
    }

    emails.push(email);

    localStorage.setItem("subscribers", JSON.stringify(emails));

    showMessage("Дякуємо за довіру! Ви успішно підписалися.");
}

function showMessage(text, isError = false) {
    const message = document.getElementById("subscribeMessage");
    message.style.display = "block";
    message.style.color = isError ? "#ff4444" : "#00eaff";
    message.textContent = text;
}
