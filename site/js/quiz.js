/**
 * Parsing e correção de simulados (markdown -> perguntas) e gabaritos
 * (markdown -> respostas + comentários).
 */
(function () {
  var QUESTION_RE = /^\*\*(\d{1,2})\.\*\*\s*(.*)$/;
  var OPTION_RE = /^([A-E])\)\s*(.*)$/;
  var SECTION_RE = /^##\s+(.*)$/;
  var HEADER_INFO_RE = /\*\*(Tempo|Questões|Alternativas):\*\*\s*([^·\n]+)/g;

  /**
   * @param {string} md Conteúdo markdown do simulado.
   * @returns {{titulo:string, info:Object, secoes:Array}}
   */
  function parseSimulado(md) {
    var lines = md.replace(/\r\n/g, '\n').split('\n');
    var titulo = '';
    var info = {};
    var secoes = [];
    var currentSection = null;
    var currentQuestion = null;

    var infoLine = md.match(/\*\*Tempo:\*\*.*$/m);
    if (infoLine) {
      var m;
      HEADER_INFO_RE.lastIndex = 0;
      while ((m = HEADER_INFO_RE.exec(infoLine[0])) !== null) {
        info[m[1]] = m[2].trim();
      }
    }

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();

      if (!titulo && line.indexOf('# ') === 0) {
        titulo = line.replace(/^#\s*/, '');
        continue;
      }

      var secMatch = line.match(SECTION_RE);
      if (secMatch) {
        currentSection = { titulo: secMatch[1].trim(), perguntas: [] };
        secoes.push(currentSection);
        currentQuestion = null;
        continue;
      }

      var qMatch = line.match(QUESTION_RE);
      if (qMatch) {
        currentQuestion = {
          numero: parseInt(qMatch[1], 10),
          texto: qMatch[2].trim(),
          opcoes: {}
        };
        if (!currentSection) {
          currentSection = { titulo: '', perguntas: [] };
          secoes.push(currentSection);
        }
        currentSection.perguntas.push(currentQuestion);
        continue;
      }

      var oMatch = line.match(OPTION_RE);
      if (oMatch && currentQuestion) {
        currentQuestion.opcoes[oMatch[1]] = oMatch[2].trim();
        continue;
      }
    }

    return { titulo: titulo, info: info, secoes: secoes };
  }

  /**
   * @param {string} md Conteúdo markdown do gabarito.
   * @returns {{respostas:Object, comentarios:Object}}
   */
  function parseGabarito(md) {
    var text = md.replace(/\r\n/g, '\n');
    var splitIdx = text.search(/^##\s+Comentários/m);
    var tablePart = splitIdx === -1 ? text : text.slice(0, splitIdx);
    var commentsPart = splitIdx === -1 ? '' : text.slice(splitIdx);

    var respostas = {};
    var rowRe = /\|\s*(\d{1,2})\s*\|\s*([A-E])\s*\|/g;
    var m;
    while ((m = rowRe.exec(tablePart)) !== null) {
      respostas[parseInt(m[1], 10)] = m[2];
    }

    var comentarios = {};
    var lines = commentsPart.split('\n');
    for (var i = 0; i < lines.length; i++) {
      var cMatch = lines[i].trim().match(QUESTION_RE);
      if (cMatch) {
        comentarios[parseInt(cMatch[1], 10)] = cMatch[2].trim();
      }
    }

    return { respostas: respostas, comentarios: comentarios };
  }

  /**
   * Compara respostas dadas com o gabarito.
   * @param {Object} simulado Resultado de parseSimulado.
   * @param {Object} respostasUsuario Mapa numero -> letra escolhida.
   * @param {Object} gabarito Resultado de parseGabarito.
   */
  function corrigir(simulado, respostasUsuario, gabarito) {
    var todasPerguntas = [];
    simulado.secoes.forEach(function (sec) {
      sec.perguntas.forEach(function (q) {
        todasPerguntas.push(q);
      });
    });

    var total = todasPerguntas.length;
    var acertos = 0;
    var detalhes = [];

    todasPerguntas.forEach(function (q) {
      var certa = gabarito.respostas[q.numero];
      var dada = respostasUsuario[q.numero] || null;
      var acertou = dada != null && dada === certa;
      if (acertou) acertos++;
      detalhes.push({
        numero: q.numero,
        texto: q.texto,
        opcoes: q.opcoes,
        respostaCerta: certa,
        respostaDada: dada,
        acertou: acertou,
        comentario: gabarito.comentarios[q.numero] || ''
      });
    });

    return { total: total, acertos: acertos, detalhes: detalhes };
  }

  window.Quiz = {
    parseSimulado: parseSimulado,
    parseGabarito: parseGabarito,
    corrigir: corrigir
  };
})();
