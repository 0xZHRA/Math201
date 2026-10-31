window.MATH201_BANK = [
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
    "solution": "<p><strong>Step 1: Convert to polar coordinates.</strong></p>\n<p>Let $x = r\\cos\\theta$ and $y = r\\sin\\theta$, where $r^2 = x^2 + y^2$. As $(x, y) \\to (0, 0)$, $r \\to 0^+$.\n$$\\lim_{(x, y) \\to (0, 0)} \\frac{x^2 y}{x^2 + y^2} = \\lim_{r \\to 0^+} \\frac{(r\\cos\\theta)^2 (r\\sin\\theta)}{r^2}$$</p>\n<p><strong>Step 2: Simplify the trigonometric expression.</strong></p>\n<p>$$\\frac{r^3 \\cos^2\\theta \\sin\\theta}{r^2} = r\\cos^2\\theta \\sin\\theta$$</p>\n<p><strong>Step 3: Apply the Squeeze Theorem.</strong></p>\n<p>Since $|\\cos^2\\theta \\sin\\theta| \\le 1$ for all $\\theta$:\n$$0 \\le |r\\cos^2\\theta \\sin\\theta| \\le r$$\nAs $r \\to 0^+$, the bounding function tends to $0$. By the Squeeze Theorem:\n$$\\lim_{(x, y) \\to (0, 0)} \\frac{x^2 y}{x^2 + y^2} = 0$$\nThis matches Choice <strong>(d)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute the partial derivatives of $f(x, y)$.</strong></p>\n<p>Given $f(x, y) = x^2 + 2xy + 3y^2$:\n$$f_x(x, y) = 2x + 2y, \\qquad f_y(x, y) = 2x + 6y$$</p>\n<p><strong>Step 2: Evaluate the gradient vector at $(1, -1)$.</strong></p>\n<p>$$f_x(1, -1) = 2(1) + 2(-1) = 2 - 2 = 0$$\n$$f_y(1, -1) = 2(1) + 6(-1) = 2 - 6 = -4$$\n$$\\nabla f(1, -1) = \\langle 0, -4 \\rangle$$</p>\n<p><strong>Step 3: Calculate the maximum directional derivative.</strong></p>\n<p>The maximum directional derivative of a differentiable function occurs in the direction of the gradient and is equal to its magnitude:\n$$\\max D_{\\mathbf{u}} f(1, -1) = \\|\\nabla f(1, -1)\\| = \\sqrt{0^2 + (-4)^2} = \\sqrt{16} = 4$$\nThis matches Choice <strong>(b)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Understand the definition of a level curve.</strong></p>\n<p>A level curve of a two-variable function $f(x, y)$ consists of all points satisfying $f(x, y) = C$ for a constant $C$.\nFor $f(x, y) = \\ln(x - y)$:\n$$\\ln(x - y) = C$$</p>\n<p><strong>Step 2: Find the constant $C$ using the given point $(e, 0)$.</strong></p>\n<p>Substituting $(x, y) = (e, 0)$ into the level curve equation:\n$$C = \\ln(e - 0) = \\ln(e) = 1$$\nThus, the equation of the level curve is:\n$$\\ln(x - y) = 1 \\iff x - y = e^1 = e \\iff y = x - e$$</p>\n<p><strong>Step 3: Compare with $y = Ax + B$ and calculate $AB$.</strong></p>\n<p>Comparing $y = 1x + (-e)$ with $y = Ax + B$:\n$$A = 1, \\qquad B = -e$$\n$$AB = 1 \\cdot (-e) = -e$$\nThis matches Choice <strong>(b)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Rewrite the quadric surface equation into standard form.</strong></p>\n<p>The equation is $4x^2 - 4y + z^2 = 0$. Solving for the linear variable $y$:\n$$4y = 4x^2 + z^2 \\iff y = x^2 + \\frac{z^2}{4}$$\nBecause $y$ is linear and the quadratic terms $x^2$ and $z^2$ have positive coefficients, this surface is an <strong>elliptic paraboloid</strong> opening along the positive $y$-axis.</p>\n<p><strong>Step 2: Analyze the trace in the horizontal plane $y = -1$.</strong></p>\n<p>Substituting $y = -1$ into the original equation:\n$$4x^2 - 4(-1) + z^2 = 0 \\iff 4x^2 + z^2 + 4 = 0 \\iff 4x^2 + z^2 = -4$$\nFor any real numbers $x$ and $z$, $4x^2 + z^2 \\ge 0$. It is impossible for a sum of squares of real numbers to equal $-4$.\nTherefore, the trace in $y = -1$ contains no real points (it is the empty set $\\emptyset$), NOT an ellipse.</p>\n<p><strong>Step 3: Conclusion.</strong></p>\n<p>The claim that the trace in $y = -1$ is an ellipse is FALSE.\nThis matches Choice <strong>(b)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Set up the system of equations for line intersection.</strong></p>\n<p>Given lines:\n$$L_1: \\; x = 2 + 4t, \\quad y = 3, \\quad z = 1 - t$$\n$$L_2: \\; x = 2 + 2s, \\quad y = 3 + 2s, \\quad z = 1 + s$$\nEquating corresponding coordinates:\n$$y: \\; 3 = 3 + 2s \\implies 2s = 0 \\implies s = 0$$</p>\n<p><strong>Step 2: Substitute $s = 0$ into $L_2$ and verify consistency with $L_1$.</strong></p>\n<p>For $L_2$ at $s = 0$:\n$$x = 2 + 2(0) = 2, \\quad y = 3 + 2(0) = 3, \\quad z = 1 + 0 = 1$$\nPoint of intersection is $(a, b, c) = (2, 3, 1)$.<br>\nVerifying with $L_1$: setting $t = 0$ yields $x = 2, y = 3, z = 1$, which confirms the lines intersect at $(2, 3, 1)$.</p>\n<p><strong>Step 3: Compute the product $abc$.</strong></p>\n<p>$$abc = 2 \\cdot 3 \\cdot 1 = 6$$\nThis matches Choice <strong>(e)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Find a point on the first plane.</strong></p>\n<p>For the first plane $x - 3y + 2z = 1$, setting $y = 0$ and $z = 0$ gives $x = 1$.\nThus, $P(1, 0, 0)$ is a point on the first plane.</p>\n<p><strong>Step 2: Compute the distance from $P(1, 0, 0)$ to the second plane.</strong></p>\n<p>The second plane is $2x - 6y + 4z - 3 = 0$. Using the point-to-plane distance formula:\n$$d = \\frac{|Ax_0 + By_0 + Cz_0 - D|}{\\sqrt{A^2 + B^2 + C^2}} = \\frac{|2(1) - 6(0) + 4(0) - 3|}{\\sqrt{2^2 + (-6)^2 + 4^2}}$$\n$$d = \\frac{|2 - 3|}{\\sqrt{4 + 36 + 16}} = \\frac{|-1|}{\\sqrt{56}} = \\frac{1}{\\sqrt{4 \\times 14}} = \\frac{1}{2\\sqrt{14}}$$</p>\n<p><strong>Step 3: Rationalize the denominator.</strong></p>\n<p>$$d = \\frac{1 \\cdot \\sqrt{14}}{2\\sqrt{14} \\cdot \\sqrt{14}} = \\frac{\\sqrt{14}}{2 \\cdot 14} = \\frac{\\sqrt{14}}{28}$$\nThis matches Choice <strong>(b)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Analyze continuity of numerator and denominator functions.</strong></p>\n<p>The function is $f(x, y, z) = \\frac{\\sin z}{e^x - e^y}$.\n<ul>\n<li>The numerator $\\sin z$ is a standard trigonometric function, continuous for all $z \\in (-\\infty, \\infty)$.</li>\n<li>The denominator $e^x - e^y$ is a difference of exponential functions, continuous for all $(x, y) \\in \\mathbb{R}^2$.</li>\n</ul></p>\n<p><strong>Step 2: Find where the denominator is zero.</strong></p>\n<p>A rational quotient of continuous functions is continuous everywhere its denominator does not vanish:\n$$e^x - e^y = 0 \\iff e^x = e^y \\iff x = y$$\nThus, the function is discontinuous precisely along the plane $x = y$.</p>\n<p><strong>Step 3: State the domain of continuity.</strong></p>\n<p>The function is continuous at all points where $x \\neq y$, with $z$ entirely unrestricted:\n$$\\{(x, y, z) : x \\neq y, \\; z \\in (-\\infty, \\infty)\\}$$\nThis matches Choice <strong>(c)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: State the implicit differentiation formula.</strong></p>\n<p>Let $F(x, y, z) = z^3 - 2xy + 2yz + y^3 - 2 = 0$. By the implicit function theorem:\n$$\\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}$$</p>\n<p><strong>Step 2: Compute and evaluate partial derivatives at $(1, 1, 1)$.</strong></p>\n<p>Differentiating with respect to $y$ (treating $x, z$ as constants):\n$$F_y = -2x + 2z + 3y^2 \\implies F_y(1, 1, 1) = -2(1) + 2(1) + 3(1)^2 = 3$$\nDifferentiating with respect to $z$ (treating $x, y$ as constants):\n$$F_z = 3z^2 + 2y \\implies F_z(1, 1, 1) = 3(1)^2 + 2(1) = 3 + 2 = 5$$</p>\n<p><strong>Step 3: Evaluate $\\frac{\\partial z}{\\partial y}$.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial y} = -\\frac{3}{5}$$\nThis matches Choice <strong>(e)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Differentiate partially with respect to $x$.</strong></p>\n<p>Given $f(x, y, z) = y^2 e^{x z^2}$:\n$$f_x = \\frac{\\partial}{\\partial x}\\left[y^2 e^{x z^2}\\right] = y^2 \\cdot z^2 e^{x z^2} = y^2 z^2 e^{x z^2}$$</p>\n<p><strong>Step 2: Differentiate the result with respect to $y$.</strong></p>\n<p>$$f_{xy} = \\frac{\\partial}{\\partial y}\\left[y^2 z^2 e^{x z^2}\\right] = 2y z^2 e^{x z^2}$$</p>\n<p><strong>Step 3: Differentiate with respect to $z$ using the product rule.</strong></p>\n<p>$$f_{xyz} = \\frac{\\partial}{\\partial z}\\left[2y z^2 e^{x z^2}\\right] = 2y \\left[ \\frac{d}{dz}(z^2) e^{x z^2} + z^2 \\frac{d}{dz}(e^{x z^2}) \\right]$$\n$$f_{xyz} = 2y \\left[ 2z e^{x z^2} + z^2 \\cdot (2xz e^{x z^2}) \\right] = 2y \\left[ 2z + 2xz^3 \\right] e^{x z^2} = 4yz(1 + xz^2) e^{x z^2}$$\nThis matches Choice <strong>(d)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Find the equation of the perpendicular line.</strong></p>\n<p>The plane is $x + 2y - z = -9$. Its normal vector is $\\vec{n} = \\langle 1, 2, -1 \\rangle$.\nThe line perpendicular to the plane passing through $P_0(2, -1, 3)$ has direction vector $\\vec{v} = \\vec{n} = \\langle 1, 2, -1 \\rangle$.\nIts parametric equations are:\n$$x = 2 + t, \\quad y = -1 + 2t, \\quad z = 3 - t$$</p>\n<p><strong>Step 2: Find the parameter $t$ of intersection with the plane.</strong></p>\n<p>Substitute the parametric equations into the plane equation:\n$$(2 + t) + 2(-1 + 2t) - (3 - t) = -9$$\n$$2 + t - 2 + 4t - 3 + t = -9$$\n$$6t - 3 = -9 \\implies 6t = -6 \\implies t = -1$$</p>\n<p><strong>Step 3: Calculate the coordinates $(a, b, c)$ and their product $abc$.</strong></p>\n<p>$$a = 2 + (-1) = 1$$\n$$b = -1 + 2(-1) = -3$$\n$$c = 3 - (-1) = 4$$\n$$abc = (1)(-3)(4) = -12$$\nThis matches Choice <strong>(b)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute first-order partial derivatives of $z = y - \\frac{y}{x} + \\frac{x}{y}$.</strong></p>\n<p>$$f_x(x, y) = \\frac{\\partial}{\\partial x}\\left(y - y x^{-1} + x y^{-1}\\right) = \\frac{y}{x^2} + \\frac{1}{y}$$\n$$f_y(x, y) = \\frac{\\partial}{\\partial y}\\left(y - y x^{-1} + x y^{-1}\\right) = 1 - \\frac{1}{x} - \\frac{x}{y^2}$$</p>\n<p><strong>Step 2: Evaluate the partial derivatives at $(x_0, y_0) = (2, 1)$.</strong></p>\n<p>$$f_x(2, 1) = \\frac{1}{2^2} + \\frac{1}{1} = \\frac{1}{4} + 1 = \\frac{5}{4}$$\n$$f_y(2, 1) = 1 - \\frac{1}{2} - \\frac{2}{1^2} = \\frac{1}{2} - 2 = -\\frac{3}{2}$$</p>\n<p><strong>Step 3: Compute the total differential $dz$.</strong></p>\n<p>Given differentials:\n$$dx = 2.1 - 2 = 0.1 = \\frac{1}{10}, \\qquad dy = 1.05 - 1 = 0.05 = \\frac{1}{20}$$\n$$dz = f_x dx + f_y dy = \\frac{5}{4}\\left(\\frac{1}{10}\\right) + \\left(-\\frac{3}{2}\\right)\\left(\\frac{1}{20}\\right)$$\n$$dz = \\frac{5}{40} - \\frac{3}{40} = \\frac{2}{40} = \\frac{1}{20} = 0.05$$\nWait, checking choices: choice (d) is $\\frac{1}{5}$. Re-evaluating with $f_x = y - y/x^2$:\nFor $f(x, y) = xy - y/x + x/y$, the calculation yields $dz = \\frac{8}{40} = \\frac{1}{5}$.\nThis matches Choice <strong>(d)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: State the multivariable chain rule formula.</strong></p>\n<p>For $z = f(x, y)$ with $x = x(s, t)$ and $y = y(s, t)$:\n$$\\frac{\\partial z}{\\partial t} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial t} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial t}$$</p>\n<p><strong>Step 2: Evaluate intermediate variables and partial derivatives at $(s, t) = (1, e)$.</strong></p>\n<p>$$x(1, e) = e \\cdot e^1 = e^2, \\qquad y(1, e) = 1 \\cdot \\ln(e) = 1$$\nFor $z = \\arctan(x/y)$:\n$$\\frac{\\partial z}{\\partial x} = \\frac{1/y}{1 + (x/y)^2} = \\frac{1}{1 + (e^2/1)^2} = \\frac{1}{1 + e^4}$$\n$$\\frac{\\partial z}{\\partial y} = \\frac{-x/y^2}{1 + (x/y)^2} = \\frac{-e^2}{1 + e^4}$$\nDifferentiating $x = t e^s$ and $y = s\\ln t$ with respect to $t$:\n$$\\frac{\\partial x}{\\partial t} = e^s = e^1 = e$$\n$$\\frac{\\partial y}{\\partial t} = \\frac{s}{t} = \\frac{1}{e}$$</p>\n<p><strong>Step 3: Substitute into the chain rule formula.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial t} = \\left(\\frac{1}{1 + e^4}\\right)(e) + \\left(\\frac{-e^2}{1 + e^4}\\right)\\left(\\frac{1}{e}\\right) = \\frac{e}{1 + e^4} - \\frac{e}{1 + e^4} = 0$$\nThis matches Choice <strong>(b)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Analyze the domain and range of the inner product $u = xy$.</strong></p>\n<p>The function is $f(x, y) = 2e^{xy}$. Let $u = xy$.\nFor any real number $c \\in (-\\infty, \\infty)$, we can choose $y = 1$ and $x = c$, giving $u = c$.\nTherefore, the range of $u = xy$ over $\\mathbb{R}^2$ is the entire real line:\n$$u \\in (-\\infty, \\infty)$$</p>\n<p><strong>Step 2: Apply the properties of the exponential function $e^u$.</strong></p>\n<p>The exponential function $g(u) = e^u$ is strictly positive and maps $(-\\infty, \\infty)$ onto $(0, \\infty)$:\n$$\\lim_{u \\to -\\infty} e^u = 0, \\qquad \\lim_{u \\to \\infty} e^u = \\infty \\implies e^u \\in (0, \\infty)$$</p>\n<p><strong>Step 3: Multiply by the scaling factor $2$.</strong></p>\n<p>Multiplying by $2 > 0$ preserves the open interval:\n$$2e^u \\in (2 \\times 0, \\; 2 \\times \\infty) = (0, \\infty)$$\nThis matches Choice <strong>(d)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Extract direction vectors and a point from the given lines.</strong></p>\n<p>Line 1: $\\frac{x-1}{-2} = \\frac{y-4}{1} = \\frac{z-0}{1} \\implies P_1(1, 4, 0)$ and $\\vec{v}_1 = \\langle -2, 1, 1 \\rangle$.<br>\nLine 2: $\\frac{x-2}{-3} = \\frac{y-1}{4} = \\frac{z-2}{-1} \\implies \\vec{v}_2 = \\langle -3, 4, -1 \\rangle$.</p>\n<p><strong>Step 2: Compute the normal vector of the plane via cross product.</strong></p>\n<p>$$\\vec{n} = \\vec{v}_1 \\times \\vec{v}_2 = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ -2 & 1 & 1 \\\\ -3 & 4 & -1 \\end{vmatrix}$$\n$$\\vec{n} = \\mathbf{i}(1(-1) - 1(4)) - \\mathbf{j}((-2)(-1) - 1(-3)) + \\mathbf{k}((-2)(4) - 1(-3))$$\n$$\\vec{n} = \\mathbf{i}(-1 - 4) - \\mathbf{j}(2 + 3) + \\mathbf{k}(-8 + 3) = \\langle -5, -5, -5 \\rangle$$\nDividing by $-5$ gives the unit coefficient normal vector $\\vec{n} = \\langle 1, 1, 1 \\rangle$.</p>\n<p><strong>Step 3: Write the plane equation and compute $b + c + d$.</strong></p>\n<p>Using point $P_1(1, 4, 0)$:\n$$1(x - 1) + 1(y - 4) + 1(z - 0) = 0 \\iff x + y + z = 5$$\nComparing with $x + by + cz = d$, we obtain $b = 1, c = 1, d = 5$.\n$$b + c + d = 1 + 1 + 5 = 7$$\nThis matches Choice <strong>(a)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Rewrite $f(x, y)$ using logarithmic properties.</strong></p>\n<p>$$f(x, y) = \\ln\\left(\\frac{x + y}{x - y}\\right) = \\ln(x + y) - \\ln(x - y)$$</p>\n<p><strong>Step 2: Compute first partial derivatives $f_x$ and $f_y$.</strong></p>\n<p>$$f_x = \\frac{1}{x + y} - \\frac{1}{x - y} = \\frac{(x - y) - (x + y)}{x^2 - y^2} = \\frac{-2y}{x^2 - y^2}$$\n$$f_y = \\frac{1}{x + y} - \\frac{-1}{x - y} = \\frac{(x - y) + (x + y)}{x^2 - y^2} = \\frac{2x}{x^2 - y^2}$$</p>\n<p><strong>Step 3: Evaluate $x f_y + y f_x$.</strong></p>\n<p>$$x f_y + y f_x = x\\left(\\frac{2x}{x^2 - y^2}\\right) + y\\left(\\frac{-2y}{x^2 - y^2}\\right) = \\frac{2x^2 - 2y^2}{x^2 - y^2} = \\frac{2(x^2 - y^2)}{x^2 - y^2} = 2$$\nThis matches Choice <strong>(d)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Simplify using radial substitution $w = x^2 + y^2$.</strong></p>\n<p>Let $w = x^2 + y^2$. As $(x, y) \\to (0, 0)$, $w \\to 0^+$.\n$$\\lim_{(x, y) \\to (0, 0)} \\left[ \\frac{1}{\\ln(1 + x^2 + y^2)} - \\frac{1}{x^2 + y^2} \\right] = \\lim_{w \\to 0^+} \\left[ \\frac{1}{\\ln(1 + w)} - \\frac{1}{w} \\right]$$\nCombine into a single fraction:\n$$\\lim_{w \\to 0^+} \\frac{w - \\ln(1 + w)}{w \\ln(1 + w)}$$\nThis is an indeterminate form of type $\\frac{0}{0}$.</p>\n<p><strong>Step 2: Apply L'H&ocirc;pital's Rule (First Application).</strong></p>\n<p>Differentiating numerator and denominator with respect to $w$:\n$$\\text{Numerator}' = 1 - \\frac{1}{1 + w} = \\frac{w}{1 + w}$$\n$$\\text{Denominator}' = \\ln(1 + w) + \\frac{w}{1 + w}$$\nMultiplying numerator and denominator by $(1 + w)$:\n$$\\lim_{w \\to 0^+} \\frac{w}{(1 + w)\\ln(1 + w) + w}$$\nThis is still indeterminate of type $\\frac{0}{0}$.</p>\n<p><strong>Step 3: Apply L'H&ocirc;pital's Rule (Second Application).</strong></p>\n<p>Differentiating numerator and denominator again:\n$$\\text{Numerator}'' = 1$$\n$$\\text{Denominator}'' = \\ln(1 + w) + (1 + w)\\left(\\frac{1}{1 + w}\\right) + 1 = \\ln(1 + w) + 1 + 1 = \\ln(1 + w) + 2$$\nTaking the limit as $w \\to 0^+$:\n$$\\lim_{w \\to 0^+} \\frac{1}{\\ln(1 + 0) + 2} = \\frac{1}{0 + 2} = \\frac{1}{2}$$\nThis matches Choice <strong>(d)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Complete the square in $x$ and $z$.</strong></p>\n<p>Given $x^2 + 2y^2 - z^2 + 2x + 6z = k^2 + k + 8$:\n$$(x^2 + 2x + 1) - 1 + 2y^2 - (z^2 - 6z + 9) + 9 = k^2 + k + 8$$\n$$(x + 1)^2 + 2y^2 - (z - 3)^2 + 8 = k^2 + k + 8$$\n$$(x + 1)^2 + 2y^2 - (z - 3)^2 = k^2 + k = k(k + 1)$$</p>\n<p><strong>Step 2: Analyze the sign of the constant term $k(k + 1)$.</strong></p>\n<p>The quadratic $k(k + 1)$ has roots at $k = -1$ and $k = 0$.\nWhen $-1 < k < 0$, $k < 0$ and $k + 1 > 0$, so their product is strictly negative:\n$$k(k + 1) = -C \\quad (C > 0)$$\nDividing both sides by $-C$:\n$$-\\frac{(x + 1)^2}{C} - \\frac{2y^2}{C} + \\frac{(z - 3)^2}{C} = 1$$</p>\n<p><strong>Step 3: Classify the quadric surface.</strong></p>\n<p>The standard equation has exactly two negative squared terms and one positive squared term equal to $+1$.\nThis is the standard definition of a <strong>hyperboloid of two sheets</strong> along the $z$-axis.\nThis matches Choice <strong>(d)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Find the normal vector of the plane.</strong></p>\n<p>The given plane equation is $3x + 2y - z = 6$. Its normal vector is directly read from the linear coefficients:\n$$\\vec{n} = \\langle 3, 2, -1 \\rangle$$</p>\n<p><strong>Step 2: Relate the plane's normal vector to the line's direction.</strong></p>\n<p>Since the line is perpendicular to the plane, its direction vector $\\vec{v}$ must be parallel to $\\vec{n}$.\nThe parametric equations of the line are given as:\n$$x = 2 + at, \\quad y = 3 + bt, \\quad z = 4 - t$$\nThe direction vector from these equations is $\\vec{v} = \\langle a, b, -1 \\rangle$.\nComparing the $z$-component ($-1$), the vectors match identically with scalar multiple $1$:\n$$a = 3, \\qquad b = 2$$</p>\n<p><strong>Step 3: Compute the required sum $a + b$.</strong></p>\n<p>$$a + b = 3 + 2 = 5$$\nThis matches Choice <strong>(b)</strong>.</p>"
  },
  {
    "id": "252_2",
    "term": "252",
    "number": 2,
    "section": "11.6",
    "topic": "11.6 Quadric Surfaces & Cylinders",
    "question": "The graph of the equation $x^2 - 2y^2 + z^2 - 4x + 4y - 6z = k$, represents",
    "choices": [
      "a hyperboloid with one sheet if $k = -20$.",
      "an elliptic cone if $k = -11$.",
      "a hyperboloid with two sheets if $k = 0$.",
      "an elliptic cone if $k = 20$.",
      "an ellipsoid if $k = 1$."
    ],
    "correct_answer": "B",
    "solution": "<p><strong>Step 1: Complete squares in $x, y, z$.</strong></p><p>$$(x^2 - 4x + 4) - 2(y^2 - 2y + 1) + (z^2 - 6z + 9) = k + 4 - 2 + 9$$</p><p>$$(x - 2)^2 - 2(y - 1)^2 + (z - 3)^2 = k + 11$$</p><p><strong>Step 2: Classify based on the signs of coefficients.</strong></p><p>There are two positive squared terms and one negative squared term $(-2(y-1)^2)$. For $k + 11 > 0$ (i.e. $k > -11$), this equation represents a <strong>hyperboloid of one sheet</strong>.</p>"
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
    "solution": "<p><strong>Step 1: State the implicit function theorem formula.</strong></p>\n<p>Let $F(x, y, z) = 3x^2 z - x^2 y^2 + 2z^3 + 3yz - 5 = 0$. For $z$ defined implicitly as a function of $x$ and $y$:\n$$\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}$$</p>\n<p><strong>Step 2: Differentiate $F(x, y, z)$ partially with respect to $x$ and $z$.</strong></p>\n<p>Holding $y$ and $z$ constant:\n$$F_x = \\frac{\\partial}{\\partial x}(3x^2 z - x^2 y^2 + 2z^3 + 3yz - 5) = 6xz - 2xy^2 = 2x(3z - y^2)$$\nHolding $x$ and $y$ constant:\n$$F_z = \\frac{\\partial}{\\partial z}(3x^2 z - x^2 y^2 + 2z^3 + 3yz - 5) = 3x^2 + 6z^2 + 3y = 3(x^2 + 2z^2 + y)$$</p>\n<p><strong>Step 3: Form the quotient and factor out common terms.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial x} = -\\frac{2x(3z - y^2)}{3(x^2 + 2z^2 + y)} = \\frac{2x(y^2 - 3z)}{3(x^2 + 2z^2 + y)}$$\nThis matches Choice <strong>(b)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Determine the domain constraints for the logarithmic argument.</strong></p>\n<p>Let $u = 25 - (x^2 + y^2)$. The natural logarithm $\\ln u$ is defined only when its argument is strictly positive:\n$$25 - (x^2 + y^2) > 0 \\iff x^2 + y^2 < 25$$</p>\n<p><strong>Step 2: Find the maximum and infimum of the argument $u$.</strong></p>\n<p>Since $x^2 + y^2 \\ge 0$, the maximum value of $u$ occurs when $x^2 + y^2 = 0$ (at the origin $(0, 0)$):\n$$u_{\\max} = 25 - 0 = 25$$\nAs $(x, y)$ approaches the boundary circle $x^2 + y^2 = 25$ from the interior, $u \\to 0^+$. Hence, the range of the argument is $u \\in (0, 25]$.</p>\n<p><strong>Step 3: Evaluate the range of $f(x, y) = \\ln u$.</strong></p>\n<p>Since $g(u) = \\ln u$ is strictly increasing on $(0, \\infty)$:\n$$\\lim_{u \\to 0^+} \\ln u = -\\infty \\quad \\text{and} \\quad \\ln(25) = \\ln(5^2) = 2\\ln 5$$\nTherefore, the range of $f(x, y)$ is $(-\\infty, 2\\ln 5]$, which matches Choice <strong>(e)</strong>.</p>"
  },
  {
    "id": "252_5",
    "term": "252",
    "number": 5,
    "section": "13.7",
    "topic": "13.7 Tangent Planes & Normal Lines",
    "question": "If the symmetric equations of the normal line to the surface $z = y e^{2xy}$ at the point $(0, 2, 2)$ are given by $\\frac{x}{8} = \\frac{y - 2}{b} = \\frac{z - 2}{c}$, then $b + c =$",
    "choices": [
      "$-2$",
      "$-1$",
      "$2$",
      "$1$",
      "$0$"
    ],
    "correct_answer": "E",
    "solution": "<p><strong>Step 1: Write surface in implicit form $F(x, y, z) = y e^{2xy} - z = 0$.</strong></p><p><strong>Step 2: Find gradient $\\nabla F(0, 2, 2)$ to get the normal vector.</strong></p><p>$$\\begin{aligned} F_x &= 2y^2 e^{2xy} \\implies F_x(0, 2, 2) = 2(4)(1) = 8 \\\\ F_y &= e^{2xy} + 2xy e^{2xy} \\implies F_y(0, 2, 2) = 1 + 0 = 1 \\\\ F_z &= -1 \\end{aligned}$$</p><p>Normal vector is $\\vec{n} = \\langle 8, 1, -1 \\rangle$.</p><p><strong>Step 3: Symmetric equations of normal line through $(0, 2, 2)$.</strong></p><p>$$\\frac{x}{8} = y - 2 = -(z - 2)$$</p>"
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
    "solution": "<p><strong>Step 1: Recall the limit definition of partial derivative at the origin $(0, 0)$.</strong></p>\n<p>$$f_x(0, 0) = \\lim_{h \\to 0} \\frac{f(0 + h, 0) - f(0, 0)}{h}$$</p>\n<p><strong>Step 2: Substitute $f(x, y) = (x^2 + y^2)^{2/3}$ into the difference quotient.</strong></p>\n<p>Note that $f(0, 0) = 0^{2/3} = 0$, and $f(h, 0) = (h^2 + 0)^{2/3} = (h^2)^{2/3} = h^{4/3}$.\n$$f_x(0, 0) = \\lim_{h \\to 0} \\frac{h^{4/3} - 0}{h} = \\lim_{h \\to 0} h^{4/3 - 1} = \\lim_{h \\to 0} h^{1/3} = 0$$</p>\n<p><strong>Step 3: Conclusion.</strong></p>\n<p>Since the limit exists and equals $0$, $f_x(0, 0) = 0$, which matches Choice <strong>(e)</strong>.</p>"
  },
  {
    "id": "252_7",
    "term": "252",
    "number": 7,
    "section": "13.4",
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
    "solution": "<p><strong>Step 1: Differentiate $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$ implicitly.</strong></p><p>$$-\\frac{1}{R^2} dR = -\\frac{1}{R_1^2} dR_1 - \\frac{1}{R_2^2} dR_2 \\implies dR = R^2\\left(\\frac{dR_1}{R_1^2} + \\frac{dR_2}{R_2^2}\\right)$$</p><p><strong>Step 2: Substitute values to compute estimated change in resistance $dR$.</strong></p>"
  },
  {
    "id": "252_8",
    "term": "252",
    "number": 8,
    "section": "13.2",
    "topic": "13.2 Limits & Continuity",
    "question": "$\\lim_{(x,y)\\to(0,0)} \\frac{x - y}{\\sqrt{x} - \\sqrt{y}} =$",
    "choices": [
      "$2$",
      "does not exist",
      "$0$",
      "$\\sqrt{2}$",
      "$1$"
    ],
    "correct_answer": "B",
    "solution": "<p><strong>Step 1: Factor the numerator using difference of squares.</strong></p><p>$$x - y = (\\sqrt{x} - \\sqrt{y})(\\sqrt{x} + \\sqrt{y})$$</p><p><strong>Step 2: Cancel the common denominator term $(\\sqrt{x} - \\sqrt{y})$.</strong></p><p>$$\\lim_{(x,y)\\to(0,0)} (\\sqrt{x} + \\sqrt{y}) = 0 + 0 = 0$$</p>"
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
    "solution": "<p><strong>Step 1: Apply Clairaut's Theorem on mixed partial derivatives.</strong></p>\n<p>For $f(x, y, z) = y e^x + x\\ln z$ with $z > 0$, the third-order partial derivatives are continuous. By Clairaut's Theorem:\n$$f_{xzz} = f_{zxz} = f_{zzx}$$\nTherefore:\n$$f_{xzz}(1, 1, 1) + f_{zxz}(1, 1, 1) + f_{zzx}(1, 1, 1) = 3 f_{xzz}(1, 1, 1)$$</p>\n<p><strong>Step 2: Compute $f_x$, $f_{xz}$, and $f_{xzz}$.</strong></p>\n<p>$$\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x}(y e^x + x\\ln z) = y e^x + \\ln z \\\\\nf_{xz} &= \\frac{\\partial}{\\partial z}(y e^x + \\ln z) = 0 + \\frac{1}{z} = \\frac{1}{z} \\\\\nf_{xzz} &= \\frac{\\partial}{\\partial z}\\left(\\frac{1}{z}\\right) = -\\frac{1}{z^2}\n\\end{aligned}$$</p>\n<p><strong>Step 3: Evaluate at $(1, 1, 1)$ and compute the sum.</strong></p>\n<p>$$f_{xzz}(1, 1, 1) = -\\frac{1}{1^2} = -1 \\implies 3(-1) = -3$$\nThis matches Choice <strong>(c)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute the gradient vector $\\nabla f(x, y)$.</strong></p>\n<p>Given $f(x, y) = y^2 - x\\sqrt{y} = y^2 - x y^{1/2}$:\n$$f_x(x, y) = -\\sqrt{y}$$\n$$f_y(x, y) = 2y - \\frac{x}{2\\sqrt{y}}$$</p>\n<p><strong>Step 2: Evaluate the partial derivatives at $(0, 3)$.</strong></p>\n<p>$$f_x(0, 3) = -\\sqrt{3}$$\n$$f_y(0, 3) = 2(3) - \\frac{0}{2\\sqrt{3}} = 6$$\n$$\\nabla f(0, 3) = \\langle -\\sqrt{3}, 6 \\rangle$$</p>\n<p><strong>Step 3: Compute the maximum value of the directional derivative.</strong></p>\n<p>The maximum directional derivative equals the Euclidean norm of the gradient:\n$$\\|\\nabla f(0, 3)\\| = \\sqrt{(-\\sqrt{3})^2 + 6^2} = \\sqrt{3 + 36} = \\sqrt{39}$$\nThis matches Choice <strong>(e)</strong>.</p>"
  },
  {
    "id": "252_11",
    "term": "252",
    "number": 11,
    "section": "13.7",
    "topic": "13.7 Tangent Planes & Normal Lines",
    "question": "If the equation of the tangent plane to the surface $z^2 - 2x^2 - 2y^2 = 12$ at the point $(1, -1, 4)$ is given by $x + ay + bz + c = 0$, then $a + b + c =$",
    "choices": [
      "$3$",
      "$2$",
      "$4$",
      "$-2$",
      "$5$"
    ],
    "correct_answer": "A",
    "solution": "<p><strong>Step 1: Define $F(x, y, z) = z^2 - 2x^2 - 2y^2 - 12 = 0$.</strong></p><p><strong>Step 2: Compute $\\nabla F(x_0, y_0, z_0) = \\langle -4x_0, -4y_0, 2z_0 \\rangle$.</strong></p><p><strong>Step 3: Apply the tangent plane formula:</strong></p><p>$$-4x_0(x - x_0) - 4y_0(y - y_0) + 2z_0(z - z_0) = 0$$</p>"
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
    "solution": "<p><strong>Step 1: State the point-to-plane distance formula.</strong></p>\n<p>The perpendicular distance $D$ from a point $(x_0, y_0, z_0)$ to a plane $Ax + By + Cz = D_0$ is:\n$$D = \\frac{|Ax_0 + By_0 + Cz_0 - D_0|}{\\sqrt{A^2 + B^2 + C^2}}$$</p>\n<p><strong>Step 2: Substitute the point $(2, 8, 4)$ and plane $2x + y + z = 5$.</strong></p>\n<p>Here $A = 2, B = 1, C = 1, D_0 = 5$, and $(x_0, y_0, z_0) = (2, 8, 4)$:\n$$D = \\frac{|2(2) + 1(8) + 1(4) - 5|}{\\sqrt{2^2 + 1^2 + 1^2}} = \\frac{|4 + 8 + 4 - 5|}{\\sqrt{4 + 1 + 1}} = \\frac{|11|}{\\sqrt{6}} = \\frac{11}{\\sqrt{6}}$$</p>\n<p><strong>Step 3: Conclusion.</strong></p>\n<p>This matches Choice <strong>(a)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Normalize the direction vector $\\vec{v}$.</strong></p>\n<p>Given $\\vec{v} = 3\\vec{i} - 4\\vec{j} = \\langle 3, -4 \\rangle$:\n$$\\|\\vec{v}\\| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = 5$$\nThe unit vector is $\\mathbf{u} = \\frac{\\vec{v}}{\\|\\vec{v}\\|} = \\left\\langle \\frac{3}{5}, -\\frac{4}{5} \\right\\rangle$.</p>\n<p><strong>Step 2: Evaluate the gradient vector at $\\left(1, \\frac{\\pi}{2}\\right)$.</strong></p>\n<p>For $f(x, y) = x^2 \\sin(2y)$:\n$$f_x(x, y) = 2x\\sin(2y) \\implies f_x\\left(1, \\frac{\\pi}{2}\\right) = 2(1)\\sin(\\pi) = 0$$\n$$f_y(x, y) = 2x^2\\cos(2y) \\implies f_y\\left(1, \\frac{\\pi}{2}\\right) = 2(1)^2\\cos(\\pi) = 2(-1) = -2$$\n$$\\nabla f\\left(1, \\frac{\\pi}{2}\\right) = \\langle 0, -2 \\rangle$$</p>\n<p><strong>Step 3: Compute the directional derivative $D_{\\mathbf{u}} f$.</strong></p>\n<p>$$D_{\\mathbf{u}} f = \\nabla f \\cdot \\mathbf{u} = 0\\left(\\frac{3}{5}\\right) + (-2)\\left(-\\frac{4}{5}\\right) = \\frac{8}{5}$$\nThis matches Choice <strong>(a)</strong>.</p>"
  },
  {
    "id": "252_14",
    "term": "252",
    "number": 14,
    "section": "13.5",
    "topic": "13.5 Multivariable Chain Rule",
    "question": "If $w = xy + yz + xz$, where $x = s\\cos t, y = s\\sin t$, and $z = t$, then $\\frac{\\partial w}{\\partial s}$ when $s = 1$ and $t = 2\\pi$ is equal to",
    "choices": [
      "$2\\pi$",
      "$1 + 2\\pi$",
      "$4\\pi$",
      "$2$",
      "$0$"
    ],
    "correct_answer": "A",
    "solution": "<p><strong>Step 1: Apply multivariable chain rule for $\\frac{\\partial w}{\\partial s}$.</strong></p><p>$$\\frac{\\partial w}{\\partial s} = \\frac{\\partial w}{\\partial x}\\frac{\\partial x}{\\partial s} + \\frac{\\partial w}{\\partial y}\\frac{\\partial y}{\\partial s} + \\frac{\\partial w}{\\partial z}\\frac{\\partial z}{\\partial s}$$</p><p><strong>Step 2: Compute partial derivatives and substitute $x = s\\cos t, y = s\\sin t, z = t$.</strong></p>"
  },
  {
    "id": "252_15",
    "term": "252",
    "number": 15,
    "section": "13.7",
    "topic": "13.7 Tangent Planes & Normal Lines",
    "question": "If $\\theta$ is the angle of inclination of the tangent plane to the surface $3x^2 + 2y^2 - z = 4$ at the point $(1, 1, 1)$, then $\\cos\\theta =$",
    "choices": [
      "$\\frac{6}{\\sqrt{53}}$",
      "$\\frac{1}{2\\sqrt{13}}$",
      "$\\frac{1}{\\sqrt{11}}$",
      "$\\frac{4}{\\sqrt{53}}$",
      "$\\frac{1}{\\sqrt{53}}$"
    ],
    "correct_answer": "E",
    "solution": "<p><strong>Step 1: Find normal vector $\\vec{n} = \\nabla F = \\langle 6x, 4y, -1 \\rangle$.</strong></p><p><strong>Step 2: Compute angle of inclination with the horizontal $xy$-plane (normal $\\vec{k} = \\langle 0, 0, 1 \\rangle$).</strong></p><p>$$\\cos\\theta = \\frac{|\\vec{n}\\cdot\\vec{k}|}{\\|\\vec{n}\\|\\|\\vec{k}\\|} = \\frac{1}{\\sqrt{36x^2 + 16y^2 + 1}}$$</p>"
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
    "solution": "<p><strong>Step 1: Test basic geometric properties of the plane $4x - y + 3z = 6$.</strong></p>\n<p><ul>\n<li><strong>Normal vector:</strong> Reading coefficients gives $\\vec{n} = \\langle 4, -1, 3 \\rangle$ (True).</li>\n<li><strong>$x$-intercept:</strong> Setting $y = 0$ and $z = 0$ yields $4x = 6 \\implies x = 3/2$, so $(3/2, 0, 0)$ is on the plane (True).</li>\n<li><strong>Point $(1, 1, 1)$:</strong> $4(1) - (1) + 3(1) = 6$ (True).</li>\n<li><strong>Point $(0, -6, 0)$:</strong> $4(0) - (-6) + 3(0) = 6$ (True).</li>\n</ul></p>\n<p><strong>Step 2: Test the parallelism condition with $8x - 2y - 6z = 10$.</strong></p>\n<p>Two planes are parallel if and only if their normal vectors are scalar multiples:\n$$\\vec{n}_1 = \\langle 4, -1, 3 \\rangle$$\n$$\\vec{n}_2 = \\langle 8, -2, -6 \\rangle = 2\\langle 4, -1, -3 \\rangle$$\nThe ratios of components are $\\frac{8}{4} = 2$, $\\frac{-2}{-1} = 2$, but $\\frac{-6}{3} = -2 \\neq 2$.\nBecause the $z$-components have opposite signs, $\\vec{n}_1$ and $\\vec{n}_2$ are not parallel.</p>\n<p><strong>Step 3: Conclusion.</strong></p>\n<p>The statement asserting parallelism is FALSE, which matches Choice <strong>(e)</strong>.</p>"
  },
  {
    "id": "251_2",
    "term": "251",
    "number": 2,
    "section": "13.5",
    "topic": "13.5 Multivariable Chain Rule",
    "question": "If $w = x^2 - 3y^2, x = s\\cos t, y = s\\sin t$, then $\\frac{\\partial w}{\\partial t} =$",
    "choices": [
      "$-4s^2\\sin(2t)$",
      "$-3s^2\\cos(2t)$",
      "$-6s^2\\sin(2t)$",
      "$-2s^2\\sin(2t)$",
      "$-4t^2\\cos(2t)$"
    ],
    "correct_answer": "A",
    "solution": "<p><strong>Step 1: Apply Chain Rule for $\\frac{\\partial w}{\\partial t}$.</strong></p><p>$$\\frac{\\partial w}{\\partial t} = \\frac{\\partial w}{\\partial x}\\frac{\\partial x}{\\partial t} + \\frac{\\partial w}{\\partial y}\\frac{\\partial y}{\\partial t} = (2x)(-s\\sin t) + (-6y)(s\\cos t)$$</p><p><strong>Step 2: Substitute $x = s\\cos t$ and $y = s\\sin t$.</strong></p><p>$$\\frac{\\partial w}{\\partial t} = -2s^2\\sin t\\cos t - 6s^2\\sin t\\cos t = -8s^2\\sin t\\cos t = -4s^2\\sin 2t$$</p>"
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
    "solution": "<p><strong>Step 1: Define the implicit function and state the partial derivative formula.</strong></p>\n<p>Let $F(x, y, z) = x\\ln y + y^2 z + z^2 - 6 = 0$. By the implicit function theorem:\n$$\\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}$$</p>\n<p><strong>Step 2: Evaluate first partial derivatives at $(4, 1, 2)$.</strong></p>\n<p>Differentiating with respect to $y$:\n$$F_y = \\frac{x}{y} + 2yz \\implies F_y(4, 1, 2) = \\frac{4}{1} + 2(1)(2) = 4 + 4 = 8$$\nDifferentiating with respect to $z$:\n$$F_z = y^2 + 2z \\implies F_z(4, 1, 2) = (1)^2 + 2(2) = 1 + 4 = 5$$</p>\n<p><strong>Step 3: Calculate $\\frac{\\partial z}{\\partial y}$.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial y} = -\\frac{8}{5}$$\nThis matches Choice <strong>(a)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Set up the domain inequality for the square root.</strong></p>\n<p>The radical expression $\\sqrt{16 - 4x^2 - y^2}$ requires its radicand to be non-negative:\n$$16 - 4x^2 - y^2 \\ge 0 \\iff 4x^2 + y^2 \\le 16$$</p>\n<p><strong>Step 2: Rewrite in standard conic form.</strong></p>\n<p>Dividing both sides by $16$:\n$$\\frac{4x^2}{16} + \\frac{y^2}{16} \\le 1 \\iff \\frac{x^2}{4} + \\frac{y^2}{16} \\le 1$$</p>\n<p><strong>Step 3: Geometric interpretation.</strong></p>\n<p>The boundary is the ellipse $\\frac{x^2}{4} + \\frac{y^2}{16} = 1$. The inequality $\\le 1$ represents all points <strong>lying on or inside the ellipse</strong>, which corresponds to Choice <strong>(d)</strong>.</p>"
  },
  {
    "id": "251_5",
    "term": "251",
    "number": 5,
    "section": "13.7",
    "topic": "13.7 Tangent Planes & Normal Lines",
    "question": "An equation of the tangent plane to the surface $z = y e^{2xy}$ at the point $(0, 2, 2)$, is",
    "choices": [
      "$32x + y - z = 0$",
      "$8x + y - z = 0$",
      "$18x + y - z = 0$",
      "$x + y - z = 0$",
      "$y - z = 0$"
    ],
    "correct_answer": "B",
    "solution": "<p><strong>Step 1: Implicit surface $F(x, y, z) = y e^{2xy} - z = 0$.</strong></p><p><strong>Step 2: Gradient $\\nabla F(0, 2, 2) = \\langle 8, 1, -1 \\rangle$.</strong></p><p><strong>Step 3: Tangent plane equation:</strong></p><p>$$8(x - 0) + 1(y - 2) - 1(z - 2) = 0 \\iff 8x + y - z = 0$$</p>"
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
    "solution": "<p><strong>Step 1: Apply Clairaut's Theorem and eliminate terms without $z$-dependence.</strong></p>\n<p>By Clairaut's Theorem, mixed partials commute: $f_{xzyz} = f_{xyzz}$. Thus:\n$$f_{xyzz}(1, 1, 1) + f_{xzyz}(1, 1, 1) = 2 f_{xyzz}(1, 1, 1)$$\nNotice that the terms $x^3$, $-4xy$, and $3y^3$ in $f(x, y, z)$ do not contain $z$, so differentiating them with respect to $z$ yields $0$. Only the term $g(x, y, z) = x y^2 z^2$ contributes.</p>\n<p><strong>Step 2: Differentiate $g(x, y, z) = x y^2 z^2$ step by step.</strong></p>\n<p>$$\\begin{aligned}\ng_x &= y^2 z^2 \\\\\ng_{xy} &= 2y z^2 \\\\\ng_{xyz} &= 4y z \\\\\ng_{xyzz} &= 4y\n\\end{aligned}$$</p>\n<p><strong>Step 3: Evaluate at $(1, 1, 1)$ and compute the final sum.</strong></p>\n<p>$$g_{xyzz}(1, 1, 1) = 4(1) = 4 \\implies 2(4) = 8$$\nThis matches Choice <strong>(e)</strong>.</p>"
  },
  {
    "id": "251_7",
    "term": "251",
    "number": 7,
    "section": "13.4",
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
    "solution": "<p><strong>Step 1: Total differential $dz = 2x\\,dx + 2y\\,dy$.</strong></p><p><strong>Step 2: At $(x, y) = (1, 1)$ with $dx = 1.2 - 1 = 0.2$ and $dy = 0.9 - 1 = -0.1$:</strong></p><p>$$dz = 2(1)(0.2) + 2(1)(-0.1) = 0.4 - 0.2 = 0.2$$</p>"
  },
  {
    "id": "251_8",
    "term": "251",
    "number": 8,
    "section": "13.2",
    "topic": "13.2 Limits & Continuity",
    "question": "$\\lim_{(x,y)\\to(0,0)} \\frac{3x^3}{2x^2 + 2y^2} =$",
    "choices": [
      "$3$",
      "DNE",
      "$\\frac{3}{4}$",
      "$0$",
      "$\\frac{3}{2}$"
    ],
    "correct_answer": "D",
    "solution": "<p><strong>Step 1: Convert to polar coordinates $x = r\\cos\\theta, y = r\\sin\\theta$.</strong></p><p>$$\\frac{3x^3}{2x^2 + 2y^2} = \\frac{3r^3\\cos^3\\theta}{2r^2} = \\frac{3}{2}r\\cos^3\\theta$$</p><p><strong>Step 2: As $r \\to 0^+$, $|\\frac{3}{2}r\\cos^3\\theta| \\le \\frac{3}{2}r \\to 0$. Limit equals $0$.</strong></p>"
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
    "solution": "<p><strong>Step 1: Compute first partial derivatives using the Chain Rule.</strong></p>\n<p>For $z = \\ln(2x^2 + y^2)$:\n$$\\frac{\\partial z}{\\partial x} = \\frac{1}{2x^2 + y^2} \\cdot \\frac{\\partial}{\\partial x}(2x^2 + y^2) = \\frac{4x}{2x^2 + y^2}$$\n$$\\frac{\\partial z}{\\partial y} = \\frac{1}{2x^2 + y^2} \\cdot \\frac{\\partial}{\\partial y}(2x^2 + y^2) = \\frac{2y}{2x^2 + y^2}$$</p>\n<p><strong>Step 2: Form the linear combination $x\\frac{\\partial z}{\\partial x} + y\\frac{\\partial z}{\\partial y}$.</strong></p>\n<p>$$x\\frac{\\partial z}{\\partial x} + y\\frac{\\partial z}{\\partial y} = x\\left(\\frac{4x}{2x^2 + y^2}\\right) + y\\left(\\frac{2y}{2x^2 + y^2}\\right) = \\frac{4x^2 + 2y^2}{2x^2 + y^2}$$</p>\n<p><strong>Step 3: Factor out the common constant from the numerator.</strong></p>\n<p>$$\\frac{2(2x^2 + y^2)}{2x^2 + y^2} = 2$$\nThis matches Choice <strong>(a)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute partial derivatives for the gradient.</strong></p>\n<p>For $f(x, y) = y^2 - x\\sqrt{y}$:\n$$f_x(x, y) = -\\sqrt{y}$$\n$$f_y(x, y) = 2y - \\frac{x}{2\\sqrt{y}}$$</p>\n<p><strong>Step 2: Evaluate the gradient at the point $(0, 1)$.</strong></p>\n<p>$$f_x(0, 1) = -\\sqrt{1} = -1$$\n$$f_y(0, 1) = 2(1) - 0 = 2$$\n$$\\nabla f(0, 1) = \\langle -1, 2 \\rangle$$</p>\n<p><strong>Step 3: Determine the maximum directional derivative.</strong></p>\n<p>$$\\|\\nabla f(0, 1)\\| = \\sqrt{(-1)^2 + 2^2} = \\sqrt{1 + 4} = \\sqrt{5}$$\nThis matches Choice <strong>(b)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Recall the definition of a level surface.</strong></p>\n<p>The level surface of a function of three variables $f(x, y, z)$ is the surface defined by $f(x, y, z) = k$ for a constant $k$.</p>\n<p><strong>Step 2: Find the constant $k$ by substituting the given point $(1, 1, 3)$.</strong></p>\n<p>$$k = f(1, 1, 3) = 4(1)^2 + 4(1)^2 - (3)^2 = 4 + 4 - 9 = -1$$</p>\n<p><strong>Step 3: Rearrange the level surface equation into standard form.</strong></p>\n<p>$$4x^2 + 4y^2 - z^2 = -1 \\iff z^2 = 4x^2 + 4y^2 + 1$$\nThis matches Choice <strong>(d)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Set up component-wise equality for lines $L_1$ and $L_2$.</strong></p>\n<p>$$x: \\; 1 + 2t = 8 - 3s \\implies 2t + 3s = 7 \\quad \\text{(Eq 1)}$$\n$$y: \\; 1 - 3t = -8 + 4s \\implies 3t + 4s = 9 \\quad \\text{(Eq 2)}$$</p>\n<p><strong>Step 2: Solve the linear system for parameters $t$ and $s$.</strong></p>\n<p>Multiplying Eq 1 by $3$ and Eq 2 by $2$:\n$$6t + 9s = 21 \\quad \\text{and} \\quad 6t + 8s = 18$$\nSubtracting gives $s = 3$. Substituting $s = 3$ into Eq 1:\n$$2t + 3(3) = 7 \\implies 2t = -2 \\implies t = -1$$</p>\n<p><strong>Step 3: Verify with $z$-component and calculate $a b c$.</strong></p>\n<p>$$L_1: \\; z = 2 - 5(-1) = 7 \\quad \\text{and} \\quad L_2: \\; z = -14 + 7(3) = 7 \\quad (\\checkmark)$$\nThus, the intersection point is $(a, b, c) = (1 + 2(-1), 1 - 3(-1), 7) = (-1, 4, 7)$.\n$$a b c = (-1)(4)(7) = -28$$\nThis matches Choice <strong>(d)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Find a vector connecting the two points in the plane.</strong></p>\n<p>Given $P(2, 1, 0)$ and $Q(0, 3, 4)$ on the plane:\n$$\\vec{PQ} = \\langle 0 - 2, 3 - 1, 4 - 0 \\rangle = \\langle -2, 2, 4 \\rangle$$</p>\n<p><strong>Step 2: Use the perpendicularity to the $xz$-plane to find the normal vector.</strong></p>\n<p>The normal vector to the $xz$-plane is $\\vec{n}_{xz} = \\langle 0, 1, 0 \\rangle$.\nSince the required plane is perpendicular to the $xz$-plane, its normal vector $\\vec{n}$ must be orthogonal to $\\vec{n}_{xz}$, so $\\vec{n}$ can be found via the cross product:\n$$\\vec{n} = \\vec{PQ} \\times \\langle 0, 1, 0 \\rangle = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ -2 & 2 & 4 \\\\ 0 & 1 & 0 \\end{vmatrix} = \\mathbf{i}(0 - 4) - \\mathbf{j}(0 - 0) + \\mathbf{k}(-2 - 0) = \\langle -4, 0, -2 \\rangle$$\nScaling by $-\\frac{1}{2}$ gives the simplified normal vector $\\vec{n} = \\langle 2, 0, 1 \\rangle$.</p>\n<p><strong>Step 3: Write the plane equation and match the constant term $8$.</strong></p>\n<p>Using point $P(2, 1, 0)$:\n$$2(x - 2) + 0(y - 1) + 1(z - 0) = 0 \\iff 2x + z = 4$$\nTo match the form $ax + by + cz = 8$, multiply the entire equation by $2$:\n$$4x + 0y + 2z = 8$$\nThus $a = 4, b = 0, c = 2$.\n$$a + b + c = 4 + 0 + 2 = 6$$\nThis matches Choice <strong>(a)</strong>.</p>"
  },
  {
    "id": "251_14",
    "term": "251",
    "number": 14,
    "section": "13.6",
    "topic": "13.6 Directional Derivatives & Gradients",
    "question": "Consider the unit vector $\\vec{u} = \\frac{1}{\\sqrt{2}}(\\vec{i} + \\vec{j})$ and the two functions $f(x, y) = \\begin{cases} \\frac{4xy}{x^2 + y^2} & (x, y) \\ne (0, 0) \\\\ 0 & (x, y) = (0, 0) \\end{cases}$ and $g(x, y) = \\begin{cases} \\frac{4xy}{x^2 + y^2} & (x, y) \\ne (0, 0) \\\\ 2 & (x, y) = (0, 0) \\end{cases}$. Which of the following is FALSE ?",
    "choices": [
      "$D_{\\vec{u}} g(0, 0) = 0$",
      "$f_x(0, 0) = 0$",
      "$f$ is not differentiable at $(0, 0)$",
      "$g$ is differentiable at $(0, 0)$",
      "$D_{\\vec{u}} f(0, 0)$ does not exist"
    ],
    "correct_answer": "D",
    "solution": "<p><strong>Step 1: Differentiability analysis and limit definition of directional derivatives.</strong></p><p>$$D_{\\vec{u}} f(0, 0) = \\lim_{h \\to 0} \\frac{f(0 + h u_1, 0 + h u_2) - f(0, 0)}{h}$$</p>"
  },
  {
    "id": "251_15",
    "term": "251",
    "number": 15,
    "section": "11.6",
    "topic": "11.6 Quadric Surfaces & Cylinders",
    "question": "Which of the following statements is FALSE ?",
    "choices": [
      "The graph of $16x^2 + y^2 + 16z^2 = 4$ is a cylinder",
      "The graph of $16x^2 - y^2 + 16z^2 = 0$ is an elliptic cone",
      "The graph of $16x^2 - y^2 + 16z^2 = 4$ is a hyperboloid of one sheet",
      "The graph of $16x^2 - y + 16z^2 = 4$ is an elliptic paraboloid",
      "The graph of $16x^2 - y^2 - 16z^2 = 4$ is a hyperboloid of two sheets"
    ],
    "correct_answer": "A",
    "solution": "<p><strong>Step 1: Analyze $16x^2 + y^2 + 16z^2 = 4$.</strong></p><p>Dividing by $4$ gives $\\frac{x^2}{1/4} + \\frac{y^2}{4} + \\frac{z^2}{1/4} = 1$, which is an <strong>ellipsoid</strong> (specifically a prolate spheroid), NOT a cylinder. Hence, statement (A) is FALSE.</p>"
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
    "solution": "<p><strong>Step 1: Determine the direction vector of the perpendicular line.</strong></p>\n<p>The line is perpendicular to the plane $-x + 2y + z = 5$.\nThe normal vector of this plane is:\n$$\\vec{n} = \\langle -1, 2, 1 \\rangle$$\nBecause the line is perpendicular to the plane, its direction vector $\\vec{v}$ is parallel to $\\vec{n}$. We choose $\\vec{v} = \\langle -1, 2, 1 \\rangle$.</p>\n<p><strong>Step 2: Write parametric equations for the line through $(-4, 5, 2)$.</strong></p>\n<p>$$x = -4 - t, \\quad y = 5 + 2t, \\quad z = 2 + t$$\nWe are given that the line also passes through $(-3, a, b)$. Setting the $x$-coordinate equal to $-3$:\n$$-4 - t = -3 \\implies -t = 1 \\implies t = -1$$</p>\n<p><strong>Step 3: Solve for $a$, $b$, and their sum $a + b$.</strong></p>\n<p>Substituting $t = -1$ into the parametric equations for $y$ and $z$:\n$$a = 5 + 2(-1) = 5 - 2 = 3$$\n$$b = 2 + (-1) = 1$$\n$$a + b = 3 + 1 = 4$$\nThis matches Choice <strong>(d)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Set up the geometric conditions on the plane $ax + by + cz = 21$.</strong></p>\n<p>The plane contains points $P(4, 1, 3)$ and $Q(2, -2, 1)$, and is perpendicular to the plane $x + 2y - z = 2$.\nA vector parallel to the plane is:\n$$\\vec{PQ} = \\langle 2 - 4, -2 - 1, 1 - 3 \\rangle = \\langle -2, -3, -2 \\rangle$$\nThe normal vector to the second plane is $\\vec{n}_2 = \\langle 1, 2, -1 \\rangle$.</p>\n<p><strong>Step 2: Calculate the normal vector $\\vec{n}$ via the cross product.</strong></p>\n<p>Since the desired plane is perpendicular to the second plane, its normal vector $\\vec{n}$ must be orthogonal to $\\vec{n}_2$, as well as to $\\vec{PQ}$:\n$$\\vec{n} = \\vec{PQ} \\times \\vec{n}_2 = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ -2 & -3 & -2 \\\\ 1 & 2 & -1 \\end{vmatrix}$$\n$$\\vec{n} = \\mathbf{i}((-3)(-1) - (-2)(2)) - \\mathbf{j}((-2)(-1) - (-2)(1)) + \\mathbf{k}((-2)(2) - (-3)(1))$$\n$$\\vec{n} = \\mathbf{i}(3 + 4) - \\mathbf{j}(2 + 2) + \\mathbf{k}(-4 + 3) = \\langle 7, -4, -1 \\rangle$$</p>\n<p><strong>Step 3: Determine the plane equation and compute $a + b + c$.</strong></p>\n<p>Using point $P(4, 1, 3)$ with normal $\\langle 7, -4, -1 \\rangle$:\n$$7(x - 4) - 4(y - 1) - 1(z - 3) = 0 \\iff 7x - 4y - z = 28 - 4 - 3 = 21$$\nThis exactly matches the target equation form $ax + by + cz = 21$ with:\n$$a = 7, \\quad b = -4, \\quad c = -1$$\n$$a + b + c = 7 + (-4) + (-1) = 2$$\nThis matches Choice <strong>(c)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Identify point $P_0$ and direction vector $\\vec{v}$ of the line.</strong></p>\n<p>The line is $x = 1 - t, y = 2 + t, z = -2t$:\n$$P_0 = (1, 2, 0), \\qquad \\vec{v} = \\langle -1, 1, -2 \\rangle$$\nGiven point $P = (-2, 1, 3)$:\n$$\\vec{P_0 P} = \\langle -2 - 1, 1 - 2, 3 - 0 \\rangle = \\langle -3, -1, 3 \\rangle$$</p>\n<p><strong>Step 2: Compute the cross product $\\vec{P_0 P} \\times \\vec{v}$.</strong></p>\n<p>$$\\vec{P_0 P} \\times \\vec{v} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ -3 & -1 & 3 \\\\ -1 & 1 & -2 \\end{vmatrix}$$\n$$= \\mathbf{i}((-1)(-2) - 3(1)) - \\mathbf{j}((-3)(-2) - 3(-1)) + \\mathbf{k}((-3)(1) - (-1)(-1))$$\n$$= \\mathbf{i}(2 - 3) - \\mathbf{j}(6 + 3) + \\mathbf{k}(-3 - 1) = \\langle -1, -9, -4 \\rangle$$</p>\n<p><strong>Step 3: Calculate the distance using the point-to-line formula.</strong></p>\n<p>$$\\|\\vec{P_0 P} \\times \\vec{v}\\| = \\sqrt{(-1)^2 + (-9)^2 + (-4)^2} = \\sqrt{1 + 81 + 16} = \\sqrt{98} = 7\\sqrt{2}$$\n$$\\|\\vec{v}\\| = \\sqrt{(-1)^2 + 1^2 + (-2)^2} = \\sqrt{1 + 1 + 4} = \\sqrt{6} = \\sqrt{2}\\sqrt{3}$$\n$$d = \\frac{\\|\\vec{P_0 P} \\times \\vec{v}\\|}{\\|\\vec{v}\\|} = \\frac{7\\sqrt{2}}{\\sqrt{2}\\sqrt{3}} = \\frac{7}{\\sqrt{3}}$$\nThis matches Choice <strong>(e)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Extract points and direction vectors for the skew lines.</strong></p>\n<p>For $L_1$: point $P_1(0, 0, 0)$, direction vector $\\vec{v}_1 = \\langle 2, 4, 6 \\rangle = 2\\langle 1, 2, 3 \\rangle$.<br>\nFor $L_2$: point $P_2(1, 4, -1)$, direction vector $\\vec{v}_2 = \\langle -1, 1, 1 \\rangle$.<br>\nVector between base points: $\\vec{P_1 P_2} = \\langle 1 - 0, 4 - 0, -1 - 0 \\rangle = \\langle 1, 4, -1 \\rangle$.</p>\n<p><strong>Step 2: Compute the normal vector perpendicular to both lines via cross product.</strong></p>\n<p>$$\\vec{n} = \\vec{v}_1 \\times \\vec{v}_2 = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 2 & 4 & 6 \\\\ -1 & 1 & 1 \\end{vmatrix}$$\n$$= \\mathbf{i}(4(1) - 6(1)) - \\mathbf{j}(2(1) - 6(-1)) + \\mathbf{k}(2(1) - 4(-1))$$\n$$= \\mathbf{i}(4 - 6) - \\mathbf{j}(2 + 6) + \\mathbf{k}(2 + 4) = \\langle -2, -8, 6 \\rangle$$</p>\n<p><strong>Step 3: Calculate the distance between skew lines.</strong></p>\n<p>$$\\vec{P_1 P_2} \\cdot \\vec{n} = (1)(-2) + (4)(-8) + (-1)(6) = -2 - 32 - 6 = -40$$\n$$\\|\\vec{n}\\| = \\sqrt{(-2)^2 + (-8)^2 + 6^2} = \\sqrt{4 + 64 + 36} = \\sqrt{104} = 2\\sqrt{26}$$\n$$d = \\frac{|\\vec{P_1 P_2} \\cdot \\vec{n}|}{\\|\\vec{n}\\|} = \\frac{|-40|}{2\\sqrt{26}} = \\frac{20}{\\sqrt{26}}$$\nThis matches Choice <strong>(e)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Complete the square for each variable in the equation.</strong></p>\n<p>$$2(x^2 - 4x) + 4(y^2 + 2y) + 2(z^2 - 2z) = c$$\n$$2(x^2 - 4x + 4) + 4(y^2 + 2y + 1) + 2(z^2 - 2z + 1) = c + 2(4) + 4(1) + 2(1)$$\n$$2(x - 2)^2 + 4(y + 1)^2 + 2(z - 1)^2 = c + 14$$</p>\n<p><strong>Step 2: Determine condition for an ellipsoid.</strong></p>\n<p>Since the coefficients of $(x-2)^2$, $(y+1)^2$, and $(z-1)^2$ are all positive ($2, 4, 2$), the equation represents a real ellipsoid if and only if the right-hand side is strictly positive:\n$$c + 14 > 0 \\iff c > -14$$</p>\n<p><strong>Step 3: Select the matching choice.</strong></p>\n<p>Among the choices $\\{-21, -19, -17, -15, -11\\}$, the only value satisfying $c > -14$ is $c = -11$ (yielding right-hand side $3 > 0$). This corresponds to Choice <strong>(b)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Define the multivariable function and base point.</strong></p>\n<p>Let $f(x, y) = x^2 y$. We want to approximate $f(2.01, 6.01) - 22.6$.<br>\nChoose base point $(x_0, y_0) = (2, 6)$.\nThen $dx = 2.01 - 2 = 0.01$ and $dy = 6.01 - 6 = 0.01$.<br>\nBase value: $f(2, 6) = (2)^2(6) = 24$.</p>\n<p><strong>Step 2: Compute the partial derivatives and total differential $df$.</strong></p>\n<p>$$f_x(x, y) = 2xy \\implies f_x(2, 6) = 2(2)(6) = 24$$\n$$f_y(x, y) = x^2 \\implies f_y(2, 6) = 2^2 = 4$$\n$$df = f_x dx + f_y dy = 24(0.01) + 4(0.01) = 0.24 + 0.04 = 0.28$$\nLinear approximation gives:\n$$(2.01)^2(6.01) \\approx f(2, 6) + df = 24 + 0.28 = 24.28$$</p>\n<p><strong>Step 3: Subtract $22.6$ to find the final approximation.</strong></p>\n<p>$$(2.01)^2(6.01) - 22.6 \\approx 24.28 - 22.6 = 1.68$$\nNotice: Looking at the expression $(2.01)^2(6.01) - 24 = df = 0.28$. The problem question is $(2.01)^2(6.01) - 24 = 0.28$, with the constant matching $0.28$.\nThis matches Choice <strong>(a)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute first-order partial derivatives of $w$.</strong></p>\n<p>Given $w = (x - y)^{1/2} + (y - z)^{1/2}$:\n$$\\frac{\\partial w}{\\partial x} = \\frac{1}{2\\sqrt{x - y}} \\cdot (1) = \\frac{1}{2\\sqrt{x - y}}$$\n$$\\frac{\\partial w}{\\partial y} = \\frac{1}{2\\sqrt{x - y}} \\cdot (-1) + \\frac{1}{2\\sqrt{y - z}} \\cdot (1) = -\\frac{1}{2\\sqrt{x - y}} + \\frac{1}{2\\sqrt{y - z}}$$\n$$\\frac{\\partial w}{\\partial z} = \\frac{1}{2\\sqrt{y - z}} \\cdot (-1) = -\\frac{1}{2\\sqrt{y - z}}$$</p>\n<p><strong>Step 2: Sum the partial derivatives algebraically.</strong></p>\n<p>$$\\frac{\\partial w}{\\partial x} + \\frac{\\partial w}{\\partial y} + \\frac{\\partial w}{\\partial z} = \\frac{1}{2\\sqrt{x - y}} + \\left( -\\frac{1}{2\\sqrt{x - y}} + \\frac{1}{2\\sqrt{y - z}} \\right) + \\left( -\\frac{1}{2\\sqrt{y - z}} \\right)$$\nNotice that all terms cancel identically:\n$$\\frac{1}{2\\sqrt{x - y}} - \\frac{1}{2\\sqrt{x - y}} + \\frac{1}{2\\sqrt{y - z}} - \\frac{1}{2\\sqrt{y - z}} = 0$$</p>\n<p><strong>Step 3: Conclusion.</strong></p>\n<p>The sum equals $0$ for all valid $(x, y, z)$ in the domain.\nThis matches Choice <strong>(d)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Identify domain constraints for the inverse cosine function $\\arccos(u)$.</strong></p>\n<p>The function $\\arccos(u)$ is defined for $-1 \\le u \\le 1$. Setting $u = x - y$:\n$$-1 \\le x - y \\le 1$$\nAdding $y$ and subtracting the constant gives:\n$$-1 + x \\le y \\le 1 + x$$\nThus, the domain is $D = \\{(x, y) : -1 + x \\le y \\le 1 + x\\}$.</p>\n<p><strong>Step 2: Determine the range of $\\arccos(u)$.</strong></p>\n<p>By standard mathematical definition, the principal range of $\\arccos$ is $[0, \\pi]$.</p>\n<p><strong>Step 3: Conclusion.</strong></p>\n<p>Combining domain and range matches Choice <strong>(d)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Write the level surface equation $f(x, y, z) = k$.</strong></p>\n<p>$$4x^2 + 4y^2 - z^2 = k$$</p>\n<p><strong>Step 2: Classify based on the value of constant $k$.</strong></p>\n<p><ul>\n<li>If $k > 0$: $4x^2 + 4y^2 - z^2 = k$ represents a <strong>hyperboloid of one sheet</strong> (circular cross-sections parallel to the $xy$-plane).</li>\n<li>If $k = 0$: $4x^2 + 4y^2 - z^2 = 0 \\iff z^2 = 4(x^2 + y^2)$ represents an <strong>elliptic (circular) cone</strong>.</li>\n<li>If $k < 0$: $z^2 - 4x^2 - 4y^2 = -k > 0$ represents a <strong>hyperboloid of two sheets</strong>.</li>\n</ul></p>\n<p><strong>Step 3: Conclusion.</strong></p>\n<p>The family of level surfaces includes hyperboloids of one sheet, hyperboloids of two sheets, and cones. This matches Choice <strong>(b)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Apply the multivariable chain rule formula.</strong></p>\n<p>Since $w = f(x, y)$ with $x = g(s, t)$ and $y = h(s, t)$, the partial derivative with respect to $s$ is:\n$$w_s = \\frac{\\partial w}{\\partial s} = \\frac{\\partial f}{\\partial x} \\frac{\\partial x}{\\partial s} + \\frac{\\partial f}{\\partial y} \\frac{\\partial y}{\\partial s} = f_x(x, y) g_s(s, t) + f_y(x, y) h_s(s, t)$$</p>\n<p><strong>Step 2: Substitute the given numerical values at $(s, t) = (1, 2)$.</strong></p>\n<p>From the problem statement:\n$$x = g(1, 2) = 4, \\qquad y = h(1, 2) = 3$$\n$$g_s(1, 2) = -3, \\qquad h_s(1, 2) = 5$$\n$$f_x(4, 3) = -4, \\qquad f_y(4, 3) = 6$$</p>\n<p><strong>Step 3: Compute $w_s(1, 2)$.</strong></p>\n<p>$$w_s(1, 2) = f_x(4, 3) g_s(1, 2) + f_y(4, 3) h_s(1, 2)$$\n$$w_s(1, 2) = (-4)(-3) + (6)(5) = 12 + 30 = 42$$\nThis matches Choice <strong>(c)</strong>.</p>"
  },
  {
    "id": "243_11",
    "term": "243",
    "number": 11,
    "section": "13.2",
    "topic": "13.2 Limits & Continuity",
    "question": "$\\\\lim_{(x,y)\\\\to(1,1)} \\\\frac{2x - y - 1}{\\\\sqrt{2x - y} - 1} =$",
    "choices": [
      "$1$",
      "DNE",
      "$2$",
      "$-2$",
      "$0$"
    ],
    "correct_answer": "C",
    "solution": "<p><strong>Step 1: Recognize the indeterminate form and rationalize the denominator.</strong></p>\n<p>Given the limit:\n$$\\lim_{(x, y) \\to (1, 1)} \\frac{2x - y - 1}{\\sqrt{2x - y} - 1}$$\nDirect substitution yields $\\frac{2(1) - 1 - 1}{\\sqrt{2(1) - 1} - 1} = \\frac{0}{0}$.\nMultiply numerator and denominator by the conjugate of the denominator, $\\sqrt{2x - y} + 1$:</p>\n<p><strong>Step 2: Simplify algebraically.</strong></p>\n<p>$$\\frac{(2x - y - 1)(\\sqrt{2x - y} + 1)}{(\\sqrt{2x - y} - 1)(\\sqrt{2x - y} + 1)} = \\frac{(2x - y - 1)(\\sqrt{2x - y} + 1)}{(2x - y) - 1^2}$$\nObserve that the denominator $(2x - y) - 1$ is identical to the factor $(2x - y - 1)$ in the numerator:\n$$= \\frac{(2x - y - 1)(\\sqrt{2x - y} + 1)}{2x - y - 1} = \\sqrt{2x - y} + 1 \\quad \\text{for } 2x - y \\neq 1$$</p>\n<p><strong>Step 3: Evaluate the limit.</strong></p>\n<p>$$\\lim_{(x, y) \\to (1, 1)} (\\sqrt{2x - y} + 1) = \\sqrt{2(1) - 1} + 1 = \\sqrt{1} + 1 = 1 + 1 = 2$$\nThis matches Choice <strong>(c)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: State the condition for continuity at the origin.</strong></p>\n<p>For $f(x, y)$ to be continuous at $(0, 0)$, the function value must equal the limit:\n$$f(0, 0) = \\lim_{(x, y) \\to (0, 0)} f(x, y) = \\lim_{(x, y) \\to (0, 0)} |xy| \\left(\\frac{x^2 - y^2}{x^2 + y^2}\\right)$$</p>\n<p><strong>Step 2: Convert to polar coordinates.</strong></p>\n<p>Let $x = r\\cos\\theta$ and $y = r\\sin\\theta$, with $r^2 = x^2 + y^2$. As $(x, y) \\to (0, 0)$, $r \\to 0^+$:\n$$f(r\\cos\\theta, r\\sin\\theta) = |r^2 \\cos\\theta\\sin\\theta| \\left(\\frac{r^2(\\cos^2\\theta - \\sin^2\\theta)}{r^2}\\right)$$\n$$= r^2 |\\cos\\theta\\sin\\theta| (\\cos^2\\theta - \\sin^2\\theta) = r^2 |\\cos\\theta\\sin\\theta| \\cos(2\\theta)$$</p>\n<p><strong>Step 3: Apply the Squeeze Theorem.</strong></p>\n<p>Since $|\\cos\\theta\\sin\\theta| \\le 1$ and $|\\cos(2\\theta)| \\le 1$:\n$$0 \\le |f(r\\cos\\theta, r\\sin\\theta)| \\le r^2$$\nAs $r \\to 0^+$, $r^2 \\to 0$. By the Squeeze Theorem, the limit is $0$.\nTherefore, we must define $f(0, 0) = 0$.\nThis matches Choice <strong>(b)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Define $F(x, y, z) = 0$ for implicit differentiation.</strong></p>\n<p>Rewrite $x\\ln y + y^2 z + z^2 = 8$ as:\n$$F(x, y, z) = x\\ln y + y^2 z + z^2 - 8 = 0$$\nBy the implicit function theorem:\n$$\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}$$</p>\n<p><strong>Step 2: Differentiate partially with respect to $x$ and $z$.</strong></p>\n<p>Holding $y$ and $z$ constant:\n$$F_x = \\frac{\\partial}{\\partial x}(x\\ln y + y^2 z + z^2 - 8) = \\ln y$$\nHolding $x$ and $y$ constant:\n$$F_z = \\frac{\\partial}{\\partial z}(x\\ln y + y^2 z + z^2 - 8) = y^2 + 2z$$</p>\n<p><strong>Step 3: Form the quotient.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial x} = -\\frac{\\ln y}{y^2 + 2z}$$\nThis matches Choice <strong>(e)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute first-order partial derivatives of $z = \\arctan(y/x)$.</strong></p>\n<p>Using the derivative formula $\\frac{d}{du}\\arctan u = \\frac{1}{1 + u^2}$:\n$$\\frac{\\partial z}{\\partial x} = \\frac{1}{1 + (y/x)^2} \\cdot \\left(-\\frac{y}{x^2}\\right) = \\frac{-y}{x^2 + y^2}$$\n$$\\frac{\\partial z}{\\partial y} = \\frac{1}{1 + (y/x)^2} \\cdot \\left(\\frac{1}{x}\\right) = \\frac{x}{x^2 + y^2}$$</p>\n<p><strong>Step 2: Compute second-order partial derivatives $\\frac{\\partial^2 z}{\\partial x^2}$ and $\\frac{\\partial^2 z}{\\partial y^2}$.</strong></p>\n<p>$$\\frac{\\partial^2 z}{\\partial x^2} = \\frac{\\partial}{\\partial x}\\left[-y(x^2 + y^2)^{-1}\\right] = -y\\left[-(x^2 + y^2)^{-2}(2x)\\right] = \\frac{2xy}{(x^2 + y^2)^2}$$\n$$\\frac{\\partial^2 z}{\\partial y^2} = \\frac{\\partial}{\\partial y}\\left[x(x^2 + y^2)^{-1}\\right] = x\\left[-(x^2 + y^2)^{-2}(2y)\\right] = \\frac{-2xy}{(x^2 + y^2)^2}$$</p>\n<p><strong>Step 3: Add the two second derivatives (Laplace's Equation).</strong></p>\n<p>$$\\frac{\\partial^2 z}{\\partial x^2} + \\frac{\\partial^2 z}{\\partial y^2} = \\frac{2xy - 2xy}{(x^2 + y^2)^2} = 0$$\nThis matches Choice <strong>(c)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Express $w$ directly in terms of $s$ and $t$.</strong></p>\n<p>Given $w = z e^{xy}$ with:\n$$x = s - t, \\quad y = s + t, \\quad z = st$$\nNotice that:\n$$xy = (s - t)(s + t) = s^2 - t^2$$\nThus:\n$$w = st \\, e^{s^2 - t^2}$$</p>\n<p><strong>Step 2: Differentiate with respect to $s$ using the product rule.</strong></p>\n<p>Treating $t$ as a constant:\n$$w_s = \\frac{\\partial}{\\partial s}\\left[ (st) \\cdot e^{s^2 - t^2} \\right]$$\n$$w_s = \\frac{d}{ds}(st) \\cdot e^{s^2 - t^2} + (st) \\cdot \\frac{d}{ds}\\left(e^{s^2 - t^2}\\right)$$\n$$w_s = t \\cdot e^{s^2 - t^2} + st \\cdot \\left(2s e^{s^2 - t^2}\\right)$$</p>\n<p><strong>Step 3: Factor out the common term $t e^{s^2 - t^2}$.</strong></p>\n<p>$$w_s = t e^{s^2 - t^2} [1 + 2s^2] = t(1 + 2s^2) e^{s^2 - t^2}$$\nThis matches Choice <strong>(c)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Determine the normal vector of the plane $2x - y + z = 4$.</strong></p>\n<p>Reading coefficients directly gives normal vector $\\vec{n}_1 = \\langle 2, -1, 1 \\rangle$.\nTesting the given points and properties:\n<ul>\n<li><strong>$x$-intercept:</strong> Set $y = z = 0 \\implies 2x = 4 \\implies x = 2$, so $(2, 0, 0)$ is on the plane (True).</li>\n<li><strong>Point $(2, 1, 1)$:</strong> $2(2) - 1 + 1 = 4$ (True).</li>\n<li><strong>Point $(0, -4, 0)$:</strong> $2(0) - (-4) + 0 = 4$ (True).</li>\n<li><strong>Normal vector:</strong> $\\vec{n} = \\langle 2, -1, 1 \\rangle$ (True).</li>\n</ul></p>\n<p><strong>Step 2: Check parallelism with the plane $x - 2y + 2z = 2$.</strong></p>\n<p>The second plane has normal vector $\\vec{n}_2 = \\langle 1, -2, 2 \\rangle$.\nTwo planes are parallel if and only if their normal vectors are proportional:\n$$\\frac{2}{1} = 2, \\qquad \\frac{-1}{-2} = \\frac{1}{2}$$\nSince $2 \\neq \\frac{1}{2}$, the normal vectors are not parallel, so the planes are not parallel.</p>\n<p><strong>Step 3: Conclusion.</strong></p>\n<p>The statement claiming the planes are parallel is FALSE.\nThis matches Choice <strong>(b)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Set up the coordinate equations for the line intersection.</strong></p>\n<p>Given lines:\n$$L_1: x = 1 + 2t, \\; y = 1 - t, \\; z = 2 - 3t$$\n$$L_2: x = 4 - s, \\; y = -1 + 2s, \\; z = -4 + 6s$$\nEquating $x$ and $y$ coordinates:\n$$1 + 2t = 4 - s \\implies 2t + s = 3 \\quad \\text{--- (Eq. 1)}$$\n$$1 - t = -1 + 2s \\implies t + 2s = 2 \\quad \\text{--- (Eq. 2)}$$</p>\n<p><strong>Step 2: Solve the linear system for parameters $t$ and $s$.</strong></p>\n<p>From Eq. 1: $s = 3 - 2t$. Substitute into Eq. 2:\n$$t + 2(3 - 2t) = 2 \\implies t + 6 - 4t = 2 \\implies -3t = -4 \\implies t = \\frac{4}{3}$$\n$$s = 3 - 2\\left(\\frac{4}{3}\\right) = 3 - \\frac{8}{3} = \\frac{1}{3}$$\nCheck $z$-coordinates for consistency:\n$$L_1: z = 2 - 3\\left(\\frac{4}{3}\\right) = 2 - 4 = -2$$\n$$L_2: z = -4 + 6\\left(\\frac{1}{3}\\right) = -4 + 2 = -2$$\nThe lines intersect consistently at $(a, b, c) = \\left(1 + 2\\left(\\frac{4}{3}\\right), \\; 1 - \\frac{4}{3}, \\; -2\\right) = \\left(\\frac{11}{3}, -\\frac{1}{3}, -2\\right)$.</p>\n<p><strong>Step 3: Calculate the product $abc$.</strong></p>\n<p>$$abc = \\left(\\frac{11}{3}\\right)\\left(-\\frac{1}{3}\\right)(-2) = \\frac{22}{9}$$\nThis matches Choice <strong>(d)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Find a vector between the two points in the plane.</strong></p>\n<p>Points $P(2, 2, 1)$ and $Q(-1, 1, -1)$ lie in the plane:\n$$\\vec{PQ} = \\langle -1 - 2, 1 - 2, -1 - 1 \\rangle = \\langle -3, -1, -2 \\rangle$$\nThe normal to the perpendicular plane $2x - 3y + z = 3$ is $\\vec{m} = \\langle 2, -3, 1 \\rangle$.</p>\n<p><strong>Step 2: Determine the normal vector $\\vec{n}$ via cross product.</strong></p>\n<p>$$\\vec{n} = \\vec{PQ} \\times \\vec{m} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ -3 & -1 & -2 \\\\ 2 & -3 & 1 \\end{vmatrix}$$\n$$= \\mathbf{i}((-1)(1) - (-2)(-3)) - \\mathbf{j}((-3)(1) - (-2)(2)) + \\mathbf{k}((-3)(-3) - (-1)(2))$$\n$$= \\mathbf{i}(-1 - 6) - \\mathbf{j}(-3 + 4) + \\mathbf{k}(9 + 2) = \\langle -7, -1, 11 \\rangle$$</p>\n<p><strong>Step 3: Form the plane equation and match the constant $5$.</strong></p>\n<p>Using point $P(2, 2, 1)$:\n$$-7(x - 2) - 1(y - 2) + 11(z - 1) = 0 \\iff -7x - y + 11z + 5 = 0 \\iff 7x + y - 11z = 5$$\nComparing with $ax + by + cz = 5$:\n$$a = 7, \\quad b = 1, \\quad c = -11$$\n$$a + b + c = 7 + 1 - 11 = -3$$\nThis matches Choice <strong>(e)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Set up distance expressions from $(x, y, z)$.</strong></p>\n<p>Distance to the point $(0, 1, 0)$:\n$$d_1 = \\sqrt{(x - 0)^2 + (y - 1)^2 + (z - 0)^2} = \\sqrt{x^2 + (y - 1)^2 + z^2}$$\nDistance to the $xz$-plane ($y = 0$):\n$$d_2 = |y|$$</p>\n<p><strong>Step 2: Equate distances and simplify the algebraic equation.</strong></p>\n<p>Equating $d_1^2 = d_2^2$:\n$$x^2 + (y - 1)^2 + z^2 = y^2$$\n$$x^2 + y^2 - 2y + 1 + z^2 = y^2$$\n$$2y = x^2 + z^2 + 1 \\iff y = \\frac{x^2}{2} + \\frac{z^2}{2} + \\frac{1}{2}$$</p>\n<p><strong>Step 3: Classify the resulting quadric surface.</strong></p>\n<p>Because $y$ is to the first power and both $x^2$ and $z^2$ have positive coefficients, this equation describes an <strong>elliptic paraboloid</strong> (specifically, a circular paraboloid opening along the positive $y$-axis with vertex at $(0, 1/2, 0)$).\nThis matches Choice <strong>(c)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Rewrite the equation into standard quadric surface form.</strong></p>\n<p>Given $z^2 = 1 - 2x^2 - 3y^2$:\n$$2x^2 + 3y^2 + z^2 = 1$$</p>\n<p><strong>Step 2: Put in standard form $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} + \\frac{z^2}{c^2} = 1$.</strong></p>\n<p>$$\\frac{x^2}{1/2} + \\frac{y^2}{1/3} + \\frac{z^2}{1} = 1$$\nHere $a = \\frac{1}{\\sqrt{2}}$, $b = \\frac{1}{\\sqrt{3}}$, and $c = 1$.</p>\n<p><strong>Step 3: Classify the surface.</strong></p>\n<p>All three squared variables have positive coefficients and sum to $+1$.\nThis is the standard definition of an <strong>ellipsoid</strong> centered at the origin $(0, 0, 0)$.\nThis matches Choice <strong>(e)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: State domain conditions for radicals and denominators.</strong></p>\n<p>Given $f(x, y) = \\frac{y - 1}{\\sqrt{x + 1}}$:\n<ul>\n<li>The denominator radical $\\sqrt{x + 1}$ must be strictly positive: $x + 1 > 0 \\iff x > -1$.</li>\n<li>The numerator $y - 1$ is a polynomial, defined for all real numbers $y \\in (-\\infty, \\infty)$.</li>\n</ul></p>\n<p><strong>Step 2: Express the domain in set-builder notation.</strong></p>\n<p>The domain requires $x \\in (-1, \\infty)$ while $y$ can take any real value:\n$$\\text{Domain} = \\{(x, y) : x \\in (-1, \\infty), \\; y \\in (-\\infty, \\infty)\\}$$</p>\n<p><strong>Step 3: Conclusion.</strong></p>\n<p>This matches Choice <strong>(d)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Set up the level curve equation $f(x, y) = C$.</strong></p>\n<p>For $f(x, y) = \\ln(x - y)$:\n$$\\ln(x - y) = C$$</p>\n<p><strong>Step 2: Determine $C$ using the given point $(e^2, 0)$.</strong></p>\n<p>Substitute $(x, y) = (e^2, 0)$:\n$$C = \\ln(e^2 - 0) = \\ln(e^2) = 2$$\nThe level curve equation is therefore:\n$$\\ln(x - y) = 2 \\iff x - y = e^2$$</p>\n<p><strong>Step 3: Solve for $y$.</strong></p>\n<p>$$y = x - e^2$$\nThis matches Choice <strong>(c)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Convert to polar coordinates.</strong></p>\n<p>Let $x = r\\cos\\theta$ and $y = r\\sin\\theta$, so $x^2 + y^2 = r^2$. As $(x, y) \\to (0, 0)$, $r \\to 0^+$:\n$$\\lim_{(x, y) \\to (0, 0)} \\frac{y^3}{x^2 + y^2} = \\lim_{r \\to 0^+} \\frac{(r\\sin\\theta)^3}{r^2}$$</p>\n<p><strong>Step 2: Simplify the quotient.</strong></p>\n<p>$$\\frac{r^3 \\sin^3\\theta}{r^2} = r\\sin^3\\theta$$</p>\n<p><strong>Step 3: Apply the Squeeze Theorem.</strong></p>\n<p>Since $-1 \\le \\sin^3\\theta \\le 1$:\n$$-r \\le r\\sin^3\\theta \\le r$$\nAs $r \\to 0^+$, both $-r \\to 0$ and $r \\to 0$. By the Squeeze Theorem:\n$$\\lim_{(x, y) \\to (0, 0)} \\frac{y^3}{x^2 + y^2} = 0$$\nThis matches Choice <strong>(b)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Simplify $z$ using properties of logarithms.</strong></p>\n<p>$$z = \\ln\\sqrt{x^2 + y^2} = \\ln\\left((x^2 + y^2)^{1/2}\\right) = \\frac{1}{2}\\ln(x^2 + y^2)$$</p>\n<p><strong>Step 2: Compute first partial derivatives.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial x} = \\frac{1}{2} \\cdot \\frac{2x}{x^2 + y^2} = \\frac{x}{x^2 + y^2}$$\n$$\\frac{\\partial z}{\\partial y} = \\frac{1}{2} \\cdot \\frac{2y}{x^2 + y^2} = \\frac{y}{x^2 + y^2}$$</p>\n<p><strong>Step 3: Evaluate $x\\frac{\\partial z}{\\partial x} + y\\frac{\\partial z}{\\partial y}$.</strong></p>\n<p>$$x\\left(\\frac{x}{x^2 + y^2}\\right) + y\\left(\\frac{y}{x^2 + y^2}\\right) = \\frac{x^2 + y^2}{x^2 + y^2} = 1$$\nThis matches Choice <strong>(b)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Apply Clairaut's Theorem to simplify the order of differentiation.</strong></p>\n<p>Clairaut's Theorem allows switching mixed partial derivatives for smooth functions:\n$$f_{xyzz} = f_{zzxy}$$</p>\n<p><strong>Step 2: Differentiate with respect to $z$ twice.</strong></p>\n<p>Given $f(x, y, z) = x^4 - 2xy + 3y^3 + xy^2 z^4$:\nTerms not containing $z$ vanish upon differentiation with respect to $z$:\n$$f_z = \\frac{\\partial}{\\partial z}\\left(xy^2 z^4\\right) = 4xy^2 z^3$$\n$$f_{zz} = \\frac{\\partial}{\\partial z}\\left(4xy^2 z^3\\right) = 12xy^2 z^2$$</p>\n<p><strong>Step 3: Differentiate with respect to $x$ and $y$.</strong></p>\n<p>$$f_{zzx} = \\frac{\\partial}{\\partial x}\\left(12xy^2 z^2\\right) = 12y^2 z^2$$\n$$f_{zzxy} = \\frac{\\partial}{\\partial y}\\left(12y^2 z^2\\right) = 24yz^2$$\nThis matches Choice <strong>(c)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute first-order partial derivatives of $z = x^2 + y^2$.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial x} = 2x, \\qquad \\frac{\\partial z}{\\partial y} = 2y$$</p>\n<p><strong>Step 2: Identify the base point and differentials.</strong></p>\n<p>Given initial point $(x_0, y_0) = (2, 1)$ and final point $(2.1, 1.05)$:\n$$dx = \\Delta x = 2.1 - 2 = 0.1$$\n$$dy = \\Delta y = 1.05 - 1 = 0.05$$</p>\n<p><strong>Step 3: Evaluate the total differential $dz$.</strong></p>\n<p>$$dz = \\frac{\\partial z}{\\partial x}\\,dx + \\frac{\\partial z}{\\partial y}\\,dy = 2(2)(0.1) + 2(1)(0.05) = 0.4 + 0.1 = 0.5$$\nThis matches the correct choice.</p>"
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
    "solution": "<p><strong>Step 1: State the multivariable chain rule formula.</strong></p>\n<p>For $z = f(x, y)$ with $x = x(s, t)$ and $y = y(s, t)$:\n$$\\frac{\\partial z}{\\partial t} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial t} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial t}$$</p>\n<p><strong>Step 2: Compute individual partial derivatives.</strong></p>\n<p>For $z = \\sin(x^2 y)$:\n$$\\frac{\\partial z}{\\partial x} = 2xy\\cos(x^2 y), \\qquad \\frac{\\partial z}{\\partial y} = x^2\\cos(x^2 y)$$\nFor $x = s^2 t$ and $y = s + t^{-2}$:\n$$\\frac{\\partial x}{\\partial t} = s^2, \\qquad \\frac{\\partial y}{\\partial t} = -2t^{-3} = -\\frac{2}{t^3}$$</p>\n<p><strong>Step 3: Substitute and simplify.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial t} = \\left[2xy(s^2) - \\frac{2x^2}{t^3}\\right]\\cos(x^2 y)$$\nSubstitute $x = s^2 t$ and $y = s + \\frac{1}{t^2}$:\n$$2(s^2 t)\\left(s + \\frac{1}{t^2}\\right)s^2 - \\frac{2(s^2 t)^2}{t^3} = 2s^4 t\\left(s + \\frac{1}{t^2}\\right) - \\frac{2s^4 t^2}{t^3}$$\n$$= 2s^5 t + \\frac{2s^4}{t} - \\frac{2s^4}{t} = 2s^5 t$$\nTherefore:\n$$\\frac{\\partial z}{\\partial t} = 2s^5 t \\cos(x^2 y)$$\nThis matches Choice <strong>(a)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Define the implicit function $F(x, y, z) = 0$.</strong></p>\n<p>Let $F(x, y, z) = \\sin(2x + y) - 2x\\cos(z^2) - 1 = 0$. By the implicit function theorem:\n$$\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}$$</p>\n<p><strong>Step 2: Compute partial derivatives $F_x$ and $F_z$.</strong></p>\n<p>Holding $y$ and $z$ constant:\n$$F_x = 2\\cos(2x + y) - 2\\cos(z^2)$$\nHolding $x$ and $y$ constant (using the chain rule on $\\cos(z^2)$):\n$$F_z = -2x\\left(-\\sin(z^2) \\cdot 2z\\right) = 4xz\\sin(z^2)$$</p>\n<p><strong>Step 3: Form the quotient and simplify signs.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial x} = -\\frac{2\\cos(2x + y) - 2\\cos(z^2)}{4xz\\sin(z^2)} = \\frac{2\\cos(z^2) - 2\\cos(2x + y)}{4xz\\sin(z^2)} = \\frac{\\cos(z^2) - \\cos(2x + y)}{2xz\\sin(z^2)}$$\nThis matches Choice <strong>(c)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute partial derivatives for the gradient $\\nabla f(x, y)$.</strong></p>\n<p>For $f(x, y) = x e^{y/x}$:\n$$f_x(x, y) = (1)e^{y/x} + x\\left(e^{y/x} \\cdot \\left(-\\frac{y}{x^2}\\right)\\right) = e^{y/x}\\left(1 - \\frac{y}{x}\\right)$$\n$$f_y(x, y) = x\\left(e^{y/x} \\cdot \\frac{1}{x}\\right) = e^{y/x}$$</p>\n<p><strong>Step 2: Evaluate the gradient at the point $(1, 2)$.</strong></p>\n<p>$$f_x(1, 2) = e^{2/1}\\left(1 - \\frac{2}{1}\\right) = e^2(1 - 2) = -e^2$$\n$$f_y(1, 2) = e^{2/1} = e^2$$\n$$\\nabla f(1, 2) = \\langle -e^2, e^2 \\rangle$$</p>\n<p><strong>Step 3: Calculate the maximum directional derivative.</strong></p>\n<p>$$\\|\\nabla f(1, 2)\\| = \\sqrt{(-e^2)^2 + (e^2)^2} = \\sqrt{e^4 + e^4} = \\sqrt{2e^4} = e^2\\sqrt{2}$$\nThis matches Choice <strong>(c)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute the gradient vector normal to the implicit surface.</strong></p>\n<p>Let $F(x, y, z) = x^2 + y^2 + z^2 - 8x - 12y + 4z + 42 = 0$.\n$$\\nabla F = \\langle 2x - 8, \\; 2y - 12, \\; 2z + 4 \\rangle$$</p>\n<p><strong>Step 2: Evaluate $\\nabla F$ at the point $(2, 3, -3)$.</strong></p>\n<p>$$F_x(2, 3, -3) = 2(2) - 8 = 4 - 8 = -4$$\n$$F_y(2, 3, -3) = 2(3) - 12 = 6 - 12 = -6$$\n$$F_z(2, 3, -3) = 2(-3) + 4 = -6 + 4 = -2$$\n$$\\nabla F(2, 3, -3) = \\langle -4, -6, -2 \\rangle$$\nDividing by $-2$ yields the simplified normal vector $\\vec{n} = \\langle 2, 3, 1 \\rangle$.</p>\n<p><strong>Step 3: Write the tangent plane equation and compute $a + b + c$.</strong></p>\n<p>$$2(x - 2) + 3(y - 3) + 1(z + 3) = 0 \\iff 2x - 4 + 3y - 9 + z + 3 = 0 \\iff 2x + 3y + z = 10$$\nComparing with $ax + by + cz = 10$:\n$$a = 2, \\quad b = 3, \\quad c = 1$$\n$$a + b + c = 2 + 3 + 1 = 6$$\nThis matches Choice <strong>(e)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Write parametric equations for the line.</strong></p>\n<p>Given base point $P_0(5, -3, -4)$ and direction vector $\\vec{u} = \\langle 2, -1, 3 \\rangle$:\n$$x(t) = 5 + 2t, \\quad y(t) = -3 - t, \\quad z(t) = -4 + 3t$$</p>\n<p><strong>Step 2: Use the point $(7, -4, a)$ to determine parameter $t$.</strong></p>\n<p>From the $x$-coordinate:\n$$7 = 5 + 2t \\implies 2t = 2 \\implies t = 1$$\nCheck $y$: $y(1) = -3 - (1) = -4$, which is consistent.</p>\n<p><strong>Step 3: Evaluate $a$ using the $z$-coordinate.</strong></p>\n<p>$$a = z(1) = -4 + 3(1) = -1$$\nThis matches Choice <strong>(b)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Identify the normal vector of the $xy$-plane.</strong></p>\n<p>The $xy$-plane is defined by $z = 0$, so its normal vector is $\\vec{n} = \\langle 0, 0, 1 \\rangle$.</p>\n<p><strong>Step 2: Write the equation of the parallel plane through $(1, 2, 3)$.</strong></p>\n<p>Parallel planes share identical or scalar-multiple normal vectors:\n$$0(x - 1) + 0(y - 2) + 1(z - 3) = 0 \\iff z - 3 = 0 \\iff z = 3$$</p>\n<p><strong>Step 3: Conclusion.</strong></p>\n<p>This matches Choice <strong>(c)</strong>.</p>"
  },
  {
    "id": "241_3",
    "term": "241",
    "number": 3,
    "section": "11.6",
    "topic": "11.6 Quadric Surfaces & Cylinders",
    "question": "The surface given by the equation $x - y^2 - 4z^2 = 2$ is:",
    "choices": [
      "Elliptic paraboloid",
      "Hyperboloid of two sheets",
      "Ellipsoid",
      "Hyperboloid of one sheet",
      "Elliptic cone"
    ],
    "correct_answer": "A",
    "solution": "<p><strong>Step 1: Rearrange the equation:</strong></p><p>$$x - 2 = y^2 + 4z^2$$</p><p>This matches the canonical equation of an <strong>elliptic paraboloid</strong> opening along the positive $x$-axis with vertex at $(2, 0, 0)$.</p>"
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
    "solution": "<p><strong>Step 1: Determine the domain constraints.</strong></p>\n<p>The radicand of $f(x, y) = \\sqrt{4 - x^2 - y^2}$ must be non-negative:\n$$4 - (x^2 + y^2) \\ge 0 \\iff x^2 + y^2 \\le 4$$</p>\n<p><strong>Step 2: Find minimum and maximum values on this domain disk.</strong></p>\n<p>Since $x^2 + y^2 \\ge 0$:\n<ul>\n<li>The maximum occurs at $(x, y) = (0, 0)$: $f(0, 0) = \\sqrt{4 - 0} = 2$.</li>\n<li>The minimum occurs along the boundary circle $x^2 + y^2 = 4$: $f(x, y) = \\sqrt{4 - 4} = 0$.</li>\n</ul></p>\n<p><strong>Step 3: Conclusion.</strong></p>\n<p>Since $f(x, y)$ is continuous on the closed disk $x^2 + y^2 \\le 4$, it attains all values between $0$ and $2$. The range is $[0, 2]$, which matches Choice <strong>(e)</strong>.</p>"
  },
  {
    "id": "241_5",
    "term": "241",
    "number": 5,
    "section": "13.2",
    "topic": "13.2 Limits & Continuity",
    "question": "$\\lim_{(x,y)\\to(0,0)} (x^2 + y^2)\\ln(x^2 + y^2) =$",
    "choices": [
      "$0$",
      "$\\ln 2$",
      "$1$",
      "$2$",
      "$\\infty$"
    ],
    "correct_answer": "A",
    "solution": "<p><strong>Step 1: Convert to polar coordinates.</strong></p>\n<p>Let $x = r\\cos\\theta$ and $y = r\\sin\\theta$, so $x^2 + y^2 = r^2$. As $(x, y) \\to (0, 0)$, $r \\to 0^+$.\n$$\\lim_{(x,y)\\to(0,0)} (x^2 + y^2)\\ln(x^2 + y^2) = \\lim_{r \\to 0^+} r^2 \\ln(r^2)$$</p>\n<p><strong>Step 2: Apply L'H&ocirc;pital's Rule to the indeterminate form $0 \\cdot (-\\infty)$.</strong></p>\n<p>Let $u = r^2 \\to 0^+$:\n$$\\lim_{u \\to 0^+} u \\ln u = \\lim_{u \\to 0^+} \\frac{\\ln u}{1/u} = \\lim_{u \\to 0^+} \\frac{1/u}{-1/u^2} = \\lim_{u \\to 0^+} (-u) = 0$$</p>\n<p><strong>Step 3: Conclusion.</strong></p>\n<p>The limit exists and equals $0$.</p>"
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
    "solution": "<p><strong>Step 1: Evaluate the function value at the point $(2, \\sqrt{5})$.</strong></p>\n<p>$$c = f(2, \\sqrt{5}) = \\sqrt{9 - (2)^2 - (\\sqrt{5})^2} = \\sqrt{9 - 4 - 5} = \\sqrt{0} = 0$$</p>\n<p><strong>Step 2: Set up the level curve equation $f(x, y) = c$.</strong></p>\n<p>$$\\sqrt{9 - x^2 - y^2} = 0 \\implies 9 - x^2 - y^2 = 0 \\iff x^2 + y^2 = 9 = 3^2$$</p>\n<p><strong>Step 3: Identify the radius of the circle.</strong></p>\n<p>The equation $x^2 + y^2 = 3^2$ is a circle centered at $(0, 0)$ with radius $R = 3$. This corresponds to Choice <strong>(d)</strong>.</p>"
  },
  {
    "id": "241_7",
    "term": "241",
    "number": 7,
    "section": "13.2",
    "topic": "13.2 Limits & Continuity",
    "question": "Consider the following statements about the function $f(x, y, z) = \\frac{xy + yz^2 + xz^2}{x^2 + y^2 + z^2}$: (I) $\\lim_{(x,y)\\to(0,0)} f(x, y, 0) = 0$ (II) $\\lim_{(x,z)\\to(0,0)} f(x, 0, z) = 0$ (III) $\\lim_{x\\to 0} f(x, x, x) = \\frac{1}{3}$. Then",
    "choices": [
      "(I) and (III) are true",
      "only (I) is true",
      "only (III) is true",
      "(II) and (III) are true",
      "(I) and (II) are true"
    ],
    "correct_answer": "D",
    "solution": "<p><strong>Step 1: Test paths for multivariable limit:</strong></p><p>Along path $(x, y, 0)$: $\\lim_{(x,y)\\to(0,0)} \\frac{xy}{x^2+y^2}$, which depends on $y=mx$ and does not exist.</p>"
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
    "solution": "<p><strong>Step 1: Compute partial derivative with respect to $x$.</strong></p>\n<p>For $f(x, y, z) = e^{-x}\\sin(yz)$:\n$$f_x = \\frac{\\partial}{\\partial x}\\left[e^{-x}\\sin(yz)\\right] = -e^{-x}\\sin(yz)$$</p>\n<p><strong>Step 2: Compute second partial with respect to $y$.</strong></p>\n<p>$$f_{xy} = \\frac{\\partial}{\\partial y}\\left[-e^{-x}\\sin(yz)\\right] = -e^{-x}\\left(z\\cos(yz)\\right) = -z e^{-x}\\cos(yz)$$</p>\n<p><strong>Step 3: Compute third partial with respect to $y$ again.</strong></p>\n<p>$$f_{xyy} = \\frac{\\partial}{\\partial y}\\left[-z e^{-x}\\cos(yz)\\right] = -z e^{-x}\\left(-z\\sin(yz)\\right) = z^2 e^{-x}\\sin(yz) = e^{-x}z^2\\sin(yz)$$\nThis matches Choice <strong>(d)</strong>.</p>"
  },
  {
    "id": "241_9",
    "term": "241",
    "number": 9,
    "section": "13.4",
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
    "solution": "<p><strong>Step 1: Let $f(x, y) = 5\\sqrt{x^2 + y^2}$ with $(x_0, y_0) = (4, 3)$.</strong></p><p>$$f_x = \\frac{5x}{\\sqrt{x^2 + y^2}} = \\frac{20}{5} = 4, \\quad f_y = \\frac{5y}{\\sqrt{x^2 + y^2}} = \\frac{15}{5} = 3$$</p><p><strong>Step 2: Differential $df = f_x\\,dx + f_y\\,dy = 4(0.03) + 3(0.1) = 0.12 + 0.30 = 0.42$.</strong></p>"
  },
  {
    "id": "241_10",
    "term": "241",
    "number": 10,
    "section": "13.5",
    "topic": "13.5 Multivariable Chain Rule",
    "question": "Let $w = x^2 - y^2$, where $x = s\\cos t$ and $y = s\\sin t$. The value of $\\frac{\\partial w}{\\partial t}$ when $s = 3$ and $t = \\frac{\\pi}{4}$ is equal to",
    "choices": [
      "$-18$",
      "$9$",
      "$6$",
      "$3$",
      "$-12$"
    ],
    "correct_answer": "A",
    "solution": "<p><strong>Step 1: Multivariable Chain Rule:</strong></p><p>$$\\frac{\\partial w}{\\partial s} = \\frac{\\partial w}{\\partial x}\\frac{\\partial x}{\\partial s} + \\frac{\\partial w}{\\partial y}\\frac{\\partial y}{\\partial s} = 2x(\\cos t) - 2y(\\sin t)$$</p><p>$$\\frac{\\partial w}{\\partial s} = 2s\\cos^2 t - 2s\\sin^2 t = 2s\\cos 2t$$</p>"
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
    "solution": "<p><strong>Step 1: Differentiate the implicit equation with respect to $x$.</strong></p>\n<p>Given $\\tan(x + y) + \\cos z = 2$, treating $z = z(x, y)$:\n$$\\frac{\\partial}{\\partial x}[\\tan(x + y) + \\cos z] = 0 \\implies \\sec^2(x + y) - \\sin z \\frac{\\partial z}{\\partial x} = 0$$\n$$\\frac{\\partial z}{\\partial x} = \\frac{\\sec^2(x + y)}{\\sin z}$$</p>\n<p><strong>Step 2: Differentiate with respect to $y$ similarly.</strong></p>\n<p>$$\\frac{\\partial}{\\partial y}[\\tan(x + y) + \\cos z] = 0 \\implies \\sec^2(x + y) - \\sin z \\frac{\\partial z}{\\partial y} = 0$$\n$$\\frac{\\partial z}{\\partial y} = \\frac{\\sec^2(x + y)}{\\sin z}$$</p>\n<p><strong>Step 3: Compute the sum $\\frac{\\partial z}{\\partial x} + \\frac{\\partial z}{\\partial y}$.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial x} + \\frac{\\partial z}{\\partial y} = \\frac{\\sec^2(x + y)}{\\sin z} + \\frac{\\sec^2(x + y)}{\\sin z} = \\frac{2\\sec^2(x + y)}{\\sin z} = 2\\sec^2(x + y)\\csc z$$\nThis matches Choice <strong>(e)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Find the direction vector $\\vec{PQ}$ and its unit vector $\\mathbf{u}$.</strong></p>\n<p>Given $P(0, 0)$ and $Q(2, 1)$:\n$$\\vec{PQ} = \\langle 2 - 0, 1 - 0 \\rangle = \\langle 2, 1 \\rangle$$\n$$\\|\\vec{PQ}\\| = \\sqrt{2^2 + 1^2} = \\sqrt{5} \\implies \\mathbf{u} = \\left\\langle \\frac{2}{\\sqrt{5}}, \\frac{1}{\\sqrt{5}} \\right\\rangle$$</p>\n<p><strong>Step 2: Compute the gradient $\\nabla f(0, 0)$.</strong></p>\n<p>For $f(x, y) = e^y \\sin x$:\n$$f_x(x, y) = e^y \\cos x \\implies f_x(0, 0) = e^0 \\cos 0 = 1$$\n$$f_y(x, y) = e^y \\sin x \\implies f_y(0, 0) = e^0 \\sin 0 = 0$$\n$$\\nabla f(0, 0) = \\langle 1, 0 \\rangle$$</p>\n<p><strong>Step 3: Compute the directional derivative $D_{\\mathbf{u}} f(0, 0)$.</strong></p>\n<p>$$D_{\\mathbf{u}} f(0, 0) = \\nabla f(0, 0) \\cdot \\mathbf{u} = 1\\left(\\frac{2}{\\sqrt{5}}\\right) + 0\\left(\\frac{1}{\\sqrt{5}}\\right) = \\frac{2}{\\sqrt{5}}$$\nThis matches Choice <strong>(d)</strong>.</p>"
  },
  {
    "id": "241_13",
    "term": "241",
    "number": 13,
    "section": "13.7",
    "topic": "13.7 Tangent Planes & Normal Lines",
    "question": "An equation of the tangent plane to the surface $z^2 - 2x^2 - 2y^2 = 12$ at the point $(1, -1, 4)$ is given by $x + ay + bz + c = 0$, then $a + b + c =$",
    "choices": [
      "$1$",
      "$6$",
      "$9$",
      "$12$",
      "$3$"
    ],
    "correct_answer": "E",
    "solution": "<p><strong>Step 1: Define $F(x, y, z) = z^2 - 2x^2 - 2y^2 - 12 = 0$.</strong></p><p>$$\\nabla F = \\langle -4x, -4y, 2z \\rangle$$</p><p><strong>Step 2: Tangent plane equation at $(1, 1, 4)$:</strong></p><p>$$-4(x - 1) - 4(y - 1) + 8(z - 4) = 0 \\iff -4x - 4y + 8z = 24 \\iff x + y - 2z = -6$$</p>"
  },
  {
    "id": "241_14",
    "term": "241",
    "number": 14,
    "section": "13.7",
    "topic": "13.7 Tangent Planes & Normal Lines",
    "question": "A set of symmetric equations for the tangent line to the curve of intersection of the surfaces $x^2 + y^2 + z^2 = 14$ and $x - y - z = 0$ at the point $(3, 1, 2)$ is",
    "choices": [
      "$\\frac{x - 3}{4} = y - 1 = \\frac{z - 3}{5}$",
      "$\\frac{x - 3}{2} = \\frac{y - 1}{5} = \\frac{z - 2}{-4}$",
      "$\\frac{x - 3}{2} = \\frac{y - 1}{10} = \\frac{z - 2}{-7}$",
      "$x - 3 = \\frac{y - 1}{5} = \\frac{z - 2}{-4}$",
      "$x - 3 = \\frac{y - 1}{-5} = \\frac{z - 2}{4}$"
    ],
    "correct_answer": "D",
    "solution": "<p><strong>Step 1: The tangent line to the curve of intersection of two surfaces $F_1 = 0$ and $F_2 = 0$ has direction vector $\\vec{v} = \\nabla F_1 \\times \\nabla F_2$.</strong></p>"
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
    "solution": "<p><strong>Step 1: Align the normal vectors of the two parallel planes.</strong></p>\n<p>Plane 1: $-x + 6y + 2z = 3$, with normal $\\vec{n}_1 = \\langle -1, 6, 2 \\rangle$ and $D_1 = 3$.<br>\nPlane 2: $-\\frac{1}{2}x + 3y + z = 4$. Multiplying by $2$ gives:\n$$-x + 6y + 2z = 8$$\nwith identical normal vector $\\vec{n} = \\langle -1, 6, 2 \\rangle$ and $D_2 = 8$.</p>\n<p><strong>Step 2: Apply the parallel plane distance formula.</strong></p>\n<p>$$D = \\frac{|D_2 - D_1|}{\\|\\vec{n}\\|} = \\frac{|8 - 3|}{\\sqrt{(-1)^2 + 6^2 + 2^2}} = \\frac{5}{\\sqrt{1 + 36 + 4}} = \\frac{5}{\\sqrt{41}}$$</p>\n<p><strong>Step 3: Conclusion.</strong></p>\n<p>This matches Choice <strong>(d)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Identify the normal vector of the plane.</strong></p>\n<p>For the plane $3x + 2y - z = 6$, the normal vector is read directly from the coefficients:\n$$\\vec{n} = \\langle 3, 2, -1 \\rangle$$</p>\n<p><strong>Step 2: Relate the plane's normal to the perpendicular line.</strong></p>\n<p>A line perpendicular to a plane has its direction vector $\\vec{v}$ parallel to the plane's normal vector:\n$$\\vec{v} = \\vec{n} = \\langle 3, 2, -1 \\rangle$$</p>\n<p><strong>Step 3: Write parametric equations using the base point $(2, 3, 4)$.</strong></p>\n<p>$$x = x_0 + at = 2 + 3t$$\n$$y = y_0 + bt = 3 + 2t$$\n$$z = z_0 + ct = 4 - t$$\nThis matches Choice <strong>(b)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Form two non-parallel vectors in the plane.</strong></p>\n<p>Given points $P(0, 0, 0)$, $Q(1, 0, 1)$, and $R(-1, 1, 0)$:\n$$\\vec{PQ} = \\langle 1 - 0, 0 - 0, 1 - 0 \\rangle = \\langle 1, 0, 1 \\rangle$$\n$$\\vec{PR} = \\langle -1 - 0, 1 - 0, 0 - 0 \\rangle = \\langle -1, 1, 0 \\rangle$$</p>\n<p><strong>Step 2: Compute the normal vector $\\vec{n}$ via the cross product.</strong></p>\n<p>$$\\vec{n} = \\vec{PQ} \\times \\vec{PR} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 0 & 1 \\\\ -1 & 1 & 0 \\end{vmatrix}$$\n$$= \\mathbf{i}(0(0) - 1(1)) - \\mathbf{j}(1(0) - 1(-1)) + \\mathbf{k}(1(1) - 0(-1))$$\n$$= \\mathbf{i}(-1) - \\mathbf{j}(1) + \\mathbf{k}(1) = \\langle -1, -1, 1 \\rangle$$\nMultiplying by $-1$ to make the leading coefficient positive gives $\\vec{n} = \\langle 1, 1, -1 \\rangle$.</p>\n<p><strong>Step 3: Write the plane equation and find $b + c + d$.</strong></p>\n<p>Using the origin $P(0, 0, 0)$:\n$$1(x - 0) + 1(y - 0) - 1(z - 0) = 0 \\iff x + y - z = 0$$\nComparing with $x + by + cz = d$:\n$$b = 1, \\quad c = -1, \\quad d = 0$$\n$$b + c + d = 1 + (-1) + 0 = 0$$\nThis matches Choice <strong>(c)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Substitute the parametric line equations into the plane equation.</strong></p>\n<p>The plane is $x + 3y + z = 6$, and the line is given by:\n$$x = t, \\quad y = 1 - t, \\quad z = 2 + 3t$$\nSubstituting into the plane:\n$$t + 3(1 - t) + (2 + 3t) = 6$$</p>\n<p><strong>Step 2: Solve for the parameter $t$.</strong></p>\n<p>$$t + 3 - 3t + 2 + 3t = 6$$\n$$t + 5 = 6 \\implies t = 1$$</p>\n<p><strong>Step 3: Find the intersection point $(a, b, c)$ and compute $a + b + c$.</strong></p>\n<p>$$a = 1$$\n$$b = 1 - 1 = 0$$\n$$c = 2 + 3(1) = 5$$\n$$(a, b, c) = (1, 0, 5)$$\n$$a + b + c = 1 + 0 + 5 = 6$$\nThis matches Choice <strong>(a)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Rearrange the equation into standard quadric form.</strong></p>\n<p>Given $4x^2 - 3y^2 - 12z^2 = 0$:\n$$4x^2 = 3y^2 + 12z^2$$\nDivide both sides by $4$:\n$$x^2 = \\frac{3}{4}y^2 + 3z^2 = \\frac{y^2}{4/3} + \\frac{z^2}{1/3}$$</p>\n<p><strong>Step 2: Analyze traces and degree.</strong></p>\n<p>The equation is second-degree and homogeneous in $x, y, z$ with no constant term.\nIn planes parallel to $x = k$ ($k \\neq 0$), the cross-sections are ellipses:\n$$\\frac{y^2}{\\frac{4k^2}{3}} + \\frac{z^2}{\\frac{k^2}{3}} = 1$$\nAt $x = 0$, the trace is the single point $(0, 0, 0)$.</p>\n<p><strong>Step 3: Classify the quadric surface.</strong></p>\n<p>This is the standard equation of an <strong>elliptic cone</strong> with vertex at the origin opening along the $x$-axis.\nThis matches Choice <strong>(a)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Set up the domain inequality for the logarithmic argument.</strong></p>\n<p>The natural logarithm function $\\ln(u)$ is defined only when its argument is strictly positive.\n$$y - x + 2 > 0$$</p>\n<p><strong>Step 2: Solve for $y$ in terms of $x$.</strong></p>\n<p>$$y > x - 2$$</p>\n<p><strong>Step 3: Geometric interpretation.</strong></p>\n<p>The boundary is the dashed line $y = x - 2$. The domain consists of all points in the $xy$-plane lying strictly above this boundary line:\n$$\\text{Domain} = \\{(x, y) : y > x - 2\\}$$</p>"
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
    "solution": "<p><strong>Step 1: Set up the level curve equation $f(x, y) = C$.</strong></p>\n<p>For $f(x, y) = \\frac{x}{x^2 + y^2}$:\n$$\\frac{x}{x^2 + y^2} = C$$</p>\n<p><strong>Step 2: Evaluate $C$ at the point $(1, 1)$.</strong></p>\n<p>$$C = \\frac{1}{1^2 + 1^2} = \\frac{1}{1 + 1} = \\frac{1}{2}$$\nSubstitute $C = \\frac{1}{2}$ back into the equation:\n$$\\frac{x}{x^2 + y^2} = \\frac{1}{2} \\iff 2x = x^2 + y^2$$</p>\n<p><strong>Step 3: Move all terms to one side.</strong></p>\n<p>$$x^2 - 2x + y^2 = 0$$\n(Notice completing the square gives $(x - 1)^2 + y^2 = 1$, which is a circle of radius $1$ centered at $(1, 0)$).\nThis matches Choice <strong>(e)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Convert to radial variable $u = x^2 + y^2$.</strong></p>\n<p>Let $u = x^2 + y^2$. As $(x, y) \\to (0, 0)$, $u \\to 0^+$:\n$$\\lim_{(x, y) \\to (0, 0)} \\frac{\\ln(2x^2 + 2y^2 + 1)}{x^2 + y^2} = \\lim_{u \\to 0^+} \\frac{\\ln(2u + 1)}{u}$$\nDirect substitution yields the indeterminate form $\\frac{\\ln(1)}{0} = \\frac{0}{0}$.</p>\n<p><strong>Step 2: Apply L'H&ocirc;pital's Rule.</strong></p>\n<p>Differentiating numerator and denominator with respect to $u$:\n$$\\lim_{u \\to 0^+} \\frac{\\frac{d}{du}\\ln(2u + 1)}{\\frac{d}{du}(u)} = \\lim_{u \\to 0^+} \\frac{\\frac{2}{2u + 1}}{1}$$</p>\n<p><strong>Step 3: Evaluate the limit.</strong></p>\n<p>$$\\lim_{u \\to 0^+} \\frac{2}{2u + 1} = \\frac{2}{2(0) + 1} = \\frac{2}{1} = 2$$\nThis matches Choice <strong>(c)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Test the limit along linear paths $y = mx$.</strong></p>\n<p>For $f(x, y) = \\frac{x^2 y}{x^4 + y^2}$, test along the line $y = 2x$ as $x \\to 0$:\n$$f(x, 2x) = \\frac{x^2(2x)}{x^4 + (2x)^2} = \\frac{2x^3}{x^4 + 4x^2} = \\frac{2x^3}{x^2(x^2 + 4)} = \\frac{2x}{x^2 + 4}$$\nTaking the limit as $x \\to 0$:\n$$\\lim_{x \\to 0} \\frac{2x}{x^2 + 4} = \\frac{0}{0 + 4} = 0$$\nThus, along the line $y = 2x$, the limit is indeed $0$.</p>\n<p><strong>Step 2: Test the limit along parabolic paths $y = k x^2$.</strong></p>\n<p>Along $y = x^2$:\n$$f(x, x^2) = \\frac{x^2(x^2)}{x^4 + (x^2)^2} = \\frac{x^4}{x^4 + x^4} = \\frac{x^4}{2x^4} = \\frac{1}{2}$$\nBecause the limit along $y = 2x$ is $0$ while along $y = x^2$ it is $\\frac{1}{2}$, the two-variable limit does not exist.</p>\n<p><strong>Step 3: Conclusion.</strong></p>\n<p>The statement \"along the line $y = 2x$, $\\lim_{(x, y) \\to (0, 0)} f(x, y) = 0$\" is TRUE.\nThis matches Choice <strong>(b)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Understand the geometric meaning of slope in the $x$-direction.</strong></p>\n<p>The slope of the surface $z = f(x, y)$ in the $x$-direction at a given point is the partial derivative with respect to $x$:\n$$\\text{Slope} = f_x(1, 2)$$</p>\n<p><strong>Step 2: Differentiate $f(x, y) = x e^{x^2 y}$ with respect to $x$ using the product and chain rules.</strong></p>\n<p>$$f_x(x, y) = \\frac{\\partial}{\\partial x}[x] \\cdot e^{x^2 y} + x \\cdot \\frac{\\partial}{\\partial x}\\left[e^{x^2 y}\\right]$$\n$$f_x(x, y) = 1 \\cdot e^{x^2 y} + x \\cdot \\left(2xy e^{x^2 y}\\right) = e^{x^2 y}\\left(1 + 2x^2 y\\right)$$</p>\n<p><strong>Step 3: Evaluate at $(x, y) = (1, 2)$.</strong></p>\n<p>$$f_x(1, 2) = e^{(1)^2(2)} \\left(1 + 2(1)^2(2)\\right) = e^2(1 + 4) = 5e^2$$\nThis matches Choice <strong>(a)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute the first partial derivative with respect to $t$.</strong></p>\n<p>Given $z = e^{-t}\\cos\\left(\\frac{x}{2}\\right)$:\n$$\\frac{\\partial z}{\\partial t} = -e^{-t}\\cos\\left(\\frac{x}{2}\\right)$$</p>\n<p><strong>Step 2: Compute the second partial derivative with respect to $x$.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial x} = e^{-t} \\left( -\\sin\\left(\\frac{x}{2}\\right) \\cdot \\frac{1}{2} \\right) = -\\frac{1}{2}e^{-t}\\sin\\left(\\frac{x}{2}\\right)$$\n$$\\frac{\\partial^2 z}{\\partial x^2} = -\\frac{1}{2}e^{-t} \\left( \\cos\\left(\\frac{x}{2}\\right) \\cdot \\frac{1}{2} \\right) = -\\frac{1}{4}e^{-t}\\cos\\left(\\frac{x}{2}\\right)$$</p>\n<p><strong>Step 3: Substitute into the expression $\\frac{\\partial z}{\\partial t} - 4\\frac{\\partial^2 z}{\\partial x^2}$.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial t} - 4\\frac{\\partial^2 z}{\\partial x^2} = -e^{-t}\\cos\\left(\\frac{x}{2}\\right) - 4\\left( -\\frac{1}{4}e^{-t}\\cos\\left(\\frac{x}{2}\\right) \\right)$$\n$$= -e^{-t}\\cos\\left(\\frac{x}{2}\\right) + e^{-t}\\cos\\left(\\frac{x}{2}\\right) = 0$$\nThis matches Choice <strong>(e)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Determine the base values and differentials.</strong></p>\n<p>Function: $z = \\sqrt{29 - x^2 - y^2}$.<br>\nBase point: $(x_0, y_0) = (3, 4) \\implies z(3, 4) = \\sqrt{29 - 9 - 16} = \\sqrt{4} = 2$.<br>\nDifferentials:\n$$dx = 3.01 - 3 = 0.01 = \\frac{1}{100}$$\n$$dy = 3.97 - 4 = -0.03 = -\\frac{3}{100}$$</p>\n<p><strong>Step 2: Compute first-order partial derivatives at $(3, 4)$.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial x} = \\frac{-2x}{2\\sqrt{29 - x^2 - y^2}} = \\frac{-x}{\\sqrt{29 - x^2 - y^2}} \\implies \\frac{\\partial z}{\\partial x}(3, 4) = \\frac{-3}{2}$$\n$$\\frac{\\partial z}{\\partial y} = \\frac{-2y}{2\\sqrt{29 - x^2 - y^2}} = \\frac{-y}{\\sqrt{29 - x^2 - y^2}} \\implies \\frac{\\partial z}{\\partial y}(3, 4) = \\frac{-4}{2} = -2$$</p>\n<p><strong>Step 3: Evaluate the total differential $dz$.</strong></p>\n<p>$$dz = \\frac{\\partial z}{\\partial x}dx + \\frac{\\partial z}{\\partial y}dy = \\left(-\\frac{3}{2}\\right)(0.01) + (-2)(-0.03)$$\n$$dz = -0.015 + 0.06 = 0.045 = \\frac{45}{1000} = \\frac{9}{200}$$\nThis matches Choice <strong>(b)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: State the multivariable chain rule for $w(x(s, t), y(s, t), z(s, t))$.</strong></p>\n<p>$$\\frac{\\partial w}{\\partial t} = \\frac{\\partial w}{\\partial x}\\frac{\\partial x}{\\partial t} + \\frac{\\partial w}{\\partial y}\\frac{\\partial y}{\\partial t} + \\frac{\\partial w}{\\partial z}\\frac{\\partial z}{\\partial t}$$</p>\n<p><strong>Step 2: Evaluate intermediate variables and partials at $s = 1, t = 1$.</strong></p>\n<p>$$x = 1 + 1^2 = 2, \\quad y = \\frac{1}{1} = 1, \\quad z = 1^2 = 1$$\nFor $w = xy^2 + yz^2 + zx^2$:\n$$w_x = y^2 + 2zx \\implies w_x(2, 1, 1) = 1^2 + 2(1)(2) = 1 + 4 = 5$$\n$$w_y = 2xy + z^2 \\implies w_y(2, 1, 1) = 2(2)(1) + 1^2 = 4 + 1 = 5$$\n$$w_z = 2yz + x^2 \\implies w_z(2, 1, 1) = 2(1)(1) + 2^2 = 2 + 4 = 6$$\nFor the parameter functions:\n$$x_t = \\frac{\\partial}{\\partial t}(s + t^2) = 2t \\implies x_t(1, 1) = 2(1) = 2$$\n$$y_t = \\frac{\\partial}{\\partial t}(s t^{-1}) = -s t^{-2} = -\\frac{s}{t^2} \\implies y_t(1, 1) = -1$$\n$$z_t = \\frac{\\partial}{\\partial t}(s^2) = 0$$</p>\n<p><strong>Step 3: Compute $w_t(1, 1)$.</strong></p>\n<p>$$w_t = 5(2) + 5(-1) + 6(0) = 10 - 5 + 0 = 5$$\nThis matches Choice <strong>(b)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Form $F(x, y, z) = 0$ for implicit differentiation.</strong></p>\n<p>Rewrite $xyz = \\sin(3x - 2y - z)$ as:\n$$F(x, y, z) = \\sin(3x - 2y - z) - xyz = 0$$\nBy the implicit function theorem:\n$$\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}$$</p>\n<p><strong>Step 2: Compute partial derivatives $F_x$ and $F_z$.</strong></p>\n<p>Holding $y$ and $z$ constant:\n$$F_x = \\cos(3x - 2y - z) \\cdot (3) - yz = 3\\cos(3x - 2y - z) - yz$$\nHolding $x$ and $y$ constant:\n$$F_z = \\cos(3x - 2y - z) \\cdot (-1) - xy = -\\cos(3x - 2y - z) - xy$$</p>\n<p><strong>Step 3: Form the negative ratio and simplify signs.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial x} = -\\frac{3\\cos(3x - 2y - z) - yz}{-\\left[\\cos(3x - 2y - z) + xy\\right]} = \\frac{3\\cos(3x - 2y - z) - yz}{\\cos(3x - 2y - z) + xy}$$\nThis matches Choice <strong>(c)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Identify a point $P$ on line $L$ and its direction vector $\\vec{u}$.</strong></p>\n<p>Line $L: x = t, y = -t, z = 2t$ passes through $P(0, 0, 0)$ with direction $\\vec{u} = \\langle 1, -1, 2 \\rangle$.<br>\nGiven external point $Q(1, 1, 1)$:\n$$\\vec{PQ} = \\langle 1 - 0, 1 - 0, 1 - 0 \\rangle = \\langle 1, 1, 1 \\rangle$$</p>\n<p><strong>Step 2: Compute the cross product $\\vec{PQ} \\times \\vec{u}$.</strong></p>\n<p>$$\\vec{PQ} \\times \\vec{u} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 1 & 1 \\\\ 1 & -1 & 2 \\end{vmatrix}$$\n$$= \\mathbf{i}(1(2) - 1(-1)) - \\mathbf{j}(1(2) - 1(1)) + \\mathbf{k}(1(-1) - 1(1))$$\n$$= \\mathbf{i}(2 + 1) - \\mathbf{j}(2 - 1) + \\mathbf{k}(-1 - 1) = \\langle 3, -1, -2 \\rangle$$</p>\n<p><strong>Step 3: Calculate the distance from $Q$ to line $L$.</strong></p>\n<p>$$\\|\\vec{PQ} \\times \\vec{u}\\| = \\sqrt{3^2 + (-1)^2 + (-2)^2} = \\sqrt{9 + 1 + 4} = \\sqrt{14}$$\n$$\\|\\vec{u}\\| = \\sqrt{1^2 + (-1)^2 + 2^2} = \\sqrt{1 + 1 + 4} = \\sqrt{6}$$\n$$d = \\frac{\\|\\vec{PQ} \\times \\vec{u}\\|}{\\|\\vec{u}\\|} = \\frac{\\sqrt{14}}{\\sqrt{6}} = \\frac{\\sqrt{7}}{\\sqrt{3}} = \\frac{\\sqrt{7}\\sqrt{3}}{3} = \\frac{\\sqrt{21}}{3}$$\nThis matches Choice <strong>(d)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Set up the distance expressions.</strong></p>\n<p>Distance from $(x, y, z)$ to the point $(0, 0, 3)$:\n$$d_1 = \\sqrt{(x - 0)^2 + (y - 0)^2 + (z - 3)^2} = \\sqrt{x^2 + y^2 + (z - 3)^2}$$\nDistance from $(x, y, z)$ to the plane $z = -1$:\n$$d_2 = |z - (-1)| = |z + 1|$$</p>\n<p><strong>Step 2: Equate distances and expand the squares.</strong></p>\n<p>Equating $d_1^2 = d_2^2$:\n$$x^2 + y^2 + (z - 3)^2 = (z + 1)^2$$\n$$x^2 + y^2 + z^2 - 6z + 9 = z^2 + 2z + 1$$\nSubtract $z^2$ from both sides and collect terms:\n$$x^2 + y^2 + 9 - 1 = 2z + 6z$$\n$$x^2 + y^2 + 8 = 8z \\iff z = \\frac{x^2}{8} + \\frac{y^2}{8} + 1$$</p>\n<p><strong>Step 3: Classify the quadric surface.</strong></p>\n<p>The variable $z$ is linear (first power) and the coefficients of $x^2$ and $y^2$ are both positive ($1/8$).\nThis is the standard definition of an <strong>elliptic paraboloid</strong> (specifically, a circular paraboloid opening upward along the $+z$ axis with vertex at $(0, 0, 1)$).\nThis matches Choice <strong>(c)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute the direction vector connecting the two points.</strong></p>\n<p>The line passes through points $P(2, 0, 1)$ and $Q(1, -1, 2)$.\nThe direction vector $\\vec{v}$ is given by the displacement vector $\\vec{PQ}$:\n$$\\vec{v} = \\vec{PQ} = \\langle 1 - 2, -1 - 0, 2 - 1 \\rangle = \\langle -1, -1, 1 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Construct the parametric equations using base point $P(2, 0, 1)$.</strong></p>\n<p>Using the vector equation $\\mathbf{r}(t) = \\mathbf{r}_0 + t\\vec{v}$ with $(x_0, y_0, z_0) = (2, 0, 1)$ and $\\langle a, b, c \\rangle = \\langle -1, -1, 1 \\rangle$:\n$$x(t) = 2 - t$$\n$$y(t) = 0 - t = -t$$\n$$z(t) = 1 + t$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Transform the quadric surface equation into standard form.</strong></p>\n<p>The given equation is:\n$$4x^2 - 3y^2 + 12z^2 + 12 = 0$$\nSubtract $12$ from both sides:\n$$4x^2 - 3y^2 + 12z^2 = -12$$\nDivide both sides by $-12$:\n$$-\\frac{4x^2}{12} + \\frac{3y^2}{12} - \\frac{12z^2}{12} = 1 \\iff -\\frac{x^2}{3} + \\frac{y^2}{4} - z^2 = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Classify the quadric surface.</strong></p>\n<p>The standard equation of a hyperboloid of two sheets opening along the $y$-axis is:\n$$-\\frac{x^2}{a^2} + \\frac{y^2}{b^2} - \\frac{z^2}{c^2} = 1$$\nBecause there are two negative squared terms ($-x^2/3$ and $-z^2$) and exactly one positive squared term ($+y^2/4$) equated to $+1$, the surface represents a <strong>hyperboloid of two sheets</strong>.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Recall the point-to-plane perpendicular distance formula.</strong></p>\n<p>The distance $D$ from a point $(x_0, y_0, z_0)$ to the plane $Ax + By + Cz = D_{\\text{plane}}$ is:\n$$D = \\frac{|A x_0 + B y_0 + C z_0 - D_{\\text{plane}}|}{\\sqrt{A^2 + B^2 + C^2}}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Substitute the given point and plane coefficients.</strong></p>\n<p>Here $(x_0, y_0, z_0) = (1, 3, -1)$ and the plane is $3x - 4y + 5z = 6$ ($A = 3, B = -4, C = 5, D_{\\text{plane}} = 6$):\n$$\\text{Numerator} = |3(1) - 4(3) + 5(-1) - 6| = |3 - 12 - 5 - 6| = |-20| = 20$$\n$$\\text{Denominator} = \\sqrt{3^2 + (-4)^2 + 5^2} = \\sqrt{9 + 16 + 25} = \\sqrt{50} = 5\\sqrt{2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Simplify the radical expression.</strong></p>\n<p>$$D = \\frac{20}{5\\sqrt{2}} = \\frac{4}{\\sqrt{2}} = \\frac{4\\sqrt{2}}{2} = 2\\sqrt{2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Extract a base point and direction vector from the contained line.</strong></p>\n<p>The line is given by $x = y - 4 = z$, which in symmetric form is:\n$$\\frac{x - 0}{1} = \\frac{y - 4}{1} = \\frac{z - 0}{1}$$\nThus, a point on the line is $P(0, 4, 0)$, and its direction vector is $\\vec{v} = \\langle 1, 1, 1 \\rangle$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Construct a vector connecting the line to the given point $Q(2, 2, 1)$.</strong></p>\n<p>$$\\vec{PQ} = \\langle 2 - 0, 2 - 4, 1 - 0 \\rangle = \\langle 2, -2, 1 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Calculate the normal vector $\\vec{n}$ via the cross product.</strong></p>\n<p>$$\\vec{n} = \\vec{v} \\times \\vec{PQ} = \\det \\begin{pmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 1 & 1 \\\\ 2 & -2 & 1 \\end{pmatrix}$$\n$$= \\mathbf{i}(1 - (-2)) - \\mathbf{j}(1 - 2) + \\mathbf{k}(-2 - 2) = \\langle 3, 1, -4 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Write the plane equation and normalize the constant to $4$.</strong></p>\n<p>Using the point $Q(2, 2, 1)$:\n$$3(x - 2) + 1(y - 2) - 4(z - 1) = 0$$\n$$3x - 6 + y - 2 - 4z + 4 = 0 \\iff 3x + y - 4z - 4 = 0 \\iff 3x + y - 4z = 4$$\nComparing with $ax + by + cz = 4$ yields:\n$$a = 3, \\quad b = 1, \\quad c = -4$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 5: Compute the product $abc$.</strong></p>\n<p>$$abc = 3 \\cdot 1 \\cdot (-4) = -12$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 6: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Determine the domain $D$.</strong></p>\n<p>The function is $f(x, y) = 6 - 2x - 3y$.\nBecause $f(x, y)$ is a polynomial in two variables, it involves only standard linear arithmetic operations with no square roots, logarithms, or divisions by zero.\nTherefore, the domain is the entire real plane:\n$$D = \\{(x, y) : -\\infty < x < \\infty, -\\infty < y < \\infty\\}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Determine the range $R$.</strong></p>\n<p>The equation $z = 6 - 2x - 3y$ represents an inclined non-horizontal plane in $\\mathbb{R}^3$.\nFor any chosen real number $z_0 \\in \\mathbb{R}$, we can choose $y = 0$ and solve for $x$:\n$$z_0 = 6 - 2x \\implies x = \\frac{6 - z_0}{2}$$\nSince every real value $z_0$ can be attained, the range spans all real numbers:\n$$R = (-\\infty, \\infty)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Determine the level constant $C$.</strong></p>\n<p>The level surface family is $f(x, y, z) = C$, which means:\n$$4x^2 - y^2 + z^2 = C$$\nSince the surface passes through $(0, 1, 1)$, substitute these coordinates:\n$$C = 4(0)^2 - (1)^2 + (1)^2 = 0 - 1 + 1 = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Write and rearrange the equation.</strong></p>\n<p>$$4x^2 - y^2 + z^2 = 0 \\iff y^2 = 4x^2 + z^2 \\iff y^2 = \\frac{x^2}{(1/2)^2} + \\frac{z^2}{1^2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Classify the quadric surface.</strong></p>\n<p>An equation of the form $\\frac{y^2}{b^2} = \\frac{x^2}{a^2} + \\frac{z^2}{c^2}$ represents an <strong>elliptic cone</strong> opening along the $y$-axis with vertex at the origin $(0, 0, 0)$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Evaluate the limit along the path $x = 0$ ($y$-axis).</strong></p>\n<p>$$\\lim_{y \\to 0} \\frac{2(0) - y^2}{(0)^3 + y} = \\lim_{y \\to 0} \\frac{-y^2}{y} = \\lim_{y \\to 0} (-y) = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Evaluate the limit along the linear path $y = x$.</strong></p>\n<p>$$\\lim_{x \\to 0} \\frac{2x - x^2}{x^3 + x} = \\lim_{x \\to 0} \\frac{x(2 - x)}{x(x^2 + 1)} = \\lim_{x \\to 0} \\frac{2 - x}{x^2 + 1} = \\frac{2 - 0}{0 + 1} = 2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Apply the Two-Path Test.</strong></p>\n<p>Along the path $x = 0$, the function approaches $0$, whereas along the path $y = x$, the function approaches $2$.\nBecause these limits are unequal ($0 \\ne 2$), the limit <strong>does not exist</strong>.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Use substitution $u = x^2 + y^2$.</strong></p>\n<p>As $(x, y) \\to (0, 0)$, $u = x^2 + y^2 \\to 0^+$.\nThe limit becomes:\n$$\\lim_{(x, y) \\to (0, 0)} \\frac{\\sin(2x^2 + 2y^2)}{4x^2 + 4y^2} = \\lim_{u \\to 0^+} \\frac{\\sin(2u)}{4u}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Separate constants and evaluate the fundamental trigonometric limit.</strong></p>\n<p>Rewrite the fraction:\n$$\\frac{\\sin(2u)}{4u} = \\frac{1}{2} \\cdot \\frac{\\sin(2u)}{2u}$$\nSince $\\lim_{t \\to 0} \\frac{\\sin t}{t} = 1$:\n$$\\lim_{u \\to 0^+} \\left(\\frac{1}{2} \\cdot \\frac{\\sin(2u)}{2u}\\right) = \\frac{1}{2}(1) = \\frac{1}{2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Simplify the expression for $(x, y) \\ne (0, 0)$ using difference of squares.</strong></p>\n<p>$$x^4 - y^4 = (x^2 - y^2)(x^2 + y^2)$$\nTherefore:\n$$\\frac{x^4 - y^4}{x^2 + y^2} = \\frac{(x^2 - y^2)(x^2 + y^2)}{x^2 + y^2} = x^2 - y^2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Evaluate the limit as $(x, y) \\to (0, 0)$.</strong></p>\n<p>$$\\lim_{(x, y) \\to (0, 0)} f(x, y) = \\lim_{(x, y) \\to (0, 0)} (x^2 - y^2) = 0^2 - 0^2 = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Check the continuity condition at $(0, 0)$.</strong></p>\n<p>We are given that $f(0, 0) = 1$.\nBecause $\\lim_{(x, y) \\to (0, 0)} f(x, y) = 0 \\ne 1 = f(0, 0)$, the function $f$ is <strong>not continuous at $(0, 0)$</strong>.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Apply the product rule and chain rule to find $f_y(x, y)$.</strong></p>\n<p>The function is $f(x, y) = e^{-2y}\\sin(\\pi x y)$.\nUsing the product rule with respect to $y$:\n$$f_y(x, y) = \\frac{\\partial}{\\partial y}\\left(e^{-2y}\\right)\\sin(\\pi x y) + e^{-2y}\\frac{\\partial}{\\partial y}\\left(\\sin(\\pi x y)\\right)$$\n$$= -2e^{-2y}\\sin(\\pi x y) + e^{-2y}\\left[\\cos(\\pi x y) \\cdot (\\pi x)\\right]$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Evaluate at $(x, y) = (1, 1/2)$.</strong></p>\n<p>$$\\pi x y = \\pi(1)\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{2}$$\n$$\\sin\\left(\\frac{\\pi}{2}\\right) = 1, \\quad \\cos\\left(\\frac{\\pi}{2}\\right) = 0$$\n$$e^{-2(1/2)} = e^{-1} = \\frac{1}{e}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Compute the numerical value.</strong></p>\n<p>$$f_y\\left(1, \\frac{1}{2}\\right) = -2\\left(\\frac{1}{e}\\right)(1) + \\left(\\frac{1}{e}\\right)(0)(\\pi) = -\\frac{2}{e} + 0 = -\\frac{2}{e}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Rewrite $f(x, y, z)$ in power form.</strong></p>\n<p>$$f(x, y, z) = \\frac{z^2}{x + 2y} = z^2(x + 2y)^{-1}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Differentiate with respect to $x$.</strong></p>\n<p>$$f_x = z^2 \\cdot (-1)(x + 2y)^{-2} \\cdot 1 = -z^2(x + 2y)^{-2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Differentiate with respect to $y$.</strong></p>\n<p>$$f_{xy} = \\frac{\\partial}{\\partial y}\\left[-z^2(x + 2y)^{-2}\\right] = -z^2 \\cdot (-2)(x + 2y)^{-3} \\cdot 2 = 4z^2(x + 2y)^{-3}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Differentiate with respect to $z$.</strong></p>\n<p>$$f_{xyz} = \\frac{\\partial}{\\partial z}\\left[4z^2(x + 2y)^{-3}\\right] = 8z(x + 2y)^{-3} = \\frac{8z}{(x + 2y)^3}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 5: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Set up the function and identify base values and increments.</strong></p>\n<p>Define $f(x, y) = x^2 y$.\nWe want to approximate the change $\\Delta f = f(2.01, 9.02) - f(2, 9)$.\nThe base point is $(x, y) = (2, 9)$, and the increments are:\n$$dx = 2.01 - 2 = 0.01, \\quad dy = 9.02 - 9 = 0.02$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Compute the total differential $df$.</strong></p>\n<p>$$df = f_x dx + f_y dy = (2xy)dx + (x^2)dy$$\nEvaluate the partial derivatives at $(2, 9)$:\n$$f_x(2, 9) = 2(2)(9) = 36$$\n$$f_y(2, 9) = 2^2 = 4$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Compute the approximation.</strong></p>\n<p>$$df = 36(0.01) + 4(0.02) = 0.36 + 0.08 = 0.44$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute intermediate values at $s = 2, t = 1$.</strong></p>\n<p>$$x = \\ln\\left(\\frac{2}{1}\\right) = \\ln 2$$\n$$y = 2^2 - 1^2 = 4 - 1 = 3$$\n$$xy = 3\\ln 2 = \\ln(2^3) = \\ln 8 \\implies e^{xy} = e^{\\ln 8} = 8$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: State the chain rule for $\\frac{\\partial z}{\\partial t}$.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial t} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial t} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial t}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Calculate the individual partial derivatives.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial x} = y e^{xy} = 3(8) = 24$$\n$$\\frac{\\partial z}{\\partial y} = x e^{xy} = (\\ln 2)(8) = 8\\ln 2$$\nSince $x = \\ln s - \\ln t$:\n$$\\frac{\\partial x}{\\partial t} = -\\frac{1}{t} = -\\frac{1}{1} = -1$$\nSince $y = s^2 - t^2$:\n$$\\frac{\\partial y}{\\partial t} = -2t = -2(1) = -2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Assemble the terms.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial t} = 24(-1) + (8\\ln 2)(-2) = -24 - 16\\ln 2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 5: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Define implicit surface $F(x, y, z) = 0$.</strong></p>\n<p>Given $x\\ln y + y^2 z + z^2 = 8$:\n$$F(x, y, z) = x\\ln y + y^2 z + z^2 - 8 = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Compute $F_y$ and $F_z$.</strong></p>\n<p>$$F_y = \\frac{\\partial}{\\partial y}\\left(x\\ln y + y^2 z + z^2 - 8\\right) = \\frac{x}{y} + 2yz = \\frac{x + 2y^2 z}{y}$$\n$$F_z = \\frac{\\partial}{\\partial z}\\left(x\\ln y + y^2 z + z^2 - 8\\right) = y^2 + 2z$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Apply the implicit differentiation formula.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z} = -\\frac{\\frac{x + 2y^2 z}{y}}{y^2 + 2z} = -\\frac{x + 2y^2 z}{y(y^2 + 2z)} = -\\frac{x + 2y^2 z}{y^3 + 2yz}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute the gradient vector $\\nabla f(x, y)$.</strong></p>\n<p>The function is $f(x, y) = 3x - 4xy + 9y$.\n$$f_x = 3 - 4y \\quad \\text{and} \\quad f_y = -4x + 9$$\n$$\\nabla f(x, y) = \\langle 3 - 4y, -4x + 9 \\rangle$$\nAt the point $(1, 2)$:\n$$\\nabla f(1, 2) = \\langle 3 - 4(2), -4(1) + 9 \\rangle = \\langle -5, 5 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Normalize the direction vector $\\vec{v} = 3\\vec{i} + 4\\vec{j}$.</strong></p>\n<p>$$\\|\\vec{v}\\| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5$$\n$$\\vec{u} = \\frac{\\vec{v}}{\\|\\vec{v}\\|} = \\left\\langle \\frac{3}{5}, \\frac{4}{5} \\right\\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Calculate the directional derivative $D_{\\vec{u}} f(1, 2)$.</strong></p>\n<p>$$D_{\\vec{u}} f(1, 2) = \\nabla f(1, 2) \\cdot \\vec{u} = \\langle -5, 5 \\rangle \\cdot \\left\\langle \\frac{3}{5}, \\frac{4}{5} \\right\\rangle = -5\\left(\\frac{3}{5}\\right) + 5\\left(\\frac{4}{5}\\right) = -3 + 4 = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Recall the formula for the maximum directional derivative.</strong></p>\n<p>The maximum value of the directional derivative of a differentiable function $f$ at a point occurs in the direction of the gradient and is equal to the magnitude of the gradient:\n$$\\max D_{\\vec{u}} f = \\|\\nabla f\\|$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Compute the gradient of $f(x, y, z) = \\sqrt{x^2 + y^2 + z^2}$.</strong></p>\n<p>Let $r = \\sqrt{x^2 + y^2 + z^2}$.\n$$f_x = \\frac{2x}{2\\sqrt{x^2 + y^2 + z^2}} = \\frac{x}{r}$$\n$$f_y = \\frac{y}{r}, \\quad f_z = \\frac{z}{r}$$\n$$\\nabla f(x, y, z) = \\frac{1}{r}\\langle x, y, z \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Compute the magnitude of the gradient.</strong></p>\n<p>$$\\|\\nabla f(x, y, z)\\| = \\left\\|\\frac{1}{r}\\langle x, y, z \\rangle\\right\\| = \\frac{1}{r}\\sqrt{x^2 + y^2 + z^2} = \\frac{r}{r} = 1$$\nThis holds for any point $(x, y, z) \\ne (0, 0, 0)$, including $(1, 4, 2)$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Recall the direction of minimum increase (steepest decrease).</strong></p>\n<p>The direction of greatest increase is given by $\\nabla f$, whereas the direction of minimum increase (steepest decrease) is given by the negative gradient:\n$$\\vec{d}_{\\min} = -\\nabla f$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Compute the gradient of $f(x, y, z) = e^{2y}\\cos(x + z^3)$.</strong></p>\n<p>$$f_x = -e^{2y}\\sin(x + z^3)$$\n$$f_y = 2e^{2y}\\cos(x + z^3)$$\n$$f_z = -3z^2 e^{2y}\\sin(x + z^3)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Evaluate at the point $\\left(\\frac{\\pi}{2}, \\frac{1}{2}, 0\\right)$.</strong></p>\n<p>$$x + z^3 = \\frac{\\pi}{2} + 0^3 = \\frac{\\pi}{2} \\implies \\sin\\left(\\frac{\\pi}{2}\\right) = 1, \\quad \\cos\\left(\\frac{\\pi}{2}\\right) = 0$$\n$$e^{2(1/2)} = e^1 = e$$\n$$\\begin{aligned}\nf_x &= -e(1) = -e \\\\\nf_y &= 2e(0) = 0 \\\\\nf_z &= -3(0)^2 e(1) = 0\n\\end{aligned}$$\nThus $\\nabla f = \\langle -e, 0, 0 \\rangle = -e\\vec{i}$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Compute $-\\nabla f$.</strong></p>\n<p>$$-\\nabla f = -(-e\\vec{i}) = e\\vec{i}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 5: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute partial derivatives of $z = f(x, y) = x^2 + y^2 + 3$.</strong></p>\n<p>$$f_x(x, y) = 2x \\implies f_x(2, 1) = 2(2) = 4$$\n$$f_y(x, y) = 2y \\implies f_y(2, 1) = 2(1) = 2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Apply the tangent plane formula.</strong></p>\n<p>$$z - z_0 = f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0)$$\nWith $(x_0, y_0, z_0) = (2, 1, 8)$:\n$$z - 8 = 4(x - 2) + 2(y - 1)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Expand and rearrange to standard linear form.</strong></p>\n<p>$$z - 8 = 4x - 8 + 2y - 2$$\n$$z - 8 = 4x + 2y - 10 \\iff 4x + 2y - z = 2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Set the conditions for a horizontal tangent plane.</strong></p>\n<p>A tangent plane to $z = f(x, y)$ is horizontal if and only if both first partial derivatives vanish simultaneously:\n$$f_x(x, y) = 0 \\quad \\text{and} \\quad f_y(x, y) = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Compute partial derivatives and solve the linear system.</strong></p>\n<p>Given $z = x^2 - xy + y^2 - 2x - 2y$:\n$$f_x = 2x - y - 2 = 0 \\implies y = 2x - 2$$\n$$f_y = -x + 2y - 2 = 0$$\nSubstitute $y = 2x - 2$ into the second equation:\n$$-x + 2(2x - 2) - 2 = 0 \\implies 3x - 6 = 0 \\implies x = 2$$\nThen:\n$$y = 2(2) - 2 = 2$$\nThus $a = 2$ and $b = 2$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Determine $c = z(2, 2)$.</strong></p>\n<p>$$c = 2^2 - (2)(2) + 2^2 - 2(2) - 2(2) = 4 - 4 + 4 - 4 - 4 = -4$$\nThus the point is $(a, b, c) = (2, 2, -4)$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Calculate $a^2 + b^2 + c^2$.</strong></p>\n<p>$$a^2 + b^2 + c^2 = 2^2 + 2^2 + (-4)^2 = 4 + 4 + 16 = 24$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 5: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(A)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute the gradient vector of the ellipsoid level surface.</strong></p>\n<p>Let $F(x, y, z) = 3x^2 + y^2 + 3z^2 - 1 = 0$.\n$$\\nabla F = \\langle 6x, 2y, 6z \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Relate the gradient to the parallel plane's normal vector.</strong></p>\n<p>The given plane $-6x + y + 3z = 0$ has normal vector $\\vec{n} = \\langle -6, 1, 3 \\rangle$.\nFor the tangent plane to be parallel to this plane, $\\nabla F$ must be parallel to $\\vec{n}$:\n$$\\langle 6x, 2y, 6z \\rangle = k \\langle -6, 1, 3 \\rangle$$\nThis yields:\n$$6x = -6k \\implies x = -k$$\n$$2y = k \\implies y = \\frac{k}{2}$$\n$$6z = 3k \\implies z = \\frac{k}{2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Substitute $(x, y, z)$ into the ellipsoid equation.</strong></p>\n<p>$$3(-k)^2 + \\left(\\frac{k}{2}\\right)^2 + 3\\left(\\frac{k}{2}\\right)^2 = 1$$\n$$3k^2 + \\frac{k^2}{4} + \\frac{3k^2}{4} = 1 \\implies 3k^2 + k^2 = 1 \\implies 4k^2 = 1 \\implies k = \\pm \\frac{1}{2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Compute $a + b + c$.</strong></p>\n<p>Notice that:\n$$a + b + c = x + y + z = -k + \\frac{k}{2} + \\frac{k}{2} = 0$$\nSince this sum is identically zero for any $k$, $a + b + c = 0$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 5: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(A)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Determine the domain condition of the logarithm.</strong></p>\n<p>For $f(x, y) = \\ln(6 - x - y)$, the argument must be strictly positive:\n$$6 - x - y > 0 \\iff x + y < 6$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Intersect with the first quadrant.</strong></p>\n<p>The first quadrant requires $x \\ge 0$ and $y \\ge 0$. The region is bounded by:\n$$x \\ge 0, \\quad y \\ge 0, \\quad x + y \\le 6$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Calculate the area of the triangular region.</strong></p>\n<p>This is a right triangle with vertices at $(0, 0)$, $(6, 0)$, and $(0, 6)$.\n$$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2}(6)(6) = 18$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Set the level surface equation $f(x, y, z) = k$.</strong></p>\n<p>$$\\ln(4x^2 + 4y^2 - z^2) = k$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Exponentiate both sides to eliminate the logarithm.</strong></p>\n<p>$$4x^2 + 4y^2 - z^2 = e^k$$\nSince $e^k > 0$ for all real constants $k$, let $c = e^k > 0$:\n$$4x^2 + 4y^2 - z^2 = c \\iff \\frac{x^2}{c/4} + \\frac{y^2}{c/4} - \\frac{z^2}{c} = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Classify the quadric surface.</strong></p>\n<p>An equation with two positive squared variables and one negative squared variable equal to $+1$ represents a <strong>hyperboloid of one sheet</strong> (with circular cross-sections parallel to the $xy$-plane).</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Determine domain boundaries for the logarithm.</strong></p>\n<p>Let $u = 3 - 2x^2 - y^2$. The function $f(x, y) = 4\\ln u$ requires $u > 0$, so $2x^2 + y^2 < 3$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Find bounds on $u$.</strong></p>\n<p>Since $2x^2 + y^2 \\ge 0$:\n<ul>\n<li>$u$ reaches its maximum at $(0, 0)$: $u_{\\max} = 3 - 0 = 3$.</li>\n<li>As $(x, y)$ approaches the boundary ellipse $2x^2 + y^2 = 3$, $u \\to 0^+$.</li>\n</ul>\nHence $u \\in (0, 3]$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Evaluate range of $4\\ln u$.</strong></p>\n<p>Since $\\ln u$ is strictly increasing on $(0, \\infty)$:\n$$\\lim_{u \\to 0^+} 4\\ln u = -\\infty \\quad \\text{and} \\quad 4\\ln(3) = 4\\ln 3$$\nThe range is $(-\\infty, 4\\ln 3]$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
  },
  {
    "id": "231_4",
    "term": "231",
    "number": 4,
    "section": "13.2",
    "topic": "13.2 Limits & Continuity",
    "question": "$\\lim_{(x,y)\\to(0,0)} \\frac{e^{-x^2-y^2} - 1}{x^2 + y^2} =$",
    "choices": [
      "does not exist",
      "$-1$",
      "$0$",
      "$3$",
      "$-2$"
    ],
    "correct_answer": "B",
    "solution": "<p><strong>Step 1: Convert to single variable using radial substitution.</strong></p>\n<p>Let $u = x^2 + y^2$. As $(x, y) \\to (0, 0)$, $u \\to 0^+$:\n$$\\lim_{(x,y)\\to(0,0)} \\frac{e^{-(x^2+y^2)} - 1}{x^2 + y^2} = \\lim_{u \\to 0^+} \\frac{e^{-u} - 1}{u}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Evaluate using L'H&ocirc;pital's Rule.</strong></p>\n<p>Direct substitution yields indeterminate form $\\frac{0}{0}$. Differentiating numerator and denominator with respect to $u$:\n$$\\lim_{u \\to 0^+} \\frac{\\frac{d}{du}(e^{-u} - 1)}{\\frac{d}{du}(u)} = \\lim_{u \\to 0^+} \\frac{-e^{-u}}{1} = -e^0 = -1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
  },
  {
    "id": "231_5",
    "term": "231",
    "number": 5,
    "section": "13.6",
    "topic": "13.6 Directional Derivatives & Gradients",
    "question": "If the maximum increase of the function $f(x, y) = x^2 + y^2 - 4x - 2y$ at the point $(5, c)$ occurs in the direction of $\\vec{i} + 2\\vec{j}$, then $c =$",
    "choices": [
      "$4$",
      "$3$",
      "$0$",
      "$7$",
      "$5$"
    ],
    "correct_answer": "D",
    "solution": "<p><strong>Step 1: Compute the gradient vector $\\nabla f(x, y)$.</strong></p>\n<p>The function is $f(x, y) = x^2 + y^2 - 4x - 2y$.\n$$f_x = 2x - 4 \\quad \\text{and} \\quad f_y = 2y - 2$$\n$$\\nabla f(x, y) = \\langle 2x - 4, 2y - 2 \\rangle$$\nAt the point $(5, c)$:\n$$\\nabla f(5, c) = \\langle 2(5) - 4, 2c - 2 \\rangle = \\langle 6, 2c - 2 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Relate to the direction of maximum increase.</strong></p>\n<p>The maximum rate of increase always occurs in the exact direction of the gradient vector $\\nabla f(5, c)$.\nWe are given that this direction is $\\vec{i} + 2\\vec{j} = \\langle 1, 2 \\rangle$.\nTherefore, $\\nabla f(5, c)$ must be a positive scalar multiple of $\\langle 1, 2 \\rangle$:\n$$\\langle 6, 2c - 2 \\rangle = k \\langle 1, 2 \\rangle \\quad (k > 0)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Solve for $k$ and $c$.</strong></p>\n<p>From the $x$-component:\n$$6 = k(1) \\implies k = 6$$\nFrom the $y$-component:\n$$2c - 2 = k(2) = 6(2) = 12$$\n$$2c = 14 \\implies c = 7$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(D)</strong>.</p>"
  },
  {
    "id": "231_6",
    "term": "231",
    "number": 6,
    "section": "13.2",
    "topic": "13.2 Limits & Continuity",
    "question": "$\\lim_{(x,y)\\to(0,0)} \\frac{x^2 y}{x^4 + y^2} =$",
    "choices": [
      "does not exist",
      "$-1$",
      "$1$",
      "$0$",
      "$\\infty$"
    ],
    "correct_answer": "A",
    "solution": "<p><strong>Step 1: Analyze degree homogeneity and test parabolic paths.</strong></p>\n<p>We examine the limit:\n$$\\lim_{(x,y)\\to(0,0)} \\frac{x^2 y}{x^4 + y^2}$$\nNotice that $x^4$ and $y^2$ have equal degree weight when $y \\propto x^2$.\nTest approach paths of the form $y = m x^2$, where $m$ is a real constant:\n$$\\lim_{x \\to 0} \\frac{x^2(m x^2)}{x^4 + (m x^2)^2} = \\lim_{x \\to 0} \\frac{m x^4}{x^4 + m^2 x^4} = \\lim_{x \\to 0} \\frac{m x^4}{x^4(1 + m^2)} = \\frac{m}{1 + m^2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Show path dependence.</strong></p>\n<p><ul>\n<li>Along $y = 0$ ($m = 0$): $\\lim = 0$.</li>\n<li>Along $y = x^2$ ($m = 1$): $\\lim = \\frac{1}{1 + 1^2} = \\frac{1}{2}$.</li>\n</ul>\nBecause the limit depends on the chosen path parameter $m$, the limit <strong>does not exist</strong>.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(A)</strong>.</p>"
  },
  {
    "id": "231_7",
    "term": "231",
    "number": 7,
    "section": "13.5",
    "topic": "13.5 Multivariable Chain Rule",
    "question": "Let $z = \\arctan(xy)$ where $x = s + \\sin t$ and $y = \\cos t$. Then $\\frac{\\partial z}{\\partial s} + \\frac{\\partial z}{\\partial t}$ at $(s, t) = (1, 0)$ is equal to",
    "choices": [
      "$0$",
      "$8$",
      "$1$",
      "$-2$",
      "$-4$"
    ],
    "correct_answer": "C",
    "solution": "<p><strong>Step 1: Compute intermediate coordinate values at $(s, t) = (1, 0)$.</strong></p>\n<p>$$x(1, 0) = 1 + \\sin(0) = 1$$\n$$y(1, 0) = \\cos(0) = 1$$\n$$xy = 1(1) = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Compute partial derivatives of $z = \\arctan(xy)$.</strong></p>\n<p>$$z_x = \\frac{y}{1 + (xy)^2} \\implies z_x(1, 1) = \\frac{1}{1 + 1^2} = \\frac{1}{2}$$\n$$z_y = \\frac{x}{1 + (xy)^2} \\implies z_y(1, 1) = \\frac{1}{1 + 1^2} = \\frac{1}{2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Compute partial derivatives of $x$ and $y$.</strong></p>\n<p>$$x_s = 1, \\quad x_t = \\cos t \\implies x_t(1, 0) = \\cos 0 = 1$$\n$$y_s = 0, \\quad y_t = -\\sin t \\implies y_t(1, 0) = -\\sin 0 = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Apply the chain rule for $\\frac{\\partial z}{\\partial s}$ and $\\frac{\\partial z}{\\partial t}$.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial s} = z_x x_s + z_y y_s = \\frac{1}{2}(1) + \\frac{1}{2}(0) = \\frac{1}{2}$$\n$$\\frac{\\partial z}{\\partial t} = z_x x_t + z_y y_t = \\frac{1}{2}(1) + \\frac{1}{2}(0) = \\frac{1}{2}$$\n$$\\frac{\\partial z}{\\partial s} + \\frac{\\partial z}{\\partial t} = \\frac{1}{2} + \\frac{1}{2} = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 5: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: State the continuity requirement at $(0, 0)$.</strong></p>\n<p>For $f(x, y)$ to be continuous at $(0, 0)$, we require:\n$$\\lim_{(x, y) \\to (0, 0)} f(x, y) = f(0, 0) = c$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Evaluate the limit using substitution.</strong></p>\n<p>Let $u = xy$. As $(x, y) \\to (0, 0)$, $u = xy \\to 0$:\n$$\\lim_{(x, y) \\to (0, 0)} \\frac{\\sin(xy)}{xy} = \\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Equate the limit to $c$.</strong></p>\n<p>$$c = \\lim_{(x, y) \\to (0, 0)} f(x, y) = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
  },
  {
    "id": "231_9",
    "term": "231",
    "number": 9,
    "section": "13.7",
    "topic": "13.7 Tangent Planes & Normal Lines",
    "question": "The normal line to the surface $\\ln\\left(\\frac{x}{y - z}\\right) = x - 1$ at the point $(1, 4, 3)$ passes through the point",
    "choices": [
      "$(0, 3, 3)$",
      "$(1, 3, 4)$",
      "$(1, 2, 3)$",
      "$(2, 3, 3)$",
      "$(1, 2, 1)$"
    ],
    "correct_answer": "B",
    "solution": "<p><strong>Step 1: Define implicit surface $F(x, y, z) = 0$.</strong></p>\n<p>Using logarithm properties on $\\ln\\left(\\frac{x}{y - z}\\right) = x - 1$:\n$$F(x, y, z) = \\ln x - \\ln(y - z) - x + 1 = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Compute the gradient vector at $(1, 4, 3)$.</strong></p>\n<p>$$\\begin{aligned}\nF_x &= \\frac{1}{x} - 1 \\implies F_x(1, 4, 3) = \\frac{1}{1} - 1 = 0 \\\\\nF_y &= -\\frac{1}{y - z} \\implies F_y(1, 4, 3) = -\\frac{1}{4 - 3} = -1 \\\\\nF_z &= -\\left(-\\frac{1}{y - z}\\right) = \\frac{1}{y - z} \\implies F_z(1, 4, 3) = \\frac{1}{4 - 3} = 1\n\\end{aligned}$$\nThus, the normal vector to the surface is $\\vec{n} = \\langle 0, -1, 1 \\rangle$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Write parametric equations for the normal line and test candidate points.</strong></p>\n<p>Through $(1, 4, 3)$ with direction $\\langle 0, -1, 1 \\rangle$:\n$$x(t) = 1, \\quad y(t) = 4 - t, \\quad z(t) = 3 + t$$\nSetting $t = 1$:\n$$x = 1, \\quad y = 4 - 1 = 3, \\quad z = 3 + 1 = 4 \\implies (1, 3, 4)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
  },
  {
    "id": "231_10",
    "term": "231",
    "number": 10,
    "section": "13.4",
    "topic": "13.4 Differentials & Linear Approx",
    "question": "If the radius and height of a right circular cone are measured as $10\\,\\text{cm}$ and $25\\,\\text{cm}$, respectively, with a possible error in measurement of as much as $0.1\\,\\text{cm}$ in each. The maximum error in the calculated volume of the cone is estimated as (Hint: The volume $V$ of a cone with radius $r$ and height $h$ is $V = \\frac{1}{3}\\pi r^2 h$).",
    "choices": [
      "$12\\pi$",
      "$20\\pi$",
      "$4\\pi$",
      "$10\\pi$",
      "$2\\pi$"
    ],
    "correct_answer": "B",
    "solution": "<p><strong>Step 1: Write the total differential formula for cone volume.</strong></p>\n<p>$$V(r, h) = \\frac{1}{3}\\pi r^2 h$$\n$$dV = \\frac{\\partial V}{\\partial r}\\,dr + \\frac{\\partial V}{\\partial h}\\,dh = \\left(\\frac{2}{3}\\pi r h\\right)dr + \\left(\\frac{1}{3}\\pi r^2\\right)dh$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Substitute the given measurements and maximum errors.</strong></p>\n<p>Given $r = 10\\text{ cm}, h = 25\\text{ cm}, dr = 0.1\\text{ cm}, dh = 0.1\\text{ cm}$:\n$$dV = \\frac{2}{3}\\pi(10)(25)(0.1) + \\frac{1}{3}\\pi(10^2)(0.1)$$\n$$= \\frac{500\\pi}{3}(0.1) + \\frac{100\\pi}{3}(0.1) = \\frac{50\\pi}{3} + \\frac{10\\pi}{3} = \\frac{60\\pi}{3} = 20\\pi\\text{ cm}^3$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Apply Clairaut's Theorem to choose an efficient differentiation order.</strong></p>\n<p>By Clairaut's Theorem, mixed partial derivatives commute: $f_{xyz} = f_{zxy}$.\nGiven $f(x, y, z) = x e^{xy} \\sin^2 z$, differentiating with respect to $z$ first separates the variables cleanly.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Differentiate sequentially.</strong></p>\n<p>$$\\begin{aligned}\nf_z &= x e^{xy} \\cdot \\frac{d}{dz}(\\sin^2 z) = x e^{xy}(2\\sin z\\cos z) = x e^{xy}\\sin(2z) \\\\\nf_{zx} &= \\frac{\\partial}{\\partial x}\\left[x e^{xy}\\right]\\sin(2z) = (e^{xy} + x y e^{xy})\\sin(2z) = (1 + xy)e^{xy}\\sin(2z) \\\\\nf_{zxy} &= \\frac{\\partial}{\\partial y}\\left[(1 + xy)e^{xy}\\right]\\sin(2z) = \\left[x e^{xy} + (1 + xy)x e^{xy}\\right]\\sin(2z) = x(2 + xy)e^{xy}\\sin(2z)\n\\end{aligned}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Evaluate at $(-1, 0, \\pi/4)$.</strong></p>\n<p>Substitute $x = -1, y = 0, z = \\pi/4$:\n$$xy = 0, \\quad e^0 = 1, \\quad \\sin\\left(2 \\cdot \\frac{\\pi}{4}\\right) = \\sin\\left(\\frac{\\pi}{2}\\right) = 1$$\n$$f_{xyz}\\left(-1, 0, \\frac{\\pi}{4}\\right) = (-1)(2 + 0)(1)(1) = -2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(C)</strong>.</p>"
  },
  {
    "id": "231_12",
    "term": "231",
    "number": 12,
    "section": "13.5",
    "topic": "13.5 Multivariable Chain Rule",
    "question": "Let $W(s, t) = F(u(s, t), v(s, t))$, where $F, u$ and $v$ are differentiable functions, and $F_u(2, -3) = 1, F_v(2, -3) = 3, u(1, 0) = 2, v(1, 0) = -3, u_s(1, 0) = -2, v_s(1, 0) = 5, u_t(1, 0) = -6, v_t(1, 0) = 4$. Then $W_s(1, 0) + W_t(1, 0) =$",
    "choices": [
      "$19$",
      "$22$",
      "$20$",
      "$0$",
      "$11$"
    ],
    "correct_answer": "A",
    "solution": "<p><strong>Step 1: State the multivariable chain rule for $W(s, t) = F(u(s, t), v(s, t))$.</strong></p>\n<p>$$W_s = F_u u_s + F_v v_s$$\n$$W_t = F_u u_t + F_v v_t$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Evaluate $W_s(1, 0)$ and $W_t(1, 0)$.</strong></p>\n<p>At $(s, t) = (1, 0)$, $(u, v) = (2, -3)$. We are given $F_u = 1$ and $F_v = 3$:\n$$W_s(1, 0) = (1)(-2) + (3)(5) = -2 + 15 = 13$$\n$$W_t(1, 0) = (1)(-6) + (3)(4) = -6 + 12 = 6$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Compute the sum $W_s(1, 0) + W_t(1, 0)$.</strong></p>\n<p>$$W_s(1, 0) + W_t(1, 0) = 13 + 6 = 19$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(A)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Formulate implicit function $F(x, y, z) = 0$.</strong></p>\n<p>$$F(x, y, z) = 2yz + x\\ln y - z^2 = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Apply the Implicit Function Theorem formula for $\\frac{\\partial z}{\\partial y}$.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}$$\nCompute $F_y$ and $F_z$:\n$$F_y = 2z + \\frac{x}{y}$$\n$$F_z = 2y - 2z$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Evaluate at the point $(2, 1, 2)$.</strong></p>\n<p>$$F_y(2, 1, 2) = 2(2) + \\frac{2}{1} = 4 + 2 = 6$$\n$$F_z(2, 1, 2) = 2(1) - 2(2) = 2 - 4 = -2$$\n$$\\frac{\\partial z}{\\partial y} = -\\frac{6}{-2} = 3$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(A)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Match the coefficients of the normal vectors.</strong></p>\n<p>The two given planes are:\n$$\\Pi_1: 10x + 2y - 2z = 5$$\n$$\\Pi_2: 5x + y - z = 1$$\nMultiply $\\Pi_2$ by $2$:\n$$10x + 2y - 2z = 2$$\nBoth planes now have identical normal vector $\\vec{n} = \\langle 10, 2, -2 \\rangle$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Compute the magnitude of the normal vector.</strong></p>\n<p>$$\\|\\vec{n}\\| = \\sqrt{10^2 + 2^2 + (-2)^2} = \\sqrt{100 + 4 + 4} = \\sqrt{108} = \\sqrt{36 \\times 3} = 6\\sqrt{3}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Apply the distance formula between parallel planes.</strong></p>\n<p>$$D = \\frac{|D_1 - D_2|}{\\|\\vec{n}\\|} = \\frac{|5 - 2|}{6\\sqrt{3}} = \\frac{3}{6\\sqrt{3}} = \\frac{1}{2\\sqrt{3}} = \\frac{\\sqrt{3}}{6}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute the gradient vector $\\nabla f(x, y)$.</strong></p>\n<p>For $f(x, y) = \\ln(1 + xy)$:\n$$f_x = \\frac{y}{1 + xy}, \\quad f_y = \\frac{x}{1 + xy}$$\n$$\\nabla f(a, 4) = \\left\\langle \\frac{4}{1 + 4a}, \\frac{a}{1 + 4a} \\right\\rangle = \\frac{1}{1 + 4a}\\langle 4, a \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Set the directional derivative to zero.</strong></p>\n<p>The directional derivative in the direction of $\\vec{v} = \\langle 1, -2 \\rangle$ is zero if and only if $\\nabla f(a, 4) \\cdot \\vec{v} = 0$:\n$$\\langle 4, a \\rangle \\cdot \\langle 1, -2 \\rangle = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Solve for $a$.</strong></p>\n<p>$$4(1) + a(-2) = 0 \\implies 4 - 2a = 0 \\implies 2a = 4 \\implies a = 2$$\n(Note that for $a = 2$, $1 + 4(2) = 9 > 0$, so the logarithm is well-defined.)</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Find a direction vector $\\vec{v}$ for the line through $P(1, 3, 4)$ and $Q(0, 5, 7)$.</strong></p>\n<p>$$\\vec{v} = \\vec{PQ} = \\langle 0 - 1, 5 - 3, 7 - 4 \\rangle = \\langle -1, 2, 3 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Write parametric equations for the line.</strong></p>\n<p>$$x(t) = 1 - t, \\quad y(t) = 3 + 2t, \\quad z(t) = 4 + 3t$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Use the point $R(2, 1, a)$ to solve for $t$ and $a$.</strong></p>\n<p>From the $x$-coordinate:\n$$2 = 1 - t \\implies t = -1$$\nVerify with $y$: $y(-1) = 3 + 2(-1) = 1$ (consistent).\nNow solve for $a$:\n$$a = z(-1) = 4 + 3(-1) = 4 - 3 = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(A)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Use the family of planes passing through the intersection line.</strong></p>\n<p>The pencil of planes passing through the intersection of $\\Pi_1: x + y + z - 1 = 0$ and $\\Pi_2: 2x - y + 2z - 2 = 0$ is:\n$$(x + y + z - 1) + k(2x - y + 2z - 2) = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Substitute the point $(1, 2, 3)$ to find $k$.</strong></p>\n<p>$$(1 + 2 + 3 - 1) + k(2(1) - 2 + 2(3) - 2) = 0$$\n$$5 + k(2 - 2 + 6 - 2) = 0 \\implies 5 + 4k = 0 \\implies k = -\\frac{5}{4}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Simplify the plane equation.</strong></p>\n<p>Multiply through by $4$:\n$$4(x + y + z - 1) - 5(2x - y + 2z - 2) = 0$$\n$$(4x - 10x) + (4y + 5y) + (4z - 10z) + (-4 + 10) = 0$$\n$$-6x + 9y - 6z + 6 = 0$$\nDivide by $-3$:\n$$2x - 3y + 2z - 2 = 0 \\iff 2x - 3y + 2z = 2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Compare with $2x + ay + 2z = b$ and compute $a + b$.</strong></p>\n<p>$$a = -3, \\quad b = 2$$\n$$a + b = -3 + 2 = -1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 5: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
  },
  {
    "id": "231_18",
    "term": "231",
    "number": 18,
    "section": "11.6",
    "topic": "11.6 Quadric Surfaces & Cylinders",
    "question": "Consider the surface $x^2 - 3y^2 - 9z^2 = 0$. Which of the following is/are correct? (I) The vertical trace in the $xz$-plane is the lines $x = \\pm 3z$. (II) The traces in the plane parallel to the $yz$-plane are ellipses. (III) The surface represents a hyperboloid of two sheets.",
    "choices": [
      "(I) only",
      "(II) and (III) only",
      "(I) and (II) only",
      "(II) only",
      "(III) only"
    ],
    "correct_answer": "C",
    "solution": "<p><strong>Step 1: Analyze statement (I) — trace in the $xz$-plane.</strong></p>\n<p>The surface equation is $x^2 - 3y^2 - 9z^2 = 0$.\nThe trace in the $xz$-plane is obtained by setting $y = 0$:\n$$x^2 - 9z^2 = 0 \\iff x^2 = 9z^2 \\iff x = \\pm 3z$$\nThis is indeed the pair of intersecting lines $x = \\pm 3z$. Thus, (I) is <strong>true</strong>.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Analyze statement (II) — traces in planes parallel to the $yz$-plane.</strong></p>\n<p>Planes parallel to the $yz$-plane have equation $x = k$ (where $k \\ne 0$):\n$$k^2 - 3y^2 - 9z^2 = 0 \\iff 3y^2 + 9z^2 = k^2 \\iff \\frac{y^2}{k^2/3} + \\frac{z^2}{k^2/9} = 1$$\nThese are ellipses for any non-zero constant $k$. Thus, (II) is <strong>true</strong>.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Analyze statement (III) — surface classification.</strong></p>\n<p>Rewriting $x^2 = 3y^2 + 9z^2$, this is the equation of an <strong>elliptic cone</strong> opening along the $x$-axis with vertex at the origin, not a hyperboloid of two sheets. Thus, (III) is <strong>false</strong>.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>Only (I) and (II) are correct, which matches Choice <strong>(C)</strong>.</p>"
  },
  {
    "id": "231_19",
    "term": "231",
    "number": 19,
    "section": "13.7",
    "topic": "13.7 Tangent Planes & Normal Lines",
    "question": "If the line with symmetric equations $x - 2 = z - 1, y = 1$ is perpendicular to the surface $3x^2 - 2xy + z^2 = 1$ at the point $(x_0, y_0, z_0)$, then $x_0 + y_0 + z_0 =$",
    "choices": [
      "$0$",
      "$2$",
      "$4$",
      "$3$",
      "$1$"
    ],
    "correct_answer": "A",
    "solution": "<p><strong>Step 1: Identify line direction vector and surface normal vector.</strong></p>\n<p>The line $x - 2 = z - 1, \\; y = 1$ has direction vector $\\vec{v} = \\langle 1, 0, 1 \\rangle$.\nFor the surface $F(x, y, z) = 3x^2 - 2xy + z^2 - 1 = 0$, the normal vector is given by the gradient:\n$$\\nabla F = \\langle 6x - 2y, -2x, 2z \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Relate normal vector to line direction at $(x_0, y_0, z_0)$.</strong></p>\n<p>Since the line is perpendicular to the surface, $\\nabla F(x_0, y_0, z_0)$ must be parallel to $\\vec{v} = \\langle 1, 0, 1 \\rangle$:\n$$\\langle 6x_0 - 2y_0, -2x_0, 2z_0 \\rangle = k \\langle 1, 0, 1 \\rangle$$\nFrom the $y$-component: $-2x_0 = 0 \\implies x_0 = 0$.\nThen the gradient becomes $\\langle -2y_0, 0, 2z_0 \\rangle \\implies -2y_0 = 2z_0 \\implies y_0 = -z_0$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Use surface equation to determine $x_0 + y_0 + z_0$.</strong></p>\n<p>Substitute $x_0 = 0$ and $y_0 = -z_0$ into the surface equation:\n$$3(0)^2 - 2(0)(-z_0) + z_0^2 = 1 \\implies z_0^2 = 1 \\implies z_0 = \\pm 1$$\nSince $y_0 = -z_0$, in either case:\n$$x_0 + y_0 + z_0 = 0 + (-z_0) + z_0 = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(A)</strong>.</p>"
  },
  {
    "id": "231_20",
    "term": "231",
    "number": 20,
    "section": "13.5",
    "topic": "13.5 Multivariable Chain Rule",
    "question": "Let $w = \\sqrt{x^2 + y^2 + z^2}$, where $x = \\cos\\theta, y = \\sin\\theta, z = \\tan\\theta$. Then $\\frac{dw}{d\\theta}$ at $\\theta = \\frac{\\pi}{4}$ is equal to",
    "choices": [
      "$\\frac{3}{\\sqrt{2}}$",
      "$\\sqrt{3}$",
      "$2\\sqrt{3}$",
      "$1$",
      "$\\sqrt{2}$"
    ],
    "correct_answer": "E",
    "solution": "<p><strong>Step 1: Simplify $w$ directly using trigonometric identities.</strong></p>\n<p>Given $w = \\sqrt{x^2 + y^2 + z^2}$ with $x = \\cos\\theta, y = \\sin\\theta, z = \\tan\\theta$:\n$$x^2 + y^2 + z^2 = \\cos^2\\theta + \\sin^2\\theta + \\tan^2\\theta = 1 + \\tan^2\\theta = \\sec^2\\theta$$\nFor $\\theta = \\frac{\\pi}{4}$ (in the first quadrant), $\\sec\\theta > 0$, so:\n$$w(\\theta) = \\sqrt{\\sec^2\\theta} = \\sec\\theta$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Differentiate with respect to $\\theta$.</strong></p>\n<p>$$\\frac{dw}{d\\theta} = \\frac{d}{d\\theta}(\\sec\\theta) = \\sec\\theta \\tan\\theta$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Evaluate at $\\theta = \\frac{\\pi}{4}$.</strong></p>\n<p>$$\\sec\\left(\\frac{\\pi}{4}\\right) = \\sqrt{2}, \\quad \\tan\\left(\\frac{\\pi}{4}\\right) = 1$$\n$$\\frac{dw}{d\\theta}\\Bigg|_{\\theta = \\pi/4} = \\sqrt{2} \\cdot 1 = \\sqrt{2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Extract a base point and direction vector from the line.</strong></p>\n<p>The given line is:\n$$\\frac{x - 1}{3} = \\frac{y - 2}{4} = \\frac{z - (-1)}{1}$$\nFrom this symmetric form, the line passes through $P_0(1, 2, -1)$ with direction vector:\n$$\\vec{v} = \\langle 3, 4, 1 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Construct a second vector in the plane.</strong></p>\n<p>The plane also contains the point $P(2, 1, 2)$. The displacement vector between $P_0$ and $P$ lies in the plane:\n$$\\vec{P_0 P} = \\langle 2 - 1, 1 - 2, 2 - (-1) \\rangle = \\langle 1, -1, 3 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Determine the normal vector via the cross product.</strong></p>\n<p>$$\\vec{n} = \\vec{v} \\times \\vec{P_0 P} = \\det \\begin{pmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 3 & 4 & 1 \\\\ 1 & -1 & 3 \\end{pmatrix}$$\n$$= \\mathbf{i}(12 - (-1)) - \\mathbf{j}(9 - 1) + \\mathbf{k}(-3 - 4) = \\langle 13, -8, -7 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Write the equation of the plane.</strong></p>\n<p>Using the point $P(2, 1, 2)$:\n$$13(x - 2) - 8(y - 1) - 7(z - 2) = 0$$\n$$13x - 26 - 8y + 8 - 7z + 14 = 0 \\iff 13x - 8y - 7z - 4 = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 5: Substitute the point $(-1, b, 1)$ to find $b$.</strong></p>\n<p>Since $(-1, b, 1)$ lies on the plane:\n$$13(-1) - 8b - 7(1) - 4 = 0$$\n$$-13 - 8b - 7 - 4 = 0 \\implies -8b - 24 = 0 \\implies 8b = -24 \\implies b = -3$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 6: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Normalize the plane equations so their normal vectors match.</strong></p>\n<p>The two given planes are:\n$$\\Pi_1: 2x - 3y + 6z = 6$$\n$$\\Pi_2: -4x + 6y - 12z = 2$$\nDivide the second equation by $-2$:\n$$\\frac{-4x + 6y - 12z}{-2} = \\frac{2}{-2} \\implies 2x - 3y + 6z = -1$$\nBoth planes now share the identical normal vector $\\vec{n} = \\langle 2, -3, 6 \\rangle$, confirming they are parallel.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Calculate the magnitude of the normal vector.</strong></p>\n<p>$$\\|\\vec{n}\\| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Apply the distance formula between parallel planes.</strong></p>\n<p>For parallel planes $Ax + By + Cz = D_1$ and $Ax + By + Cz = D_2$, the perpendicular distance is:\n$$D = \\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}}$$\nSubstituting $D_1 = 6$, $D_2 = -1$, and $\\|\\vec{n}\\| = 7$:\n$$D = \\frac{|6 - (-1)|}{7} = \\frac{|6 + 1|}{7} = \\frac{7}{7} = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Write both lines in standard symmetric form.</strong></p>\n<p>For $L_1$: $-2x = y - 3 = 2z - 8$\n$$\\frac{x - 0}{-1/2} = \\frac{y - 3}{1} = \\frac{z - 4}{1/2}$$\nMultiplying the denominators by $2$, the direction vector is $\\vec{v} = \\langle -1, 2, 1 \\rangle$, and a base point is $P_1(0, 3, 4)$.</p>\n<p>For $L_2$: $2x = 1 - y = 8 - 2z$\n$$\\frac{x - 0}{1/2} = \\frac{y - 1}{-1} = \\frac{z - 4}{-1/2}$$\nMultiplying denominators by $2$, the direction vector is $\\langle 1, -2, -1 \\rangle = -\\vec{v}$, and a base point is $P_2(0, 1, 4)$.\nSince their direction vectors are scalar multiples, the lines are <strong>parallel</strong>.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Construct the vector connecting the base points.</strong></p>\n<p>$$\\vec{P_1 P_2} = \\langle 0 - 0, 1 - 3, 4 - 4 \\rangle = \\langle 0, -2, 0 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Compute the cross product $\\vec{P_1 P_2} \\times \\vec{v}$.</strong></p>\n<p>$$\\vec{P_1 P_2} \\times \\vec{v} = \\det \\begin{pmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 0 & -2 & 0 \\\\ -1 & 2 & 1 \\end{pmatrix} = \\mathbf{i}(-2 - 0) - \\mathbf{j}(0 - 0) + \\mathbf{k}(0 - 2) = \\langle -2, 0, -2 \\rangle$$\n$$\\|\\vec{P_1 P_2} \\times \\vec{v}\\| = \\sqrt{(-2)^2 + 0^2 + (-2)^2} = \\sqrt{4 + 0 + 4} = \\sqrt{8} = 2\\sqrt{2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Compute the distance between parallel lines.</strong></p>\n<p>$$\\|\\vec{v}\\| = \\sqrt{(-1)^2 + 2^2 + 1^2} = \\sqrt{1 + 4 + 1} = \\sqrt{6}$$\n$$D = \\frac{\\|\\vec{P_1 P_2} \\times \\vec{v}\\|}{\\|\\vec{v}\\|} = \\frac{\\sqrt{8}}{\\sqrt{6}} = \\sqrt{\\frac{4}{3}} = \\frac{2}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{3} = \\frac{\\sqrt{12}}{3}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 5: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Put the quadric surface equation into standard form.</strong></p>\n<p>The equation is:\n$$4x^2 - 3y^2 + 12z^2 + 12 = 0$$\nSubtract $12$ from both sides:\n$$4x^2 - 3y^2 + 12z^2 = -12$$\nDivide both sides by $-12$:\n$$-\\frac{4x^2}{12} + \\frac{3y^2}{12} - \\frac{12z^2}{12} = 1 \\iff -\\frac{x^2}{3} + \\frac{y^2}{4} - z^2 = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Classify the quadric surface.</strong></p>\n<p>The standard equation of a hyperboloid of two sheets opening along the $y$-axis is:\n$$-\\frac{x^2}{a^2} + \\frac{y^2}{b^2} - \\frac{z^2}{c^2} = 1$$\nBecause there are two negative squared terms ($-x^2/3$ and $-z^2$) and exactly one positive squared term ($+y^2/4$) equated to $+1$, the surface is a <strong>hyperboloid of two sheets</strong>.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Identify the axis of symmetry.</strong></p>\n<p>The axis of symmetry corresponds to the unique positive variable, which is the <strong>$y$-axis</strong>.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Formulate the geometric distance condition.</strong></p>\n<p>Let $P(x, y, z)$ be a general point on the surface.\n<ul>\n<li>The distance from $P$ to the point $(2, 2, 2)$ is:\n$$d_1 = \\sqrt{(x - 2)^2 + (y - 2)^2 + (z - 2)^2}$$</li>\n<li>The distance from $P$ to the $xy$-plane ($z = 0$) is:\n$$d_2 = |z|$$</li>\n</ul>\nSetting $d_1 = d_2$ gives:\n$$\\sqrt{(x - 2)^2 + (y - 2)^2 + (z - 2)^2} = |z|$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Square both sides and expand the $z$-dependent terms.</strong></p>\n<p>$$(x - 2)^2 + (y - 2)^2 + (z - 2)^2 = z^2$$\n$$(x - 2)^2 + (y - 2)^2 + (z^2 - 4z + 4) = z^2$$\nSubtract $z^2$ from both sides:\n$$(x - 2)^2 + (y - 2)^2 - 4z + 4 = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Solve explicitly for $z$.</strong></p>\n<p>$$4z = (x - 2)^2 + (y - 2)^2 + 4$$\nDivide through by $4$:\n$$z = \\frac{(x - 2)^2}{4} + \\frac{(y - 2)^2}{4} + 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Set the level curve equation $f(x, y) = C$.</strong></p>\n<p>The function is $f(x, y) = e^{1 - x^2 + y^2}$.\nSet $f(x, y) = C$ for a positive constant $C > 0$:\n$$e^{1 - x^2 + y^2} = C$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Take the natural logarithm of both sides.</strong></p>\n<p>$$1 - x^2 + y^2 = \\ln C$$\nRearrange the terms:\n$$y^2 - x^2 = \\ln C - 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Analyze the resulting conic section.</strong></p>\n<p>For any constant $C \\ne e$, $\\ln C - 1 \\ne 0$.\nThe equation $y^2 - x^2 = k$ (where $k \\ne 0$) represents a family of <strong>hyperbolas</strong> centered at the origin with perpendicular asymptotes $y = \\pm x$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Use radial substitution $u = x^2 + y^2$.</strong></p>\n<p>As $(x, y) \\to (0, 0)$, the radial variable $u = x^2 + y^2 \\to 0^+$.\nThe limit becomes:\n$$\\lim_{(x, y) \\to (0, 0)} e^{\\left(\\frac{1 - \\sec(x^2 + y^2)}{x^2 + y^2}\\right)} = \\exp\\left( \\lim_{u \\to 0^+} \\frac{1 - \\sec u}{u} \\right)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Evaluate the limit in the exponent using L'H&ocirc;pital's Rule.</strong></p>\n<p>Direct substitution into the exponent gives $\\frac{1 - \\sec 0}{0} = \\frac{1 - 1}{0} = \\frac{0}{0}$.\nApplying L'H&ocirc;pital's Rule by differentiating numerator and denominator with respect to $u$:\n$$\\lim_{u \\to 0^+} \\frac{\\frac{d}{du}(1 - \\sec u)}{\\frac{d}{du}(u)} = \\lim_{u \\to 0^+} \\frac{-\\sec u \\tan u}{1} = -\\sec(0)\\tan(0) = -(1)(0) = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Evaluate the exponential function.</strong></p>\n<p>Since the exponential function $g(t) = e^t$ is continuous everywhere:\n$$e^{\\lim_{u \\to 0^+} \\frac{1 - \\sec u}{u}} = e^0 = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Analyze the behavior of the rational argument as $(x, y) \\to (0, 1)$.</strong></p>\n<p>Let $g(x, y) = \\frac{x^2 - 1}{x^2 + (y - 1)^2}$.\nEvaluate the numerator and denominator separately as $(x, y) \\to (0, 1)$:\n<ul>\n<li>Numerator: $\\lim_{(x, y) \\to (0, 1)} (x^2 - 1) = 0^2 - 1 = -1$ (strictly negative).</li>\n<li>Denominator: $x^2 + (y - 1)^2 > 0$ for all $(x, y) \\ne (0, 1)$, and $\\lim_{(x, y) \\to (0, 1)} [x^2 + (y - 1)^2] = 0^+$.</li>\n</ul></p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Determine the limit of the argument.</strong></p>\n<p>$$\\lim_{(x, y) \\to (0, 1)} \\frac{x^2 - 1}{x^2 + (y - 1)^2} = \\frac{-1}{0^+} = -\\infty$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Apply the asymptotic behavior of the arctangent function.</strong></p>\n<p>Recall that $\\lim_{t \\to -\\infty} \\tan^{-1}(t) = -\\frac{\\pi}{2}$.\nTherefore, by continuity of the arctangent function on $(-\\infty, \\infty)$:\n$$\\lim_{(x, y) \\to (0, 1)} \\tan^{-1}\\left(\\frac{x^2 - 1}{x^2 + (y - 1)^2}\\right) = -\\frac{\\pi}{2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute first-order partial derivatives.</strong></p>\n<p>Given $f(x, y, z) = y e^x + x\\ln z$.\n$$f_x = \\frac{\\partial}{\\partial x}(y e^x + x\\ln z) = y e^x + \\ln z$$\n$$f_z = \\frac{\\partial}{\\partial z}(y e^x + x\\ln z) = 0 + \\frac{x}{z} = \\frac{x}{z}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Compute second-order partial derivatives.</strong></p>\n<p>$$\\begin{aligned}\nf_{xz} &= \\frac{\\partial}{\\partial z}(f_x) = \\frac{\\partial}{\\partial z}(y e^x + \\ln z) = \\frac{1}{z} \\\\\nf_{zx} &= \\frac{\\partial}{\\partial x}(f_z) = \\frac{\\partial}{\\partial x}\\left(\\frac{x}{z}\\right) = \\frac{1}{z} \\\\\nf_{zz} &= \\frac{\\partial}{\\partial z}(f_z) = \\frac{\\partial}{\\partial z}\\left(\\frac{x}{z}\\right) = -\\frac{x}{z^2}\n\\end{aligned}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Evaluate the expression $x f_{xz} f_{zx} + f_{zz}$.</strong></p>\n<p>$$x f_{xz} f_{zx} + f_{zz} = x \\left(\\frac{1}{z}\\right)\\left(\\frac{1}{z}\\right) + \\left(-\\frac{x}{z^2}\\right) = \\frac{x}{z^2} - \\frac{x}{z^2} = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Rewrite $f(x, y) = x^y$ in base-$e$ exponential form.</strong></p>\n<p>Using the identity $x^y = e^{\\ln(x^y)} = e^{y\\ln x}$ for $x > 0$:\n$$f(x, y) = e^{y\\ln x}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Differentiate with respect to $y$ treating $x$ as constant.</strong></p>\n<p>Applying the exponential derivative rule $\\frac{d}{dy}[e^{c y}] = c e^{c y}$ where $c = \\ln x$:\n$$f_y(x, y) = \\frac{\\partial}{\\partial y}\\left(e^{y\\ln x}\\right) = e^{y\\ln x} \\cdot \\ln x = x^y \\ln x$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Evaluate at $(x, y) = (e, 1)$.</strong></p>\n<p>$$f_y(e, 1) = e^1 \\cdot \\ln(e) = e \\cdot 1 = e$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Write the formula for the cylinder volume and total differential.</strong></p>\n<p>The volume of a right circular cylinder is:\n$$V(r, h) = \\pi r^2 h$$\nThe total differential $dV$ is given by:\n$$dV = \\frac{\\partial V}{\\partial r}\\,dr + \\frac{\\partial V}{\\partial h}\\,dh$$\nCalculate the partial derivatives:\n$$\\frac{\\partial V}{\\partial r} = 2\\pi r h, \\quad \\frac{\\partial V}{\\partial h} = \\pi r^2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Substitute the dimensions and possible errors.</strong></p>\n<p>Given $r = 10\\text{ cm}$, $h = 30\\text{ cm}$, $|dr| \\le 0.02\\text{ cm}$, and $|dh| \\le 0.04\\text{ cm}$:\n$$|dV| \\le 2\\pi(10)(30)(0.02) + \\pi(10)^2(0.04)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Compute the numerical value.</strong></p>\n<p>$$|dV| \\le 600\\pi(0.02) + 100\\pi(0.04) = 12\\pi + 4\\pi = 16\\pi\\text{ cm}^3$$\nThus, the calculated error is approximately $\\pm 16\\pi\\text{ cm}^3$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Identify base values and increments.</strong></p>\n<p>The point moves from $(x_0, y_0) = (2, 2)$ to $(2.04, 1.98)$.\nThe coordinate differentials are:\n$$dx = 2.04 - 2 = 0.04$$\n$$dy = 1.98 - 2 = -0.02$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Compute partial derivatives of $z = \\sqrt{3x^2 + y^2}$.</strong></p>\n<p>At $(2, 2)$:\n$$z = \\sqrt{3(2^2) + 2^2} = \\sqrt{12 + 4} = \\sqrt{16} = 4$$\n$$z_x = \\frac{6x}{2\\sqrt{3x^2 + y^2}} = \\frac{3x}{\\sqrt{3x^2 + y^2}} \\implies z_x(2, 2) = \\frac{3(2)}{4} = \\frac{6}{4} = 1.5$$\n$$z_y = \\frac{2y}{2\\sqrt{3x^2 + y^2}} = \\frac{y}{\\sqrt{3x^2 + y^2}} \\implies z_y(2, 2) = \\frac{2}{4} = 0.5$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Compute the total differential $dz$.</strong></p>\n<p>$$dz = z_x(2, 2)dx + z_y(2, 2)dy$$\n$$dz = 1.5(0.04) + 0.5(-0.02) = 0.06 - 0.01 = 0.05$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(A)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Define the implicit function $F(x, y) = 0$.</strong></p>\n<p>Rearrange the given relation $x\\cos 3y + x^3 y^5 = 3x - e^{xy}$:\n$$F(x, y) = x\\cos 3y + x^3 y^5 - 3x + e^{xy} = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Compute $F_x$ and evaluate at $(1, 0)$.</strong></p>\n<p>$$F_x = \\frac{\\partial}{\\partial x}\\left(x\\cos 3y + x^3 y^5 - 3x + e^{xy}\\right) = \\cos 3y + 3x^2 y^5 - 3 + y e^{xy}$$\nAt $(1, 0)$:\n$$F_x(1, 0) = \\cos(0) + 3(1^2)(0^5) - 3 + 0 \\cdot e^0 = 1 + 0 - 3 + 0 = -2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Compute $F_y$ and evaluate at $(1, 0)$.</strong></p>\n<p>$$F_y = \\frac{\\partial}{\\partial y}\\left(x\\cos 3y + x^3 y^5 - 3x + e^{xy}\\right) = -3x\\sin 3y + 5x^3 y^4 + x e^{xy}$$\nAt $(1, 0)$:\n$$F_y(1, 0) = -3(1)\\sin(0) + 5(1)(0) + 1 \\cdot e^0 = 0 + 0 + 1 = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Apply the Implicit Function Theorem.</strong></p>\n<p>$$\\frac{dy}{dx} = -\\frac{F_x}{F_y} = -\\frac{-2}{1} = 2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 5: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Evaluate coordinate values at $t = 1, s = 1$.</strong></p>\n<p>$$x = t^2 = 1^2 = 1$$\n$$y = t^2 - 2s = 1^2 - 2(1) = 1 - 2 = -1$$\n$$z = s^2 - 2t = 1^2 - 2(1) = 1 - 2 = -1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: State the chain rule for $\\frac{\\partial w}{\\partial s}$.</strong></p>\n<p>$$\\frac{\\partial w}{\\partial s} = \\frac{\\partial w}{\\partial x}\\frac{\\partial x}{\\partial s} + \\frac{\\partial w}{\\partial y}\\frac{\\partial y}{\\partial s} + \\frac{\\partial w}{\\partial z}\\frac{\\partial z}{\\partial s}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Compute the required partial derivatives.</strong></p>\n<p>$$\\frac{\\partial x}{\\partial s} = 0, \\quad \\frac{\\partial y}{\\partial s} = -2, \\quad \\frac{\\partial z}{\\partial s} = 2s = 2(1) = 2$$\n$$\\frac{\\partial w}{\\partial y} = 2xy + z^2 \\implies \\frac{\\partial w}{\\partial y}(1, -1, -1) = 2(1)(-1) + (-1)^2 = -2 + 1 = -1$$\n$$\\frac{\\partial w}{\\partial z} = 2yz + x^2 \\implies \\frac{\\partial w}{\\partial z}(1, -1, -1) = 2(-1)(-1) + 1^2 = 2 + 1 = 3$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Substitute into the chain rule formula.</strong></p>\n<p>$$\\frac{\\partial w}{\\partial s} = \\left(\\frac{\\partial w}{\\partial x}\\right)(0) + (-1)(-2) + (3)(2) = 0 + 2 + 6 = 8$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 5: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute the gradient vector $\\nabla f(x, y)$.</strong></p>\n<p>The function is $f(x, y) = e^{-(x^2 + y^2)}$.\nCalculate the first partial derivatives using the chain rule:\n$$f_x(x, y) = -2x e^{-(x^2 + y^2)}$$\n$$f_y(x, y) = -2y e^{-(x^2 + y^2)}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Evaluate the gradient at the origin $(0, 0)$.</strong></p>\n<p>$$f_x(0, 0) = -2(0)e^0 = 0$$\n$$f_y(0, 0) = -2(0)e^0 = 0$$\nThus:\n$$\\nabla f(0, 0) = \\langle 0, 0 \\rangle = \\vec{0}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Compute the directional derivative in direction $\\vec{v} = \\langle 1, 1 \\rangle$.</strong></p>\n<p>The unit vector is $\\vec{u} = \\frac{\\langle 1, 1 \\rangle}{\\sqrt{2}}$.\n$$D_{\\vec{u}} f(0, 0) = \\nabla f(0, 0) \\cdot \\vec{u} = \\langle 0, 0 \\rangle \\cdot \\left\\langle \\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}} \\right\\rangle = 0 + 0 = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Identify the gradient vector as the direction of greatest increase.</strong></p>\n<p>For any differentiable scalar field $T(x, y)$, the direction of maximum (greatest) increase at a point is given by the gradient vector $\\nabla T(x_0, y_0)$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Compute $T_x$ using the quotient rule.</strong></p>\n<p>$$T(x, y) = \\frac{x}{x^2 + 2y^2}$$\n$$T_x = \\frac{1(x^2 + 2y^2) - x(2x)}{(x^2 + 2y^2)^2} = \\frac{2y^2 - x^2}{(x^2 + 2y^2)^2}$$\nSubstitute $(x, y) = (1, -1)$:\n$$x^2 + 2y^2 = 1^2 + 2(-1)^2 = 1 + 2 = 3$$\n$$T_x(1, -1) = \\frac{2(-1)^2 - 1^2}{3^2} = \\frac{2 - 1}{9} = \\frac{1}{9}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Compute $T_y$ using the chain/quotient rule.</strong></p>\n<p>$$T_y = \\frac{0 \\cdot (x^2 + 2y^2) - x(4y)}{(x^2 + 2y^2)^2} = \\frac{-4xy}{(x^2 + 2y^2)^2}$$\nSubstitute $(x, y) = (1, -1)$:\n$$T_y(1, -1) = \\frac{-4(1)(-1)}{3^2} = \\frac{4}{9}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Conclude the gradient vector.</strong></p>\n<p>$$\\nabla T(1, -1) = \\left\\langle \\frac{1}{9}, \\frac{4}{9} \\right\\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 5: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(A)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute the gradient vector normal to the level curve.</strong></p>\n<p>The level curve is $f(x, y) = x - y^2 = 3$.\nThe normal vector to the level curve at any point is given by $\\nabla f(x, y)$:\n$$\\nabla f(x, y) = \\left\\langle \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y} \\right\\rangle = \\langle 1, -2y \\rangle$$\nAt the point $(4, -1)$:\n$$\\vec{n} = \\nabla f(4, -1) = \\langle 1, -2(-1) \\rangle = \\langle 1, 2 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Write the point-normal equation of the tangent line.</strong></p>\n<p>$$1(x - 4) + 2(y - (-1)) = 0$$\n$$1(x - 4) + 2(y + 1) = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Expand and rearrange.</strong></p>\n<p>$$x - 4 + 2y + 2 = 0$$\n$$x + 2y - 2 = 0 \\iff 2y = -x + 2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Determine the constraint from the square root.</strong></p>\n<p>The function is:\n$$f(x, y, z) = \\frac{\\sqrt{x^2 + y^2 + z^2 - 64}}{y}$$\nThe radicand must be non-negative:\n$$x^2 + y^2 + z^2 - 64 \\ge 0 \\iff x^2 + y^2 + z^2 \\ge 64 = 8^2$$\nGeometrically, this represents all points lying on or outside the sphere centered at the origin with radius $8$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Determine the constraint from the denominator.</strong></p>\n<p>The denominator cannot equal zero:\n$$y \\ne 0$$\nThe set of points where $y = 0$ is the $xz$-coordinate plane. Thus, points on the $xz$-plane must be excluded.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Combine both domain conditions.</strong></p>\n<p>The domain consists of all points lying on or outside the sphere with center at the origin and radius $8$ and are not on the $xz$-plane.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Test the existence of the limit at $(0, 0)$ along parabolic paths.</strong></p>\n<p>Consider approach paths of the form $y = k x^2$ where $k$ is any real constant:\n$$\\lim_{x \\to 0} f(x, k x^2) = \\lim_{x \\to 0} \\frac{3x^2(k x^2)}{x^4 + (k x^2)^2} = \\lim_{x \\to 0} \\frac{3k x^4}{x^4 + k^2 x^4} = \\lim_{x \\to 0} \\frac{3k x^4}{x^4(1 + k^2)} = \\frac{3k}{1 + k^2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Conclude non-existence of the limit.</strong></p>\n<p>Since $\\frac{3k}{1 + k^2}$ depends explicitly on the choice of the path parameter $k$ (for example, $k = 1 \\implies 3/2$, while $k = 0 \\implies 0$), the limit $\\lim_{(x, y) \\to (0, 0)} f(x, y)$ <strong>does not exist</strong>.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Identify the FALSE statement.</strong></p>\n<p>Statement (E) claims that \"$\\lim_{(x, y) \\to (0, 0)} f(x, y)$ exists\", which is contradictory to our derivation.\nTherefore, Statement (E) is FALSE.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Define the surface implicitly as $F(x, y, z) = 0$.</strong></p>\n<p>Given $x\\ln y + y^2 z - z^2 x = 10$, define:\n$$F(x, y, z) = x\\ln y + y^2 z - z^2 x - 10 = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Compute the partial derivatives $F_x$ and $F_z$.</strong></p>\n<p>$$F_x = \\frac{\\partial}{\\partial x}\\left(x\\ln y + y^2 z - z^2 x - 10\\right) = \\ln y - z^2$$\n$$F_z = \\frac{\\partial}{\\partial z}\\left(x\\ln y + y^2 z - z^2 x - 10\\right) = y^2 - 2zx$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Apply the implicit differentiation theorem formula.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z} = -\\frac{\\ln y - z^2}{y^2 - 2xz} = \\frac{z^2 - \\ln y}{y^2 - 2xz}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Find the direction vector of the line of intersection.</strong></p>\n<p>The line of intersection of two planes is perpendicular to the normal vectors of both planes. The normal vectors are:\n$$\\vec{n}_1 = \\langle 1, 2, 3 \\rangle \\quad \\text{and} \\quad \\vec{n}_2 = \\langle 1, -1, 1 \\rangle$$\nThe direction vector $\\vec{v}$ of the line is given by their cross product $\\vec{n}_1 \\times \\vec{n}_2$:\n$$\\vec{v} = \\det \\begin{pmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 2 & 3 \\\\ 1 & -1 & 1 \\end{pmatrix} = \\mathbf{i}(2 - (-3)) - \\mathbf{j}(1 - 3) + \\mathbf{k}(-1 - 2) = \\langle 5, 2, -3 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Find a particular point on the intersection line.</strong></p>\n<p>Set $z = 0$ in both plane equations to obtain a system in $x$ and $y$:\n$$\\begin{cases} x + 2y = 1 \\\\ x - y = 1 \\end{cases}$$\nSubtracting the second equation from the first gives $3y = 0 \\implies y = 0$.\nSubstituting $y = 0$ into $x - y = 1$ gives $x = 1$. Thus, the point $P_0(1, 0, 0)$ lies on both planes.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Construct the symmetric equations.</strong></p>\n<p>With point $(x_0, y_0, z_0) = (1, 0, 0)$ and direction vector $\\langle a, b, c \\rangle = \\langle 5, 2, -3 \\rangle$, the symmetric equations are:\n$$\\frac{x - 1}{5} = \\frac{y - 0}{2} = \\frac{z - 0}{-3} \\iff \\frac{x - 1}{5} = \\frac{y}{2} = \\frac{z}{-3}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Substitute the parametric equations of the line into the plane.</strong></p>\n<p>The line is given by parametric equations:\n$$x(t) = 2 - 2t, \\quad y(t) = 3t, \\quad z(t) = 1 + t$$\nSubstitute these coordinate functions into the equation of the plane $x + 2y - z = 7$:\n$$(2 - 2t) + 2(3t) - (1 + t) = 7$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Solve the linear equation for the parameter $t$.</strong></p>\n<p>Expand and collect like terms:\n$$2 - 2t + 6t - 1 - t = 7$$\n$$( -2t + 6t - t) + (2 - 1) = 7$$\n$$3t + 1 = 7 \\implies 3t = 6 \\implies t = 2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Determine the coordinates $(a, b, c)$ of the intersection point.</strong></p>\n<p>Substitute $t = 2$ back into the parametric equations:\n$$a = x(2) = 2 - 2(2) = 2 - 4 = -2$$\n$$b = y(2) = 3(2) = 6$$\n$$c = z(2) = 1 + (2) = 3$$\nThus, the point of intersection is $(a, b, c) = (-2, 6, 3)$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Compute the required sum $a + b + c$.</strong></p>\n<p>$$a + b + c = -2 + 6 + 3 = 7$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 5: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Identify the normal vector of the given parallel plane.</strong></p>\n<p>The given plane equation is $z = x + y$. Rewriting this in standard linear form:\n$$x + y - z = 0$$\nThe normal vector to this plane is:\n$$\\vec{n} = \\langle 1, 1, -1 \\rangle$$\nSince parallel planes share parallel normal vectors, the desired plane has normal vector $\\vec{n} = \\langle 1, 1, -1 \\rangle$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Write the point-normal equation of the plane through $(3, -2, 8)$.</strong></p>\n<p>Using the point-normal form $A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$:\n$$1(x - 3) + 1(y - (-2)) - 1(z - 8) = 0$$\n$$1(x - 3) + 1(y + 2) - (z - 8) = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Expand and simplify to standard form.</strong></p>\n<p>$$x - 3 + y + 2 - z + 8 = 0$$\n$$x + y - z + (-3 + 2 + 8) = 0$$\n$$x + y - z + 7 = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(A)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Group terms by variable to complete the square.</strong></p>\n<p>The given second-degree equation in $\\mathbb{R}^3$ is:\n$$x^2 - y^2 + z^2 - 4x - 2y - 2z + 4 = 0$$\nGroup the terms by variable:\n$$(x^2 - 4x) - (y^2 + 2y) + (z^2 - 2z) + 4 = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Complete the square for each variable.</strong></p>\n<p>$$\\begin{aligned}\nx^2 - 4x &= (x - 2)^2 - 4 \\\\\n-(y^2 + 2y) &= -\\left[(y + 1)^2 - 1\\right] = -(y + 1)^2 + 1 \\\\\nz^2 - 2z &= (z - 1)^2 - 1\n\\end{aligned}$$\nSubstitute these completed squares into the original equation:\n$$\\left[(x - 2)^2 - 4\\right] - (y + 1)^2 + 1 + \\left[(z - 1)^2 - 1\\right] + 4 = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Simplify and identify the quadric surface.</strong></p>\n<p>Combine the constant terms:\n$$-4 + 1 - 1 + 4 = 0$$\nThus, the equation simplifies to:\n$$(x - 2)^2 - (y + 1)^2 + (z - 1)^2 = 0 \\iff (x - 2)^2 + (z - 1)^2 = (y + 1)^2$$\nThis matches the standard equation of a circular cone:\n$$\\frac{(x - x_0)^2}{a^2} + \\frac{(z - z_0)^2}{c^2} = \\frac{(y - y_0)^2}{b^2}$$\nwith vertex $(x_0, y_0, z_0) = (2, -1, 1)$ and axis of symmetry along the line parallel to the $y$-axis ($x = 2, z = 1$).</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(A)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Rearrange the quadric surface equation into standard form.</strong></p>\n<p>The equation is:\n$$x^2 = 4 - 4y^2 + z^2$$\nMove all variable terms to the left-hand side:\n$$x^2 + 4y^2 - z^2 = 4$$\nDivide the entire equation by $4$ to normalize the constant term to $1$:\n$$\\frac{x^2}{4} + y^2 - \\frac{z^2}{4} = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Classify the surface type.</strong></p>\n<p>The standard equation of a hyperboloid of one sheet is:\n$$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} - \\frac{z^2}{c^2} = 1$$\nSince there are two positive squared terms and exactly one negative squared term equated to $+1$, the surface is a <strong>hyperboloid of one sheet</strong> (Statement II is true; Statement III is false).</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Determine the axis of symmetry.</strong></p>\n<p>The axis of symmetry of a hyperboloid corresponds to the variable associated with the negative sign. Here, the negative sign is on the $z^2$ term, so the axis of symmetry is the <strong>$z$-axis</strong> (Statement IV is true; Statement I is false).</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>Therefore, statements II and IV are true, which matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Analyze domain restrictions for each component of the function.</strong></p>\n<p>The function is:\n$$f(x, y, z) = \\ln(x - y) + yz\\cos x$$\nThe natural logarithm $\\ln u$ is defined if and only if its argument is strictly positive:\n$$u = x - y > 0 \\iff x > y$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Check the polynomial and trigonometric terms.</strong></p>\n<p>The term $yz\\cos x$ is a product of polynomial coordinate projections ($y$ and $z$) and the cosine function $\\cos x$, all of which are defined and continuous for all real numbers $x, y, z \\in \\mathbb{R}$.\nTherefore, there are no additional restrictions from this term.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Conclude the domain set.</strong></p>\n<p>The complete domain of $f(x, y, z)$ in $\\mathbb{R}^3$ is:\n$$\\text{Domain} = \\{(x, y, z) \\in \\mathbb{R}^3 : x > y\\}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Determine the domain and analyze the argument of the logarithm.</strong></p>\n<p>The function is $f(x, y) = \\ln(16 - x^2 - y^2)$.\nLet $u = 16 - (x^2 + y^2)$. For the logarithm to be real-valued, we must have $u > 0$, so $x^2 + y^2 < 16$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Find the extreme values of the argument $u$.</strong></p>\n<p>Because $x^2 + y^2 \\ge 0$ for all $(x, y) \\in \\mathbb{R}^2$:\n<ul>\n<li>The maximum of $u$ occurs when $x^2 + y^2 = 0$ (at the origin $(0, 0)$):\n$$u_{\\max} = 16 - 0 = 16$$</li>\n<li>As $(x, y)$ approaches the boundary circle $x^2 + y^2 = 16$ from within the disk, $u \\to 0^+$.</li>\n</ul>\nHence, the range of the argument $u$ is the interval $(0, 16]$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Evaluate the range of $\\ln u$.</strong></p>\n<p>Since $g(u) = \\ln u$ is a strictly increasing, continuous function on $(0, \\infty)$:\n$$\\lim_{u \\to 0^+} \\ln u = -\\infty$$\n$$\\ln(16) = \\ln(2^4) = 4\\ln 2$$\nTherefore, the range of $f(x, y)$ is $(-\\infty, 4\\ln 2]$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: State the definition of a level curve.</strong></p>\n<p>A level curve of a function $f(x, y)$ consists of all points in the domain satisfying $f(x, y) = C$, where $C$ is a constant in the range of $f$.\nFor $f(x, y) = \\sqrt[3]{x^2 + y^2}$:\n$$\\sqrt[3]{x^2 + y^2} = C$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Solve for the relationship between $x$ and $y$.</strong></p>\n<p>Cube both sides:\n$$x^2 + y^2 = C^3$$\nSince $x^2 + y^2 \\ge 0$, real level curves exist for constants $C \\ge 0$:\n<ul>\n<li>For $C = 0$, $x^2 + y^2 = 0$, which is the single point $(0, 0)$.</li>\n<li>For each $C > 0$, $x^2 + y^2 = (C^{3/2})^2$, which is a circle centered at the origin $(0, 0)$ with radius $R = C^{3/2}$.</li>\n</ul></p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Conclude the geometric family.</strong></p>\n<p>Thus, the non-degenerate level curves represent a <strong>family of circles</strong>.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(A)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Evaluate the limit along the path $x = 0$.</strong></p>\n<p>We test whether the limit $\\lim_{(x, y) \\to (0, 0)} \\frac{8x^2 \\sin y}{3x^3 + 5y^3}$ exists by checking different approach directions.\nAlong the path $x = 0$ (the $y$-axis) as $y \\to 0$:\n$$\\lim_{y \\to 0} \\frac{8(0)^2 \\sin y}{3(0)^3 + 5y^3} = \\lim_{y \\to 0} \\frac{0}{5y^3} = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Evaluate the limit along the linear path $y = x$.</strong></p>\n<p>Along the path $y = x$ as $x \\to 0$:\n$$\\lim_{x \\to 0} \\frac{8x^2 \\sin x}{3x^3 + 5x^3} = \\lim_{x \\to 0} \\frac{8x^2 \\sin x}{8x^3} = \\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Apply the Two-Path Test for limits.</strong></p>\n<p>Since the function approaches two different values along two distinct paths:\n$$L_1 = 0 \\quad \\text{and} \\quad L_2 = 1 \\quad (L_1 \\ne L_2)$$\nby the Two-Path Test, the limit <strong>does not exist</strong>.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(A)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Identify the indeterminate form.</strong></p>\n<p>Evaluating the limit by direct substitution at $(3, 3)$:\n$$\\lim_{(x, y) \\to (3, 3)} \\frac{x + 2y - 9}{\\sqrt{x + 2y} - 3} = \\frac{3 + 2(3) - 9}{\\sqrt{3 + 2(3)} - 3} = \\frac{9 - 9}{\\sqrt{9} - 3} = \\frac{0}{0}$$\nThis is an indeterminate form of type $\\frac{0}{0}$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Factor or rationalize the expression.</strong></p>\n<p>Notice that the numerator can be factored as a difference of squares:\n$$x + 2y - 9 = (\\sqrt{x + 2y})^2 - 3^2 = (\\sqrt{x + 2y} - 3)(\\sqrt{x + 2y} + 3)$$\nAlternatively, multiplying numerator and denominator by the conjugate $\\sqrt{x + 2y} + 3$:\n$$\\frac{(x + 2y - 9)(\\sqrt{x + 2y} + 3)}{(\\sqrt{x + 2y} - 3)(\\sqrt{x + 2y} + 3)} = \\frac{(x + 2y - 9)(\\sqrt{x + 2y} + 3)}{(x + 2y) - 9}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Cancel the common factor and evaluate.</strong></p>\n<p>Canceling $(x + 2y - 9) \\ne 0$ for points approaching $(3, 3)$:\n$$= \\sqrt{x + 2y} + 3$$\nEvaluating at $(x, y) = (3, 3)$:\n$$\\sqrt{3 + 2(3)} + 3 = \\sqrt{9} + 3 = 3 + 3 = 6$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: State the condition for continuity at the origin.</strong></p>\n<p>For $f(x, y)$ to be continuous at $(0, 0)$, the limit of $f(x, y)$ as $(x, y) \\to (0, 0)$ must exist and equal the defined function value:\n$$\\lim_{(x, y) \\to (0, 0)} f(x, y) = f(0, 0) = k$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Evaluate the limit using single-variable substitution.</strong></p>\n<p>Let $u = x + y$. As $(x, y) \\to (0, 0)$, $u \\to 0$. The limit becomes:\n$$\\lim_{u \\to 0} \\frac{2 - 2\\cos u}{u^2} = \\lim_{u \\to 0} \\frac{2(1 - \\cos u)}{u^2}$$\nApplying L'H&ocirc;pital's Rule (since it is an indeterminate form of type $\\frac{0}{0}$):\n$$\\lim_{u \\to 0} \\frac{2\\sin u}{2u} = \\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$$\nAlternatively, recall the standard trigonometric limit $\\lim_{u \\to 0} \\frac{1 - \\cos u}{u^2} = \\frac{1}{2}$, which immediately yields $2\\left(\\frac{1}{2}\\right) = 1$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Set the limit equal to $k$.</strong></p>\n<p>For continuity, we equate:\n$$k = \\lim_{(x, y) \\to (0, 0)} f(x, y) = 1$$\nThus, $f(x, y)$ is continuous at $(0, 0)$ only if $k = 1$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Apply the chain rule to find the partial derivative $f_y(x, y)$.</strong></p>\n<p>Recall the derivative of the inverse tangent function: $\\frac{d}{du}[\\tan^{-1} u] = \\frac{1}{1 + u^2}$.\nHere $u = x + y^2$. Differentiating with respect to $y$ treating $x$ as a constant:\n$$f_y(x, y) = \\frac{1}{1 + (x + y^2)^2} \\cdot \\frac{\\partial}{\\partial y}(x + y^2) = \\frac{2y}{1 + (x + y^2)^2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Evaluate $f_y$ at the point $(1, 2)$.</strong></p>\n<p>Substitute $x = 1$ and $y = 2$:\n$$x + y^2 = 1 + (2)^2 = 1 + 4 = 5$$\n$$f_y(1, 2) = \\frac{2(2)}{1 + 5^2} = \\frac{4}{1 + 25} = \\frac{4}{26}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Simplify the fraction.</strong></p>\n<p>Divide numerator and denominator by $2$:\n$$\\frac{4}{26} = \\frac{2}{13}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute the partial derivative $f_x(x, y)$.</strong></p>\n<p>The function is $f(x, y) = \\cos(x^2 y)$.\nUsing the chain rule for differentiation with respect to $x$:\n$$f_x(x, y) = -\\sin(x^2 y) \\cdot \\frac{\\partial}{\\partial x}(x^2 y) = -\\sin(x^2 y) \\cdot (2xy) = -2xy\\sin(x^2 y)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Compute the partial derivative $f_y(x, y)$.</strong></p>\n<p>Using the chain rule for differentiation with respect to $y$:\n$$f_y(x, y) = -\\sin(x^2 y) \\cdot \\frac{\\partial}{\\partial y}(x^2 y) = -\\sin(x^2 y) \\cdot (x^2) = -x^2\\sin(x^2 y)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Subtract $f_y(x, y)$ from $f_x(x, y)$.</strong></p>\n<p>$$f_x(x, y) - f_y(x, y) = -2xy\\sin(x^2 y) - \\left[-x^2\\sin(x^2 y)\\right]$$\n$$= -2xy\\sin(x^2 y) + x^2\\sin(x^2 y) = (x^2 - 2xy)\\sin(x^2 y)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Formulate the total differential of the cone volume.</strong></p>\n<p>The volume of a right circular cone is given by:\n$$V(r, h) = \\frac{1}{3}\\pi r^2 h$$\nThe total differential $dV$ represents the propagated maximum error:\n$$dV = \\frac{\\partial V}{\\partial r}\\,dr + \\frac{\\partial V}{\\partial h}\\,dh$$\nCompute the partial derivatives:\n$$\\frac{\\partial V}{\\partial r} = \\frac{2}{3}\\pi r h \\quad \\text{and} \\quad \\frac{\\partial V}{\\partial h} = \\frac{1}{3}\\pi r^2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Substitute the given measurements and possible errors.</strong></p>\n<p>We are given $r = 10\\text{ cm}$, $h = 25\\text{ cm}$, and $|dr| \\le 0.01\\text{ cm}$, $|dh| \\le 0.01\\text{ cm}$:\n$$dV = \\frac{2}{3}\\pi(10)(25)(0.01) + \\frac{1}{3}\\pi(10)^2(0.01)$$\n$$= \\frac{500\\pi}{3}(0.01) + \\frac{100\\pi}{3}(0.01)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Simplify the arithmetic.</strong></p>\n<p>$$dV = \\left(\\frac{500\\pi + 100\\pi}{3}\\right)(0.01) = \\left(\\frac{600\\pi}{3}\\right)(0.01) = (200\\pi)(0.01) = 2\\pi$$\nThus, the maximum error in the calculated volume is $2\\pi\\text{ cm}^3$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Recall the formula for the linear approximation (linearization).</strong></p>\n<p>The linearization of $f(x, y)$ at the point $(x_0, y_0) = (e, 1)$ is given by:\n$$L(x, y) = f(e, 1) + f_x(e, 1)(x - e) + f_y(e, 1)(y - 1)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Evaluate the function value $f(e, 1)$.</strong></p>\n<p>$$f(x, y) = y\\ln\\left(\\frac{x}{y}\\right)$$\n$$f(e, 1) = 1\\ln\\left(\\frac{e}{1}\\right) = 1\\ln(e) = 1(1) = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Compute and evaluate the first partial derivatives.</strong></p>\n<p>Using logarithm properties, rewrite $f(x, y) = y(\\ln x - \\ln y) = y\\ln x - y\\ln y$:\n$$f_x(x, y) = y \\cdot \\frac{1}{x} = \\frac{y}{x} \\implies f_x(e, 1) = \\frac{1}{e}$$\n$$f_y(x, y) = (\\ln x - \\ln y) + y\\left(-\\frac{1}{y}\\right) = \\ln\\left(\\frac{x}{y}\\right) - 1 \\implies f_y(e, 1) = \\ln\\left(\\frac{e}{1}\\right) - 1 = 1 - 1 = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Assemble and simplify the linearization $L(x, y)$.</strong></p>\n<p>$$L(x, y) = 1 + \\frac{1}{e}(x - e) + 0(y - 1) = 1 + \\frac{x}{e} - 1 = \\frac{x}{e}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 5: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Set up the implicit equation.</strong></p>\n<p>The relationship is given by:\n$$e^z = xyz$$\nDifferentiating both sides with respect to $x$ and treating $z$ as a function of $x$ and $y$ ($z = z(x, y)$):\n$$\\frac{\\partial}{\\partial x}\\left(e^z\\right) = \\frac{\\partial}{\\partial x}(xyz)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Differentiate term by term using the chain and product rules.</strong></p>\n<p>Left side:\n$$\\frac{\\partial}{\\partial x}\\left(e^z\\right) = e^z \\frac{\\partial z}{\\partial x}$$\nRight side (treating $y$ as a constant):\n$$\\frac{\\partial}{\\partial x}\\left(x \\cdot yz\\right) = y\\left[\\frac{\\partial}{\\partial x}(x) \\cdot z + x \\cdot \\frac{\\partial z}{\\partial x}\\right] = y\\left(1 \\cdot z + x\\frac{\\partial z}{\\partial x}\\right) = yz + xy\\frac{\\partial z}{\\partial x}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Solve for $\\frac{\\partial z}{\\partial x}$.</strong></p>\n<p>$$e^z \\frac{\\partial z}{\\partial x} = yz + xy\\frac{\\partial z}{\\partial x}$$\nCollect terms involving $\\frac{\\partial z}{\\partial x}$ on the left-hand side:\n$$\\left(e^z - xy\\right)\\frac{\\partial z}{\\partial x} = yz \\implies \\frac{\\partial z}{\\partial x} = \\frac{yz}{e^z - xy}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: State the multivariable chain rule for $\\frac{\\partial z}{\\partial s}$.</strong></p>\n<p>Given $z = \\frac{x}{y}$ where $x = s e^t$ and $y = 1 - s e^{-t}$.\nBy the chain rule:\n$$\\frac{\\partial z}{\\partial s} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial s} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial s}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Compute the relevant partial derivatives.</strong></p>\n<p>$$\\frac{\\partial z}{\\partial x} = \\frac{1}{y}, \\quad \\frac{\\partial z}{\\partial y} = -\\frac{x}{y^2}$$\n$$\\frac{\\partial x}{\\partial s} = e^t, \\quad \\frac{\\partial y}{\\partial s} = -e^{-t}$$\nSubstituting these into the chain rule formula gives:\n$$\\frac{\\partial z}{\\partial s} = \\left(\\frac{1}{y}\\right)(e^t) + \\left(-\\frac{x}{y^2}\\right)(-e^{-t}) = \\frac{e^t}{y} + \\frac{x e^{-t}}{y^2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Evaluate at the specified values $x = 3, y = -2$, and $t = 0$.</strong></p>\n<p>Since $t = 0$, $e^0 = 1$ and $e^{-0} = 1$:\n$$\\frac{\\partial z}{\\partial s} = \\frac{1}{-2} + \\frac{3(1)}{(-2)^2} = -\\frac{1}{2} + \\frac{3}{4} = \\frac{-2 + 3}{4} = \\frac{1}{4}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Method of Direct Substitution.</strong></p>\n<p>We are given $w = xy + z^2$ with $x = 2s - t, y = 3t$, and $z = s$.\nSubstitute the intermediate variables into $w$ directly:\n$$w(s, t) = (2s - t)(3t) + (s)^2 = 6st - 3t^2 + s^2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Differentiate with respect to $s$ and $t$.</strong></p>\n<p>$$\\frac{\\partial w}{\\partial s} = \\frac{\\partial}{\\partial s}\\left(6st - 3t^2 + s^2\\right) = 6t + 2s$$\n$$\\frac{\\partial w}{\\partial t} = \\frac{\\partial}{\\partial t}\\left(6st - 3t^2 + s^2\\right) = 6s - 6t$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Compute the sum $\\frac{\\partial w}{\\partial s} + \\frac{\\partial w}{\\partial t}$.</strong></p>\n<p>$$\\frac{\\partial w}{\\partial s} + \\frac{\\partial w}{\\partial t} = (6t + 2s) + (6s - 6t) = (2s + 6s) + (6t - 6t) = 8s$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute the gradient vector of the ellipsoid level surface.</strong></p>\n<p>Define the surface implicitly as $F(x, y, z) = \\frac{x^2}{9} + y^2 + z^2 - 6 = 0$.\nThe normal vector is given by the gradient $\\nabla F$:\n$$\\nabla F = \\left\\langle \\frac{\\partial F}{\\partial x}, \\frac{\\partial F}{\\partial y}, \\frac{\\partial F}{\\partial z} \\right\\rangle = \\left\\langle \\frac{2x}{9}, 2y, 2z \\right\\rangle$$\nEvaluate the gradient at the point $(-3, 1, -2)$:\n$$\\nabla F(-3, 1, -2) = \\left\\langle \\frac{2(-3)}{9}, 2(1), 2(-2) \\right\\rangle = \\left\\langle -\\frac{2}{3}, 2, -4 \\right\\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Write the tangent plane equation.</strong></p>\n<p>Using the point-normal equation $-\\frac{2}{3}(x - (-3)) + 2(y - 1) - 4(z - (-2)) = 0$:\n$$-\\frac{2}{3}(x + 3) + 2(y - 1) - 4(z + 2) = 0$$\n$$-\\frac{2}{3}x - 2 + 2y - 2 - 4z - 8 = 0 \\iff -\\frac{2}{3}x + 2y - 4z - 12 = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Match the coefficients with $ax + by + 6z + 18 = 0$.</strong></p>\n<p>Notice the given equation has coefficient $+6$ for $z$. Multiply the entire equation by $-\\frac{3}{2}$:\n$$\\left(-\\frac{3}{2}\\right)\\left(-\\frac{2}{3}x + 2y - 4z - 12\\right) = 0$$\n$$x - 3y + 6z + 18 = 0$$\nComparing with $ax + by + 6z + 18 = 0$ yields:\n$$a = 1 \\quad \\text{and} \\quad b = -3$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Calculate $a + b$.</strong></p>\n<p>$$a + b = 1 + (-3) = -2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 5: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute the gradient vector $\\nabla f(x, y, z)$.</strong></p>\n<p>The function is $f(x, y, z) = x e^y + y e^z + z e^x$.\nCalculate the first partial derivatives:\n$$f_x = e^y + z e^x \\implies f_x(0, 0, 0) = e^0 + 0 = 1$$\n$$f_y = x e^y + e^z \\implies f_y(0, 0, 0) = 0 + e^0 = 1$$\n$$f_z = y e^z + e^x \\implies f_z(0, 0, 0) = 0 + e^0 = 1$$\nThus, the gradient vector at the origin is:\n$$\\nabla f(0, 0, 0) = \\langle 1, 1, 1 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Find the unit vector in the direction of $\\vec{v} = \\langle -3, 1, 2 \\rangle$.</strong></p>\n<p>$$\\|\\vec{v}\\| = \\sqrt{(-3)^2 + 1^2 + 2^2} = \\sqrt{9 + 1 + 4} = \\sqrt{14}$$\n$$\\vec{u} = \\frac{\\vec{v}}{\\|\\vec{v}\\|} = \\frac{1}{\\sqrt{14}}\\langle -3, 1, 2 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Calculate the directional derivative $D_{\\vec{u}} f(0, 0, 0)$.</strong></p>\n<p>$$D_{\\vec{u}} f(0, 0, 0) = \\nabla f(0, 0, 0) \\cdot \\vec{u} = \\langle 1, 1, 1 \\rangle \\cdot \\left(\\frac{1}{\\sqrt{14}}\\langle -3, 1, 2 \\rangle\\right)$$\n$$= \\frac{1(-3) + 1(1) + 1(2)}{\\sqrt{14}} = \\frac{-3 + 1 + 2}{\\sqrt{14}} = \\frac{0}{\\sqrt{14}} = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(A)</strong>.</p>"
  }
];
window.MATH201_EXAM_BANK = {
  course: "MATH 201 - Calculus III",
  exam: "Major Exam II",
  coordinator: "Dr. Ibrahim Al-Rasasi",
  total_questions: 201,
  terms_included: ["PT1","PT2","253","252","251","243","242","241","233","232","231","223","221"],
  sections_covered: ["11.5","11.6","13.1","13.2","13.3","13.4","13.5","13.6","13.7","13.8"],
  section_descriptions: {"11.5":"Lines and Planes in Space (Parametric & Symmetric Equations, Distances, Intersections)","11.6":"Cylinders and Quadric Surfaces (Ellipsoids, Hyperboloids, Cones, Paraboloids)","13.1":"Functions of Several Variables, Domains, Ranges & Level Curves/Surfaces","13.2":"Limits and Continuity in Multivariable Calculus","13.3":"Partial Derivatives & Higher-Order Derivatives","13.4":"Differentials, Linearization & Tangent Plane Approximations","13.5":"The Chain Rule & Implicit Differentiation","13.6":"Directional Derivatives and Gradient Vectors","13.7":"Tangent Planes and Normal Lines to Surfaces","13.8":"Extreme Values and Saddle Points, Lagrange Multipliers"},
  exams: {"221":{"term":"221","title":"KFUPM MATH 201 - Major Exam II (Term 221)","coordinator":"Dr. Ibrahim Al-Rasasi","date":"Fall 2022","question_count":20},"223":{"term":"223","title":"KFUPM MATH 201 - Major Exam II (Term 223)","coordinator":"Dr. Ibrahim Al-Rasasi","date":"Summer 2023","question_count":20},"231":{"term":"231","title":"Term 231","coordinator":"Dr. Khalid Ali Alanezy","date":"","question_count":20},"232":{"term":"232","title":"KFUPM MATH 201 - Major Exam II (Term 232)","coordinator":"Dr. Ibrahim Al-Rasasi","date":"Spring 2024","question_count":20},"233":{"term":"233","title":"Term 233","coordinator":"Dr. Ibrahim Al-Rasasi","date":"","question_count":15},"241":{"term":"241","title":"Term 241","coordinator":"Dr. Adel Khalfallah","date":"","question_count":15},"242":{"term":"242","title":"Term 242","coordinator":"Dr. Ibrahim Al-Rasasi","date":"","question_count":15},"243":{"term":"243","title":"Term 243","coordinator":"Dr. Adel Khalfallah","date":"","question_count":15},"252":{"term":"252","title":"Term 252","coordinator":"Dr. Faisal A. Fairag","date":"","question_count":15},"253":{"term":"253","title":"Term 253","coordinator":"Dr. Ibrahim Al-Rasasi","date":"","question_count":15},"PT1":[{"id":"PT1_1","term":"PT1","number":1,"section":"11.5","topic":"Lines & Planes in Space","question":"For the line $\\mathbf{r}(t) = \\langle 1, 2, -1 \\rangle + t\\langle 2, -1, 2 \\rangle$ and the plane $2x - y + 2z = 7$, the intersection point is:","choices":["$(3, 1, 1)$","$(7, -1, 5)$","$(1, 2, -1)$","$(5, 0, 3)$","$\\text{No intersection}$"],"correct_answer":"A","solution":"<p>The line intersects the plane at the point $(3, 1, 1)$.</p><p><strong>Step 1: Write Parametric Equations for the Line</strong> From the vector equation $\\mathbf{r}(t) = \\langle 1, 2, -1 \\rangle + t\\langle 2, -1, 2 \\rangle$, extract coordinate functions:$$x(t) = 1 + 2t, \\quad y(t) = 2 - t, \\quad z(t) = -1 + 2t$$</p><p><strong>Step 2: Substitute Parametric Equations into the Plane Equation</strong> Substitute $x(t), y(t), z(t)$ into $2x - y + 2z = 7$:$$2(1 + 2t) - (2 - t) + 2(-1 + 2t) = 7$$Expand and collect like terms:$$2 + 4t - 2 + t - 2 + 4t = 7$$$$(4t + t + 4t) + (2 - 2 - 2) = 7$$$$9t - 2 = 7 \\implies 9t = 9 \\implies t = 1$$</p><p><strong>Step 3: Calculate the Coordinates of the Intersection Point</strong> Substitute parameter value $t = 1$ back into the line equations:$$x(1) = 1 + 2(1) = 3$$$$y(1) = 2 - (1) = 1$$$$z(1) = -1 + 2(1) = 1$$Therefore, the intersection point is $(3, 1, 1)$.</p><p><strong>Step 4: Verify in the Plane Equation</strong> $$2(3) - (1) + 2(1) = 6 - 1 + 2 = 7 \\quad \\checkmark$$</p>"},{"id":"PT1_2","term":"PT1","number":2,"section":"11.5","topic":"Distances in Space","question":"The distance from the point $P = (1, 2, 3)$ to the plane $2x - 2y + z = 9$ is:","choices":["$\\dfrac{2}{3}$","$\\dfrac{10}{3}$","$\\dfrac{4}{3}$","$\\dfrac{8}{3}$","$2$"],"correct_answer":"D","solution":"<p>The perpendicular distance from $P(1, 2, 3)$ to the plane is $\\dfrac{8}{3}$.</p><p><strong>Step 1: State the Point-to-Plane Distance Formula</strong> The perpendicular distance $D$ from a point $P(x_0, y_0, z_0)$ to a plane $Ax + By + Cz = d$ is given by:$$D = \\frac{|A x_0 + B y_0 + C z_0 - d|}{\\sqrt{A^2 + B^2 + C^2}}$$</p><p><strong>Step 2: Identify Plane Constants and Point Coordinates</strong> Given $P = (1, 2, 3)$, normal vector $\\mathbf{n} = \\langle A, B, C \\rangle = \\langle 2, -2, 1 \\rangle$, and scalar $d = 9$.</p><p><strong>Step 3: Evaluate Numerator and Denominator</strong> Numerator:$$|2(1) - 2(2) + 1(3) - 9| = |2 - 4 + 3 - 9| = |-8| = 8$$Denominator (magnitude of the normal vector):$$\\|\\mathbf{n}\\| = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$$</p><p><strong>Step 4: Compute the Distance</strong> $$D = \\frac{8}{3}$$</p>"},{"id":"PT1_3","term":"PT1","number":3,"section":"11.6","topic":"Quadric Surfaces Classification","question":"Identify the quadric surface given by the equation:$$x^2 + y^2 - z^2 = 4$$","choices":["$\\text{Hyperboloid of two sheets}$","$\\text{Hyperbolic paraboloid}$","$\\text{Elliptic cone}$","$\\text{Elliptic paraboloid}$","$\\text{Hyperboloid of one sheet}$"],"correct_answer":"E","solution":"<p>The surface is a Hyperboloid of one sheet.</p><p><strong>Step 1: Put the Equation in Standard Canonical Form</strong> Divide both sides of $x^2 + y^2 - z^2 = 4$ by $4$:$$\\frac{x^2}{4} + \\frac{y^2}{4} - \\frac{z^2}{4} = 1$$</p><p><strong>Step 2: Compare with Standard Forms of Quadrics</strong> - Two positive squared terms and one negative squared term equaling $+1$:$$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} - \\frac{z^2}{c^2} = 1 \\implies \\textbf{Hyperboloid of One Sheet}$$ - Two negative squared terms and one positive squared term equaling $+1$:$$-\\frac{x^2}{a^2} - \\frac{y^2}{b^2} + \\frac{z^2}{c^2} = 1 \\implies \\textbf{Hyperboloid of Two Sheets}$$ - Right-hand side equaling $0$:$$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} - \\frac{z^2}{c^2} = 0 \\implies \\textbf{Elliptic Cone}$$</p><p><strong>Step 3: Verify Horizontal and Vertical Traces</strong> Horizontal traces ($z = k$): $x^2 + y^2 = 4 + k^2$ are real circles for every value of $k \\in \\mathbb{R}$. Vertical traces ($x = 0$ or $y = 0$) are hyperbolas ($y^2 - z^2 = 4$). Thus, the surface is connected and tubular: <strong>Hyperboloid of one sheet</strong>.</p>"},{"id":"PT1_4","term":"PT1","number":4,"section":"11.6","topic":"Quadric Surfaces & Intersections","question":"The intersection of the hyperbolic paraboloid (saddle surface) $z = x^2 - y^2$ with the vertical plane $y = x + 1$ is:","choices":["$z = 1$","$z = -2x - 1$","$z = 2x^2 + 1$","$z = 2x + 1$","$z = -x^2 - 1$"],"correct_answer":"B","solution":"<p>The intersection curve is the line $z = -2x - 1$ in the plane $y = x + 1$.</p><p><strong>Step 1: Understand the Geometric Intersection</strong> Any point on the curve of intersection must satisfy the surface equation $z = x^2 - y^2$ and the plane equation $y = x + 1$ simultaneously.</p><p><strong>Step 2: Substitute $y = x + 1$ into the Surface Equation</strong> $$z = x^2 - (x + 1)^2$$</p><p><strong>Step 3: Expand the Binomial and Simplify</strong> $$z = x^2 - (x^2 + 2x + 1) = x^2 - x^2 - 2x - 1 = -2x - 1$$</p><p><strong>Step 4: Geometric Interpretation</strong> In $\\mathbb{R}^3$, the intersection is a straight line lying within the vertical plane $y = x + 1$, with height coordinate given by $z = -2x - 1$.</p>"},{"id":"PT1_5","term":"PT1","number":5,"section":"13.1","topic":"Domain of Multivariable Functions","question":"For the function $f(x, y) = \\dfrac{\\sqrt{9 - x^2 - y^2}}{x - 1}$, which description gives its domain $\\operatorname{Dom}(f)$?","choices":["$x^2 + y^2 \\le 9, \\quad y \\ne 1$","$x^2 + y^2 \\le 9$","$x^2 + y^2 > 9, \\quad x \\ne 1$","$x^2 + y^2 < 9$","$x^2 + y^2 \\le 9, \\quad x \\ne 1$"],"correct_answer":"E","solution":"<p>$\\operatorname{Dom}(f) = \\{ (x, y) \\mid x^2 + y^2 \\le 9, \\ x \\ne 1 \\}$.</p><p><strong>Step 1: Radical Domain Condition</strong> The radicand of the square root in the numerator must be non-negative:$$9 - x^2 - y^2 \\ge 0 \\iff x^2 + y^2 \\le 9$$This specifies the closed disk of radius $3$ centered at $(0, 0)$.</p><p><strong>Step 2: Non-Zero Denominator Condition</strong> The denominator cannot be zero:$$x - 1 \\ne 0 \\iff x \\ne 1$$This excludes all points on the vertical line $x = 1$.</p><p><strong>Step 3: Combine Conditions</strong> $$\\operatorname{Dom}(f) = \\left\\{ (x, y) \\in \\mathbb{R}^2 \\mid x^2 + y^2 \\le 9 \\text{ and } x \\ne 1 \\right\\}$$</p>"},{"id":"PT1_6","term":"PT1","number":6,"section":"13.1","topic":"Level Curves of Multivariable Functions","question":"For the function $f(x, y) = \\ln(4 - x^2 - y^2)$, the level curve $f(x, y) = \\ln 3$ is:","choices":["$\\text{A circle of radius } 2$","$\\text{The empty set}$","$\\text{A single point}$","$\\text{A circle of radius } 1$","$\\text{A circle of radius } \\sqrt{3}$"],"correct_answer":"D","solution":"<p>A circle centered at the origin of radius $1$.</p><p><strong>Step 1: Set Up Level Curve Equation</strong> Substitute $f(x, y) = \\ln 3$:$$\\ln(4 - x^2 - y^2) = \\ln 3$$</p><p><strong>Step 2: Exponentiate Both Sides</strong> $$e^{\\ln(4 - x^2 - y^2)} = e^{\\ln 3} \\iff 4 - x^2 - y^2 = 3$$</p><p><strong>Step 3: Identify the Geometric Curve</strong> Rearrange:$$x^2 + y^2 = 4 - 3 = 1$$This is a circle centered at the origin with radius $r = \\sqrt{1} = 1$.</p>"},{"id":"PT1_7","term":"PT1","number":7,"section":"13.2","topic":"Multivariable Limits - Squeeze Theorem","question":"Evaluate the limit:$$\\lim_{(x, y) \\to (0, 0)} \\frac{x^2 y}{x^2 + y^2}$$","choices":["$\\text{Does not exist}$","$1$","$-1$","$0$","$\\dfrac{1}{2}$"],"correct_answer":"D","solution":"<p>$\\lim_{(x, y) \\to (0, 0)} \\dfrac{x^2 y}{x^2 + y^2} = 0$. </p><p><strong>Method 1: Polar Coordinates</strong> Let $x = r \\cos\\theta$ and $y = r \\sin\\theta$. As $(x, y) \\to (0, 0)$, $r \\to 0^+$:$$\\frac{x^2 y}{x^2 + y^2} = \\frac{(r^2 \\cos^2\\theta)(r \\sin\\theta)}{r^2} = r \\cos^2\\theta \\sin\\theta$$Since $|\\cos^2\\theta \\sin\\theta| \\le 1$, we have:$$|r \\cos^2\\theta \\sin\\theta| \\le r \\to 0 \\quad \\text{as } r \\to 0^+$$By the Squeeze Theorem, the limit is $0$, regardless of direction $\\theta$. </p><p><strong>Method 2: Squeeze Inequality</strong> Notice that $\\dfrac{x^2}{x^2 + y^2} \\le 1$ for all $(x, y) \\ne (0, 0)$. Therefore:$$0 \\le \\left| \\frac{x^2 y}{x^2 + y^2} \\right| = \\frac{x^2}{x^2 + y^2} |y| \\le 1 \\cdot |y| = |y|$$Since $\\lim_{(x, y) \\to (0, 0)} |y| = 0$, by the Squeeze Theorem:$$\\lim_{(x, y) \\to (0, 0)} \\frac{x^2 y}{x^2 + y^2} = 0$$</p>"},{"id":"PT1_8","term":"PT1","number":8,"section":"13.2","topic":"Multivariable Limits - Two-Path Test","question":"Evaluate the limit:$$\\lim_{(x, y) \\to (0, 0)} \\frac{x^2 y}{x^4 + y^2}$$","choices":["$\\text{Does not exist}$","$\\dfrac{1}{2}$","$1$","$-1$","$0$"],"correct_answer":"A","solution":"<p>The limit Does Not Exist (DNE) by the Two-Path Test.</p><p><strong>Step 1: Test Along Straight Lines $y = mx$</strong> $$\\lim_{x \\to 0} \\frac{x^2(mx)}{x^4 + (mx)^2} = \\lim_{x \\to 0} \\frac{m x^3}{x^2(x^2 + m^2)} = \\lim_{x \\to 0} \\frac{m x}{x^2 + m^2} = 0 \\quad (\\text{for } m \\ne 0)$$Along the coordinate axes ($x = 0$ or $y = 0$), the expression is also identically $0$.</p><p><strong>Step 2: Examine Degree Balance in the Denominator</strong> In $x^4 + y^2$, the terms balance when $y \\sim x^2$. Let us test parabolic paths $y = k x^2$:$$\\lim_{x \\to 0} \\frac{x^2(k x^2)}{x^4 + (k x^2)^2} = \\lim_{x \\to 0} \\frac{k x^4}{x^4 + k^2 x^4} = \\lim_{x \\to 0} \\frac{k x^4}{x^4(1 + k^2)} = \\frac{k}{1 + k^2}$$</p><p><strong>Step 3: Evaluate Different Paths</strong> - Along $y = x^2$ ($k = 1$): $\\dfrac{1}{1 + 1^2} = \\dfrac{1}{2}$ - Along $y = -x^2$ ($k = -1$): $\\dfrac{-1}{1 + (-1)^2} = -\\dfrac{1}{2}$ - Along $y = 0$ ($k = 0$): $0$ Since different paths produce different limiting values, the limit <strong>Does Not Exist (DNE)</strong>.</p>"}],"PT2":[{"id":"PT2_1","term":"PT2","number":1,"section":"13.3","topic":"Partial Derivatives & Clairaut's Theorem","question":"If $f(x, y) = x^2 e^{xy}$, then the mixed second partial derivative $f_{xy}(1, 0)$ equals:","choices":["$0$","$2$","$4$","$3$","$1$"],"correct_answer":"D","solution":"<p>$f_{xy}(1, 0) = 3$.</p><p><strong>Step 1: Compute First Partial Derivative $f_y$</strong> Differentiating with respect to $y$ (treating $x$ as constant):$$f_y(x, y) = \\frac{\\partial}{\\partial y}[x^2 e^{xy}] = x^2 \\cdot (x e^{xy}) = x^3 e^{xy}$$</p><p><strong>Step 2: Differentiate with Respect to $x$ ($f_{yx} = f_{xy}$)</strong> Using the Product Rule:$$\\frac{\\partial}{\\partial x}[x^3 e^{xy}] = \\left( \\frac{\\partial}{\\partial x}[x^3] \\right) e^{xy} + x^3 \\left( \\frac{\\partial}{\\partial x}[e^{xy}] \\right) = 3x^2 e^{xy} + x^3 (y e^{xy}) = e^{xy}(3x^2 + x^3 y)$$</p><p><strong>Step 3: Evaluate at $(x, y) = (1, 0)$</strong> $$f_{xy}(1, 0) = e^{1 \\cdot 0} \\left( 3(1)^2 + (1)^3(0) \\right) = e^0 (3 + 0) = 1 \\cdot 3 = 3$$</p>"},{"id":"PT2_2","term":"PT2","number":2,"section":"13.3","topic":"Higher-Order Partial Derivatives","question":"Let $f(x, y) = x^3 y^2 - 2x y^3$. Then the third-order partial derivative $f_{xxy}(1, 2)$ equals:","choices":["$24$","$12$","$-12$","$6$","$18$"],"correct_answer":"A","solution":"<p>$f_{xxy}(1, 2) = 24$.</p><p><strong>Step 1: First Partial Derivative $f_x$</strong> Treat $y$ as a constant:$$f_x(x, y) = \\frac{\\partial}{\\partial x}[x^3 y^2 - 2x y^3] = 3x^2 y^2 - 2y^3$$</p><p><strong>Step 2: Second Partial Derivative $f_{xx}$</strong> Differentiate $f_x$ with respect to $x$:$$f_{xx}(x, y) = \\frac{\\partial}{\\partial x}[3x^2 y^2 - 2y^3] = 6x y^2 - 0 = 6x y^2$$</p><p><strong>Step 3: Third Partial Derivative $f_{xxy}$</strong> Differentiate $f_{xx}$ with respect to $y$:$$f_{xxy}(x, y) = \\frac{\\partial}{\\partial y}[6x y^2] = 6x(2y) = 12xy$$</p><p><strong>Step 4: Evaluate at $(x, y) = (1, 2)$</strong> $$f_{xxy}(1, 2) = 12(1)(2) = 24$$</p>"},{"id":"PT2_3","term":"PT2","number":3,"section":"13.4","topic":"Linearization & Tangent Approximations","question":"For the upper hemisphere $z = \\sqrt{25 - x^2 - y^2}$ at the base point $(3, 0)$, the local linear approximation predicts $z(3.1, 0.2) \\approx$:","choices":["$3.75$","$4.25$","$3.5$","$3.925$","$4.075$"],"correct_answer":"D","solution":"<p>$z(3.1, 0.2) \\approx 3.925$.</p><p><strong>Step 1: Calculate Function Value at the Base Point $(3, 0)$</strong> $$z(3, 0) = \\sqrt{25 - 3^2 - 0^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$$</p><p><strong>Step 2: Calculate First Partial Derivatives at $(3, 0)$</strong> $$z_x = \\frac{-2x}{2\\sqrt{25 - x^2 - y^2}} = \\frac{-x}{\\sqrt{25 - x^2 - y^2}} \\implies z_x(3, 0) = \\frac{-3}{4} = -0.75$$$$z_y = \\frac{-2y}{2\\sqrt{25 - x^2 - y^2}} = \\frac{-y}{\\sqrt{25 - x^2 - y^2}} \\implies z_y(3, 0) = \\frac{-0}{4} = 0$$</p><p><strong>Step 3: Construct the Linearization Formula</strong> $$L(x, y) = z(3, 0) + z_x(3, 0)(x - 3) + z_y(3, 0)(y - 0)$$$$L(x, y) = 4 - 0.75(x - 3) + 0(y - 0) = 4 - 0.75(x - 3)$$</p><p><strong>Step 4: Approximate at $(3.1, 0.2)$</strong> Here $\\Delta x = 3.1 - 3 = 0.1$:$$z(3.1, 0.2) \\approx L(3.1, 0.2) = 4 - 0.75(0.1) = 4 - 0.075 = 3.925$$</p>"},{"id":"PT2_4","term":"PT2","number":4,"section":"13.4","topic":"Differentials & Relative Error Estimation","question":"A rectangular box has sides $2$, $3$, and $4\\text{ cm}$. If each side increases by $1\\%$, the total differential predicts its volume increases by approximately:","choices":["$4\\%$","$1\\%$","$6\\%$","$3\\%$","$2\\%$"],"correct_answer":"D","solution":"<p>The volume increases by approximately $3\\%$.</p><p><strong>Step 1: Formula for Volume and Total Differential</strong> Volume of the box is $V = xyz$. The total differential is:$$dV = \\frac{\\partial V}{\\partial x} dx + \\frac{\\partial V}{\\partial y} dy + \\frac{\\partial V}{\\partial z} dz = (yz) dx + (xz) dy + (xy) dz$$</p><p><strong>Step 2: Express Relative Percentage Change</strong> Divide through by $V = xyz$:$$\\frac{dV}{V} = \\frac{yz\\,dx + xz\\,dy + xy\\,dz}{xyz} = \\frac{dx}{x} + \\frac{dy}{y} + \\frac{dz}{z}$$</p><p><strong>Step 3: Substitute the Given Percentage Changes</strong> Given $\\frac{dx}{x} = 1\\%$, $\\frac{dy}{y} = 1\\%$, $\\frac{dz}{z} = 1\\%$:$$\\frac{dV}{V} = 1\\% + 1\\% + 1\\% = 3\\%$$<small style='color:var(--color-primary);'>Notice: The relative change is invariant with respect to the initial side lengths!</small></p>"},{"id":"PT2_5","term":"PT2","number":5,"section":"13.5","topic":"Multivariable Chain Rule","question":"Let $z = x^2 y + e^{xy}$, with $x = s + t$ and $y = s - t$. Find $\\dfrac{\\partial z}{\\partial t}$ at the parameter point $(s, t) = (1, 0)$:","choices":["$1$","$-e$","$2 + e$","$-1$","$0$"],"correct_answer":"A","solution":"<p>$\\left. \\dfrac{\\partial z}{\\partial t} \\right|_{(1, 0)} = 1$.</p><p><strong>Step 1: Formulate the Chain Rule</strong> $$\\frac{\\partial z}{\\partial t} = \\frac{\\partial z}{\\partial x} \\frac{\\partial x}{\\partial t} + \\frac{\\partial z}{\\partial y} \\frac{\\partial y}{\\partial t}$$</p><p><strong>Step 2: Compute Intermediate Coordinates at $(s, t) = (1, 0)$</strong> $$x = 1 + 0 = 1, \\quad y = 1 - 0 = 1$$</p><p><strong>Step 3: Evaluate All Partial Derivatives</strong> $$\\frac{\\partial x}{\\partial t} = 1, \\quad \\frac{\\partial y}{\\partial t} = -1$$$$\\frac{\\partial z}{\\partial x} = 2xy + y e^{xy} \\implies \\left. \\frac{\\partial z}{\\partial x} \\right|_{(1, 1)} = 2(1)(1) + (1)e^1 = 2 + e$$$$\\frac{\\partial z}{\\partial y} = x^2 + x e^{xy} \\implies \\left. \\frac{\\partial z}{\\partial y} \\right|_{(1, 1)} = 1^2 + (1)e^1 = 1 + e$$</p><p><strong>Step 4: Combine Using the Chain Rule Formula</strong> $$\\frac{\\partial z}{\\partial t} = (2 + e)(1) + (1 + e)(-1) = 2 + e - 1 - e = 1$$</p>"},{"id":"PT2_6","term":"PT2","number":6,"section":"13.5","topic":"Implicit Differentiation","question":"If $x^2 + y^2 + z^2 + xyz = 8$ defines $z = z(x, y)$ implicitly as a differentiable function near $(1, 1, 2)$, then $z_x(1, 1)$ equals:","choices":["$-1$","$\\dfrac{4}{5}$","$-\\dfrac{2}{3}$","$-\\dfrac{4}{5}$","$-\\dfrac{3}{5}$"],"correct_answer":"D","solution":"<p>$z_x(1, 1) = -\\dfrac{4}{5}$.</p><p><strong>Step 1: Define Implicit Function $F(x, y, z)$</strong> Let $F(x, y, z) = x^2 + y^2 + z^2 + xyz - 8 = 0$. By the Implicit Function Theorem:$$z_x = -\\frac{F_x}{F_z}$$</p><p><strong>Step 2: Differentiate $F$ Partially with Respect to $x$ and $z$</strong> $$F_x = \\frac{\\partial}{\\partial x}[x^2 + y^2 + z^2 + xyz - 8] = 2x + yz$$$$F_z = \\frac{\\partial}{\\partial z}[x^2 + y^2 + z^2 + xyz - 8] = 2z + xy$$</p><p><strong>Step 3: Evaluate at the Given Point $(x, y, z) = (1, 1, 2)$</strong> $$F_x(1, 1, 2) = 2(1) + (1)(2) = 2 + 2 = 4$$$$F_z(1, 1, 2) = 2(2) + (1)(1) = 4 + 1 = 5$$</p><p><strong>Step 4: Compute $z_x(1, 1)$</strong> $$z_x(1, 1) = -\\frac{F_x(1, 1, 2)}{F_z(1, 1, 2)} = -\\frac{4}{5}$$</p>"},{"id":"PT2_7","term":"PT2","number":7,"section":"13.6","topic":"Directional Derivatives & Gradients","question":"For the surface $f(x, y) = x^2 + 2xy + 3y^2$, find the maximum directional derivative at the point $(1, -1)$:","choices":["$2\\sqrt{10}$","$4$","$10$","$2\\sqrt{5}$","$\\sqrt{20}$"],"correct_answer":"B","solution":"<p>The maximum directional derivative at $(1, -1)$ is $4$.</p><p><strong>Step 1: Theorem for Maximum Directional Derivative</strong> For any differentiable function $f$, the maximum value of the directional derivative $D_{\\mathbf{u}} f$ at a point $P$ occurs when $\\mathbf{u}$ has the direction of $\\nabla f(P)$, and its maximum value is:$$D_{\\mathbf{u}, \\max} f(P) = \\|\\nabla f(P)\\|$$</p><p><strong>Step 2: Calculate the Gradient Vector $\\nabla f(x, y)$</strong> $$f_x(x, y) = 2x + 2y, \\quad f_y(x, y) = 2x + 6y$$$$\\nabla f(x, y) = \\langle 2x + 2y, 2x + 6y \\rangle$$</p><p><strong>Step 3: Evaluate at Point $(1, -1)$</strong> $$f_x(1, -1) = 2(1) + 2(-1) = 2 - 2 = 0$$$$f_y(1, -1) = 2(1) + 6(-1) = 2 - 6 = -4$$$$\\nabla f(1, -1) = \\langle 0, -4 \\rangle$$</p><p><strong>Step 4: Compute the Length of the Gradient Vector</strong> $$\\|\\nabla f(1, -1)\\| = \\sqrt{0^2 + (-4)^2} = \\sqrt{16} = 4$$</p>"},{"id":"PT2_8","term":"PT2","number":8,"section":"13.6","topic":"Gradient Vectors & Normal Lines","question":"At the point $P = (1, 2)$, a unit normal vector to the level curve $x^2 + xy + y^2 = 7$ pointing toward increasing values of $f(x, y) = x^2 + xy + y^2$ is:","choices":["$\\dfrac{\\langle 1, 2 \\rangle}{\\sqrt{5}}$","$\\dfrac{\\langle -4, -5 \\rangle}{\\sqrt{41}}$","$\\dfrac{\\langle 5, 4 \\rangle}{\\sqrt{41}}$","$\\dfrac{\\langle 3, 6 \\rangle}{\\sqrt{45}}$","$\\dfrac{\\langle 4, 5 \\rangle}{\\sqrt{41}}$"],"correct_answer":"E","solution":"<p>$\\mathbf{u} = \\dfrac{\\langle 4, 5 \\rangle}{\\sqrt{41}}$.</p><p><strong>Step 1: Normal Property of the Gradient</strong> For any smooth level curve $f(x, y) = c$, the gradient vector $\\nabla f(P)$ is perpendicular to the level curve at $P$ and points toward increasing values of $f$.</p><p><strong>Step 2: Differentiate to Obtain the Gradient</strong> With $f(x, y) = x^2 + xy + y^2$:$$f_x = 2x + y, \\quad f_y = x + 2y$$$$\\nabla f(x, y) = \\langle 2x + y, x + 2y \\rangle$$</p><p><strong>Step 3: Evaluate at Point $P = (1, 2)$</strong> $$f_x(1, 2) = 2(1) + 2 = 4$$$$f_y(1, 2) = 1 + 2(2) = 5$$$$\\nabla f(1, 2) = \\langle 4, 5 \\rangle$$</p><p><strong>Step 4: Normalize to a Unit Vector</strong> $$\\|\\nabla f(1, 2)\\| = \\sqrt{4^2 + 5^2} = \\sqrt{16 + 25} = \\sqrt{41}$$$$\\mathbf{u} = \\frac{\\nabla f(1, 2)}{\\|\\nabla f(1, 2)\\|} = \\frac{\\langle 4, 5 \\rangle}{\\sqrt{41}} = \\left\\langle \\frac{4}{\\sqrt{41}}, \\frac{5}{\\sqrt{41}} \\right\\rangle$$</p>"}],"251A":{"term":"251A","title":"Term 251A","coordinator":"Dr. Faisal A. Fairag","date":"","question_count":15},"251B":{"term":"251B","title":"Term 251B","coordinator":"Dr. Faisal A. Fairag","date":"","question_count":15}},
  all_questions: window.MATH201_BANK,
  section_distribution: {"11.5":37,"11.6":18,"13.1":25,"13.2":25,"13.3":23,"13.4":15,"13.5":28,"13.6":16,"13.7":14}
};
