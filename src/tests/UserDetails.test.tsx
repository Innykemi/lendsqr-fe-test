import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserDetails from '../dashboard/UserDetails';

// Mock the useNavigate hook and params
const mockedUsedNavigate = jest.fn();
const mockParams = { id: 1 };

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
  useParams: () => mockParams,
}));

test('displays user details correctly', async () => {
  const mockUser = {
    id: 1,
    profile: {
      firstName: 'John',
      lastName: 'Doe',
      bvn: '1234567890',
      avatar: 'profile-photo.jpg',
      gender: 'Male',
    },
    accountBalance: '5000',
    accountNumber: '123456789',
    education: {
      level: 'Bachelor',
      employmentStatus: 'Employed',
      sector: 'IT',
      duration: '2 years',
      officeEmail: 'john.doe@example.com',
      monthlyIncome: ['5000'],
      loanRepayment: '2000',
    },
    phoneNumber: '1234567890',
    email: 'john.doe@example.com',
    socials: {
      facebook: 'johndoe',
      instagram: 'johndoe',
      twitter: 'johndoe',
    },
    guarantor: {
      firstName: 'Jane',
      lastName: 'Doe',
      phoneNumber: '9876543210',
      gender: 'Female',
      address: '123 Street, City',
    },
  };

  // Mock the user data retrieval
  const localStorageMock = {
    getItem: jest.fn().mockReturnValueOnce(JSON.stringify({ [mockUser.id]: mockUser })),
  };
  Object.defineProperty(window, 'localStorage', { value: localStorageMock });

  render(
    <BrowserRouter>
      <UserDetails />
    </BrowserRouter>
  );

 // Wait for the user details to be displayed
 await screen.findByTestId('full-name');

 // Assert that the user details are displayed correctly
 const userFullName = screen.getByTestId('full-name'); 
 expect(userFullName).toHaveTextContent(`${mockUser.profile.firstName} ${mockUser.profile.lastName}`);

  const userBvn = screen.getByTestId("bvn");
  expect(userBvn).toHaveTextContent(mockUser.profile.bvn);

  const userAccountBalance = screen.getByTestId("account-balance");
  expect(userAccountBalance).toHaveTextContent(`₦${mockUser.accountBalance}`);

  const userAccountNumber = screen.getByTestId("account-number");
  expect(userAccountNumber).toHaveTextContent(`${mockUser.accountNumber}/Providus Bank`);

  expect(userFullName).toBeInTheDocument();
  expect(userBvn).toBeInTheDocument();
  expect(userAccountBalance).toBeInTheDocument();
  expect(userAccountNumber).toBeInTheDocument();
  expect(mockedUsedNavigate).not.toHaveBeenCalled();
});
