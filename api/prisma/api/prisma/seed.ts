import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 1. Create 4 Genres
  const fiction = await prisma.genre.create({ data: { name: 'Fiction' } });
  const science = await prisma.genre.create({ data: { name: 'Science' } });
  const history = await prisma.genre.create({ data: { name: 'History' } });
  const tech = await prisma.genre.create({ data: { name: 'Technology' } });

  // 2. Create 16 Books distributed across genres
  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "9780743273565", genreId: fiction.id },
    { title: "1984", author: "George Orwell", isbn: "9780451524935", genreId: fiction.id },
    { title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "9780061120084", genreId: fiction.id },
    { title: "The Hobbit", author: "J.R.R. Tolkien", isbn: "9780547928227", genreId: fiction.id },
    { title: "Dune", author: "Frank Herbert", isbn: "9780441172719", genreId: fiction.id },
    { title: "A Brief History of Time", author: "Stephen Hawking", isbn: "9780553380163", genreId: science.id },
    { title: "Cosmos", author: "Carl Sagan", isbn: "9780345539434", genreId: science.id },
    { title: "The Selfish Gene", author: "Richard Dawkins", isbn: "9780198788607", genreId: science.id },
    { title: "Sapiens", author: "Yuval Noah Harari", isbn: "9780062316097", genreId: history.id },
    { title: "Guns, Germs, and Steel", author: "Jared Diamond", isbn: "9780393317558", genreId: history.id },
    { title: "The Wright Brothers", author: "David McCullough", isbn: "9781476728759", genreId: history.id },
    { title: "Clean Code", author: "Robert C. Martin", isbn: "9780132350884", genreId: tech.id },
    { title: "The Pragmatic Programmer", author: "Andrew Hunt", isbn: "9780201616224", genreId: tech.id },
    { title: "Design Patterns", author: "Erich Gamma", isbn: "9780201633610", genreId: tech.id },
    { title: "Introduction to Algorithms", author: "Thomas H. Cormen", isbn: "9780262033848", genreId: tech.id },
    { title: "The Mythical Man-Month", author: "Frederick P. Brooks Jr.", isbn: "9780201835953", genreId: tech.id },
  ];

  for (const book of books) {
    await prisma.book.create({ data: book });
  }

  console.log('Database seeded successfully with 4 genres and 16 books!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
