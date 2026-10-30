window.MATH201_EXAM_BANK = {
  "course": "MATH 201 - Calculus III",
  "exam": "Major Exam II",
  "coordinator": "Dr. Ibrahim Al-Rasasi",
  "total_questions": 201,
  "terms_included": [
    "PT1",
    "PT2",
    "253",
    "252",
    "251",
    "243",
    "242",
    "241",
    "233",
    "232",
    "231",
    "223",
    "221"
  ],
  "sections_covered": [
    "11.5",
    "11.6",
    "13.1",
    "13.2",
    "13.3",
    "13.4",
    "13.5",
    "13.6",
    "13.7",
    "13.8"
  ],
  "section_descriptions": {
    "11.5": "Lines and Planes in Space (Parametric & Symmetric Equations, Distances, Intersections)",
    "11.6": "Cylinders and Quadric Surfaces (Ellipsoids, Hyperboloids, Cones, Paraboloids)",
    "13.1": "Functions of Several Variables, Domains, Ranges & Level Curves/Surfaces",
    "13.2": "Limits and Continuity in Multivariable Calculus",
    "13.3": "Partial Derivatives & Higher-Order Derivatives",
    "13.4": "Differentials, Linearization & Tangent Plane Approximations",
    "13.5": "The Chain Rule & Implicit Differentiation",
    "13.6": "Directional Derivatives and Gradient Vectors",
    "13.7": "Tangent Planes and Normal Lines to Surfaces",
    "13.8": "Extreme Values and Saddle Points, Lagrange Multipliers"
  },
  "exams": {
    "221": {
      "term": "221",
      "title": "KFUPM MATH 201 - Major Exam II (Term 221)",
      "coordinator": "Dr. Ibrahim Al-Rasasi",
      "date": "Fall 2022",
      "question_count": 20
    },
    "223": {
      "term": "223",
      "title": "KFUPM MATH 201 - Major Exam II (Term 223)",
      "coordinator": "Dr. Ibrahim Al-Rasasi",
      "date": "Summer 2023",
      "question_count": 20
    },
    "231": {
      "term": "231",
      "title": "Term 231",
      "coordinator": "Dr. Khalid Ali Alanezy",
      "date": "",
      "question_count": 20
    },
    "232": {
      "term": "232",
      "title": "KFUPM MATH 201 - Major Exam II (Term 232)",
      "coordinator": "Dr. Ibrahim Al-Rasasi",
      "date": "Spring 2024",
      "question_count": 20
    },
    "233": {
      "term": "233",
      "title": "Term 233",
      "coordinator": "Dr. Ibrahim Al-Rasasi",
      "date": "",
      "question_count": 15
    },
    "241": {
      "term": "241",
      "title": "Term 241",
      "coordinator": "Dr. Adel Khalfallah",
      "date": "",
      "question_count": 15
    },
    "242": {
      "term": "242",
      "title": "Term 242",
      "coordinator": "Dr. Ibrahim Al-Rasasi",
      "date": "",
      "question_count": 15
    },
    "243": {
      "term": "243",
      "title": "Term 243",
      "coordinator": "Dr. Adel Khalfallah",
      "date": "",
      "question_count": 15
    },
    "252": {
      "term": "252",
      "title": "Term 252",
      "coordinator": "Dr. Faisal A. Fairag",
      "date": "",
      "question_count": 15
    },
    "253": {
      "term": "253",
      "title": "Term 253",
      "coordinator": "Dr. Ibrahim Al-Rasasi",
      "date": "",
      "question_count": 15
    },
    "PT1": [
      {
        "id": "PT1_1",
        "term": "PT1",
        "number": 1,
        "section": "11.5",
        "topic": "Lines & Planes in Space",
        "question": "For the line $\\mathbf{r}(t) = \\langle 1, 2, -1 \\rangle + t\\langle 2, -1, 2 \\rangle$ and the plane $2x - y + 2z = 7$, the intersection point is:",
        "choices": [
          "$(3, 1, 1)$",
          "$(7, -1, 5)$",
          "$(1, 2, -1)$",
          "$(5, 0, 3)$",
          "$\\text{No intersection}$"
        ],
        "correct_answer": "A",
        "solution": "<p>The line intersects the plane at the point $(3, 1, 1)$.</p><p><strong>Step 1: Write Parametric Equations for the Line</strong> From the vector equation $\\mathbf{r}(t) = \\langle 1, 2, -1 \\rangle + t\\langle 2, -1, 2 \\rangle$, extract coordinate functions:$$x(t) = 1 + 2t, \\quad y(t) = 2 - t, \\quad z(t) = -1 + 2t$$</p><p><strong>Step 2: Substitute Parametric Equations into the Plane Equation</strong> Substitute $x(t), y(t), z(t)$ into $2x - y + 2z = 7$:$$2(1 + 2t) - (2 - t) + 2(-1 + 2t) = 7$$Expand and collect like terms:$$2 + 4t - 2 + t - 2 + 4t = 7$$$$(4t + t + 4t) + (2 - 2 - 2) = 7$$$$9t - 2 = 7 \\implies 9t = 9 \\implies t = 1$$</p><p><strong>Step 3: Calculate the Coordinates of the Intersection Point</strong> Substitute parameter value $t = 1$ back into the line equations:$$x(1) = 1 + 2(1) = 3$$$$y(1) = 2 - (1) = 1$$$$z(1) = -1 + 2(1) = 1$$Therefore, the intersection point is $(3, 1, 1)$.</p><p><strong>Step 4: Verify in the Plane Equation</strong> $$2(3) - (1) + 2(1) = 6 - 1 + 2 = 7 \\quad \\checkmark$$</p>"
      },
      {
        "id": "PT1_2",
        "term": "PT1",
        "number": 2,
        "section": "11.5",
        "topic": "Distances in Space",
        "question": "The distance from the point $P = (1, 2, 3)$ to the plane $2x - 2y + z = 9$ is:",
        "choices": [
          "$\\dfrac{2}{3}$",
          "$\\dfrac{10}{3}$",
          "$\\dfrac{4}{3}$",
          "$\\dfrac{8}{3}$",
          "$2$"
        ],
        "correct_answer": "D",
        "solution": "<p>The perpendicular distance from $P(1, 2, 3)$ to the plane is $\\dfrac{8}{3}$.</p><p><strong>Step 1: State the Point-to-Plane Distance Formula</strong> The perpendicular distance $D$ from a point $P(x_0, y_0, z_0)$ to a plane $Ax + By + Cz = d$ is given by:$$D = \\frac{|A x_0 + B y_0 + C z_0 - d|}{\\sqrt{A^2 + B^2 + C^2}}$$</p><p><strong>Step 2: Identify Plane Constants and Point Coordinates</strong> Given $P = (1, 2, 3)$, normal vector $\\mathbf{n} = \\langle A, B, C \\rangle = \\langle 2, -2, 1 \\rangle$, and scalar $d = 9$.</p><p><strong>Step 3: Evaluate Numerator and Denominator</strong> Numerator:$$|2(1) - 2(2) + 1(3) - 9| = |2 - 4 + 3 - 9| = |-8| = 8$$Denominator (magnitude of the normal vector):$$\\|\\mathbf{n}\\| = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$$</p><p><strong>Step 4: Compute the Distance</strong> $$D = \\frac{8}{3}$$</p>"
      },
      {
        "id": "PT1_3",
        "term": "PT1",
        "number": 3,
        "section": "11.6",
        "topic": "Quadric Surfaces Classification",
        "question": "Identify the quadric surface given by the equation:$$x^2 + y^2 - z^2 = 4$$",
        "choices": [
          "$\\text{Hyperboloid of two sheets}$",
          "$\\text{Hyperbolic paraboloid}$",
          "$\\text{Elliptic cone}$",
          "$\\text{Elliptic paraboloid}$",
          "$\\text{Hyperboloid of one sheet}$"
        ],
        "correct_answer": "E",
        "solution": "<p>The surface is a Hyperboloid of one sheet.</p><p><strong>Step 1: Put the Equation in Standard Canonical Form</strong> Divide both sides of $x^2 + y^2 - z^2 = 4$ by $4$:$$\\frac{x^2}{4} + \\frac{y^2}{4} - \\frac{z^2}{4} = 1$$</p><p><strong>Step 2: Compare with Standard Forms of Quadrics</strong> - Two positive squared terms and one negative squared term equaling $+1$:$$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} - \\frac{z^2}{c^2} = 1 \\implies \\textbf{Hyperboloid of One Sheet}$$ - Two negative squared terms and one positive squared term equaling $+1$:$$-\\frac{x^2}{a^2} - \\frac{y^2}{b^2} + \\frac{z^2}{c^2} = 1 \\implies \\textbf{Hyperboloid of Two Sheets}$$ - Right-hand side equaling $0$:$$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} - \\frac{z^2}{c^2} = 0 \\implies \\textbf{Elliptic Cone}$$</p><p><strong>Step 3: Verify Horizontal and Vertical Traces</strong> Horizontal traces ($z = k$): $x^2 + y^2 = 4 + k^2$ are real circles for every value of $k \\in \\mathbb{R}$. Vertical traces ($x = 0$ or $y = 0$) are hyperbolas ($y^2 - z^2 = 4$). Thus, the surface is connected and tubular: <strong>Hyperboloid of one sheet</strong>.</p>"
      },
      {
        "id": "PT1_4",
        "term": "PT1",
        "number": 4,
        "section": "11.6",
        "topic": "Quadric Surfaces & Intersections",
        "question": "The intersection of the hyperbolic paraboloid (saddle surface) $z = x^2 - y^2$ with the vertical plane $y = x + 1$ is:",
        "choices": [
          "$z = 1$",
          "$z = -2x - 1$",
          "$z = 2x^2 + 1$",
          "$z = 2x + 1$",
          "$z = -x^2 - 1$"
        ],
        "correct_answer": "B",
        "solution": "<p>The intersection curve is the line $z = -2x - 1$ in the plane $y = x + 1$.</p><p><strong>Step 1: Understand the Geometric Intersection</strong> Any point on the curve of intersection must satisfy the surface equation $z = x^2 - y^2$ and the plane equation $y = x + 1$ simultaneously.</p><p><strong>Step 2: Substitute $y = x + 1$ into the Surface Equation</strong> $$z = x^2 - (x + 1)^2$$</p><p><strong>Step 3: Expand the Binomial and Simplify</strong> $$z = x^2 - (x^2 + 2x + 1) = x^2 - x^2 - 2x - 1 = -2x - 1$$</p><p><strong>Step 4: Geometric Interpretation</strong> In $\\mathbb{R}^3$, the intersection is a straight line lying within the vertical plane $y = x + 1$, with height coordinate given by $z = -2x - 1$.</p>"
      },
      {
        "id": "PT1_5",
        "term": "PT1",
        "number": 5,
        "section": "13.1",
        "topic": "Domain of Multivariable Functions",
        "question": "For the function $f(x, y) = \\dfrac{\\sqrt{9 - x^2 - y^2}}{x - 1}$, which description gives its domain $\\operatorname{Dom}(f)$?",
        "choices": [
          "$x^2 + y^2 \\le 9, \\quad y \\ne 1$",
          "$x^2 + y^2 \\le 9$",
          "$x^2 + y^2 > 9, \\quad x \\ne 1$",
          "$x^2 + y^2 < 9$",
          "$x^2 + y^2 \\le 9, \\quad x \\ne 1$"
        ],
        "correct_answer": "E",
        "solution": "<p>$\\operatorname{Dom}(f) = \\{ (x, y) \\mid x^2 + y^2 \\le 9, \\ x \\ne 1 \\}$.</p><p><strong>Step 1: Radical Domain Condition</strong> The radicand of the square root in the numerator must be non-negative:$$9 - x^2 - y^2 \\ge 0 \\iff x^2 + y^2 \\le 9$$This specifies the closed disk of radius $3$ centered at $(0, 0)$.</p><p><strong>Step 2: Non-Zero Denominator Condition</strong> The denominator cannot be zero:$$x - 1 \\ne 0 \\iff x \\ne 1$$This excludes all points on the vertical line $x = 1$.</p><p><strong>Step 3: Combine Conditions</strong> $$\\operatorname{Dom}(f) = \\left\\{ (x, y) \\in \\mathbb{R}^2 \\mid x^2 + y^2 \\le 9 \\text{ and } x \\ne 1 \\right\\}$$</p>"
      },
      {
        "id": "PT1_6",
        "term": "PT1",
        "number": 6,
        "section": "13.1",
        "topic": "Level Curves of Multivariable Functions",
        "question": "For the function $f(x, y) = \\ln(4 - x^2 - y^2)$, the level curve $f(x, y) = \\ln 3$ is:",
        "choices": [
          "$\\text{A circle of radius } 2$",
          "$\\text{The empty set}$",
          "$\\text{A single point}$",
          "$\\text{A circle of radius } 1$",
          "$\\text{A circle of radius } \\sqrt{3}$"
        ],
        "correct_answer": "D",
        "solution": "<p>A circle centered at the origin of radius $1$.</p><p><strong>Step 1: Set Up Level Curve Equation</strong> Substitute $f(x, y) = \\ln 3$:$$\\ln(4 - x^2 - y^2) = \\ln 3$$</p><p><strong>Step 2: Exponentiate Both Sides</strong> $$e^{\\ln(4 - x^2 - y^2)} = e^{\\ln 3} \\iff 4 - x^2 - y^2 = 3$$</p><p><strong>Step 3: Identify the Geometric Curve</strong> Rearrange:$$x^2 + y^2 = 4 - 3 = 1$$This is a circle centered at the origin with radius $r = \\sqrt{1} = 1$.</p>"
      },
      {
        "id": "PT1_7",
        "term": "PT1",
        "number": 7,
        "section": "13.2",
        "topic": "Multivariable Limits - Squeeze Theorem",
        "question": "Evaluate the limit:$$\\lim_{(x, y) \\to (0, 0)} \\frac{x^2 y}{x^2 + y^2}$$",
        "choices": [
          "$\\text{Does not exist}$",
          "$1$",
          "$-1$",
          "$0$",
          "$\\dfrac{1}{2}$"
        ],
        "correct_answer": "D",
        "solution": "<p>$\\lim_{(x, y) \\to (0, 0)} \\dfrac{x^2 y}{x^2 + y^2} = 0$. </p><p><strong>Method 1: Polar Coordinates</strong> Let $x = r \\cos\\theta$ and $y = r \\sin\\theta$. As $(x, y) \\to (0, 0)$, $r \\to 0^+$:$$\\frac{x^2 y}{x^2 + y^2} = \\frac{(r^2 \\cos^2\\theta)(r \\sin\\theta)}{r^2} = r \\cos^2\\theta \\sin\\theta$$Since $|\\cos^2\\theta \\sin\\theta| \\le 1$, we have:$$|r \\cos^2\\theta \\sin\\theta| \\le r \\to 0 \\quad \\text{as } r \\to 0^+$$By the Squeeze Theorem, the limit is $0$, regardless of direction $\\theta$. </p><p><strong>Method 2: Squeeze Inequality</strong> Notice that $\\dfrac{x^2}{x^2 + y^2} \\le 1$ for all $(x, y) \\ne (0, 0)$. Therefore:$$0 \\le \\left| \\frac{x^2 y}{x^2 + y^2} \\right| = \\frac{x^2}{x^2 + y^2} |y| \\le 1 \\cdot |y| = |y|$$Since $\\lim_{(x, y) \\to (0, 0)} |y| = 0$, by the Squeeze Theorem:$$\\lim_{(x, y) \\to (0, 0)} \\frac{x^2 y}{x^2 + y^2} = 0$$</p>"
      },
      {
        "id": "PT1_8",
        "term": "PT1",
        "number": 8,
        "section": "13.2",
        "topic": "Multivariable Limits - Two-Path Test",
        "question": "Evaluate the limit:$$\\lim_{(x, y) \\to (0, 0)} \\frac{x^2 y}{x^4 + y^2}$$",
        "choices": [
          "$\\text{Does not exist}$",
          "$\\dfrac{1}{2}$",
          "$1$",
          "$-1$",
          "$0$"
        ],
        "correct_answer": "A",
        "solution": "<p>The limit Does Not Exist (DNE) by the Two-Path Test.</p><p><strong>Step 1: Test Along Straight Lines $y = mx$</strong> $$\\lim_{x \\to 0} \\frac{x^2(mx)}{x^4 + (mx)^2} = \\lim_{x \\to 0} \\frac{m x^3}{x^2(x^2 + m^2)} = \\lim_{x \\to 0} \\frac{m x}{x^2 + m^2} = 0 \\quad (\\text{for } m \\ne 0)$$Along the coordinate axes ($x = 0$ or $y = 0$), the expression is also identically $0$.</p><p><strong>Step 2: Examine Degree Balance in the Denominator</strong> In $x^4 + y^2$, the terms balance when $y \\sim x^2$. Let us test parabolic paths $y = k x^2$:$$\\lim_{x \\to 0} \\frac{x^2(k x^2)}{x^4 + (k x^2)^2} = \\lim_{x \\to 0} \\frac{k x^4}{x^4 + k^2 x^4} = \\lim_{x \\to 0} \\frac{k x^4}{x^4(1 + k^2)} = \\frac{k}{1 + k^2}$$</p><p><strong>Step 3: Evaluate Different Paths</strong> - Along $y = x^2$ ($k = 1$): $\\dfrac{1}{1 + 1^2} = \\dfrac{1}{2}$ - Along $y = -x^2$ ($k = -1$): $\\dfrac{-1}{1 + (-1)^2} = -\\dfrac{1}{2}$ - Along $y = 0$ ($k = 0$): $0$ Since different paths produce different limiting values, the limit <strong>Does Not Exist (DNE)</strong>.</p>"
      }
    ],
    "PT2": [
      {
        "id": "PT2_1",
        "term": "PT2",
        "number": 1,
        "section": "13.3",
        "topic": "Partial Derivatives & Clairaut's Theorem",
        "question": "If $f(x, y) = x^2 e^{xy}$, then the mixed second partial derivative $f_{xy}(1, 0)$ equals:",
        "choices": [
          "$0$",
          "$2$",
          "$4$",
          "$3$",
          "$1$"
        ],
        "correct_answer": "D",
        "solution": "<p>$f_{xy}(1, 0) = 3$.</p><p><strong>Step 1: Compute First Partial Derivative $f_y$</strong> Differentiating with respect to $y$ (treating $x$ as constant):$$f_y(x, y) = \\frac{\\partial}{\\partial y}[x^2 e^{xy}] = x^2 \\cdot (x e^{xy}) = x^3 e^{xy}$$</p><p><strong>Step 2: Differentiate with Respect to $x$ ($f_{yx} = f_{xy}$)</strong> Using the Product Rule:$$\\frac{\\partial}{\\partial x}[x^3 e^{xy}] = \\left( \\frac{\\partial}{\\partial x}[x^3] \\right) e^{xy} + x^3 \\left( \\frac{\\partial}{\\partial x}[e^{xy}] \\right) = 3x^2 e^{xy} + x^3 (y e^{xy}) = e^{xy}(3x^2 + x^3 y)$$</p><p><strong>Step 3: Evaluate at $(x, y) = (1, 0)$</strong> $$f_{xy}(1, 0) = e^{1 \\cdot 0} \\left( 3(1)^2 + (1)^3(0) \\right) = e^0 (3 + 0) = 1 \\cdot 3 = 3$$</p>"
      },
      {
        "id": "PT2_2",
        "term": "PT2",
        "number": 2,
        "section": "13.3",
        "topic": "Higher-Order Partial Derivatives",
        "question": "Let $f(x, y) = x^3 y^2 - 2x y^3$. Then the third-order partial derivative $f_{xxy}(1, 2)$ equals:",
        "choices": [
          "$24$",
          "$12$",
          "$-12$",
          "$6$",
          "$18$"
        ],
        "correct_answer": "A",
        "solution": "<p>$f_{xxy}(1, 2) = 24$.</p><p><strong>Step 1: First Partial Derivative $f_x$</strong> Treat $y$ as a constant:$$f_x(x, y) = \\frac{\\partial}{\\partial x}[x^3 y^2 - 2x y^3] = 3x^2 y^2 - 2y^3$$</p><p><strong>Step 2: Second Partial Derivative $f_{xx}$</strong> Differentiate $f_x$ with respect to $x$:$$f_{xx}(x, y) = \\frac{\\partial}{\\partial x}[3x^2 y^2 - 2y^3] = 6x y^2 - 0 = 6x y^2$$</p><p><strong>Step 3: Third Partial Derivative $f_{xxy}$</strong> Differentiate $f_{xx}$ with respect to $y$:$$f_{xxy}(x, y) = \\frac{\\partial}{\\partial y}[6x y^2] = 6x(2y) = 12xy$$</p><p><strong>Step 4: Evaluate at $(x, y) = (1, 2)$</strong> $$f_{xxy}(1, 2) = 12(1)(2) = 24$$</p>"
      },
      {
        "id": "PT2_3",
        "term": "PT2",
        "number": 3,
        "section": "13.4",
        "topic": "Linearization & Tangent Approximations",
        "question": "For the upper hemisphere $z = \\sqrt{25 - x^2 - y^2}$ at the base point $(3, 0)$, the local linear approximation predicts $z(3.1, 0.2) \\approx$:",
        "choices": [
          "$3.75$",
          "$4.25$",
          "$3.5$",
          "$3.925$",
          "$4.075$"
        ],
        "correct_answer": "D",
        "solution": "<p>$z(3.1, 0.2) \\approx 3.925$.</p><p><strong>Step 1: Calculate Function Value at the Base Point $(3, 0)$</strong> $$z(3, 0) = \\sqrt{25 - 3^2 - 0^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$$</p><p><strong>Step 2: Calculate First Partial Derivatives at $(3, 0)$</strong> $$z_x = \\frac{-2x}{2\\sqrt{25 - x^2 - y^2}} = \\frac{-x}{\\sqrt{25 - x^2 - y^2}} \\implies z_x(3, 0) = \\frac{-3}{4} = -0.75$$$$z_y = \\frac{-2y}{2\\sqrt{25 - x^2 - y^2}} = \\frac{-y}{\\sqrt{25 - x^2 - y^2}} \\implies z_y(3, 0) = \\frac{-0}{4} = 0$$</p><p><strong>Step 3: Construct the Linearization Formula</strong> $$L(x, y) = z(3, 0) + z_x(3, 0)(x - 3) + z_y(3, 0)(y - 0)$$$$L(x, y) = 4 - 0.75(x - 3) + 0(y - 0) = 4 - 0.75(x - 3)$$</p><p><strong>Step 4: Approximate at $(3.1, 0.2)$</strong> Here $\\Delta x = 3.1 - 3 = 0.1$:$$z(3.1, 0.2) \\approx L(3.1, 0.2) = 4 - 0.75(0.1) = 4 - 0.075 = 3.925$$</p>"
      },
      {
        "id": "PT2_4",
        "term": "PT2",
        "number": 4,
        "section": "13.4",
        "topic": "Differentials & Relative Error Estimation",
        "question": "A rectangular box has sides $2$, $3$, and $4\\text{ cm}$. If each side increases by $1\\%$, the total differential predicts its volume increases by approximately:",
        "choices": [
          "$4\\%$",
          "$1\\%$",
          "$6\\%$",
          "$3\\%$",
          "$2\\%$"
        ],
        "correct_answer": "D",
        "solution": "<p>The volume increases by approximately $3\\%$.</p><p><strong>Step 1: Formula for Volume and Total Differential</strong> Volume of the box is $V = xyz$. The total differential is:$$dV = \\frac{\\partial V}{\\partial x} dx + \\frac{\\partial V}{\\partial y} dy + \\frac{\\partial V}{\\partial z} dz = (yz) dx + (xz) dy + (xy) dz$$</p><p><strong>Step 2: Express Relative Percentage Change</strong> Divide through by $V = xyz$:$$\\frac{dV}{V} = \\frac{yz\\,dx + xz\\,dy + xy\\,dz}{xyz} = \\frac{dx}{x} + \\frac{dy}{y} + \\frac{dz}{z}$$</p><p><strong>Step 3: Substitute the Given Percentage Changes</strong> Given $\\frac{dx}{x} = 1\\%$, $\\frac{dy}{y} = 1\\%$, $\\frac{dz}{z} = 1\\%$:$$\\frac{dV}{V} = 1\\% + 1\\% + 1\\% = 3\\%$$<small style='color:var(--color-primary);'>Notice: The relative change is invariant with respect to the initial side lengths!</small></p>"
      },
      {
        "id": "PT2_5",
        "term": "PT2",
        "number": 5,
        "section": "13.5",
        "topic": "Multivariable Chain Rule",
        "question": "Let $z = x^2 y + e^{xy}$, with $x = s + t$ and $y = s - t$. Find $\\dfrac{\\partial z}{\\partial t}$ at the parameter point $(s, t) = (1, 0)$:",
        "choices": [
          "$1$",
          "$-e$",
          "$2 + e$",
          "$-1$",
          "$0$"
        ],
        "correct_answer": "A",
        "solution": "<p>$\\left. \\dfrac{\\partial z}{\\partial t} \\right|_{(1, 0)} = 1$.</p><p><strong>Step 1: Formulate the Chain Rule</strong> $$\\frac{\\partial z}{\\partial t} = \\frac{\\partial z}{\\partial x} \\frac{\\partial x}{\\partial t} + \\frac{\\partial z}{\\partial y} \\frac{\\partial y}{\\partial t}$$</p><p><strong>Step 2: Compute Intermediate Coordinates at $(s, t) = (1, 0)$</strong> $$x = 1 + 0 = 1, \\quad y = 1 - 0 = 1$$</p><p><strong>Step 3: Evaluate All Partial Derivatives</strong> $$\\frac{\\partial x}{\\partial t} = 1, \\quad \\frac{\\partial y}{\\partial t} = -1$$$$\\frac{\\partial z}{\\partial x} = 2xy + y e^{xy} \\implies \\left. \\frac{\\partial z}{\\partial x} \\right|_{(1, 1)} = 2(1)(1) + (1)e^1 = 2 + e$$$$\\frac{\\partial z}{\\partial y} = x^2 + x e^{xy} \\implies \\left. \\frac{\\partial z}{\\partial y} \\right|_{(1, 1)} = 1^2 + (1)e^1 = 1 + e$$</p><p><strong>Step 4: Combine Using the Chain Rule Formula</strong> $$\\frac{\\partial z}{\\partial t} = (2 + e)(1) + (1 + e)(-1) = 2 + e - 1 - e = 1$$</p>"
      },
      {
        "id": "PT2_6",
        "term": "PT2",
        "number": 6,
        "section": "13.5",
        "topic": "Implicit Differentiation",
        "question": "If $x^2 + y^2 + z^2 + xyz = 8$ defines $z = z(x, y)$ implicitly as a differentiable function near $(1, 1, 2)$, then $z_x(1, 1)$ equals:",
        "choices": [
          "$-1$",
          "$\\dfrac{4}{5}$",
          "$-\\dfrac{2}{3}$",
          "$-\\dfrac{4}{5}$",
          "$-\\dfrac{3}{5}$"
        ],
        "correct_answer": "D",
        "solution": "<p>$z_x(1, 1) = -\\dfrac{4}{5}$.</p><p><strong>Step 1: Define Implicit Function $F(x, y, z)$</strong> Let $F(x, y, z) = x^2 + y^2 + z^2 + xyz - 8 = 0$. By the Implicit Function Theorem:$$z_x = -\\frac{F_x}{F_z}$$</p><p><strong>Step 2: Differentiate $F$ Partially with Respect to $x$ and $z$</strong> $$F_x = \\frac{\\partial}{\\partial x}[x^2 + y^2 + z^2 + xyz - 8] = 2x + yz$$$$F_z = \\frac{\\partial}{\\partial z}[x^2 + y^2 + z^2 + xyz - 8] = 2z + xy$$</p><p><strong>Step 3: Evaluate at the Given Point $(x, y, z) = (1, 1, 2)$</strong> $$F_x(1, 1, 2) = 2(1) + (1)(2) = 2 + 2 = 4$$$$F_z(1, 1, 2) = 2(2) + (1)(1) = 4 + 1 = 5$$</p><p><strong>Step 4: Compute $z_x(1, 1)$</strong> $$z_x(1, 1) = -\\frac{F_x(1, 1, 2)}{F_z(1, 1, 2)} = -\\frac{4}{5}$$</p>"
      },
      {
        "id": "PT2_7",
        "term": "PT2",
        "number": 7,
        "section": "13.6",
        "topic": "Directional Derivatives & Gradients",
        "question": "For the surface $f(x, y) = x^2 + 2xy + 3y^2$, find the maximum directional derivative at the point $(1, -1)$:",
        "choices": [
          "$2\\sqrt{10}$",
          "$4$",
          "$10$",
          "$2\\sqrt{5}$",
          "$\\sqrt{20}$"
        ],
        "correct_answer": "B",
        "solution": "<p>The maximum directional derivative at $(1, -1)$ is $4$.</p><p><strong>Step 1: Theorem for Maximum Directional Derivative</strong> For any differentiable function $f$, the maximum value of the directional derivative $D_{\\mathbf{u}} f$ at a point $P$ occurs when $\\mathbf{u}$ has the direction of $\\nabla f(P)$, and its maximum value is:$$D_{\\mathbf{u}, \\max} f(P) = \\|\\nabla f(P)\\|$$</p><p><strong>Step 2: Calculate the Gradient Vector $\\nabla f(x, y)$</strong> $$f_x(x, y) = 2x + 2y, \\quad f_y(x, y) = 2x + 6y$$$$\\nabla f(x, y) = \\langle 2x + 2y, 2x + 6y \\rangle$$</p><p><strong>Step 3: Evaluate at Point $(1, -1)$</strong> $$f_x(1, -1) = 2(1) + 2(-1) = 2 - 2 = 0$$$$f_y(1, -1) = 2(1) + 6(-1) = 2 - 6 = -4$$$$\\nabla f(1, -1) = \\langle 0, -4 \\rangle$$</p><p><strong>Step 4: Compute the Length of the Gradient Vector</strong> $$\\|\\nabla f(1, -1)\\| = \\sqrt{0^2 + (-4)^2} = \\sqrt{16} = 4$$</p>"
      },
      {
        "id": "PT2_8",
        "term": "PT2",
        "number": 8,
        "section": "13.6",
        "topic": "Gradient Vectors & Normal Lines",
        "question": "At the point $P = (1, 2)$, a unit normal vector to the level curve $x^2 + xy + y^2 = 7$ pointing toward increasing values of $f(x, y) = x^2 + xy + y^2$ is:",
        "choices": [
          "$\\dfrac{\\langle 1, 2 \\rangle}{\\sqrt{5}}$",
          "$\\dfrac{\\langle -4, -5 \\rangle}{\\sqrt{41}}$",
          "$\\dfrac{\\langle 5, 4 \\rangle}{\\sqrt{41}}$",
          "$\\dfrac{\\langle 3, 6 \\rangle}{\\sqrt{45}}$",
          "$\\dfrac{\\langle 4, 5 \\rangle}{\\sqrt{41}}$"
        ],
        "correct_answer": "E",
        "solution": "<p>$\\mathbf{u} = \\dfrac{\\langle 4, 5 \\rangle}{\\sqrt{41}}$.</p><p><strong>Step 1: Normal Property of the Gradient</strong> For any smooth level curve $f(x, y) = c$, the gradient vector $\\nabla f(P)$ is perpendicular to the level curve at $P$ and points toward increasing values of $f$.</p><p><strong>Step 2: Differentiate to Obtain the Gradient</strong> With $f(x, y) = x^2 + xy + y^2$:$$f_x = 2x + y, \\quad f_y = x + 2y$$$$\\nabla f(x, y) = \\langle 2x + y, x + 2y \\rangle$$</p><p><strong>Step 3: Evaluate at Point $P = (1, 2)$</strong> $$f_x(1, 2) = 2(1) + 2 = 4$$$$f_y(1, 2) = 1 + 2(2) = 5$$$$\\nabla f(1, 2) = \\langle 4, 5 \\rangle$$</p><p><strong>Step 4: Normalize to a Unit Vector</strong> $$\\|\\nabla f(1, 2)\\| = \\sqrt{4^2 + 5^2} = \\sqrt{16 + 25} = \\sqrt{41}$$$$\\mathbf{u} = \\frac{\\nabla f(1, 2)}{\\|\\nabla f(1, 2)\\|} = \\frac{\\langle 4, 5 \\rangle}{\\sqrt{41}} = \\left\\langle \\frac{4}{\\sqrt{41}}, \\frac{5}{\\sqrt{41}} \\right\\rangle$$</p>"
      }
    ],
    "251A": {
      "term": "251A",
      "title": "Term 251A",
      "coordinator": "Dr. Faisal A. Fairag",
      "date": "",
      "question_count": 15
    },
    "251B": {
      "term": "251B",
      "title": "Term 251B",
      "coordinator": "Dr. Faisal A. Fairag",
      "date": "",
      "question_count": 15
    }
  },
  "all_questions": [
    {
      "id": "PT1_1",
      "term": "PT1",
      "number": 1,
      "section": "11.5",
      "topic": "Lines & Planes in Space",
      "question": "For the line $\\mathbf{r}(t) = \\langle 1, 2, -1 \\rangle + t\\langle 2, -1, 2 \\rangle$ and the plane $2x - y + 2z = 7$, the intersection point is:",
      "choices": [
        "$(3, 1, 1)$",
        "$(7, -1, 5)$",
        "$(1, 2, -1)$",
        "$(5, 0, 3)$",
        "$\\text{No intersection}$"
      ],
      "correct_answer": "A",
      "solution": "<p>The line intersects the plane at the point $(3, 1, 1)$.</p><p><strong>Step 1: Write Parametric Equations for the Line</strong> From the vector equation $\\mathbf{r}(t) = \\langle 1, 2, -1 \\rangle + t\\langle 2, -1, 2 \\rangle$, extract coordinate functions:$$x(t) = 1 + 2t, \\quad y(t) = 2 - t, \\quad z(t) = -1 + 2t$$</p><p><strong>Step 2: Substitute Parametric Equations into the Plane Equation</strong> Substitute $x(t), y(t), z(t)$ into $2x - y + 2z = 7$:$$2(1 + 2t) - (2 - t) + 2(-1 + 2t) = 7$$Expand and collect like terms:$$2 + 4t - 2 + t - 2 + 4t = 7$$$$(4t + t + 4t) + (2 - 2 - 2) = 7$$$$9t - 2 = 7 \\implies 9t = 9 \\implies t = 1$$</p><p><strong>Step 3: Calculate the Coordinates of the Intersection Point</strong> Substitute parameter value $t = 1$ back into the line equations:$$x(1) = 1 + 2(1) = 3$$$$y(1) = 2 - (1) = 1$$$$z(1) = -1 + 2(1) = 1$$Therefore, the intersection point is $(3, 1, 1)$.</p><p><strong>Step 4: Verify in the Plane Equation</strong> $$2(3) - (1) + 2(1) = 6 - 1 + 2 = 7 \\quad \\checkmark$$</p>"
    },
    {
      "id": "PT1_2",
      "term": "PT1",
      "number": 2,
      "section": "11.5",
      "topic": "Distances in Space",
      "question": "The distance from the point $P = (1, 2, 3)$ to the plane $2x - 2y + z = 9$ is:",
      "choices": [
        "$\\dfrac{2}{3}$",
        "$\\dfrac{10}{3}$",
        "$\\dfrac{4}{3}$",
        "$\\dfrac{8}{3}$",
        "$2$"
      ],
      "correct_answer": "D",
      "solution": "<p>The perpendicular distance from $P(1, 2, 3)$ to the plane is $\\dfrac{8}{3}$.</p><p><strong>Step 1: State the Point-to-Plane Distance Formula</strong> The perpendicular distance $D$ from a point $P(x_0, y_0, z_0)$ to a plane $Ax + By + Cz = d$ is given by:$$D = \\frac{|A x_0 + B y_0 + C z_0 - d|}{\\sqrt{A^2 + B^2 + C^2}}$$</p><p><strong>Step 2: Identify Plane Constants and Point Coordinates</strong> Given $P = (1, 2, 3)$, normal vector $\\mathbf{n} = \\langle A, B, C \\rangle = \\langle 2, -2, 1 \\rangle$, and scalar $d = 9$.</p><p><strong>Step 3: Evaluate Numerator and Denominator</strong> Numerator:$$|2(1) - 2(2) + 1(3) - 9| = |2 - 4 + 3 - 9| = |-8| = 8$$Denominator (magnitude of the normal vector):$$\\|\\mathbf{n}\\| = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$$</p><p><strong>Step 4: Compute the Distance</strong> $$D = \\frac{8}{3}$$</p>"
    },
    {
      "id": "PT1_3",
      "term": "PT1",
      "number": 3,
      "section": "11.6",
      "topic": "Quadric Surfaces Classification",
      "question": "Identify the quadric surface given by the equation:$$x^2 + y^2 - z^2 = 4$$",
      "choices": [
        "$\\text{Hyperboloid of two sheets}$",
        "$\\text{Hyperbolic paraboloid}$",
        "$\\text{Elliptic cone}$",
        "$\\text{Elliptic paraboloid}$",
        "$\\text{Hyperboloid of one sheet}$"
      ],
      "correct_answer": "E",
      "solution": "<p>The surface is a Hyperboloid of one sheet.</p><p><strong>Step 1: Put the Equation in Standard Canonical Form</strong> Divide both sides of $x^2 + y^2 - z^2 = 4$ by $4$:$$\\frac{x^2}{4} + \\frac{y^2}{4} - \\frac{z^2}{4} = 1$$</p><p><strong>Step 2: Compare with Standard Forms of Quadrics</strong> - Two positive squared terms and one negative squared term equaling $+1$:$$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} - \\frac{z^2}{c^2} = 1 \\implies \\textbf{Hyperboloid of One Sheet}$$ - Two negative squared terms and one positive squared term equaling $+1$:$$-\\frac{x^2}{a^2} - \\frac{y^2}{b^2} + \\frac{z^2}{c^2} = 1 \\implies \\textbf{Hyperboloid of Two Sheets}$$ - Right-hand side equaling $0$:$$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} - \\frac{z^2}{c^2} = 0 \\implies \\textbf{Elliptic Cone}$$</p><p><strong>Step 3: Verify Horizontal and Vertical Traces</strong> Horizontal traces ($z = k$): $x^2 + y^2 = 4 + k^2$ are real circles for every value of $k \\in \\mathbb{R}$. Vertical traces ($x = 0$ or $y = 0$) are hyperbolas ($y^2 - z^2 = 4$). Thus, the surface is connected and tubular: <strong>Hyperboloid of one sheet</strong>.</p>"
    },
    {
      "id": "PT1_4",
      "term": "PT1",
      "number": 4,
      "section": "11.6",
      "topic": "Quadric Surfaces & Intersections",
      "question": "The intersection of the hyperbolic paraboloid (saddle surface) $z = x^2 - y^2$ with the vertical plane $y = x + 1$ is:",
      "choices": [
        "$z = 1$",
        "$z = -2x - 1$",
        "$z = 2x^2 + 1$",
        "$z = 2x + 1$",
        "$z = -x^2 - 1$"
      ],
      "correct_answer": "B",
      "solution": "<p>The intersection curve is the line $z = -2x - 1$ in the plane $y = x + 1$.</p><p><strong>Step 1: Understand the Geometric Intersection</strong> Any point on the curve of intersection must satisfy the surface equation $z = x^2 - y^2$ and the plane equation $y = x + 1$ simultaneously.</p><p><strong>Step 2: Substitute $y = x + 1$ into the Surface Equation</strong> $$z = x^2 - (x + 1)^2$$</p><p><strong>Step 3: Expand the Binomial and Simplify</strong> $$z = x^2 - (x^2 + 2x + 1) = x^2 - x^2 - 2x - 1 = -2x - 1$$</p><p><strong>Step 4: Geometric Interpretation</strong> In $\\mathbb{R}^3$, the intersection is a straight line lying within the vertical plane $y = x + 1$, with height coordinate given by $z = -2x - 1$.</p>"
    },
    {
      "id": "PT1_5",
      "term": "PT1",
      "number": 5,
      "section": "13.1",
      "topic": "Domain of Multivariable Functions",
      "question": "For the function $f(x, y) = \\dfrac{\\sqrt{9 - x^2 - y^2}}{x - 1}$, which description gives its domain $\\operatorname{Dom}(f)$?",
      "choices": [
        "$x^2 + y^2 \\le 9, \\quad y \\ne 1$",
        "$x^2 + y^2 \\le 9$",
        "$x^2 + y^2 > 9, \\quad x \\ne 1$",
        "$x^2 + y^2 < 9$",
        "$x^2 + y^2 \\le 9, \\quad x \\ne 1$"
      ],
      "correct_answer": "E",
      "solution": "<p>$\\operatorname{Dom}(f) = \\{ (x, y) \\mid x^2 + y^2 \\le 9, \\ x \\ne 1 \\}$.</p><p><strong>Step 1: Radical Domain Condition</strong> The radicand of the square root in the numerator must be non-negative:$$9 - x^2 - y^2 \\ge 0 \\iff x^2 + y^2 \\le 9$$This specifies the closed disk of radius $3$ centered at $(0, 0)$.</p><p><strong>Step 2: Non-Zero Denominator Condition</strong> The denominator cannot be zero:$$x - 1 \\ne 0 \\iff x \\ne 1$$This excludes all points on the vertical line $x = 1$.</p><p><strong>Step 3: Combine Conditions</strong> $$\\operatorname{Dom}(f) = \\left\\{ (x, y) \\in \\mathbb{R}^2 \\mid x^2 + y^2 \\le 9 \\text{ and } x \\ne 1 \\right\\}$$</p>"
    },
    {
      "id": "PT1_6",
      "term": "PT1",
      "number": 6,
      "section": "13.1",
      "topic": "Level Curves of Multivariable Functions",
      "question": "For the function $f(x, y) = \\ln(4 - x^2 - y^2)$, the level curve $f(x, y) = \\ln 3$ is:",
      "choices": [
        "$\\text{A circle of radius } 2$",
        "$\\text{The empty set}$",
        "$\\text{A single point}$",
        "$\\text{A circle of radius } 1$",
        "$\\text{A circle of radius } \\sqrt{3}$"
      ],
      "correct_answer": "D",
      "solution": "<p>A circle centered at the origin of radius $1$.</p><p><strong>Step 1: Set Up Level Curve Equation</strong> Substitute $f(x, y) = \\ln 3$:$$\\ln(4 - x^2 - y^2) = \\ln 3$$</p><p><strong>Step 2: Exponentiate Both Sides</strong> $$e^{\\ln(4 - x^2 - y^2)} = e^{\\ln 3} \\iff 4 - x^2 - y^2 = 3$$</p><p><strong>Step 3: Identify the Geometric Curve</strong> Rearrange:$$x^2 + y^2 = 4 - 3 = 1$$This is a circle centered at the origin with radius $r = \\sqrt{1} = 1$.</p>"
    },
    {
      "id": "PT1_7",
      "term": "PT1",
      "number": 7,
      "section": "13.2",
      "topic": "Multivariable Limits - Squeeze Theorem",
      "question": "Evaluate the limit:$$\\lim_{(x, y) \\to (0, 0)} \\frac{x^2 y}{x^2 + y^2}$$",
      "choices": [
        "$\\text{Does not exist}$",
        "$1$",
        "$-1$",
        "$0$",
        "$\\dfrac{1}{2}$"
      ],
      "correct_answer": "D",
      "solution": "<p>$\\lim_{(x, y) \\to (0, 0)} \\dfrac{x^2 y}{x^2 + y^2} = 0$. </p><p><strong>Method 1: Polar Coordinates</strong> Let $x = r \\cos\\theta$ and $y = r \\sin\\theta$. As $(x, y) \\to (0, 0)$, $r \\to 0^+$:$$\\frac{x^2 y}{x^2 + y^2} = \\frac{(r^2 \\cos^2\\theta)(r \\sin\\theta)}{r^2} = r \\cos^2\\theta \\sin\\theta$$Since $|\\cos^2\\theta \\sin\\theta| \\le 1$, we have:$$|r \\cos^2\\theta \\sin\\theta| \\le r \\to 0 \\quad \\text{as } r \\to 0^+$$By the Squeeze Theorem, the limit is $0$, regardless of direction $\\theta$. </p><p><strong>Method 2: Squeeze Inequality</strong> Notice that $\\dfrac{x^2}{x^2 + y^2} \\le 1$ for all $(x, y) \\ne (0, 0)$. Therefore:$$0 \\le \\left| \\frac{x^2 y}{x^2 + y^2} \\right| = \\frac{x^2}{x^2 + y^2} |y| \\le 1 \\cdot |y| = |y|$$Since $\\lim_{(x, y) \\to (0, 0)} |y| = 0$, by the Squeeze Theorem:$$\\lim_{(x, y) \\to (0, 0)} \\frac{x^2 y}{x^2 + y^2} = 0$$</p>"
    },
    {
      "id": "PT1_8",
      "term": "PT1",
      "number": 8,
      "section": "13.2",
      "topic": "Multivariable Limits - Two-Path Test",
      "question": "Evaluate the limit:$$\\lim_{(x, y) \\to (0, 0)} \\frac{x^2 y}{x^4 + y^2}$$",
      "choices": [
        "$\\text{Does not exist}$",
        "$\\dfrac{1}{2}$",
        "$1$",
        "$-1$",
        "$0$"
      ],
      "correct_answer": "A",
      "solution": "<p>The limit Does Not Exist (DNE) by the Two-Path Test.</p><p><strong>Step 1: Test Along Straight Lines $y = mx$</strong> $$\\lim_{x \\to 0} \\frac{x^2(mx)}{x^4 + (mx)^2} = \\lim_{x \\to 0} \\frac{m x^3}{x^2(x^2 + m^2)} = \\lim_{x \\to 0} \\frac{m x}{x^2 + m^2} = 0 \\quad (\\text{for } m \\ne 0)$$Along the coordinate axes ($x = 0$ or $y = 0$), the expression is also identically $0$.</p><p><strong>Step 2: Examine Degree Balance in the Denominator</strong> In $x^4 + y^2$, the terms balance when $y \\sim x^2$. Let us test parabolic paths $y = k x^2$:$$\\lim_{x \\to 0} \\frac{x^2(k x^2)}{x^4 + (k x^2)^2} = \\lim_{x \\to 0} \\frac{k x^4}{x^4 + k^2 x^4} = \\lim_{x \\to 0} \\frac{k x^4}{x^4(1 + k^2)} = \\frac{k}{1 + k^2}$$</p><p><strong>Step 3: Evaluate Different Paths</strong> - Along $y = x^2$ ($k = 1$): $\\dfrac{1}{1 + 1^2} = \\dfrac{1}{2}$ - Along $y = -x^2$ ($k = -1$): $\\dfrac{-1}{1 + (-1)^2} = -\\dfrac{1}{2}$ - Along $y = 0$ ($k = 0$): $0$ Since different paths produce different limiting values, the limit <strong>Does Not Exist (DNE)</strong>.</p>"
    },
    {
      "id": "PT2_1",
      "term": "PT2",
      "number": 1,
      "section": "13.3",
      "topic": "Partial Derivatives & Clairaut's Theorem",
      "question": "If $f(x, y) = x^2 e^{xy}$, then the mixed second partial derivative $f_{xy}(1, 0)$ equals:",
      "choices": [
        "$0$",
        "$2$",
        "$4$",
        "$3$",
        "$1$"
      ],
      "correct_answer": "D",
      "solution": "<p>$f_{xy}(1, 0) = 3$.</p><p><strong>Step 1: Compute First Partial Derivative $f_y$</strong> Differentiating with respect to $y$ (treating $x$ as constant):$$f_y(x, y) = \\frac{\\partial}{\\partial y}[x^2 e^{xy}] = x^2 \\cdot (x e^{xy}) = x^3 e^{xy}$$</p><p><strong>Step 2: Differentiate with Respect to $x$ ($f_{yx} = f_{xy}$)</strong> Using the Product Rule:$$\\frac{\\partial}{\\partial x}[x^3 e^{xy}] = \\left( \\frac{\\partial}{\\partial x}[x^3] \\right) e^{xy} + x^3 \\left( \\frac{\\partial}{\\partial x}[e^{xy}] \\right) = 3x^2 e^{xy} + x^3 (y e^{xy}) = e^{xy}(3x^2 + x^3 y)$$</p><p><strong>Step 3: Evaluate at $(x, y) = (1, 0)$</strong> $$f_{xy}(1, 0) = e^{1 \\cdot 0} \\left( 3(1)^2 + (1)^3(0) \\right) = e^0 (3 + 0) = 1 \\cdot 3 = 3$$</p>"
    },
    {
      "id": "PT2_2",
      "term": "PT2",
      "number": 2,
      "section": "13.3",
      "topic": "Higher-Order Partial Derivatives",
      "question": "Let $f(x, y) = x^3 y^2 - 2x y^3$. Then the third-order partial derivative $f_{xxy}(1, 2)$ equals:",
      "choices": [
        "$24$",
        "$12$",
        "$-12$",
        "$6$",
        "$18$"
      ],
      "correct_answer": "A",
      "solution": "<p>$f_{xxy}(1, 2) = 24$.</p><p><strong>Step 1: First Partial Derivative $f_x$</strong> Treat $y$ as a constant:$$f_x(x, y) = \\frac{\\partial}{\\partial x}[x^3 y^2 - 2x y^3] = 3x^2 y^2 - 2y^3$$</p><p><strong>Step 2: Second Partial Derivative $f_{xx}$</strong> Differentiate $f_x$ with respect to $x$:$$f_{xx}(x, y) = \\frac{\\partial}{\\partial x}[3x^2 y^2 - 2y^3] = 6x y^2 - 0 = 6x y^2$$</p><p><strong>Step 3: Third Partial Derivative $f_{xxy}$</strong> Differentiate $f_{xx}$ with respect to $y$:$$f_{xxy}(x, y) = \\frac{\\partial}{\\partial y}[6x y^2] = 6x(2y) = 12xy$$</p><p><strong>Step 4: Evaluate at $(x, y) = (1, 2)$</strong> $$f_{xxy}(1, 2) = 12(1)(2) = 24$$</p>"
    },
    {
      "id": "PT2_3",
      "term": "PT2",
      "number": 3,
      "section": "13.4",
      "topic": "Linearization & Tangent Approximations",
      "question": "For the upper hemisphere $z = \\sqrt{25 - x^2 - y^2}$ at the base point $(3, 0)$, the local linear approximation predicts $z(3.1, 0.2) \\approx$:",
      "choices": [
        "$3.75$",
        "$4.25$",
        "$3.5$",
        "$3.925$",
        "$4.075$"
      ],
      "correct_answer": "D",
      "solution": "<p>$z(3.1, 0.2) \\approx 3.925$.</p><p><strong>Step 1: Calculate Function Value at the Base Point $(3, 0)$</strong> $$z(3, 0) = \\sqrt{25 - 3^2 - 0^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$$</p><p><strong>Step 2: Calculate First Partial Derivatives at $(3, 0)$</strong> $$z_x = \\frac{-2x}{2\\sqrt{25 - x^2 - y^2}} = \\frac{-x}{\\sqrt{25 - x^2 - y^2}} \\implies z_x(3, 0) = \\frac{-3}{4} = -0.75$$$$z_y = \\frac{-2y}{2\\sqrt{25 - x^2 - y^2}} = \\frac{-y}{\\sqrt{25 - x^2 - y^2}} \\implies z_y(3, 0) = \\frac{-0}{4} = 0$$</p><p><strong>Step 3: Construct the Linearization Formula</strong> $$L(x, y) = z(3, 0) + z_x(3, 0)(x - 3) + z_y(3, 0)(y - 0)$$$$L(x, y) = 4 - 0.75(x - 3) + 0(y - 0) = 4 - 0.75(x - 3)$$</p><p><strong>Step 4: Approximate at $(3.1, 0.2)$</strong> Here $\\Delta x = 3.1 - 3 = 0.1$:$$z(3.1, 0.2) \\approx L(3.1, 0.2) = 4 - 0.75(0.1) = 4 - 0.075 = 3.925$$</p>"
    },
    {
      "id": "PT2_4",
      "term": "PT2",
      "number": 4,
      "section": "13.4",
      "topic": "Differentials & Relative Error Estimation",
      "question": "A rectangular box has sides $2$, $3$, and $4\\text{ cm}$. If each side increases by $1\\%$, the total differential predicts its volume increases by approximately:",
      "choices": [
        "$4\\%$",
        "$1\\%$",
        "$6\\%$",
        "$3\\%$",
        "$2\\%$"
      ],
      "correct_answer": "D",
      "solution": "<p>The volume increases by approximately $3\\%$.</p><p><strong>Step 1: Formula for Volume and Total Differential</strong> Volume of the box is $V = xyz$. The total differential is:$$dV = \\frac{\\partial V}{\\partial x} dx + \\frac{\\partial V}{\\partial y} dy + \\frac{\\partial V}{\\partial z} dz = (yz) dx + (xz) dy + (xy) dz$$</p><p><strong>Step 2: Express Relative Percentage Change</strong> Divide through by $V = xyz$:$$\\frac{dV}{V} = \\frac{yz\\,dx + xz\\,dy + xy\\,dz}{xyz} = \\frac{dx}{x} + \\frac{dy}{y} + \\frac{dz}{z}$$</p><p><strong>Step 3: Substitute the Given Percentage Changes</strong> Given $\\frac{dx}{x} = 1\\%$, $\\frac{dy}{y} = 1\\%$, $\\frac{dz}{z} = 1\\%$:$$\\frac{dV}{V} = 1\\% + 1\\% + 1\\% = 3\\%$$<small style='color:var(--color-primary);'>Notice: The relative change is invariant with respect to the initial side lengths!</small></p>"
    },
    {
      "id": "PT2_5",
      "term": "PT2",
      "number": 5,
      "section": "13.5",
      "topic": "Multivariable Chain Rule",
      "question": "Let $z = x^2 y + e^{xy}$, with $x = s + t$ and $y = s - t$. Find $\\dfrac{\\partial z}{\\partial t}$ at the parameter point $(s, t) = (1, 0)$:",
      "choices": [
        "$1$",
        "$-e$",
        "$2 + e$",
        "$-1$",
        "$0$"
      ],
      "correct_answer": "A",
      "solution": "<p>$\\left. \\dfrac{\\partial z}{\\partial t} \\right|_{(1, 0)} = 1$.</p><p><strong>Step 1: Formulate the Chain Rule</strong> $$\\frac{\\partial z}{\\partial t} = \\frac{\\partial z}{\\partial x} \\frac{\\partial x}{\\partial t} + \\frac{\\partial z}{\\partial y} \\frac{\\partial y}{\\partial t}$$</p><p><strong>Step 2: Compute Intermediate Coordinates at $(s, t) = (1, 0)$</strong> $$x = 1 + 0 = 1, \\quad y = 1 - 0 = 1$$</p><p><strong>Step 3: Evaluate All Partial Derivatives</strong> $$\\frac{\\partial x}{\\partial t} = 1, \\quad \\frac{\\partial y}{\\partial t} = -1$$$$\\frac{\\partial z}{\\partial x} = 2xy + y e^{xy} \\implies \\left. \\frac{\\partial z}{\\partial x} \\right|_{(1, 1)} = 2(1)(1) + (1)e^1 = 2 + e$$$$\\frac{\\partial z}{\\partial y} = x^2 + x e^{xy} \\implies \\left. \\frac{\\partial z}{\\partial y} \\right|_{(1, 1)} = 1^2 + (1)e^1 = 1 + e$$</p><p><strong>Step 4: Combine Using the Chain Rule Formula</strong> $$\\frac{\\partial z}{\\partial t} = (2 + e)(1) + (1 + e)(-1) = 2 + e - 1 - e = 1$$</p>"
    },
    {
      "id": "PT2_6",
      "term": "PT2",
      "number": 6,
      "section": "13.5",
      "topic": "Implicit Differentiation",
      "question": "If $x^2 + y^2 + z^2 + xyz = 8$ defines $z = z(x, y)$ implicitly as a differentiable function near $(1, 1, 2)$, then $z_x(1, 1)$ equals:",
      "choices": [
        "$-1$",
        "$\\dfrac{4}{5}$",
        "$-\\dfrac{2}{3}$",
        "$-\\dfrac{4}{5}$",
        "$-\\dfrac{3}{5}$"
      ],
      "correct_answer": "D",
      "solution": "<p>$z_x(1, 1) = -\\dfrac{4}{5}$.</p><p><strong>Step 1: Define Implicit Function $F(x, y, z)$</strong> Let $F(x, y, z) = x^2 + y^2 + z^2 + xyz - 8 = 0$. By the Implicit Function Theorem:$$z_x = -\\frac{F_x}{F_z}$$</p><p><strong>Step 2: Differentiate $F$ Partially with Respect to $x$ and $z$</strong> $$F_x = \\frac{\\partial}{\\partial x}[x^2 + y^2 + z^2 + xyz - 8] = 2x + yz$$$$F_z = \\frac{\\partial}{\\partial z}[x^2 + y^2 + z^2 + xyz - 8] = 2z + xy$$</p><p><strong>Step 3: Evaluate at the Given Point $(x, y, z) = (1, 1, 2)$</strong> $$F_x(1, 1, 2) = 2(1) + (1)(2) = 2 + 2 = 4$$$$F_z(1, 1, 2) = 2(2) + (1)(1) = 4 + 1 = 5$$</p><p><strong>Step 4: Compute $z_x(1, 1)$</strong> $$z_x(1, 1) = -\\frac{F_x(1, 1, 2)}{F_z(1, 1, 2)} = -\\frac{4}{5}$$</p>"
    },
    {
      "id": "PT2_7",
      "term": "PT2",
      "number": 7,
      "section": "13.6",
      "topic": "Directional Derivatives & Gradients",
      "question": "For the surface $f(x, y) = x^2 + 2xy + 3y^2$, find the maximum directional derivative at the point $(1, -1)$:",
      "choices": [
        "$2\\sqrt{10}$",
        "$4$",
        "$10$",
        "$2\\sqrt{5}$",
        "$\\sqrt{20}$"
      ],
      "correct_answer": "B",
      "solution": "<p>The maximum directional derivative at $(1, -1)$ is $4$.</p><p><strong>Step 1: Theorem for Maximum Directional Derivative</strong> For any differentiable function $f$, the maximum value of the directional derivative $D_{\\mathbf{u}} f$ at a point $P$ occurs when $\\mathbf{u}$ has the direction of $\\nabla f(P)$, and its maximum value is:$$D_{\\mathbf{u}, \\max} f(P) = \\|\\nabla f(P)\\|$$</p><p><strong>Step 2: Calculate the Gradient Vector $\\nabla f(x, y)$</strong> $$f_x(x, y) = 2x + 2y, \\quad f_y(x, y) = 2x + 6y$$$$\\nabla f(x, y) = \\langle 2x + 2y, 2x + 6y \\rangle$$</p><p><strong>Step 3: Evaluate at Point $(1, -1)$</strong> $$f_x(1, -1) = 2(1) + 2(-1) = 2 - 2 = 0$$$$f_y(1, -1) = 2(1) + 6(-1) = 2 - 6 = -4$$$$\\nabla f(1, -1) = \\langle 0, -4 \\rangle$$</p><p><strong>Step 4: Compute the Length of the Gradient Vector</strong> $$\\|\\nabla f(1, -1)\\| = \\sqrt{0^2 + (-4)^2} = \\sqrt{16} = 4$$</p>"
    },
    {
      "id": "PT2_8",
      "term": "PT2",
      "number": 8,
      "section": "13.6",
      "topic": "Gradient Vectors & Normal Lines",
      "question": "At the point $P = (1, 2)$, a unit normal vector to the level curve $x^2 + xy + y^2 = 7$ pointing toward increasing values of $f(x, y) = x^2 + xy + y^2$ is:",
      "choices": [
        "$\\dfrac{\\langle 1, 2 \\rangle}{\\sqrt{5}}$",
        "$\\dfrac{\\langle -4, -5 \\rangle}{\\sqrt{41}}$",
        "$\\dfrac{\\langle 5, 4 \\rangle}{\\sqrt{41}}$",
        "$\\dfrac{\\langle 3, 6 \\rangle}{\\sqrt{45}}$",
        "$\\dfrac{\\langle 4, 5 \\rangle}{\\sqrt{41}}$"
      ],
      "correct_answer": "E",
      "solution": "<p>$\\mathbf{u} = \\dfrac{\\langle 4, 5 \\rangle}{\\sqrt{41}}$.</p><p><strong>Step 1: Normal Property of the Gradient</strong> For any smooth level curve $f(x, y) = c$, the gradient vector $\\nabla f(P)$ is perpendicular to the level curve at $P$ and points toward increasing values of $f$.</p><p><strong>Step 2: Differentiate to Obtain the Gradient</strong> With $f(x, y) = x^2 + xy + y^2$:$$f_x = 2x + y, \\quad f_y = x + 2y$$$$\\nabla f(x, y) = \\langle 2x + y, x + 2y \\rangle$$</p><p><strong>Step 3: Evaluate at Point $P = (1, 2)$</strong> $$f_x(1, 2) = 2(1) + 2 = 4$$$$f_y(1, 2) = 1 + 2(2) = 5$$$$\\nabla f(1, 2) = \\langle 4, 5 \\rangle$$</p><p><strong>Step 4: Normalize to a Unit Vector</strong> $$\\|\\nabla f(1, 2)\\| = \\sqrt{4^2 + 5^2} = \\sqrt{16 + 25} = \\sqrt{41}$$$$\\mathbf{u} = \\frac{\\nabla f(1, 2)}{\\|\\nabla f(1, 2)\\|} = \\frac{\\langle 4, 5 \\rangle}{\\sqrt{41}} = \\left\\langle \\frac{4}{\\sqrt{41}}, \\frac{5}{\\sqrt{41}} \\right\\rangle$$</p>"
    },
    {
      "id": "253_1",
      "term": "253",
      "number": 1,
      "section": "13.1",
      "topic": "Level Curves",
      "question": "If $y = Ax + B$ is the level curve of the function $f(x, y) = \\ln(x - y)$ that passes through $(e, 0)$, then $AB =$",
      "choices": [
        "e",
        "-e",
        "0",
        "-3e",
        "3e"
      ],
      "correct_answer": "B",
      "solution": "A level curve satisfies $f(x, y) = C \\implies \\ln(x - y) = C$. Passing through $(e, 0)$ gives $\\ln(e - 0) = \\ln(e) = 1$, so $C = 1$. Thus $\\ln(x - y) = 1 \\iff x - y = e \\iff y = x - e$. Comparing with $y = Ax + B$, we have $A = 1$ and $B = -e$. Therefore, $AB = 1 \\cdot (-e) = -e$."
    },
    {
      "id": "253_2",
      "term": "253",
      "number": 2,
      "section": "11.6",
      "topic": "Quadric Surfaces & Traces",
      "question": "Which one of the following statements is FALSE about the graph of the equation $4x^2 - 4y + z^2 = 0$?",
      "choices": [
        "Its trace in the $xz$-plane is the origin",
        "Its trace in the plane $y = -1$ is an ellipse",
        "Its trace in the plane $y = 1$ is an ellipse",
        "Its trace in the $xy$-plane is a parabola",
        "It is an elliptic paraboloid"
      ],
      "correct_answer": "B",
      "solution": "Rewriting the equation gives $y = x^2 + \\frac{z^2}{4}$, which is an elliptic paraboloid opening along the positive $y$-axis. In the plane $y = -1$, we get $4x^2 - 4(-1) + z^2 = 0 \\iff 4x^2 + z^2 = -4$. Since the sum of squares cannot be negative for real coordinates, this trace is empty (has no real points), so it is NOT an ellipse. Thus the statement is FALSE."
    },
    {
      "id": "253_3",
      "term": "253",
      "number": 3,
      "section": "11.5",
      "topic": "Lines in 3D",
      "question": "If $(a, b, c)$ is the point of intersection between the lines $L_1: x = 2 + 4t, y = 3, z = 1 - t$ and $L_2: x = 2 + 2s, y = 3 + 2s, z = 1 + s$, then $abc =$",
      "choices": [
        "8",
        "-10",
        "-4",
        "0",
        "6"
      ],
      "correct_answer": "E",
      "solution": "Equating the $y$-coordinates gives $3 = 3 + 2s \\implies s = 0$. Substituting $s = 0$ into $L_2$ yields the point $(2, 3, 1)$. Verifying with $L_1$: $2 + 4t = 2 \\implies t = 0$, and $z = 1 - 0 = 1$. The point of intersection is $(a, b, c) = (2, 3, 1)$. Hence, $abc = 2 \\cdot 3 \\cdot 1 = 6$."
    },
    {
      "id": "253_4",
      "term": "253",
      "number": 4,
      "section": "11.5",
      "topic": "Planes & Distances",
      "question": "The distance between the parallel planes $x - 3y + 2z = 1$ and $2x - 6y + 4z = 3$ is equal to",
      "choices": [
        "$\\frac{\\sqrt{14}}{4}$",
        "$\\frac{\\sqrt{14}}{28}$",
        "$\\frac{\\sqrt{14}}{14}$",
        "$\\frac{\\sqrt{14}}{2}$",
        "$\\frac{\\sqrt{14}}{7}$"
      ],
      "correct_answer": "B",
      "solution": "Choose a convenient point on the first plane $x - 3y + 2z = 1$, such as $P(1, 0, 0)$. The distance from $P(1, 0, 0)$ to the second plane $2x - 6y + 4z - 3 = 0$ is $d = \\frac{|2(1) - 6(0) + 4(0) - 3|}{\\sqrt{2^2 + (-6)^2 + 4^2}} = \\frac{|-1|}{\\sqrt{4 + 36 + 16}} = \\frac{1}{\\sqrt{56}} = \\frac{1}{2\\sqrt{14}} = \\frac{\\sqrt{14}}{28}$."
    },
    {
      "id": "253_5",
      "term": "253",
      "number": 5,
      "section": "13.2",
      "topic": "Continuity of Multivariable Functions",
      "question": "The set of all points where $f(x, y, z) = \\frac{\\sin z}{e^x - e^y}$ is continuous is given by",
      "choices": [
        "$\\{(x, y, z) : x \\neq y, z \\in [-1, 1]\\}$",
        "$\\{(x, y, z) : x, y, z \\in (-\\infty, \\infty)\\}$",
        "$\\{(x, y, z) : x \\neq y, z \\in (-\\infty, \\infty)\\}$",
        "$\\{(x, y, z) : x = y\\}$",
        "$\\{(x, y, z) : x, y \\in (-\\infty, \\infty), z \\in [-1, 1]\\}$"
      ],
      "correct_answer": "C",
      "solution": "The numerator $\\sin z$ is continuous for all $z \\in \\mathbb{R}$. The denominator $e^x - e^y$ is continuous for all $x, y \\in \\mathbb{R}$. The quotient is continuous everywhere the denominator is non-zero: $e^x - e^y \\neq 0 \\iff e^x \\neq e^y \\iff x \\neq y$. The variable $z$ is completely unrestricted, so $z \\in (-\\infty, \\infty)$."
    },
    {
      "id": "253_6",
      "term": "253",
      "number": 6,
      "section": "13.5",
      "topic": "Implicit Differentiation",
      "question": "If the equation $z^3 - 2xy + 2yz + y^3 - 2 = 0$ defines $z$ implicitly as a differentiable function of $x$ and $y$, then the value of $\\frac{\\partial z}{\\partial y}$ when $(x, y, z) = (1, 1, 1)$ is equal to",
      "choices": [
        "$\\frac{4}{5}$",
        "0",
        "$-\\frac{2}{5}$",
        "$\\frac{2}{5}$",
        "$-\\frac{3}{5}$"
      ],
      "correct_answer": "E",
      "solution": "Let $F(x, y, z) = z^3 - 2xy + 2yz + y^3 - 2 = 0$. By the implicit function theorem, $\\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}$. Here $F_y = -2x + 2z + 3y^2$ and $F_z = 3z^2 + 2y$. Evaluating at $(1, 1, 1)$: $F_y(1, 1, 1) = -2(1) + 2(1) + 3(1)^2 = 3$, and $F_z(1, 1, 1) = 3(1)^2 + 2(1) = 5$. Thus $\\frac{\\partial z}{\\partial y} = -\\frac{3}{5}$."
    },
    {
      "id": "253_7",
      "term": "253",
      "number": 7,
      "section": "13.3",
      "topic": "Higher-Order Partial Derivatives",
      "question": "If $f(x, y, z) = y^2 e^{x z^2}$, then $\\frac{\\partial^3 f}{\\partial z \\partial y \\partial x} =$",
      "choices": [
        "$2yz(xz^2 + 1) e^{xz^2}$",
        "$xyz(z^2 + 1) e^{xz^2}$",
        "$4xy(z^3 + 1) e^{xz^2}$",
        "$4yz(xz^2 + 1) e^{xz^2}$",
        "$2xz(z^4 + 1) e^{xz^2}$"
      ],
      "correct_answer": "D",
      "solution": "Differentiating step-by-step: First, $f_x = y^2 z^2 e^{xz^2}$. Second, $f_{xy} = 2y z^2 e^{xz^2}$. Third, differentiate with respect to $z$ using the product rule: $f_{xyz} = 2y \\frac{\\partial}{\\partial z}[z^2 e^{xz^2}] = 2y [2z e^{xz^2} + z^2 e^{xz^2} \\cdot 2xz] = 4yz (1 + xz^2) e^{xz^2}$."
    },
    {
      "id": "253_8",
      "term": "253",
      "number": 8,
      "section": "11.5",
      "topic": "Lines and Planes Intersection",
      "question": "If $(a, b, c)$ is the point of intersection of the plane $x + 2y - z = -9$ and the line through $(2, -1, 3)$ that is perpendicular to this plane, then $abc =$",
      "choices": [
        "6",
        "-12",
        "-9",
        "-6",
        "0"
      ],
      "correct_answer": "B",
      "solution": "The normal vector of the plane is $\\vec{n} = \\langle 1, 2, -1 \\rangle$, which serves as the direction vector of the perpendicular line. The line equation is $\\vec{r}(t) = \\langle 2 + t, -1 + 2t, 3 - t \\rangle$. Substituting into the plane gives $(2 + t) + 2(-1 + 2t) - (3 - t) = -9 \\implies 6t - 3 = -9 \\implies 6t = -6 \\implies t = -1$. The point of intersection is $(2 - 1, -1 - 2, 3 - (-1)) = (1, -3, 4)$. Thus $a = 1, b = -3, c = 4$, and $abc = 1 \\cdot (-3) \\cdot 4 = -12$."
    },
    {
      "id": "253_9",
      "term": "253",
      "number": 9,
      "section": "13.4",
      "topic": "Differentials & Approximations",
      "question": "Let $z = xy + \\frac{y}{x}$. Using differentials, the change in $z$ when $(x, y)$ moves from the point $(2, 1)$ to the point $(2.1, 1.05)$ is approximately equal to",
      "choices": [
        "$\\frac{3}{5}$",
        "$\\frac{2}{5}$",
        "$\\frac{3}{40}$",
        "$\\frac{1}{5}$",
        "$\\frac{1}{40}$"
      ],
      "correct_answer": "D",
      "solution": "Here $x = 2, y = 1$, $dx = 2.1 - 2 = 0.1 = \\frac{1}{10}$, and $dy = 1.05 - 1 = 0.05 = \\frac{1}{20}$. The partial derivatives are $f_x = y - \\frac{y}{x^2}$ and $f_y = x + \\frac{1}{x}$. At $(2, 1)$, $f_x(2, 1) = 1 - \\frac{1}{4} = \\frac{3}{4}$ and $f_y(2, 1) = 2 + \\frac{1}{2} = \\frac{5}{2}$. The differential is $dz = f_x dx + f_y dy = \\frac{3}{4}\\left(\\frac{1}{10}\\right) + \\frac{5}{2}\\left(\\frac{1}{20}\\right) = \\frac{3}{40} + \\frac{5}{40} = \\frac{8}{40} = \\frac{1}{5}$."
    },
    {
      "id": "253_10",
      "term": "253",
      "number": 10,
      "section": "13.5",
      "topic": "Chain Rule for Several Variables",
      "question": "Let $z = \\tan^{-1}\\left(\\frac{x}{y}\\right)$, $x = te^s$, $y = s\\ln t$. The value of $\\frac{\\partial z}{\\partial t}$ when $(s, t) = (1, e)$ is equal to",
      "choices": [
        "$\\frac{e - 1}{e^4 + 1}$",
        "0",
        "$\\frac{e + 1}{e^4 + 1}$",
        "$\\frac{2e}{e^4 + 1}$",
        "$\\frac{-e}{e^4 + 1}$"
      ],
      "correct_answer": "B",
      "solution": "At $(s, t) = (1, e)$, we have $x = e \\cdot e^1 = e^2$ and $y = 1 \\cdot \\ln(e) = 1$. By the multivariable chain rule, $\\frac{\\partial z}{\\partial t} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial t} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial t}$. Note $\\frac{\\partial z}{\\partial x} = \\frac{1/y}{1 + (x/y)^2} = \\frac{1}{1 + e^4}$, $\\frac{\\partial x}{\\partial t} = e^s = e$. Meanwhile $\\frac{\\partial z}{\\partial y} = \\frac{-x/y^2}{1 + (x/y)^2} = -\\frac{e^2}{1 + e^4}$, $\\frac{\\partial y}{\\partial t} = \\frac{s}{t} = \\frac{1}{e}$. Therefore, $\\frac{\\partial z}{\\partial t} = \\frac{e}{1+e^4} - \\frac{e^2}{1+e^4}\\frac{1}{e} = \\frac{e}{1+e^4} - \\frac{e}{1+e^4} = 0$."
    },
    {
      "id": "253_11",
      "term": "253",
      "number": 11,
      "section": "13.1",
      "topic": "Range of Multivariable Functions",
      "question": "The range of the function $f(x, y) = 2e^{xy}$ is",
      "choices": [
        "$(-\\infty, \\infty)$",
        "$[1, \\infty)$",
        "$[2, \\infty)$",
        "$(0, \\infty)$",
        "$(3, \\infty)$"
      ],
      "correct_answer": "D",
      "solution": "The domain of $f(x, y)$ is all of $\\mathbb{R}^2$. The product $u = xy$ can attain any real number in $(-\\infty, \\infty)$ (for example, setting $y = 1$ gives $u = x \\in (-\\infty, \\infty)$). Since the exponential function $e^u$ maps $(-\\infty, \\infty)$ onto $(0, \\infty)$, the function $2e^{xy}$ maps $(-\\infty, \\infty)$ onto $(0, \\infty)$."
    },
    {
      "id": "253_12",
      "term": "253",
      "number": 12,
      "section": "11.5",
      "topic": "Plane Containing Two Lines",
      "question": "If $x + by + cz = d$ is an equation of the plane that contains the lines $\\frac{x-1}{-2} = y - 4 = z$ and $\\frac{x-2}{-3} = \\frac{y-1}{4} = \\frac{z-2}{-1}$, then $b + c + d =$",
      "choices": [
        "7",
        "-3",
        "5",
        "0",
        "-4"
      ],
      "correct_answer": "A",
      "solution": "The direction vectors are $\\vec{v}_1 = \\langle -2, 1, 1 \\rangle$ and $\\vec{v}_2 = \\langle -3, 4, -1 \\rangle$. The normal vector is $\\vec{n} = \\vec{v}_1 \\times \\vec{v}_2 = \\langle 1(-1) - 1(4), -( (-2)(-1) - 1(-3) ), -2(4) - 1(-3) \\rangle = \\langle -5, -5, -5 \\rangle = -5\\langle 1, 1, 1 \\rangle$. Taking $\\vec{n} = \\langle 1, 1, 1 \\rangle$ and point $(1, 4, 0)$ from the first line: $1(x - 1) + 1(y - 4) + 1(z - 0) = 0 \\iff x + y + z = 5$. Matching with $x + by + cz = d$, we get $b = 1, c = 1, d = 5$. Thus $b + c + d = 1 + 1 + 5 = 7$."
    },
    {
      "id": "253_13",
      "term": "253",
      "number": 13,
      "section": "13.3",
      "topic": "Partial Derivatives Identity",
      "question": "If $f(x, y) = \\ln\\left(\\frac{x + y}{x - y}\\right)$, then $x f_y(x, y) + y f_x(x, y) =$",
      "choices": [
        "1",
        "0",
        "-2",
        "2",
        "$-\\frac{1}{2}$"
      ],
      "correct_answer": "D",
      "solution": "Write $f(x, y) = \\ln(x + y) - \\ln(x - y)$. Then $f_x = \\frac{1}{x+y} - \\frac{1}{x-y} = \\frac{-2y}{x^2 - y^2}$, and $f_y = \\frac{1}{x+y} - \\frac{-1}{x-y} = \\frac{2x}{x^2 - y^2}$. Then $x f_y + y f_x = x\\left(\\frac{2x}{x^2 - y^2}\\right) + y\\left(\\frac{-2y}{x^2 - y^2}\\right) = \\frac{2(x^2 - y^2)}{x^2 - y^2} = 2$."
    },
    {
      "id": "253_14",
      "term": "253",
      "number": 14,
      "section": "13.2",
      "topic": "Multivariable Limits",
      "question": "$\\lim_{(x, y) \\to (0, 0)} \\left[ \\frac{1}{\\ln(1 + x^2 + y^2)} - \\frac{1}{x^2 + y^2} \\right] =$",
      "choices": [
        "$\\text{The limit does not exist}$",
        "0",
        "1",
        "$\\frac{1}{2}$",
        "2"
      ],
      "correct_answer": "D",
      "solution": "Let $w = x^2 + y^2$. As $(x, y) \\to (0, 0)$, $w \\to 0^+$. The limit becomes $\\lim_{w \\to 0^+} \\left[\\frac{1}{\\ln(1+w)} - \\frac{1}{w}\\right] = \\lim_{w \\to 0^+} \\frac{w - \\ln(1+w)}{w \\ln(1+w)}$. Applying L'Hôpital's Rule twice: first derivative gives $\\frac{1 - \\frac{1}{1+w}}{\\ln(1+w) + \\frac{w}{1+w}} = \\frac{w}{(1+w)\\ln(1+w) + w}$. Applying L'Hôpital again: numerator derivative is $1$, denominator derivative is $\\ln(1+w) + 1 + 1 = \\ln(1+w) + 2$. As $w \\to 0$, this equals $\\frac{1}{0 + 2} = \\frac{1}{2}$."
    },
    {
      "id": "253_15",
      "term": "253",
      "number": 15,
      "section": "11.6",
      "topic": "Quadric Surfaces Classification",
      "question": "The graph of the equation $x^2 + 2y^2 - z^2 + 2x + 6z = k^2 + k + 8$ is",
      "choices": [
        "a hyperboloid of one sheet if $-1 < k < 0$",
        "a hyperboloid of one sheet for $k > -1$",
        "an elliptic paraboloid if $k = 0$ and $k = -1$",
        "a hyperboloid of two sheets if $-1 < k < 0$",
        "an elliptic cone if $k > 0$"
      ],
      "correct_answer": "D",
      "solution": "Completing squares: $(x^2 + 2x + 1) + 2y^2 - (z^2 - 6z + 9) = k^2 + k + 8 + 1 - 9 \\iff (x + 1)^2 + 2y^2 - (z - 3)^2 = k(k + 1)$. When $-1 < k < 0$, the product $k(k+1)$ is negative. Dividing by $k(k+1)$ flips signs to $-(x+1)^2 - 2y^2 + (z-3)^2 = \\text{positive}$, which has two negative signs and one positive sign, representing a hyperboloid of two sheets."
    },
    {
      "id": "252_1",
      "term": "252",
      "number": 1,
      "section": "11.5",
      "topic": "11.5 Planes in Space & Intersections",
      "question": "If the parametric equations of the line passing through the point $(2, 3, 4)$ and perpendicular to the plane given by $3x + 2y - z = 6$ are $x = 2 + at, y = 3 + bt, z = 4 - t$, then $a + b =$",
      "choices": [
        "$3$",
        "$5$",
        "$-3$",
        "$-5$",
        "$1$"
      ],
      "correct_answer": "B",
      "solution": "<p><strong>1. Normal Vector Construction:</strong> A plane with equation $Ax + By + Cz = D$ has normal vector $\\vec{n} = \\langle A, B, C \\rangle$. Perpendicular planes have orthogonal normal vectors ($\\vec{n}_1 \\cdot \\vec{n}_2 = 0$), while parallel planes share scalar multiples of $\\vec{n}$.</p><p><strong>2. Point-Normal Equation:</strong> Expanding $\\vec{n} \\cdot \\langle x - x_0, y - y_0, z - z_0 \\rangle = 0$ yields the scalar coefficients.</p><p><strong>3. Conclusion:</strong> Solving for unknown coefficients $(a, b, c)$ confirms: $$5$$</p>"
    },
    {
      "id": "252_2",
      "term": "252",
      "number": 2,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "The graph of the equation $x^2 - 2y^2 + z^2 - 4x + 4y - 6z = k$, represents",
      "choices": [
        "a hyperboloid with one sheet if $k = -20$.",
        "an elliptic cone if $k = -11$.",
        "a hyperboloid with two sheets if $k = 0$.",
        "an elliptic cone if $k = 20$.",
        "an ellipsoid if $k = 1$."
      ],
      "correct_answer": "B",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$an elliptic cone if k = -11.$$</p>"
    },
    {
      "id": "252_3",
      "term": "252",
      "number": 3,
      "section": "13.5",
      "topic": "13.5 Multivariable Chain Rule",
      "question": "If $z$ is defined implicitly as a differentiable function of $x$ and $y$ by the equation $3x^2 z - x^2 y^2 + 2z^3 + 3yz - 5 = 0$, then $\\frac{\\partial z}{\\partial x}$ is equal to",
      "choices": [
        "$\\frac{2x^2 y - 3z}{3(x^2 + 2z^2 + y)}$",
        "$\\frac{2x(y^2 - 3z)}{3(x^2 + 2z^2 + y)}$",
        "$\\frac{2xy^2}{3(x^2 + 2z^2 + y)}$",
        "$\\frac{2(xy^2 - 3xz - 3z^2)}{3(x^2 + y)}$",
        "$-\\frac{2x(y^2 - 3z)}{3(x^2 + 2z^2 + y)}$"
      ],
      "correct_answer": "B",
      "solution": "<p><strong>1. Chain Rule / Implicit Differentiation:</strong> Using the multivariable chain rule or the implicit derivative formula: $$\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}, \\quad \\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}$$</p><p><strong>2. Gradient Substitution:</strong> Computing partial derivatives with respect to the active variable and substituting the point coordinates.</p><p><strong>3. Conclusion:</strong> Simplifying the resulting fraction gives: $$2x(y2 -3z) 3(x2 + 2z2 + y)$$</p>"
    },
    {
      "id": "252_4",
      "term": "252",
      "number": 4,
      "section": "13.1",
      "topic": "13.1 Multivariable Functions & Level Curves",
      "question": "The range of the function $f(x, y) = \\ln(25 - x^2 - y^2)$ is",
      "choices": [
        "$(-\\infty, 5\\ln 2]$",
        "$(-\\infty, \\infty)$",
        "$(0, 5\\ln 5]$",
        "$[2\\ln 5, \\infty)$",
        "$(-\\infty, 2\\ln 5]$"
      ],
      "correct_answer": "E",
      "solution": "<p><strong>1. Domain & Range Analysis:</strong> For radical expressions $\\sqrt{u}$, the domain requires $u \\ge 0$. For logarithmic expressions $\\ln(u)$, the domain requires $u > 0$.</p><p><strong>2. Level Curves & Surfaces:</strong> Setting $f(x, y) = k$ (or $f(x, y, z) = k$) creates a family of contour curves or level surfaces in space.</p><p><strong>3. Value:</strong> Evaluating constraints yields the domain/range: $$(-∞, 2 ln 5]$$</p>"
    },
    {
      "id": "252_5",
      "term": "252",
      "number": 5,
      "section": "11.5",
      "topic": "11.5 Lines in Space & Skew Lines",
      "question": "If the symmetric equations of the normal line to the surface $z = y e^{2xy}$ at the point $(0, 2, 2)$ are given by $\\frac{x}{8} = \\frac{y - 2}{b} = \\frac{z - 2}{c}$, then $b + c =$",
      "choices": [
        "$-2$",
        "$-1$",
        "$2$",
        "$1$",
        "$0$"
      ],
      "correct_answer": "E",
      "solution": "<p><strong>1. Direction Vector & Point Formulation:</strong> For a 3D line passing through a given point with direction vector $\\vec{v} = \\langle a, b, c \\rangle$, the parametric equations are given by $x = x_0 + at$, $y = y_0 + bt$, $z = z_0 + ct$.</p><p><strong>2. Parameter Evaluation:</strong> Substituting coordinates or equating intersecting/skew line parameters allows solving for $t$ uniquely.</p><p><strong>3. Solution Conclusion:</strong> Evaluating the required sum, coordinate, or parameter matches: $$0$$</p>"
    },
    {
      "id": "252_6",
      "term": "252",
      "number": 6,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "Consider the function $f(x, y) = (x^2 + y^2)^{2/3}$, then",
      "choices": [
        "$f_x(0, 0)$ and $f_y(0, 0)$ do not exist.",
        "$f_x(2, 2) = \\frac{3}{4}$.",
        "$f_y(1, 1) = \\frac{4}{3}$.",
        "$f_x(1, 1) \\ne f_x(1, -1)$.",
        "$f_x(0, 0) = 0$."
      ],
      "correct_answer": "E",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$fx(0, 0) = 0.$$</p>"
    },
    {
      "id": "252_7",
      "term": "252",
      "number": 7,
      "section": "11.5",
      "topic": "13.4 Differentials & Linear Approx",
      "question": "The total resistance $R$ (in ohms) of two resistors connected in parallel is given by $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$. By using the differentials $dR$, the change in $R$ as $R_1$ is increased from $10\\,\\Omega$ to $10.5\\,\\Omega$ and $R_2$ is decreased from $15\\,\\Omega$ to $13\\,\\Omega$, is approximately equal to",
      "choices": [
        "$-1.40$",
        "$-0.14$",
        "$-0.39$",
        "$0.39$",
        "$0.14$"
      ],
      "correct_answer": "B",
      "solution": "<p><strong>1. Total Differential Formula:</strong> The linear approximation is given by: $$dz = f_x(x_0, y_0)\\,dx + f_y(x_0, y_0)\\,dy$$</p><p><strong>2. Partial Derivatives Evaluation:</strong> Evaluating $f_x$ and $f_y$ at the base point $(x_0, y_0)$ with deviations $dx = x - x_0$ and $dy = y - y_0$.</p><p><strong>3. Numerical Calculation:</strong> Summing the differentials yields the estimated value: $$-0.14$$</p>"
    },
    {
      "id": "252_8",
      "term": "252",
      "number": 8,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "$\\lim_{(x,y)\\to(0,0)} \\frac{x - y}{\\sqrt{x} - \\sqrt{y}} =$",
      "choices": [
        "$2$",
        "does not exist",
        "$0$",
        "$\\sqrt{2}$",
        "$1$"
      ],
      "correct_answer": "B",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$does not exist$$</p>"
    },
    {
      "id": "252_9",
      "term": "252",
      "number": 9,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "Let $f(x, y, z) = y e^x + x\\ln z$, then $f_{xzz}(1, 1, 1) + f_{zxz}(1, 1, 1) + f_{zzx}(1, 1, 1) =$",
      "choices": [
        "$-8$",
        "$-1$",
        "$-3$",
        "$-27$",
        "$1$"
      ],
      "correct_answer": "C",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$-3$$</p>"
    },
    {
      "id": "252_10",
      "term": "252",
      "number": 10,
      "section": "13.6",
      "topic": "13.6 Directional Derivatives & Gradients",
      "question": "The maximum value of the directional derivative of $f(x, y) = y^2 - x\\sqrt{y}$ at the point $(0, 3)$ is equal to",
      "choices": [
        "$33$",
        "$\\sqrt{45}$",
        "$39$",
        "$\\sqrt{33}$",
        "$\\sqrt{39}$"
      ],
      "correct_answer": "E",
      "solution": "<p><strong>1. Gradient Vector $\\nabla f$:</strong> Computing the partial derivatives gives $\\nabla f = \\langle f_x, f_y, f_z \\rangle$.</p><p><strong>2. Unit Direction $\\vec{u}$:</strong> Normalizing the direction vector $\\vec{v}$ yields $\\vec{u} = \\frac{\\vec{v}}{\\|\\vec{v}\\|}$. The directional derivative is $D_{\\vec{u}} f = \\nabla f \\cdot \\vec{u}$.</p><p><strong>3. Maximum Rate of Change:</strong> The maximum rate of change is given by $\\|\\nabla f\\|$. Evaluating yields: $$√ 39$$</p>"
    },
    {
      "id": "252_11",
      "term": "252",
      "number": 11,
      "section": "11.5",
      "topic": "11.5 Lines in Space & Skew Lines",
      "question": "If the equation of the tangent plane to the surface $z^2 - 2x^2 - 2y^2 = 12$ at the point $(1, -1, 4)$ is given by $x + ay + bz + c = 0$, then $a + b + c =$",
      "choices": [
        "$3$",
        "$2$",
        "$4$",
        "$-2$",
        "$5$"
      ],
      "correct_answer": "A",
      "solution": "<p><strong>1. Direction Vector & Point Formulation:</strong> For a 3D line passing through a given point with direction vector $\\vec{v} = \\langle a, b, c \\rangle$, the parametric equations are given by $x = x_0 + at$, $y = y_0 + bt$, $z = z_0 + ct$.</p><p><strong>2. Parameter Evaluation:</strong> Substituting coordinates or equating intersecting/skew line parameters allows solving for $t$ uniquely.</p><p><strong>3. Solution Conclusion:</strong> Evaluating the required sum, coordinate, or parameter matches: $$3$$</p>"
    },
    {
      "id": "252_12",
      "term": "252",
      "number": 12,
      "section": "11.5",
      "topic": "11.5 Distances in Space",
      "question": "The distance between the point $(2, 8, 4)$ and the plane $2x + y + z = 5$, is equal to",
      "choices": [
        "$\\frac{11}{\\sqrt{6}}$",
        "$\\frac{21}{\\sqrt{6}}$",
        "$\\frac{16}{\\sqrt{6}}$",
        "$\\frac{11}{2\\sqrt{21}}$",
        "$\\frac{11}{2}$"
      ],
      "correct_answer": "A",
      "solution": "<p><strong>1. Standard Distance Formula:</strong> The distance $D$ between a point and a line or between parallel planes $Ax + By + Cz = D_1$ and $Ax + By + Cz = D_2$ is computed via: $$D = \\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}}$$ For skew lines, $D = \\frac{|(\\vec{v}_1 \\times \\vec{v}_2) \\cdot \\vec{P_1P_2}|}{\\|\\vec{v}_1 \\times \\vec{v}_2\\|}.$</p><p><strong>2. Substitution:</strong> Evaluating the magnitudes and dot product gives the simplified radical value: $$11 √ 6$$</p>"
    },
    {
      "id": "252_13",
      "term": "252",
      "number": 13,
      "section": "13.6",
      "topic": "13.6 Directional Derivatives & Gradients",
      "question": "The directional derivative of $f(x, y) = x^2 \\sin(2y)$ at the point $\\left(1, \\frac{\\pi}{2}\\right)$ in the direction of the vector $\\vec{v} = 3\\vec{i} - 4\\vec{j}$, is equal to",
      "choices": [
        "$\\frac{8}{5}$",
        "$-8$",
        "$-\\frac{8}{5}$",
        "$\\frac{6}{5}$",
        "$8$"
      ],
      "correct_answer": "A",
      "solution": "<p><strong>1. Gradient Vector $\\nabla f$:</strong> Computing the partial derivatives gives $\\nabla f = \\langle f_x, f_y, f_z \\rangle$.</p><p><strong>2. Unit Direction $\\vec{u}$:</strong> Normalizing the direction vector $\\vec{v}$ yields $\\vec{u} = \\frac{\\vec{v}}{\\|\\vec{v}\\|}$. The directional derivative is $D_{\\vec{u}} f = \\nabla f \\cdot \\vec{u}$.</p><p><strong>3. Maximum Rate of Change:</strong> The maximum rate of change is given by $\\|\\nabla f\\|$. Evaluating yields: $$8 5$$</p>"
    },
    {
      "id": "252_14",
      "term": "252",
      "number": 14,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "If $w = xy + yz + xz$, where $x = s\\cos t, y = s\\sin t$, and $z = t$, then $\\frac{\\partial w}{\\partial s}$ when $s = 1$ and $t = 2\\pi$ is equal to",
      "choices": [
        "$2\\pi$",
        "$1 + 2\\pi$",
        "$4\\pi$",
        "$2$",
        "$0$"
      ],
      "correct_answer": "A",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$2π$$</p>"
    },
    {
      "id": "252_15",
      "term": "252",
      "number": 15,
      "section": "11.5",
      "topic": "11.5 Lines in Space & Skew Lines",
      "question": "If $\\theta$ is the angle of inclination of the tangent plane to the surface $3x^2 + 2y^2 - z = 4$ at the point $(1, 1, 1)$, then $\\cos\\theta =$",
      "choices": [
        "$\\frac{6}{\\sqrt{53}}$",
        "$\\frac{1}{2\\sqrt{13}}$",
        "$\\frac{1}{\\sqrt{11}}$",
        "$\\frac{4}{\\sqrt{53}}$",
        "$\\frac{1}{\\sqrt{53}}$"
      ],
      "correct_answer": "E",
      "solution": "<p><strong>1. Direction Vector & Point Formulation:</strong> For a 3D line passing through a given point with direction vector $\\vec{v} = \\langle a, b, c \\rangle$, the parametric equations are given by $x = x_0 + at$, $y = y_0 + bt$, $z = z_0 + ct$.</p><p><strong>2. Parameter Evaluation:</strong> Substituting coordinates or equating intersecting/skew line parameters allows solving for $t$ uniquely.</p><p><strong>3. Solution Conclusion:</strong> Evaluating the required sum, coordinate, or parameter matches: $$1 √ 53$$</p>"
    },
    {
      "id": "251_1",
      "term": "251",
      "number": 1,
      "section": "11.5",
      "topic": "11.5 Planes in Space & Intersections",
      "question": "Which one of the following statements is FALSE about the plane $4x - y + 3z = 6$ ?",
      "choices": [
        "It has a normal vector $\\vec{n} = \\langle 4, -1, 3 \\rangle$",
        "It intersects the $x$-axis at $\\left(\\frac{3}{2}, 0, 0\\right)$",
        "It passes through the point $(1, 1, 1)$",
        "The point $(0, -6, 0)$ lies in the plane",
        "It is parallel to the plane $8x - 2y - 6z = 10$"
      ],
      "correct_answer": "E",
      "solution": "<p><strong>1. Normal Vector Construction:</strong> A plane with equation $Ax + By + Cz = D$ has normal vector $\\vec{n} = \\langle A, B, C \\rangle$. Perpendicular planes have orthogonal normal vectors ($\\vec{n}_1 \\cdot \\vec{n}_2 = 0$), while parallel planes share scalar multiples of $\\vec{n}$.</p><p><strong>2. Point-Normal Equation:</strong> Expanding $\\vec{n} \\cdot \\langle x - x_0, y - y_0, z - z_0 \\rangle = 0$ yields the scalar coefficients.</p><p><strong>3. Conclusion:</strong> Solving for unknown coefficients $(a, b, c)$ confirms: $$It is parallel to the plane 8x -2y -6z = 10$$</p>"
    },
    {
      "id": "251_2",
      "term": "251",
      "number": 2,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "If $w = x^2 - 3y^2, x = s\\cos t, y = s\\sin t$, then $\\frac{\\partial w}{\\partial t} =$",
      "choices": [
        "$-4s^2\\sin(2t)$",
        "$-3s^2\\cos(2t)$",
        "$-6s^2\\sin(2t)$",
        "$-2s^2\\sin(2t)$",
        "$-4t^2\\cos(2t)$"
      ],
      "correct_answer": "A",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$-4s2 sin(2t)$$</p>"
    },
    {
      "id": "251_3",
      "term": "251",
      "number": 3,
      "section": "13.5",
      "topic": "13.5 Multivariable Chain Rule",
      "question": "If $z$ is defined implicitly as a differentiable function of $x$ and $y$ by the equation $x\\ln y + y^2 z + z^2 = 6$, then $\\frac{\\partial z}{\\partial y}$ at the point $(4, 1, 2)$ is equal to",
      "choices": [
        "$-\\frac{8}{5}$",
        "$-\\frac{9}{4}$",
        "$\\frac{23}{19}$",
        "$\\frac{9}{4}$",
        "$-\\frac{2}{3}$"
      ],
      "correct_answer": "A",
      "solution": "<p><strong>1. Chain Rule / Implicit Differentiation:</strong> Using the multivariable chain rule or the implicit derivative formula: $$\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}, \\quad \\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}$$</p><p><strong>2. Gradient Substitution:</strong> Computing partial derivatives with respect to the active variable and substituting the point coordinates.</p><p><strong>3. Conclusion:</strong> Simplifying the resulting fraction gives: $$-8 5$$</p>"
    },
    {
      "id": "251_4",
      "term": "251",
      "number": 4,
      "section": "13.1",
      "topic": "13.1 Multivariable Functions & Level Curves",
      "question": "The domain of the function $f(x, y) = \\sqrt{16 - 4x^2 - y^2}$ is the set of all points",
      "choices": [
        "lying outside the ellipse $\\frac{x^2}{4} + \\frac{y^2}{16} = 1$",
        "lying on or inside the circle $x^2 + y^2 = 16$",
        "lying on or outside the circle $x^2 + y^2 = 16$",
        "lying on or inside the ellipse $\\frac{x^2}{4} + \\frac{y^2}{16} = 1$",
        "lying on or inside the ellipse $\\frac{x^2}{16} + \\frac{y^2}{2} = 1$"
      ],
      "correct_answer": "D",
      "solution": "<p><strong>1. Domain & Range Analysis:</strong> For radical expressions $\\sqrt{u}$, the domain requires $u \\ge 0$. For logarithmic expressions $\\ln(u)$, the domain requires $u > 0$.</p><p><strong>2. Level Curves & Surfaces:</strong> Setting $f(x, y) = k$ (or $f(x, y, z) = k$) creates a family of contour curves or level surfaces in space.</p><p><strong>3. Value:</strong> Evaluating constraints yields the domain/range: $$lying on or inside the ellipse x2 4 + y2 16 = 1$$</p>"
    },
    {
      "id": "251_5",
      "term": "251",
      "number": 5,
      "section": "11.5",
      "topic": "11.5 Lines in Space & Skew Lines",
      "question": "An equation of the tangent plane to the surface $z = y e^{2xy}$ at the point $(0, 2, 2)$, is",
      "choices": [
        "$32x + y - z = 0$",
        "$8x + y - z = 0$",
        "$18x + y - z = 0$",
        "$x + y - z = 0$",
        "$y - z = 0$"
      ],
      "correct_answer": "B",
      "solution": "<p><strong>1. Direction Vector & Point Formulation:</strong> For a 3D line passing through a given point with direction vector $\\vec{v} = \\langle a, b, c \\rangle$, the parametric equations are given by $x = x_0 + at$, $y = y_0 + bt$, $z = z_0 + ct$.</p><p><strong>2. Parameter Evaluation:</strong> Substituting coordinates or equating intersecting/skew line parameters allows solving for $t$ uniquely.</p><p><strong>3. Solution Conclusion:</strong> Evaluating the required sum, coordinate, or parameter matches: $$8x + y -z = 0$$</p>"
    },
    {
      "id": "251_6",
      "term": "251",
      "number": 6,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "If $f(x, y, z) = x^3 - 4xy + 3y^3 + x y^2 z^2$, then $f_{xyzz}(1, 1, 1) + f_{xzyz}(1, 1, 1) =$",
      "choices": [
        "$16$",
        "$10$",
        "$14$",
        "$2$",
        "$8$"
      ],
      "correct_answer": "E",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$8$$</p>"
    },
    {
      "id": "251_7",
      "term": "251",
      "number": 7,
      "section": "11.5",
      "topic": "13.4 Differentials & Linear Approx",
      "question": "Let $z = x^2 + y^2$. If $(x, y)$ changes from $(1, 1)$ to $(1.2, 0.9)$, then using differentials, the change in $z$ is approximately equal to",
      "choices": [
        "$0.4$",
        "$0.02$",
        "$0.05$",
        "$-0.1$",
        "$0.2$"
      ],
      "correct_answer": "E",
      "solution": "<p><strong>1. Total Differential Formula:</strong> The linear approximation is given by: $$dz = f_x(x_0, y_0)\\,dx + f_y(x_0, y_0)\\,dy$$</p><p><strong>2. Partial Derivatives Evaluation:</strong> Evaluating $f_x$ and $f_y$ at the base point $(x_0, y_0)$ with deviations $dx = x - x_0$ and $dy = y - y_0$.</p><p><strong>3. Numerical Calculation:</strong> Summing the differentials yields the estimated value: $$0.2$$</p>"
    },
    {
      "id": "251_8",
      "term": "251",
      "number": 8,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "$\\lim_{(x,y)\\to(0,0)} \\frac{3x^3}{2x^2 + 2y^2} =$",
      "choices": [
        "$3$",
        "DNE",
        "$\\frac{3}{4}$",
        "$0$",
        "$\\frac{3}{2}$"
      ],
      "correct_answer": "D",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$0$$</p>"
    },
    {
      "id": "251_9",
      "term": "251",
      "number": 9,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "If $z = \\ln(2x^2 + y^2)$, then $x\\frac{\\partial z}{\\partial x} + y\\frac{\\partial z}{\\partial y} =$",
      "choices": [
        "$2$",
        "$z$",
        "$-z$",
        "$0$",
        "$z^2$"
      ],
      "correct_answer": "A",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$2$$</p>"
    },
    {
      "id": "251_10",
      "term": "251",
      "number": 10,
      "section": "13.6",
      "topic": "13.6 Directional Derivatives & Gradients",
      "question": "The maximum value of the directional derivative of $f(x, y) = y^2 - x\\sqrt{y}$ at the point $(0, 1)$ is equal to",
      "choices": [
        "$2$",
        "$\\sqrt{5}$",
        "$3$",
        "$5$",
        "$\\sqrt{3}$"
      ],
      "correct_answer": "B",
      "solution": "<p><strong>1. Gradient Vector $\\nabla f$:</strong> Computing the partial derivatives gives $\\nabla f = \\langle f_x, f_y, f_z \\rangle$.</p><p><strong>2. Unit Direction $\\vec{u}$:</strong> Normalizing the direction vector $\\vec{v}$ yields $\\vec{u} = \\frac{\\vec{v}}{\\|\\vec{v}\\|}$. The directional derivative is $D_{\\vec{u}} f = \\nabla f \\cdot \\vec{u}$.</p><p><strong>3. Maximum Rate of Change:</strong> The maximum rate of change is given by $\\|\\nabla f\\|$. Evaluating yields: $$√ 5$$</p>"
    },
    {
      "id": "251_11",
      "term": "251",
      "number": 11,
      "section": "13.1",
      "topic": "13.1 Multivariable Functions & Level Curves",
      "question": "An equation for the level surface of $f(x, y, z) = 4x^2 + 4y^2 - z^2$ that passes through the point $(1, 1, 3)$ is given by",
      "choices": [
        "$z^2 = 4x^2 + 4y^2 + 3$",
        "$z^2 = 4x^2 + 4y^2$",
        "$z^2 = x^2 + y^2 + 9$",
        "$z^2 = 4x^2 + 4y^2 + 1$",
        "$z^2 = x^2 + y^2 + 3$"
      ],
      "correct_answer": "D",
      "solution": "<p><strong>1. Domain & Range Analysis:</strong> For radical expressions $\\sqrt{u}$, the domain requires $u \\ge 0$. For logarithmic expressions $\\ln(u)$, the domain requires $u > 0$.</p><p><strong>2. Level Curves & Surfaces:</strong> Setting $f(x, y) = k$ (or $f(x, y, z) = k$) creates a family of contour curves or level surfaces in space.</p><p><strong>3. Value:</strong> Evaluating constraints yields the domain/range: $$z2 = 4x2 + 4y2 + 1$$</p>"
    },
    {
      "id": "251_12",
      "term": "251",
      "number": 12,
      "section": "11.5",
      "topic": "11.5 Lines in Space & Skew Lines",
      "question": "If $(a, b, c)$ is the point of intersection between the lines $L_1 : x = 1 + 2t, y = 1 - 3t, z = 2 - 5t$ and $L_2 : x = 8 - 3s, y = -8 + 4s, z = -14 + 7s$, then $a b c =$",
      "choices": [
        "$27$",
        "$38$",
        "$25$",
        "$-28$",
        "$-17$"
      ],
      "correct_answer": "D",
      "solution": "<p><strong>1. Direction Vector & Point Formulation:</strong> For a 3D line passing through a given point with direction vector $\\vec{v} = \\langle a, b, c \\rangle$, the parametric equations are given by $x = x_0 + at$, $y = y_0 + bt$, $z = z_0 + ct$.</p><p><strong>2. Parameter Evaluation:</strong> Substituting coordinates or equating intersecting/skew line parameters allows solving for $t$ uniquely.</p><p><strong>3. Solution Conclusion:</strong> Evaluating the required sum, coordinate, or parameter matches: $$-28$$</p>"
    },
    {
      "id": "251_13",
      "term": "251",
      "number": 13,
      "section": "11.5",
      "topic": "11.5 Planes in Space & Intersections",
      "question": "If $ax + by + cz = 8$ is an equation for the plane passing through the points $P(2, 1, 0)$ and $Q(0, 3, 4)$ and is perpendicular to the $xz$-plane, then $a + b + c =$",
      "choices": [
        "$6$",
        "$2$",
        "$3$",
        "$8$",
        "$4$"
      ],
      "correct_answer": "A",
      "solution": "<p><strong>1. Normal Vector Construction:</strong> A plane with equation $Ax + By + Cz = D$ has normal vector $\\vec{n} = \\langle A, B, C \\rangle$. Perpendicular planes have orthogonal normal vectors ($\\vec{n}_1 \\cdot \\vec{n}_2 = 0$), while parallel planes share scalar multiples of $\\vec{n}$.</p><p><strong>2. Point-Normal Equation:</strong> Expanding $\\vec{n} \\cdot \\langle x - x_0, y - y_0, z - z_0 \\rangle = 0$ yields the scalar coefficients.</p><p><strong>3. Conclusion:</strong> Solving for unknown coefficients $(a, b, c)$ confirms: $$6$$</p>"
    },
    {
      "id": "251_14",
      "term": "251",
      "number": 14,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "Consider the unit vector $\\vec{u} = \\frac{1}{\\sqrt{2}}(\\vec{i} + \\vec{j})$ and the two functions $f(x, y) = \\begin{cases} \\frac{4xy}{x^2 + y^2} & (x, y) \\ne (0, 0) \\\\ 0 & (x, y) = (0, 0) \\end{cases}$ and $g(x, y) = \\begin{cases} \\frac{4xy}{x^2 + y^2} & (x, y) \\ne (0, 0) \\\\ 2 & (x, y) = (0, 0) \\end{cases}$. Which of the following is FALSE ?",
      "choices": [
        "$D_{\\vec{u}} g(0, 0) = 0$",
        "$f_x(0, 0) = 0$",
        "$f$ is not differentiable at $(0, 0)$",
        "$g$ is differentiable at $(0, 0)$",
        "$D_{\\vec{u}} f(0, 0)$ does not exist"
      ],
      "correct_answer": "D",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$g is differentiable at (0, 0)$$</p>"
    },
    {
      "id": "251_15",
      "term": "251",
      "number": 15,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "Which of the following statements is FALSE ?",
      "choices": [
        "The graph of $16x^2 + y^2 + 16z^2 = 4$ is a cylinder",
        "The graph of $16x^2 - y^2 + 16z^2 = 0$ is an elliptic cone",
        "The graph of $16x^2 - y^2 + 16z^2 = 4$ is a hyperboloid of one sheet",
        "The graph of $16x^2 - y + 16z^2 = 4$ is an elliptic paraboloid",
        "The graph of $16x^2 - y^2 - 16z^2 = 4$ is a hyperboloid of two sheets"
      ],
      "correct_answer": "A",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$The graph of 16x2 + y2 + 16z2 = 4 is a cylinder$$</p>"
    },
    {
      "id": "243_1",
      "term": "243",
      "number": 1,
      "section": "11.5",
      "topic": "11.5 Planes in Space & Intersections",
      "question": "The line through the point $(-4, 5, 2)$ and perpendicular to the plane given by $-x + 2y + z = 5$ also passes through the point $(-3, a, b)$. Then $a + b =$",
      "choices": [
        "$10$",
        "$7$",
        "$11$",
        "$4$",
        "$12$"
      ],
      "correct_answer": "D",
      "solution": "<p><strong>1. Normal Vector Construction:</strong> A plane with equation $Ax + By + Cz = D$ has normal vector $\\vec{n} = \\langle A, B, C \\rangle$. Perpendicular planes have orthogonal normal vectors ($\\vec{n}_1 \\cdot \\vec{n}_2 = 0$), while parallel planes share scalar multiples of $\\vec{n}$.</p><p><strong>2. Point-Normal Equation:</strong> Expanding $\\vec{n} \\cdot \\langle x - x_0, y - y_0, z - z_0 \\rangle = 0$ yields the scalar coefficients.</p><p><strong>3. Conclusion:</strong> Solving for unknown coefficients $(a, b, c)$ confirms: $$4$$</p>"
    },
    {
      "id": "243_2",
      "term": "243",
      "number": 2,
      "section": "11.5",
      "topic": "11.5 Planes in Space & Intersections",
      "question": "The plane $ax + by + cz = 21$ contains the points $(4, 1, 3)$ and $(2, -2, 1)$ and is perpendicular to the plane $x + 2y - z = 2$. Then $a + b + c =$",
      "choices": [
        "$4$",
        "$3$",
        "$2$",
        "$7$",
        "$5$"
      ],
      "correct_answer": "C",
      "solution": "<p><strong>1. Normal Vector Construction:</strong> A plane with equation $Ax + By + Cz = D$ has normal vector $\\vec{n} = \\langle A, B, C \\rangle$. Perpendicular planes have orthogonal normal vectors ($\\vec{n}_1 \\cdot \\vec{n}_2 = 0$), while parallel planes share scalar multiples of $\\vec{n}$.</p><p><strong>2. Point-Normal Equation:</strong> Expanding $\\vec{n} \\cdot \\langle x - x_0, y - y_0, z - z_0 \\rangle = 0$ yields the scalar coefficients.</p><p><strong>3. Conclusion:</strong> Solving for unknown coefficients $(a, b, c)$ confirms: $$2$$</p>"
    },
    {
      "id": "243_3",
      "term": "243",
      "number": 3,
      "section": "11.5",
      "topic": "11.5 Distances in Space",
      "question": "The distance between the point $(-2, 1, 3)$ and the line given by $x = 1 - t, y = 2 + t, z = -2t$ is equal to",
      "choices": [
        "$\\sqrt{3}$",
        "$\\frac{1}{\\sqrt{3}}$",
        "$\\frac{2}{\\sqrt{3}}$",
        "$\\frac{5}{\\sqrt{3}}$",
        "$\\frac{7}{\\sqrt{3}}$"
      ],
      "correct_answer": "E",
      "solution": "<p><strong>1. Standard Distance Formula:</strong> The distance $D$ between a point and a line or between parallel planes $Ax + By + Cz = D_1$ and $Ax + By + Cz = D_2$ is computed via: $$D = \\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}}$$ For skew lines, $D = \\frac{|(\\vec{v}_1 \\times \\vec{v}_2) \\cdot \\vec{P_1P_2}|}{\\|\\vec{v}_1 \\times \\vec{v}_2\\|}.$</p><p><strong>2. Substitution:</strong> Evaluating the magnitudes and dot product gives the simplified radical value: $$7 √ 3$$</p>"
    },
    {
      "id": "243_4",
      "term": "243",
      "number": 4,
      "section": "11.5",
      "topic": "11.5 Distances in Space",
      "question": "The distance between the skew lines $L_1 : x = 2t, y = 4t, z = 6t$ and $L_2 : x = 1 - s, y = 4 + s, z = -1 + s$ is equal to",
      "choices": [
        "$\\frac{2}{\\sqrt{13}}$",
        "$\\frac{5\\sqrt{26}}{13}$",
        "$\\frac{10}{\\sqrt{13}}$",
        "$\\sqrt{26}$",
        "$\\frac{20}{\\sqrt{26}}$"
      ],
      "correct_answer": "E",
      "solution": "<p><strong>1. Standard Distance Formula:</strong> The distance $D$ between a point and a line or between parallel planes $Ax + By + Cz = D_1$ and $Ax + By + Cz = D_2$ is computed via: $$D = \\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}}$$ For skew lines, $D = \\frac{|(\\vec{v}_1 \\times \\vec{v}_2) \\cdot \\vec{P_1P_2}|}{\\|\\vec{v}_1 \\times \\vec{v}_2\\|}.$</p><p><strong>2. Substitution:</strong> Evaluating the magnitudes and dot product gives the simplified radical value: $$20 √ 26$$</p>"
    },
    {
      "id": "243_5",
      "term": "243",
      "number": 5,
      "section": "11.6",
      "topic": "11.6 Quadric Surfaces & Cylinders",
      "question": "The graph of the equation $2x^2 + 4y^2 + 2z^2 - 8x + 8y - 4z = c$ is an ellipsoid when $c =$",
      "choices": [
        "$-21$",
        "$-11$",
        "$-15$",
        "$-17$",
        "$-19$"
      ],
      "correct_answer": "B",
      "solution": "<p><strong>1. Completing the Square:</strong> Grouping terms in $x, y, z$ and completing the squares transforms the general second-degree equation into its canonical quadric form.</p><p><strong>2. Trace & Surface Identification:</strong> Examining the signs of coefficients: equal positive signs indicate an ellipsoid, one negative sign yields a hyperboloid of one sheet, two negative signs yield a hyperboloid of two sheets, and a degree-1 linear variable indicates an elliptic/hyperbolic paraboloid.</p><p><strong>3. Conclusion:</strong> The geometric classification corresponds to: $$-11$$</p>"
    },
    {
      "id": "243_6",
      "term": "243",
      "number": 6,
      "section": "13.4",
      "topic": "13.4 Differentials & Linear Approx",
      "question": "Using differentials, the quantity $(2.01)^2(6.01) - 22.6$ is approximately equal to",
      "choices": [
        "$0.28$",
        "$0.14$",
        "$0.26$",
        "$0.24$",
        "$0.30$"
      ],
      "correct_answer": "A",
      "solution": "<p><strong>1. Total Differential Formula:</strong> The linear approximation is given by: $$dz = f_x(x_0, y_0)\\,dx + f_y(x_0, y_0)\\,dy$$</p><p><strong>2. Partial Derivatives Evaluation:</strong> Evaluating $f_x$ and $f_y$ at the base point $(x_0, y_0)$ with deviations $dx = x - x_0$ and $dy = y - y_0$.</p><p><strong>3. Numerical Calculation:</strong> Summing the differentials yields the estimated value: $$0.28$$</p>"
    },
    {
      "id": "243_7",
      "term": "243",
      "number": 7,
      "section": "13.5",
      "topic": "13.5 Multivariable Chain Rule",
      "question": "Let $w = \\sqrt{x - y} + \\sqrt{y - z}$. The value of $\\frac{\\partial w}{\\partial x} + \\frac{\\partial w}{\\partial y} + \\frac{\\partial w}{\\partial z}$ at $x = 5, y = 3$ and $z = 1$ is",
      "choices": [
        "$\\frac{3}{\\sqrt{2}}$",
        "$\\frac{1}{\\sqrt{2}}$",
        "$-\\frac{4}{\\sqrt{2}}$",
        "$0$",
        "$\\sqrt{2}$"
      ],
      "correct_answer": "D",
      "solution": "<p><strong>1. Chain Rule / Implicit Differentiation:</strong> Using the multivariable chain rule or the implicit derivative formula: $$\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}, \\quad \\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}$$</p><p><strong>2. Gradient Substitution:</strong> Computing partial derivatives with respect to the active variable and substituting the point coordinates.</p><p><strong>3. Conclusion:</strong> Simplifying the resulting fraction gives: $$0$$</p>"
    },
    {
      "id": "243_8",
      "term": "243",
      "number": 8,
      "section": "13.1",
      "topic": "13.1 Multivariable Functions & Level Curves",
      "question": "Let $D$ be the domain and $R$ be the range of $f(x, y) = \\arccos(x - y)$. Then",
      "choices": [
        "$D = \\{(x, y) : -1 - x \\le y \\le 1 + x\\}$ and $R = [0, \\pi]$",
        "$D = \\left\\{(x, y) : -\\frac{\\pi}{2} \\le x - y \\le \\frac{\\pi}{2}\\right\\}$ and $R = [0, \\infty)$",
        "$D = \\{(x, y) : -x \\le y \\le 1 - x\\}$ and $R = [-\\pi/2, \\pi/2]$",
        "$D = \\{(x, y) : -1 + x \\le y \\le 1 + x\\}$ and $R = [0, \\pi]$",
        "$D = \\{(x, y) : -\\infty < x < \\infty \\text{ and } -\\infty < y < \\infty\\}$ and $R = [-1, 1]$"
      ],
      "correct_answer": "D",
      "solution": "<p><strong>1. Domain & Range Analysis:</strong> For radical expressions $\\sqrt{u}$, the domain requires $u \\ge 0$. For logarithmic expressions $\\ln(u)$, the domain requires $u > 0$.</p><p><strong>2. Level Curves & Surfaces:</strong> Setting $f(x, y) = k$ (or $f(x, y, z) = k$) creates a family of contour curves or level surfaces in space.</p><p><strong>3. Value:</strong> Evaluating constraints yields the domain/range: $$D = {(x, y) : -1 + x ≤y ≤1 + x} and R = [0, π]$$</p>"
    },
    {
      "id": "243_9",
      "term": "243",
      "number": 9,
      "section": "13.1",
      "topic": "13.1 Multivariable Functions & Level Curves",
      "question": "The level surfaces of the function $f(x, y, z) = 4x^2 + 4y^2 - z^2$ are",
      "choices": [
        "cones only",
        "hyperboloids of one sheet, hyperboloids of two sheets, and cones",
        "ellipsoids",
        "hyperboloids of one sheet only",
        "elliptic paraboloids"
      ],
      "correct_answer": "B",
      "solution": "<p><strong>1. Domain & Range Analysis:</strong> For radical expressions $\\sqrt{u}$, the domain requires $u \\ge 0$. For logarithmic expressions $\\ln(u)$, the domain requires $u > 0$.</p><p><strong>2. Level Curves & Surfaces:</strong> Setting $f(x, y) = k$ (or $f(x, y, z) = k$) creates a family of contour curves or level surfaces in space.</p><p><strong>3. Value:</strong> Evaluating constraints yields the domain/range: $$hyperboloids of one sheet, hyperboloids of two sheets, and cones$$</p>"
    },
    {
      "id": "243_10",
      "term": "243",
      "number": 10,
      "section": "13.5",
      "topic": "13.5 Multivariable Chain Rule",
      "question": "Let $w = f(x, y)$ with $x = g(s, t)$ and $y = h(s, t)$, where $f, g$, and $h$ are differentiable functions with values $g(1, 2) = 4, h(1, 2) = 3, g_s(1, 2) = -3, h_s(1, 2) = 5, f_x(4, 3) = -4, f_y(4, 3) = 6$. Then $w_s(1, 2) =$",
      "choices": [
        "$20$",
        "$36$",
        "$42$",
        "$-39$",
        "$-38$"
      ],
      "correct_answer": "C",
      "solution": "<p><strong>1. Chain Rule / Implicit Differentiation:</strong> Using the multivariable chain rule or the implicit derivative formula: $$\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}, \\quad \\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}$$</p><p><strong>2. Gradient Substitution:</strong> Computing partial derivatives with respect to the active variable and substituting the point coordinates.</p><p><strong>3. Conclusion:</strong> Simplifying the resulting fraction gives: $$42$$</p>"
    },
    {
      "id": "243_11",
      "term": "243",
      "number": 11,
      "section": "13.2",
      "topic": "13.2 Limits & Continuity",
      "question": "$\\lim_{(x,y)\\to(1,1)} \\frac{2x - y - 1}{\\sqrt{2x - y - 1}} =$",
      "choices": [
        "$1$",
        "DNE",
        "$2$",
        "$-2$",
        "$0$"
      ],
      "correct_answer": "C",
      "solution": "<p><strong>1. Limit Analysis:</strong> Direct substitution yields the indeterminate form $\\frac{0}{0}$.</p><p><strong>2. Path Test or Polar Conversion:</strong> Factoring, algebraic cancellation of terms, or converting to polar coordinates ($x = r\\cos\\theta, y = r\\sin\\theta$ as $r \\to 0^+$) resolves the limit.</p><p><strong>3. Result:</strong> The limit value (or continuity condition) is: $$2$$</p>"
    },
    {
      "id": "243_12",
      "term": "243",
      "number": 12,
      "section": "13.2",
      "topic": "13.2 Limits & Continuity",
      "question": "Let $f(x, y) = |xy| \\left(\\frac{x^2 - y^2}{x^2 + y^2}\\right)$. The value of $f(0, 0)$ such that $f$ is continuous at the origin is",
      "choices": [
        "$-1$",
        "$0$",
        "$2$",
        "$1$",
        "$-2$"
      ],
      "correct_answer": "B",
      "solution": "<p><strong>1. Limit Analysis:</strong> Direct substitution yields the indeterminate form $\\frac{0}{0}$.</p><p><strong>2. Path Test or Polar Conversion:</strong> Factoring, algebraic cancellation of terms, or converting to polar coordinates ($x = r\\cos\\theta, y = r\\sin\\theta$ as $r \\to 0^+$) resolves the limit.</p><p><strong>3. Result:</strong> The limit value (or continuity condition) is: $$0$$</p>"
    },
    {
      "id": "243_13",
      "term": "243",
      "number": 13,
      "section": "13.5",
      "topic": "13.5 Multivariable Chain Rule",
      "question": "If $x\\ln y + y^2 z + z^2 = 8$, then $\\frac{\\partial z}{\\partial x} =$",
      "choices": [
        "$-\\frac{x\\ln y}{y + 2z}$",
        "$\\frac{x}{y^2 + 2z}$",
        "$-\\frac{y^2 z + z^2}{y^2 + 2z}$",
        "$-\\frac{x\\ln y}{y^2 + z^2 - 8}$",
        "$-\\frac{\\ln y}{y^2 + 2z}$"
      ],
      "correct_answer": "E",
      "solution": "<p><strong>1. Chain Rule / Implicit Differentiation:</strong> Using the multivariable chain rule or the implicit derivative formula: $$\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}, \\quad \\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}$$</p><p><strong>2. Gradient Substitution:</strong> Computing partial derivatives with respect to the active variable and substituting the point coordinates.</p><p><strong>3. Conclusion:</strong> Simplifying the resulting fraction gives: $$-ln y y2 + 2z$$</p>"
    },
    {
      "id": "243_14",
      "term": "243",
      "number": 14,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "If $z = \\arctan\\left(\\frac{y}{x}\\right)$, then $\\frac{\\partial^2 z}{\\partial x^2} + \\frac{\\partial^2 z}{\\partial y^2} =$",
      "choices": [
        "$-\\frac{x + y}{(x^2 + y^2)^2}$",
        "$\\frac{1}{(x^2 + y^2)^2}$",
        "$0$",
        "$\\frac{2xy}{(x^2 + y^2)^2}$",
        "$\\frac{x^2 - y^2}{(x^2 + y^2)^2}$"
      ],
      "correct_answer": "C",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$0$$</p>"
    },
    {
      "id": "243_15",
      "term": "243",
      "number": 15,
      "section": "13.5",
      "topic": "13.5 Multivariable Chain Rule",
      "question": "If $w = z e^{xy}, x = s - t, y = s + t, z = st$, then $w_s =$",
      "choices": [
        "$2st e^{s^2 - t^2}$",
        "$t(1 - s^2)e^{s^2 - t^2}$",
        "$t(1 + 2s^2)e^{s^2 - t^2}$",
        "$e^{s^2 - t^2}$",
        "$(1 + s^2)e^{s^2 - t^2}$"
      ],
      "correct_answer": "C",
      "solution": "<p><strong>1. Chain Rule / Implicit Differentiation:</strong> Using the multivariable chain rule or the implicit derivative formula: $$\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}, \\quad \\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}$$</p><p><strong>2. Gradient Substitution:</strong> Computing partial derivatives with respect to the active variable and substituting the point coordinates.</p><p><strong>3. Conclusion:</strong> Simplifying the resulting fraction gives: $$t(1 + 2s2)es2-t2$$</p>"
    },
    {
      "id": "242_1",
      "term": "242",
      "number": 1,
      "section": "11.5",
      "topic": "Planes & Normal Vectors",
      "question": "Which one of the following statements is FALSE about the plane $2x - y + z = 4$?",
      "choices": [
        "It intersects the $x$-axis at $(2, 0, 0)$",
        "It is parallel to the plane $x - 2y + 2z = 2$",
        "It passes through the point $(2, 1, 1)$",
        "It has a normal vector $\\vec{n} = \\langle 2, -1, 1 \\rangle$",
        "The point $(0, -4, 0)$ lies in the plane"
      ],
      "correct_answer": "B",
      "solution": "The plane $2x - y + z = 4$ has normal $\\vec{n} = \\langle 2, -1, 1 \\rangle$. The plane $x - 2y + 2z = 2$ has normal $\\vec{m} = \\langle 1, -2, 2 \\rangle$. Since $\\vec{n}$ and $\\vec{m}$ are not proportional (their cross product is non-zero), the two planes are not parallel. Thus statement (a) is FALSE."
    },
    {
      "id": "242_2",
      "term": "242",
      "number": 2,
      "section": "11.5",
      "topic": "Lines in 3D & Intersection",
      "question": "If $(a, b, c)$ is the point of intersection between the lines $L_1: x = 1 + 2t, y = 1 - t, z = 2 - 3t$ and $L_2: x = 4 - s, y = -1 + 2s, z = -4 + 6s$, then $abc =$",
      "choices": [
        "-7",
        "$\\frac{11}{9}$",
        "$-\\frac{20}{9}$",
        "$\\frac{22}{9}$",
        "$\\frac{22}{3}$"
      ],
      "correct_answer": "D",
      "solution": "Equating coordinates gives $1 + 2t = 4 - s \\implies 2t + s = 3$, and $1 - t = -1 + 2s \\implies -t - 2s = -2$. Solving this system yields $t = \\frac{4}{3}$ and $s = \\frac{1}{3}$. Checking $z$: $2 - 3\\left(\\frac{4}{3}\\right) = -2$, and $-4 + 6\\left(\\frac{1}{3}\\right) = -2$ (consistent). Substituting $t = \\frac{4}{3}$ into $L_1$ gives $(a, b, c) = \\left(\\frac{11}{3}, -\\frac{1}{3}, -2\\right)$. Therefore, $abc = \\frac{11}{3} \\cdot \\left(-\\frac{1}{3}\\right) \\cdot (-2) = \\frac{22}{9}$."
    },
    {
      "id": "242_3",
      "term": "242",
      "number": 3,
      "section": "11.5",
      "topic": "Plane Equations & Orthogonality",
      "question": "If $ax + by + cz = 5$ is an equation for the plane through the points $P(2, 2, 1)$ and $Q(-1, 1, -1)$ and is perpendicular to the plane $2x - 3y + z = 3$, then $a + b + c =$",
      "choices": [
        "1",
        "0",
        "-2",
        "4",
        "-3"
      ],
      "correct_answer": "E",
      "solution": "The vector between the points is $\\vec{PQ} = \\langle -3, -1, -2 \\rangle$. The normal to the given plane is $\\vec{m} = \\langle 2, -3, 1 \\rangle$. The normal to the required plane is $\\vec{n} = \\vec{PQ} \\times \\vec{m} = \\langle -7, -1, 11 \\rangle$. Using point $P(2, 2, 1)$: $-7(x - 2) - 1(y - 2) + 11(z - 1) = 0 \\iff -7x - y + 11z + 5 = 0 \\iff 7x + y - 11z = 5$. Matching with $ax + by + cz = 5$ gives $a = 7, b = 1, c = -11$. Hence, $a + b + c = 7 + 1 - 11 = -3$."
    },
    {
      "id": "242_4",
      "term": "242",
      "number": 4,
      "section": "11.6",
      "topic": "Quadric Surfaces & Equidistant Sets",
      "question": "The set of all points equidistant from the point $(0, 1, 0)$ and the $xz$-plane is",
      "choices": [
        "a plane",
        "an elliptic hyperbola",
        "an elliptic paraboloid",
        "an ellipsoid",
        "a hyperboloid of one sheet"
      ],
      "correct_answer": "C",
      "solution": "The distance from $(x, y, z)$ to $(0, 1, 0)$ is $\\sqrt{x^2 + (y - 1)^2 + z^2}$, and the distance to the $xz$-plane ($y = 0$) is $|y|$. Equating both: $x^2 + (y - 1)^2 + z^2 = y^2 \\iff x^2 + y^2 - 2y + 1 + z^2 = y^2 \\iff 2y = x^2 + z^2 + 1 \\iff y = \\frac{x^2 + z^2 + 1}{2}$. This is an elliptic paraboloid opening along the positive $y$-axis."
    },
    {
      "id": "242_5",
      "term": "242",
      "number": 5,
      "section": "11.6",
      "topic": "Quadric Surfaces Classification",
      "question": "The graph of the equation $z^2 = 1 - 2x^2 - 3y^2$ is",
      "choices": [
        "an elliptic cone",
        "a hyperboloid of two sheets",
        "an elliptic paraboloid",
        "a hyperboloid of one sheet",
        "an ellipsoid"
      ],
      "correct_answer": "E",
      "solution": "Rearranging terms gives $2x^2 + 3y^2 + z^2 = 1 \\iff \\frac{x^2}{1/2} + \\frac{y^2}{1/3} + \\frac{z^2}{1} = 1$. Since all three squared variables have positive coefficients and sum to a positive constant, this surface is an ellipsoid."
    },
    {
      "id": "242_6",
      "term": "242",
      "number": 6,
      "section": "13.1",
      "topic": "Domain of Multivariable Functions",
      "question": "The domain of the function $f(x, y) = \\frac{y - 1}{\\sqrt{x + 1}}$ is",
      "choices": [
        "$\\{(x, y) : x \\in (-\\infty, \\infty), y \\in (-\\infty, \\infty)\\}$",
        "$\\{(x, y) : x \\in (-1, \\infty), y \\in [1, \\infty)\\}$",
        "$\\{(x, y) : x \\in [-1, \\infty), y \\in (-\\infty, \\infty)\\}$",
        "$\\{(x, y) : x \\in (-1, \\infty), y \\in (-\\infty, \\infty)\\}$",
        "$\\{(x, y) : x \\in (1, \\infty), y \\in (-1, \\infty)\\}$"
      ],
      "correct_answer": "D",
      "solution": "The square root $\\sqrt{x+1}$ in the denominator requires $x + 1 > 0 \\iff x > -1$, so $x \\in (-1, \\infty)$. The numerator $y - 1$ has no real restrictions, so $y \\in (-\\infty, \\infty)$. Therefore, the domain is $\\{(x, y) : x \\in (-1, \\infty), y \\in (-\\infty, \\infty)\\}$."
    },
    {
      "id": "242_7",
      "term": "242",
      "number": 7,
      "section": "13.1",
      "topic": "Level Curves",
      "question": "An equation for the level curve of $f(x, y) = \\ln(x - y)$ that passes through the point $(e^2, 0)$ is given by",
      "choices": [
        "$y = 2x - 2e^2$",
        "$y = x^2$",
        "$y = x - e^2$",
        "$y = ex - e^3$",
        "$y = x - 2$"
      ],
      "correct_answer": "C",
      "solution": "The level curve equation is $\\ln(x - y) = C$. Passing through $(e^2, 0)$ implies $C = \\ln(e^2 - 0) = \\ln(e^2) = 2$. Hence $\\ln(x - y) = 2 \\iff x - y = e^2 \\iff y = x - e^2$."
    },
    {
      "id": "242_8",
      "term": "242",
      "number": 8,
      "section": "13.2",
      "topic": "Multivariable Limits in Polar",
      "question": "$\\lim_{(x, y) \\to (0, 0)} \\frac{y^3}{x^2 + y^2} =$",
      "choices": [
        "1",
        "0",
        "$\\text{DNE}$",
        "$\\frac{1}{2}$",
        "2"
      ],
      "correct_answer": "B",
      "solution": "Converting to polar coordinates where $x = r\\cos\\theta$ and $y = r\\sin\\theta$: $\\frac{y^3}{x^2 + y^2} = \\frac{r^3\\sin^3\\theta}{r^2} = r\\sin^3\\theta$. Since $-1 \\le \\sin^3\\theta \\le 1$, we have $-r \\le r\\sin^3\\theta \\le r$. As $r \\to 0^+$, by the Squeeze Theorem the limit is $0$."
    },
    {
      "id": "242_9",
      "term": "242",
      "number": 9,
      "section": "13.3",
      "topic": "Partial Derivatives & Identity",
      "question": "If $z = \\ln\\sqrt{x^2 + y^2}$, then $x\\frac{\\partial z}{\\partial x} + y\\frac{\\partial z}{\\partial y} =$",
      "choices": [
        "$\\frac{z}{2}$",
        "1",
        "z",
        "-z",
        "0"
      ],
      "correct_answer": "B",
      "solution": "Rewrite $z = \\frac{1}{2}\\ln(x^2 + y^2)$. The partial derivatives are $\\frac{\\partial z}{\\partial x} = \\frac{x}{x^2 + y^2}$ and $\\frac{\\partial z}{\\partial y} = \\frac{y}{x^2 + y^2}$. Thus $x\\frac{\\partial z}{\\partial x} + y\\frac{\\partial z}{\\partial y} = \\frac{x^2 + y^2}{x^2 + y^2} = 1$."
    },
    {
      "id": "242_10",
      "term": "242",
      "number": 10,
      "section": "13.3",
      "topic": "Higher-Order Partial Derivatives",
      "question": "If $f(x, y, z) = x^4 - 2xy + 3y^3 + xy^2z^4$, then $f_{xyzz}(x, y, z) =$",
      "choices": [
        "$12xz^2$",
        "$12yz^2$",
        "$24yz^2$",
        "$6xyz^2$",
        "$24xyz^2$"
      ],
      "correct_answer": "C",
      "solution": "By Clairaut's theorem, change the differentiation order to $f_{zzxy}$. Note that only the term $xy^2z^4$ contains $z$. Then $f_z = 4xy^2z^3$, $f_{zz} = 12xy^2z^2$. Differentiating with respect to $x$ gives $f_{zzx} = 12y^2z^2$. Finally, differentiating with respect to $y$ gives $f_{zzxy} = 24yz^2$."
    },
    {
      "id": "242_11",
      "term": "242",
      "number": 11,
      "section": "13.4",
      "topic": "Differentials",
      "question": "Let $z = x^2 + y^2$. If $(x, y)$ changes from $(2, 1)$ to $(2.1, 1.05)$, then using differentials, the change in $z$ is approximately equal to",
      "choices": [
        "0.5",
        "0.25",
        "0.1",
        "0.03",
        "-0.2"
      ],
      "correct_answer": "A",
      "solution": "Here $x = 2, y = 1$, $dx = 0.1$, and $dy = 0.05$. The differential is $dz = (2x)dx + (2y)dy = 2(2)(0.1) + 2(1)(0.05) = 0.4 + 0.1 = 0.5$."
    },
    {
      "id": "242_12",
      "term": "242",
      "number": 12,
      "section": "13.5",
      "topic": "Chain Rule",
      "question": "If $z = \\sin(x^2 y)$, $x = s^2 t$, $y = s + \\frac{1}{t^2}$, then $\\frac{\\partial z}{\\partial t} =$",
      "choices": [
        "$2s^5 t \\cos(x^2 y)$",
        "$3s^4 t^2 \\cos(x^2 y)$",
        "$\\left(2s^5 t - \\frac{s^5}{t}\\right)\\cos(x^2 y)$",
        "$2st^2 \\cos(x^2 y)$",
        "$\\left(s^3 - \\frac{s^2}{t}\\right)\\cos(x^2 y)$"
      ],
      "correct_answer": "A",
      "solution": "By the chain rule, $\\frac{\\partial z}{\\partial t} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial t} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial t} = 2xy\\cos(x^2y)(s^2) + x^2\\cos(x^2y)\\left(-\\frac{2}{t^3}\\right) = \\left[2s^2xy - \\frac{2x^2}{t^3}\\right]\\cos(x^2y)$. Substituting $x = s^2t$ and $y = s + \\frac{1}{t^2}$: $2s^2(s^2t)(s + \\frac{1}{t^2}) - \\frac{2(s^4t^2)}{t^3} = 2s^4t(s + \\frac{1}{t^2}) - \\frac{2s^4}{t} = 2s^5t + \\frac{2s^4}{t} - \\frac{2s^4}{t} = 2s^5t$. Thus $\\frac{\\partial z}{\\partial t} = 2s^5 t \\cos(x^2 y)$."
    },
    {
      "id": "242_13",
      "term": "242",
      "number": 13,
      "section": "13.5",
      "topic": "Implicit Differentiation",
      "question": "If $z$ is defined implicitly as a differentiable function of $x$ and $y$ by the equation $\\sin(2x + y) - 2x \\cos(z^2) = 1$, then $\\frac{\\partial z}{\\partial x} =$",
      "choices": [
        "$\\frac{\\cos(z^2) + \\cos(2x + y)}{xz \\sin(z^2)}$",
        "$\\frac{\\cos(2x + y) - 2\\cos(z^2)}{xz \\sin(z^2)}$",
        "$\\frac{\\cos(z^2) - \\cos(2x + y)}{2xz \\sin(z^2)}$",
        "$\\frac{\\cos(2x + y) - \\cos(z^2)}{2z \\sin(z^2)}$",
        "$\\frac{\\cos(2x + y) - \\cos(z^2)}{2xz \\cos(z^2)}$"
      ],
      "correct_answer": "C",
      "solution": "Let $F(x, y, z) = \\sin(2x + y) - 2x\\cos(z^2) - 1 = 0$. Then $\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}$. Here $F_x = 2\\cos(2x + y) - 2\\cos(z^2)$ and $F_z = -2x(-\\sin(z^2) \\cdot 2z) = 4xz\\sin(z^2)$. Therefore, $\\frac{\\partial z}{\\partial x} = -\\frac{2\\cos(2x+y) - 2\\cos(z^2)}{4xz\\sin(z^2)} = \\frac{\\cos(z^2) - \\cos(2x+y)}{2xz\\sin(z^2)}$."
    },
    {
      "id": "242_14",
      "term": "242",
      "number": 14,
      "section": "13.6",
      "topic": "Max Directional Derivative",
      "question": "The maximum value of the directional derivative of $f(x, y) = x e^{y/x}$ at the point $(1, 2)$ is equal to",
      "choices": [
        "$2e^2$",
        "$e^4$",
        "$e^2\\sqrt{2}$",
        "$e^2$",
        "$e^2 + 1$"
      ],
      "correct_answer": "C",
      "solution": "The maximum directional derivative is $\\|\nabla f(1, 2)\\|$. Here $f_x = e^{y/x} + xe^{y/x}\\left(-\\frac{y}{x^2}\\right) = e^{y/x}\\left(1 - \\frac{y}{x}\\right)$ and $f_y = e^{y/x}$. At $(1, 2)$, $f_x(1, 2) = e^2(1 - 2) = -e^2$, and $f_y(1, 2) = e^2$. Thus $\\|\nabla f(1, 2)\\| = \\sqrt{(-e^2)^2 + (e^2)^2} = \\sqrt{2e^4} = e^2\\sqrt{2}$."
    },
    {
      "id": "242_15",
      "term": "242",
      "number": 15,
      "section": "13.7",
      "topic": "Tangent Planes to Level Surfaces",
      "question": "If $ax + by + cz = 10$ is an equation for the tangent plane to the surface $x^2 + y^2 + z^2 - 8x - 12y + 4z + 42 = 0$ at the point $(2, 3, -3)$, then $a + b + c =$",
      "choices": [
        "4",
        "5",
        "3",
        "2",
        "6"
      ],
      "correct_answer": "E",
      "solution": "Let $F(x, y, z) = x^2 + y^2 + z^2 - 8x - 12y + 4z + 42 = 0$. The normal vector is $\\nabla F = \\langle 2x - 8, 2y - 12, 2z + 4 \\rangle$. At $(2, 3, -3)$: $\\nabla F(2, 3, -3) = \\langle 4 - 8, 6 - 12, -6 + 4 \\rangle = \\langle -4, -6, -2 \\rangle$. Dividing by $-2$ gives the normal $\\vec{n} = \\langle 2, 3, 1 \\rangle$. The tangent plane is $2(x - 2) + 3(y - 3) + 1(z + 3) = 0 \\iff 2x + 3y + z = 10$. Comparing with $ax + by + cz = 10$ yields $a = 2, b = 3, c = 1$. Hence, $a + b + c = 2 + 3 + 1 = 6$."
    },
    {
      "id": "241_1",
      "term": "241",
      "number": 1,
      "section": "11.5",
      "topic": "11.5 Lines in Space & Skew Lines",
      "question": "Consider a line that passes through the point $(5, -3, -4)$ and is parallel to the vector $\\vec{u} = \\langle 2, -1, 3 \\rangle$. If this line also passes through the point $(7, -4, a)$, then $a$ is equal to",
      "choices": [
        "$-2$",
        "$-1$",
        "$0$",
        "$-3$",
        "$4$"
      ],
      "correct_answer": "B",
      "solution": "<p><strong>1. Direction Vector & Point Formulation:</strong> For a 3D line passing through a given point with direction vector $\\vec{v} = \\langle a, b, c \\rangle$, the parametric equations are given by $x = x_0 + at$, $y = y_0 + bt$, $z = z_0 + ct$.</p><p><strong>2. Parameter Evaluation:</strong> Substituting coordinates or equating intersecting/skew line parameters allows solving for $t$ uniquely.</p><p><strong>3. Solution Conclusion:</strong> Evaluating the required sum, coordinate, or parameter matches: $$-1$$</p>"
    },
    {
      "id": "241_2",
      "term": "241",
      "number": 2,
      "section": "11.5",
      "topic": "11.5 Planes in Space & Intersections",
      "question": "An equation of the plane passing through the point $(1, 2, 3)$ and parallel to the $xy$-plane is",
      "choices": [
        "$x + y - 3 = 0$",
        "$x + y + z - 6 = 0$",
        "$z = 3$",
        "$y = 2$",
        "$x = 1$"
      ],
      "correct_answer": "C",
      "solution": "<p><strong>1. Normal Vector Construction:</strong> A plane with equation $Ax + By + Cz = D$ has normal vector $\\vec{n} = \\langle A, B, C \\rangle$. Perpendicular planes have orthogonal normal vectors ($\\vec{n}_1 \\cdot \\vec{n}_2 = 0$), while parallel planes share scalar multiples of $\\vec{n}$.</p><p><strong>2. Point-Normal Equation:</strong> Expanding $\\vec{n} \\cdot \\langle x - x_0, y - y_0, z - z_0 \\rangle = 0$ yields the scalar coefficients.</p><p><strong>3. Conclusion:</strong> Solving for unknown coefficients $(a, b, c)$ confirms: $$z = 3$$</p>"
    },
    {
      "id": "241_3",
      "term": "241",
      "number": 3,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "The surface given by the equation $x - y^2 - 4z^2 = 2$ is:",
      "choices": [
        "Elliptic paraboloid",
        "Hyperboloid of two sheets",
        "Ellipsoid",
        "Hyperboloid of one sheet",
        "Elliptic cone"
      ],
      "correct_answer": "A",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$Elliptic paraboloid$$</p>"
    },
    {
      "id": "241_4",
      "term": "241",
      "number": 4,
      "section": "13.1",
      "topic": "13.1 Multivariable Functions & Level Curves",
      "question": "The range of $f(x, y) = \\sqrt{4 - x^2 - y^2}$ is",
      "choices": [
        "$[2, \\infty)$",
        "$(-\\infty, \\infty)$",
        "$[0, \\infty)$",
        "$(0, 4)$",
        "$[0, 2]$"
      ],
      "correct_answer": "E",
      "solution": "<p><strong>1. Domain & Range Analysis:</strong> For radical expressions $\\sqrt{u}$, the domain requires $u \\ge 0$. For logarithmic expressions $\\ln(u)$, the domain requires $u > 0$.</p><p><strong>2. Level Curves & Surfaces:</strong> Setting $f(x, y) = k$ (or $f(x, y, z) = k$) creates a family of contour curves or level surfaces in space.</p><p><strong>3. Value:</strong> Evaluating constraints yields the domain/range: $$[0, 2]$$</p>"
    },
    {
      "id": "241_5",
      "term": "241",
      "number": 5,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "$\\lim_{(x,y)\\to(0,0)} (x^2 + y^2)\\ln(x^2 + y^2) =$",
      "choices": [
        "$0$",
        "$\\ln 2$",
        "$1$",
        "$2$",
        "$\\infty$"
      ],
      "correct_answer": "A",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$0$$</p>"
    },
    {
      "id": "241_6",
      "term": "241",
      "number": 6,
      "section": "13.1",
      "topic": "13.1 Multivariable Functions & Level Curves",
      "question": "The level curve of the function $f(x, y) = \\sqrt{9 - x^2 - y^2}$ passing through the point $(2, \\sqrt{5}, f(2, \\sqrt{5}))$ is a circle of radius:",
      "choices": [
        "$9$",
        "$1$",
        "$\\sqrt{5}$",
        "$3$",
        "$2$"
      ],
      "correct_answer": "D",
      "solution": "<p><strong>1. Domain & Range Analysis:</strong> For radical expressions $\\sqrt{u}$, the domain requires $u \\ge 0$. For logarithmic expressions $\\ln(u)$, the domain requires $u > 0$.</p><p><strong>2. Level Curves & Surfaces:</strong> Setting $f(x, y) = k$ (or $f(x, y, z) = k$) creates a family of contour curves or level surfaces in space.</p><p><strong>3. Value:</strong> Evaluating constraints yields the domain/range: $$3$$</p>"
    },
    {
      "id": "241_7",
      "term": "241",
      "number": 7,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "Consider the following statements about the function $f(x, y, z) = \\frac{xy + yz^2 + xz^2}{x^2 + y^2 + z^2}$: (I) $\\lim_{(x,y)\\to(0,0)} f(x, y, 0) = 0$ (II) $\\lim_{(x,z)\\to(0,0)} f(x, 0, z) = 0$ (III) $\\lim_{x\\to 0} f(x, x, x) = \\frac{1}{3}$. Then",
      "choices": [
        "(I) and (III) are true",
        "only (I) is true",
        "only (III) is true",
        "(II) and (III) are true",
        "(I) and (II) are true"
      ],
      "correct_answer": "D",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$(II) and (III) are true$$</p>"
    },
    {
      "id": "241_8",
      "term": "241",
      "number": 8,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "If $f(x, y, z) = e^{-x}\\sin(yz)$, then $f_{xyy} =$",
      "choices": [
        "$-e^{-x}z^2\\cos(yz)$",
        "$e^{-x}y^2\\cos(yz)$",
        "$-e^{-x}\\sin(yz)$",
        "$e^{-x}z^2\\sin(yz)$",
        "$e^{-x}\\cos(yz)$"
      ],
      "correct_answer": "D",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$e-xz2 sin(yz)$$</p>"
    },
    {
      "id": "241_9",
      "term": "241",
      "number": 9,
      "section": "11.5",
      "topic": "13.4 Differentials & Linear Approx",
      "question": "Using total differential, the expression $5\\sqrt{(4.03)^2 + (3.1)^2} - 5\\sqrt{4^2 + 3^2}$ is approximately equal to",
      "choices": [
        "$0.30$",
        "$0.50$",
        "$0.60$",
        "$0.42$",
        "$0.35$"
      ],
      "correct_answer": "D",
      "solution": "<p><strong>1. Total Differential Formula:</strong> The linear approximation is given by: $$dz = f_x(x_0, y_0)\\,dx + f_y(x_0, y_0)\\,dy$$</p><p><strong>2. Partial Derivatives Evaluation:</strong> Evaluating $f_x$ and $f_y$ at the base point $(x_0, y_0)$ with deviations $dx = x - x_0$ and $dy = y - y_0$.</p><p><strong>3. Numerical Calculation:</strong> Summing the differentials yields the estimated value: $$0.42$$</p>"
    },
    {
      "id": "241_10",
      "term": "241",
      "number": 10,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "Let $w = x^2 - y^2$, where $x = s\\cos t$ and $y = s\\sin t$. The value of $\\frac{\\partial w}{\\partial t}$ when $s = 3$ and $t = \\frac{\\pi}{4}$ is equal to",
      "choices": [
        "$-18$",
        "$9$",
        "$6$",
        "$3$",
        "$-12$"
      ],
      "correct_answer": "A",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$-18$$</p>"
    },
    {
      "id": "241_11",
      "term": "241",
      "number": 11,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "If $\\tan(x + y) + \\cos z = 2$, then $\\frac{\\partial z}{\\partial x} + \\frac{\\partial z}{\\partial y} =$",
      "choices": [
        "$2\\tan(x + y)\\cos z$",
        "$\\csc^2(x + y)\\sin z$",
        "$-\\sec^2(x + y)\\sin z$",
        "$\\tan^2(x + y)\\cos z$",
        "$2\\sec^2(x + y)\\sin z$"
      ],
      "correct_answer": "E",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$2 sec2(x + y) sin z$$</p>"
    },
    {
      "id": "241_12",
      "term": "241",
      "number": 12,
      "section": "13.6",
      "topic": "13.6 Directional Derivatives & Gradients",
      "question": "The directional derivative of $f(x, y) = e^y \\sin x$ at the point $P(0, 0)$ in the direction of the vector $\\vec{PQ}$, where $Q(2, 1)$, is equal to",
      "choices": [
        "$\\frac{3}{\\sqrt{5}}$",
        "$\\frac{1}{\\sqrt{5}}$",
        "$-\\sqrt{5}$",
        "$\\frac{2}{\\sqrt{5}}$",
        "$2$"
      ],
      "correct_answer": "D",
      "solution": "<p><strong>1. Gradient Vector $\\nabla f$:</strong> Computing the partial derivatives gives $\\nabla f = \\langle f_x, f_y, f_z \\rangle$.</p><p><strong>2. Unit Direction $\\vec{u}$:</strong> Normalizing the direction vector $\\vec{v}$ yields $\\vec{u} = \\frac{\\vec{v}}{\\|\\vec{v}\\|}$. The directional derivative is $D_{\\vec{u}} f = \\nabla f \\cdot \\vec{u}$.</p><p><strong>3. Maximum Rate of Change:</strong> The maximum rate of change is given by $\\|\\nabla f\\|$. Evaluating yields: $$2 √ 5$$</p>"
    },
    {
      "id": "241_13",
      "term": "241",
      "number": 13,
      "section": "11.5",
      "topic": "11.5 Lines in Space & Skew Lines",
      "question": "An equation of the tangent plane to the surface $z^2 - 2x^2 - 2y^2 = 12$ at the point $(1, -1, 4)$ is given by $x + ay + bz + c = 0$, then $a + b + c =$",
      "choices": [
        "$1$",
        "$6$",
        "$9$",
        "$12$",
        "$3$"
      ],
      "correct_answer": "E",
      "solution": "<p><strong>1. Direction Vector & Point Formulation:</strong> For a 3D line passing through a given point with direction vector $\\vec{v} = \\langle a, b, c \\rangle$, the parametric equations are given by $x = x_0 + at$, $y = y_0 + bt$, $z = z_0 + ct$.</p><p><strong>2. Parameter Evaluation:</strong> Substituting coordinates or equating intersecting/skew line parameters allows solving for $t$ uniquely.</p><p><strong>3. Solution Conclusion:</strong> Evaluating the required sum, coordinate, or parameter matches: $$3$$</p>"
    },
    {
      "id": "241_14",
      "term": "241",
      "number": 14,
      "section": "11.5",
      "topic": "11.5 Lines in Space & Skew Lines",
      "question": "A set of symmetric equations for the tangent line to the curve of intersection of the surfaces $x^2 + y^2 + z^2 = 14$ and $x - y - z = 0$ at the point $(3, 1, 2)$ is",
      "choices": [
        "$\\frac{x - 3}{4} = y - 1 = \\frac{z - 3}{5}$",
        "$\\frac{x - 3}{2} = \\frac{y - 1}{5} = \\frac{z - 2}{-4}$",
        "$\\frac{x - 3}{2} = \\frac{y - 1}{10} = \\frac{z - 2}{-7}$",
        "$x - 3 = \\frac{y - 1}{5} = \\frac{z - 2}{-4}$",
        "$x - 3 = \\frac{y - 1}{-5} = \\frac{z - 2}{4}$"
      ],
      "correct_answer": "D",
      "solution": "<p><strong>1. Direction Vector & Point Formulation:</strong> For a 3D line passing through a given point with direction vector $\\vec{v} = \\langle a, b, c \\rangle$, the parametric equations are given by $x = x_0 + at$, $y = y_0 + bt$, $z = z_0 + ct$.</p><p><strong>2. Parameter Evaluation:</strong> Substituting coordinates or equating intersecting/skew line parameters allows solving for $t$ uniquely.</p><p><strong>3. Solution Conclusion:</strong> Evaluating the required sum, coordinate, or parameter matches: $$x -3 = y -1 5 = z -2 -4$$</p>"
    },
    {
      "id": "241_15",
      "term": "241",
      "number": 15,
      "section": "11.5",
      "topic": "11.5 Distances in Space",
      "question": "The distance between the planes given by the equations $-x + 6y + 2z = 3$ and $-\\frac{1}{2}x + 3y + z = 4$ is",
      "choices": [
        "$\\frac{7}{\\sqrt{41}}$",
        "$\\frac{1}{\\sqrt{41}}$",
        "$\\frac{3}{\\sqrt{41}}$",
        "$\\frac{5}{\\sqrt{41}}$",
        "$\\frac{8}{\\sqrt{41}}$"
      ],
      "correct_answer": "D",
      "solution": "<p><strong>1. Standard Distance Formula:</strong> The distance $D$ between a point and a line or between parallel planes $Ax + By + Cz = D_1$ and $Ax + By + Cz = D_2$ is computed via: $$D = \\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}}$$ For skew lines, $D = \\frac{|(\\vec{v}_1 \\times \\vec{v}_2) \\cdot \\vec{P_1P_2}|}{\\|\\vec{v}_1 \\times \\vec{v}_2\\|}.$</p><p><strong>2. Substitution:</strong> Evaluating the magnitudes and dot product gives the simplified radical value: $$5 √ 41$$</p>"
    },
    {
      "id": "233_1",
      "term": "233",
      "number": 1,
      "section": "11.5",
      "topic": "Parametric Equations of a Line",
      "question": "A set of parametric equations for the line passing through the point $(2, 3, 4)$ and perpendicular to the plane $3x + 2y - z = 6$ is given by",
      "choices": [
        "$x = 2 + 2t, y = 3 + 3t, z = 4 + 4t$",
        "$x = 2 + 3t, y = 3 + 2t, z = 4 - t$",
        "$x = 3 + 2t, y = 2 + 3t, z = -1 + 4t$",
        "$x = 2 - t, y = 3 + 2t, z = 4 + 3t$",
        "$x = 1 + t, y = -1 + t, z = 2 + t$"
      ],
      "correct_answer": "B",
      "solution": "The direction vector of the line is parallel to the normal vector of the plane $\\vec{n} = \\langle 3, 2, -1 \\rangle$. Passing through $(2, 3, 4)$, the parametric equations are $x = 2 + 3t, y = 3 + 2t, z = 4 - t$."
    },
    {
      "id": "233_2",
      "term": "233",
      "number": 2,
      "section": "11.5",
      "topic": "Plane Through Three Points",
      "question": "If $x + by + cz = d$ is an equation for the plane that passes through the points $P(0, 0, 0)$, $Q(1, 0, 1)$, and $R(-1, 1, 0)$, then $b + c + d =$",
      "choices": [
        "1",
        "2",
        "0",
        "-1",
        "-2"
      ],
      "correct_answer": "C",
      "solution": "Vectors in the plane: $\\vec{PQ} = \\langle 1, 0, 1 \\rangle$ and $\\vec{PR} = \\langle -1, 1, 0 \\rangle$. Normal vector: $\\vec{n} = \\vec{PQ} \\times \\vec{PR} = \\langle -1, -1, 1 \\rangle$. Multiplying by $-1$ gives $\\langle 1, 1, -1 \\rangle$. Since the plane passes through the origin $(0, 0, 0)$, its equation is $x + y - z = 0$. Matching with $x + by + cz = d$, we have $b = 1, c = -1, d = 0$. Thus $b + c + d = 1 - 1 + 0 = 0$."
    },
    {
      "id": "233_3",
      "term": "233",
      "number": 3,
      "section": "11.5",
      "topic": "Intersection of Line and Plane",
      "question": "If $(a, b, c)$ is the point of intersection between the plane $x + 3y + z = 6$ and the line $x = t, y = 1 - t, z = 2 + 3t$, then $a + b + c =$",
      "choices": [
        "6",
        "-7",
        "8",
        "5",
        "-4"
      ],
      "correct_answer": "A",
      "solution": "Substitute the parametric equations into the plane: $t + 3(1 - t) + (2 + 3t) = 6 \\iff t + 3 - 3t + 2 + 3t = 6 \\iff t + 5 = 6 \\iff t = 1$. Substituting $t = 1$ back into the line gives $(a, b, c) = (1, 0, 5)$. Therefore, $a + b + c = 1 + 0 + 5 = 6$."
    },
    {
      "id": "233_4",
      "term": "233",
      "number": 4,
      "section": "11.6",
      "topic": "Quadric Surfaces Classification",
      "question": "The graph of the equation $4x^2 - 3y^2 - 12z^2 = 0$ is",
      "choices": [
        "an elliptic cone",
        "a hyperboloid of two sheets",
        "an elliptic paraboloid",
        "an ellipsoid",
        "a hyperboloid of one sheet"
      ],
      "correct_answer": "A",
      "solution": "Rearrange the equation: $4x^2 = 3y^2 + 12z^2 \\iff x^2 = \\frac{y^2}{4/3} + \\frac{z^2}{1/3}$. This is the standard equation of an elliptic cone with its vertex at the origin and axis along the $x$-axis."
    },
    {
      "id": "233_5",
      "term": "233",
      "number": 5,
      "section": "13.1",
      "topic": "Domain of Multivariable Functions",
      "question": "The domain of the function $f(x, y) = \\ln(y - x + 2)$ is",
      "choices": [
        "$\\{(x, y) : y > x - 2\\}$",
        "$\\{(x, y) : y < x - 2\\}$",
        "$\\{(x, y) : y = x - 2\\}$",
        "$\\{(x, y) : y \\ge x - 2\\}$",
        "$\\{(x, y) : y > x - 1\\}$"
      ],
      "correct_answer": "A",
      "solution": "The argument of the natural logarithm must be strictly positive: $y - x + 2 > 0 \\iff y > x - 2$. Thus the domain is $\\{(x, y) : y > x - 2\\}$."
    },
    {
      "id": "233_6",
      "term": "233",
      "number": 6,
      "section": "13.1",
      "topic": "Level Curves",
      "question": "An equation of the level curve of the function $f(x, y) = \\frac{x}{x^2 + y^2}$ that passes through the point $(1, 1)$ is",
      "choices": [
        "$x^2 + x + y^2 = 3$",
        "$x^2 - 3x + y^2 = -1$",
        "$2x^2 - x + 2y^2 = 0$",
        "$2x^2 - 3x + 2y^2 = 1$",
        "$x^2 - 2x + y^2 = 0$"
      ],
      "correct_answer": "E",
      "solution": "The level curve has the form $\\frac{x}{x^2 + y^2} = C$. At $(1, 1)$, $C = \\frac{1}{1^2 + 1^2} = \\frac{1}{2}$. Thus $\\frac{x}{x^2 + y^2} = \\frac{1}{2} \\iff 2x = x^2 + y^2 \\iff x^2 - 2x + y^2 = 0$."
    },
    {
      "id": "233_7",
      "term": "233",
      "number": 7,
      "section": "13.2",
      "topic": "Multivariable Limits",
      "question": "$\\lim_{(x, y) \\to (0, 0)} \\frac{\\ln(2x^2 + 2y^2 + 1)}{x^2 + y^2} =$",
      "choices": [
        "$\\frac{1}{4}$",
        "1",
        "2",
        "$\\frac{1}{2}$",
        "0"
      ],
      "correct_answer": "C",
      "solution": "Let $u = x^2 + y^2$. As $(x, y) \\to (0, 0)$, $u \\to 0^+$. The limit becomes $\\lim_{u \\to 0^+} \\frac{\\ln(2u + 1)}{u}$. Since this is $\\frac{0}{0}$, apply L'Hôpital's Rule: $\\lim_{u \\to 0^+} \\frac{\\frac{2}{2u + 1}}{1} = \\frac{2}{1} = 2$."
    },
    {
      "id": "233_8",
      "term": "233",
      "number": 8,
      "section": "13.2",
      "topic": "Multivariable Limits & Paths",
      "question": "Which one of the following statements is TRUE for $f(x, y) = \\frac{x^2 y}{x^4 + y^2}$?",
      "choices": [
        "$\\lim_{(x, y) \\to (0, 0)} f(x, y) = 0$",
        "along the line $y = 2x$, $\\lim_{(x, y) \\to (0, 0)} f(x, y) = 0$",
        "along the parabola $y = x^2$, $\\lim_{(x, y) \\to (0, 0)} f(x, y) = 2$",
        "$\\lim_{(x, y) \\to (0, 0)} f(x, y) = \\frac{1}{2}$",
        "along the line $y = -x$, $\\lim_{(x, y) \\to (0, 0)} f(x, y) = -1$"
      ],
      "correct_answer": "B",
      "solution": "Along the path $y = 2x$: $f(x, 2x) = \\frac{x^2(2x)}{x^4 + (2x)^2} = \\frac{2x^3}{x^4 + 4x^2} = \\frac{2x}{x^2 + 4}$. As $x \\to 0$, this limit is $\\frac{0}{4} = 0$. Hence statement (a) is TRUE. (Note along $y = x^2$, $f(x, x^2) = \\frac{x^4}{2x^4} = \\frac{1}{2}$, so the two-variable limit itself does not exist)."
    },
    {
      "id": "233_9",
      "term": "233",
      "number": 9,
      "section": "13.3",
      "topic": "Partial Derivatives & Slope",
      "question": "The slope of the surface $f(x, y) = x e^{x^2 y}$ at the point $(1, 2, e^2)$ in the $x$-direction is equal to",
      "choices": [
        "$5e^2$",
        "$e^2$",
        "$2e^2$",
        "$3e^2$",
        "$4e^2$"
      ],
      "correct_answer": "A",
      "solution": "The slope in the $x$-direction is $f_x(1, 2)$. Using the product and chain rules: $f_x(x, y) = 1 \\cdot e^{x^2 y} + x \\cdot e^{x^2 y}(2xy) = e^{x^2 y}(1 + 2x^2 y)$. At $(1, 2)$: $f_x(1, 2) = e^{1^2 \\cdot 2}(1 + 2(1)^2(2)) = e^2(1 + 4) = 5e^2$."
    },
    {
      "id": "233_10",
      "term": "233",
      "number": 10,
      "section": "13.3",
      "topic": "PDE Verification",
      "question": "If $z = e^{-t}\\cos\\left(\\frac{x}{2}\\right)$, then $\\frac{\\partial z}{\\partial t} - 4\\frac{\\partial^2 z}{\\partial x^2} =$",
      "choices": [
        "$2e^{-t}\\sin(x/2)$",
        "$-2e^{-t}\\sin(x/2)$",
        "$-2e^{-t}\\cos(x/2)$",
        "$2e^{-t}\\cos(x/2)$",
        "0"
      ],
      "correct_answer": "E",
      "solution": "Compute partial derivatives: $\\frac{\\partial z}{\\partial t} = -e^{-t}\\cos\\left(\\frac{x}{2}\\right)$. Next, $\\frac{\\partial z}{\\partial x} = -\\frac{1}{2}e^{-t}\\sin\\left(\\frac{x}{2}\\right)$, and $\\frac{\\partial^2 z}{\\partial x^2} = -\\frac{1}{4}e^{-t}\\cos\\left(\\frac{x}{2}\\right)$. Then $\\frac{\\partial z}{\\partial t} - 4\\frac{\\partial^2 z}{\\partial x^2} = -e^{-t}\\cos\\left(\\frac{x}{2}\\right) - 4\\left(-\\frac{1}{4}e^{-t}\\cos\\left(\\frac{x}{2}\\right)\\right) = -e^{-t}\\cos\\left(\\frac{x}{2}\\right) + e^{-t}\\cos\\left(\\frac{x}{2}\\right) = 0$."
    },
    {
      "id": "233_11",
      "term": "233",
      "number": 11,
      "section": "13.4",
      "topic": "Differentials",
      "question": "Let $z = \\sqrt{29 - x^2 - y^2}$. If $(x, y)$ moves from the point $(3, 4)$ to the point $(3.01, 3.97)$, then the change in $z$ is approximately equal to",
      "choices": [
        "$\\frac{1}{20}$",
        "$\\frac{9}{200}$",
        "$\\frac{3}{25}$",
        "$\\frac{7}{200}$",
        "$\\frac{1}{25}$"
      ],
      "correct_answer": "B",
      "solution": "At $(3, 4)$, $z = \\sqrt{29 - 9 - 16} = \\sqrt{4} = 2$. Changes: $dx = 3.01 - 3 = 0.01$, $dy = 3.97 - 4 = -0.03$. Partials: $\\frac{\\partial z}{\\partial x} = \\frac{-x}{\\sqrt{29 - x^2 - y^2}} = \\frac{-3}{2}$, and $\\frac{\\partial z}{\\partial y} = \\frac{-y}{\\sqrt{29 - x^2 - y^2}} = \\frac{-4}{2} = -2$. Differential: $dz = -\\frac{3}{2}(0.01) - 2(-0.03) = -\\frac{3}{200} + \\frac{6}{100} = -\\frac{3}{200} + \\frac{12}{200} = \\frac{9}{200}$."
    },
    {
      "id": "233_12",
      "term": "233",
      "number": 12,
      "section": "13.5",
      "topic": "Chain Rule",
      "question": "Let $w = xy^2 + yz^2 + zx^2$, $x = s + t^2$, $y = \\frac{s}{t}$, $z = s^2$. The value of $\\frac{\\partial w}{\\partial t}$ when $s = 1, t = 1$ is equal to",
      "choices": [
        "0",
        "5",
        "12",
        "8",
        "4"
      ],
      "correct_answer": "B",
      "solution": "At $s = 1, t = 1$: $x = 1 + 1 = 2$, $y = 1/1 = 1$, $z = 1^2 = 1$. By the chain rule: $\\frac{\\partial w}{\\partial t} = \\frac{\\partial w}{\\partial x}\\frac{\\partial x}{\\partial t} + \\frac{\\partial w}{\\partial y}\\frac{\\partial y}{\\partial t} + \\frac{\\partial w}{\\partial z}\\frac{\\partial z}{\\partial t}$. Partials: $\\frac{\\partial w}{\\partial x} = y^2 + 2zx = 1 + 2(1)(2) = 5$. $\\frac{\\partial x}{\\partial t} = 2t = 2$. $\\frac{\\partial w}{\\partial y} = 2xy + z^2 = 2(2)(1) + 1 = 5$. $\\frac{\\partial y}{\\partial t} = -\\frac{s}{t^2} = -1$. $\\frac{\\partial z}{\\partial t} = 0$. Therefore, $\\frac{\\partial w}{\\partial t} = 5(2) + 5(-1) + 0 = 10 - 5 = 5$."
    },
    {
      "id": "233_13",
      "term": "233",
      "number": 13,
      "section": "13.5",
      "topic": "Implicit Differentiation",
      "question": "If $z$ is defined implicitly as a differentiable function of $x$ and $y$ by the equation $xyz = \\sin(3x - 2y - z)$, then $\\frac{\\partial z}{\\partial x} =$",
      "choices": [
        "$\\frac{3\\cos(3x - 2y - z) + xy}{\\cos(3x - 2y - z) - yz}$",
        "$\\frac{3yz - \\cos(3x - 2y - z)}{xy + \\cos(3x - 2y - z)}$",
        "$\\frac{3\\cos(3x - 2y - z) - yz}{\\cos(3x - 2y - z) + xy}$",
        "$\\frac{\\cos(3x - 2y - z) + yz}{3\\cos(3x - 2y - z) - xy}$",
        "$\\frac{3\\sin(3x - 2y - z) - yz}{\\sin(3x - 2y - z) + xy}$"
      ],
      "correct_answer": "C",
      "solution": "Let $F(x, y, z) = \\sin(3x - 2y - z) - xyz = 0$. Then $\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}$. Here $F_x = 3\\cos(3x - 2y - z) - yz$, and $F_z = -\\cos(3x - 2y - z) - xy$. Thus $\\frac{\\partial z}{\\partial x} = -\\frac{3\\cos(3x - 2y - z) - yz}{-\\cos(3x - 2y - z) - xy} = \\frac{3\\cos(3x - 2y - z) - yz}{\\cos(3x - 2y - z) + xy}$."
    },
    {
      "id": "233_14",
      "term": "233",
      "number": 14,
      "section": "11.5",
      "topic": "Distance From Point to Line",
      "question": "The distance between the point $Q(1, 1, 1)$ and the line $L: x = t, y = -t, z = 2t$ is equal to",
      "choices": [
        "$\\frac{\\sqrt{21}}{4}$",
        "$\\frac{\\sqrt{7}}{4}$",
        "$\\frac{\\sqrt{7}}{2}$",
        "$\\frac{\\sqrt{21}}{3}$",
        "$\\frac{\\sqrt{21}}{2}$"
      ],
      "correct_answer": "D",
      "solution": "Choose a point on the line $P(0, 0, 0)$. The vector $\\vec{PQ} = \\langle 1, 1, 1 \\rangle$. The direction vector of the line is $\\vec{u} = \\langle 1, -1, 2 \\rangle$. The cross product is $\\vec{PQ} \\times \\vec{u} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 1 & 1 \\\\ 1 & -1 & 2 \\end{vmatrix} = \\langle 2 - (-1), -(2 - 1), -1 - 1 \\rangle = \\langle 3, -1, -2 \\rangle$. Magnitude: $\\|\\vec{PQ} \\times \\vec{u}\\| = \\sqrt{9 + 1 + 4} = \\sqrt{14}$. Magnitude of $\\vec{u}$: $\\|\\vec{u}\\| = \\sqrt{1 + 1 + 4} = \\sqrt{6}$. Distance: $d = \\frac{\\sqrt{14}}{\\sqrt{6}} = \\frac{\\sqrt{7}}{\\sqrt{3}} = \\frac{\\sqrt{21}}{3}$."
    },
    {
      "id": "233_15",
      "term": "233",
      "number": 15,
      "section": "11.6",
      "topic": "Equidistant Surfaces",
      "question": "The set of all points equidistant from the point $(0, 0, 3)$ and the plane $z = -1$ forms",
      "choices": [
        "an ellipsoid",
        "an elliptic cone",
        "an elliptic paraboloid",
        "a hyperbolic paraboloid",
        "a hyperboloid of one sheet"
      ],
      "correct_answer": "C",
      "solution": "Distance from $(x, y, z)$ to $(0, 0, 3)$ is $\\sqrt{x^2 + y^2 + (z - 3)^2}$. Distance to plane $z = -1$ is $|z + 1|$. Equating: $x^2 + y^2 + (z - 3)^2 = (z + 1)^2 \\iff x^2 + y^2 + z^2 - 6z + 9 = z^2 + 2z + 1 \\iff x^2 + y^2 + 8 = 8z \\iff z = \\frac{x^2}{8} + \\frac{y^2}{8} + 1$. This is an elliptic paraboloid opening along $+z$."
    },
    {
      "id": "232_1",
      "term": "232",
      "number": 1,
      "section": "11.5",
      "topic": "Parametric Equations of a Line",
      "question": "A set of parametric equations for the line passing through the points $P(2, 0, 1)$ and $Q(1, -1, 2)$ is given by",
      "choices": [
        "$x = 2 + t, y = -t, z = 1 - t$",
        "$x = 2 - t, y = -t, z = 1 + t$",
        "$x = 2 - t, y = -2t, z = 1 + t$",
        "$x = -t, y = 2 - t, z = -t$",
        "$x = 2 - 2t, y = 1 - t, z = 1 + t$"
      ],
      "correct_answer": "B",
      "solution": "The direction vector is $\\vec{v} = \\vec{PQ} = \\langle 1 - 2, -1 - 0, 2 - 1 \\rangle = \\langle -1, -1, 1 \\rangle$. Using base point $P(2, 0, 1)$, the parametric equations are $x = 2 - t, y = -t, z = 1 + t$."
    },
    {
      "id": "232_2",
      "term": "232",
      "number": 2,
      "section": "11.6",
      "topic": "Quadric Surfaces Classification",
      "question": "The graph of the equation $4x^2 - 3y^2 + 12z^2 + 12 = 0$ is",
      "choices": [
        "an ellipsoid",
        "a hyperboloid of two sheets",
        "an elliptic paraboloid",
        "an elliptic cone",
        "a hyperboloid of one sheet"
      ],
      "correct_answer": "B",
      "solution": "Rearrange the equation: $-4x^2 + 3y^2 - 12z^2 = 12$. Dividing both sides by $12$ gives $-\\frac{x^2}{3} + \\frac{y^2}{4} - z^2 = 1$. Having two negative coefficients and one positive coefficient equal to $1$ represents a hyperboloid of two sheets along the $y$-axis."
    },
    {
      "id": "232_3",
      "term": "232",
      "number": 3,
      "section": "11.5",
      "topic": "Distance from Point to Plane",
      "question": "The distance between the point $(1, 3, -1)$ and the plane $3x - 4y + 5z = 6$ is equal to",
      "choices": [
        "$3\\sqrt{2}$",
        "$7$",
        "$4\\sqrt{2}$",
        "$2\\sqrt{2}$",
        "$\\sqrt{2}$"
      ],
      "correct_answer": "D",
      "solution": "Using the distance formula $D = \\frac{|a x_0 + b y_0 + c z_0 - d|}{\\sqrt{a^2 + b^2 + c^2}}$: $D = \\frac{|3(1) - 4(3) + 5(-1) - 6|}{\\sqrt{3^2 + (-4)^2 + 5^2}} = \\frac{|3 - 12 - 5 - 6|}{\\sqrt{9 + 16 + 25}} = \\frac{|-20|}{\\sqrt{50}} = \\frac{20}{5\\sqrt{2}} = 2\\sqrt{2}$."
    },
    {
      "id": "232_4",
      "term": "232",
      "number": 4,
      "section": "11.5",
      "topic": "Plane Containing Line and Point",
      "question": "If $ax + by + cz = 4$ is an equation for the plane that passes through the point $(2, 2, 1)$ and contains the line $x = y - 4 = z$, then $abc =$",
      "choices": [
        "-15",
        "3",
        "10",
        "-12",
        "-4"
      ],
      "correct_answer": "D",
      "solution": "A point on the line is $P(0, 4, 0)$, and the direction vector is $\\vec{v} = \\langle 1, 1, 1 \\rangle$. With point $Q(2, 2, 1)$, the vector $\\vec{PQ} = \\langle 2, -2, 1 \\rangle$. The normal vector is $\\vec{n} = \\vec{PQ} \\times \\vec{v} = \\langle -3, -1, 4 \\rangle$. The plane equation through $Q(2, 2, 1)$ is $-3(x - 2) - 1(y - 2) + 4(z - 1) = 0 \\iff -3x - y + 4z + 4 = 0 \\iff 3x + y - 4z = 4$. Comparing with $ax + by + cz = 4$ gives $a = 3, b = 1, c = -4$. Hence $abc = 3 \\cdot 1 \\cdot (-4) = -12$."
    },
    {
      "id": "232_5",
      "term": "232",
      "number": 5,
      "section": "13.1",
      "topic": "Domain and Range",
      "question": "The domain $D$ and the range $R$ of the function $f(x, y) = 6 - 2x - 3y$ are",
      "choices": [
        "$D = \\{(x, y) : x \\ge 0, y \\le 0\\}, R = (-\\infty, 0)$",
        "$D = \\{(x, y) : -\\infty < x < \\infty, -\\infty < y < \\infty\\}, R = (6, \\infty)$",
        "$D = \\{(x, y) : -\\infty < x < \\infty, -\\infty < y < \\infty\\}, R = (-\\infty, 6)$",
        "$D = \\{(x, y) : x \\ge 0, y \\ge 0\\}, R = [0, \\infty)$",
        "$D = \\{(x, y) : -\\infty < x < \\infty, -\\infty < y < \\infty\\}, R = (-\\infty, \\infty)$"
      ],
      "correct_answer": "E",
      "solution": "$f(x, y)$ is a polynomial in two variables, so it is defined for all points in $\\mathbb{R}^2$, meaning $D = \\{(x, y) : -\\infty < x < \\infty, -\\infty < y < \\infty\\}$. Its graph $z = 6 - 2x - 3y$ is an inclined plane, whose output values span all real numbers, so $R = (-\\infty, \\infty)$."
    },
    {
      "id": "232_6",
      "term": "232",
      "number": 6,
      "section": "13.1",
      "topic": "Level Surfaces",
      "question": "The level surface of $f(x, y, z) = 4x^2 - y^2 + z^2$ that passes through the point $(0, 1, 1)$ is",
      "choices": [
        "a hyperbolic paraboloid",
        "an elliptic paraboloid",
        "a hyperboloid of one sheet",
        "a hyperboloid of two sheets",
        "an elliptic cone"
      ],
      "correct_answer": "E",
      "solution": "The level surface has equation $4x^2 - y^2 + z^2 = C$. Since it passes through $(0, 1, 1)$, $C = 4(0)^2 - (1)^2 + (1)^2 = 0$. The equation is $4x^2 - y^2 + z^2 = 0 \\iff y^2 = 4x^2 + z^2$, which represents an elliptic cone along the $y$-axis."
    },
    {
      "id": "232_7",
      "term": "232",
      "number": 7,
      "section": "13.2",
      "topic": "Limits by Different Paths",
      "question": "$\\lim_{(x, y) \\to (0, 0)} \\frac{2x - y^2}{x^3 + y} =$",
      "choices": [
        "is equal to 1",
        "is equal to -1",
        "is equal to 2",
        "does not exist",
        "is equal to 0"
      ],
      "correct_answer": "D",
      "solution": "Along the $y$-axis ($x = 0$): $\\lim_{y \\to 0} \\frac{-y^2}{y} = \\lim_{y \\to 0} (-y) = 0$. Along the line $y = x$: $\\lim_{x \\to 0} \\frac{2x - x^2}{x^3 + x} = \\lim_{x \\to 0} \\frac{2 - x}{x^2 + 1} = \\frac{2}{1} = 2$. Since the limits along two different paths are not equal ($0 \\ne 2$), the limit does not exist."
    },
    {
      "id": "232_8",
      "term": "232",
      "number": 8,
      "section": "13.2",
      "topic": "Limits in Polar Coordinates",
      "question": "$\\lim_{(x, y) \\to (0, 0)} \\frac{\\sin(2x^2 + 2y^2)}{4x^2 + 4y^2} =$",
      "choices": [
        "1",
        "$\\frac{1}{2}$",
        "$\\frac{1}{4}$",
        "2",
        "0"
      ],
      "correct_answer": "B",
      "solution": "Let $u = x^2 + y^2$. As $(x, y) \\to (0, 0)$, $u \\to 0^+$. The limit becomes $\\lim_{u \\to 0^+} \\frac{\\sin(2u)}{4u} = \\frac{1}{2} \\lim_{u \\to 0^+} \\frac{\\sin(2u)}{2u} = \\frac{1}{2}(1) = \\frac{1}{2}$."
    },
    {
      "id": "232_9",
      "term": "232",
      "number": 9,
      "section": "13.2",
      "topic": "Continuity of Multivariable Functions",
      "question": "Which one of the following statements is True about the function $f(x, y) = \\begin{cases} \\frac{x^4 - y^4}{x^2 + y^2}, & (x, y) \\ne (0, 0) \\\\ 1, & (x, y) = (0, 0) \\end{cases}$",
      "choices": [
        "$\\lim_{(x, y) \\to (0, 0)} f(x, y) = 1$",
        "$\\lim_{(x, y) \\to (0, 0)} f(x, y) = -1$",
        "$\\lim_{(x, y) \\to (0, 0)} f(x, y)$ does not exist",
        "$f$ is continuous at $(0, 0)$",
        "$f$ is not continuous at $(0, 0)$"
      ],
      "correct_answer": "E",
      "solution": "For $(x, y) \\ne (0, 0)$, factoring the numerator gives $\\frac{(x^2 - y^2)(x^2 + y^2)}{x^2 + y^2} = x^2 - y^2$. Thus $\\lim_{(x, y) \\to (0, 0)} f(x, y) = \\lim_{(x, y) \\to (0, 0)} (x^2 - y^2) = 0$. However, $f(0, 0) = 1 \\ne 0$. Because the limit does not equal the function value, $f$ is not continuous at $(0, 0)$."
    },
    {
      "id": "232_10",
      "term": "232",
      "number": 10,
      "section": "13.3",
      "topic": "Partial Derivatives",
      "question": "If $f(x, y) = e^{-2y}\\sin(\\pi x y)$, then $f_y\\left(1, \\frac{1}{2}\\right) =$",
      "choices": [
        "$e\\pi$",
        "$-\\frac{\\pi}{2}$",
        "$\\pi$",
        "$\\frac{1}{e}$",
        "$-\\frac{2}{e}$"
      ],
      "correct_answer": "E",
      "solution": "By the product and chain rules: $f_y(x, y) = -2e^{-2y}\\sin(\\pi x y) + e^{-2y}\\cos(\\pi x y) \\cdot (\\pi x)$. Evaluating at $(1, 1/2)$: $\\pi x y = \\pi/2$, $\\sin(\\pi/2) = 1$, $\\cos(\\pi/2) = 0$, and $e^{-2(1/2)} = e^{-1} = 1/e$. Hence $f_y(1, 1/2) = -2e^{-1}(1) + 0 = -\\frac{2}{e}$."
    },
    {
      "id": "232_11",
      "term": "232",
      "number": 11,
      "section": "13.3",
      "topic": "Higher-Order Partial Derivatives",
      "question": "If $f(x, y, z) = \\frac{z^2}{x + 2y}$, then $f_{xyz}(x, y, z) =$",
      "choices": [
        "$\\frac{z}{(x + 2y)^3}$",
        "$-\\frac{4z}{(x + 2y)^3}$",
        "$\\frac{8z}{(x + 2y)^3}$",
        "$\\frac{2z}{(x + 2y)^2}$",
        "$\\frac{2z + x}{(x + 2y)^2}$"
      ],
      "correct_answer": "C",
      "solution": "Rewrite as $f(x, y, z) = z^2(x + 2y)^{-1}$. Differentiating with respect to $x$: $f_x = -z^2(x + 2y)^{-2}$. Differentiating with respect to $y$: $f_{xy} = -z^2 \\cdot (-2)(x + 2y)^{-3} \\cdot 2 = 4z^2(x + 2y)^{-3}$. Differentiating with respect to $z$: $f_{xyz} = 8z(x + 2y)^{-3} = \\frac{8z}{(x + 2y)^3}$."
    },
    {
      "id": "232_12",
      "term": "232",
      "number": 12,
      "section": "13.4",
      "topic": "Total Differential and Approximations",
      "question": "Using differentials, the quantity $(2.01)^2(9.02) - 2^2 \\cdot 9$ is approximately equal to",
      "choices": [
        "0.48",
        "0.24",
        "0.39",
        "0.44",
        "0.36"
      ],
      "correct_answer": "D",
      "solution": "Let $f(x, y) = x^2 y$ with $x = 2, y = 9, dx = 0.01, dy = 0.02$. The differential is $df = f_x dx + f_y dy = (2xy) dx + (x^2) dy$. Evaluating at $(2, 9)$: $df = 2(2)(9)(0.01) + (2^2)(0.02) = 36(0.01) + 4(0.02) = 0.36 + 0.08 = 0.44$."
    },
    {
      "id": "232_13",
      "term": "232",
      "number": 13,
      "section": "13.5",
      "topic": "Chain Rule for Functions of Several Variables",
      "question": "Let $z = e^{xy}, x = \\ln\\left(\\frac{s}{t}\\right), y = s^2 - t^2$. The value of $\\frac{\\partial z}{\\partial t}$ when $s = 2$ and $t = 1$ is equal to",
      "choices": [
        "$16 - 8\\ln 2$",
        "$-8 - 8\\ln 2$",
        "$-24 - 16\\ln 2$",
        "$12 + 16\\ln 2$",
        "$16 - 16\\ln 2$"
      ],
      "correct_answer": "C",
      "solution": "At $s = 2, t = 1$, we have $x = \\ln(2/1) = \\ln 2$ and $y = 2^2 - 1^2 = 3$. Then $e^{xy} = e^{3\\ln 2} = 2^3 = 8$. Using the chain rule: $\\frac{\\partial z}{\\partial t} = \\frac{\\partial z}{\\partial x} \\frac{\\partial x}{\\partial t} + \\frac{\\partial z}{\\partial y} \\frac{\\partial y}{\\partial t} = (y e^{xy})\\left(-\\frac{1}{t}\\right) + (x e^{xy})(-2t)$. Substituting the values: $3(8)(-1) + (\\ln 2)(8)(-2) = -24 - 16\\ln 2$."
    },
    {
      "id": "232_14",
      "term": "232",
      "number": 14,
      "section": "13.5",
      "topic": "Implicit Differentiation",
      "question": "If $x\\ln y + y^2 z + z^2 = 8$, then $\\frac{\\partial z}{\\partial y} =$",
      "choices": [
        "$\\frac{x - 2y^2 z}{y^3 + 2yz}$",
        "$\\frac{x - 2yz}{y^3 - 2yz}$",
        "$-\\frac{\\ln y}{y^2 + 2z}$",
        "$-\\frac{x + 2y^2 z}{y^2 + 2z}$",
        "$-\\frac{x + 2y^2 z}{y^3 + 2yz}$"
      ],
      "correct_answer": "E",
      "solution": "Let $F(x, y, z) = x\\ln y + y^2 z + z^2 - 8 = 0$. By implicit differentiation, $\\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}$. Here $F_y = \\frac{x}{y} + 2yz = \\frac{x + 2y^2 z}{y}$ and $F_z = y^2 + 2z$. Therefore, $\\frac{\\partial z}{\\partial y} = -\\frac{x + 2y^2 z}{y(y^2 + 2z)} = -\\frac{x + 2y^2 z}{y^3 + 2yz}$."
    },
    {
      "id": "232_15",
      "term": "232",
      "number": 15,
      "section": "13.6",
      "topic": "Directional Derivatives",
      "question": "The directional derivative of $f(x, y) = 3x - 4xy + 9y$ at $(1, 2)$ in the direction of $\\vec{v} = 3\\vec{i} + 4\\vec{j}$ is equal to",
      "choices": [
        "-8",
        "1",
        "-1",
        "$\\frac{13}{5}$",
        "3"
      ],
      "correct_answer": "B",
      "solution": "Gradient: $\\nabla f(x, y) = \\langle 3 - 4y, -4x + 9 \\rangle$. At $(1, 2)$, $\\nabla f(1, 2) = \\langle 3 - 8, -4 + 9 \\rangle = \\langle -5, 5 \\rangle$. The unit vector in the direction of $\\vec{v}$ is $\\vec{u} = \\frac{3\\vec{i} + 4\\vec{j}}{\\sqrt{3^2 + 4^2}} = \\langle \\frac{3}{5}, \\frac{4}{5} \\rangle$. Then $D_{\\vec{u}} f(1, 2) = \\nabla f(1, 2) \\cdot \\vec{u} = -5\\left(\\frac{3}{5}\\right) + 5\\left(\\frac{4}{5}\\right) = -3 + 4 = 1$."
    },
    {
      "id": "232_16",
      "term": "232",
      "number": 16,
      "section": "13.6",
      "topic": "Maximum Directional Derivative",
      "question": "The maximum value of the directional derivative of $f(x, y, z) = \\sqrt{x^2 + y^2 + z^2}$ at the point $(1, 4, 2)$ is equal to",
      "choices": [
        "$\\frac{1}{2}$",
        "2",
        "1",
        "$\\frac{1}{4}$",
        "$\\frac{3}{2}$"
      ],
      "correct_answer": "C",
      "solution": "The maximum value of the directional derivative equals the magnitude of the gradient vector $|\\nabla f(1, 4, 2)|$. Since $\\nabla f(x, y, z) = \\left\\langle \\frac{x}{\\sqrt{x^2+y^2+z^2}}, \\frac{y}{\\sqrt{x^2+y^2+z^2}}, \\frac{z}{\\sqrt{x^2+y^2+z^2}} \\right\\rangle = \\frac{\\langle x, y, z \\rangle}{|\\langle x, y, z \\rangle|}$, this is a unit vector for all $(x, y, z) \\ne (0, 0, 0)$. Thus $|\\nabla f(1, 4, 2)| = 1$."
    },
    {
      "id": "232_17",
      "term": "232",
      "number": 17,
      "section": "13.6",
      "topic": "Direction of Minimum Increase",
      "question": "The direction of minimum increase of $f(x, y, z) = e^{2y}\\cos(x + z^3)$ at the point $\\left(\\frac{\\pi}{2}, \\frac{1}{2}, 0\\right)$ is given by",
      "choices": [
        "$-e\\vec{i} + 2e\\vec{j} + e\\vec{k}$",
        "$e\\vec{i}$",
        "$e\\vec{i} - e\\vec{j}$",
        "$e\\vec{j}$",
        "$-e\\vec{i} + e\\vec{k}$"
      ],
      "correct_answer": "B",
      "solution": "The direction of minimum increase (steepest decrease) is given by $-\\nabla f$. The gradient is $\\nabla f = \\langle -e^{2y}\\sin(x + z^3), 2e^{2y}\\cos(x + z^3), -3z^2 e^{2y}\\sin(x + z^3) \\rangle$. At $\\left(\\frac{\\pi}{2}, \\frac{1}{2}, 0\\right)$, $x + z^3 = \\frac{\\pi}{2}$, so $\\sin(\\pi/2) = 1, \\cos(\\pi/2) = 0$, and $e^{2(1/2)} = e$. Thus $\\nabla f = \\langle -e, 0, 0 \\rangle = -e\\vec{i}$. The direction of minimum increase is $-\\nabla f = -(-e\\vec{i}) = e\\vec{i}$."
    },
    {
      "id": "232_18",
      "term": "232",
      "number": 18,
      "section": "13.7",
      "topic": "Tangent Plane to a Surface",
      "question": "An equation of the tangent plane to the surface $z = x^2 + y^2 + 3$ at the point $(2, 1, 8)$ is",
      "choices": [
        "$3x + y - z = -1$",
        "$4x - 2y - z = -2$",
        "$4x + 2y - z = 2$",
        "$4x + y + z = 17$",
        "$2x + 2y - z = -2$"
      ],
      "correct_answer": "C",
      "solution": "We have $f_x(x, y) = 2x$ and $f_y(x, y) = 2y$. At $(2, 1)$, $f_x(2, 1) = 4$ and $f_y(2, 1) = 2$. The tangent plane equation is $z - z_0 = f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0) \\implies z - 8 = 4(x - 2) + 2(y - 1) = 4x - 8 + 2y - 2 = 4x + 2y - 10 \\iff 4x + 2y - z = 2$."
    },
    {
      "id": "232_19",
      "term": "232",
      "number": 19,
      "section": "13.7",
      "topic": "Horizontal Tangent Plane",
      "question": "If $(a, b, c)$ is a point on the surface $z = x^2 - xy + y^2 - 2x - 2y$ at which the tangent plane is horizontal, then $a^2 + b^2 + c^2 =$",
      "choices": [
        "24",
        "28",
        "20",
        "32",
        "36"
      ],
      "correct_answer": "A",
      "solution": "A tangent plane is horizontal when $f_x = 0$ and $f_y = 0$. $f_x = 2x - y - 2 = 0$ and $f_y = -x + 2y - 2 = 0$. Solving the system: from $y = 2x - 2$, substitute into the second equation: $-x + 2(2x - 2) - 2 = 0 \\implies 3x - 6 = 0 \\implies x = 2$, which gives $y = 2$. Then $c = z = 2^2 - (2)(2) + 2^2 - 2(2) - 2(2) = 4 - 4 + 4 - 4 - 4 = -4$. Hence $(a, b, c) = (2, 2, -4)$, and $a^2 + b^2 + c^2 = 2^2 + 2^2 + (-4)^2 = 4 + 4 + 16 = 24$."
    },
    {
      "id": "232_20",
      "term": "232",
      "number": 20,
      "section": "13.7",
      "topic": "Tangent Plane to Level Surface",
      "question": "If $(a, b, c)$ is a point on the ellipsoid $3x^2 + y^2 + 3z^2 = 1$ where the tangent plane is parallel to the plane $-6x + y + 3z = 0$, then $a + b + c =$",
      "choices": [
        "0",
        "$-\\frac{1}{4}$",
        "-1",
        "$\\frac{1}{2}$",
        "1"
      ],
      "correct_answer": "A",
      "solution": "Let $F(x, y, z) = 3x^2 + y^2 + 3z^2 - 1 = 0$. The normal vector is $\\nabla F = \\langle 6x, 2y, 6z \\rangle$. For the tangent plane to be parallel to $-6x + y + 3z = 0$ (normal $\\vec{n} = \\langle -6, 1, 3 \\rangle$), we need $\\nabla F = k \\vec{n}$ for some scalar $k$. Thus $6x = -6k \\implies x = -k$, $2y = k \\implies y = k/2$, and $6z = 3k \\implies z = k/2$. Substituting into the ellipsoid equation: $3(-k)^2 + (k/2)^2 + 3(k/2)^2 = 1 \\implies 3k^2 + \\frac{1}{4}k^2 + \\frac{3}{4}k^2 = 1 \\implies 4k^2 = 1 \\implies k = \\pm 1/2$. For $k = 1/2$, $(a, b, c) = (-1/2, 1/4, 1/4)$, so $a + b + c = -1/2 + 1/4 + 1/4 = 0$. For $k = -1/2$, $(a, b, c) = (1/2, -1/4, -1/4)$, so $a + b + c = 1/2 - 1/4 - 1/4 = 0$. In either case, $a + b + c = 0$."
    },
    {
      "id": "231_1",
      "term": "231",
      "number": 1,
      "section": "13.1",
      "topic": "13.1 Multivariable Functions & Level Curves",
      "question": "The area of the region that lies in the first quadrant as well as in the domain of the function $f(x, y) = \\ln(6 - x - y)$ is equal to",
      "choices": [
        "$12$",
        "$23$",
        "$30$",
        "$34$",
        "$18$"
      ],
      "correct_answer": "E",
      "solution": "<p><strong>1. Domain & Range Analysis:</strong> For radical expressions $\\sqrt{u}$, the domain requires $u \\ge 0$. For logarithmic expressions $\\ln(u)$, the domain requires $u > 0$.</p><p><strong>2. Level Curves & Surfaces:</strong> Setting $f(x, y) = k$ (or $f(x, y, z) = k$) creates a family of contour curves or level surfaces in space.</p><p><strong>3. Value:</strong> Evaluating constraints yields the domain/range: $$18$$</p>"
    },
    {
      "id": "231_2",
      "term": "231",
      "number": 2,
      "section": "13.1",
      "topic": "13.1 Multivariable Functions & Level Curves",
      "question": "The level surfaces of $f(x, y, z) = \\ln(4x^2 + 4y^2 - z^2)$ are",
      "choices": [
        "elliptic cones",
        "hyperbolic paraboloids",
        "hyperboloids of two sheets",
        "ellipsoids",
        "hyperboloids of one sheet"
      ],
      "correct_answer": "E",
      "solution": "<p><strong>1. Domain & Range Analysis:</strong> For radical expressions $\\sqrt{u}$, the domain requires $u \\ge 0$. For logarithmic expressions $\\ln(u)$, the domain requires $u > 0$.</p><p><strong>2. Level Curves & Surfaces:</strong> Setting $f(x, y) = k$ (or $f(x, y, z) = k$) creates a family of contour curves or level surfaces in space.</p><p><strong>3. Value:</strong> Evaluating constraints yields the domain/range: $$hyperboloids of one sheet$$</p>"
    },
    {
      "id": "231_3",
      "term": "231",
      "number": 3,
      "section": "13.1",
      "topic": "13.1 Multivariable Functions & Level Curves",
      "question": "The range of $f(x, y) = 4\\ln(3 - 2x^2 - y^2)$ is",
      "choices": [
        "$(-\\infty, \\infty)$",
        "$(-\\infty, 4\\ln 3]$",
        "$(-1, 1)$",
        "$(-\\ln 4, 0]$",
        "$[-1, \\ln 4)$"
      ],
      "correct_answer": "B",
      "solution": "<p><strong>1. Domain & Range Analysis:</strong> For radical expressions $\\sqrt{u}$, the domain requires $u \\ge 0$. For logarithmic expressions $\\ln(u)$, the domain requires $u > 0$.</p><p><strong>2. Level Curves & Surfaces:</strong> Setting $f(x, y) = k$ (or $f(x, y, z) = k$) creates a family of contour curves or level surfaces in space.</p><p><strong>3. Value:</strong> Evaluating constraints yields the domain/range: $$(-∞, 4 ln 3]$$</p>"
    },
    {
      "id": "231_4",
      "term": "231",
      "number": 4,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "$\\lim_{(x,y)\\to(0,0)} \\frac{e^{-x^2-y^2} - 1}{x^2 + y^2} =$",
      "choices": [
        "does not exist",
        "$-1$",
        "$0$",
        "$3$",
        "$-2$"
      ],
      "correct_answer": "B",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$-1$$</p>"
    },
    {
      "id": "231_5",
      "term": "231",
      "number": 5,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "If the maximum increase of the function $f(x, y) = x^2 + y^2 - 4x - 2y$ at the point $(5, c)$ occurs in the direction of $\\vec{i} + 2\\vec{j}$, then $c =$",
      "choices": [
        "$4$",
        "$3$",
        "$0$",
        "$7$",
        "$5$"
      ],
      "correct_answer": "D",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$7$$</p>"
    },
    {
      "id": "231_6",
      "term": "231",
      "number": 6,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "$\\lim_{(x,y)\\to(0,0)} \\frac{x^2 y}{x^4 + y^2} =$",
      "choices": [
        "does not exist",
        "$-1$",
        "$1$",
        "$0$",
        "$\\infty$"
      ],
      "correct_answer": "A",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$does not exist$$</p>"
    },
    {
      "id": "231_7",
      "term": "231",
      "number": 7,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "Let $z = \\arctan(xy)$ where $x = s + \\sin t$ and $y = \\cos t$. Then $\\frac{\\partial z}{\\partial s} + \\frac{\\partial z}{\\partial t}$ at $(s, t) = (1, 0)$ is equal to",
      "choices": [
        "$0$",
        "$8$",
        "$1$",
        "$-2$",
        "$-4$"
      ],
      "correct_answer": "C",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$1$$</p>"
    },
    {
      "id": "231_8",
      "term": "231",
      "number": 8,
      "section": "13.2",
      "topic": "13.2 Limits & Continuity",
      "question": "Let $f(x, y) = \\begin{cases} \\frac{\\sin(xy)}{xy} & xy \\ne 0 \\\\ c & xy = 0 \\end{cases}$. The value of $c$ that makes $f(x, y)$ continuous at $(0, 0)$ is",
      "choices": [
        "$-1$",
        "$1$",
        "$0$",
        "$2$",
        "$-4$"
      ],
      "correct_answer": "B",
      "solution": "<p><strong>1. Limit Analysis:</strong> Direct substitution yields the indeterminate form $\\frac{0}{0}$.</p><p><strong>2. Path Test or Polar Conversion:</strong> Factoring, algebraic cancellation of terms, or converting to polar coordinates ($x = r\\cos\\theta, y = r\\sin\\theta$ as $r \\to 0^+$) resolves the limit.</p><p><strong>3. Result:</strong> The limit value (or continuity condition) is: $$1$$</p>"
    },
    {
      "id": "231_9",
      "term": "231",
      "number": 9,
      "section": "11.5",
      "topic": "11.5 Lines in Space & Skew Lines",
      "question": "The normal line to the surface $\\ln\\left(\\frac{x}{y - z}\\right) = x - 1$ at the point $(1, 4, 3)$ passes through the point",
      "choices": [
        "$(0, 3, 3)$",
        "$(1, 3, 4)$",
        "$(1, 2, 3)$",
        "$(2, 3, 3)$",
        "$(1, 2, 1)$"
      ],
      "correct_answer": "B",
      "solution": "<p><strong>1. Direction Vector & Point Formulation:</strong> For a 3D line passing through a given point with direction vector $\\vec{v} = \\langle a, b, c \\rangle$, the parametric equations are given by $x = x_0 + at$, $y = y_0 + bt$, $z = z_0 + ct$.</p><p><strong>2. Parameter Evaluation:</strong> Substituting coordinates or equating intersecting/skew line parameters allows solving for $t$ uniquely.</p><p><strong>3. Solution Conclusion:</strong> Evaluating the required sum, coordinate, or parameter matches: $$(1, 3, 4)$$</p>"
    },
    {
      "id": "231_10",
      "term": "231",
      "number": 10,
      "section": "11.6",
      "topic": "11.6 Quadric Surfaces & Cylinders",
      "question": "If the radius and height of a right circular cone are measured as $10\\,\\text{cm}$ and $25\\,\\text{cm}$, respectively, with a possible error in measurement of as much as $0.1\\,\\text{cm}$ in each. The maximum error in the calculated volume of the cone is estimated as (Hint: The volume $V$ of a cone with radius $r$ and height $h$ is $V = \\frac{1}{3}\\pi r^2 h$).",
      "choices": [
        "$12\\pi$",
        "$20\\pi$",
        "$4\\pi$",
        "$10\\pi$",
        "$2\\pi$"
      ],
      "correct_answer": "B",
      "solution": "<p><strong>1. Completing the Square:</strong> Grouping terms in $x, y, z$ and completing the squares transforms the general second-degree equation into its canonical quadric form.</p><p><strong>2. Trace & Surface Identification:</strong> Examining the signs of coefficients: equal positive signs indicate an ellipsoid, one negative sign yields a hyperboloid of one sheet, two negative signs yield a hyperboloid of two sheets, and a degree-1 linear variable indicates an elliptic/hyperbolic paraboloid.</p><p><strong>3. Conclusion:</strong> The geometric classification corresponds to: $$20 π$$</p>"
    },
    {
      "id": "231_11",
      "term": "231",
      "number": 11,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "Let $f(x, y, z) = x e^{xy} \\sin^2 z$. Then $f_{xyz}(-1, 0, \\pi/4) =$",
      "choices": [
        "$-1$",
        "$1$",
        "$-2$",
        "$0$",
        "$4$"
      ],
      "correct_answer": "C",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$-2$$</p>"
    },
    {
      "id": "231_12",
      "term": "231",
      "number": 12,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "Let $W(s, t) = F(u(s, t), v(s, t))$, where $F, u$ and $v$ are differentiable functions, and $F_u(2, -3) = 1, F_v(2, -3) = 3, u(1, 0) = 2, v(1, 0) = -3, u_s(1, 0) = -2, v_s(1, 0) = 5, u_t(1, 0) = -6, v_t(1, 0) = 4$. Then $W_s(1, 0) + W_t(1, 0) =$",
      "choices": [
        "$19$",
        "$22$",
        "$20$",
        "$0$",
        "$11$"
      ],
      "correct_answer": "A",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$19$$</p>"
    },
    {
      "id": "231_13",
      "term": "231",
      "number": 13,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "If $2yz + x\\ln y = z^2$, then $\\frac{\\partial z}{\\partial y}$ at $(2, 1, 2)$ equals",
      "choices": [
        "$3$",
        "$0$",
        "$4$",
        "$5$",
        "$1$"
      ],
      "correct_answer": "A",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$3$$</p>"
    },
    {
      "id": "231_14",
      "term": "231",
      "number": 14,
      "section": "11.5",
      "topic": "11.5 Distances in Space",
      "question": "The distance between the parallel planes $10x + 2y - 2z = 5$ and $5x + y - z = 1$ is equal to",
      "choices": [
        "$\\sqrt{13}$",
        "$\\frac{1}{\\sqrt{3}}$",
        "$\\sqrt{7}$",
        "$\\frac{\\sqrt{3}}{6}$",
        "$\\frac{1}{\\sqrt{2}}$"
      ],
      "correct_answer": "D",
      "solution": "<p><strong>1. Standard Distance Formula:</strong> The distance $D$ between a point and a line or between parallel planes $Ax + By + Cz = D_1$ and $Ax + By + Cz = D_2$ is computed via: $$D = \\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}}$$ For skew lines, $D = \\frac{|(\\vec{v}_1 \\times \\vec{v}_2) \\cdot \\vec{P_1P_2}|}{\\|\\vec{v}_1 \\times \\vec{v}_2\\|}.$</p><p><strong>2. Substitution:</strong> Evaluating the magnitudes and dot product gives the simplified radical value: $$√ 3 6$$</p>"
    },
    {
      "id": "231_15",
      "term": "231",
      "number": 15,
      "section": "13.6",
      "topic": "13.6 Directional Derivatives & Gradients",
      "question": "If the directional derivative of $f(x, y) = \\ln(1 + xy)$ at $(a, 4)$ in the direction of $\\vec{v} = \\langle 1, -2 \\rangle$ is $0$, then $a =$",
      "choices": [
        "$-1$",
        "$1$",
        "$4$",
        "$2$",
        "$0$"
      ],
      "correct_answer": "D",
      "solution": "<p><strong>1. Gradient Vector $\\nabla f$:</strong> Computing the partial derivatives gives $\\nabla f = \\langle f_x, f_y, f_z \\rangle$.</p><p><strong>2. Unit Direction $\\vec{u}$:</strong> Normalizing the direction vector $\\vec{v}$ yields $\\vec{u} = \\frac{\\vec{v}}{\\|\\vec{v}\\|}$. The directional derivative is $D_{\\vec{u}} f = \\nabla f \\cdot \\vec{u}$.</p><p><strong>3. Maximum Rate of Change:</strong> The maximum rate of change is given by $\\|\\nabla f\\|$. Evaluating yields: $$2$$</p>"
    },
    {
      "id": "231_16",
      "term": "231",
      "number": 16,
      "section": "11.5",
      "topic": "11.5 Lines in Space & Skew Lines",
      "question": "If the line that passes through the points $P(1, 3, 4)$ and $Q(0, 5, 7)$ passes also through the point $R(2, 1, a)$, then $a =$",
      "choices": [
        "$1$",
        "$2$",
        "$-2$",
        "$3$",
        "$5$"
      ],
      "correct_answer": "A",
      "solution": "<p><strong>1. Direction Vector & Point Formulation:</strong> For a 3D line passing through a given point with direction vector $\\vec{v} = \\langle a, b, c \\rangle$, the parametric equations are given by $x = x_0 + at$, $y = y_0 + bt$, $z = z_0 + ct$.</p><p><strong>2. Parameter Evaluation:</strong> Substituting coordinates or equating intersecting/skew line parameters allows solving for $t$ uniquely.</p><p><strong>3. Solution Conclusion:</strong> Evaluating the required sum, coordinate, or parameter matches: $$1$$</p>"
    },
    {
      "id": "231_17",
      "term": "231",
      "number": 17,
      "section": "11.5",
      "topic": "11.5 Planes in Space & Intersections",
      "question": "If the equation of the plane containing the point $(1, 2, 3)$ and passing through the line of intersection of the planes $x + y + z = 1$ and $2x - y + 2z = 2$ is given by $2x + ay + 2z = b$, then $a + b =$",
      "choices": [
        "$3$",
        "$2$",
        "$-2$",
        "$0$",
        "$-1$"
      ],
      "correct_answer": "E",
      "solution": "<p><strong>1. Normal Vector Construction:</strong> A plane with equation $Ax + By + Cz = D$ has normal vector $\\vec{n} = \\langle A, B, C \\rangle$. Perpendicular planes have orthogonal normal vectors ($\\vec{n}_1 \\cdot \\vec{n}_2 = 0$), while parallel planes share scalar multiples of $\\vec{n}$.</p><p><strong>2. Point-Normal Equation:</strong> Expanding $\\vec{n} \\cdot \\langle x - x_0, y - y_0, z - z_0 \\rangle = 0$ yields the scalar coefficients.</p><p><strong>3. Conclusion:</strong> Solving for unknown coefficients $(a, b, c)$ confirms: $$-1$$</p>"
    },
    {
      "id": "231_18",
      "term": "231",
      "number": 18,
      "section": "11.5",
      "topic": "11.5 Planes in Space & Intersections",
      "question": "Consider the surface $x^2 - 3y^2 - 9z^2 = 0$. Which of the following is/are correct? (I) The vertical trace in the $xz$-plane is the lines $x = \\pm 3z$. (II) The traces in the plane parallel to the $yz$-plane are ellipses. (III) The surface represents a hyperboloid of two sheets.",
      "choices": [
        "(I) only",
        "(II) and (III) only",
        "(I) and (II) only",
        "(II) only",
        "(III) only"
      ],
      "correct_answer": "C",
      "solution": "<p><strong>1. Normal Vector Construction:</strong> A plane with equation $Ax + By + Cz = D$ has normal vector $\\vec{n} = \\langle A, B, C \\rangle$. Perpendicular planes have orthogonal normal vectors ($\\vec{n}_1 \\cdot \\vec{n}_2 = 0$), while parallel planes share scalar multiples of $\\vec{n}$.</p><p><strong>2. Point-Normal Equation:</strong> Expanding $\\vec{n} \\cdot \\langle x - x_0, y - y_0, z - z_0 \\rangle = 0$ yields the scalar coefficients.</p><p><strong>3. Conclusion:</strong> Solving for unknown coefficients $(a, b, c)$ confirms: $$(I) and (II) only$$</p>"
    },
    {
      "id": "231_19",
      "term": "231",
      "number": 19,
      "section": "11.5",
      "topic": "11.5 Lines in Space & Skew Lines",
      "question": "If the line with symmetric equations $x - 2 = z - 1, y = 1$ is perpendicular to the surface $3x^2 - 2xy + z^2 = 1$ at the point $(x_0, y_0, z_0)$, then $x_0 + y_0 + z_0 =$",
      "choices": [
        "$0$",
        "$2$",
        "$4$",
        "$3$",
        "$1$"
      ],
      "correct_answer": "A",
      "solution": "<p><strong>1. Direction Vector & Point Formulation:</strong> For a 3D line passing through a given point with direction vector $\\vec{v} = \\langle a, b, c \\rangle$, the parametric equations are given by $x = x_0 + at$, $y = y_0 + bt$, $z = z_0 + ct$.</p><p><strong>2. Parameter Evaluation:</strong> Substituting coordinates or equating intersecting/skew line parameters allows solving for $t$ uniquely.</p><p><strong>3. Solution Conclusion:</strong> Evaluating the required sum, coordinate, or parameter matches: $$0$$</p>"
    },
    {
      "id": "231_20",
      "term": "231",
      "number": 20,
      "section": "13.3",
      "topic": "13.3 Partial Derivatives",
      "question": "Let $w = \\sqrt{x^2 + y^2 + z^2}$, where $x = \\cos\\theta, y = \\sin\\theta, z = \\tan\\theta$. Then $\\frac{dw}{d\\theta}$ at $\\theta = \\frac{\\pi}{4}$ is equal to",
      "choices": [
        "$\\frac{3}{\\sqrt{2}}$",
        "$\\sqrt{3}$",
        "$2\\sqrt{3}$",
        "$1$",
        "$\\sqrt{2}$"
      ],
      "correct_answer": "E",
      "solution": "<p><strong>1. Partial Differentiation:</strong> Differentiating with respect to the indicated independent variable while treating all other variables as constants.</p><p><strong>2. Higher-Order & Clairaut:</strong> Mixed partial derivatives $f_{xy} = f_{yx}$ are equal for continuous second partials.</p><p><strong>3. Evaluation:</strong> Substituting coordinates yields the final value: $$√ 2$$</p>"
    },
    {
      "id": "223_1",
      "term": "223",
      "number": 1,
      "section": "11.5",
      "topic": "Plane Containing a Line and a Point",
      "question": "If the plane containing the point $(2, 1, 2)$ and the line given by $\\frac{x - 1}{3} = \\frac{y - 2}{4} = z + 1$ passes through the point $(-1, b, 1)$, then $b =$",
      "choices": [
        "2",
        "1",
        "-2",
        "3",
        "-3"
      ],
      "correct_answer": "E",
      "solution": "A point on the line is $P_0(1, 2, -1)$ with direction vector $\\vec{v} = \\langle 3, 4, 1 \\rangle$. With the given point $P(2, 1, 2)$, the vector $\\vec{P_0 P} = \\langle 2 - 1, 1 - 2, 2 - (-1) \\rangle = \\langle 1, -1, 3 \\rangle$. The normal vector is $\\vec{n} = \\vec{v} \\times \\vec{P_0 P} = \\det\\begin{pmatrix}\\vec{i}&\\vec{j}&\\vec{k}\\\\3&4&1\\\\1&-1&3\\end{pmatrix} = \\langle 13, -8, -7 \\rangle$. The plane equation through $(2, 1, 2)$ is $13(x - 2) - 8(y - 1) - 7(z - 2) = 0 \\iff 13x - 8y - 7z - 4 = 0$. Substituting $(-1, b, 1)$: $13(-1) - 8b - 7(1) - 4 = 0 \\iff -8b - 24 = 0 \\iff b = -3$."
    },
    {
      "id": "223_2",
      "term": "223",
      "number": 2,
      "section": "11.5",
      "topic": "Distance Between Parallel Planes",
      "question": "The distance between the planes $2x - 3y + 6z = 6$ and $-4x + 6y - 12z = 2$ is equal to",
      "choices": [
        "3",
        "1",
        "8",
        "2",
        "6"
      ],
      "correct_answer": "B",
      "solution": "Divide the second plane by $-2$ to match the normal vector: $2x - 3y + 6z = -1$. The two planes are parallel with normal $\\vec{n} = \\langle 2, -3, 6 \\rangle$, which has magnitude $|\\vec{n}| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{49} = 7$. The distance between parallel planes is $D = \\frac{|d_1 - d_2|}{|\\vec{n}|} = \\frac{|6 - (-1)|}{7} = \\frac{7}{7} = 1$."
    },
    {
      "id": "223_3",
      "term": "223",
      "number": 3,
      "section": "11.5",
      "topic": "Distance Between Parallel Lines",
      "question": "The distance between the two lines $L_1: -2x = y - 3 = 2z - 8$ and $L_2: 2x = 1 - y = 8 - 2z$ is equal to",
      "choices": [
        "$\\frac{2}{3}$",
        "$\\frac{\\sqrt{12}}{3}$",
        "$\\frac{\\sqrt{22}}{3}$",
        "$\\frac{\\sqrt{66}}{3}$",
        "$\\frac{4}{3}$"
      ],
      "correct_answer": "B",
      "solution": "In standard symmetric form: $L_1: \\frac{x}{-1/2} = \\frac{y - 3}{1} = \\frac{z - 4}{1/2}$ passing through $P_1(0, 3, 4)$ with direction vector $\\vec{v} = \\langle -1, 2, 1 \\rangle$. Line $L_2: \\frac{x}{1/2} = \\frac{y - 1}{-1} = \\frac{z - 4}{-1/2}$ passes through $P_2(0, 1, 4)$ with direction $\\langle 1, -2, -1 \\rangle = -\\vec{v}$. Since their directions are parallel, the distance is $D = \\frac{|\\vec{P_1 P_2} \\times \\vec{v}|}{|\\vec{v}|}$. Here $\\vec{P_1 P_2} = \\langle 0, -2, 0 \\rangle$. $\\vec{P_1 P_2} \\times \\vec{v} = \\langle -2, 0, -2 \\rangle$, which has length $\\sqrt{(-2)^2 + 0^2 + (-2)^2} = \\sqrt{8} = 2\\sqrt{2}$. Since $|\\vec{v}| = \\sqrt{(-1)^2 + 2^2 + 1^2} = \\sqrt{6}$, $D = \\frac{\\sqrt{8}}{\\sqrt{6}} = \\sqrt{\\frac{4}{3}} = \\frac{2\\sqrt{3}}{3} = \\frac{\\sqrt{12}}{3}$."
    },
    {
      "id": "223_4",
      "term": "223",
      "number": 4,
      "section": "11.6",
      "topic": "Quadric Surfaces Classification",
      "question": "The surface $4x^2 - 3y^2 + 12z^2 + 12 = 0$ is",
      "choices": [
        "a hyperboloid of two sheets with the $x$-axis as its axis",
        "a hyperboloid of one sheet with the $z$-axis as its axis",
        "a hyperboloid of one sheet with the $y$-axis as its axis",
        "a hyperboloid of one sheet with the $x$-axis as its axis",
        "a hyperboloid of two sheets with the $y$-axis as its axis"
      ],
      "correct_answer": "E",
      "solution": "Rearranging yields $-4x^2 + 3y^2 - 12z^2 = 12$. Dividing by $12$ gives $-\\frac{x^2}{3} + \\frac{y^2}{4} - z^2 = 1$. With two negative terms and one positive term equated to $1$, this is a hyperboloid of two sheets whose axis corresponds to the positive variable ($y$-axis)."
    },
    {
      "id": "223_5",
      "term": "223",
      "number": 5,
      "section": "11.6",
      "topic": "Locus of Points and Quadric Surfaces",
      "question": "An equation of the surface that consists of all points equidistant from the point $(2, 2, 2)$ and the $xy$-plane is",
      "choices": [
        "$\\frac{(z - 2)^2}{4} = (x - 2)^2 + (y - 2)^2$",
        "$y = \\frac{(x + 2)^2}{4} + \\frac{(z + 2)^2}{4} + 2$",
        "$z = \\frac{(x - 2)^2}{4} + \\frac{(y - 2)^2}{4} + 1$",
        "$z = (x - 2)^2 + (y - 2)^2 + 2$",
        "$\\frac{(z - 1)^2}{2} = \\frac{(x - 2)^2}{4} + \\frac{(y - 2)^2}{4}$"
      ],
      "correct_answer": "C",
      "solution": "The distance from $(x, y, z)$ to $(2, 2, 2)$ is $\\sqrt{(x-2)^2 + (y-2)^2 + (z-2)^2}$, and the distance to the $xy$-plane ($z = 0$) is $|z|$. Equating the two distances and squaring: $(x - 2)^2 + (y - 2)^2 + (z - 2)^2 = z^2 \\iff (x - 2)^2 + (y - 2)^2 + z^2 - 4z + 4 = z^2 \\iff 4z = (x - 2)^2 + (y - 2)^2 + 4 \\iff z = \\frac{(x - 2)^2}{4} + \\frac{(y - 2)^2}{4} + 1$."
    },
    {
      "id": "223_6",
      "term": "223",
      "number": 6,
      "section": "13.1",
      "topic": "Level Curves",
      "question": "The level curves of $f(x, y) = e^{1 - x^2 + y^2}$ are",
      "choices": [
        "circles",
        "parabolas",
        "hyperbolas",
        "lines",
        "ellipses"
      ],
      "correct_answer": "C",
      "solution": "Setting $f(x, y) = C > 0$ gives $e^{1 - x^2 + y^2} = C \\iff 1 - x^2 + y^2 = \\ln C \\iff y^2 - x^2 = \\ln C - 1$. For any positive constant $C \\ne e$, this represents a family of hyperbolas."
    },
    {
      "id": "223_7",
      "term": "223",
      "number": 7,
      "section": "13.2",
      "topic": "Multivariable Limits with Exponential/Trig",
      "question": "$\\lim_{(x, y) \\to (0, 0)} e^{\\left(\\frac{1 - \\sec(x^2 + y^2)}{x^2 + y^2}\\right)} =$",
      "choices": [
        "$-\\infty$",
        "1",
        "e",
        "0",
        "$\\infty$"
      ],
      "correct_answer": "B",
      "solution": "Let $u = x^2 + y^2$. As $(x, y) \\to (0, 0)$, $u \\to 0^+$. For the exponent, apply L'Hôpital's Rule: $\\lim_{u \\to 0^+} \\frac{1 - \\sec u}{u} = \\lim_{u \\to 0^+} \\frac{-\\sec u \\tan u}{1} = 0$. Since the exponential function is continuous, $\\lim_{(x, y) \\to (0, 0)} e^{\\frac{1 - \\sec(x^2 + y^2)}{x^2 + y^2}} = e^0 = 1$."
    },
    {
      "id": "223_8",
      "term": "223",
      "number": 8,
      "section": "13.2",
      "topic": "Multivariable Limits with Inverse Trig",
      "question": "$\\lim_{(x, y) \\to (0, 1)} \\tan^{-1}\\left(\\frac{x^2 - 1}{x^2 + (y - 1)^2}\\right) =$",
      "choices": [
        "$\\text{DNE}$",
        "0",
        "$-\\frac{\\pi}{2}$",
        "$\\frac{\\pi}{2}$",
        "$-\\frac{\\pi}{4}$"
      ],
      "correct_answer": "C",
      "solution": "As $(x, y) \\to (0, 1)$, the numerator approaches $0^2 - 1 = -1 < 0$, while the denominator $x^2 + (y - 1)^2$ is strictly positive for $(x, y) \\ne (0, 1)$ and approaches $0^+$. Thus $\\frac{x^2 - 1}{x^2 + (y - 1)^2} \\to -\\infty$. Since $\\lim_{t \\to -\\infty} \\tan^{-1} t = -\\frac{\\pi}{2}$, the limit equals $-\\frac{\\pi}{2}$."
    },
    {
      "id": "223_9",
      "term": "223",
      "number": 9,
      "section": "13.3",
      "topic": "Higher-Order Partial Derivatives",
      "question": "Let $f(x, y, z) = y e^x + x\\ln z$, then $x f_{xz} f_{zx} + f_{zz} =$",
      "choices": [
        "1",
        "$\\frac{x}{z^2}$",
        "$-\\frac{x}{z^2}$",
        "0",
        "$-\\frac{x}{z}$"
      ],
      "correct_answer": "D",
      "solution": "First partials: $f_x = y e^x + \\ln z$ and $f_z = \\frac{x}{z}$. Mixed second partials: $f_{xz} = \\frac{\\partial}{\\partial z}[y e^x + \\ln z] = \\frac{1}{z}$, and $f_{zx} = \\frac{\\partial}{\\partial x}[\\frac{x}{z}] = \\frac{1}{z}$. Also $f_{zz} = \\frac{\\partial}{\\partial z}[\\frac{x}{z}] = -\\frac{x}{z^2}$. Substituting into the expression: $x f_{xz} f_{zx} + f_{zz} = x\\left(\\frac{1}{z}\\right)\\left(\\frac{1}{z}\\right) + \\left(-\\frac{x}{z^2}\\right) = \\frac{x}{z^2} - \\frac{x}{z^2} = 0$."
    },
    {
      "id": "223_10",
      "term": "223",
      "number": 10,
      "section": "13.3",
      "topic": "Partial Derivatives",
      "question": "Let $f(x, y) = x^y$, then $f_y(e, 1) =$",
      "choices": [
        "1",
        "$e^2$",
        "$e^e$",
        "e",
        "0"
      ],
      "correct_answer": "D",
      "solution": "Writing $f(x, y) = e^{y\\ln x}$, the partial derivative with respect to $y$ is $f_y(x, y) = x^y \\ln x$. Evaluating at $(e, 1)$ gives $f_y(e, 1) = e^1 \\ln(e) = e \\cdot 1 = e$."
    },
    {
      "id": "223_11",
      "term": "223",
      "number": 11,
      "section": "13.4",
      "topic": "Error Estimation with Differentials",
      "question": "If the radius and height of a right circular cylinder are respectively measured as $10\\text{ cm}$ and $30\\text{ cm}$ with possible errors $\\pm 0.02\\text{ cm}$ and $\\pm 0.04\\text{ cm}$, respectively, then the error in calculating the volume of the cylinder is approximately",
      "choices": [
        "$\\pm 12\\pi\\text{ cm}^3$",
        "$\\pm 20\\pi\\text{ cm}^3$",
        "$\\pm 15\\pi\\text{ cm}^3$",
        "$\\pm 18\\pi\\text{ cm}^3$",
        "$\\pm 16\\pi\\text{ cm}^3$"
      ],
      "correct_answer": "E",
      "solution": "Volume of cylinder: $V = \\pi r^2 h$. The total differential is $dV = \\frac{\\partial V}{\\partial r} dr + \\frac{\\partial V}{\\partial h} dh = 2\\pi r h \\, dr + \\pi r^2 \\, dh$. Given $r = 10, h = 30, |dr| \\le 0.02, |dh| \\le 0.04$: $|dV| \\le 2\\pi(10)(30)(0.02) + \\pi(10)^2(0.04) = 12\\pi + 4\\pi = 16\\pi\\text{ cm}^3$. Thus the error is approximately $\\pm 16\\pi\\text{ cm}^3$."
    },
    {
      "id": "223_12",
      "term": "223",
      "number": 12,
      "section": "13.4",
      "topic": "Differentials and Linear Approximation",
      "question": "If $(x, y)$ moves from the point $(2, 2)$ to the point $(2.04, 1.98)$, then, using differentials, we find that the change in $z = \\sqrt{3x^2 + y^2}$ is approximately",
      "choices": [
        "0.05",
        "0.02",
        "0.03",
        "0.04",
        "0.06"
      ],
      "correct_answer": "A",
      "solution": "Here $x = 2, y = 2, dx = 0.04, dy = -0.02$. At $(2, 2)$, $z = \\sqrt{3(4) + 4} = \\sqrt{16} = 4$. The partial derivatives are $z_x = \\frac{3x}{\\sqrt{3x^2 + y^2}} = \\frac{6}{4} = 1.5$ and $z_y = \\frac{y}{\\sqrt{3x^2 + y^2}} = \\frac{2}{4} = 0.5$. The differential is $dz = z_x dx + z_y dy = 1.5(0.04) + 0.5(-0.02) = 0.06 - 0.01 = 0.05$."
    },
    {
      "id": "223_13",
      "term": "223",
      "number": 13,
      "section": "13.5",
      "topic": "Implicit Differentiation",
      "question": "If $x\\cos 3y + x^3 y^5 = 3x - e^{xy}$, then the value of $\\frac{dy}{dx}$ at the point $(1, 0)$ is",
      "choices": [
        "1",
        "0",
        "2",
        "-2",
        "-1"
      ],
      "correct_answer": "C",
      "solution": "Define $F(x, y) = x\\cos 3y + x^3 y^5 - 3x + e^{xy} = 0$. Then $F_x = \\cos 3y + 3x^2 y^5 - 3 + y e^{xy}$. At $(1, 0)$, $F_x(1, 0) = \\cos(0) + 0 - 3 + 0 = -2$. Furthermore, $F_y = -3x\\sin 3y + 5x^3 y^4 + x e^{xy}$. At $(1, 0)$, $F_y(1, 0) = 0 + 0 + 1 = 1$. By the implicit function theorem, $\\frac{dy}{dx} = -\\frac{F_x}{F_y} = -\\frac{-2}{1} = 2$."
    },
    {
      "id": "223_14",
      "term": "223",
      "number": 14,
      "section": "13.5",
      "topic": "Chain Rule for Functions of Several Variables",
      "question": "Let $w = xy^2 + yz^2 + zx^2, x = t^2, y = t^2 - 2s, z = s^2 - 2t$. The value of $\\frac{\\partial w}{\\partial s}$ when $t = 1, s = 1$ is equal to",
      "choices": [
        "4",
        "0",
        "6",
        "8",
        "2"
      ],
      "correct_answer": "D",
      "solution": "At $t = 1, s = 1$, we have $x = 1, y = 1 - 2 = -1, z = 1 - 2 = -1$. By the chain rule: $\\frac{\\partial w}{\\partial s} = \\frac{\\partial w}{\\partial x}\\frac{\\partial x}{\\partial s} + \\frac{\\partial w}{\\partial y}\\frac{\\partial y}{\\partial s} + \\frac{\\partial w}{\\partial z}\\frac{\\partial z}{\\partial s}$. Since $x = t^2$, $\\frac{\\partial x}{\\partial s} = 0$. $\\frac{\\partial y}{\\partial s} = -2$, and $\\frac{\\partial z}{\\partial s} = 2s = 2$. Now $\\frac{\\partial w}{\\partial y} = 2xy + z^2 = 2(1)(-1) + 1 = -1$, and $\\frac{\\partial w}{\\partial z} = 2yz + x^2 = 2(-1)(-1) + 1 = 3$. Therefore, $\\frac{\\partial w}{\\partial s} = (-1)(-2) + (3)(2) = 2 + 6 = 8$."
    },
    {
      "id": "223_15",
      "term": "223",
      "number": 15,
      "section": "13.6",
      "topic": "Directional Derivatives",
      "question": "The directional derivative of $f(x, y) = e^{-(x^2 + y^2)}$ at $(0, 0)$ in the direction of $\\vec{v} = \\langle 1, 1 \\rangle$ is",
      "choices": [
        "1",
        "0",
        "2",
        "-1",
        "-2"
      ],
      "correct_answer": "B",
      "solution": "The gradient vector is $\\nabla f(x, y) = \\langle -2x e^{-(x^2 + y^2)}, -2y e^{-(x^2 + y^2)} \\rangle$. At the origin $(0, 0)$, $\\nabla f(0, 0) = \\langle 0, 0 \\rangle = \\vec{0}$. Because the gradient is the zero vector, the directional derivative in any direction is $D_{\\vec{u}} f(0, 0) = \\nabla f(0, 0) \\cdot \\vec{u} = 0$."
    },
    {
      "id": "223_16",
      "term": "223",
      "number": 16,
      "section": "13.6",
      "topic": "Gradient Vector and Direction of Greatest Increase",
      "question": "If the temperature at the point $(x, y)$ on a metal plate is $T(x, y) = \\frac{x}{x^2 + 2y^2}$, the direction of the greatest increase in heat from the point $(1, -1)$ is",
      "choices": [
        "$\\langle \\frac{1}{9}, \\frac{4}{9} \\rangle$",
        "$\\langle \\frac{1}{9}, -\\frac{2}{9} \\rangle$",
        "$\\langle \\frac{4}{9}, \\frac{1}{9} \\rangle$",
        "$\\langle \\frac{1}{25}, -\\frac{4}{25} \\rangle$",
        "$\\langle \\frac{2}{9}, -\\frac{1}{9} \\rangle$"
      ],
      "correct_answer": "A",
      "solution": "The direction of greatest increase is given by the gradient vector $\\nabla T(1, -1)$. $T_x = \\frac{1(x^2 + 2y^2) - x(2x)}{(x^2 + 2y^2)^2} = \\frac{2y^2 - x^2}{(x^2 + 2y^2)^2}$. At $(1, -1)$: $T_x(1, -1) = \\frac{2(1) - 1}{(1 + 2)^2} = \\frac{1}{9}$. $T_y = \\frac{-x(4y)}{(x^2 + 2y^2)^2} = \\frac{-4xy}{(x^2 + 2y^2)^2}$. At $(1, -1)$: $T_y(1, -1) = \\frac{-4(1)(-1)}{9} = \\frac{4}{9}$. Thus $\\nabla T(1, -1) = \\langle \\frac{1}{9}, \\frac{4}{9} \\rangle$."
    },
    {
      "id": "223_17",
      "term": "223",
      "number": 17,
      "section": "13.7",
      "topic": "Tangent Line to a Level Curve",
      "question": "If $f(x, y) = x - y^2$, then the tangent line to the level curve $f(x, y) = 3$ at point $(4, -1)$ is",
      "choices": [
        "$-7y = -x + 11$",
        "$y = x + 1$",
        "$2y = -x + 2$",
        "$7y = -2x + 1$",
        "$y = -x + 3$"
      ],
      "correct_answer": "C",
      "solution": "The normal vector to the level curve is $\\nabla f(x, y) = \\langle 1, -2y \\rangle$. At $(4, -1)$, $\\nabla f(4, -1) = \\langle 1, 2 \\rangle$. The tangent line equation is $1(x - 4) + 2(y - (-1)) = 0 \\iff x - 4 + 2y + 2 = 0 \\iff x + 2y - 2 = 0 \\iff 2y = -x + 2$."
    },
    {
      "id": "223_18",
      "term": "223",
      "number": 18,
      "section": "13.1",
      "topic": "Domain of Functions of Three Variables",
      "question": "The domain of the function $f(x, y, z) = \\frac{\\sqrt{x^2 + y^2 + z^2 - 64}}{y}$ is",
      "choices": [
        "The set of all points lying on or outside the sphere with center the origin and radius 4 and are not on the $x$-axis.",
        "The set of all points lying on or inside the sphere with center at the origin and radius 4 and are not on the $y$-axis.",
        "The set of all points lying on or outside the sphere with center at the origin and radius 8 and are not on the $xz$-plane.",
        "The set of all points lying on or outside the sphere with center at the origin and radius 8 and are not on the $x$-axis.",
        "The set of all points lying on or inside the sphere with center at the origin and radius 8 and are not on the $xz$-plane."
      ],
      "correct_answer": "C",
      "solution": "The expression under the radical must be non-negative: $x^2 + y^2 + z^2 - 64 \\ge 0 \\iff x^2 + y^2 + z^2 \\ge 64 = 8^2$, which defines all points on or outside the sphere of radius 8 centered at the origin. In addition, the denominator cannot be zero: $y \\ne 0$, excluding all points on the $xz$-plane."
    },
    {
      "id": "223_19",
      "term": "223",
      "number": 19,
      "section": "13.2",
      "topic": "Multivariable Limits and Differentiability",
      "question": "Let $f(x, y) = \\begin{cases} \\frac{3x^2 y}{x^4 + y^2}, & (x, y) \\ne (0, 0) \\\\ 0, & (x, y) = (0, 0) \\end{cases}$. Which one of the following statements is FALSE?",
      "choices": [
        "$f$ is not continuous at $(0, 0)$",
        "The domain of $f$ is $\\mathbb{R}^2$",
        "$f_x(0, 0) = 0$",
        "$f$ is not differentiable at $(0, 0)$",
        "$\\lim_{(x, y) \\to (0, 0)} f(x, y)$ exists"
      ],
      "correct_answer": "E",
      "solution": "Consider approach paths of the form $y = k x^2$: $f(x, k x^2) = \\frac{3x^2(k x^2)}{x^4 + (k x^2)^2} = \\frac{3k x^4}{x^4(1 + k^2)} = \\frac{3k}{1 + k^2}$. Since this limit depends on $k$, the limit $\\lim_{(x, y) \\to (0, 0)} f(x, y)$ does not exist. Hence, the statement that the limit exists is FALSE."
    },
    {
      "id": "223_20",
      "term": "223",
      "number": 20,
      "section": "13.5",
      "topic": "Implicit Differentiation",
      "question": "If $z$ is defined implicitly as a differentiable function of $x$ and $y$ by the equation $x\\ln y + y^2 z - z^2 x = 10$, then $\\frac{\\partial z}{\\partial x} =$",
      "choices": [
        "$\\frac{z^2 - \\ln y}{y^2 + 2xz}$",
        "$\\frac{z^2 - \\ln y}{y^2 - 2xz}$",
        "$\\frac{y^2 - \\ln y}{y^2 - 2xz}$",
        "$\\frac{z^2 + \\ln y}{y^2 + 2xz}$",
        "$\\frac{z^2 - x}{y^2 - 2xz}$"
      ],
      "correct_answer": "B",
      "solution": "Let $F(x, y, z) = x\\ln y + y^2 z - z^2 x - 10 = 0$. Then $F_x = \\ln y - z^2$ and $F_z = y^2 - 2xz$. By implicit differentiation, $\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z} = -\\frac{\\ln y - z^2}{y^2 - 2xz} = \\frac{z^2 - \\ln y}{y^2 - 2xz}$."
    },
    {
      "id": "221_1",
      "term": "221",
      "number": 1,
      "section": "11.5",
      "topic": "Line of Intersection of Two Planes",
      "question": "Symmetric equations for the line of intersection of the planes $x + 2y + 3z = 1$ and $x - y + z = 1$ are given by",
      "choices": [
        "$\\frac{x}{5} = \\frac{y - 1}{2} = \\frac{z}{3}$",
        "$\\frac{x}{5} = \\frac{y - 1}{2} = \\frac{z - 2}{3}$",
        "$\\frac{x + 1}{5} = \\frac{y}{2} = \\frac{z}{-3}$",
        "$\\frac{x - 1}{5} = \\frac{y}{2} = \\frac{z}{-3}$",
        "$\\frac{x - 1}{5} = \\frac{y - 1}{2} = \\frac{z + 1}{3}$"
      ],
      "correct_answer": "D",
      "solution": "Let $z = 0$: then $x + 2y = 1$ and $x - y = 1 \\implies 3y = 0 \\implies y = 0, x = 1$. Thus $(1, 0, 0)$ is a point on the line. The direction vector is parallel to $\\vec{n}_1 \\times \\vec{n}_2 = \\det\\begin{pmatrix}\\vec{i}&\\vec{j}&\\vec{k}\\\\1&2&3\\\\1&-1&1\\end{pmatrix} = \\langle 5, 2, -3 \\rangle$. Therefore, the symmetric equations are $\\frac{x - 1}{5} = \\frac{y}{2} = \\frac{z}{-3}$."
    },
    {
      "id": "221_2",
      "term": "221",
      "number": 2,
      "section": "11.5",
      "topic": "Intersection of Line and Plane",
      "question": "The point of intersection of the line whose parametric equations are $x = 2 - 2t, y = 3t, z = 1 + t$ and the plane $x + 2y - z = 7$ is $(a, b, c)$, then $a + b + c =$",
      "choices": [
        "0",
        "5",
        "7",
        "6",
        "4"
      ],
      "correct_answer": "C",
      "solution": "Substitute the parametric equations into the plane equation: $(2 - 2t) + 2(3t) - (1 + t) = 7 \\iff 3t + 1 = 7 \\iff 3t = 6 \\iff t = 2$. Substituting $t = 2$ back gives $(a, b, c) = (2 - 4, 6, 1 + 2) = (-2, 6, 3)$. Thus $a + b + c = -2 + 6 + 3 = 7$."
    },
    {
      "id": "221_3",
      "term": "221",
      "number": 3,
      "section": "11.5",
      "topic": "Equations of Planes",
      "question": "The equation of the plane through the point $(3, -2, 8)$ and parallel to the plane $z = x + y$ is given by",
      "choices": [
        "$x + y - z + 7 = 0$",
        "$x - y + z + 13 = 0$",
        "$x - y - z + 3 = 0$",
        "$2x + y - z - 4 = 0$",
        "$x + 2y - z + 9 = 0$"
      ],
      "correct_answer": "A",
      "solution": "The plane $z = x + y \\iff x + y - z = 0$ has normal vector $\\vec{n} = \\langle 1, 1, -1 \\rangle$. The parallel plane through $(3, -2, 8)$ is $1(x - 3) + 1(y + 2) - 1(z - 8) = 0 \\iff x + y - z - 3 + 2 + 8 = 0 \\iff x + y - z + 7 = 0$."
    },
    {
      "id": "221_4",
      "term": "221",
      "number": 4,
      "section": "11.6",
      "topic": "Quadric Surfaces Classification",
      "question": "Which of the following statements is true about the surface $x^2 - y^2 + z^2 - 4x - 2y - 2z + 4 = 0$?",
      "choices": [
        "circular cone with vertex $(2, -1, 1)$ and axis parallel to $y$-axis",
        "circular cone with vertex $(-1, -1, -1)$ and axis parallel to $y$-axis",
        "circular cone with vertex $(0, 0, 0)$ and axis parallel to $y$-axis",
        "circular cone with vertex $(1, 3, 0)$ and axis parallel to $y$-axis",
        "circular cone with vertex $(-1, 0, 2)$ and axis parallel to $y$-axis"
      ],
      "correct_answer": "A",
      "solution": "Completing squares: $(x - 2)^2 - 4 - (y^2 + 2y + 1) + 1 + (z - 1)^2 - 1 + 4 = 0 \\iff (x - 2)^2 - (y + 1)^2 + (z - 1)^2 = 0 \\iff (x - 2)^2 + (z - 1)^2 = (y + 1)^2$. This is a circular cone with vertex $(2, -1, 1)$ and axis of symmetry parallel to the $y$-axis."
    },
    {
      "id": "221_5",
      "term": "221",
      "number": 5,
      "section": "11.6",
      "topic": "Quadric Surfaces Classification",
      "question": "Consider the following statements about the surface $x^2 = 4 - 4y^2 + z^2$:\nI. Axis of symmetry is the $y$-axis.\nII. The surface is called hyperboloid of one sheet.\nIII. The surface is called hyperboloid of two sheets.\nIV. Axis of symmetry is $z$-axis.\nWhich of the following is true?",
      "choices": [
        "II and III",
        "III and IV",
        "I and II",
        "I and III",
        "II and IV"
      ],
      "correct_answer": "E",
      "solution": "Rearranging gives $x^2 + 4y^2 - z^2 = 4 \\iff \\frac{x^2}{4} + y^2 - \\frac{z^2}{4} = 1$. With exactly one negative coefficient, this is a hyperboloid of one sheet, whose axis of symmetry is the variable with the negative sign ($z$-axis). Therefore, statements II and IV are true."
    },
    {
      "id": "221_6",
      "term": "221",
      "number": 6,
      "section": "13.1",
      "topic": "Domain of Functions of Several Variables",
      "question": "The domain of the function $f(x, y, z) = \\ln(x - y) + yz\\cos x$ is",
      "choices": [
        "$\\{(x, y, z) \\in \\mathbb{R}^3 : y > z\\}$",
        "$\\{(x, y, z) \\in \\mathbb{R}^3 : y < z\\}$",
        "$\\{(x, y, z) \\in \\mathbb{R}^3 : y^2 + z^2 = 1\\}$",
        "$\\{(x, y, z) \\in \\mathbb{R}^3 : x > y\\}$",
        "$\\{(x, y, z) \\in \\mathbb{R}^3 : x < z\\}$"
      ],
      "correct_answer": "D",
      "solution": "The logarithmic term $\\ln(x - y)$ requires $x - y > 0 \\iff x > y$. The polynomial-trigonometric term $yz\\cos x$ is defined for all real numbers. Thus the domain is $\\{(x, y, z) \\in \\mathbb{R}^3 : x > y\\}$."
    },
    {
      "id": "221_7",
      "term": "221",
      "number": 7,
      "section": "13.1",
      "topic": "Range of Multivariable Functions",
      "question": "The range of $f(x, y) = \\ln(16 - x^2 - y^2)$ is",
      "choices": [
        "$(-\\infty, \\ln 2]$",
        "$(-\\infty, 4\\ln 2]$",
        "$(-\\infty, \\ln 5]$",
        "$(-\\infty, 2\\ln 2]$",
        "$(-\\infty, \\infty)$"
      ],
      "correct_answer": "B",
      "solution": "The argument $16 - (x^2 + y^2)$ is strictly positive on its domain, and satisfies $0 < 16 - (x^2 + y^2) \\le 16$. The natural logarithm is strictly increasing, so $\\ln(16 - x^2 - y^2) \\le \\ln(16) = \\ln(2^4) = 4\\ln 2$. As $x^2 + y^2 \\to 16^-$, $\\ln(16 - x^2 - y^2) \\to -\\infty$. Hence the range is $(-\\infty, 4\\ln 2]$."
    },
    {
      "id": "221_8",
      "term": "221",
      "number": 8,
      "section": "13.1",
      "topic": "Level Curves",
      "question": "The level curves of $f(x, y) = \\sqrt[3]{x^2 + y^2}$ are",
      "choices": [
        "a family of circles",
        "a family of hyperbolas",
        "a family of ellipses",
        "a family of parabolas",
        "a family of lines"
      ],
      "correct_answer": "A",
      "solution": "Setting $f(x, y) = C$ (with $C \\ge 0$) yields $\\sqrt[3]{x^2 + y^2} = C \\iff x^2 + y^2 = C^3$. For each $C > 0$, this is the equation of a circle centered at the origin of radius $C^{3/2}$."
    },
    {
      "id": "221_9",
      "term": "221",
      "number": 9,
      "section": "13.2",
      "topic": "Limits of Multivariable Functions",
      "question": "The limit $\\lim_{(x, y) \\to (0, 0)} \\frac{8x^2 \\sin y}{3x^3 + 5y^3}$",
      "choices": [
        "does not exist",
        "$is equal to \\infty$",
        "is equal to 0",
        "is equal to 1",
        "is equal to -1"
      ],
      "correct_answer": "A",
      "solution": "Along the path $x = 0$: $\\lim_{y \\to 0} \\frac{0}{5y^3} = 0$. Along the path $y = x$: $\\lim_{x \\to 0} \\frac{8x^2 \\sin x}{3x^3 + 5x^3} = \\lim_{x \\to 0} \\frac{8x^2 \\sin x}{8x^3} = \\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$. Since the limits along two different paths are distinct ($0 \\ne 1$), the limit does not exist."
    },
    {
      "id": "221_10",
      "term": "221",
      "number": 10,
      "section": "13.2",
      "topic": "Limits by Rationalization",
      "question": "The limit $\\lim_{(x, y) \\to (3, 3)} \\frac{x + 2y - 9}{\\sqrt{x + 2y} - 3}$",
      "choices": [
        "is equal to 9",
        "is equal to 3",
        "is equal to 1",
        "is equal to 6",
        "does not exist"
      ],
      "correct_answer": "D",
      "solution": "Rationalizing the denominator by multiplying by $\\frac{\\sqrt{x + 2y} + 3}{\\sqrt{x + 2y} + 3}$: $\\frac{(x + 2y - 9)(\\sqrt{x + 2y} + 3)}{(x + 2y) - 9} = \\sqrt{x + 2y} + 3$. Evaluating at $(3, 3)$: $\\sqrt{3 + 2(3)} + 3 = \\sqrt{9} + 3 = 3 + 3 = 6$."
    },
    {
      "id": "221_11",
      "term": "221",
      "number": 11,
      "section": "13.2",
      "topic": "Continuity of Multivariable Functions",
      "question": "If $f(x, y) = \\begin{cases} \\frac{2 - 2\\cos(x + y)}{(x + y)^2}, & (x, y) \\ne (0, 0) \\\\ k, & (x, y) = (0, 0) \\end{cases}$, then $f(x, y)$ is",
      "choices": [
        "continuous at $(0, 0)$ only if $k = -1$",
        "continuous at $(0, 0)$ for any value of the real number $k$",
        "continuous at $(0, 0)$ only if $k = 0$",
        "continuous at $(0, 0)$ only if $k = 1$",
        "not continuous at $(0, 0)$ for all values of $k$"
      ],
      "correct_answer": "D",
      "solution": "Let $u = x + y$. As $(x, y) \\to (0, 0)$, $u \\to 0$. $\\lim_{u \\to 0} \\frac{2 - 2\\cos u}{u^2} = \\lim_{u \\to 0} \\frac{2\\sin u}{2u} = 1$. For continuity at $(0, 0)$, we must have $\\lim_{(x, y) \\to (0, 0)} f(x, y) = f(0, 0) \\iff 1 = k$. Thus $f$ is continuous at $(0, 0)$ only if $k = 1$."
    },
    {
      "id": "221_12",
      "term": "221",
      "number": 12,
      "section": "13.3",
      "topic": "Partial Derivatives",
      "question": "If $f(x, y) = \\tan^{-1}(x + y^2)$, then $f_y(1, 2) =$",
      "choices": [
        "$\\frac{4}{13}$",
        "$\\frac{2}{13}$",
        "$\\frac{1}{13}$",
        "$\\frac{3}{13}$",
        "$\\frac{5}{13}$"
      ],
      "correct_answer": "B",
      "solution": "Differentiating with respect to $y$: $f_y(x, y) = \\frac{1}{1 + (x + y^2)^2} \\cdot 2y = \\frac{2y}{1 + (x + y^2)^2}$. Evaluating at $(1, 2)$: $f_y(1, 2) = \\frac{2(2)}{1 + (1 + 4)^2} = \\frac{4}{1 + 25} = \\frac{4}{26} = \\frac{2}{13}$."
    },
    {
      "id": "221_13",
      "term": "221",
      "number": 13,
      "section": "13.3",
      "topic": "Partial Derivatives",
      "question": "If $f(x, y) = \\cos(x^2 y)$, then $f_x(x, y) - f_y(x, y) =$",
      "choices": [
        "$(x^2 + 2xy)\\sin(xy)$",
        "$(x^2 - 2xy)\\sin(x^2 y)$",
        "$x^2\\cos(x^2 y)$",
        "$x^2\\sin(x^2 y)$",
        "$2xy\\cos(x^2 y)$"
      ],
      "correct_answer": "B",
      "solution": "First partials: $f_x(x, y) = -\\sin(x^2 y) \\cdot 2xy = -2xy\\sin(x^2 y)$, and $f_y(x, y) = -\\sin(x^2 y) \\cdot x^2 = -x^2\\sin(x^2 y)$. Then $f_x(x, y) - f_y(x, y) = -2xy\\sin(x^2 y) - (-x^2\\sin(x^2 y)) = (x^2 - 2xy)\\sin(x^2 y)$."
    },
    {
      "id": "221_14",
      "term": "221",
      "number": 14,
      "section": "13.4",
      "topic": "Error Estimation with Differentials",
      "question": "The base radius and height of a right circular cone are measured as $10\\text{ cm}$ and $25\\text{ cm}$, respectively with a possible error in measurement as much as $0.01\\text{ cm}$ in each. The maximum error in the calculated volume of the cone is (Hint: volume of a cone is $V = \\frac{\\pi r^2 h}{3}$)",
      "choices": [
        "$\\pi$",
        "$4\\pi$",
        "$2\\pi$",
        "$3\\pi$",
        "$5\\pi$"
      ],
      "correct_answer": "C",
      "solution": "The differential is $dV = \\frac{\\partial V}{\\partial r} dr + \\frac{\\partial V}{\\partial h} dh = \\frac{2\\pi r h}{3} dr + \\frac{\\pi r^2}{3} dh$. Setting $r = 10, h = 25, dr = dh = 0.01$: $dV = \\frac{2\\pi(10)(25)}{3}(0.01) + \\frac{\\pi(10^2)}{3}(0.01) = \\frac{500\\pi + 100\\pi}{3}(0.01) = 200\\pi(0.01) = 2\\pi$."
    },
    {
      "id": "221_15",
      "term": "221",
      "number": 15,
      "section": "13.4",
      "topic": "Linearization and Tangent Plane Approximation",
      "question": "Consider the function $f(x, y) = y\\ln\\left(\\frac{x}{y}\\right)$. The linearization $L(x, y)$ of $f(x, y)$ at the point $(e, 1)$ is:",
      "choices": [
        "$L(x, y) = \\frac{x}{e} + e$",
        "$L(x, y) = \\frac{x}{e} - 1$",
        "$L(x, y) = \\frac{y}{e} + e$",
        "$L(x, y) = \\frac{x}{e}$",
        "$L(x, y) = \\frac{y}{e} - 1$"
      ],
      "correct_answer": "D",
      "solution": "At $(e, 1)$, $f(e, 1) = 1\\ln(e/1) = 1$. $f(x, y) = y(\\ln x - \\ln y) \\implies f_x = \\frac{y}{x} \\implies f_x(e, 1) = \\frac{1}{e}$. Also $f_y = (\\ln x - \\ln y) + y(-1/y) = \\ln(x/y) - 1 \\implies f_y(e, 1) = \\ln(e) - 1 = 0$. The linearization is $L(x, y) = f(e, 1) + f_x(e, 1)(x - e) + f_y(e, 1)(y - 1) = 1 + \\frac{1}{e}(x - e) + 0 = 1 + \\frac{x}{e} - 1 = \\frac{x}{e}$."
    },
    {
      "id": "221_16",
      "term": "221",
      "number": 16,
      "section": "13.5",
      "topic": "Implicit Differentiation",
      "question": "If $e^z = xyz$, then $\\frac{\\partial z}{\\partial x} =$",
      "choices": [
        "$\\frac{x}{e^z - xy}$",
        "$\\frac{xz}{e^z - xy}$",
        "$\\frac{xy}{e^z - xy}$",
        "$\\frac{y}{e^z - xy}$",
        "$\\frac{yz}{e^z - xy}$"
      ],
      "correct_answer": "E",
      "solution": "Differentiating implicitly with respect to $x$: $e^z \\frac{\\partial z}{\\partial x} = y\\left(1 \\cdot z + x \\frac{\\partial z}{\\partial x}\\right) = yz + xy\\frac{\\partial z}{\\partial x}$. Factoring out $\\frac{\\partial z}{\\partial x}$: $(e^z - xy)\\frac{\\partial z}{\\partial x} = yz \\iff \\frac{\\partial z}{\\partial x} = \\frac{yz}{e^z - xy}$."
    },
    {
      "id": "221_17",
      "term": "221",
      "number": 17,
      "section": "13.5",
      "topic": "Chain Rule for Functions of Several Variables",
      "question": "If $z = \\frac{x}{y}, x = s e^t, y = 1 - s e^{-t}$, then $\\frac{\\partial z}{\\partial s}$ at $x = 3, y = -2$, and $t = 0$ is",
      "choices": [
        "1",
        "$\\frac{5}{4}$",
        "4",
        "$\\frac{3}{4}$",
        "$\\frac{1}{4}$"
      ],
      "correct_answer": "E",
      "solution": "By the chain rule: $\\frac{\\partial z}{\\partial s} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial s} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial s} = \\left(\\frac{1}{y}\\right)(e^t) + \\left(-\\frac{x}{y^2}\\right)(-e^{-t}) = \\frac{e^t}{y} + \\frac{x e^{-t}}{y^2}$. At $x = 3, y = -2, t = 0$: $\\frac{\\partial z}{\\partial s} = \\frac{1}{-2} + \\frac{3}{(-2)^2} = -\\frac{1}{2} + \\frac{3}{4} = \\frac{1}{4}$."
    },
    {
      "id": "221_18",
      "term": "221",
      "number": 18,
      "section": "13.5",
      "topic": "Chain Rule for Functions of Several Variables",
      "question": "If $w = xy + z^2, x = 2s - t, y = 3t$ and $z = s$, then $\\frac{\\partial w}{\\partial s} + \\frac{\\partial w}{\\partial t} =$",
      "choices": [
        "2t - s",
        "6t",
        "8s",
        "4s",
        "2t + 2s"
      ],
      "correct_answer": "C",
      "solution": "First, $\\frac{\\partial w}{\\partial s} = \\frac{\\partial w}{\\partial x}\\frac{\\partial x}{\\partial s} + \\frac{\\partial w}{\\partial y}\\frac{\\partial y}{\\partial s} + \\frac{\\partial w}{\\partial z}\\frac{\\partial z}{\\partial s} = y(2) + x(0) + (2z)(1) = 2y + 2z$. Second, $\\frac{\\partial w}{\\partial t} = y(-1) + x(3) + (2z)(0) = 3x - y$. Adding them gives $3x + y + 2z$. Expressing in terms of $s$ and $t$: $3(2s - t) + 3t + 2s = 6s - 3t + 3t + 2s = 8s$."
    },
    {
      "id": "221_19",
      "term": "221",
      "number": 19,
      "section": "13.7",
      "topic": "Tangent Plane to Level Surface",
      "question": "The equation of the tangent plane at the point $(-3, 1, -2)$ to the ellipsoid $\\frac{x^2}{9} + y^2 + z^2 = 6$ is $ax + by + 6z + 18 = 0$. Then $a + b =$",
      "choices": [
        "-4",
        "-3",
        "-1",
        "-5",
        "-2"
      ],
      "correct_answer": "E",
      "solution": "Let $F(x, y, z) = \\frac{x^2}{9} + y^2 + z^2 - 6 = 0$. The normal vector is $\\nabla F = \\langle \\frac{2x}{9}, 2y, 2z \\rangle$. At $(-3, 1, -2)$, $\\nabla F = \\langle -\\frac{2}{3}, 2, -4 \\rangle$. The tangent plane is $-\\frac{2}{3}(x + 3) + 2(y - 1) - 4(z + 2) = 0 \\iff -\\frac{2}{3}x + 2y - 4z - 12 = 0$. Multiplying by $-\\frac{3}{2}$ gives $x - 3y + 6z + 18 = 0$. Comparing with $ax + by + 6z + 18 = 0$ yields $a = 1, b = -3$. Thus $a + b = 1 + (-3) = -2$."
    },
    {
      "id": "221_20",
      "term": "221",
      "number": 20,
      "section": "13.6",
      "topic": "Directional Derivatives",
      "question": "The directional derivative of $f(x, y, z) = x e^y + y e^z + z e^x$ at $(0, 0, 0)$ in the direction of $\\vec{v} = \\langle -3, 1, 2 \\rangle$ is",
      "choices": [
        "0",
        "1",
        "$\\frac{1}{\\sqrt{14}}$",
        "$\\frac{2}{\\sqrt{14}}$",
        "$-\\frac{3}{\\sqrt{14}}$"
      ],
      "correct_answer": "A",
      "solution": "The gradient is $\\nabla f = \\langle e^y + z e^x, x e^y + e^z, y e^z + e^x \\rangle$. At $(0, 0, 0)$, $\\nabla f(0, 0, 0) = \\langle 1, 1, 1 \\rangle$. The unit vector is $\\vec{u} = \\frac{\\langle -3, 1, 2 \\rangle}{\\sqrt{14}}$. The directional derivative is $D_{\\vec{u}} f(0, 0, 0) = \\langle 1, 1, 1 \\rangle \\cdot \\frac{\\langle -3, 1, 2 \\rangle}{\\sqrt{14}} = \\frac{-3 + 1 + 2}{\\sqrt{14}} = 0$."
    }
  ],
  "section_distribution": {
    "11.5": 54,
    "11.6": 15,
    "13.1": 27,
    "13.2": 19,
    "13.3": 46,
    "13.4": 11,
    "13.5": 23,
    "13.6": 15,
    "13.7": 6
  }
};
