document.addEventListener("DOMContentLoaded", function () {
    let chatBox = document.getElementById("chat-box");
    let chatBtn = document.getElementById("chat-btn");
    let closeChat = document.getElementById("close-chat");
    let sendChat = document.getElementById("send-chat");
    let chatMessage = document.getElementById("chat-message");

    // Open chat box when clicking the button
    chatBtn.addEventListener("click", function () {
        chatBox.style.display = "block";
    });

    // Close chat box when clicking close button
    closeChat.addEventListener("click", function () {
        chatBox.style.display = "none";
    });

    // Send message (you can replace alert with real functionality)
    sendChat.addEventListener("click", function () {
        if (chatMessage.value.trim() !== "") {
            alert("Message Sent: " + chatMessage.value); // Replace with actual functionality
            chatMessage.value = ""; // Clear input after sending
        }
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjusts for navbar height
                    behavior: "smooth"
                });
            }
        });
    });
});
