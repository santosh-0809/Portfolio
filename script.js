function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
// for chatbot
function toggleChat() {
  let box = document.getElementById("chatBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}
function sendMessage() {
  let input = document.getElementById("userInput");
  let message = input.value.toLowerCase();
  let chatBody = document.getElementById("chatBody");
  if (message.trim() === "") return;
  // Show user message
  chatBody.innerHTML += `<div class="user">${message}</div>`;
  let reply = getBotReply(message);
  // Show bot reply
  setTimeout(() => {
    chatBody.innerHTML += `<div class="bot">${reply}</div>`;
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);
  input.value = "";
}
function getBotReply(msg) {
  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello! How can I help you?";
  }
  if (msg.includes("contact") || msg.includes("email")) {
    return "You can contact me at: naiksantosh2448@email.com";
  }
  if (msg.includes("phone") || msg.includes("number")) {
    return "Call me at: +91 8446652846";
  }
  if (msg.includes("project")) {
    return "You can check my projects in the portfolio section!";
  }
  return "Sorry, I didn’t understand. Ask about contact, projects, or services.";
}
document.getElementById("userInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    sendMessage(); 
  }
});