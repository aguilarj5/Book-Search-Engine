const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Query {
		me: User
	}

  input saveBookInput {
    books: [Book.authors]
    description: String!
    title: String!
    bookId: ID!
    image: String!
    link: String!
  }

	type Mutation {
		login(email: String!, password: String!): Auth
		addUser(username: String!, email: String!, password: String!): Auth
    saveBook(criteria: saveBookInput): User
    removeBook(bookId: String!): User
	}

	type User {
		_id: ID
		username: String
		email: String
		bookCount: Number
		savedBooks: [Book]!
	}

	type Book {
		bookId: ID
		authors: [String]
		description: String
		title: String
		image: String
		link: String
	}

	type Auth {
		token: ID!
		user: User
	}
`;

module.exports = typeDefs;
