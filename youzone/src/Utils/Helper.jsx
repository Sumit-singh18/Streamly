// Function to generate a random name
export function getRandomName() {
  const names = [
    "Sumit",
    "Aarav",
    "Priya",
    "Karan",
    "Neha",
    "Rahul",
    "Ananya",
    "Rohan",
    "Isha",
    "Vikram",
    "Sumit",
    "Aarav",
    "Priya",
    "Karan",
    "Neha",
    "Rahul",
    "Ananya",
    "Rohan",
    "Isha",
    "Vikram",
    "Sneha",
    "Arjun",
    "Meera",
    "Nikhil",
    "Tanya",
    "Aditi",
    "Riya",
    "Kabir",
    "Dev",
    "Sanya",
    "Ishaan",
    "Reyansh",
    "Tara",
    "Krishna",
    "Pooja",
    "Akash",
    "Simran",
    "Dhruv",
    "Manvi",
    "Sahil",
    "Nisha",
    "Ankit",
    "Lavanya",
    "Reet",
    "Tanmay",
    "Harsh",
    "Diya",
    "Om",
    "Anaya",
    "Mihir",
  ];

  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

// Function to generate a random message
export function getRandomMessage() {
  const messages = [
    "That’s really interesting!",
    "Good morning!",
    "What’s your plan for today?",
    "Don’t forget to stay hydrated!",
    "You’re doing amazing!",
    "Long time no see!",
    "That sounds like a plan.",
    "Wow, that’s so cool!",
    "Can you share more details?",
    "I just finished that project!",
    "Do you have any updates?",
    "Let’s go for coffee someday.",
    "Good night!",
    "I can’t believe that happened!",
    "This made my day 😄",
    "That was unexpected!",
    "Do you remember that time?",
    "Haha, that’s hilarious!",
    "I’m working on something new.",
    "That’s a good idea!",
    "Let me check and get back to you.",
    "Thanks for the update!",
    "What do you think about it?",
    "That’s exactly what I was thinking!",
    "Awesome job, keep it up!",
    "Can’t wait for the weekend!",
    "Let’s schedule a call.",
    "How’s work going?",
    "Congratulations 🎉",
    "I missed our chats!",
    "That’s quite impressive!",
    "Just chilling today.",
    "Feeling motivated!",
    "Let’s do this!",
    "This looks perfect!",
    "Hey, how are you doing?",
    "That’s awesome!",
    "Let’s catch up soon.",
    "Keep up the great work!",
    "I totally agree with you.",
    "That’s really interesting!",
    "Good morning!",
    "What’s your plan for today?",
    "Don’t forget to stay hydrated!",
    "You’re doing amazing!",
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

// Change the statastics in 4.1K format
export const formatViews = (num) => {
  if (num >= 1_000_000_000) {
    return +(num / 1_000_000_000).toFixed(1) + "B";
  } else if (num >= 1_000_000) {
    return +(num / 1_000_000).toFixed(1) + "M";
  } else if (num >= 1_000) {
    return +(num / 1_000).toFixed(1) + "K";
  } else {
    return num.toString();
  }
};

// Change the duration in 00:00 format
export const formatDuration = (duration) => {
  if (!duration || typeof duration !== "string") return "0:00";

  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "0:00"; // prevent crash

  const hours = parseInt(match[1] || 0, 10);
  const minutes = parseInt(match[2] || 0, 10);
  const seconds = parseInt(match[3] || 0, 10);

  // format time like 4:10 or 1:04:10
  return hours > 0
    ? `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )}`
    : `${minutes}:${String(seconds).padStart(2, "0")}`;
};
