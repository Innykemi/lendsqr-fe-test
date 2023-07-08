/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import Dashboard from '../dashboard/Users';
import { getAllUsers } from '../api';

jest.mock('../api', () => ({
  getAllUsers: jest.fn(),
}));

const sampleUsers = [
  {
    id: 1,
    companyName: 'Company A',
    username: 'userA',
    email: 'userA@example.com',
    phoneNumber: '1234567890',
    createdAt: '2023-01-01',
    status: 'active',
  },
  {
    id: 2,
    companyName: 'Company B',
    username: 'userB',
    email: 'userB@example.com',
    phoneNumber: '9876543210',
    createdAt: '2023-01-02',
    status: 'inactive',
  },
];

test('displays users data after loading', async () => {
  (getAllUsers as jest.Mock).mockResolvedValue(sampleUsers);

  await act(async () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
  });

  // Wait for the loading state to disappear
  await waitFor(() => {
    const loadingSpinner = screen.queryByTestId('loading-spinner');
    expect(loadingSpinner).not.toBeInTheDocument();
  });

  // Assert that the user data is displayed
  const userACompany = screen.getByText('Company A');
  const userBCompany = screen.getByText('Company B');
  expect(userACompany).toBeInTheDocument();
  expect(userBCompany).toBeInTheDocument();
});
