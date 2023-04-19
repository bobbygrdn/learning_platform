import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Login from '../../src/components/authentication/Login';

describe('Login component', () => {
    let usernameInput, passwordInput, submitButton, errorMessage;

    beforeEach(() => {
        usernameInput = screen.getByTestId('username-input');
        passwordInput = screen.getByTestId('password-input');
        submitButton = screen.getByTestId('submit-button');
        errorMessage = screen.getByTestId('error-message');
    });

    it('should render without crashing', () => {
        const { container } = render(<Login />);
        expect(container).toMatchSnapshot();
    })

    it('allows user to enter username and password', () => {
        render(<Login />);

        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

        expect(usernameInput).toHaveValue('testuser');
        expect(passwordInput).toHaveValue('testpassword');
    });

    it('disables login button until both username and password are entered', () => {
        render(<Login />);

        expect(submitButton).toBeDisabled();

        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        expect(submitButton).not.toBeDisabled();

        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
        expect(submitButton).not.toBeEnabled();
    })

    it('calls login function when login button is clicked', () => {
        const login = jest.fn();
        render(<Login login={login} />);

        fireEvent.click(submitButton);

        expect(login).toHaveBeenCalled();
    });

    it('returns error message if username or password is incorrect', () => {
        const login = jest.fn(() => {
            throw new Error('Incorrect username or password');
        });

        render(<Login login={login} />);

        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
        fireEvent.click(submitButton);

        expect(errorMessage).toHaveTextContent('Incorrect username or password');
    })

    it('redirects user to correct page if login is successful', () => {
        const login = jest.fn(() => {
            return { success: true };
        });

        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <Login login={login} />
            </Router>
        );

        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
        fireEvent.click(submitButton);

        expect(history.location.pathname).toBe('/dashboard');
    });

})
