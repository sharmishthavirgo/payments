'use client'
import React, { useState, useEffect } from 'react'; 
type Payment = {
  id: string;
  amount: number;
  currency: string;
  scheduled_date: string;
  recipient: string;
};

export default function PaymentsPage() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [recipient, setRecipient] = useState("");
  const [scheduledDate, setScheduledDate] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchPayments = async () => {
      const query = new URLSearchParams();
      if (recipient) {
        query.append("recipient", recipient);
      }
      if (scheduledDate) {
        query.append("scheduled_date", scheduledDate);
      }

      const res = await fetch(`/api/payments?${query.toString()}`);
      const data = await res.json();
      setPayments(data);
    };

    fetchPayments();
  }, [recipient, scheduledDate]);

  // Bonus 1: Calculate total amount
  useEffect(() => {
    const total = payments.reduce((sum, payment) => sum + payment.amount, 0);
    setTotalAmount(total);
  }, [payments]);

  // Bonus 2: Highlight payments within the next 24 hours
  const isWithin24Hours = (dateStr: string) => {
    const now = new Date();
    const scheduled = new Date(dateStr);
    const diffInHours = (scheduled.getTime() - now.getTime()) / (1000 * 60 * 60);
    return diffInHours > 0 && diffInHours <= 24;
  };


  return (
    <div style={{ padding: "20px" }}>
      <h1>Pending Payments</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Recipient:
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </label>
        <label style={{ marginLeft: "20px" }}>
          Scheduled Date:
          <input
            type="date"
            value={scheduledDate}
            onChange={(e) => setScheduledDate(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '20px', fontWeight: 'bold' }}>
        Total Amount: {totalAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </div>
      
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Recipient</th>
            <th style={tableHeaderStyle}>Amount</th>
            <th style={tableHeaderStyle}>Scheduled Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr
              key={payment.id}
              style={{
                borderBottom: "1px solid #ddd",
                backgroundColor: isWithin24Hours(payment.scheduled_date)
                  ? "#fff8e1"
                  : "transparent",
              }}
            >
              <td style={tableCellStyle}>{payment.id}</td>
              <td style={tableCellStyle}>{payment.recipient}</td>
              <td style={tableCellStyle}>
                {payment.amount.toLocaleString("en-US", {
                  style: "currency",
                  currency: payment.currency,
                })}
              </td>
              <td style={tableCellStyle}>{payment.scheduled_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tableHeaderStyle: React.CSSProperties = {
  padding: "12px",
  textAlign: "left",
  borderBottom: "1px solid #ddd",
};

const tableCellStyle: React.CSSProperties = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
};
