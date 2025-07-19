document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("chat-container");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const chatBox = document.createElement("div");

  input.placeholder = "Ask me anything...";
  button.innerText = "Send";

  chatBox.style.height = "200px";
  chatBox.style.overflowY = "auto";
  chatBox.style.marginBottom = "10px";
  chatBox.style.border = "1px solid #ff4ec7";
  chatBox.style.padding = "10px";

  container.appendChild(chatBox);
  container.appendChild(input);
  container.appendChild(button);

  button.onclick = function () {
    const userMessage = input.value;
    if (!userMessage) return;

    const botReply = document.createElement("p");
    const userMsg = document.createElement("p");
    userMsg.style.textAlign = "right";
    userMsg.innerText = userMessage;
    chatBox.appendChild(userMsg);

    let reply = "Tell me more 😘";
    if (userMessage.toLowerCase().includes("name")) reply = "I'm Lia 💋";
    else if (userMessage.toLowerCase().includes("age")) reply = "20, baby!";
    else if (userMessage.toLowerCase().includes("love")) reply = "I love love 💕";

    botReply.innerText = reply;
    chatBox.appendChild(botReply);
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  };
});
