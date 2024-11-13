import { FAQQuestion } from '@/components/FAQ';

export const BielskoBialaFAQ: FAQQuestion[] = [
  {
    id: '1',
    question: 'How to become Bielsko-Biała meetup sponsor?',
    answer: 'Contact local Organizer.',
  },
  {
    id: '2',
    question: 'How to become Bielsko-Biała speaker?',
    answer: 'Contact local Organizer.',
  },
  {
    id: '3',
    question: 'How to join to our meetup?',
    answer: 'This meetup is under construction. Stay tuned!',
  },
  {
    id: '4',
    question: 'What does it cost to join event?',
    answer: (
      <>
        Generally our events are FREE! Only{' '}
        <a href="https://summit.meetjs.pl" about="_blank">
          summit
        </a>{' '}
        is paid event.
      </>
    ),
  },
]; 