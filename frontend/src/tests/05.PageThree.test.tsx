import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import PageThree from '../pages/PageThree';

describe('Testando página PageThree', () => {
  it('deve exibir na página o título', () => {
    render(<PageThree />);
    const titlleEl = screen.getByTestId(/title-page-three/i);

    expect(titlleEl).toBeInTheDocument();
  });

  it('deve exibir na página um sub-título', () => {
    render(<PageThree />);
    const subTitleEl = screen.getByRole('heading', {
      name: /monitoramento inteligente de transformadores de distribuição/i,
    });

    expect(subTitleEl).toBeInTheDocument();
  });

  it('deve exibir na página texto pequeno explicativo', () => {
    render(<PageThree />);
    const textEl = screen.getByRole('heading', {
      name: /o omni trafo é uma solução consolidada para monitoramento de ativos\. através deste equipamento, informações importantes da rede são enviadas em tempo real , permitindo, assim, a administração remota de dados como:/i,
    });

    expect(textEl).toBeInTheDocument();
  });

  it('deve exibir na página oito imagens com descrição', () => {
    render(<PageThree />);
    const imgMonitoramentoEl = screen.getByRole('img', { name: /icon1/i });
    const textMonitoramentoEl = screen.getByText(
      /monitoramento de tensão, corrente e carga;/i
    );

    const imgAnaliseEl = screen.getByRole('img', { name: /icon2/i });
    const textAnaliseEl = screen.getByText(
      /análise de perda de vida útil do transformador;/i
    );

    const imgMediçãoEl = screen.getByTestId(/image3/i);
    const textMediçãoEl = screen.getByText(
      /medição do balanço energético de perdas/i
    );

    const imgDeteccaoEl = screen.getByRole('img', {
      name: /icon4/i,
    });
    const textDeteccaoEl = screen.getByText(
      /detecção de faltas na rede elétrica/i
    );

    const imgPotenciaEl = screen.getByRole('img', {
      name: /icon5/i,
    });
    const textPotenciaEl = screen.getByText(/análise de fator de potência/i);

    const imgHarmonicasEl = screen.getByTestId(/image6/i);
    const textHarmonicasEl = screen.getByText(
      /harmônicas de corrente e tensão/i
    );

    const imgTemperaturaEl = screen.getByTestId(/image7/i);
    const textTemperaturaEl = screen.getByText(
      /medição de temperatura interna/i
    );

    const imgSupervisaoEl = screen.getByTestId(/image8/i);
    const textSupervisaoEl = screen.getByText(/supervisão de baixa tensão/i);

    expect(imgMonitoramentoEl).toBeInTheDocument();
    expect(textMonitoramentoEl).toBeInTheDocument();
    expect(imgAnaliseEl).toBeInTheDocument();
    expect(textAnaliseEl).toBeInTheDocument();
    expect(imgMediçãoEl).toBeInTheDocument();
    expect(textMediçãoEl).toBeInTheDocument();
    expect(imgDeteccaoEl).toBeInTheDocument();
    expect(textDeteccaoEl).toBeInTheDocument();
    expect(imgPotenciaEl).toBeInTheDocument();
    expect(textPotenciaEl).toBeInTheDocument();
    expect(imgHarmonicasEl).toBeInTheDocument();
    expect(textHarmonicasEl).toBeInTheDocument();
    expect(imgTemperaturaEl).toBeInTheDocument();
    expect(textTemperaturaEl).toBeInTheDocument();
    expect(imgSupervisaoEl).toBeInTheDocument();
    expect(textSupervisaoEl).toBeInTheDocument();
  });

  it('deve possuir na página um total de oito imagens', () => {
    render(<PageThree />);
    const imgEl = screen.getAllByRole('img');

    expect(imgEl).toHaveLength(8);
  });
});
