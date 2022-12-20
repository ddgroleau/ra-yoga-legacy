import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home', () => {
    it('default test', () => {
        render(<Home />);
        expect("1").toBeTruthy();
    });
});
