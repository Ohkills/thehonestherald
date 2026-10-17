let EmailSubmitted = localStorage.getItem("EmailSubmitted") === "true";
let Timer = 12000;
let PopupTimer;

function CreatePopup() {
    if (EmailSubmitted || (document.querySelector(".email-popup") !== null)) {  
        return;
    }

    const Popup = document.createElement("div");

    Popup.className = `
        email-popup    
        fixed
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-11/12
        max-w-xl
        bg-white
        border-4
        border-red-600
        shadow-2xl
        z-50
        p-8
    `;
    const overlay = document.createElement("div");

    overlay.className = `
        fixed
        inset-0
        bg-black/70
        z-40
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(Popup);

    Popup.innerHTML = `
        <div class="bg-red-600 text-white font-bold p-2 -m-4 mb-3">
            ⚠ IMPORTANT MESSAGE
        </div>

        <p class="font-bold mb-2 text-black">
            YOU CAN POTENTIALLY WIN A FULLY PAID VACATION TO HAWAII
        </p>

        <p class="text-sm mb-4 text-gray-800">
            Please enter your email below to enter the giveaway!!
        </p>

        <form id="EmailForm">
            <label class="block text-sm font-bold mb-1 text-black">
                Enter your Email HERE RIGHT NOW!
            </label>

            <input
                id="EmailInput"
                type="email"
                required
                class="border border-gray-400 text-black p-2 w-full mb-3"
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


    // Ignore button
    Popup.querySelector("#IgnoreButton").addEventListener("click", function () {
        Popup.remove();
        overlay.remove();
    });


    // Email form
    Popup.querySelector("#EmailForm").addEventListener("submit", function (event) {
        event.preventDefault();

        EmailSubmitted = true;
        localStorage.setItem("EmailSubmitted", "true");

        Popup.remove();
        overlay.remove();

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
        Timer = Math.max(3000, Timer - 3000);

        PopupTimer = setTimeout(Repeat, Timer);

    }, Timer);
}
StartPopupTimer();
