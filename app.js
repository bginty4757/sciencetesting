/* ============================================================
   app.js — routing, flashcards, quiz engine, saved progress.
   Content lives in content.js. You shouldn't need to edit this
   file to add a new packet.
   ============================================================ */

(function () {
  "use strict";

  const QUIZ_LENGTH = 15;
  const STORE_KEY = "lawsofmotion.v1";
  const view = document.getElementById("view");

  /* ---------- tiny helpers ---------- */

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  const topicById = (id) => TOPICS.find((t) => t.id === id);
  const topicTitle = (id) => (topicById(id) || { title: id }).title;

  // Stable id for a question, so saved progress survives reordering.
  function qid(q) {
    let h = 5381;
    for (let i = 0; i < q.q.length; i++) h = ((h << 5) + h + q.q.charCodeAt(i)) | 0;
    return q.topic + "-" + (h >>> 0).toString(36);
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ---------- saved progress (never load-bearing) ---------- */

  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return { attempts: [], byQuestion: {} };
      const d = JSON.parse(raw);
      return { attempts: d.attempts || [], byQuestion: d.byQuestion || {} };
    } catch (e) {
      return { attempts: [], byQuestion: {} };
    }
  }

  function save(data) {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(data));
    } catch (e) {
      /* private window or storage off — the quiz still works, it just won't remember */
    }
  }

  function recordAttempt(results) {
    const data = load();
    data.attempts.unshift({
      at: Date.now(),
      score: results.filter((r) => r.correct).length,
      total: results.length
    });
    data.attempts = data.attempts.slice(0, 25);
    results.forEach((r) => {
      const rec = data.byQuestion[r.id] || { seen: 0, right: 0 };
      rec.seen++;
      if (r.correct) rec.right++;
      rec.last = r.correct;
      data.byQuestion[r.id] = rec;
    });
    save(data);
  }

  function missedQuestions() {
    const data = load();
    return QUESTIONS.filter((q) => {
      const rec = data.byQuestion[qid(q)];
      return rec && rec.last === false;
    });
  }

  /* ---------- quiz assembly ---------- */

  // Shuffle the four choices and move the answer index with them, so the
  // correct answer isn't sitting in the same slot every time. This means
  // whoever writes a question in content.js can put the right answer
  // anywhere without skewing the quiz.
  function scramble(q) {
    const order = shuffle(q.choices.map((c, i) => i));
    return Object.assign({}, q, {
      choices: order.map((i) => q.choices[i]),
      answer: order.indexOf(q.answer)
    });
  }

  function buildQuiz(pool, n) {
    if (pool.length <= n) return shuffle(pool).map(scramble);

    // Take proportionally from each topic so one unit can't swamp the quiz.
    const byTopic = {};
    pool.forEach((q) => (byTopic[q.topic] = byTopic[q.topic] || []).push(q));
    const ids = Object.keys(byTopic);
    const picked = [];

    ids.forEach((id) => {
      const share = Math.floor((byTopic[id].length / pool.length) * n);
      picked.push(...shuffle(byTopic[id]).slice(0, share));
    });

    // Fill any remainder from whatever's left.
    const taken = new Set(picked.map(qid));
    const rest = shuffle(pool.filter((q) => !taken.has(qid(q))));
    while (picked.length < n && rest.length) picked.push(rest.pop());

    return shuffle(picked).slice(0, n).map(scramble);
  }

  /* ---------- SVG: free-body diagrams ---------- */

  function fbd(opts) {
    const o = opts || {};
    const friction = !!o.friction;
    return `
<svg class="fbd" viewBox="0 0 240 230" role="img"
     aria-label="Free-body diagram: a book with ${friction ? "gravity down 20 N, the table pushing up 20 N, and friction pushing left 5 N" : "gravity pulling down 20 N and the table pushing up 20 N"}.">
  <g class="grow ${o.animate ? "grow-up" : ""}">
    <path class="vec vec-up" d="M120 100 V32"/>
    <path class="vec vec-up" d="M112 42 L120 30 L128 42"/>
  </g>
  <text class="cap cap-up" x="132" y="48">Table pushes up</text>
  <text class="cap cap-up" x="132" y="62">20 N</text>

  <rect class="body" x="72" y="100" width="96" height="34"/>
  <text class="label" x="120" y="122" text-anchor="middle">PHYSICS</text>

  <g class="grow ${o.animate ? "grow-down" : ""}">
    <path class="vec vec-down" d="M120 134 V202"/>
    <path class="vec vec-down" d="M112 192 L120 204 L128 192"/>
  </g>
  <text class="cap cap-down" x="132" y="180">Gravity pulls down</text>
  <text class="cap cap-down" x="132" y="194">20 N</text>

  ${
    friction
      ? `<path class="vec vec-left" d="M72 117 H24"/>
         <path class="vec vec-left" d="M34 109 L22 117 L34 125"/>
         <text class="cap cap-left" x="22" y="100">Friction</text>
         <text class="cap cap-left" x="22" y="90">5 N left</text>`
      : ""
  }
</svg>`;
  }

  const arrowIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;

  /* ---------- routing ---------- */

  const routes = {
    "": home,
    "/": home,
    "/study": study,
    "/cards": cards,
    "/quiz": quiz,
    "/progress": progress
  };

  function route() {
    const raw = location.hash.replace(/^#/, "") || "/";
    const [path, query] = raw.split("?");
    const params = new URLSearchParams(query || "");

    document.querySelectorAll(".nav a").forEach((a) => {
      const href = a.getAttribute("href").replace("#", "");
      a.classList.toggle("on", href === path || (path === "/" && href === "/"));
    });

    (routes[path] || home)(params);
    window.scrollTo(0, 0);
    view.focus({ preventScroll: true });
    footStat();
  }

  function footStat() {
    const el = document.getElementById("stat-line");
    if (!el) return;
    const n = TOPICS.length;
    el.textContent = `${n} unit${n === 1 ? "" : "s"} · ${FLASHCARDS.length} flashcards · ${QUESTIONS.length} questions in the pool.`;
  }

  /* ---------- home ---------- */

  function home() {
    const data = load();
    const last = data.attempts[0];

    view.innerHTML = `
      <section class="hero">
        <div>
          <h1>Objects keep doing what they're doing.</h1>
          <p>Everything on Newton's first law, inertia, mass, and forces — pulled out of your packets, plus a practice quiz that's different every time you take it.</p>
        </div>
        ${fbd({ animate: true })}
      </section>

      <div class="deck">
        <a class="vcard" href="#/study">
          <h3>Study the units</h3>
          <p>The packets rewritten so you can actually read them, with the key terms pulled out.</p>
          <span class="meta">${TOPICS.length} units</span>
        </a>
        <a class="vcard" href="#/cards">
          <h3>Flashcards</h3>
          <p>Flip through every term and definition you need to know cold.</p>
          <span class="meta">${FLASHCARDS.length} cards</span>
        </a>
        <a class="vcard" href="#/quiz">
          <h3>Practice quiz</h3>
          <p>${QUIZ_LENGTH} questions pulled fresh from a pool of ${QUESTIONS.length}, with an explanation after each one.</p>
          <span class="meta">${
            last ? `Last score: ${last.score}/${last.total}` : "Not taken yet"
          }</span>
        </a>
      </div>

      <div class="btn-row">
        <a class="btn btn-primary" href="#/quiz">Start a practice quiz</a>
        <a class="btn" href="#/study">Read the units first</a>
      </div>
    `;
  }

  /* ---------- study ---------- */

  function study(params) {
    const id = params.get("t") || TOPICS[0].id;
    const t = topicById(id) || TOPICS[0];

    const chips = TOPICS.map(
      (x) =>
        `<a class="chip ${x.id === t.id ? "on" : ""}" href="#/study?t=${x.id}">${esc(
          x.title
        )}</a>`
    ).join("");

    const sections = t.sections
      .map((s) => {
        let html = `<section class="sec"><h3>${esc(s.heading)}</h3>`;

        if (s.law) {
          html += `<div class="lawbox">${esc(s.body[0])}</div>`;
          html += s.body
            .slice(1)
            .map((p) => `<p>${esc(p)}</p>`)
            .join("");
        } else {
          html += s.body.map((p) => `<p>${esc(p)}</p>`).join("");
        }

        if (s.diagram === "friction") {
          html += `<div style="margin:1.4rem 0">${fbd({ friction: true })}</div>`;
        }

        if (s.list) {
          html += `<p class="plist-label">${esc(s.list.label)}</p><ul class="plist">`;
          html += s.list.items.map((i) => `<li>${esc(i)}</li>`).join("");
          html += `</ul>`;
        }

        if (s.numbered) {
          html += `<p class="nlist-label">${esc(s.numbered.label)}</p><ol class="nlist">`;
          html += s.numbered.items
            .map(
              (i) =>
                `<li><div><h4>${esc(i.head)}</h4><div class="ntext">${esc(
                  i.text
                )}</div></div></li>`
            )
            .join("");
          html += `</ol>`;
        }

        if (s.compare) {
          html += `<div class="compare">
            <div><h4>${esc(s.compare.left.label)}</h4><ul>${s.compare.left.points
            .map((p) => `<li>${esc(p)}</li>`)
            .join("")}</ul></div>
            <div><h4>${esc(s.compare.right.label)}</h4><ul>${s.compare.right.points
            .map((p) => `<li>${esc(p)}</li>`)
            .join("")}</ul></div>
          </div>`;
        }

        if (s.terms) {
          html += `<dl class="terms">`;
          html += s.terms
            .map(
              (x) =>
                `<div class="term"><dt>${esc(x.term)}</dt><dd>${esc(x.def)}</dd></div>`
            )
            .join("");
          html += `</dl>`;
        }

        if (s.callout) {
          html += `<div class="callout">${arrowIcon}<span>${esc(s.callout)}</span></div>`;
        }

        return html + `</section>`;
      })
      .join("");

    const i = TOPICS.indexOf(t);
    const next = TOPICS[i + 1];

    view.innerHTML = `
      <div class="sechead"><h2>Study</h2><span class="side">Unit ${i + 1} of ${
      TOPICS.length
    }</span></div>
      <div class="study-nav">${chips}</div>
      <p class="lede">${esc(t.blurb)}</p>
      ${sections}
      <div class="btn-row">
        ${
          next
            ? `<a class="btn btn-primary" href="#/study?t=${next.id}">Next: ${esc(
                next.title
              )}</a>`
            : `<a class="btn btn-primary" href="#/quiz">Take the practice quiz</a>`
        }
        <a class="btn" href="#/cards?t=${t.id}">Flashcards for this unit</a>
      </div>
    `;
  }

  /* ---------- flashcards ---------- */

  let deck = [];
  let deckAt = 0;

  function cards(params) {
    const filter = params.get("t") || "all";
    const base =
      filter === "all" ? FLASHCARDS : FLASHCARDS.filter((c) => c.topic === filter);

    deck = shuffle(base);
    deckAt = 0;

    const chips =
      `<a class="chip ${filter === "all" ? "on" : ""}" href="#/cards">All units</a>` +
      TOPICS.map(
        (x) =>
          `<a class="chip ${x.id === filter ? "on" : ""}" href="#/cards?t=${
            x.id
          }">${esc(x.title)}</a>`
      ).join("");

    view.innerHTML = `
      <div class="sechead"><h2>Flashcards</h2><span class="side">Tap a card to flip it</span></div>
      <div class="study-nav">${chips}</div>
      <div class="card-stage"><div id="stage"></div></div>
      <div class="card-bar">
        <button class="btn" id="prev">Back</button>
        <span class="counter" id="count"></span>
        <button class="btn btn-primary" id="next">Next card</button>
      </div>
    `;

    document.getElementById("prev").onclick = () => {
      deckAt = (deckAt - 1 + deck.length) % deck.length;
      paintCard();
    };
    document.getElementById("next").onclick = () => {
      deckAt = (deckAt + 1) % deck.length;
      paintCard();
    };

    paintCard();
  }

  function paintCard() {
    const c = deck[deckAt];
    const stage = document.getElementById("stage");
    if (!c) {
      stage.innerHTML = `<div class="empty"><p>No cards in this unit yet.</p></div>`;
      return;
    }

    stage.innerHTML = `
      <button class="flip" id="flip" aria-label="Flip card">
        <div class="flip-inner">
          <div class="face face-front">
            <div class="kicker">${esc(topicTitle(c.topic))}</div>
            <div class="q">${esc(c.front)}</div>
          </div>
          <div class="face face-back">
            <div class="kicker">Answer</div>
            <div class="a">${esc(c.back)}</div>
          </div>
        </div>
      </button>`;

    const flip = document.getElementById("flip");
    flip.onclick = () => flip.classList.toggle("flipped");
    document.getElementById("count").textContent = `${deckAt + 1} of ${deck.length}`;
  }

  /* ---------- quiz ---------- */

  let qSet = [];
  let qAt = 0;
  let qResults = [];
  let qLocked = false;

  function quiz(params) {
    const mode = params.get("mode");
    const pool = mode === "missed" ? missedQuestions() : QUESTIONS;

    if (mode === "missed" && pool.length === 0) {
      view.innerHTML = `
        <div class="sechead"><h2>Practice quiz</h2></div>
        <div class="empty">
          <p>Nothing to retry — you haven't missed anything yet.</p>
          <a class="btn btn-primary" href="#/quiz">Take a full quiz</a>
        </div>`;
      return;
    }

    qSet = buildQuiz(pool, Math.min(QUIZ_LENGTH, pool.length));
    qAt = 0;
    qResults = [];
    qLocked = false;
    paintQuestion(mode === "missed");
  }

  function paintQuestion(isRetry) {
    const q = qSet[qAt];
    const pct = (qAt / qSet.length) * 100;

    view.innerHTML = `
      <div class="sechead">
        <h2>${isRetry ? "Retry missed questions" : "Practice quiz"}</h2>
        <span class="side">${qSet.length} questions</span>
      </div>

      <div class="quiz-head">
        <span class="qcount">Question ${qAt + 1} of ${qSet.length}</span>
        <span class="qtopic">${esc(topicTitle(q.topic))}</span>
      </div>
      <div class="vbar"><i style="width:${pct}%"></i></div>

      <h3 class="qtext">${esc(q.q)}</h3>
      <div class="opts" id="opts">
        ${q.choices
          .map(
            (c, i) =>
              `<button class="opt" data-i="${i}">
                 <span class="key">${"ABCD"[i]}</span>
                 <span class="txt">${esc(c)}</span>
               </button>`
          )
          .join("")}
      </div>
      <div id="after"></div>
    `;

    document.querySelectorAll(".opt").forEach((b) => {
      b.onclick = () => answer(parseInt(b.dataset.i, 10), isRetry);
    });
  }

  function answer(choice, isRetry) {
    if (qLocked) return;
    qLocked = true;

    const q = qSet[qAt];
    const correct = choice === q.answer;
    qResults.push({ id: qid(q), q: q, picked: choice, correct: correct });

    document.querySelectorAll(".opt").forEach((b) => {
      const i = parseInt(b.dataset.i, 10);
      b.disabled = true;
      if (i === q.answer) b.classList.add("is-right");
      else if (i === choice) b.classList.add("is-wrong");
    });

    const isLast = qAt === qSet.length - 1;
    document.getElementById("after").innerHTML = `
      <div class="verdict ${correct ? "good" : "bad"}">
        <div class="vhead">${correct ? "Correct" : "Not quite"}</div>
        <p>${esc(q.why)}</p>
      </div>
      <div class="btn-row">
        <button class="btn btn-primary" id="go">${
          isLast ? "See your score" : "Next question"
        }</button>
      </div>`;

    const go = document.getElementById("go");
    go.onclick = () => {
      if (isLast) {
        recordAttempt(qResults);
        paintResults();
      } else {
        qAt++;
        qLocked = false;
        paintQuestion(isRetry);
      }
    };
    go.focus();
  }

  function paintResults() {
    const score = qResults.filter((r) => r.correct).length;
    const total = qResults.length;
    const pct = Math.round((score / total) * 100);
    const missed = qResults.filter((r) => !r.correct);

    const line =
      pct === 100
        ? "Perfect. Nothing left to fix."
        : pct >= 80
        ? "Solid. Read the ones below and you're in good shape."
        : pct >= 60
        ? "Getting there. The misses below are where the points are."
        : "Worth another pass through the study pages before the next try.";

    view.innerHTML = `
      <div class="sechead"><h2>Your score</h2><span class="side">${line}</span></div>

      <div class="score">
        <span class="big">${score}</span>
        <span class="of">out of ${total}</span>
        <span class="pct">${pct}%</span>
      </div>

      ${
        missed.length
          ? `<p class="lede">You missed ${missed.length} question${
              missed.length === 1 ? "" : "s"
            }. Here they are.</p>
             <div class="review">
               ${missed
                 .map(
                   (r) => `
                 <div class="ritem miss">
                   <div class="rq">${esc(r.q.q)}</div>
                   <div class="ra">You picked: <b>${esc(
                     r.q.choices[r.picked]
                   )}</b></div>
                   <div class="ra">Correct answer: <b>${esc(
                     r.q.choices[r.q.answer]
                   )}</b></div>
                   <div class="rwhy">${esc(r.q.why)}</div>
                 </div>`
                 )
                 .join("")}
             </div>`
          : `<div class="review"><div class="ritem"><div class="rq">Every question correct.</div><div class="ra">Try another round — the questions change each time.</div></div></div>`
      }

      <div class="btn-row">
        <a class="btn btn-primary" href="#/quiz" id="again">Take another quiz</a>
        ${
          missed.length
            ? `<a class="btn" href="#/quiz?mode=missed">Retry just the misses</a>`
            : ""
        }
        <a class="btn" href="#/progress">See progress</a>
      </div>
    `;

    // Same hash twice in a row won't fire hashchange, so rebuild by hand.
    const again = document.getElementById("again");
    again.onclick = (e) => {
      e.preventDefault();
      if (location.hash === "#/quiz") quiz(new URLSearchParams());
      else location.hash = "#/quiz";
    };
  }

  /* ---------- progress ---------- */

  function progress() {
    const data = load();

    if (!data.attempts.length) {
      view.innerHTML = `
        <div class="sechead"><h2>Progress</h2></div>
        <div class="empty">
          <p>No quizzes taken yet. Your scores show up here once you finish one.</p>
          <a class="btn btn-primary" href="#/quiz">Take a practice quiz</a>
        </div>`;
      return;
    }

    const rows = data.attempts
      .map((a) => {
        const d = new Date(a.at);
        const pct = Math.round((a.score / a.total) * 100);
        return `<tr>
          <td>${d.toLocaleDateString(undefined, {
            month: "short",
            day: "numeric"
          })}, ${d.toLocaleTimeString(undefined, {
          hour: "numeric",
          minute: "2-digit"
        })}</td>
          <td class="sc">${a.score}/${a.total}</td>
          <td>${pct}%</td>
        </tr>`;
      })
      .join("");

    // Accuracy per unit, across every question answered so far.
    const byTopic = TOPICS.map((t) => {
      let seen = 0,
        right = 0;
      QUESTIONS.filter((q) => q.topic === t.id).forEach((q) => {
        const rec = data.byQuestion[qid(q)];
        if (rec) {
          seen += rec.seen;
          right += rec.right;
        }
      });
      return { t: t, seen: seen, pct: seen ? Math.round((right / seen) * 100) : null };
    });

    const missedCount = missedQuestions().length;

    view.innerHTML = `
      <div class="sechead"><h2>Progress</h2><span class="side">Saved in this browser only</span></div>

      <h3 style="font-family:var(--sans);font-size:1rem;margin-bottom:.6rem">Accuracy by unit</h3>
      <div class="weak">
        ${byTopic
          .map(
            (b) => `
          <div class="weakrow">
            <span class="wname">${esc(b.t.title)}</span>
            <span class="wbar"><i style="width:${b.pct === null ? 0 : b.pct}%"></i></span>
            <span class="wpct">${b.pct === null ? "—" : b.pct + "%"}</span>
          </div>`
          )
          .join("")}
      </div>

      <div class="sechead"><h2>Past quizzes</h2></div>
      <table class="hist">
        <thead><tr><th>When</th><th>Score</th><th>Percent</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>

      <div class="btn-row">
        <a class="btn btn-primary" href="#/quiz">Take another quiz</a>
        ${
          missedCount
            ? `<a class="btn" href="#/quiz?mode=missed">Retry ${missedCount} missed question${
                missedCount === 1 ? "" : "s"
              }</a>`
            : ""
        }
        <button class="btn" id="clear">Clear history</button>
      </div>
    `;

    document.getElementById("clear").onclick = () => {
      if (!confirm("Clear all saved scores? This can't be undone.")) return;
      try {
        localStorage.removeItem(STORE_KEY);
      } catch (e) {}
      progress();
    };
  }

  /* ---------- go ---------- */

  window.addEventListener("hashchange", route);
  route();
})();
