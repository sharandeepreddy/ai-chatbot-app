const chatContainer = document.getElementById('chatContainer');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Sample responses for the chatbot
const responses = {
    'hello': 'Hi there! How can I help you today?',
    'hi': 'Hello! What can I do for you?',
    'how are you': 'I\'m doing great, thank you for asking! How can I assist you?',
    'what is your name': 'I\'m your AI Chatbot Assistant!',
    'help': 'I can answer your questions and have a conversation with you. Just type your message!',
    'bye': 'Goodbye! Have a great day!',
    'thanks': 'You\'re welcome! Is there anything else I can help you with?',
    'thank you': 'You\'re very welcome!',
    'default': 'I\'m not sure how to respond to that. Can you try asking something else?'
};

// Function to send a message
function sendMessage() {
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // Add user message to chat
    addMessage(message, 'user-message');
    
    // Clear input
    userInput.value = '';
    
    // Generate bot response
    setTimeout(() => {
        const response = getBotResponse(message);
        addMessage(response, 'bot-message');
    }, 500);
}

// Function to add a message to the chat
function addMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    
    const messagePara = document.createElement('p');
    messagePara.textContent = text;
    
    messageContent.appendChild(messagePara);
    messageDiv.appendChild(messageContent);
    chatContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Function to get bot response
function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    for (let key in responses) {
        if (lowerMessage.includes(key)) {
            return responses[key];
        }
    }
    
    return responses['default'];
}

// Event listeners
sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
