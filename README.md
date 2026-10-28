# Laws of Motion — study portal

A study guide and practice quiz built from Jack's physical science packets.
Static site, no build step, no dependencies.

**Units covered so far**

1. Inertia & Newton's First Law
2. Mass
3. Forces
4. Newton's Second Law — F = ma, falling objects, weight
5. Resistance, Stress & Pressure

---

## Adding a new packet

Everything Jack studies lives in **`content.js`**. You never need to touch
`app.js`, `styles.css`, or `index.html` to add material.

There are three lists in that file, and a new unit means adding to each one.

### 1. Add the unit to `TOPICS`

Copy an existing block and change it. The `id` is a short slug you'll reuse in
the other two lists.

```js
{
  id: "newtons-second-law",
  title: "Newton's Second Law",
  blurb: "One line describing the unit.",
  sections: [
    {
      heading: "Section heading",
      body: [
        "A paragraph.",
        "Another paragraph."
      ],
      // every field below is optional — use the ones that fit
      law: true,            // renders body[0] as the big framed law statement
      callout: "One memorable line, set off at the bottom of the section.",
      terms: [
        { term: "Word", def: "Definition." }
      ],
      list: {
        label: "Label above the list",
        items: ["First", "Second", "Third"]
      },
      numbered: {
        label: "Label above the numbered list",
        items: [
          { head: "Bold lead-in", text: "The explanation." }
        ]
      },
      compare: {
        left:  { label: "Mass",   points: ["...", "..."] },
        right: { label: "Weight", points: ["...", "..."] }
      }
    }
  ]
}
```

### 2. Add flashcards to `FLASHCARDS`

```js
{ topic: "newtons-second-law", front: "Term or question", back: "The answer." }
```

### 3. Add questions to `QUESTIONS`

`answer` is the **index** of the correct choice, counting from 0. So `0` is the
first choice, `1` the second, and so on. Four choices per question.

You don't need to vary where you put the correct answer. The quiz shuffles the
four choices every time a question is served and moves the answer with them, so
the right answer lands in each slot about a quarter of the time no matter how
you write them.

```js
{
  topic: "newtons-second-law",
  q: "The question text?",
  choices: ["First", "Second", "Third", "Fourth"],
  answer: 1,
  why: "Why that answer is right — this shows after he answers."
}
```

The quiz pulls 15 questions at random from the whole pool each time, sampled
proportionally across units, so the more questions you add the less repetitive
it gets. Nothing else needs changing as the pool grows.

### 4. Push it

```bash
git add -A
git commit -m "Add Newton's second law packet"
git push
```

Vercel redeploys on its own within about a minute.

---

## Running it locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

---

## Notes

- Scores are saved in the browser's local storage on whichever device he uses.
  They don't sync between his laptop and his phone, and clearing site data
  wipes them. The quiz works fine either way.
- Quiz length is `QUIZ_LENGTH` at the top of `app.js` if you ever want to
  change it from 15.
