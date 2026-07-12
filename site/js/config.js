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
        { id: '01', arquivo: p('simulados/simulado-01.md'), gabarito: p('simulados/gabaritos/simulado-01-gabarito.md'), tipo: 'completo', questoes: 40, tempo: '3h' },
        { id: '02', arquivo: p('simulados/simulado-02.md'), gabarito: p('simulados/gabaritos/simulado-02-gabarito.md'), tipo: 'completo', questoes: 40, tempo: '3h' },
        { id: '03', arquivo: p('simulados/simulado-03.md'), gabarito: p('simulados/gabaritos/simulado-03-gabarito.md'), tipo: 'completo', questoes: 40, tempo: '3h' },
        { id: '04', arquivo: p('simulados/simulado-04.md'), gabarito: p('simulados/gabaritos/simulado-04-gabarito.md'), tipo: 'completo', questoes: 40, tempo: '3h' },
        { id: '05', arquivo: p('simulados/simulado-05.md'), gabarito: p('simulados/gabaritos/simulado-05-gabarito.md'), tipo: 'completo', questoes: 40, tempo: '3h' },
        { id: '06', arquivo: p('simulados/simulado-06.md'), gabarito: p('simulados/gabaritos/simulado-06-gabarito.md'), tipo: 'completo', questoes: 40, tempo: '3h' },
        { id: '07', arquivo: p('simulados/simulado-07.md'), gabarito: p('simulados/gabaritos/simulado-07-gabarito.md'), tipo: 'completo', questoes: 40, tempo: '3h' },
        { id: '08', arquivo: p('simulados/simulado-08.md'), gabarito: p('simulados/gabaritos/simulado-08-gabarito.md'), tipo: 'completo', questoes: 40, tempo: '3h' }
      ],
      tematicos: [
        { id: 'pt-01', materia: 'portugues', titulo: 'Português 01', foco: 'Interpretação, ortografia e pontuação', arquivo: p('simulados/tematicos/portugues-01.md'), gabarito: p('simulados/tematicos/gabaritos/portugues-01-gabarito.md'), questoes: 20, tempo: '1h15' },
        { id: 'pt-02', materia: 'portugues', titulo: 'Português 02', foco: 'Classes e concordância', arquivo: p('simulados/tematicos/portugues-02.md'), gabarito: p('simulados/tematicos/gabaritos/portugues-02-gabarito.md'), questoes: 20, tempo: '1h15' },
        { id: 'pt-03', materia: 'portugues', titulo: 'Português 03', foco: 'Regência, crase e colocação', arquivo: p('simulados/tematicos/portugues-03.md'), gabarito: p('simulados/tematicos/gabaritos/portugues-03-gabarito.md'), questoes: 20, tempo: '1h15' },
        { id: 'mt-01', materia: 'matematica', titulo: 'Matemática 01', foco: 'MMC, MDC, % e razão', arquivo: p('simulados/tematicos/matematica-01.md'), gabarito: p('simulados/tematicos/gabaritos/matematica-01-gabarito.md'), questoes: 20, tempo: '1h15' },
        { id: 'mt-02', materia: 'matematica', titulo: 'Matemática 02', foco: 'Regra de três, juros e médias', arquivo: p('simulados/tematicos/matematica-02.md'), gabarito: p('simulados/tematicos/gabaritos/matematica-02-gabarito.md'), questoes: 20, tempo: '1h15' },
        { id: 'mt-03', materia: 'matematica', titulo: 'Matemática 03', foco: 'Geometria, sequências e lógica', arquivo: p('simulados/tematicos/matematica-03.md'), gabarito: p('simulados/tematicos/gabaritos/matematica-03-gabarito.md'), questoes: 20, tempo: '1h15' },
        { id: 'if-01', materia: 'informatica', titulo: 'Informática 01', foco: 'Hardware, SO, drivers e backup', arquivo: p('simulados/tematicos/informatica-01.md'), gabarito: p('simulados/tematicos/gabaritos/informatica-01-gabarito.md'), questoes: 20, tempo: '1h15' },
        { id: 'if-02', materia: 'informatica', titulo: 'Informática 02', foco: 'Redes, DNS, DHCP e e-mail', arquivo: p('simulados/tematicos/informatica-02.md'), gabarito: p('simulados/tematicos/gabaritos/informatica-02-gabarito.md'), questoes: 20, tempo: '1h15' },
        { id: 'if-03', materia: 'informatica', titulo: 'Informática 03', foco: 'Segurança, Office e suporte', arquivo: p('simulados/tematicos/informatica-03.md'), gabarito: p('simulados/tematicos/gabaritos/informatica-03-gabarito.md'), questoes: 20, tempo: '1h15' }
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
