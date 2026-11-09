# Library Management System - Data Layer

This repository contains the backend data layer for a Library Management System, built with NestJS, Prisma, and PostgreSQL.

## Schema Decisions

**Why `Book` references `Genre` via a foreign key (`genreId`) instead of embedding `Genre` data directly inside `Book`:**
PostgreSQL is a relational database. We use foreign keys to model relationships between entities rather than embedding data directly. If we embedded the genre details inside every single book record, we would create massive data duplication. Every time we needed to update a genre's name, we would have to find and update every single book associated with it. By using a foreign key (`genreId`), the genre data is stored in exactly one place, ensuring data integrity and normalizing our database. 

## Stretch Goal: Prisma vs. Document Databases
Modeling in Prisma felt heavily structured and strictly typed compared to working with a document database (like MongoDB). In Prisma, the `schema.prisma` acts as a strict contract, and migrations enforce that the database tables match the code exactly. In a document database, you have much more flexibility to embed related data directly (like putting reviews inside a book document) and allow schemas to evolve dynamically, but you lose the strong relational constraints and compile-time type safety that Prisma provides.
