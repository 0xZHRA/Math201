# KFUPM MATH 201 — Major 2 Study Portal

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Portal-38bdf8?style=for-the-badge&logo=github)](https://0xzhra.github.io/Math201/)
[![Course](https://img.shields.io/badge/Course-KFUPM%20MATH%20201-10b981?style=for-the-badge)](https://0xzhra.github.io/Math201/)
[![Status](https://img.shields.io/badge/Status-Complete%20%26%20Verified-a855f7?style=for-the-badge)](https://0xzhra.github.io/Math201/)

> **Live Interactive Portal**: [https://0xzhra.github.io/Math201/](https://0xzhra.github.io/Math201/)

A high-performance, minimalist, mobile-first web study portal engineered for KFUPM Calculus III (MATH 201) students preparing for Major 2 exams. 

---

## 🌟 Key Features

- **📖 Complete Lecture Notes**: 12 modular topics covering all Major 2 syllabus sections (Chapters 11.5–11.6 and 13.1–13.7) with KaTeX math rendering, conceptual summaries, and step-by-step worked examples.
- **🎯 KFUPM Exam-Aligned Practice Problems**: Curated exercises reflecting recurrent KFUPM Major Exam styles, featuring boxed final answers and expandable accordion solutions.
- **🎥 15 HD Lecture Videos Hub**: Anas Abu Zahra's full lecture recordings for all Major 2 chapters with direct YouTube links and instant watch cards.
- **🛡️ Strict CSS Border Containment**: Custom CSS containment preventing text and KaTeX math formulas from overflowing container borders on screens of any size.
- **💾 Independent Scroll & State Memory**: Client-side `localStorage` caching remembers your active tab, active topic, and exact vertical scroll offsets independently.
- **⚡ Zero-Lag Static Architecture**: Pure Vanilla HTML5, modern CSS logical properties, and lightweight JavaScript with zero bulky frameworks.

---

## 📚 Syllabus & Topic Breakdown

| Topic | Chapter | Description & Key Concepts |
|:---:|:---:|:---|
| **01** | **11.5** | **Lines in Space & Skew Lines**: Vector, parametric, and symmetric equations; parallel and skew line tests. |
| **02** | **11.5** | **Planes in Space & Intersections**: Normal vectors, scalar equations, line of intersection between planes. |
| **03** | **11.5** | **Distances in Space**: Point-to-plane, point-to-line, parallel planes distance, shortest distance between skew lines. |
| **04** | **11.6** | **Surfaces in Space (Part 1)**: Cylinders, coordinate traces, standard quadrics (ellipsoids, paraboloids, hyperboloids). |
| **05** | **11.6** | **Surfaces in Space (Part 2)**: Shifted quadrics via completing the square, traces, upper/lower halves, inequalities. |
| **06** | **13.1** | **Functions of Several Variables**: Natural domains, algebraic constraints, ranges, and 3D surface graphs. |
| **07** | **13.1** | **Level Curves & Contour Maps**: 2D elevation contours, matching level curves to 3D surfaces, level surfaces $f(x,y,z)=c$. |
| **08** | **13.2** | **Limits & Continuity**: Two-Path Test along lines and parabolas for non-existence, polar coordinates, and squeeze theorem. |
| **09** | **13.3** | **Partial Derivatives**: First-order partials $f_x, f_y$, tangent slopes, second-order mixed partials, and Clairaut's theorem. |
| **10** | **13.4** | **Differentials & Linear Approximations**: Total differentials $dz$, tangent plane linearization $L(x,y)$, error estimation. |
| **11** | **13.5** | **The Multivariable Chain Rule**: Case 1 & Case 2 tree diagrams, intermediate variables, and implicit differentiation. |
| **12** | **13.6** | **Directional Derivatives & Gradients**: Gradient vector $\nabla f$, unit directions, maximum rate of increase, and steepest descent. |
| **13** | **13.7** | **Tangent Planes & Normal Lines**: Normal gradient vectors $\nabla F$, tangent plane equations, and normal lines to surfaces. |

---

## 🚀 Running Locally

Because this portal is built with vanilla web technologies, simply clone and open `index.html` in any browser:

```bash
git clone https://github.com/0xZHRA/Math201.git
cd Math201
# Open index.html in your default browser:
start index.html
```

Or serve with Python:

```bash
python -m http.server 8000
```

---

## 🛠️ Tech Stack & Engineering Standards

- **Formula Rendering**: [KaTeX](https://katex.org/) (Fastest web math engine)
- **Layout & Mirroring**: CSS Logical Properties (`inset-inline-start`, `border-inline-end`, etc.)
- **Persistence**: Browser `localStorage` (`math201_portal_state_v5`)
- **Hosting**: GitHub Pages via GitHub Actions / Pages Branch

---

## 👤 Author

- **0xZHRA** ([@0xZHRA](https://github.com/0xZHRA))
- Commit Email: `95636416+0xZHRA@users.noreply.github.com`
