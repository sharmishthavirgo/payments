import { NextResponse } from 'next/server';
import paymentsData from '../../data/payments.json';

type Payment = {
  id: string;
  amount: number;
  currency: string;
  scheduled_date: string;
  recipient: string;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const recipient = searchParams.get('recipient');
  const scheduled_date = searchParams.get('scheduled_date');

  let filteredPayments = paymentsData as Payment[];

  if (recipient) {
    filteredPayments = filteredPayments.filter(p =>
      p.recipient.toLowerCase().includes(recipient.toLowerCase())
    );
  }

  if (scheduled_date) {
    filteredPayments = filteredPayments.filter(p =>
      p.scheduled_date === scheduled_date
    );
  }

  return NextResponse.json(filteredPayments);
}