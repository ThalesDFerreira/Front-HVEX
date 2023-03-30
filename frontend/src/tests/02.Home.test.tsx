import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import Home from '../pages/Home';

describe('Testando página Home', () => {
  it('deve exibir na página o título', () => {
    render(<Home />);
    const titlleEl = screen.getByRole('heading', {
      name: /tenha informações em tempo real das condições dos ativos e com o monitoramento inteligente/i,
    });

    expect(titlleEl).toBeInTheDocument();
  });

  it('deve exibir na página texto pequeno explicativo', () => {
    render(<Home />);
    const textEl = screen.getByRole('heading', {
      name: /tenha acesso a informações em tempo real, administração remota de dados importantes da rede elétrica como: tensão, corrente, potência passante, energia, temperatura, sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida útil dos ativos e aferindo perdas técnicas e não técnicas\./i,
    });

    expect(textEl).toBeInTheDocument();
  });

  it('deve exibir na página um botão escrito "quero mais informações"', () => {
    render(<Home />);
    const btnInfoEl = screen.getByRole('button', {
      name: /quero mais informações/i,
    });

    expect(btnInfoEl).toBeInTheDocument();
  });

    it('deve exibir na página um botão com a imagem do WhatsApp', () => {
      render(<Home />);
      const btnWhatsEl = screen.getByRole('button', {  name: /whatsapp/i});
      const imgWhatsEl = screen.getByRole('img', {  name: /whatsapp/i});

      expect(btnWhatsEl).toBeInTheDocument();
      expect(imgWhatsEl).toBeInTheDocument();
    });

    it('deve possuir na página um total dois botões', () => {
      render(<Home />);
      const buttonsEl =screen.getAllByRole('button');

      expect(buttonsEl).toHaveLength(2);
    });
});
