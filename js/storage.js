// var searchHistory = JSON.parse(localStorage.getItem("search")) || [];

// function renderSearchHistory() {
//     searchHistoryTestEl.innerHTML = "";
//     for (let i = 0; i < searchHistory.length; i++) {
//         const historyReq = document.createElement("input");
//         historyReq.setAttribute("type", "text");
//         historyReq.setAttribute("readonly", true);
//         historyReq.setAttribute("class", "form-control d-block bg-white mb-1");
//         historyReq.setAttribute("value", searchHistory[i]);
//         historyReq.addEventListener("click", function () {
//             console.log(historyReq.value)
//             getWeather(historyReq.value);
//         })
//         searchHistoryTestEl.append(historyReq);
//     }
// }

// renderSearchHistory();
// if (searchHistory.length > 0) {
//     getWeather(searchHistory[searchHistory.length - 1]);
// }