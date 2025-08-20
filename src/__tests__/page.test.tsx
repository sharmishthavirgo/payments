import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import PaymentsPage from "../app/page";

// Mock the global fetch function
const mockPayments = [
  {
    id: "txn_001",
    amount: 5000,
    currency: "USD",
    scheduled_date: "2025-07-26",
    recipient: "John Doe",
  },
  {
    id: "txn_002",
    amount: 7500,
    currency: "USD",
    scheduled_date: "2025-07-27",
    recipient: "Jane Smith",
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockPayments),
  })
) as jest.Mock;

test("renders payments table with mock data", async () => {
  render(<PaymentsPage />);

  // Wait for the component to fetch and render the mock data
  await waitFor(() => {
    // Check if the recipient names are present
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();

    // Check if the amount is present
    expect(screen.getByText("$5,000.00")).toBeInTheDocument();
  });
});