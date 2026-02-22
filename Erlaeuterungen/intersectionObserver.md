# 🔹 Der komplette Code

```js
export function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        {
            threshold: 0.2,
        },
    );

    elements.forEach((el) => observer.observe(el));
}
```

---

# 1️⃣ `export function initScrollAnimations() {`

### Was passiert hier?

- `export` → Die Funktion wird als **ES-Modul** exportiert.
- Dadurch kannst du sie in `main.js` importieren:

```js
import { initScrollAnimations } from './modules/scrollAnimations.js';
```

- `function initScrollAnimations()` → Definition einer Funktion.
- `{` → Beginn des Funktionsblocks.

👉 Diese Funktion wird später einmal beim Laden der Seite aufgerufen.

---

# 2️⃣ `const elements = document.querySelectorAll(".fade-in");`

### Was macht das?

- `document` → Das gesamte DOM der Seite.
- `querySelectorAll(".fade-in")` → Suche alle Elemente mit der CSS-Klasse `.fade-in`.
- Rückgabewert → Eine **NodeList** (ähnlich wie ein Array).

Beispiel:

```html
<section class="fade-in"></section>
<div class="fade-in"></div>
```

Dann enthält `elements` beide.

Warum wichtig?
👉 Nur diese Elemente sollen animiert werden.

---

# 3️⃣ `const observer = new IntersectionObserver(`

Hier beginnt das Herzstück.

### Was ist IntersectionObserver?

Eine moderne Browser-API, die erkennt:

> „Ist ein Element im sichtbaren Bereich (Viewport)?“

Früher hätte man Scroll-Events gebraucht → schlecht für Performance.

IntersectionObserver ist:

- performant
- eventbasiert
- browseroptimiert

---

# 4️⃣ `(entries) => {`

Das ist die **Callback-Funktion** des Observers.

Sie wird automatisch vom Browser aufgerufen, wenn:

- Ein beobachtetes Element in den Viewport kommt
- Oder ihn verlässt

---

# 5️⃣ `entries`

`entries` ist ein Array von sogenannten **IntersectionObserverEntry** Objekten.

Jedes Objekt enthält Infos über:

- Welches Element betroffen ist
- Wie viel sichtbar ist
- Ob es gerade sichtbar ist

---

# 6️⃣ `entries.forEach((entry) => {`

Weil mehrere Elemente gleichzeitig sichtbar werden können.

Wir gehen jedes einzelne durch.

---

# 7️⃣ `if (entry.isIntersecting) {`

Sehr wichtig.

`entry.isIntersecting` ist:

- `true` → Element ist sichtbar
- `false` → Element ist nicht sichtbar

👉 Wir wollen nur reagieren, wenn es sichtbar wird.

---

# 8️⃣ `entry.target`

`target` ist:

> Das DOM-Element, das gerade beobachtet wird.

Also z.B.:

```html
<section class="fade-in"></section>
```

---

# 9️⃣ `.classList.add("visible");`

Hier passiert die Animation.

Wir fügen die CSS-Klasse `visible` hinzu.

Erinnerung an dein CSS:

```css
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}
```

Sobald `visible` dazukommt:

- opacity geht von 0 → 1
- transform von 30px → 0
- durch transition entsteht Animation

👉 JS triggert nur Klasse.
👉 CSS macht die Animation.

Saubere Trennung von Verantwortung.

---

# 🔟 `threshold: 0.2`

Das sind Optionen für den Observer.

`threshold` bedeutet:

> Wie viel Prozent des Elements sichtbar sein müssen, bevor es als „intersecting“ gilt.

`0.2` = 20 %

Also:

- Wenn mindestens 20 % des Elements im Viewport sind
- Dann wird `isIntersecting = true`

---

# 1️⃣1️⃣ `elements.forEach((el) => observer.observe(el));`

Hier starten wir das Beobachten.

Für jedes `.fade-in` Element:

- `observer.observe(el)` sagt dem Browser:

    > „Beobachte dieses Element.“

Ab diesem Moment reagiert der Observer automatisch.

---

# 🧠 Was passiert technisch beim Scrollen?

1. Du scrollst.
2. Browser berechnet, was sichtbar ist.
3. IntersectionObserver merkt:
    - Element überschreitet 20 % Sichtbarkeit

4. Callback wird ausgelöst.
5. `visible` wird hinzugefügt.
6. CSS animiert.

Keine Scroll-Listener.
Keine manuelle Berechnung.
Sehr performant.

---

# 🔥 Warum das professionell ist

- Keine Scroll-Events
- Keine Reflow-Schleifen
- Keine Performance-Probleme
- Modernes Browser-API
- Saubere Trennung von CSS und JS

Das ist echtes „moderne Frontend“-Level.

---

# 🎯 Wenn du es noch sauberer willst

Du könntest nach der Animation stoppen:

```js
if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
}
```

Dann wird das Element nur einmal animiert.

---

Wenn du willst, erkläre ich dir als nächstes:

- Wie IntersectionObserver intern performant arbeitet
- Oder wie man Scroll-Animationen noch weiter professionalisiert (Stagger, Delay, Parallax)
- Oder wie man das Ganze als reusable Utility baut

Was willst du vertiefen?
