import { render } from '@testing-library/react'
import Title from '.'
 
describe('Title', () => {
    it('should render title correctly', () => {
        const { getByText } = render(
            <Title>John Doe</Title>
        )

        expect(getByText('John Doe')).toBeTruthy()
    })
})