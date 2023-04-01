import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Testando Footer', () => {
  it('deve exibir na página a logo HVEX', () => {
    render(<Footer />);
    const imgEl = screen.getByRole('img', { name: /hvex/i });

    expect(imgEl).toBeInTheDocument();
  });

  it('deve exibir na página um endereço', () => {
    render(<Footer />);
    const adressEl = screen.getByRole('heading', { name: /endereço/i });
    const adressCompleteEl = screen.getByText(
      /r\. ismael pinto de noronha, 86 - nossa sra\. de fatima, itajubá - mg, 37502-508/i
    );

    expect(adressEl).toBeInTheDocument();
    expect(adressCompleteEl).toBeInTheDocument();
  });

  it('deve exibir na página informações de contato como "Telefone" e "email"', () => {
    render(<Footer />);
    const contactEl = screen.getByRole('heading', { name: /contato/i });
    const telEl = screen.getByText(/\(35\) 3622-2699/i);
    const emailEl = screen.getByText(/contato@hvex\.com\.br/i);

    expect(contactEl).toBeInTheDocument();
    expect(telEl).toBeInTheDocument();
    expect(emailEl).toBeInTheDocument();
  });

  it('deve exibir na página informações das redes socias', () => {
    render(<Footer />);
    const socialMediaEl = screen.getByRole('heading', {
      name: /confira nossa redes/i,
    });
    const linkedinEl = screen.getByRole('img', { name: /linkedin/i });
    const facebookEl = screen.getByRole('img', { name: /facebook/i });
    const instagranEl = screen.getByRole('img', { name: /instagram/i });
    const youtubeEl = screen.getByRole('img', { name: /youtube/i });

    expect(socialMediaEl).toBeInTheDocument();
    expect(linkedinEl).toBeInTheDocument();
    expect(facebookEl).toBeInTheDocument();
    expect(instagranEl).toBeInTheDocument();
    expect(youtubeEl).toBeInTheDocument();
  });

  it('deve possuir na página um total de cinco imagens', () => {
    render(<Footer />);
    const imgEl = screen.getAllByRole('img');

    expect(imgEl).toHaveLength(5);
  });

  it('deve exibir na página as "Políticas de Privacidade"', () => {
    render(<Footer />);
    const policiesEl = screen.getByText(/políticas de privacidade/i);

    expect(policiesEl).toBeInTheDocument();
  });

  it('deve exibir na página os "Termos de Uso"', () => {
    render(<Footer />);
    const termsOfUseEl = screen.getByText(/termos de uso/i);

    expect(termsOfUseEl).toBeInTheDocument();
  });

  it('deve exibir na página "HVEX © 2021 | Todos os direitos reservados"', () => {
    render(<Footer />);
    const reservedRightsEl = screen.getByText(
      /hvex © 2021 \| todos os direitos reservados\./i
    );

    expect(reservedRightsEl).toBeInTheDocument();
  });
});
