import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"


describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
        
    });
    
    test('Debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value } } );

        expect( wrapper.find('p').text().trim() ).toBe( value );

    })

    test('NO debe de postear la información con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    })
    
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        let input = wrapper.find('input');
        const value = 'Hola Mundo'; 
        
        input.simulate('change', { target: { value } } );
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes( 1 );
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );



        input = wrapper.find('input');
        expect( input.prop('value') ).toBe( '' );

        


    })
    
    


})
