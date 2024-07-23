function openNewWebpage() {
    const newPageUrl = "dashboard.html";
    chrome.tabs.create({ url: newPageUrl });
}

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("notify-button");
    button.addEventListener("click", openNewWebpage);
});
