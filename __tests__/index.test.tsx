import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

jest.mock('next/router', () => ({
    useRouter() {
        return ({
            route: '/',
            pathname: '',
            query: '',
            asPath: '',
            push: jest.fn(),
            events: {
                on: jest.fn(),
                off: jest.fn()
            },
            beforePopState: jest.fn(() => null),
            prefetch: jest.fn(() => null)
        });
    },
}));

describe('Home', () => {
    it('default test', () => {
        render(<Home />);
        expect("1").toBeTruthy();
    });
});
