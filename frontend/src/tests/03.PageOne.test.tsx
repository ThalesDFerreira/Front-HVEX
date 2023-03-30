import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import PageOne from '../pages/PageOne';

describe('Testando página PageOne', () => {
  it('deve exibir na página uma imagem (fotografia de usinas)', () => {
    render(<PageOne />);
    const imgEl = screen.getByRole('img', { name: /usina-template/i });

    expect(imgEl).toBeInTheDocument();
  });

  it('deve exibir na página um título', () => {
    render(<PageOne />);
    const titleEl = screen.getByRole('heading', {
      name: /seja bem-vindo a era da energia inteligente/i,
    });

    expect(titleEl).toBeInTheDocument();
  });

  it('deve exibir na página um texto pequeno', () => {
    render(<PageOne />);
    const textEl = screen.getByText(
      /as redes inteligentes são um caminho sem volta, o desenvolvimento e disceminação de dispositivos de medição e monitoramento são as ferramentas para redução de custos, perdas e trazem mais previsibilidade para as utilities de energia\./i
    );

    expect(textEl).toBeInTheDocument();
  });

  it('deve exibir na página uma lista não ordenada', () => {
    render(<PageOne />);
    const listEl = screen.getByRole('list');

    expect(listEl).toBeInTheDocument();
  });
});
