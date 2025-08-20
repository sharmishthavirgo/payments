import { GET } from '../../app/api/payments/route';

describe('Payments API', () => {
  it('should list all payments if no filters are provided', async () => {
    const mockRequest = {
      url: 'http://localhost/api/payments',
    };
    
    const response = await GET(mockRequest as Request);
    const payments = await response.json();
    
    expect(payments.length).toBe(4);
  });

  it('should filter payments by recipient', async () => {
    const mockRequest = {
      url: 'http://localhost/api/payments?recipient=John%20Doe',
    };

    const response = await GET(mockRequest as Request);
    const payments = await response.json();
    
    expect(payments.length).toBe(2);
    expect(payments[0].recipient).toBe('John Doe');
  });

  it('should filter payments by scheduled date', async () => {
    const mockRequest = {
      url: 'http://localhost/api/payments?scheduled_date=2025-07-27',
    };

    const response = await GET(mockRequest as Request);
    const payments = await response.json();
    
    expect(payments.length).toBe(1);
    expect(payments[0].id).toBe('txn_002');
  });
});