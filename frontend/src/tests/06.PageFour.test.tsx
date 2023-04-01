import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import PageFour from '../pages/PageFour';

describe('Testando página PageFour', () => {
  it('deve exibir na página um título', () => {
    render(<PageFour />);
    const titleEl = screen.getByRole('heading', {
      name: /desenvolvido para melhorar a performance dos ativos de distribuição/i,
    });

    expect(titleEl).toBeInTheDocument();
  });

  it('deve exibir na página uma lista não ordenada', () => {
    render(<PageFour />);
    const listEl = screen.getByRole('list');

    expect(listEl).toBeInTheDocument();
  });
});
