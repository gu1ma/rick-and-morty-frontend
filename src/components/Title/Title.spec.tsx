import { render } from '@testing-library/react'
import Title from '.'
 
describe('@Components @Title', () => {
    it('should render component correctly', () => {
        const { getByText } = render(
            <Title>John Doe</Title>
        )

        expect(getByText('John Doe')).toBeTruthy()
    })
})