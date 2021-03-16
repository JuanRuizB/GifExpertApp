import { GifGridItem } from "../../components/GifGridItem"
import { shallow } from "enzyme"


describe('Pruebas en <GifGridItem', () => {

    const title = "Titulo de la prueba";
    const url = "https://media3.giphy.com/media/l0Iyoy5VglR6QKJiw/giphy.gif?cid=22b370e9r9q8j3rzb3l8rxm1yg82vbp9y17h27ru31n6sed8&rid=giphy.gif";
    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);
    
    test('Debe de mostrar el componente correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });
    
    test('Debe de tener un párrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    });

    test('Debe de tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });

    test('debe de tener animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes("animate__fadeIn") ).toBe( true );

    })
    
    
    


})
