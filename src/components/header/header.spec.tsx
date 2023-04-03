import { render } from '@testing-library/react'
import HeaderComponent from '.'
 
describe('@Components @Header', () => {
    it('should render component correctly', () => {
        const { getByAltText } = render(<HeaderComponent />)
        expect(getByAltText('Rick and Morty Logo')).toBeTruthy();
    })
})