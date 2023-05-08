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
	mutation saveBook($profileId: ID!, $book: String!) {
		saveBook(profileId: $profileId, book: $book) {
			_id
			username
			savedBooks
		}
	}
`;

export const REMOVE_BOOK = gql`
	mutation removeBook($book: String!) {
		removeBook(book: $book) {
			_id
			username
			savedBooks
		}
	}
`;
