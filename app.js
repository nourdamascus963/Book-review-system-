// Book Review System - Main Application
const axios = require('axios');

console.log("📚 Book Review System Started!");
console.log("==============================");

// Mock data for testing
const mockBooks = [
    { isbn: "1234567890", title: "JavaScript Basics", author: "John Doe" },
    { isbn: "0987654321", title: "Node.js Guide", author: "Jane Smith" }
];

// Task 1: Get all books
async function getAllBooks() {
    console.log("\n✅ Task 1: Getting all books...");
    return mockBooks;
}

// Test the function
getAllBooks().then(books => {
    console.log("Books found:", books.length);
    console.log("First book:", books[0]?.title || "No books");
});
