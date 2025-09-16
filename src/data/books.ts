import { Book } from "@/types/book";
import gatsbycover from "@/assets/gatsby-cover.jpg";
import mockingbirdcover from "@/assets/mockingbird-cover.jpg";
import cover1984 from "@/assets/1984-cover.jpg";
import pridecover from "@/assets/pride-cover.jpg";
import hobbitcover from "@/assets/hobbit-cover.jpg";
import atomichabitscover from "@/assets/atomic-habits-cover.jpg";
import silentpatientcover from "@/assets/silent-patient-cover.jpg";
import sapienscover from "@/assets/sapiens-cover.jpg";

export const mockBooks: Book[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 12.99,
    originalPrice: 16.99,
    category: "Classic Literature",
    description: "A masterpiece of American literature set in the Jazz Age, exploring themes of wealth, love, and the American Dream through the eyes of Nick Carraway.",
    rating: 4.5,
    reviewCount: 1247,
    coverImage: gatsbycover,
    isbn: "978-0-7432-7356-5",
    publishedDate: "1925-04-10",
    pages: 180,
    language: "English",
    publisher: "Scribner",
    inStock: true,
    stockCount: 25
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 14.99,
    category: "Classic Literature",
    description: "A gripping tale of racial injustice and childhood innocence in the American South, told through the eyes of Scout Finch.",
    rating: 4.8,
    reviewCount: 2156,
    coverImage: mockingbirdcover,
    isbn: "978-0-06-112008-4",
    publishedDate: "1960-07-11",
    pages: 376,
    language: "English",
    publisher: "J.B. Lippincott & Co.",
    inStock: true,
    stockCount: 18
  },
  {
    id: "3",
    title: "1984",
    author: "George Orwell",
    price: 13.99,
    originalPrice: 17.99,
    category: "Science Fiction",
    description: "A dystopian masterpiece about totalitarianism, surveillance, and the power of thought in a world where Big Brother watches everything.",
    rating: 4.7,
    reviewCount: 3421,
    coverImage: cover1984,
    isbn: "978-0-452-28423-4",
    publishedDate: "1949-06-08",
    pages: 328,
    language: "English",
    publisher: "Secker & Warburg",
    inStock: true,
    stockCount: 32
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 11.99,
    category: "Romance",
    description: "A witty and romantic novel about Elizabeth Bennet and Mr. Darcy, exploring themes of love, class, and social expectations.",
    rating: 4.6,
    reviewCount: 1876,
    coverImage: pridecover,
    isbn: "978-0-14-143951-8",
    publishedDate: "1813-01-28",
    pages: 432,
    language: "English",
    publisher: "T. Egerton",
    inStock: true,
    stockCount: 22
  },
  {
    id: "5",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 15.99,
    category: "Fantasy",
    description: "Follow Bilbo Baggins on an unexpected journey to help a group of dwarves reclaim their homeland from the dragon Smaug.",
    rating: 4.9,
    reviewCount: 4532,
    coverImage: hobbitcover,
    isbn: "978-0-547-92822-7",
    publishedDate: "1937-09-21",
    pages: 310,
    language: "English",
    publisher: "George Allen & Unwin",
    inStock: true,
    stockCount: 15
  },
  {
    id: "6",
    title: "Atomic Habits",
    author: "James Clear",
    price: 18.99,
    category: "Self-Help",
    description: "A comprehensive guide to building good habits and breaking bad ones through small, incremental changes.",
    rating: 4.8,
    reviewCount: 2891,
    coverImage: atomichabitscover,
    isbn: "978-0-7352-1129-2",
    publishedDate: "2018-10-16",
    pages: 320,
    language: "English",
    publisher: "Avery",
    inStock: true,
    stockCount: 41
  },
  {
    id: "7",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 16.99,
    category: "Mystery",
    description: "A psychological thriller about a woman who refuses to speak after allegedly murdering her husband.",
    rating: 4.4,
    reviewCount: 1653,
    coverImage: silentpatientcover,
    isbn: "978-1-250-30170-7",
    publishedDate: "2019-02-05",
    pages: 336,
    language: "English",
    publisher: "Celadon Books",
    inStock: true,
    stockCount: 28
  },
  {
    id: "8",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 19.99,
    originalPrice: 24.99,
    category: "History",
    description: "A brief history of humankind exploring how Homo sapiens came to dominate the world.",
    rating: 4.5,
    reviewCount: 3267,
    coverImage: sapienscover,
    isbn: "978-0-06-231609-7",
    publishedDate: "2014-09-04",
    pages: 443,
    language: "English",
    publisher: "Harper",
    inStock: true,
    stockCount: 19
  }
];

export const categories = [
  "All Books",
  "Classic Literature", 
  "Science Fiction",
  "Romance",
  "Fantasy",
  "Self-Help",
  "Mystery",
  "History",
  "Biography",
  "Business"
];

export const featuredBooks = mockBooks.slice(0, 4);