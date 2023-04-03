import { render } from '@testing-library/react'
import Character from '.';

 
describe('@Components @Header', () => {
    it('should render component correctly', () => {
        const characterData = {
            name: 'Jhon Doe',
            desc: 'Falafiote', 
            imgUrl: 'https://www.shutterstock.com/image-vector/fake-stamp-vector-grunge-rubber-260nw-1049845097.jpg',
        }
        const { getByText, getByAltText } = render(
            <Character
                {...characterData}
            />
        )

        expect(getByText(characterData.name).textContent).toBe(characterData.name);
        expect(getByText(characterData.desc).textContent).toBe(characterData.desc);
        expect(getByAltText(characterData.name)).toHaveAttribute('src');
    })
})