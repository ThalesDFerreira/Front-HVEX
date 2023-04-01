import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import PageFive from '../pages/PageFive';

describe('Testando página PageFive', () => {
  it('deve exibir na página uma pergunta', () => {
    render(<PageFive />);
    const askEl = screen.getByRole('heading', {
      name: /quer saber mais sobre como podemos te ajudar a melhorar a performance de seus ativos\?/i,
    });

    expect(askEl).toBeInTheDocument();
  });

  it('deve exibir na página um botão "Fale com um consultor"', () => {
    render(<PageFive />);
    const listEl = screen.getByRole('button', {
      name: /falar com um consultor/i,
    });

    expect(listEl).toBeInTheDocument();
  });
});
