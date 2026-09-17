let shouldweshowpopup = true

function CreatePopup() {
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

            <div class="flex gap-2">
                <button
                    onclick="this.parentElement.parentElement.remove()"
                    class="bg-gray-300 px-3 py-1">
                    Ignore
                </button>

                <form>
                        <label>Enter your Email HERE RIGHT NOW!</label>
                        <input type="text"></input>

            </div>
        `;
    }

// this timer will randomly make the popup appear, until the user enter their email.

setTimeout(CreatePopup, Math.random(10000,45000))
