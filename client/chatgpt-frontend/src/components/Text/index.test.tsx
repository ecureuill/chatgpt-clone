import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker/locale/pt_BR';
import Text from '.';

describe('Text component', () => {

	it('should render h1 element when variant=title-1', () => {
		const sentence = faker.lorem.sentence();

		render(
			<Text variant='title'>
				{ sentence }
			</Text>
		);

		const heading = screen.getByText(sentence, { selector: 'h1'	});

		expect(heading).toBeInTheDocument();
	});

	it('should render p element when variant=paragraph', () => {
		const sentence = faker.lorem.sentence();

		render(
			<Text variant='paragraph'>
				{ sentence }
			</Text>
		);

		const paragraph = screen.getByText(sentence, { selector: 'p'	});

		expect(paragraph).toBeInTheDocument();

	});

	it('should render p element with class Text--normal when variant=paragraph and size is not defined', () => {
		const sentence = faker.lorem.sentence();

		render(
			<Text variant='paragraph'>
				{ sentence }
			</Text>
		);

		const paragraph = screen.getByText(sentence, { selector: 'p'	});

		expect(paragraph).toHaveClass('Text--normal');

	});

	it('should render with class Text--tiny when size=tiny', () => {
		const sentence = faker.lorem.sentence();

		render(
			<Text variant='paragraph' size='tiny'>
				{ sentence }
			</Text>
		);

		const paragraph = screen.getByText(sentence, { selector: 'p'	});

		expect(paragraph).toHaveClass('Text--tiny');

	});

	it('should render with class Text--small when size=small', () => {
		const sentence = faker.lorem.sentence();

		render(
			<Text variant='paragraph' size='small'>
				{ sentence }
			</Text>
		);

		const paragraph = screen.getByText(sentence, { selector: 'p'	});

		expect(paragraph).toHaveClass('Text--small');

	});

	it('should render with class Text--medium when size=medium', () => {
		const sentence = faker.lorem.sentence();

		render(
			<Text variant='paragraph' size='medium'>
				{ sentence }
			</Text>
		);

		const paragraph = screen.getByText(sentence, { selector: 'p'	});

		expect(paragraph).toHaveClass('Text--medium');

	});
});