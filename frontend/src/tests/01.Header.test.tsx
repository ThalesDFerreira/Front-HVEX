import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Testando Header', () => {
  it('deve exibir a logo da empresa HVEX', () => {
    render(<Header />);
    const logoEl = screen.getByRole('img', { name: /hvex/i });

    expect(logoEl).toBeInTheDocument();
  });

  it('deve exibir um botão escrito "omni trafo"', () => {
    render(<Header />);
    const btnOmniEl = screen.getByRole('button', { name: /omni trafo/i });

    expect(btnOmniEl).toBeInTheDocument();
  });

  it('deve exibir um botão escrito "sinalizador de faltas"', () => {
    render(<Header />);
    const btnSinalizadorEl = screen.getByRole('button', {
      name: /sinalizador de faltas/i,
    });

    expect(btnSinalizadorEl).toBeInTheDocument();
  });

  it('deve exibir um botão escrito "acoplador dp"', () => {
    render(<Header />);
    const btnAcopladorEl = screen.getByRole('button', {
      name: /acoplador dp/i,
    });

    expect(btnAcopladorEl).toBeInTheDocument();
  });

  it('deve exibir um botão escrito "comprar agora"', () => {
    render(<Header />);
    const btnComprarEl = screen.getByRole('button', { name: /comprar agora/i });

    expect(btnComprarEl).toBeInTheDocument();
  });

  it('deve possuir no total quatro botões', () => {
    render(<Header />);
    const buttonsEl =screen.getAllByRole('button');

    expect(buttonsEl).toHaveLength(4);
  });
});
