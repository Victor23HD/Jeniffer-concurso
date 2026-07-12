/**
 * Roteador e telas do site (Início, Estudar, Flashcards, Simulados, Plano).
 * Vanilla JS, sem build step. Roteamento por hash (#/rota/...).
 */
(function () {
  var CONTENT = window.CONFIG.CONTENT;
  var view = document.getElementById('view');
  var navLinks = document.querySelectorAll('#mainNav a');

  marked.setOptions({ gfm: true, breaks: false });

  // ------------------------------------------------------------------ utils

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function fetchText(url) {
    return fetch(url).then(function (res) {
      if (!res.ok) throw new Error('Não foi possível carregar ' + url + ' (HTTP ' + res.status + ')');
      return res.text();
    });
  }

  function renderMarkdown(md) {
    var html = marked.parse(md || '');
    if (window.DOMPurify) html = DOMPurify.sanitize(html);
    return html;
  }

  function loadingHtml(msg) {
    return '<div class="loading">' + escapeHtml(msg || 'Carregando…') + '</div>';
  }

  function errorHtml(msg) {
    return '<div class="error-box">⚠️ ' + escapeHtml(msg) + '</div>';
  }

  function setActiveNav(route) {
    navLinks.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-route') === route);
    });
  }

  function parseHash() {
    var hash = location.hash.replace(/^#\/?/, '');
    return hash.split('/').filter(Boolean).map(decodeURIComponent);
  }

  function goto(hash) {
    location.hash = hash;
  }

  // ------------------------------------------------------------------ Home

  function renderHome() {
    setActiveNav('home');
    var provaDate = new Date(CONTENT.provaData);
    var now = new Date();
    var diffDays = Math.ceil((provaDate - now) / (1000 * 60 * 60 * 24));
    var diasTexto = diffDays > 0
      ? '<span class="num">' + diffDays + '</span> dia' + (diffDays === 1 ? '' : 's') + ' até a prova'
      : 'A prova é hoje — boa sorte! 💪';

    view.innerHTML =
      '<div class="view-inner">' +
        '<section class="hero">' +
          '<div class="countdown">' + diasTexto + '</div>' +
          '<h1>Oi, Jeniffer! Vamos estudar? 📚</h1>' +
          '<p>Aqui está todo o material do concurso de <strong>Assistente de Informática</strong> — ' +
          'Prefeitura de Vargem Grande Paulista — organizado para você estudar direto do navegador, ' +
          'sem precisar abrir pastas e arquivos.</p>' +
          '<div class="info-grid">' +
            '<div class="info-box"><div class="label">Prova</div><div class="value">' + CONTENT.provaDataLabel + '</div></div>' +
            '<div class="info-box"><div class="label">Questões</div><div class="value">40 · A–E</div></div>' +
            '<div class="info-box"><div class="label">Duração</div><div class="value">3 horas</div></div>' +
            '<div class="info-box"><div class="label">Simulados</div><div class="value">8 completos</div></div>' +
          '</div>' +
        '</section>' +

        '<div class="quick-grid">' +
          '<a class="quick-card" href="#/estudar">' +
            '<span class="icon">📖</span>' +
            '<h3>Estudar</h3>' +
            '<p>18 aulas de Português, Matemática/Lógica e Informática.</p>' +
          '</a>' +
          '<a class="quick-card" href="#/flashcards">' +
            '<span class="icon">🗂️</span>' +
            '<h3>Flashcards</h3>' +
            '<p>Revisão rápida com perguntas e respostas por matéria.</p>' +
          '</a>' +
          '<a class="quick-card" href="#/simulados">' +
            '<span class="icon">📝</span>' +
            '<h3>Simulados</h3>' +
            '<p>8 provas completas no formato do concurso, com correção automática.</p>' +
          '</a>' +
          '<a class="quick-card" href="#/plano">' +
            '<span class="icon">🗓️</span>' +
            '<h3>Plano de estudos</h3>' +
            '<p>Cronograma semana a semana até o dia da prova.</p>' +
          '</a>' +
        '</div>' +
      '</div>';
  }

  // ---------------------------------------------------------------- Estudar

  function renderEstudar(materiaId, aulaId) {
    setActiveNav('estudar');
    var ordem = CONTENT.estudar.order;
    if (!materiaId || !CONTENT.estudar.materias[materiaId]) materiaId = ordem[0];
    var materia = CONTENT.estudar.materias[materiaId];
    if (!aulaId || !materia.aulas.some(function (a) { return a.id === aulaId; })) {
      aulaId = materia.aulas[0].id;
    }
    var aula = materia.aulas.filter(function (a) { return a.id === aulaId; })[0];
    var aulaIdx = materia.aulas.indexOf(aula);
    var anterior = materia.aulas[aulaIdx - 1];
    var proxima = materia.aulas[aulaIdx + 1];

    var sidebarHtml = ordem.map(function (mid) {
      var m = CONTENT.estudar.materias[mid];
      var links = m.aulas.map(function (a, i) {
        var active = (mid === materiaId && a.id === aulaId) ? ' active' : '';
        return '<a class="aula-link' + active + '" href="#/estudar/' + mid + '/' + a.id + '">' +
          (i + 1) + '. ' + escapeHtml(a.titulo) + '</a>';
      }).join('');
      return '<div class="materia-group">' +
        '<p class="materia-label">' + escapeHtml(m.label) + '</p>' +
        links +
        '</div>';
    }).join('');

    view.innerHTML =
      '<div class="view-inner">' +
        '<button class="btn sidebar-toggle" id="sidebarToggle">☰ Matérias</button>' +
        '<div class="study-layout">' +
          '<aside class="sidebar" id="studySidebar">' + sidebarHtml + '</aside>' +
          '<article>' +
            '<div class="content-prose" id="lessonContent">' + loadingHtml('Carregando aula…') + '</div>' +
            '<div class="lesson-nav">' +
              (anterior ? '<a class="btn" href="#/estudar/' + materiaId + '/' + anterior.id + '">← ' + escapeHtml(anterior.titulo) + '</a>' : '<span></span>') +
              (proxima ? '<a class="btn btn-primary" href="#/estudar/' + materiaId + '/' + proxima.id + '">' + escapeHtml(proxima.titulo) + ' →</a>' : '<span></span>') +
            '</div>' +
          '</article>' +
        '</div>' +
      '</div>';

    var toggle = document.getElementById('sidebarToggle');
    var sidebar = document.getElementById('studySidebar');
    toggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });

    var lessonContent = document.getElementById('lessonContent');
    fetchText(aula.arquivo)
      .then(function (md) {
        lessonContent.innerHTML = '<h1>' + escapeHtml(materia.label) + ' — ' + escapeHtml(aula.titulo) + '</h1>' + renderMarkdown(md);
      })
      .catch(function (err) {
        lessonContent.innerHTML = errorHtml(err.message);
      });
  }

  // ------------------------------------------------------------- Flashcards

  function renderFlashcards(deckId) {
    setActiveNav('flashcards');
    var ordem = CONTENT.flashcards.order;
    if (!deckId || !CONTENT.flashcards.decks[deckId]) deckId = ordem[0];
    var deck = CONTENT.flashcards.decks[deckId];

    var tabsHtml = ordem.map(function (id) {
      var d = CONTENT.flashcards.decks[id];
      var active = id === deckId ? ' active' : '';
      return '<a class="deck-tab' + active + '" href="#/flashcards/' + id + '">' + escapeHtml(d.label) + '</a>';
    }).join('');

    view.innerHTML =
      '<div class="view-inner">' +
        '<h1 class="section-title">Flashcards</h1>' +
        '<div class="deck-tabs">' + tabsHtml + '</div>' +
        '<div id="flashArea">' + loadingHtml('Carregando cartões…') + '</div>' +
      '</div>';

    var area = document.getElementById('flashArea');

    fetchText(deck.arquivo)
      .then(function (md) {
        var cards = Flashcards.parseDeck(md);
        if (!cards.length) {
          area.innerHTML = errorHtml('Nenhum cartão encontrado neste deck.');
          return;
        }
        mountDeck(area, cards, deck.label);
      })
      .catch(function (err) {
        area.innerHTML = errorHtml(err.message);
      });
  }

  function mountDeck(area, cards, deckLabel) {
    var ctrl = Flashcards.createDeckController(cards);

    area.innerHTML =
      '<div class="flash-wrap">' +
        '<div class="flash-progress" id="flashProgress"></div>' +
        '<div class="flashcard" id="flashcard" role="button" tabindex="0" aria-label="Cartão de estudo. Toque ou aperte espaço para virar.">' +
          '<div class="flashcard-inner">' +
            '<div class="flash-face front"><span class="eyebrow">' + escapeHtml(deckLabel) + ' · Pergunta</span><p id="flashFront"></p></div>' +
            '<div class="flash-face back"><span class="eyebrow">Resposta</span><p id="flashBack"></p></div>' +
          '</div>' +
        '</div>' +
        '<p class="flash-hint">Toque no cartão ou aperte <strong>espaço</strong> para virar</p>' +
        '<div class="flash-controls">' +
          '<button class="btn" id="flashPrev">← Anterior</button>' +
          '<button class="btn" id="flashShuffle">🔀 Embaralhar</button>' +
          '<button class="btn btn-primary" id="flashNext">Próximo →</button>' +
        '</div>' +
      '</div>';

    var cardEl = document.getElementById('flashcard');
    var frontEl = document.getElementById('flashFront');
    var backEl = document.getElementById('flashBack');
    var progressEl = document.getElementById('flashProgress');

    function draw() {
      var c = ctrl.atual();
      frontEl.textContent = c.pergunta;
      backEl.textContent = c.resposta;
      cardEl.classList.toggle('flipped', ctrl.isRevelado());
      progressEl.textContent = ctrl.posicao() + ' / ' + ctrl.total;
    }

    cardEl.addEventListener('click', function () {
      ctrl.alternarRevelado();
      draw();
    });
    cardEl.addEventListener('keydown', function (e) {
      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        ctrl.alternarRevelado();
        draw();
      }
    });
    document.getElementById('flashPrev').addEventListener('click', function () {
      ctrl.anterior();
      draw();
    });
    document.getElementById('flashNext').addEventListener('click', function () {
      ctrl.proximo();
      draw();
    });
    document.getElementById('flashShuffle').addEventListener('click', function () {
      ctrl.embaralhar();
      draw();
    });

    draw();
  }

  // -------------------------------------------------------------- Simulados

  function renderSimulados(simuladoId) {
    setActiveNav('simulados');
    if (simuladoId) {
      renderSimuladoQuiz(simuladoId);
      return;
    }

    var cardsHtml = CONTENT.simulados.lista.map(function (s) {
      return '<a class="simulado-card" href="#/simulados/' + s.id + '">' +
        '<span class="num">' + s.id + '</span>' +
        '<span class="meta">40 questões · A–E · 3h</span>' +
        '</a>';
    }).join('');

    view.innerHTML =
      '<div class="view-inner">' +
        '<h1 class="section-title">Simulados</h1>' +
        '<p class="muted" style="margin-top:-6px;margin-bottom:18px;">Escolha um simulado completo. As respostas só aparecem depois de clicar em “Finalizar”.</p>' +
        '<div class="simulado-grid">' + cardsHtml + '</div>' +
      '</div>';
  }

  function renderSimuladoQuiz(simuladoId) {
    var s = CONTENT.simulados.lista.filter(function (x) { return x.id === simuladoId; })[0];
    if (!s) {
      view.innerHTML = '<div class="view-inner">' + errorHtml('Simulado não encontrado.') + '</div>';
      return;
    }

    view.innerHTML = '<div class="view-inner">' + loadingHtml('Carregando simulado ' + simuladoId + '…') + '</div>';

    fetchText(s.arquivo)
      .then(function (md) {
        var simulado = Quiz.parseSimulado(md);
        mountQuiz(s, simulado);
      })
      .catch(function (err) {
        view.innerHTML = '<div class="view-inner">' + errorHtml(err.message) + '</div>';
      });
  }

  function mountQuiz(s, simulado) {
    var totalPerguntas = 0;
    simulado.secoes.forEach(function (sec) { totalPerguntas += sec.perguntas.length; });

    var sectionsHtml = simulado.secoes.map(function (sec) {
      var qsHtml = sec.perguntas.map(function (q) {
        var optsHtml = ['A', 'B', 'C', 'D', 'E'].filter(function (letra) {
          return q.opcoes[letra] !== undefined;
        }).map(function (letra) {
          return '<label class="option-item">' +
            '<input type="radio" name="q' + q.numero + '" value="' + letra + '">' +
            '<span><strong>' + letra + ')</strong> ' + escapeHtml(q.opcoes[letra]) + '</span>' +
            '</label>';
        }).join('');

        return '<div class="question-block" data-qnum="' + q.numero + '">' +
          '<p class="question-text"><span class="qnum">' + q.numero + '.</span>' + escapeHtml(q.texto) + '</p>' +
          '<div class="option-list">' + optsHtml + '</div>' +
          '</div>';
      }).join('');

      return (sec.titulo ? '<h2 class="quiz-section-title">' + escapeHtml(sec.titulo) + '</h2>' : '') + qsHtml;
    }).join('');

    view.innerHTML =
      '<div class="view-inner">' +
        '<a href="#/simulados" class="muted">← Voltar aos simulados</a>' +
        '<div class="quiz-header">' +
          '<h1>' + escapeHtml(simulado.titulo || ('Simulado ' + s.id)) + '</h1>' +
          '<div class="quiz-meta">' +
            (simulado.info.Tempo ? '<span>⏱ ' + escapeHtml(simulado.info.Tempo) + '</span>' : '') +
            (simulado.info['Questões'] ? '<span>📝 ' + escapeHtml(simulado.info['Questões']) + ' questões</span>' : '') +
            (simulado.info.Alternativas ? '<span>🔤 ' + escapeHtml(simulado.info.Alternativas) + '</span>' : '') +
          '</div>' +
          '<div class="progress-bar-track"><div class="progress-bar-fill" id="progressFill" style="width:0%"></div></div>' +
        '</div>' +
        '<form id="quizForm">' + sectionsHtml + '</form>' +
        '<div class="quiz-sticky">' +
          '<span class="muted" id="answeredCount">0 / ' + totalPerguntas + ' respondidas</span>' +
          '<button class="btn btn-primary" id="finalizarBtn" type="button">Finalizar simulado</button>' +
        '</div>' +
      '</div>';

    var form = document.getElementById('quizForm');
    var answeredCount = document.getElementById('answeredCount');
    var progressFill = document.getElementById('progressFill');

    function updateProgress() {
      var answered = {};
      var radios = form.querySelectorAll('input[type=radio]:checked');
      radios.forEach(function (r) { answered[r.name] = true; });
      var n = Object.keys(answered).length;
      answeredCount.textContent = n + ' / ' + totalPerguntas + ' respondidas';
      progressFill.style.width = Math.round((n / totalPerguntas) * 100) + '%';
    }

    form.addEventListener('change', updateProgress);
    updateProgress();

    document.getElementById('finalizarBtn').addEventListener('click', function () {
      var radios = form.querySelectorAll('input[type=radio]:checked');
      var respostas = {};
      radios.forEach(function (r) {
        var num = parseInt(r.name.replace('q', ''), 10);
        respostas[num] = r.value;
      });

      var faltam = totalPerguntas - Object.keys(respostas).length;
      if (faltam > 0) {
        var ok = confirm('Faltam ' + faltam + ' questão(ões) sem resposta. Finalizar mesmo assim?');
        if (!ok) return;
      }

      var finalizarBtn = document.getElementById('finalizarBtn');
      finalizarBtn.disabled = true;
      finalizarBtn.textContent = 'Corrigindo…';

      fetchText(s.gabarito)
        .then(function (gabMd) {
          var gabarito = Quiz.parseGabarito(gabMd);
          var resultado = Quiz.corrigir(simulado, respostas, gabarito);
          renderResultado(s, simulado, resultado);
        })
        .catch(function (err) {
          finalizarBtn.disabled = false;
          finalizarBtn.textContent = 'Finalizar simulado';
          alert('Erro ao carregar gabarito: ' + err.message);
        });
    });
  }

  function renderResultado(s, simulado, resultado) {
    var pct = Math.round((resultado.acertos / resultado.total) * 100);

    var itemsHtml = resultado.detalhes.map(function (d) {
      var badgeClass = d.acertou ? 'correct' : 'incorrect';
      var badgeText = d.acertou ? 'Certa' : 'Errada';
      var optsHtml = ['A', 'B', 'C', 'D', 'E'].filter(function (letra) {
        return d.opcoes[letra] !== undefined;
      }).map(function (letra) {
        var cls = '';
        if (letra === d.respostaCerta) cls = ' correct';
        else if (letra === d.respostaDada && !d.acertou) cls = ' incorrect';
        var marker = '';
        if (letra === d.respostaDada) marker = ' (sua resposta)';
        else if (letra === d.respostaCerta) marker = ' (correta)';
        return '<div class="option-item' + cls + '"><strong>' + letra + ')</strong>&nbsp;' + escapeHtml(d.opcoes[letra]) +
          (marker ? '<em class="muted">' + marker + '</em>' : '') + '</div>';
      }).join('');

      return '<div class="question-block reviewed">' +
        '<span class="result-badge ' + badgeClass + '">' + badgeText + '</span>' +
        '<p class="question-text"><span class="qnum">' + d.numero + '.</span>' + escapeHtml(d.texto) + '</p>' +
        '<div class="option-list">' + optsHtml + '</div>' +
        (d.comentario ? '<div class="comment-box">💡 ' + escapeHtml(d.comentario) + '</div>' : '') +
        (!d.respostaDada ? '<div class="comment-box">Você não respondeu esta questão.</div>' : '') +
        '</div>';
    }).join('');

    view.innerHTML =
      '<div class="view-inner">' +
        '<a href="#/simulados" class="muted">← Voltar aos simulados</a>' +
        '<h1 class="section-title" style="margin-top:14px;">Resultado — Simulado ' + s.id + '</h1>' +
        '<div class="score-summary card">' +
          '<div class="score-circle"><span class="big">' + resultado.acertos + '/' + resultado.total + '</span><span class="small">' + pct + '% de acertos</span></div>' +
          '<div>' +
            '<p style="margin:0 0 10px;font-size:1.05rem;">' + mensagemResultado(pct) + '</p>' +
            '<div class="btn-row">' +
              '<button class="btn btn-primary" id="refazerBtn">Refazer este simulado</button>' +
              '<a class="btn" href="#/simulados">Ver todos os simulados</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<h2 class="section-title" style="margin-top:26px;">Revisão questão a questão</h2>' +
        itemsHtml +
      '</div>';

    document.getElementById('refazerBtn').addEventListener('click', function () {
      renderSimuladoQuiz(s.id);
    });
  }

  function mensagemResultado(pct) {
    if (pct >= 85) return 'Excelente! Continue nesse ritmo. 🎯';
    if (pct >= 70) return 'Muito bom! Revise as questões erradas abaixo. 💪';
    if (pct >= 50) return 'Bom começo — foque nos temas que mais errou. 📚';
    return 'Vamos revisar com calma. Cada simulado é um passo a mais. 🌱';
  }

  // ------------------------------------------------------------------ Plano

  function renderPlano(aba) {
    setActiveNav('plano');
    if (aba !== 'cronograma') aba = 'plano';

    view.innerHTML =
      '<div class="view-inner">' +
        '<h1 class="section-title">Plano de estudos</h1>' +
        '<div class="plano-tabs">' +
          '<a class="deck-tab' + (aba === 'plano' ? ' active' : '') + '" href="#/plano/plano">Plano de estudos</a>' +
          '<a class="deck-tab' + (aba === 'cronograma' ? ' active' : '') + '" href="#/plano/cronograma">Cronograma de simulados</a>' +
        '</div>' +
        '<div class="content-prose" id="planoContent">' + loadingHtml('Carregando…') + '</div>' +
      '</div>';

    var url = aba === 'cronograma' ? CONTENT.plano.cronograma : CONTENT.plano.plano;
    var el = document.getElementById('planoContent');

    fetchText(url)
      .then(function (md) { el.innerHTML = renderMarkdown(md); })
      .catch(function (err) { el.innerHTML = errorHtml(err.message); });
  }

  // ------------------------------------------------------------------ Router

  function route() {
    var parts = parseHash();
    var top = parts[0] || 'home';
    window.scrollTo(0, 0);

    switch (top) {
      case 'home':
        renderHome();
        break;
      case 'estudar':
        renderEstudar(parts[1], parts[2]);
        break;
      case 'flashcards':
        renderFlashcards(parts[1]);
        break;
      case 'simulados':
        renderSimulados(parts[1]);
        break;
      case 'plano':
        renderPlano(parts[1]);
        break;
      default:
        renderHome();
    }
  }

  window.addEventListener('hashchange', route);
  route();
})();
