import { FAQQuestion } from '@/components/FAQ';

export const WroclawFAQ: FAQQuestion[] = [
	{
		id: '1',
		question: 'How to become Wrocław meetup sponsor?',
		answer: 'contact',
	},
	{
		id: '2',
		question: 'Example question',
		answer: 'Example answer',
	},
	{
		id: '3',
		question: 'How to become Wrocław speaker?',
		answer: (
			<>
				Create{' '}
				<a href="https://github.com/meetjspl/wroclaw/issues">issue on gitHub</a>
			</>
		),
	},
	{
		id: '4',
		question: 'How to join to our meetup?',
		answer: (
			<>
				Register to upcoming event on{' '}
				<a href="https://www.meetup.com/pl-PL/meet-js-wroclaw/">meetup.com</a>.
				Join us on time in venue. It's easy 🥳
			</>
		),
	},
	{
		id: '5',
		question: 'How is it cost to join event?',
		answer: (
			<>
				Generally our event are FREE! Only{' '}
				<a href="https://summit.meetjs.pl">summit</a> is paid event.
			</>
		),
	},
];
