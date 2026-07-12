/**
 * Parsing de decks de flashcards (markdown -> lista de {pergunta, resposta})
 * e um controlador de deck (estado de navegação/revelação/embaralhamento).
 */
(function () {
  /**
   * @param {string} md Conteúdo markdown do deck (pares **Q:** / **R:**).
   * @returns {Array<{pergunta:string, resposta:string}>}
   */
  function parseDeck(md) {
    var lines = md.replace(/\r\n/g, '\n').split('\n');
    var cards = [];
    var pendingQuestion = null;

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      var qMatch = line.match(/^\*\*Q:\*\*\s*(.*?)\s*$/);
      var rMatch = line.match(/^\*\*R:\*\*\s*(.*?)\s*$/);

      if (qMatch) {
        pendingQuestion = qMatch[1].trim();
        continue;
      }
      if (rMatch && pendingQuestion) {
        cards.push({ pergunta: pendingQuestion, resposta: rMatch[1].trim() });
        pendingQuestion = null;
      }
    }
    return cards;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  /**
   * Controlador de estado de um deck de flashcards.
   * @param {Array} cards
   */
  function createDeckController(cards) {
    var state = {
      order: cards.map(function (_, i) { return i; }),
      pos: 0,
      revelado: false
    };

    function atual() {
      return cards[state.order[state.pos]];
    }

    return {
      total: cards.length,
      atual: atual,
      posicao: function () { return state.pos + 1; },
      isRevelado: function () { return state.revelado; },
      revelar: function () { state.revelado = true; },
      alternarRevelado: function () { state.revelado = !state.revelado; },
      proximo: function () {
        state.pos = (state.pos + 1) % cards.length;
        state.revelado = false;
      },
      anterior: function () {
        state.pos = (state.pos - 1 + cards.length) % cards.length;
        state.revelado = false;
      },
      embaralhar: function () {
        state.order = shuffle(cards.map(function (_, i) { return i; }));
        state.pos = 0;
        state.revelado = false;
      }
    };
  }

  window.Flashcards = {
    parseDeck: parseDeck,
    createDeckController: createDeckController
  };
})();
