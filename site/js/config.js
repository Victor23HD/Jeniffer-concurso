/**
 * Configuração global do site: caminho base (para funcionar em GitHub Pages
 * num subcaminho, ex. https://usuario.github.io/Jeniffer-concurso/) e o
 * "manifesto" com todo o conteúdo de estudo.
 */
(function () {
  var BASE = location.pathname.indexOf('/Jeniffer-concurso') !== -1 ? '/Jeniffer-concurso' : '';
  var CONTENT_ROOT = BASE + '/concurso-assistente-informatica';

  function p(relPath) {
    return CONTENT_ROOT + '/' + relPath;
  }

  var CONTENT = {
    provaData: '2026-08-30T14:30:00',
    provaDataLabel: '30/08/2026',

    estudar: {
      order: ['portugues', 'matematica', 'informatica'],
      materias: {
        portugues: {
          label: 'Português',
          curto: 'PT',
          aulas: [
            { id: '01-interpretacao', arquivo: p('estudo/portugues/01-interpretacao.md'), titulo: 'Interpretação de textos' },
            { id: '02-ortografia-pontuacao', arquivo: p('estudo/portugues/02-ortografia-pontuacao.md'), titulo: 'Ortografia e pontuação' },
            { id: '03-classes-palavras', arquivo: p('estudo/portugues/03-classes-palavras.md'), titulo: 'Classes de palavras' },
            { id: '04-concordancia', arquivo: p('estudo/portugues/04-concordancia.md'), titulo: 'Concordância verbal e nominal' },
            { id: '05-regencia-crase', arquivo: p('estudo/portugues/05-regencia-crase.md'), titulo: 'Regência e crase' },
            { id: '06-colocacao-pronominal', arquivo: p('estudo/portugues/06-colocacao-pronominal.md'), titulo: 'Colocação pronominal' }
          ]
        },
        matematica: {
          label: 'Matemática e Lógica',
          curto: 'MT',
          aulas: [
            { id: '01-operacoes-mmc-mdc', arquivo: p('estudo/matematica-logica/01-operacoes-mmc-mdc.md'), titulo: 'Operações, MMC e MDC' },
            { id: '02-razao-proporcao-porcentagem', arquivo: p('estudo/matematica-logica/02-razao-proporcao-porcentagem.md'), titulo: 'Razão, proporção e porcentagem' },
            { id: '03-regra-de-tres-juros', arquivo: p('estudo/matematica-logica/03-regra-de-tres-juros.md'), titulo: 'Regra de três, juros e médias' },
            { id: '04-equacoes-medias-graficos', arquivo: p('estudo/matematica-logica/04-equacoes-medias-graficos.md'), titulo: 'Equações, medidas, tabelas e gráficos' },
            { id: '05-geometria', arquivo: p('estudo/matematica-logica/05-geometria.md'), titulo: 'Geometria' },
            { id: '06-raciocinio-logico', arquivo: p('estudo/matematica-logica/06-raciocinio-logico.md'), titulo: 'Raciocínio lógico' }
          ]
        },
        informatica: {
          label: 'Informática',
          curto: 'IF',
          aulas: [
            { id: '01-hardware-software', arquivo: p('estudo/informatica/01-hardware-software.md'), titulo: 'Conceitos, hardware e software' },
            { id: '02-windows-linux', arquivo: p('estudo/informatica/02-windows-linux.md'), titulo: 'Windows e Linux' },
            { id: '03-instalacao-manutencao', arquivo: p('estudo/informatica/03-instalacao-manutencao.md'), titulo: 'Instalação, manutenção, backup e suporte' },
            { id: '04-redes-internet', arquivo: p('estudo/informatica/04-redes-internet.md'), titulo: 'Redes, internet e e-mail' },
            { id: '05-seguranca', arquivo: p('estudo/informatica/05-seguranca.md'), titulo: 'Segurança da informação' },
            { id: '06-pacote-office-suporte', arquivo: p('estudo/informatica/06-pacote-office-suporte.md'), titulo: 'Pacote Office e produtividade' }
          ]
        }
      }
    },

    flashcards: {
      order: ['portugues', 'matematica', 'logica', 'informatica'],
      decks: {
        portugues: { label: 'Português', arquivo: p('estudo/flashcards/portugues.md') },
        matematica: { label: 'Matemática', arquivo: p('estudo/flashcards/matematica.md') },
        logica: { label: 'Lógica', arquivo: p('estudo/flashcards/logica.md') },
        informatica: { label: 'Informática', arquivo: p('estudo/flashcards/informatica.md') }
      }
    },

    simulados: {
      lista: [
        { id: '01', arquivo: p('simulados/simulado-01.md'), gabarito: p('simulados/gabaritos/simulado-01-gabarito.md') },
        { id: '02', arquivo: p('simulados/simulado-02.md'), gabarito: p('simulados/gabaritos/simulado-02-gabarito.md') },
        { id: '03', arquivo: p('simulados/simulado-03.md'), gabarito: p('simulados/gabaritos/simulado-03-gabarito.md') },
        { id: '04', arquivo: p('simulados/simulado-04.md'), gabarito: p('simulados/gabaritos/simulado-04-gabarito.md') },
        { id: '05', arquivo: p('simulados/simulado-05.md'), gabarito: p('simulados/gabaritos/simulado-05-gabarito.md') },
        { id: '06', arquivo: p('simulados/simulado-06.md'), gabarito: p('simulados/gabaritos/simulado-06-gabarito.md') },
        { id: '07', arquivo: p('simulados/simulado-07.md'), gabarito: p('simulados/gabaritos/simulado-07-gabarito.md') },
        { id: '08', arquivo: p('simulados/simulado-08.md'), gabarito: p('simulados/gabaritos/simulado-08-gabarito.md') }
      ],
      cronograma: p('simulados/CRONOGRAMA.md')
    },

    plano: {
      plano: p('estudo/PLANO-DE-ESTUDOS.md'),
      cronograma: p('simulados/CRONOGRAMA.md')
    }
  };

  window.CONFIG = {
    BASE: BASE,
    CONTENT_ROOT: CONTENT_ROOT,
    CONTENT: CONTENT
  };
})();
