import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
	mutation loginUser($email: String!, $password: String!) {
		loginUser(email: $email, password: $password) {
			token
			User {
				_id
				username
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser($username: String!, $email: String!, $password: String!) {
		addUser(name: $name, email: $email, password: $password) {
			token
			User {
				_id
				username
			}
		}
	}
`;

export const SAVE_BOOK = gql`
	mutation saveBook($userId: ID!, $book: Book!) {
		saveBook(userId: $userId, book: $Book) {
			_id
			username
			savedBooks
		}
	}
`;

export const REMOVE_BOOK = gql`
	mutation removeBook(bookId: String!) {
		removeBook(book: $book) {
			_id
			bookId
			title
		}
	}
`;
