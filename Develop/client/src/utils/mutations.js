import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
	mutation addProfile($name: String!, $email: String!, $password: String!) {
		addProfile(name: $name, email: $email, password: $password) {
			token
			profile {
				_id
				name
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addSkill($profileId: ID!, $skill: String!) {
		addSkill(profileId: $profileId, skill: $skill) {
			_id
			name
			skills
		}
	}
`;

export const SAVE_BOOK = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			profile {
				_id
				name
			}
		}
	}
`;

export const REMOVE_BOOK = gql`
	mutation removeSkill($skill: String!) {
		removeSkill(skill: $skill) {
			_id
			name
			skills
		}
	}
`;
