import { render, screen } from "@testing-library/react"
import Operator from  './Operator'

describe('Operator Component', () => {
    test('it render correctly', () => {
        render(<Operator />)
    })

    test('it should have plus operator', () => {
        render(<Operator type='plus' />)
        expect(screen.getByText('+')).toBeInTheDocument();
    })
    test('it should have minus operator', () => {
        render(<Operator type='minus' />)
        expect(screen.getByText('-')).toBeInTheDocument();
    })
    test('it should have multiply operator', () => {
        render(<Operator type='multiply' />)
        expect(screen.getByText('x')).toBeInTheDocument();
    })
    test('it should have divide operator', () => {
        render(<Operator type='divide' />)
        expect(screen.getByText('/')).toBeInTheDocument();
    })
})