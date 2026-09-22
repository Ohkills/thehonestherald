let EmailSubmitted = localStorage.getItem("EmailSubmitted") === "true";
let Timer = 15000;


function CreatePopup() {
    if (EmailSubmitted) {
        return;
    }

    const Popup = document.createElement("div");

    Popup.className = `
        fixed
        w-72
        bg-white
        border-4
        border-red-600
        shadow-2xl
        z-50
        p-4
    `;

    Popup.style.left = Math.random() * 70 + "%";
    Popup.style.top = Math.random() * 70 + "%";

    Popup.innerHTML = `
        <div class="bg-red-600 text-white font-bold p-2 -m-4 mb-3">
            ⚠ IMPORTANT MESSAGE
        </div>

        <p class="font-bold mb-2">
            YOU CAN POTENTIALLY WIN A FULLY PAID VACATION TO HAWAII
        </p>

        <p class="text-sm mb-4">
            Please enter your email below to enter the giveaway!!
        </p>

        <form id="EmailForm">
            <label class="block text-sm font-bold mb-1">
                Enter your Email HERE RIGHT NOW!
            </label>

            <input
                id="EmailInput"
                type="email"
                required
                class="border border-gray-400 p-2 w-full mb-3"
                placeholder="you@example.com"
            >

            <div class="flex gap-2">
                <button
                    type="button"
                    id="IgnoreButton"
                    class="bg-gray-300 px-3 py-1">
                    Ignore
                </button>

                <button
                    type="submit"
                    class="bg-red-600 text-white px-3 py-1">
                    ENTER NOW
                </button>
            </div>
        </form>
    `;
    // Actually put the popup onto the page
    document.body.appendChild(Popup);


    // Ignore button
    Popup.querySelector("#IgnoreButton").addEventListener("click", function () {
        Popup.remove();
    });


    // Email form
    Popup.querySelector("#EmailForm").addEventListener("submit", function (event) {
        event.preventDefault();

        EmailSubmitted = true;
        localStorage.setItem("EmailSubmitted", "true");

        Popup.remove();

        // Stop the popup timer
        clearTimeout(PopupTimer);

        console.log("Email submitted!");
    });
}


// timer
function StartPopupTimer() {

    PopupTimer = setTimeout(function Repeat() {

        // no more popups if user submit email
        if (EmailSubmitted) {
            return;
        }

        CreatePopup();

        // popups become faster over time
        Timer = Math.max(3000, Timer - 2000);

        PopupTimer = setTimeout(Repeat, Timer);

    }, Timer);
}


let PopupTimer;

StartPopupTimer();
