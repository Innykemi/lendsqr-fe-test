import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from "../login/Login";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

test('renders login form', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const loginButton = screen.getByText('Log In');

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});

test('displays error when email is not provided', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const emailInput = screen.getByPlaceholderText('Email');
//   const passwordInput = screen.getByPlaceholderText('Password');
  const loginButton = screen.getByText('Log In');

  fireEvent.change(emailInput, { target: { value: '' } });
  fireEvent.click(loginButton);

  const errorText = screen.getByText('Email is required!');
  expect(errorText).toBeInTheDocument();
});

test('displays error when password is not provided', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const loginButton = screen.getByText('Log In');
  
  fireEvent.change(emailInput, { target: { value: 'email@sample.com' } });
  fireEvent.change(passwordInput, { target: { value: '' } });
  fireEvent.click(loginButton);

  const errorText = screen.getByText('Password is required!');
  expect(errorText).toBeInTheDocument();
});

test('displays error when password is less than 8 characters long', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const loginButton = screen.getByText('Log In');
  fireEvent.change(emailInput, { target: { value: 'email@sample.com' } });
  fireEvent.change(passwordInput, { target: { value: 'abc123' } });
  fireEvent.click(loginButton);

  const errorText = screen.getByText('Password must be at least 8 characters long!');
  expect(errorText).toBeInTheDocument();
});

test('navigates to users page on successful login', () => {
  
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('Log In');
  
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);
  
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/users');
  });