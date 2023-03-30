import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import PageTwo from '../pages/PageTwo';

describe('Testando página PageTwo', () => {
  it('deve exibir na página o título', () => {
    render(<PageTwo />);
    const titlleEl = screen.getByTestId(/title-page-two/i);

    expect(titlleEl).toBeInTheDocument();
  });

  it('deve exibir na página um sub-título', () => {
    render(<PageTwo />);
    const subTitleEl = screen.getByRole('heading', {
      name: /é o dispositivo capaz de integrar os transformadores as redes inteligentes/i,
    });

    expect(subTitleEl).toBeInTheDocument();
  });

  it('deve exibir na página texto pequeno explicativo', () => {
    render(<PageTwo />);
    const textEl = screen.getByRole('heading', {
      name: /o omni trafo envia informações em tempo real, permitindo a administração remota de dados importantes da rede elétrica, como tensão, corrente, potência passante, energia, temperatura, sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida útil dos ativos e aferindo perdas técnicas e não técnicas\./i,
    });

    expect(textEl).toBeInTheDocument();
  });

  it('deve exibir na página quatro imagens com descrição', () => {
    render(<PageTwo />);
    const imgProtecaoEl = screen.getByRole('img', {
      name: /sistema de proteção/i,
    });
    const textProtecaoEl = screen.getByText(/sistema de proteção/i);

    const imgIntegracaoEl = screen.getByRole('img', {
      name: /sistema de proteção/i,
    });
    const textIntegracaoEl = screen.getByText(/sistema de proteção/i);

    const imgGestaoEl = screen.getByRole('img', {
      name: /sistema de proteção/i,
    });
    const textGestaoEl = screen.getByText(/sistema de proteção/i);

    const imgDeteccaoEl = screen.getByRole('img', {
      name: /sistema de proteção/i,
    });
    const textDeteccaoEl = screen.getByText(/sistema de proteção/i);

    expect(imgProtecaoEl).toBeInTheDocument();
    expect(textProtecaoEl).toBeInTheDocument();
    expect(imgIntegracaoEl).toBeInTheDocument();
    expect(textIntegracaoEl).toBeInTheDocument();
    expect(imgGestaoEl).toBeInTheDocument();
    expect(textGestaoEl).toBeInTheDocument();
    expect(imgDeteccaoEl).toBeInTheDocument();
    expect(textDeteccaoEl).toBeInTheDocument();
  });

  it('deve possuir na página um total de quatro imagens', () => {
    render(<PageTwo />);
    const imgEl = screen.getAllByRole('img');

    expect(imgEl).toHaveLength(4);
  });
});
