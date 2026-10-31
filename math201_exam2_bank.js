window.MATH201_BANK_VERSION = "20261031_v9";
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
    "solution": "<strong>Step 1 — Extract the Parametric Equations of the Line in Space:</strong><br>From the given vector equation of the line $\\mathbf{r}(t) = \\langle 1, 2, -1 \\rangle + t\\langle 2, -1, 2 \\rangle$, we express the position vector as $\\mathbf{r}(t) = \\langle x(t), y(t), z(t) \\rangle$. Equating each Cartesian component yields the parametric equations of the line for $t \\in \\mathbb{R}$:$$x(t) = 1 + 2t, \\qquad y(t) = 2 - t, \\qquad z(t) = -1 + 2t$$Here, $P_0(1, 2, -1)$ is the base point corresponding to $t = 0$, and $\\mathbf{v} = \\langle 2, -1, 2 \\rangle$ is the direction vector of the line.<div class=\"step-divider\"></div><strong>Step 2 — Substitute the Parametric Coordinates into the Plane Equation:</strong><br>A point lies on both the line and the plane $2x - y + 2z = 7$ if and only if its coordinates satisfy both equations simultaneously. Substituting $x(t)$, $y(t)$, and $z(t)$ into the linear equation of the plane gives a single linear equation in terms of the parameter $t$:$$2(1 + 2t) - (2 - t) + 2(-1 + 2t) = 7$$<div class=\"step-divider\"></div><strong>Step 3 — Solve for the Intersection Parameter $t$:</strong><br>Expanding the products and grouping the $t$-terms and constant terms separately, we obtain:$$2 + 4t - 2 + t - 2 + 4t = 7$$$$(4t + t + 4t) + (2 - 2 - 2) = 7$$$$9t - 2 = 7 \\implies 9t = 9 \\implies t = 1$$Because the coefficient of $t$ is non-zero ($\\mathbf{n} \\cdot \\mathbf{v} = 9 \\neq 0$), the line is not parallel to the plane and intersects it at a unique point corresponding to $t = 1$.<div class=\"step-divider\"></div><strong>Step 4 — Compute the Intersection Point and Verify:</strong><br>Substituting $t = 1$ back into the parametric equations from Step 1 yields the exact coordinates of the point of intersection:$$x(1) = 1 + 2(1) = 3, \\qquad y(1) = 2 - 1 = 1, \\qquad z(1) = -1 + 2(1) = 1$$Checking $(3, 1, 1)$ in the plane equation confirms $2(3) - (1) + 2(1) = 6 - 1 + 2 = 7$. Thus, the intersection point is $(3, 1, 1)$, which corresponds to Choice <strong>(A)</strong>."
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
    "solution": "<strong>Step 1 — State the Point-to-Plane Perpendicular Distance Formula:</strong><br>The shortest (perpendicular) distance $D$ from a given point $P(x_0, y_0, z_0)$ in three-dimensional space to a plane described by the general linear equation $Ax + By + Cz - d = 0$ is given by the orthogonal projection formula:$$D = \\frac{|Ax_0 + By_0 + Cz_0 - d|}{\\sqrt{A^2 + B^2 + C^2}}$$where $\\mathbf{n} = \\langle A, B, C \\rangle$ is the normal vector to the plane.<div class=\"step-divider\"></div><strong>Step 2 — Identify the Normal Vector, Plane Constant, and Point Coordinates:</strong><br>From the given plane equation $2x - 2y + z = 9$, we rewrite it in standard implicit form $2x - 2y + z - 9 = 0$ and extract the coefficients:$$A = 2, \\qquad B = -2, \\qquad C = 1, \\qquad d = 9$$The normal vector is $\\mathbf{n} = \\langle 2, -2, 1 \\rangle$, and the target point in space is $P(x_0, y_0, z_0) = (1, 2, 3)$.<div class=\"step-divider\"></div><strong>Step 3 — Evaluate the Absolute Value Numerator and Normal Vector Magnitude:</strong><br>Substituting the coordinates of $P(1, 2, 3)$ and the plane coefficients into the numerator gives:$$|Ax_0 + By_0 + Cz_0 - d| = |2(1) + (-2)(2) + 1(3) - 9| = |2 - 4 + 3 - 9| = |-8| = 8$$Next, computing the Euclidean norm $\\|\\mathbf{n}\\|$ in the denominator gives:$$\\|\\mathbf{n}\\| = \\sqrt{A^2 + B^2 + C^2} = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$$<div class=\"step-divider\"></div><strong>Step 4 — Compute the Exact Perpendicular Distance:</strong><br>Dividing the evaluated absolute value numerator by the magnitude of the normal vector yields the exact perpendicular distance from $P(1, 2, 3)$ to the plane:$$D = \\frac{8}{3}$$This simplified fraction is strictly positive and represents $\\frac{8}{3}$ units of distance, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Normalize the Quadric Surface Equation into Canonical Form:</strong><br>We are given the second-degree equation in three variables $x^2 + y^2 - z^2 = 4$. Since there are no linear terms $x, y, z$, the quadric surface is centered at the origin $(0, 0, 0)$. Dividing both sides of the equation by the constant $4$ puts it into standard canonical form:$$\\frac{x^2}{4} + \\frac{y^2}{4} - \\frac{z^2}{4} = 1 \\iff \\frac{x^2}{2^2} + \\frac{y^2}{2^2} - \\frac{z^2}{2^2} = 1$$<div class=\"step-divider\"></div><strong>Step 2 — Analyze the Signs of the Quadratic Terms:</strong><br>In the canonical form $\\pm \\frac{x^2}{a^2} \\pm \\frac{y^2}{b^2} \\pm \\frac{z^2}{c^2} = 1$ with right-hand side equal to $+1$:<ul><li>Three positive terms ($+, +, +$) yield an <em>ellipsoid</em>.</li><li>Two positive terms and one negative term ($+, +, -$) yield a <em>hyperboloid of one sheet</em>.</li><li>One positive term and two negative terms ($+, -, -$) yield a <em>hyperboloid of two sheets</em>.</li></ul>Here, the coefficients of $x^2$ and $y^2$ are positive while the coefficient of $z^2$ is negative, matching the $(+, +, -)$ signature.<div class=\"step-divider\"></div><strong>Step 3 — Examine the Horizontal and Vertical Cross-Sectional Traces:</strong><br>Setting $z = k$ (horizontal planes parallel to the $xy$-plane) gives:$$x^2 + y^2 = 4 + k^2$$Since $4 + k^2 \\ge 4 > 0$ for every real number $k \\in (-\\infty, \\infty)$, horizontal cross-sections exist for all heights $z = k$ and form circles of radius $\\sqrt{4 + k^2}$ (with a minimum waist radius of $2$ at $z = 0$). Setting $x = 0$ or $y = 0$ yields the hyperbolas $y^2 - z^2 = 4$ and $x^2 - z^2 = 4$.<div class=\"step-divider\"></div><strong>Step 4 — Synthesize the Geometric Classification:</strong><br>Because horizontal circular traces exist continuously for all real values of $z$ and are connected along the $z$-axis by hyperbolic vertical profiles, the surface forms a single connected hourglass-shaped tube symmetric around the $z$-axis. Therefore, the quadric surface is a <strong>Hyperboloid of one sheet</strong>, which corresponds to Choice <strong>(E)</strong>."
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
    "solution": "<strong>Step 1 — Formulate the System Governing the Curve of Intersection:</strong><br>We seek the algebraic relation describing the intersection of the hyperbolic paraboloid (saddle surface) $z = x^2 - y^2$ and the vertical plane $y = x + 1$. Any point $(x, y, z) \\in \\mathbb{R}^3$ lying on the curve of intersection must simultaneously satisfy both equations:$$\\begin{cases} z = x^2 - y^2 \\\\ y = x + 1 \\end{cases}$$<div class=\"step-divider\"></div><strong>Step 2 — Eliminate the Variable $y$ via Direct Substitution:</strong><br>Since all answer choices express the height coordinate $z$ purely as a function of $x$, we substitute the linear expression $y = x + 1$ from the plane equation directly into the quadratic surface equation $z = x^2 - y^2$:$$z = x^2 - (x + 1)^2$$<div class=\"step-divider\"></div><strong>Step 3 — Expand the Binomial Square and Simplify Algebraically:</strong><br>Using the algebraic identity $(a + b)^2 = a^2 + 2ab + b^2$ on the term $(x + 1)^2$, we obtain $(x + 1)^2 = x^2 + 2x + 1$. Substituting this expansion and distributing the negative sign across all terms inside the parentheses yields:$$z = x^2 - (x^2 + 2x + 1) = x^2 - x^2 - 2x - 1 = -2x - 1$$<div class=\"step-divider\"></div><strong>Step 4 — Geometric Interpretation and Verification:</strong><br>The quadratic $x^2$ terms cancel completely because the plane $y = x + 1$ is parallel to one of the asymptotic ruling planes $y = x$ of the hyperbolic paraboloid $z = (x - y)(x + y)$. Consequently, the intersection curve is a straight line living in the plane $y = x + 1$ whose height satisfies $z = -2x - 1$, which corresponds to Choice <strong>(B)</strong>."
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
    "solution": "<strong>Step 1 — Identify the Algebraic Restrictions Defining the Natural Domain:</strong><br>We are given the two-variable real-valued function:$$f(x, y) = \\frac{\\sqrt{9 - x^2 - y^2}}{x - 1}$$For $f(x, y)$ to produce a well-defined real number, two independent conditions must be satisfied simultaneously: (1) the expression inside the even-indexed square root in the numerator must be non-negative, and (2) the denominator of the fraction must be non-zero.<div class=\"step-divider\"></div><strong>Step 2 — Analyze the Radical Condition in the Numerator:</strong><br>Requiring the radicand $9 - x^2 - y^2$ to be greater than or equal to zero gives:$$9 - x^2 - y^2 \\ge 0 \\iff x^2 + y^2 \\le 9$$Geometrically, $x^2 + y^2 \\le 3^2$ represents the closed disk of radius $r = 3$ centered at the origin $(0, 0)$ in the $xy$-plane, including its boundary circle $x^2 + y^2 = 9$.<div class=\"step-divider\"></div><strong>Step 3 — Analyze the Division-by-Zero Restriction in the Denominator:</strong><br>Requiring the linear denominator $x - 1$ to be non-zero gives:$$x - 1 \\neq 0 \\iff x \\neq 1$$Geometrically, this condition excludes every point lying on the vertical line $x = 1$ (which slices vertically through the closed disk of radius $3$).<div class=\"step-divider\"></div><strong>Step 4 — Combine Both Domain Constraints:</strong><br>Taking the intersection of the closed disk constraint from Step 2 and the line exclusion constraint from Step 3 yields the complete domain of $f$:$$\\operatorname{Dom}(f) = \\left\\{ (x, y) \\in \\mathbb{R}^2 \\;\\middle|\\; x^2 + y^2 \\le 9, \\quad x \\neq 1 \\right\\}$$This exact pair of inequalities matches $x^2 + y^2 \\le 9, \\; x \\neq 1$, which corresponds to Choice <strong>(E)</strong>."
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
    "solution": "<strong>Step 1 — Set Up the Level Curve Equation for $k = \\ln 3$:</strong><br>By definition, the level curve of a multivariable function $f(x, y)$ at height $k$ is the set of all points $(x, y)$ in the domain of $f$ where $f(x, y) = k$. For $f(x, y) = \\ln(4 - x^2 - y^2)$ and target level $k = \\ln 3$, we set:$$\\ln(4 - x^2 - y^2) = \\ln 3$$Note that the domain requires $4 - x^2 - y^2 > 0$, which is automatically satisfied whenever $4 - x^2 - y^2 = 3 > 0$.<div class=\"step-divider\"></div><strong>Step 2 — Eliminate the Natural Logarithm Using Injectivity:</strong><br>Because the natural logarithm function $\\ln(u)$ is strictly increasing and one-to-one on $(0, \\infty)$, we can exponentiate both sides of the equation with base $e$ to equate their arguments directly:$$e^{\\ln(4 - x^2 - y^2)} = e^{\\ln 3} \\implies 4 - x^2 - y^2 = 3$$<div class=\"step-divider\"></div><strong>Step 3 — Rearrange into Standard Geometric Form in the $xy$-Plane:</strong><br>Moving the quadratic terms $x^2 + y^2$ to one side and subtracting $3$ from $4$ gives:$$x^2 + y^2 = 4 - 3 \\implies x^2 + y^2 = 1$$Comparing this with the standard equation of a circle centered at the origin, $(x - 0)^2 + (y - 0)^2 = r^2$, we identify $r^2 = 1$.<div class=\"step-divider\"></div><strong>Step 4 — Characterize the Level Curve and Verify:</strong><br>Taking the positive square root of $r^2 = 1$ gives radius $r = \\sqrt{1} = 1$. Every point $(x, y)$ on this circle satisfies $x^2 + y^2 = 1$, which upon substitution into $f(x, y)$ yields $\\ln(4 - 1) = \\ln 3$. Therefore, the level curve is <strong>a circle of radius $1$</strong>, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Check the Indeterminate Form and Transform to Polar Coordinates:</strong><br>Direct substitution of $(x, y) = (0, 0)$ into $\\dfrac{x^2 y}{x^2 + y^2}$ yields the indeterminate form $\\dfrac{0}{0}$. Because the denominator is the radial sum of squares $x^2 + y^2$, we convert to polar coordinates by setting:$$x = r\\cos\\theta, \\qquad y = r\\sin\\theta, \\qquad x^2 + y^2 = r^2$$where $r = \\sqrt{x^2 + y^2} > 0$ measures the Euclidean distance to the origin. As $(x, y) \\to (0, 0)$ along any path, $r \\to 0^+$ while $\\theta$ may vary arbitrarily.<div class=\"step-divider\"></div><strong>Step 2 — Simplify the Rational Expression in Terms of $r$ and $\\theta$:</strong><br>Substituting the polar expressions for $x$ and $y$ into the quotient gives:$$\\frac{x^2 y}{x^2 + y^2} = \\frac{(r\\cos\\theta)^2 (r\\sin\\theta)}{r^2} = \\frac{r^3 \\cos^2\\theta \\sin\\theta}{r^2}$$Since $r > 0$ for all $(x, y) \\neq (0, 0)$, we cancel the common factor $r^2$ between numerator and denominator:$$\\frac{x^2 y}{x^2 + y^2} = r\\cos^2\\theta \\sin\\theta$$<div class=\"step-divider\"></div><strong>Step 3 — Establish Uniform Bounds Using Trigonometric Inequalities:</strong><br>For all real angles $\\theta \\in \\mathbb{R}$, the sine and cosine functions satisfy $|\\cos\\theta| \\le 1$ and $|\\sin\\theta| \\le 1$, so their product satisfies $|\\cos^2\\theta \\sin\\theta| \\le 1$. Taking the absolute value of our simplified expression gives:$$0 \\le \\left| \\frac{x^2 y}{x^2 + y^2} \\right| = r |\\cos^2\\theta \\sin\\theta| \\le r$$Equivalently, in Cartesian coordinates, since $0 \\le \\frac{x^2}{x^2 + y^2} \\le 1$, we have $0 \\le \\left|\\frac{x^2 y}{x^2 + y^2}\\right| \\le |y|$.<div class=\"step-divider\"></div><strong>Step 4 — Apply the Squeeze Theorem to Evaluate the Limit:</strong><br>Because the upper bounding function $r = \\sqrt{x^2 + y^2}$ depends only on the radial distance and satisfies $\\lim_{r \\to 0^+} r = 0$ independently of the angle $\\theta$, the Squeeze Theorem guarantees that:$$\\lim_{(x, y) \\to (0, 0)} \\left| \\frac{x^2 y}{x^2 + y^2} \\right| = 0 \\implies \\lim_{(x, y) \\to (0, 0)} \\frac{x^2 y}{x^2 + y^2} = 0$$Thus, the limit exists and equals $0$, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Analyze the Degree Balance of the Rational Function Near $(0, 0)$:</strong><br>We wish to evaluate the multivariable limit:$$\\lim_{(x, y) \\to (0, 0)} \\frac{x^2 y}{x^4 + y^2}$$Direct substitution gives the indeterminate form $\\frac{0}{0}$. Observe that in the denominator $x^4 + y^2$, the first term has degree $4$ in $x$ while the second term has degree $2$ in $y$. These two terms have equal weight when $y$ scales quadratically with $x$, i.e., along parabolic paths of the form $y = kx^2$.<div class=\"step-divider\"></div><strong>Step 2 — Evaluate the Limit Along the Family of Parabolic Paths $y = kx^2$:</strong><br>Every parabola $y = kx^2$ (for any real constant $k \\in \\mathbb{R}$) passes directly through the origin $(0, 0)$ as $x \\to 0$. Restricting the function to the path $y = kx^2$ with $x \\neq 0$ yields:$$\\lim_{\\substack{(x, y) \\to (0, 0) \\\\ y = kx^2}} \\frac{x^2 y}{x^4 + y^2} = \\lim_{x \\to 0} \\frac{x^2 (kx^2)}{x^4 + (kx^2)^2} = \\lim_{x \\to 0} \\frac{kx^4}{x^4 + k^2 x^4}$$<div class=\"step-divider\"></div><strong>Step 3 — Factor Out $x^4$ and Compare Distinct Path Values:</strong><br>Factoring $x^4$ from the denominator and canceling it with the $x^4$ in the numerator (valid since $x \\neq 0$ as $x \\to 0$) gives a constant value that depends explicitly on the path parameter $k$:$$\\lim_{x \\to 0} \\frac{kx^4}{x^4(1 + k^2)} = \\frac{k}{1 + k^2}$$Specifically, choosing two distinct parabolic paths through the origin:<ul><li>Along Path 1 ($y = x^2$, where $k = 1$): the limit is $\\dfrac{1}{1 + 1^2} = \\dfrac{1}{2}$.</li><li>Along Path 2 ($y = -x^2$, where $k = -1$): the limit is $\\dfrac{-1}{1 + (-1)^2} = -\\dfrac{1}{2}$ (and along $y = 0$, the limit is $0$).</li></ul><div class=\"step-divider\"></div><strong>Step 4 — Conclude via the Two-Path Test for Non-Existence of Limits:</strong><br>For a multivariable limit $\\lim_{(x, y) \\to (0, 0)} f(x, y)$ to exist, the function must approach the exact same real number $L$ along every possible curve approaching $(0, 0)$. Since approaching $(0, 0)$ along $y = x^2$ gives $\\frac{1}{2}$ whereas approaching along $y = -x^2$ gives $-\\frac{1}{2} \\neq \\frac{1}{2}$, the limit <strong>Does not exist</strong>, which corresponds to Choice <strong>(A)</strong>."
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
    "solution": "<strong>Step 1 — Recall Notation and Clairaut's Theorem for Mixed Partial Derivatives:</strong><br>For a smooth function $f(x, y) = x^2 e^{xy}$, the subscript notation $f_{xy}$ denotes $\\frac{\\partial}{\\partial y}\\left(\\frac{\\partial f}{\\partial x}\\right)$, which by Clairaut's Theorem is identical to $f_{yx} = \\frac{\\partial}{\\partial x}\\left(\\frac{\\partial f}{\\partial y}\\right)$ everywhere on $\\mathbb{R}^2$ because $f$ is a product of polynomial and exponential functions with continuous partial derivatives of all orders.<div class=\"step-divider\"></div><strong>Step 2 — Compute the First-Order Partial Derivative $f_x(x, y)$:</strong><br>Differentiating $f(x, y) = x^2 e^{xy}$ with respect to $x$ while holding $y$ constant requires the Product Rule $\\frac{\\partial}{\\partial x}[u \\cdot v] = u_x v + u v_x$ with $u = x^2$ and $v = e^{xy}$:$$f_x(x, y) = \\frac{\\partial}{\\partial x}\\left(x^2\\right) \\cdot e^{xy} + x^2 \\cdot \\frac{\\partial}{\\partial x}\\left(e^{xy}\\right) = 2x e^{xy} + x^2 (y e^{xy}) = (2x + x^2 y)e^{xy}$$<div class=\"step-divider\"></div><strong>Step 3 — Differentiate with Respect to $y$ to Obtain $f_{xy}(x, y)$:</strong><br>Now we differentiate $f_x(x, y) = 2x e^{xy} + x^2 y e^{xy}$ partially with respect to $y$, holding $x$ constant:$$f_{xy}(x, y) = \\frac{\\partial}{\\partial y}\\left(2x e^{xy}\\right) + \\frac{\\partial}{\\partial y}\\left(x^2 y e^{xy}\\right)$$$$f_{xy}(x, y) = 2x(x e^{xy}) + x^2 \\left(1 \\cdot e^{xy} + y \\cdot x e^{xy}\\right) = 2x^2 e^{xy} + x^2 e^{xy} + x^3 y e^{xy} = (3x^2 + x^3 y)e^{xy}$$(Equivalently, computing $f_y = x^3 e^{xy}$ first and differentiating with respect to $x$ yields $(3x^2 + x^3 y)e^{xy}$ in one step.)<div class=\"step-divider\"></div><strong>Step 4 — Evaluate the Mixed Partial Derivative at $(1, 0)$:</strong><br>Substituting $x = 1$ and $y = 0$ into our symbolic expression $f_{xy}(x, y) = (3x^2 + x^3 y)e^{xy}$ gives:$$f_{xy}(1, 0) = \\left(3(1)^2 + (1)^3(0)\\right) e^{1 \\cdot 0} = (3 + 0) \\cdot e^0 = 3 \\cdot 1 = 3$$Therefore, $f_{xy}(1, 0) = 3$, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Compute the First-Order Partial Derivative $f_x(x, y)$:</strong><br>We are given the polynomial function $f(x, y) = x^3 y^2 - 2x y^3$ and asked to evaluate the third-order mixed partial derivative $f_{xxy}(1, 2) = \\frac{\\partial^3 f}{\\partial y \\, \\partial x^2}(1, 2)$. First, we differentiate $f(x, y)$ with respect to $x$ while treating $y$ as a constant:$$f_x(x, y) = \\frac{\\partial}{\\partial x}\\left(x^3 y^2 - 2x y^3\\right) = 3x^2 y^2 - 2y^3$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the Second-Order Partial Derivative $f_{xx}(x, y)$:</strong><br>Next, we differentiate $f_x(x, y) = 3x^2 y^2 - 2y^3$ a second time with respect to $x$, again holding $y$ constant. Note that the term $-2y^3$ contains no $x$ factor, so its partial derivative with respect to $x$ vanishes:$$f_{xx}(x, y) = \\frac{\\partial}{\\partial x}\\left(3x^2 y^2 - 2y^3\\right) = 6x y^2 - 0 = 6xy^2$$<div class=\"step-divider\"></div><strong>Step 3 — Compute the Third-Order Mixed Partial Derivative $f_{xxy}(x, y)$:</strong><br>Now we differentiate $f_{xx}(x, y) = 6xy^2$ partially with respect to $y$, holding $x$ constant:$$f_{xxy}(x, y) = \\frac{\\partial}{\\partial y}\\left(6xy^2\\right) = 6x \\cdot \\frac{d}{dy}\\left(y^2\\right) = 6x(2y) = 12xy$$<div class=\"step-divider\"></div><strong>Step 4 — Evaluate at the Point $(x, y) = (1, 2)$:</strong><br>Substituting the given coordinates $x = 1$ and $y = 2$ into the simplified third-order partial derivative $f_{xxy}(x, y) = 12xy$ yields:$$f_{xxy}(1, 2) = 12(1)(2) = 24$$Thus, the third-order partial derivative at $(1, 2)$ equals $24$, which corresponds to Choice <strong>(A)</strong>."
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
    "solution": "<strong>Step 1 — Evaluate the Function at the Base Point $(x_0, y_0) = (3, 0)$:</strong><br>To construct the local linear approximation $L(x, y)$ of the upper hemisphere function $z(x, y) = \\sqrt{25 - x^2 - y^2}$ near the base point $(x_0, y_0) = (3, 0)$, we first evaluate the exact height $z(3, 0)$:$$z(3, 0) = \\sqrt{25 - 3^2 - 0^2} = \\sqrt{25 - 9 - 0} = \\sqrt{16} = 4$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the First-Order Partial Derivatives at $(3, 0)$:</strong><br>Applying the Chain Rule to $z(x, y) = (25 - x^2 - y^2)^{1/2}$, we find the first-order partial derivatives $z_x$ and $z_y$:$$z_x(x, y) = \\frac{-2x}{2\\sqrt{25 - x^2 - y^2}} = \\frac{-x}{\\sqrt{25 - x^2 - y^2}}, \\qquad z_y(x, y) = \\frac{-2y}{2\\sqrt{25 - x^2 - y^2}} = \\frac{-y}{\\sqrt{25 - x^2 - y^2}}$$Evaluating both partial derivatives at the base point $(3, 0)$ gives:$$z_x(3, 0) = \\frac{-3}{\\sqrt{16}} = -\\frac{3}{4} = -0.75, \\qquad z_y(3, 0) = \\frac{-0}{\\sqrt{16}} = 0$$<div class=\"step-divider\"></div><strong>Step 3 — Formulate the Local Linearization Function $L(x, y)$:</strong><br>The standard linearization (tangent plane approximation) of $z(x, y)$ at $(x_0, y_0) = (3, 0)$ is given by:$$L(x, y) = z(3, 0) + z_x(3, 0)(x - 3) + z_y(3, 0)(y - 0)$$Substituting the values from Steps 1 and 2 yields:$$L(x, y) = 4 - 0.75(x - 3) + 0(y - 0) = 4 - 0.75(x - 3)$$<div class=\"step-divider\"></div><strong>Step 4 — Approximate $z(3.1, 0.2)$ Using the Linearization:</strong><br>Substituting the target point $(x, y) = (3.1, 0.2)$ where $\\Delta x = 3.1 - 3 = 0.1$ and $\\Delta y = 0.2 - 0 = 0.2$ into $L(x, y)$ gives:$$z(3.1, 0.2) \\approx L(3.1, 0.2) = 4 - 0.75(3.1 - 3) + 0(0.2) = 4 - 0.75(0.1) = 4 - 0.075 = 3.925$$Thus, the local linear approximation predicts $z(3.1, 0.2) \\approx 3.925$, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Express the Box Volume and Its Total Differential $dV$:</strong><br>Let $x$, $y$, and $z$ denote the lengths of the three mutually perpendicular edges of the rectangular box, with initial dimensions $x = 2\\text{ cm}$, $y = 3\\text{ cm}$, and $z = 4\\text{ cm}$. The volume of the box is the product $V(x, y, z) = xyz$. By the multivariable differential formula, the total differential $dV$ is:$$dV = \\frac{\\partial V}{\\partial x}\\,dx + \\frac{\\partial V}{\\partial y}\\,dy + \\frac{\\partial V}{\\partial z}\\,dz = yz\\,dx + xz\\,dy + xy\\,dz$$<div class=\"step-divider\"></div><strong>Step 2 — Convert to the Relative Change Formula $\\dfrac{dV}{V}$:</strong><br>To find the approximate percentage change in volume, we divide both sides of the total differential equation by the initial volume $V = xyz$:$$\\frac{dV}{V} = \\frac{yz\\,dx + xz\\,dy + xy\\,dz}{xyz} = \\frac{yz\\,dx}{xyz} + \\frac{xz\\,dy}{xyz} + \\frac{xy\\,dz}{xyz} = \\frac{dx}{x} + \\frac{dy}{y} + \\frac{dz}{z}$$This logarithmic differential identity shows that the relative change in the product of three variables equals the sum of the relative changes of the individual variables.<div class=\"step-divider\"></div><strong>Step 3 — Substitute the Given Relative Increases for Each Side:</strong><br>We are told that each of the three sides increases by $1\\%$, which means the relative differentials are:$$\\frac{dx}{x} = 0.01 = 1\\%, \\qquad \\frac{dy}{y} = 0.01 = 1\\%, \\qquad \\frac{dz}{z} = 0.01 = 1\\%$$(Specifically, $dx = 0.02\\text{ cm}$, $dy = 0.03\\text{ cm}$, and $dz = 0.04\\text{ cm}$ at $V_0 = 2 \\times 3 \\times 4 = 24\\text{ cm}^3$.)<div class=\"step-divider\"></div><strong>Step 4 — Compute the Approximate Percentage Increase in Volume:</strong><br>Summing the three relative percentage changes yields:$$\\frac{dV}{V} = 1\\% + 1\\% + 1\\% = 3\\%$$(Checking in absolute units: $dV = (12)(0.02) + (8)(0.03) + (6)(0.04) = 0.24 + 0.24 + 0.24 = 0.72\\text{ cm}^3$, and $\\frac{dV}{V_0} = \\frac{0.72}{24} = 0.03 = 3\\%$.) Thus, the volume increases by approximately $3\\%$, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — State the Multivariable Chain Rule for $\\dfrac{\\partial z}{\\partial t}$:</strong><br>Since $z = x^2 y + e^{xy}$ is a differentiable function of the intermediate variables $x$ and $y$, which in turn are differentiable functions of the independent parameters $s$ and $t$ via $x = s + t$ and $y = s - t$, the Chain Rule gives:$$\\frac{\\partial z}{\\partial t} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial t} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial t}$$<div class=\"step-divider\"></div><strong>Step 2 — Determine the Values of $(x, y)$ at the Parameter Point $(s, t) = (1, 0)$:</strong><br>Substituting $s = 1$ and $t = 0$ into the coordinate transformation equations $x(s, t) = s + t$ and $y(s, t) = s - t$ yields the corresponding point $(x, y)$:$$x(1, 0) = 1 + 0 = 1, \\qquad y(1, 0) = 1 - 0 = 1$$We also compute the partial derivatives of $x$ and $y$ with respect to $t$:$$\\frac{\\partial x}{\\partial t} = \\frac{\\partial}{\\partial t}(s + t) = 1, \\qquad \\frac{\\partial y}{\\partial t} = \\frac{\\partial}{\\partial t}(s - t) = -1$$<div class=\"step-divider\"></div><strong>Step 3 — Compute and Evaluate $\\dfrac{\\partial z}{\\partial x}$ and $\\dfrac{\\partial z}{\\partial y}$ at $(x, y) = (1, 1)$:</strong><br>Differentiating $z = x^2 y + e^{xy}$ partially with respect to $x$ and $y$ gives:$$\\frac{\\partial z}{\\partial x} = 2xy + y e^{xy}, \\qquad \\frac{\\partial z}{\\partial y} = x^2 + x e^{xy}$$Evaluating both partial derivatives at $(x, y) = (1, 1)$ gives:$$\\left.\\frac{\\partial z}{\\partial x}\\right|_{(1, 1)} = 2(1)(1) + (1)e^{1 \\cdot 1} = 2 + e, \\qquad \\left.\\frac{\\partial z}{\\partial y}\\right|_{(1, 1)} = (1)^2 + (1)e^{1 \\cdot 1} = 1 + e$$<div class=\"step-divider\"></div><strong>Step 4 — Substitute All Components into the Chain Rule Formula:</strong><br>Combining the evaluated derivatives from Steps 2 and 3 into the Chain Rule expression from Step 1 gives:$$\\left.\\frac{\\partial z}{\\partial t}\\right|_{(s, t) = (1, 0)} = (2 + e)(1) + (1 + e)(-1) = 2 + e - 1 - e = 1$$The transcendental $e$ terms cancel exactly, leaving $\\dfrac{\\partial z}{\\partial t} = 1$, which corresponds to Choice <strong>(A)</strong>."
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
    "solution": "<strong>Step 1 — Formulate the Implicit Function $F(x, y, z) = 0$ and Implicit Derivative Formula:</strong><br>We move the constant $8$ to the left-hand side of the given equation $x^2 + y^2 + z^2 + xyz = 8$ to define the level surface $F(x, y, z) = 0$, where:$$F(x, y, z) = x^2 + y^2 + z^2 + xyz - 8$$By the Implicit Function Theorem, anywhere $F_z \\neq 0$, the partial derivative of $z$ with respect to $x$ is given by:$$z_x = \\frac{\\partial z}{\\partial x} = -\\frac{F_x(x, y, z)}{F_z(x, y, z)}$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the Partial Derivatives $F_x$ and $F_z$:</strong><br>Differentiating $F(x, y, z) = x^2 + y^2 + z^2 + xyz - 8$ with respect to $x$ while holding $y$ and $z$ constant yields:$$F_x(x, y, z) = \\frac{\\partial}{\\partial x}\\left(x^2 + y^2 + z^2 + xyz - 8\\right) = 2x + yz$$Differentiating $F(x, y, z)$ with respect to $z$ while holding $x$ and $y$ constant yields:$$F_z(x, y, z) = \\frac{\\partial}{\\partial z}\\left(x^2 + y^2 + z^2 + xyz - 8\\right) = 2z + xy$$<div class=\"step-divider\"></div><strong>Step 3 — Evaluate $F_x$ and $F_z$ at the Given Point $(1, 1, 2)$:</strong><br>First, observe that $(1, 1, 2)$ lies on the surface since $1^2 + 1^2 + 2^2 + (1)(1)(2) = 1 + 1 + 4 + 2 = 8$. Substituting $(x, y, z) = (1, 1, 2)$ into $F_x$ and $F_z$ gives:$$F_x(1, 1, 2) = 2(1) + (1)(2) = 2 + 2 = 4$$$$F_z(1, 1, 2) = 2(2) + (1)(1) = 4 + 1 = 5 \\neq 0$$<div class=\"step-divider\"></div><strong>Step 4 — Calculate the Implicit Partial Derivative $z_x(1, 1)$:</strong><br>Substituting the evaluated values $F_x(1, 1, 2) = 4$ and $F_z(1, 1, 2) = 5$ into the implicit differentiation formula from Step 1 gives:$$z_x(1, 1) = -\\frac{F_x(1, 1, 2)}{F_z(1, 1, 2)} = -\\frac{4}{5}$$Thus, $z_x(1, 1) = -\\dfrac{4}{5}$, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — State the Theorem for the Maximum Directional Derivative:</strong><br>For a differentiable multivariable function $f(x, y)$, the directional derivative in the direction of a unit vector $\\mathbf{u}$ is given by $D_{\\mathbf{u}} f(x, y) = \\nabla f(x, y) \\cdot \\mathbf{u} = \\|\\nabla f(x, y)\\| \\cos\\theta$. Because $\\cos\\theta$ attains its maximum value of $+1$ when $\\theta = 0$ (i.e., when $\\mathbf{u}$ points in the exact direction of the gradient $\\nabla f$), the maximum directional derivative at any point $P$ equals the magnitude of the gradient vector:$$\\max_{\\|\\mathbf{u}\\|=1} D_{\\mathbf{u}} f(P) = \\|\\nabla f(P)\\|$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the First-Order Partial Derivatives and Gradient Vector $\\nabla f(x, y)$:</strong><br>Given the quadratic surface $f(x, y) = x^2 + 2xy + 3y^2$, we differentiate partially with respect to $x$ and $y$:$$f_x(x, y) = \\frac{\\partial}{\\partial x}\\left(x^2 + 2xy + 3y^2\\right) = 2x + 2y$$$$f_y(x, y) = \\frac{\\partial}{\\partial y}\\left(x^2 + 2xy + 3y^2\\right) = 2x + 6y$$Thus, the gradient vector is $\\nabla f(x, y) = \\langle 2x + 2y, \\; 2x + 6y \\rangle$.<div class=\"step-divider\"></div><strong>Step 3 — Evaluate the Gradient Vector at the Point $(1, -1)$:</strong><br>Substituting $x = 1$ and $y = -1$ into the components of $\\nabla f(x, y)$ gives:$$f_x(1, -1) = 2(1) + 2(-1) = 2 - 2 = 0$$$$f_y(1, -1) = 2(1) + 6(-1) = 2 - 6 = -4$$Hence, the gradient vector at $(1, -1)$ is $\\nabla f(1, -1) = \\langle 0, -4 \\rangle$.<div class=\"step-divider\"></div><strong>Step 4 — Compute the Magnitude of the Gradient Vector:</strong><br>Taking the Euclidean norm of $\\nabla f(1, -1) = \\langle 0, -4 \\rangle$ yields the maximum directional derivative at $(1, -1)$:$$\\|\\nabla f(1, -1)\\| = \\sqrt{0^2 + (-4)^2} = \\sqrt{0 + 16} = \\sqrt{16} = 4$$Thus, the maximum directional derivative at $(1, -1)$ is $4$, which corresponds to Choice <strong>(B)</strong>."
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
    "solution": "<strong>Step 1 — Recall the Geometric Orthogonality Property of the Gradient Vector:</strong><br>For a differentiable function $f(x, y)$ and a point $P(x_0, y_0)$ on the level curve $f(x, y) = c$ where $\\nabla f(P) \\neq \\mathbf{0}$, the gradient vector $\\nabla f(P) = \\langle f_x(P), f_y(P) \\rangle$ is orthogonal (normal) to the tangent line of the level curve $f(x, y) = c$ at $P$ and points in the direction of steepest ascent (toward increasing values of $f$).<div class=\"step-divider\"></div><strong>Step 2 — Compute the Gradient Vector $\\nabla f(x, y)$:</strong><br>Given $f(x, y) = x^2 + xy + y^2$ and the level curve $x^2 + xy + y^2 = 7$, we differentiate $f(x, y)$ partially with respect to $x$ and $y$:$$f_x(x, y) = \\frac{\\partial}{\\partial x}\\left(x^2 + xy + y^2\\right) = 2x + y$$$$f_y(x, y) = \\frac{\\partial}{\\partial y}\\left(x^2 + xy + y^2\\right) = x + 2y$$Therefore, $\\nabla f(x, y) = \\langle 2x + y, \\; x + 2y \\rangle$.<div class=\"step-divider\"></div><strong>Step 3 — Evaluate the Gradient Vector at $P = (1, 2)$:</strong><br>First, verify that $P(1, 2)$ lies on the level curve: $1^2 + (1)(2) + 2^2 = 1 + 2 + 4 = 7$. Substituting $x = 1$ and $y = 2$ into $\\nabla f(x, y)$ yields the normal vector pointing toward increasing values of $f$:$$f_x(1, 2) = 2(1) + 2 = 4, \\qquad f_y(1, 2) = 1 + 2(2) = 5 \\implies \\nabla f(1, 2) = \\langle 4, 5 \\rangle$$<div class=\"step-divider\"></div><strong>Step 4 — Normalize $\\nabla f(1, 2)$ to Obtain the Required Unit Normal Vector:</strong><br>Computing the magnitude of $\\nabla f(1, 2) = \\langle 4, 5 \\rangle$ gives:$$\\|\\nabla f(1, 2)\\| = \\sqrt{4^2 + 5^2} = \\sqrt{16 + 25} = \\sqrt{41}$$Dividing $\\nabla f(1, 2)$ by its magnitude produces the unit normal vector pointing toward increasing values of $f$:$$\\mathbf{u} = \\frac{\\nabla f(1, 2)}{\\|\\nabla f(1, 2)\\|} = \\frac{\\langle 4, 5 \\rangle}{\\sqrt{41}}$$This exact vector expression matches $\\dfrac{\\langle 4, 5 \\rangle}{\\sqrt{41}}$, which corresponds to Choice <strong>(E)</strong>."
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
    "solution": "<strong>Step 1 — Formulate the General Equation of a Level Curve of $f(x, y)$:</strong><br>By definition, a level curve of the function $f(x, y) = \\ln(x - y)$ is the locus of all points $(x, y)$ in its domain ($x - y > 0$) where the function takes a constant real value $C$:$$f(x, y) = C \\iff \\ln(x - y) = C$$<div class=\"step-divider\"></div><strong>Step 2 — Determine the Constant $C$ Using the Given Point $(e, 0)$:</strong><br>Because the level curve passes through the point $(x, y) = (e, 0)$, the coordinates $x = e$ and $y = 0$ must satisfy the level curve equation $\\ln(x - y) = C$. Substituting $(e, 0)$ directly into the function gives:$$C = f(e, 0) = \\ln(e - 0) = \\ln(e) = 1$$Thus, the level curve passing through $(e, 0)$ corresponds to the constant level $C = 1$.<div class=\"step-divider\"></div><strong>Step 3 — Solve the Level Curve Equation Explicitly for $y$ in Slope-Intercept Form:</strong><br>Setting $\\ln(x - y) = 1$ and exponentiating both sides with base $e$ removes the logarithm:$$e^{\\ln(x - y)} = e^1 \\implies x - y = e$$Rearranging this linear equation to isolate $y$ on the left-hand side gives:$$y = x - e = 1 \\cdot x + (-e)$$<div class=\"step-divider\"></div><strong>Step 4 — Identify the Coefficients $A$ and $B$ and Compute $AB$:</strong><br>Comparing our explicit level curve equation $y = 1 \\cdot x + (-e)$ with the target linear form $y = Ax + B$, we read off the slope and $y$-intercept coefficients:$$A = 1, \\qquad B = -e$$Multiplying these two constants together yields the required product:$$AB = (1)(-e) = -e$$Thus, $AB = -e$, which corresponds to Choice <strong>(B)</strong>."
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
    "solution": "<strong>Step 1 — Rewrite the Quadric Surface Equation in Standard Form:</strong><br>We are given the quadric surface equation $4x^2 - 4y + z^2 = 0$. Isolating the linear variable term $4y$ on one side and dividing through by $4$ gives the standard equation:$$4y = 4x^2 + z^2 \\iff y = x^2 + \\frac{z^2}{4}$$Because one variable ($y$) is linear and the other two variables ($x$ and $z$) appear as squares with positive coefficients, this surface is an <strong>elliptic paraboloid</strong> with vertex at the origin $(0, 0, 0)$ opening along the positive $y$-axis (confirming Choice E is true).<div class=\"step-divider\"></div><strong>Step 2 — Verify the Traces in the Coordinate Planes and at $y = 1$:</strong><br>Let us inspect the cross-sectional traces described in Choices A, C, and D:<ul><li><strong>Trace in the $xz$-plane ($y = 0$):</strong> Setting $y = 0$ gives $4x^2 + z^2 = 0$, which is satisfied in $\\mathbb{R}^2$ only by the single point $(x, z) = (0, 0)$, the origin (so Choice A is true).</li><li><strong>Trace in the plane $y = 1$:</strong> Setting $y = 1$ gives $x^2 + \\frac{z^2}{4} = 1$, which is a standard ellipse with semi-axes $a = 1$ and $b = 2$ (so Choice C is true).</li><li><strong>Trace in the $xy$-plane ($z = 0$):</strong> Setting $z = 0$ gives $y = x^2$, which is a standard parabola (so Choice D is true).</li></ul><div class=\"step-divider\"></div><strong>Step 3 — Analyze the Trace in the Plane $y = -1$:</strong><br>Now we substitute $y = -1$ into the equation of the surface $4x^2 - 4y + z^2 = 0$:$$4x^2 - 4(-1) + z^2 = 0 \\iff 4x^2 + z^2 = -4$$<div class=\"step-divider\"></div><strong>Step 4 — Identify the False Statement Using Non-Negativity of Squares:</strong><br>For all real coordinates $x, z \\in \\mathbb{R}$, we have $x^2 \\ge 0$ and $z^2 \\ge 0$, which implies $4x^2 + z^2 \\ge 0$. Since a non-negative real quantity can never equal $-4$, the equation $4x^2 + z^2 = -4$ has no real solutions, meaning the trace in the plane $y = -1$ is the empty set $\\emptyset$, not an ellipse. Therefore, the statement that its trace in the plane $y = -1$ is an ellipse is FALSE, which corresponds to Choice <strong>(B)</strong>."
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
    "solution": "<strong>Step 1 — Set Up the System of Equations for the Intersection of $L_1$ and $L_2$:</strong><br>We are given two lines in $\\mathbb{R}^3$ parameterized by $t$ and $s$, respectively:$$L_1: \\quad x = 2 + 4t, \\qquad y = 3, \\qquad z = 1 - t$$$$L_2: \\quad x = 2 + 2s, \\qquad y = 3 + 2s, \\qquad z = 1 + s$$At the point of intersection $(a, b, c)$, the $x$-, $y$-, and $z$-coordinates of both lines must be equal simultaneously:$$\\begin{cases} 2 + 4t = 2 + 2s \\\\ 3 = 3 + 2s \\\\ 1 - t = 1 + s \\end{cases}$$<div class=\"step-divider\"></div><strong>Step 2 — Solve for the Parameters $s$ and $t$:</strong><br>From the second equation (equating the $y$-coordinates), we immediately solve for the parameter $s$:$$3 = 3 + 2s \\implies 2s = 0 \\implies s = 0$$Substituting $s = 0$ into the third equation (equating the $z$-coordinates) gives:$$1 - t = 1 + 0 \\implies t = 0$$Checking consistency in the first equation ($x$-coordinates): $2 + 4(0) = 2$ and $2 + 2(0) = 2$, which holds identically.<div class=\"step-divider\"></div><strong>Step 3 — Determine the Coordinates $(a, b, c)$ of the Intersection Point:</strong><br>Substituting $t = 0$ into $L_1$ (or equivalently $s = 0$ into $L_2$) yields the exact coordinates of the intersection point $(a, b, c)$:$$a = x = 2 + 4(0) = 2, \\qquad b = y = 3, \\qquad c = z = 1 - 0 = 1$$Thus, the two lines intersect at the point $(a, b, c) = (2, 3, 1)$.<div class=\"step-divider\"></div><strong>Step 4 — Compute the Product $abc$:</strong><br>Multiplying the three coordinates $a = 2$, $b = 3$, and $c = 1$ together gives:$$abc = (2)(3)(1) = 6$$Therefore, the product $abc$ equals $6$, which corresponds to Choice <strong>(E)</strong>."
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
    "solution": "<strong>Step 1 — Rewrite Both Parallel Planes with Identical Normal Vectors:</strong><br>We are given the two planes $\\Pi_1: x - 3y + 2z = 1$ and $\\Pi_2: 2x - 6y + 4z = 3$. Observing that the normal vector of $\\Pi_2$, $\\mathbf{n}_2 = \\langle 2, -6, 4 \\rangle = 2\\langle 1, -3, 2 \\rangle$, is a scalar multiple of the normal vector of $\\Pi_1$, $\\mathbf{n}_1 = \\langle 1, -3, 2 \\rangle$, we confirm that the planes are parallel. Multiplying the equation of $\\Pi_1$ by $2$ puts both planes into the shared normal form $Ax + By + Cz = D_i$:$$\\Pi_1: \\; 2x - 6y + 4z = 2 \\quad (D_1 = 2), \\qquad \\Pi_2: \\; 2x - 6y + 4z = 3 \\quad (D_2 = 3)$$<div class=\"step-divider\"></div><strong>Step 2 — Apply the Distance Formula Between Parallel Planes (or Point-to-Plane):</strong><br>The perpendicular distance $d$ between two parallel planes $Ax + By + Cz = D_1$ and $Ax + By + Cz = D_2$ is given by:$$d = \\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}}$$(Equivalently, choosing the point $P_0(1, 0, 0)$ on $\\Pi_1$ where $1 - 3(0) + 2(0) = 1$, its distance to $\\Pi_2: 2x - 6y + 4z - 3 = 0$ is $d = \\frac{|2(1) - 6(0) + 4(0) - 3|}{\\sqrt{2^2 + (-6)^2 + 4^2}}$.)<div class=\"step-divider\"></div><strong>Step 3 — Evaluate the Numerator and Radical Denominator:</strong><br>Substituting $D_1 = 2$, $D_2 = 3$, and $(A, B, C) = (2, -6, 4)$ into the distance formula gives:$$d = \\frac{|2 - 3|}{\\sqrt{2^2 + (-6)^2 + 4^2}} = \\frac{|-1|}{\\sqrt{4 + 36 + 16}} = \\frac{1}{\\sqrt{56}}$$Factoring $56 = 4 \\times 14$ inside the square root simplifies the denominator to $\\sqrt{56} = \\sqrt{4 \\times 14} = 2\\sqrt{14}$, so:$$d = \\frac{1}{2\\sqrt{14}}$$<div class=\"step-divider\"></div><strong>Step 4 — Rationalize the Denominator:</strong><br>Multiplying both the numerator and denominator of $\\dfrac{1}{2\\sqrt{14}}$ by $\\sqrt{14}$ yields the rationalized form:$$d = \\frac{1 \\cdot \\sqrt{14}}{2\\sqrt{14} \\cdot \\sqrt{14}} = \\frac{\\sqrt{14}}{2 \\times 14} = \\frac{\\sqrt{14}}{28}$$Thus, the distance between the parallel planes is $\\dfrac{\\sqrt{14}}{28}$, which corresponds to Choice <strong>(B)</strong>."
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
    "solution": "<strong>Step 1 — Examine the Component Functions of the Quotient $f(x, y, z)$:</strong><br>We are given the three-variable function:$$f(x, y, z) = \\frac{\\sin z}{e^x - e^y}$$By the algebra of continuous functions, a quotient $\\dfrac{g(x, y, z)}{h(x, y, z)}$ of two continuous functions is continuous at every point $(x, y, z) \\in \\mathbb{R}^3$ where the numerator $g$ and denominator $h$ are continuous and the denominator is non-zero ($h(x, y, z) \\neq 0$).<div class=\"step-divider\"></div><strong>Step 2 — Verify the Continuity of the Numerator and Denominator on $\\mathbb{R}^3$:</strong><br><ul><li>The numerator $g(x, y, z) = \\sin z$ is a basic trigonometric function of $z$, which is defined and continuous for all real numbers $z \\in (-\\infty, \\infty)$. (Note that $[-1, 1]$ is the <em>range</em> of $\\sin z$, not its domain!)</li><li>The denominator $h(x, y, z) = e^x - e^y$ is the difference of two exponential functions, which is defined and continuous for all $(x, y) \\in (-\\infty, \\infty) \\times (-\\infty, \\infty)$.</li></ul><div class=\"step-divider\"></div><strong>Step 3 — Determine Where the Denominator Vanishes:</strong><br>Setting the denominator equal to zero to identify the points of discontinuity gives:$$e^x - e^y = 0 \\iff e^x = e^y$$Because the natural exponential function $t \\mapsto e^t$ is strictly increasing and one-to-one on $(-\\infty, \\infty)$, taking the natural logarithm of both sides yields:$$\\ln(e^x) = \\ln(e^y) \\iff x = y$$<div class=\"step-divider\"></div><strong>Step 4 — State the Complete Set of Continuity:</strong><br>Excluding the plane $x = y$ where division by zero occurs, while leaving $z \\in (-\\infty, \\infty)$ completely unrestricted, the set of all points in $\\mathbb{R}^3$ where $f(x, y, z)$ is continuous is:$$\\left\\{ (x, y, z) \\;:\\; x \\neq y, \\quad z \\in (-\\infty, \\infty) \\right\\}$$This set matches $\\{(x, y, z) : x \\neq y, z \\in (-\\infty, \\infty)\\}$, which corresponds to Choice <strong>(C)</strong>."
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
    "solution": "<strong>Step 1 — Define the Implicit Surface Function $F(x, y, z) = 0$:</strong><br>We are given the implicit equation $z^3 - 2xy + 2yz + y^3 - 2 = 0$, which defines $z$ as a differentiable function of the independent variables $x$ and $y$. Let:$$F(x, y, z) = z^3 - 2xy + 2yz + y^3 - 2$$By the Implicit Function Theorem, the partial derivative of $z$ with respect to $y$ (holding $x$ constant) is given by:$$\\frac{\\partial z}{\\partial y} = -\\frac{F_y(x, y, z)}{F_z(x, y, z)}$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the Symbolic Partial Derivatives $F_y$ and $F_z$:</strong><br>Differentiating $F(x, y, z)$ partially with respect to $y$ while treating $x$ and $z$ as constants gives:$$F_y(x, y, z) = \\frac{\\partial}{\\partial y}\\left(z^3 - 2xy + 2yz + y^3 - 2\\right) = 0 - 2x + 2z + 3y^2 - 0 = -2x + 2z + 3y^2$$Differentiating $F(x, y, z)$ partially with respect to $z$ while treating $x$ and $y$ as constants gives:$$F_z(x, y, z) = \\frac{\\partial}{\\partial z}\\left(z^3 - 2xy + 2yz + y^3 - 2\\right) = 3z^2 - 0 + 2y + 0 - 0 = 3z^2 + 2y$$<div class=\"step-divider\"></div><strong>Step 3 — Evaluate $F_y$ and $F_z$ at the Given Point $(1, 1, 1)$:</strong><br>First, verify that $(1, 1, 1)$ satisfies the equation: $1^3 - 2(1)(1) + 2(1)(1) + 1^3 - 2 = 1 - 2 + 2 + 1 - 2 = 0$. Substituting $x = 1$, $y = 1$, and $z = 1$ into $F_y$ and $F_z$ yields:$$F_y(1, 1, 1) = -2(1) + 2(1) + 3(1)^2 = -2 + 2 + 3 = 3$$$$F_z(1, 1, 1) = 3(1)^2 + 2(1) = 3 + 2 = 5 \\neq 0$$<div class=\"step-divider\"></div><strong>Step 4 — Compute the Value of $\\dfrac{\\partial z}{\\partial y}$ at $(1, 1, 1)$:</strong><br>Substituting the evaluated partial derivatives $F_y(1, 1, 1) = 3$ and $F_z(1, 1, 1) = 5$ into the implicit derivative formula from Step 1 gives:$$\\left.\\frac{\\partial z}{\\partial y}\\right|_{(1, 1, 1)} = -\\frac{F_y(1, 1, 1)}{F_z(1, 1, 1)} = -\\frac{3}{5}$$Thus, the value of $\\dfrac{\\partial z}{\\partial y}$ at $(1, 1, 1)$ is $-\\dfrac{3}{5}$, which corresponds to Choice <strong>(E)</strong>."
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
    "solution": "<strong>Step 1 — Compute the First Partial Derivative with Respect to $x$:</strong><br>We are given the three-variable function $f(x, y, z) = y^2 e^{xz^2}$ and asked to find the mixed third-order partial derivative:$$\\frac{\\partial^3 f}{\\partial z \\, \\partial y \\, \\partial x} = \\frac{\\partial}{\\partial z}\\left[\\frac{\\partial}{\\partial y}\\left(\\frac{\\partial f}{\\partial x}\\right)\\right]$$First, differentiating $f(x, y, z) = y^2 e^{xz^2}$ with respect to $x$ while holding $y$ and $z$ constant (so $z^2$ acts as the constant coefficient of $x$ in the exponent) gives:$$\\frac{\\partial f}{\\partial x} = y^2 \\cdot \\frac{\\partial}{\\partial x}\\left(e^{xz^2}\\right) = y^2 z^2 e^{xz^2}$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the Second Mixed Partial Derivative with Respect to $y$:</strong><br>Next, we differentiate $\\dfrac{\\partial f}{\\partial x} = y^2 z^2 e^{xz^2}$ partially with respect to $y$ while holding $x$ and $z$ constant. Since $z^2 e^{xz^2}$ does not depend on $y$, we simply differentiate $y^2$ to get $2y$:$$\\frac{\\partial^2 f}{\\partial y \\, \\partial x} = \\frac{\\partial}{\\partial y}\\left(y^2 z^2 e^{xz^2}\\right) = 2y z^2 e^{xz^2}$$<div class=\"step-divider\"></div><strong>Step 3 — Apply the Product Rule and Chain Rule with Respect to $z$:</strong><br>Now we differentiate $2y z^2 e^{xz^2}$ partially with respect to $z$, holding $x$ and $y$ constant. Since both $z^2$ and $e^{xz^2}$ depend on $z$, we apply the Product Rule with $u(z) = z^2$ and $v(z) = e^{xz^2}$:$$\\frac{\\partial^3 f}{\\partial z \\, \\partial y \\, \\partial x} = 2y \\left[ \\frac{\\partial}{\\partial z}\\left(z^2\\right) \\cdot e^{xz^2} + z^2 \\cdot \\frac{\\partial}{\\partial z}\\left(e^{xz^2}\\right) \\right]$$By the Chain Rule, $\\frac{\\partial}{\\partial z}\\left(e^{xz^2}\\right) = e^{xz^2} \\cdot \\frac{\\partial}{\\partial z}(xz^2) = 2xz e^{xz^2}$. Substituting this in gives:$$\\frac{\\partial^3 f}{\\partial z \\, \\partial y \\, \\partial x} = 2y \\left[ 2z e^{xz^2} + z^2 (2xz e^{xz^2}) \\right] = 2y \\left(2z + 2xz^3\\right) e^{xz^2}$$<div class=\"step-divider\"></div><strong>Step 4 — Factor Out Common Terms to Match the Standard Form:</strong><br>Factoring $2z$ out of $(2z + 2xz^3) = 2z(1 + xz^2)$ and multiplying by the leading $2y$ yields:$$\\frac{\\partial^3 f}{\\partial z \\, \\partial y \\, \\partial x} = 2y \\cdot 2z(xz^2 + 1) e^{xz^2} = 4yz(xz^2 + 1)e^{xz^2}$$This simplified expression matches $4yz(xz^2 + 1)e^{xz^2}$, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Construct the Parametric Equations of the Perpendicular Line:</strong><br>We are given the plane $x + 2y - z = -9$, whose normal vector can be read directly from the coefficients of $x, y, z$ as:$$\\mathbf{n} = \\langle 1, 2, -1 \\rangle$$Because the line passing through $P_0(2, -1, 3)$ is perpendicular (normal) to this plane, its direction vector $\\mathbf{v}$ is parallel to $\\mathbf{n}$, so we take $\\mathbf{v} = \\langle 1, 2, -1 \\rangle$. The parametric equations of the line are therefore:$$x(t) = 2 + t, \\qquad y(t) = -1 + 2t, \\qquad z(t) = 3 - t$$<div class=\"step-divider\"></div><strong>Step 2 — Substitute the Parametric Equations into the Plane Equation to Find $t$:</strong><br>At the point of intersection $(a, b, c)$, the coordinates $(x(t), y(t), z(t))$ must satisfy the plane equation $x + 2y - z = -9$. Substituting the parametric expressions gives:$$(2 + t) + 2(-1 + 2t) - (3 - t) = -9$$Expanding and combining like terms on the left-hand side yields:$$2 + t - 2 + 4t - 3 + t = -9 \\implies 6t - 3 = -9 \\implies 6t = -6 \\implies t = -1$$<div class=\"step-divider\"></div><strong>Step 3 — Compute the Coordinates $(a, b, c)$ of the Intersection Point:</strong><br>Substituting the parameter value $t = -1$ back into the parametric equations of the line from Step 1 gives the coordinates $(a, b, c)$:$$a = x(-1) = 2 + (-1) = 1$$$$b = y(-1) = -1 + 2(-1) = -1 - 2 = -3$$$$c = z(-1) = 3 - (-1) = 3 + 1 = 4$$(Checking in the plane equation: $1 + 2(-3) - 4 = 1 - 6 - 4 = -9$, confirming $(1, -3, 4)$ lies on the plane.)<div class=\"step-divider\"></div><strong>Step 4 — Calculate the Product $abc$:</strong><br>Multiplying the three coordinates $a = 1$, $b = -3$, and $c = 4$ together yields:$$abc = (1)(-3)(4) = -12$$Thus, $abc = -12$, which corresponds to Choice <strong>(B)</strong>."
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
    "solution": "<strong>Step 1 — State the Total Differential Formula and Compute Partial Derivatives:</strong><br>We are given the two-variable function $z = f(x, y) = xy + \\frac{y}{x} = xy + yx^{-1}$. For small increments $dx = \\Delta x$ and $dy = \\Delta y$, the change in $z$ is approximated by the total differential:$$dz = \\frac{\\partial z}{\\partial x}\\,dx + \\frac{\\partial z}{\\partial y}\\,dy$$Differentiating $z = xy + yx^{-1}$ partially with respect to $x$ (holding $y$ constant) and with respect to $y$ (holding $x$ constant) gives:$$\\frac{\\partial z}{\\partial x} = y - \\frac{y}{x^2}, \\qquad \\frac{\\partial z}{\\partial y} = x + \\frac{1}{x}$$<div class=\"step-divider\"></div><strong>Step 2 — Evaluate Both Partial Derivatives at the Initial Point $(2, 1)$:</strong><br>Substituting the starting coordinates $x = 2$ and $y = 1$ into the partial derivative formulas from Step 1 yields:$$z_x(2, 1) = \\left.\\frac{\\partial z}{\\partial x}\\right|_{(2, 1)} = 1 - \\frac{1}{2^2} = 1 - \\frac{1}{4} = \\frac{3}{4}$$$$z_y(2, 1) = \\left.\\frac{\\partial z}{\\partial y}\\right|_{(2, 1)} = 2 + \\frac{1}{2} = \\frac{5}{2}$$<div class=\"step-divider\"></div><strong>Step 3 — Determine the Coordinate Differentials $dx$ and $dy$:</strong><br>As the point $(x, y)$ moves from $(2, 1)$ to $(2.1, 1.05)$, the coordinate increments are:$$dx = \\Delta x = 2.1 - 2 = 0.1 = \\frac{1}{10}, \\qquad dy = \\Delta y = 1.05 - 1 = 0.05 = \\frac{1}{20}$$<div class=\"step-divider\"></div><strong>Step 4 — Compute the Total Differential $dz$ and Simplify the Fraction:</strong><br>Substituting $z_x(2, 1) = \\frac{3}{4}$, $z_y(2, 1) = \\frac{5}{2}$, $dx = \\frac{1}{10}$, and $dy = \\frac{1}{20}$ into the total differential formula gives:$$dz = \\frac{3}{4}\\left(\\frac{1}{10}\\right) + \\frac{5}{2}\\left(\\frac{1}{20}\\right) = \\frac{3}{40} + \\frac{5}{40} = \\frac{8}{40} = \\frac{1}{5}$$Therefore, the approximate change in $z$ is $\\dfrac{1}{5}$, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Formulate the Two-Variable Chain Rule for $\\dfrac{\\partial z}{\\partial t}$:</strong><br>We are given $z = \\tan^{-1}\\left(\\frac{x}{y}\\right)$ where $x = te^s$ and $y = s\\ln t$. By the multivariable Chain Rule, the partial derivative of $z$ with respect to $t$ (holding $s$ constant) is:$$\\frac{\\partial z}{\\partial t} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial t} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial t}$$<div class=\"step-divider\"></div><strong>Step 2 — Evaluate the Intermediate Coordinates and Parameter Derivatives at $(s, t) = (1, e)$:</strong><br>At the given parameter pair $(s, t) = (1, e)$, the values of $x$ and $y$ are:$$x(1, e) = e \\cdot e^1 = e^2, \\qquad y(1, e) = 1 \\cdot \\ln(e) = 1 \\cdot 1 = 1$$Next, we differentiate $x = te^s$ and $y = s\\ln t$ partially with respect to $t$ and evaluate at $(s, t) = (1, e)$:$$\\frac{\\partial x}{\\partial t} = e^s \\implies \\left.\\frac{\\partial x}{\\partial t}\\right|_{(1, e)} = e^1 = e, \\qquad \\frac{\\partial y}{\\partial t} = \\frac{s}{t} \\implies \\left.\\frac{\\partial y}{\\partial t}\\right|_{(1, e)} = \\frac{1}{e}$$<div class=\"step-divider\"></div><strong>Step 3 — Compute and Evaluate $\\dfrac{\\partial z}{\\partial x}$ and $\\dfrac{\\partial z}{\\partial y}$ at $(x, y) = (e^2, 1)$:</strong><br>Using the derivative formula $\\frac{d}{du}[\\tan^{-1}(u)] = \\frac{1}{1 + u^2}$ with $u = \\frac{x}{y}$, we obtain:$$\\frac{\\partial z}{\\partial x} = \\frac{1}{1 + (x/y)^2} \\cdot \\frac{1}{y} = \\frac{y}{x^2 + y^2}, \\qquad \\frac{\\partial z}{\\partial y} = \\frac{1}{1 + (x/y)^2} \\cdot \\left(-\\frac{x}{y^2}\\right) = \\frac{-x}{x^2 + y^2}$$At $(x, y) = (e^2, 1)$, we have $x^2 + y^2 = (e^2)^2 + 1^2 = e^4 + 1$, so:$$\\left.\\frac{\\partial z}{\\partial x}\\right|_{(e^2, 1)} = \\frac{1}{e^4 + 1}, \\qquad \\left.\\frac{\\partial z}{\\partial y}\\right|_{(e^2, 1)} = \\frac{-e^2}{e^4 + 1}$$<div class=\"step-divider\"></div><strong>Step 4 — Combine All Terms via the Chain Rule:</strong><br>Substituting the values from Steps 2 and 3 into the Chain Rule equation from Step 1 yields:$$\\left.\\frac{\\partial z}{\\partial t}\\right|_{(1, e)} = \\left(\\frac{1}{e^4 + 1}\\right)(e) + \\left(\\frac{-e^2}{e^4 + 1}\\right)\\left(\\frac{1}{e}\\right) = \\frac{e}{e^4 + 1} - \\frac{e}{e^4 + 1} = 0$$Thus, the value of $\\dfrac{\\partial z}{\\partial t}$ when $(s, t) = (1, e)$ is $0$, which corresponds to Choice <strong>(B)</strong>."
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
    "solution": "<strong>Step 1 — Decompose the Function into an Inner Product and Outer Exponential:</strong><br>We want to determine the exact range (set of all possible output values) of the two-variable function:$$f(x, y) = 2e^{xy}$$defined on its natural domain $\\operatorname{Dom}(f) = \\mathbb{R}^2$. We can view $f(x, y)$ as the composition $g(u) = 2e^u$, where the inner variable is the product $u = xy$.<div class=\"step-divider\"></div><strong>Step 2 — Determine the Range of the Inner Product $u = xy$ over $\\mathbb{R}^2$:</strong><br>As $(x, y)$ ranges over all pairs of real numbers in $\\mathbb{R}^2$, the product $u = xy$ takes every real value in $(-\\infty, \\infty)$. Specifically, for any real number $c \\in (-\\infty, \\infty)$, choosing $(x, y) = (c, 1) \\in \\mathbb{R}^2$ gives $xy = c \\cdot 1 = c$. Therefore:$$\\operatorname{Range}(xy) = (-\\infty, \\infty)$$<div class=\"step-divider\"></div><strong>Step 3 — Analyze the Image of $(-\\infty, \\infty)$ Under the Exponential Function $e^u$:</strong><br>The natural exponential function $u \\mapsto e^u$ is continuous, strictly increasing, and strictly positive ($e^u > 0$ for all $u \\in \\mathbb{R}$), with asymptotic and growth limits:$$\\lim_{u \\to -\\infty} e^u = 0^+, \\qquad \\lim_{u \\to +\\infty} e^u = +\\infty$$By the Intermediate Value Theorem, as $u$ sweeps across $(-\\infty, \\infty)$, the quantity $e^u$ takes every positive real value in the open interval $(0, \\infty)$.<div class=\"step-divider\"></div><strong>Step 4 — Scale by the Positive Constant Factor $2$:</strong><br>Multiplying every value in the open interval $(0, \\infty)$ by the positive constant $2$ maps $(0, \\infty)$ onto $(2 \\cdot 0, \\; 2 \\cdot \\infty) = (0, \\infty)$:$$2e^{xy} > 0 \\quad \\text{for all } (x, y) \\in \\mathbb{R}^2, \\qquad \\operatorname{Range}(f) = (0, \\infty)$$Thus, the range of $f(x, y) = 2e^{xy}$ is $(0, \\infty)$, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Extract a Point and the Direction Vectors from Both Symmetric Line Equations:</strong><br>We write both lines in standard symmetric form $\\frac{x - x_0}{v_x} = \\frac{y - y_0}{v_y} = \\frac{z - z_0}{v_z}$:<ul><li><strong>Line 1:</strong> $\\dfrac{x - 1}{-2} = \\dfrac{y - 4}{1} = \\dfrac{z - 0}{1}$ passes through the point $P_1(1, 4, 0)$ with direction vector $\\mathbf{v}_1 = \\langle -2, 1, 1 \\rangle$.</li><li><strong>Line 2:</strong> $\\dfrac{x - 2}{-3} = \\dfrac{y - 1}{4} = \\dfrac{z - 2}{-1}$ passes through $P_2(2, 1, 2)$ with direction vector $\\mathbf{v}_2 = \\langle -3, 4, -1 \\rangle$.</li></ul><div class=\"step-divider\"></div><strong>Step 2 — Compute the Normal Vector of the Plane Using the Cross Product:</strong><br>Because the plane contains both lines $L_1$ and $L_2$, its normal vector $\\mathbf{n}$ must be perpendicular to both direction vectors $\\mathbf{v}_1$ and $\\mathbf{v}_2$. Taking their cross product gives:$$\\mathbf{n} = \\mathbf{v}_1 \\times \\mathbf{v}_2 = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ -2 & 1 & 1 \\\\ -3 & 4 & -1 \\end{vmatrix}$$Expanding the determinant along the first row yields:$$\\mathbf{n} = \\mathbf{i}\\big((1)(-1) - (1)(4)\\big) - \\mathbf{j}\\big((-2)(-1) - (1)(-3)\\big) + \\mathbf{k}\\big((-2)(4) - (1)(-3)\\big)$$$$\\mathbf{n} = \\mathbf{i}(-1 - 4) - \\mathbf{j}(2 + 3) + \\mathbf{k}(-8 + 3) = \\langle -5, -5, -5 \\rangle$$<div class=\"step-divider\"></div><strong>Step 3 — Formulate the Plane Equation Normalized with Leading Coefficient $1$:</strong><br>Using the point $P_1(1, 4, 0)$ on the plane and dividing the normal vector $\\langle -5, -5, -5 \\rangle$ by $-5$ to obtain $\\mathbf{n}_{\\text{unit-x}} = \\langle 1, 1, 1 \\rangle$ (matching the leading $1x$ in $x + by + cz = d$), the point-normal equation of the plane is:$$1(x - 1) + 1(y - 4) + 1(z - 0) = 0 \\iff x + y + z = 5$$(Checking $P_2(2, 1, 2)$ confirms $2 + 1 + 2 = 5$, verifying both lines lie in this plane.)<div class=\"step-divider\"></div><strong>Step 4 — Identify $b, c, d$ and Compute the Sum $b + c + d$:</strong><br>Comparing our normalized plane equation $x + 1y + 1z = 5$ directly with the given template $x + by + cz = d$, we identify the unique coefficients:$$b = 1, \\qquad c = 1, \\qquad d = 5$$Summing these three constants yields:$$b + c + d = 1 + 1 + 5 = 7$$Therefore, $b + c + d = 7$, which corresponds to Choice <strong>(A)</strong>."
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
    "solution": "<strong>Step 1 — Simplify the Function $f(x, y)$ Using Logarithm Laws:</strong><br>Before differentiating $f(x, y) = \\ln\\left(\\frac{x + y}{x - y}\\right)$, we apply the quotient property of logarithms $\\ln\\left(\\frac{A}{B}\\right) = \\ln A - \\ln B$ (for $\\frac{x+y}{x-y} > 0$) to decompose $f(x, y)$ into a difference of two simple logarithmic terms:$$f(x, y) = \\ln(x + y) - \\ln(x - y)$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the First-Order Partial Derivative $f_x(x, y)$:</strong><br>Differentiating $f(x, y) = \\ln(x + y) - \\ln(x - y)$ partially with respect to $x$ while holding $y$ constant gives:$$f_x(x, y) = \\frac{\\partial}{\\partial x}\\big[\\ln(x + y) - \\ln(x - y)\\big] = \\frac{1}{x + y} \\cdot (1) - \\frac{1}{x - y} \\cdot (1)$$Combining these two fractions over the common denominator $(x + y)(x - y) = x^2 - y^2$ yields:$$f_x(x, y) = \\frac{(x - y) - (x + y)}{x^2 - y^2} = \\frac{-2y}{x^2 - y^2}$$<div class=\"step-divider\"></div><strong>Step 3 — Compute the First-Order Partial Derivative $f_y(x, y)$:</strong><br>Differentiating $f(x, y) = \\ln(x + y) - \\ln(x - y)$ partially with respect to $y$ while holding $x$ constant (noting that $\\frac{\\partial}{\\partial y}(x - y) = -1$ by the Chain Rule) gives:$$f_y(x, y) = \\frac{\\partial}{\\partial y}\\big[\\ln(x + y) - \\ln(x - y)\\big] = \\frac{1}{x + y} \\cdot (1) - \\frac{1}{x - y} \\cdot (-1) = \\frac{1}{x + y} + \\frac{1}{x - y}$$Combining over the common denominator $x^2 - y^2$ yields:$$f_y(x, y) = \\frac{(x - y) + (x + y)}{x^2 - y^2} = \\frac{2x}{x^2 - y^2}$$<div class=\"step-divider\"></div><strong>Step 4 — Substitute $f_x$ and $f_y$ into $x f_y(x, y) + y f_x(x, y)$ and Simplify:</strong><br>Substituting our expressions from Steps 2 and 3 into the target combination $x f_y(x, y) + y f_x(x, y)$ gives:$$x f_y(x, y) + y f_x(x, y) = x\\left(\\frac{2x}{x^2 - y^2}\\right) + y\\left(\\frac{-2y}{x^2 - y^2}\\right) = \\frac{2x^2 - 2y^2}{x^2 - y^2} = \\frac{2(x^2 - y^2)}{x^2 - y^2} = 2$$Thus, $x f_y(x, y) + y f_x(x, y) = 2$, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Reduce to a Single-Variable Limit via Radial Substitution:</strong><br>Observe that in the multivariable limit:$$\\lim_{(x, y) \\to (0, 0)} \\left[ \\frac{1}{\\ln(1 + x^2 + y^2)} - \\frac{1}{x^2 + y^2} \\right]$$the coordinates $(x, y)$ appear exclusively in the radial combination $w = x^2 + y^2$. As $(x, y) \\to (0, 0)$ along any path with $(x, y) \\neq (0, 0)$, the quantity $w = x^2 + y^2$ approaches $0^+$ through strictly positive values. Combining the two fractions over a common denominator gives:$$L = \\lim_{w \\to 0^+} \\left[ \\frac{1}{\\ln(1 + w)} - \\frac{1}{w} \\right] = \\lim_{w \\to 0^+} \\frac{w - \\ln(1 + w)}{w\\ln(1 + w)}$$<div class=\"step-divider\"></div><strong>Step 2 — Verify the $\\frac{0}{0}$ Indeterminate Form and Apply L'Hôpital's Rule (First Time):</strong><br>As $w \\to 0^+$, both the numerator $w - \\ln(1 + w) \\to 0 - 0 = 0$ and the denominator $w\\ln(1 + w) \\to 0 \\cdot 0 = 0$, giving an indeterminate form of type $\\frac{0}{0}$. Differentiating numerator and denominator with respect to $w$ yields:$$L = \\lim_{w \\to 0^+} \\frac{1 - \\frac{1}{1 + w}}{1 \\cdot \\ln(1 + w) + w \\cdot \\frac{1}{1 + w}} = \\lim_{w \\to 0^+} \\frac{\\frac{w}{1 + w}}{\\ln(1 + w) + \\frac{w}{1 + w}}$$Multiplying both numerator and denominator by $(1 + w)$ simplifies the fraction to:$$L = \\lim_{w \\to 0^+} \\frac{w}{(1 + w)\\ln(1 + w) + w}$$<div class=\"step-divider\"></div><strong>Step 3 — Apply L'Hôpital's Rule a Second Time (or Maclaurin Expansion):</strong><br>As $w \\to 0^+$, the expression $\\dfrac{w}{(1 + w)\\ln(1 + w) + w}$ is still indeterminate of type $\\frac{0}{0}$. Differentiating numerator and denominator a second time with respect to $w$ gives:$$L = \\lim_{w \\to 0^+} \\frac{1}{1 \\cdot \\ln(1 + w) + (1 + w)\\cdot \\frac{1}{1 + w} + 1} = \\lim_{w \\to 0^+} \\frac{1}{\\ln(1 + w) + 1 + 1}$$<div class=\"step-divider\"></div><strong>Step 4 — Evaluate the Final Limit (and Confirm via Taylor Series):</strong><br>Substituting $w = 0$ into the continuous denominator $\\ln(1 + w) + 2$ yields:$$L = \\frac{1}{\\ln(1 + 0) + 2} = \\frac{1}{0 + 2} = \\frac{1}{2}$$(Confirmation via Maclaurin series: since $\\ln(1 + w) = w - \\frac{w^2}{2} + O(w^3)$, we have $\\frac{w - (w - w^2/2 + O(w^3))}{w(w + O(w^2))} = \\frac{w^2/2 + O(w^3)}{w^2 + O(w^3)} \\to \\frac{1}{2}$.) Thus, the limit equals $\\dfrac{1}{2}$, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Group Variables and Complete the Square in $x$ and $z$:</strong><br>We are given the second-degree equation in $x, y, z$:$$x^2 + 2y^2 - z^2 + 2x + 6z = k^2 + k + 8$$Grouping the $x$-terms and factoring $-1$ from the $z$-terms so we can complete both squares gives:$$(x^2 + 2x) + 2y^2 - (z^2 - 6z) = k^2 + k + 8$$Adding $(1)^2 = 1$ inside the $x$-group and subtracting $(3)^2 = 9$ (since $-1 \\times 9 = -9$) to both sides of the equation yields:$$(x^2 + 2x + 1) + 2y^2 - (z^2 - 6z + 9) = k^2 + k + 8 + 1 - 9$$<div class=\"step-divider\"></div><strong>Step 2 — Simplify the Shifted Quadric Equation:</strong><br>Writing the completed trinomials as perfect squares and canceling $8 + 1 - 9 = 0$ on the right-hand side reduces the equation to:$$(x + 1)^2 + 2y^2 - (z - 3)^2 = k^2 + k = k(k + 1)$$This represents a quadric surface centered at $(-1, 0, 3)$ whose classification depends entirely on the sign of the right-hand constant $C(k) = k(k + 1)$.<div class=\"step-divider\"></div><strong>Step 3 — Analyze the Sign of $k(k + 1)$ Across Different Intervals of $k$:</strong><br>The quadratic polynomial $C(k) = k(k + 1)$ has roots at $k = -1$ and $k = 0$:<ul><li><strong>Case 1 ($k = -1$ or $k = 0$):</strong> $k(k + 1) = 0$, so $(x + 1)^2 + 2y^2 - (z - 3)^2 = 0$, which is an <em>elliptic cone</em> (ruling out Choice C).</li><li><strong>Case 2 ($k < -1$ or $k > 0$):</strong> $k(k + 1) > 0$. Dividing by $k(k + 1) > 0$ gives two positive squared terms and one negative squared term equal to $+1$, which is a <em>hyperboloid of one sheet</em> (ruling out Choices B and E).</li><li><strong>Case 3 ($-1 < k < 0$):</strong> Here $k < 0$ and $k + 1 > 0$, so their product is strictly negative: $k(k + 1) = -M$ with $M > 0$.</li></ul><div class=\"step-divider\"></div><strong>Step 4 — Put the Negative Constant Case into Canonical Form and Classify:</strong><br>When $-1 < k < 0$, dividing both sides of $(x + 1)^2 + 2y^2 - (z - 3)^2 = -M$ (where $M = -k(k+1) > 0$) by $-M$ yields:$$-\\frac{(x + 1)^2}{M} - \\frac{2y^2}{M} + \\frac{(z - 3)^2}{M} = 1$$Because the canonical equation with $+1$ on the right-hand side has <strong>two negative squared terms and one positive squared term</strong>, the graph is <strong>a hyperboloid of two sheets if $-1 < k < 0$</strong>, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Extract the Normal Vector of the Given Plane:</strong><br>\nA general linear equation of a plane in three-dimensional space has the standard form $Ax + By + Cz = D$, where the nonzero vector $\\vec{n} = \\langle A, B, C \\rangle$ is orthogonal (normal) to every vector lying in the plane. For the given plane\n$$3x + 2y - z = 6$$\nwe read the coefficients of $x$, $y$, and $z$ directly to obtain its normal vector:\n$$\\vec{n} = \\langle 3, 2, -1 \\rangle$$<div class=\"step-divider\"></div><strong>Step 2 — Relate the Plane's Normal Vector to the Line's Direction Vector:</strong><br>\nThe problem states that the line passes through the point $P_0(2, 3, 4)$ and is <em>perpendicular</em> to the plane $3x + 2y - z = 6$. A line is perpendicular to a plane if and only if the direction vector $\\vec{v}$ of the line is parallel (collinear) to the normal vector $\\vec{n}$ of the plane. That is, there exists a nonzero scalar $\\lambda \\in \\mathbb{R}$ such that\n$$\\vec{v} = \\lambda \\vec{n} = \\langle 3\\lambda, 2\\lambda, -\\lambda \\rangle$$<div class=\"step-divider\"></div><strong>Step 3 — Match the Parametric Equations to Determine $a$ and $b$:</strong><br>\nFrom the given parametric equations of the line passing through $(2, 3, 4)$,\n$$x = 2 + at, \\qquad y = 3 + bt, \\qquad z = 4 - t$$\nthe direction vector is formed by the coefficients of the parameter $t$:\n$$\\vec{v} = \\langle a, b, -1 \\rangle$$\nEquating $\\vec{v} = \\langle a, b, -1 \\rangle$ with $\\langle 3\\lambda, 2\\lambda, -\\lambda \\rangle$ component by component gives:\n$$-\\lambda = -1 \\implies \\lambda = 1$$\nSubstituting $\\lambda = 1$ into the first two components yields:\n$$a = 3(1) = 3, \\qquad b = 2(1) = 2$$<div class=\"step-divider\"></div><strong>Step 4 — Compute the Required Sum $a + b$:</strong><br>\nAdding the values of $a$ and $b$ found in Step 3 gives:\n$$a + b = 3 + 2 = 5$$\nTherefore, the value of $a + b$ is $5$, which corresponds to Choice <strong>(B)</strong>."
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
    "solution": "<strong>Step 1 — Group Like Variables to Prepare for Completing the Square:</strong><br>\nTo classify the quadric surface represented by $x^2 - 2y^2 + z^2 - 4x + 4y - 6z = k$, we first group terms involving $x$, $y$, and $z$ separately and factor out the leading coefficient $-2$ from the $y$-terms:\n$$(x^2 - 4x) - 2(y^2 - 2y) + (z^2 - 6z) = k$$<div class=\"step-divider\"></div><strong>Step 2 — Complete the Square in $x$, $y$, and $z$:</strong><br>\nWe add the appropriate constant inside each parenthesis to form perfect square trinomials, and add the exact same net amounts to the right-hand side:\n$$\\underbrace{(x^2 - 4x + 4)}_{(x - 2)^2} - 2\\underbrace{(y^2 - 2y + 1)}_{(y - 1)^2} + \\underbrace{(z^2 - 6z + 9)}_{(z - 3)^2} = k + 4 - 2(1) + 9$$\nSimplifying both sides yields the translated standard form centered at $(2, 1, 3)$:\n$$(x - 2)^2 - 2(y - 1)^2 + (z - 3)^2 = k + 11$$<div class=\"step-divider\"></div><strong>Step 3 — Classify the Quadric Surface Based on the Right-Hand Side $k + 11$:</strong><br>\nNotice that the left-hand side has two positive squared terms, $(x - 2)^2$ and $(z - 3)^2$, and one negative squared term, $-2(y - 1)^2$:\n<ul>\n<li>If $k + 11 > 0$ (i.e., $k > -11$), dividing by $k + 11 > 0$ gives two positive and one negative squared term equal to $1$, which is a <strong>hyperboloid of one sheet</strong>.</li>\n<li>If $k + 11 < 0$ (i.e., $k < -11$), dividing by $k + 11 < 0$ flips the signs to one positive and two negative squared terms equal to $1$, which is a <strong>hyperboloid of two sheets</strong>.</li>\n<li>If $k + 11 = 0$ (i.e., $k = -11$), the right-hand side vanishes and we obtain $(x - 2)^2 + (z - 3)^2 = 2(y - 1)^2$, or $\\frac{(x-2)^2}{2} + \\frac{(z-3)^2}{2} = (y-1)^2$, which is an <strong>elliptic (circular) cone</strong> with vertex at $(2, 1, 3)$ opening along the line $x=2, z=3$ parallel to the $y$-axis.</li>\n</ul><div class=\"step-divider\"></div><strong>Step 4 — Check Each Choice Against the Classification Rules:</strong><br>\nTesting the given options:\n<ul>\n<li>(A) $k = -20 \\implies k + 11 = -9 < 0$ (hyperboloid of two sheets, not one sheet).</li>\n<li>(B) $k = -11 \\implies k + 11 = 0$ (an <strong>elliptic cone</strong> — True!).</li>\n<li>(C) $k = 0 \\implies k + 11 = 11 > 0$ (hyperboloid of one sheet, not two sheets).</li>\n<li>(D) $k = 20 \\implies k + 11 = 31 > 0$ (hyperboloid of one sheet, not a cone).</li>\n<li>(E) Because the $y^2$ coefficient is negative, the surface is never an ellipsoid for any $k$.</li>\n</ul>\nThus, the equation represents an elliptic cone if $k = -11$, which corresponds to Choice <strong>(B)</strong>."
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
    "solution": "<strong>Step 1 — State the Implicit Differentiation Formula for $z = z(x, y)$:</strong><br>\nWe are given the equation $3x^2 z - x^2 y^2 + 2z^3 + 3yz - 5 = 0$, which defines $z$ implicitly as a differentiable function of $x$ and $y$. Let\n$$F(x, y, z) = 3x^2 z - x^2 y^2 + 2z^3 + 3yz - 5 = 0$$\nBy the Implicit Function Theorem, whenever $F_z \\neq 0$, the partial derivative of $z$ with respect to $x$ is given by:\n$$\\frac{\\partial z}{\\partial x} = -\\frac{F_x(x, y, z)}{F_z(x, y, z)}$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the Partial Derivative $F_x(x, y, z)$:</strong><br>\nDifferentiating $F(x, y, z)$ partially with respect to $x$ while treating both $y$ and $z$ as constants gives:\n$$F_x = \\frac{\\partial}{\\partial x}\\left(3x^2 z - x^2 y^2 + 2z^3 + 3yz - 5\\right) = 6xz - 2xy^2 + 0 + 0 - 0$$\nFactoring out the common factor $2x$ yields:\n$$F_x = 2x(3z - y^2)$$<div class=\"step-divider\"></div><strong>Step 3 — Compute the Partial Derivative $F_z(x, y, z)$:</strong><br>\nNext, differentiating $F(x, y, z)$ partially with respect to $z$ while treating both $x$ and $y$ as constants gives:\n$$F_z = \\frac{\\partial}{\\partial z}\\left(3x^2 z - x^2 y^2 + 2z^3 + 3yz - 5\\right) = 3x^2 - 0 + 6z^2 + 3y - 0$$\nFactoring out the common factor $3$ from all three terms yields:\n$$F_z = 3(x^2 + 2z^2 + y)$$<div class=\"step-divider\"></div><strong>Step 4 — Substitute into the Quotient and Simplify the Sign:</strong><br>\nSubstituting $F_x$ and $F_z$ into the implicit derivative formula from Step 1 gives:\n$$\\frac{\\partial z}{\\partial x} = -\\frac{2x(3z - y^2)}{3(x^2 + 2z^2 + y)}$$\nAbsorbing the leading negative sign into the parenthetical factor $(3z - y^2)$ reverses the subtraction to $(y^2 - 3z)$:\n$$\\frac{\\partial z}{\\partial x} = \\frac{2x(y^2 - 3z)}{3(x^2 + 2z^2 + y)}$$\nThis simplified expression corresponds to Choice <strong>(B)</strong>."
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
    "solution": "<strong>Step 1 — Identify the Domain and Inner Argument of the Function:</strong><br>\nConsider the two-variable function $f(x, y) = \\ln(25 - x^2 - y^2)$. Let us denote the inner quadratic argument by\n$$u(x, y) = 25 - (x^2 + y^2)$$\nBecause the natural logarithm $\\ln(u)$ is real-valued if and only if its argument $u$ is strictly positive, the natural domain of $f$ is the open disk of radius $5$ centered at the origin:\n$$D = \\{(x, y) \\in \\mathbb{R}^2 : 25 - (x^2 + y^2) > 0\\} = \\{(x, y) \\in \\mathbb{R}^2 : x^2 + y^2 < 25\\}$$<div class=\"step-divider\"></div><strong>Step 2 — Determine the Set of Values Taken by the Inner Argument $u$:</strong><br>\nFor every point $(x, y) \\in D$, the sum of squares satisfies $0 \\le x^2 + y^2 < 25$.\n<ul>\n<li>The <strong>maximum</strong> value of $u = 25 - (x^2 + y^2)$ occurs at the origin $(0, 0)$ where $x^2 + y^2 = 0$, giving $u_{\\max} = 25 - 0 = 25$.</li>\n<li>As $(x, y)$ approaches the boundary circle $x^2 + y^2 = 25$ from inside the disk, $x^2 + y^2 \\to 25^-$, so $u \\to 0^+$.</li>\n</ul>\nBy continuity and connectedness of the disk $D$, the inner argument $u$ takes every value in the half-open interval $(0, 25]$.<div class=\"step-divider\"></div><strong>Step 3 — Map the Interval $(0, 25]$ Through the Strictly Increasing Function $\\ln(u)$:</strong><br>\nSince the natural logarithm $g(u) = \\ln u$ is continuous and strictly increasing on $(0, \\infty)$, it maps the interval $u \\in (0, 25]$ onto the interval\n$$\\left(\\lim_{u \\to 0^+} \\ln u,\\; \\ln(25)\\right]$$<div class=\"step-divider\"></div><strong>Step 4 — Simplify the Upper Endpoint Using Logarithm Laws:</strong><br>\nRecall that $\\lim_{u \\to 0^+} \\ln u = -\\infty$, and by the power rule for logarithms ($\\ln(a^b) = b\\ln a$), the upper endpoint simplifies to:\n$$\\ln(25) = \\ln(5^2) = 2\\ln 5$$\nConsequently, the range of $f(x, y) = \\ln(25 - x^2 - y^2)$ is the interval $(-\\infty, 2\\ln 5]$, which corresponds to Choice <strong>(E)</strong>."
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
    "solution": "<strong>Step 1 — Rewrite the Surface in Implicit Level-Surface Form:</strong><br>\nThe given surface is defined explicitly by $z = y e^{2xy}$. To find a normal vector to this surface at the point $P_0(0, 2, 2)$, we rewrite the equation as the level surface $F(x, y, z) = 0$:\n$$F(x, y, z) = y e^{2xy} - z = 0$$\nWait: let us verify that $P_0(0, 2, 2)$ lies on the surface: $F(0, 2, 2) = 2 e^{2(0)(2)} - 2 = 2(1) - 2 = 0$.<div class=\"step-divider\"></div><strong>Step 2 — Compute the Gradient Vector $\\nabla F(x, y, z)$ and Evaluate at $(0, 2, 2)$:</strong><br>\nThe gradient $\\nabla F = \\langle F_x, F_y, F_z \\rangle$ is normal to the surface $F(x, y, z) = 0$. Using the product and chain rules:\n$$\\begin{aligned}\nF_x(x, y, z) &= \\frac{\\partial}{\\partial x}\\left(y e^{2xy} - z\\right) = y \\cdot (2y e^{2xy}) = 2y^2 e^{2xy} \\\\\nF_y(x, y, z) &= \\frac{\\partial}{\\partial y}\\left(y e^{2xy} - z\\right) = (1)e^{2xy} + y(2x e^{2xy}) = (1 + 2xy)e^{2xy} \\\\\nF_z(x, y, z) &= \\frac{\\partial}{\\partial z}\\left(y e^{2xy} - z\\right) = -1\n\\end{aligned}$$\nEvaluating each partial derivative at $P_0(0, 2, 2)$ gives:\n$$F_x(0, 2, 2) = 2(2)^2 e^0 = 8, \\qquad F_y(0, 2, 2) = (1 + 0)e^0 = 1, \\qquad F_z(0, 2, 2) = -1$$\nThus, a normal vector to the surface at $(0, 2, 2)$ is $\\vec{n} = \\nabla F(0, 2, 2) = \\langle 8, 1, -1 \\rangle$.<div class=\"step-divider\"></div><strong>Step 3 — Form the Symmetric Equations of the Normal Line:</strong><br>\nThe normal line passing through $P_0(x_0, y_0, z_0) = (0, 2, 2)$ with direction vector $\\vec{n} = \\langle 8, 1, -1 \\rangle$ has symmetric equations:\n$$\\frac{x - 0}{8} = \\frac{y - 2}{1} = \\frac{z - 2}{-1} \\iff \\frac{x}{8} = \\frac{y - 2}{1} = \\frac{z - 2}{-1}$$<div class=\"step-divider\"></div><strong>Step 4 — Match Coefficients to Find $b$, $c$, and $b + c$:</strong><br>\nComparing our symmetric equations with the given template\n$$\\frac{x}{8} = \\frac{y - 2}{b} = \\frac{z - 2}{c}$$\nsince the denominator of $x$ is already fixed at $8$, the remaining denominators must match directly:\n$$b = 1, \\qquad c = -1$$\nAdding these two values gives:\n$$b + c = 1 + (-1) = 0$$\nThus, $b + c = 0$, which corresponds to Choice <strong>(E)</strong>."
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
    "solution": "<strong>Step 1 — Apply the Limit Definition of Partial Derivatives at the Origin $(0, 0)$:</strong><br>\nFor $f(x, y) = (x^2 + y^2)^{2/3}$, we investigate the behavior of its first partial derivatives at $(0, 0)$ using the limit definition:\n$$f_x(0, 0) = \\lim_{h \\to 0} \\frac{f(0 + h, 0) - f(0, 0)}{h}$$\nSubstituting $f(0, 0) = (0^2 + 0^2)^{2/3} = 0$ and $f(h, 0) = (h^2 + 0^2)^{2/3} = (h^2)^{2/3} = h^{4/3}$ into the difference quotient yields:\n$$f_x(0, 0) = \\lim_{h \\to 0} \\frac{h^{4/3} - 0}{h} = \\lim_{h \\to 0} h^{1/3} = 0$$<div class=\"step-divider\"></div><strong>Step 2 — Verify $f_y(0, 0)$ by Symmetry:</strong><br>\nBecause $f(x, y) = (x^2 + y^2)^{2/3}$ is symmetric in $x$ and $y$, the partial derivative with respect to $y$ at $(0, 0)$ is identically:\n$$f_y(0, 0) = \\lim_{k \\to 0} \\frac{f(0, k) - f(0, 0)}{k} = \\lim_{k \\to 0} \\frac{k^{4/3}}{k} = \\lim_{k \\to 0} k^{1/3} = 0$$\nThus, both $f_x(0, 0) = 0$ and $f_y(0, 0) = 0$ exist and equal $0$, which immediately eliminates Choice (A) and confirms Choice (E).<div class=\"step-divider\"></div><strong>Step 3 — Compute the General Partial Derivatives Away from the Origin $(x, y) \\neq (0, 0)$:</strong><br>\nTo double-check why Choices (B), (C), and (D) are false, we apply the Chain Rule for $(x, y) \\neq (0, 0)$:\n$$f_x(x, y) = \\frac{2}{3}(x^2 + y^2)^{-1/3} \\cdot (2x) = \\frac{4x}{3(x^2 + y^2)^{1/3}}$$\n$$f_y(x, y) = \\frac{2}{3}(x^2 + y^2)^{-1/3} \\cdot (2y) = \\frac{4y}{3(x^2 + y^2)^{1/3}}$$<div class=\"step-divider\"></div><strong>Step 4 — Evaluate at the Test Points in Choices (B), (C), and (D):</strong><br>\n<ul>\n<li>For Choice (B): $f_x(2, 2) = \\frac{4(2)}{3(4 + 4)^{1/3}} = \\frac{8}{3(8)^{1/3}} = \\frac{8}{6} = \\frac{4}{3} \\neq \\frac{3}{4}$.</li>\n<li>For Choice (C): $f_y(1, 1) = \\frac{4(1)}{3(1 + 1)^{1/3}} = \\frac{4}{3\\sqrt[3]{2}} \\neq \\frac{4}{3}$.</li>\n<li>For Choice (D): Since $y$ appears only as $y^2$ in $f_x(x, y)$, $f_x(1, 1) = f_x(1, -1) = \\frac{4}{3\\sqrt[3]{2}}$.</li>\n</ul>\nTherefore, the only true statement is $f_x(0, 0) = 0$, which corresponds to Choice <strong>(E)</strong>."
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
    "solution": "<strong>Step 1 — Calculate the Initial Total Resistance $R$ When $R_1 = 10\\,\\Omega$ and $R_2 = 15\\,\\Omega$:</strong><br>\nGiven the parallel resistance relation $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$, we first determine the initial resistance $R$ at $(R_1, R_2) = (10, 15)$:\n$$\\frac{1}{R} = \\frac{1}{10} + \\frac{1}{15} = \\frac{3 + 2}{30} = \\frac{5}{30} = \\frac{1}{6} \\implies R = 6\\,\\Omega$$<div class=\"step-divider\"></div><strong>Step 2 — Differentiate the Implicit Relation to Express the Total Differential $dR$:</strong><br>\nTaking the total differential of both sides of $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$ (or applying $dR = \\frac{\\partial R}{\\partial R_1} dR_1 + \\frac{\\partial R}{\\partial R_2} dR_2$) gives:\n$$-\\frac{1}{R^2}\\,dR = -\\frac{1}{R_1^2}\\,dR_1 - \\frac{1}{R_2^2}\\,dR_2$$\nMultiplying both sides by $-R^2$ isolates the differential $dR$:\n$$dR = R^2\\left(\\frac{dR_1}{R_1^2} + \\frac{dR_2}{R_2^2}\\right) = \\left(\\frac{R}{R_1}\\right)^2 dR_1 + \\left(\\frac{R}{R_2}\\right)^2 dR_2$$<div class=\"step-divider\"></div><strong>Step 3 — Identify the Increments $dR_1$ and $dR_2$:</strong><br>\nAs $R_1$ increases from $10\\,\\Omega$ to $10.5\\,\\Omega$ and $R_2$ decreases from $15\\,\\Omega$ to $13\\,\\Omega$, the differentials (changes) in the independent variables are:\n$$dR_1 = \\Delta R_1 = 10.5 - 10 = +0.5\\,\\Omega = \\frac{1}{2}\\,\\Omega$$\n$$dR_2 = \\Delta R_2 = 13 - 15 = -2\\,\\Omega$$<div class=\"step-divider\"></div><strong>Step 4 — Substitute All Numerical Values to Compute $dR$:</strong><br>\nSubstituting $R = 6$, $R_1 = 10$, $R_2 = 15$, $dR_1 = 0.5$, and $dR_2 = -2$ into the formula from Step 2 gives:\n$$\\begin{aligned}\ndR &= (6)^2\\left(\\frac{0.5}{10^2} + \\frac{-2}{15^2}\\right) = 36\\left(\\frac{0.5}{100} - \\frac{2}{225}\\right) \\\\\n&= 36\\left(\\frac{1}{200} - \\frac{2}{225}\\right) = \\frac{36}{200} - \\frac{72}{225} \\\\\n&= \\frac{9}{50} - \\frac{8}{25} = \\frac{9 - 16}{50} = -\\frac{7}{50} = -0.14\\,\\Omega\n\\end{aligned}$$\nThus, the approximate change in $R$ is $-0.14$, which corresponds to Choice <strong>(B)</strong>."
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
    "solution": "<strong>Step 1 — State the Formal Domain Condition for a Multivariable Limit (Thomas' Calculus Sec 13.2):</strong><br>\nUnder the standard definition of a two-variable limit used at KFUPM (<em>Thomas' Calculus</em>, Section 13.2, p. 885), for the limit $\\lim_{(x,y)\\to(x_0,y_0)} f(x,y) = L$ to exist, the function $f(x,y)$ must be defined at <strong>every point $(x,y)$ in some open disk</strong> centered at $(x_0, y_0)$, except possibly at $(x_0, y_0)$ itself. This is the direct two-dimensional analog of the single-variable rule that the two-sided limit $\\lim_{x\\to 0} \\sqrt{x}$ does not exist because $\\sqrt{x}$ is undefined for $x < 0$.<div class=\"step-divider\"></div><strong>Step 2 — Determine the Domain of $f(x, y) = \\frac{x - y}{\\sqrt{x} - \\sqrt{y}}$:</strong><br>\nLet us find all points $(x, y) \\in \\mathbb{R}^2$ where $f(x, y) = \\frac{x - y}{\\sqrt{x} - \\sqrt{y}}$ is defined as a real number:\n<ul>\n<li>The square roots $\\sqrt{x}$ and $\\sqrt{y}$ require $x \\ge 0$ and $y \\ge 0$.</li>\n<li>The denominator $\\sqrt{x} - \\sqrt{y}$ must be nonzero, which requires $\\sqrt{x} \\neq \\sqrt{y} \\iff x \\neq y$.</li>\n</ul>\nHence, the domain of $f$ is\n$$D = \\{(x, y) \\in \\mathbb{R}^2 : x \\ge 0,\\; y \\ge 0,\\; x \\neq y\\}$$\nwhich lies strictly inside the first quadrant (excluding the line $y = x$).<div class=\"step-divider\"></div><strong>Step 3 — Compare First-Quadrant Rationalization vs. the Open-Disk Requirement:</strong><br>\nNotice that if one restricts $(x, y)$ strictly to points inside the domain $D$, factoring $x - y = (\\sqrt{x} - \\sqrt{y})(\\sqrt{x} + \\sqrt{y})$ cancels $(\\sqrt{x} - \\sqrt{y})$ and yields $\\sqrt{x} + \\sqrt{y} \\to 0 + 0 = 0$. <strong>However</strong>, every open disk centered at the origin $(0, 0)$,\n$$B_\\delta(0, 0) = \\{(x, y) \\in \\mathbb{R}^2 : 0 < x^2 + y^2 < \\delta^2\\}$$\ncontains points in Quadrants II, III, and IV where $x < 0$ or $y < 0$ (as well as points along the line $y = x$ in Quadrant I where $0 < x = y < \\delta/\\sqrt{2}$), at all of which $f(x, y)$ is undefined.<div class=\"step-divider\"></div><strong>Step 4 — Conclusion (Official KFUPM Master Key Note):</strong><br>\nAs explicitly documented in the official KFUPM Term 252 coordinator footnote (citing <em>Thomas' Calculus</em>, Section 13.2, p. 885), because $f(x, y)$ is not defined on any punctured open disk around $(0, 0)$ (and cannot be approached along paths outside the first quadrant or along $y = x$), the unrestricted limit\n$$\\lim_{(x,y)\\to(0,0)} \\frac{x - y}{\\sqrt{x} - \\sqrt{y}} \\quad \\textbf{does not exist}$$\nwhich corresponds to Choice <strong>(B)</strong>."
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
    "solution": "<strong>Step 1 — Simplify the Target Expression Using Clairaut's Theorem:</strong><br>\nWe are given $f(x, y, z) = y e^x + x\\ln z$ (defined for $z > 0$) and asked to evaluate the sum of three third-order mixed partial derivatives at $(1, 1, 1)$:\n$$S = f_{xzz}(1, 1, 1) + f_{zxz}(1, 1, 1) + f_{zzx}(1, 1, 1)$$\nBecause $f(x, y, z)$ is smooth (infinitely differentiable) on the half-space $z > 0$, Clairaut's Theorem guarantees that the order of differentiation does not matter:\n$$f_{xzz} = f_{zxz} = f_{zzx}$$\nTherefore, the sum simplifies to $S = 3\\,f_{xzz}(1, 1, 1)$.<div class=\"step-divider\"></div><strong>Step 2 — Compute the First-Order Partial Derivative $f_x(x, y, z)$:</strong><br>\nDifferentiating $f(x, y, z) = y e^x + x\\ln z$ partially with respect to $x$ while holding $y$ and $z$ constant yields:\n$$f_x(x, y, z) = \\frac{\\partial}{\\partial x}\\left(y e^x + x\\ln z\\right) = y e^x + \\ln z$$<div class=\"step-divider\"></div><strong>Step 3 — Differentiate Twice with Respect to $z$ to Find $f_{xz}$ and $f_{xzz}$:</strong><br>\nNext, differentiate $f_x(x, y, z) = y e^x + \\ln z$ partially with respect to $z$ (noting that $y e^x$ is independent of $z$):\n$$f_{xz}(x, y, z) = \\frac{\\partial}{\\partial z}\\left(y e^x + \\ln z\\right) = 0 + \\frac{1}{z} = z^{-1}$$\nDifferentiating once more with respect to $z$ gives:\n$$f_{xzz}(x, y, z) = \\frac{\\partial}{\\partial z}\\left(z^{-1}\\right) = -z^{-2} = -\\frac{1}{z^2}$$<div class=\"step-divider\"></div><strong>Step 4 — Evaluate at the Point $(1, 1, 1)$ and Multiply by $3$:</strong><br>\nSubstituting $(x, y, z) = (1, 1, 1)$ into $f_{xzz}(x, y, z) = -\\frac{1}{z^2}$ gives:\n$$f_{xzz}(1, 1, 1) = -\\frac{1}{1^2} = -1$$\nMultiplying by $3$ yields the required sum:\n$$f_{xzz}(1, 1, 1) + f_{zxz}(1, 1, 1) + f_{zzx}(1, 1, 1) = 3(-1) = -3$$\nwhich corresponds to Choice <strong>(C)</strong>."
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
    "solution": "<strong>Step 1 — Recall the Theorem on Maximum Directional Derivative:</strong><br>\nFor a differentiable function $f(x, y)$, the directional derivative in the direction of a unit vector $\\vec{u}$ is $D_{\\vec{u}} f(x, y) = \\nabla f(x, y) \\cdot \\vec{u} = \\|\\nabla f(x, y)\\|\\cos\\theta$. The maximum value of $D_{\\vec{u}} f$ at a given point $(x_0, y_0)$ occurs when $\\cos\\theta = 1$ (when $\\vec{u}$ points in the direction of $\\nabla f(x_0, y_0)$) and is equal to the magnitude of the gradient vector:\n$$\\max_{\\|\\vec{u}\\|=1} D_{\\vec{u}} f(x_0, y_0) = \\|\\nabla f(x_0, y_0)\\| = \\sqrt{\\left[f_x(x_0, y_0)\\right]^2 + \\left[f_y(x_0, y_0)\\right]^2}$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the First-Order Partial Derivatives $f_x$ and $f_y$:</strong><br>\nGiven $f(x, y) = y^2 - x\\sqrt{y} = y^2 - x y^{1/2}$ for $y > 0$, we differentiate with respect to $x$ and $y$:\n$$f_x(x, y) = \\frac{\\partial}{\\partial x}\\left(y^2 - x y^{1/2}\\right) = -y^{1/2} = -\\sqrt{y}$$\n$$f_y(x, y) = \\frac{\\partial}{\\partial y}\\left(y^2 - x y^{1/2}\\right) = 2y - \\frac{1}{2}x y^{-1/2} = 2y - \\frac{x}{2\\sqrt{y}}$$<div class=\"step-divider\"></div><strong>Step 3 — Evaluate the Gradient Vector $\\nabla f$ at the Point $(0, 3)$:</strong><br>\nSubstituting $x = 0$ and $y = 3$ into both partial derivatives gives:\n$$f_x(0, 3) = -\\sqrt{3}$$\n$$f_y(0, 3) = 2(3) - \\frac{0}{2\\sqrt{3}} = 6 - 0 = 6$$\nThus, the gradient vector at $(0, 3)$ is:\n$$\\nabla f(0, 3) = \\langle -\\sqrt{3},\\; 6 \\rangle$$<div class=\"step-divider\"></div><strong>Step 4 — Compute the Magnitude $\\|\\nabla f(0, 3)\\|$:</strong><br>\nTaking the Euclidean norm of $\\nabla f(0, 3)$ yields the maximum value of the directional derivative:\n$$\\|\\nabla f(0, 3)\\| = \\sqrt{(-\\sqrt{3})^2 + 6^2} = \\sqrt{3 + 36} = \\sqrt{39}$$\nTherefore, the maximum value of the directional derivative at $(0, 3)$ is $\\sqrt{39}$, which corresponds to Choice <strong>(E)</strong>."
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
    "solution": "<strong>Step 1 — Define the Level Surface Function $F(x, y, z)$:</strong><br>\nThe quadric surface is given by the implicit equation $z^2 - 2x^2 - 2y^2 = 12$. We define the level surface function:\n$$F(x, y, z) = z^2 - 2x^2 - 2y^2 - 12 = 0$$\nAt the given point $P_0(1, -1, 4)$, we check that $F(1, -1, 4) = 4^2 - 2(1)^2 - 2(-1)^2 - 12 = 16 - 2 - 2 - 12 = 0$.<div class=\"step-divider\"></div><strong>Step 2 — Compute the Gradient Vector $\\nabla F$ at $P_0(1, -1, 4)$:</strong><br>\nA normal vector to the tangent plane at $P_0(1, -1, 4)$ is given by the gradient $\\nabla F(1, -1, 4)$:\n$$\\nabla F(x, y, z) = \\left\\langle \\frac{\\partial F}{\\partial x},\\; \\frac{\\partial F}{\\partial y},\\; \\frac{\\partial F}{\\partial z} \\right\\rangle = \\langle -4x,\\; -4y,\\; 2z \\rangle$$\nEvaluating at $(x_0, y_0, z_0) = (1, -1, 4)$ yields:\n$$\\vec{n} = \\nabla F(1, -1, 4) = \\langle -4(1),\\; -4(-1),\\; 2(4) \\rangle = \\langle -4,\\; 4,\\; 8 \\rangle$$<div class=\"step-divider\"></div><strong>Step 3 — Write the Tangent Plane Equation and Normalize the Coefficient of $x$:</strong><br>\nUsing the tangent plane formula $F_x(x_0, y_0, z_0)(x - x_0) + F_y(x_0, y_0, z_0)(y - y_0) + F_z(x_0, y_0, z_0)(z - z_0) = 0$:\n$$-4(x - 1) + 4(y - (-1)) + 8(z - 4) = 0$$\nTo match the required form $x + ay + bz + c = 0$ (where the coefficient of $x$ is $+1$), divide the entire equation by $-4$:\n$$(x - 1) - 1(y + 1) - 2(z - 4) = 0$$\nExpanding and collecting constant terms gives:\n$$x - y - 2z + (-1 - 1 + 8) = 0 \\iff x - y - 2z + 6 = 0$$<div class=\"step-divider\"></div><strong>Step 4 — Identify $a$, $b$, $c$ and Compute $a + b + c$:</strong><br>\nComparing $x - y - 2z + 6 = 0$ with $x + ay + bz + c = 0$, we read off the coefficients:\n$$a = -1, \\qquad b = -2, \\qquad c = 6$$\nSumming these three constants gives:\n$$a + b + c = (-1) + (-2) + 6 = 3$$\nwhich corresponds to Choice <strong>(A)</strong>."
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
    "solution": "<strong>Step 1 — State the Point-to-Plane Distance Formula:</strong><br>\nThe perpendicular distance $D$ from a point $P_0(x_0, y_0, z_0)$ to a plane with general equation $Ax + By + Cz + d = 0$ (or $Ax + By + Cz = D_0$) is given by:\n$$D = \\frac{|Ax_0 + By_0 + Cz_0 - D_0|}{\\sqrt{A^2 + B^2 + C^2}}$$<div class=\"step-divider\"></div><strong>Step 2 — Identify the Plane Coefficients and Point Coordinates:</strong><br>\nFrom the given plane equation $2x + y + z = 5$, the normal vector components and constant term are:\n$$A = 2, \\qquad B = 1, \\qquad C = 1, \\qquad D_0 = 5$$\nThe given point has coordinates:\n$$(x_0, y_0, z_0) = (2, 8, 4)$$<div class=\"step-divider\"></div><strong>Step 3 — Evaluate the Numerator and Denominator Separately:</strong><br>\nSubstituting $(x_0, y_0, z_0) = (2, 8, 4)$ into the numerator gives:\n$$|Ax_0 + By_0 + Cz_0 - D_0| = |2(2) + 1(8) + 1(4) - 5| = |4 + 8 + 4 - 5| = |16 - 5| = 11$$\nComputing the magnitude of the normal vector $\\vec{n} = \\langle 2, 1, 1 \\rangle$ in the denominator gives:\n$$\\sqrt{A^2 + B^2 + C^2} = \\sqrt{2^2 + 1^2 + 1^2} = \\sqrt{4 + 1 + 1} = \\sqrt{6}$$<div class=\"step-divider\"></div><strong>Step 4 — Form the Exact Distance Ratio:</strong><br>\nDividing the numerator by the denominator yields the exact perpendicular distance from $(2, 8, 4)$ to the plane $2x + y + z = 5$:\n$$D = \\frac{11}{\\sqrt{6}}$$\nwhich corresponds to Choice <strong>(A)</strong>."
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
    "solution": "<strong>Step 1 — Normalize the Given Direction Vector $\\vec{v}$ to a Unit Vector $\\vec{u}$:</strong><br>\nTo compute the directional derivative of $f(x, y) = x^2\\sin(2y)$ in the direction of $\\vec{v} = 3\\vec{i} - 4\\vec{j} = \\langle 3, -4 \\rangle$, we first find the magnitude of $\\vec{v}$:\n$$\\|\\vec{v}\\| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$\nDividing $\\vec{v}$ by its norm produces the unit direction vector $\\vec{u}$:\n$$\\vec{u} = \\frac{\\vec{v}}{\\|\\vec{v}\\|} = \\left\\langle \\frac{3}{5},\\; -\\frac{4}{5} \\right\\rangle$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the First-Order Partial Derivatives of $f(x, y) = x^2\\sin(2y)$:</strong><br>\nDifferentiating $f(x, y)$ partially with respect to $x$ and $y$ gives:\n$$f_x(x, y) = \\frac{\\partial}{\\partial x}\\left(x^2\\sin(2y)\\right) = 2x\\sin(2y)$$\n$$f_y(x, y) = \\frac{\\partial}{\\partial y}\\left(x^2\\sin(2y)\\right) = x^2 \\cdot 2\\cos(2y) = 2x^2\\cos(2y)$$<div class=\"step-divider\"></div><strong>Step 3 — Evaluate the Gradient Vector $\\nabla f$ at the Point $\\left(1, \\frac{\\pi}{2}\\right)$:</strong><br>\nSubstituting $x = 1$ and $y = \\frac{\\pi}{2}$ (so that $2y = \\pi$) into the partial derivatives yields:\n$$f_x\\left(1, \\frac{\\pi}{2}\\right) = 2(1)\\sin(\\pi) = 2(0) = 0$$\n$$f_y\\left(1, \\frac{\\pi}{2}\\right) = 2(1)^2\\cos(\\pi) = 2(-1) = -2$$\nHence, the gradient vector at $\\left(1, \\frac{\\pi}{2}\\right)$ is $\\nabla f\\left(1, \\frac{\\pi}{2}\\right) = \\langle 0, -2 \\rangle$.<div class=\"step-divider\"></div><strong>Step 4 — Take the Dot Product $\\nabla f\\left(1, \\frac{\\pi}{2}\\right) \\cdot \\vec{u}$:</strong><br>\nBy definition, the directional derivative $D_{\\vec{u}} f\\left(1, \\frac{\\pi}{2}\\right)$ is the dot product of the gradient and the unit vector $\\vec{u}$:\n$$D_{\\vec{u}} f\\left(1, \\frac{\\pi}{2}\\right) = \\langle 0, -2 \\rangle \\cdot \\left\\langle \\frac{3}{5},\\; -\\frac{4}{5} \\right\\rangle = (0)\\left(\\frac{3}{5}\\right) + (-2)\\left(-\\frac{4}{5}\\right) = \\frac{8}{5}$$\nwhich corresponds to Choice <strong>(A)</strong>."
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
    "solution": "<strong>Step 1 — State the Multivariable Chain Rule for $\\frac{\\partial w}{\\partial s}$:</strong><br>\nSince $w = xy + yz + xz$ is a differentiable function of $(x, y, z)$, and each of $x = s\\cos t$, $y = s\\sin t$, $z = t$ is a differentiable function of $(s, t)$, the Chain Rule gives:\n$$\\frac{\\partial w}{\\partial s} = \\frac{\\partial w}{\\partial x}\\frac{\\partial x}{\\partial s} + \\frac{\\partial w}{\\partial y}\\frac{\\partial y}{\\partial s} + \\frac{\\partial w}{\\partial z}\\frac{\\partial z}{\\partial s}$$<div class=\"step-divider\"></div><strong>Step 2 — Compute All Required Partial Derivatives:</strong><br>\nDifferentiating $w = xy + yz + xz$ with respect to $x$, $y$, and $z$ yields:\n$$\\frac{\\partial w}{\\partial x} = y + z, \\qquad \\frac{\\partial w}{\\partial y} = x + z, \\qquad \\frac{\\partial w}{\\partial z} = y + x$$\nDifferentiating $x = s\\cos t$, $y = s\\sin t$, and $z = t$ partially with respect to $s$ (holding $t$ constant) yields:\n$$\\frac{\\partial x}{\\partial s} = \\cos t, \\qquad \\frac{\\partial y}{\\partial s} = \\sin t, \\qquad \\frac{\\partial z}{\\partial s} = 0$$<div class=\"step-divider\"></div><strong>Step 3 — Evaluate the Intermediate Variables and Derivatives at $(s, t) = (1, 2\\pi)$:</strong><br>\nWhen $s = 1$ and $t = 2\\pi$, we have $\\cos(2\\pi) = 1$ and $\\sin(2\\pi) = 0$. Therefore, the coordinates $(x, y, z)$ at $(s, t) = (1, 2\\pi)$ are:\n$$x = 1\\cos(2\\pi) = 1, \\qquad y = 1\\sin(2\\pi) = 0, \\qquad z = 2\\pi$$\nAnd the partial derivatives with respect to $s$ at $t = 2\\pi$ are:\n$$\\frac{\\partial x}{\\partial s} = \\cos(2\\pi) = 1, \\qquad \\frac{\\partial y}{\\partial s} = \\sin(2\\pi) = 0, \\qquad \\frac{\\partial z}{\\partial s} = 0$$<div class=\"step-divider\"></div><strong>Step 4 — Substitute into the Chain Rule Expression to Find $\\frac{\\partial w}{\\partial s}$:</strong><br>\nSubstituting the values from Steps 2 and 3 into the Chain Rule formula gives:\n$$\\begin{aligned}\n\\left.\\frac{\\partial w}{\\partial s}\\right|_{(s,t)=(1,2\\pi)} &= (y + z)\\frac{\\partial x}{\\partial s} + (x + z)\\frac{\\partial y}{\\partial s} + (y + x)\\frac{\\partial z}{\\partial s} \\\\\n&= (0 + 2\\pi)(1) + (1 + 2\\pi)(0) + (0 + 1)(0) = 2\\pi\n\\end{aligned}$$\nThus, $\\frac{\\partial w}{\\partial s} = 2\\pi$, which corresponds to Choice <strong>(A)</strong>."
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
    "solution": "<strong>Step 1 — Define the Angle of Inclination of a Tangent Plane:</strong><br>\nThe angle of inclination $\\theta$ ($0 \\le \\theta \\le \\frac{\\pi}{2}$) of a plane is the acute angle between the plane and the horizontal $xy$-plane. Equivalently, it is the acute angle between the plane's normal vector $\\vec{n}$ and the vertical unit vector $\\vec{k} = \\langle 0, 0, 1 \\rangle$ normal to the $xy$-plane:\n$$\\cos\\theta = \\frac{|\\vec{n} \\cdot \\vec{k}|}{\\|\\vec{n}\\|\\,\\|\\vec{k}\\|} = \\frac{|\\vec{n} \\cdot \\vec{k}|}{\\|\\vec{n}\\|}$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the Normal Vector $\\vec{n} = \\nabla F(1, 1, 1)$ to the Surface:</strong><br>\nWrite the surface $3x^2 + 2y^2 - z = 4$ as the level surface $F(x, y, z) = 3x^2 + 2y^2 - z - 4 = 0$. Its gradient vector is:\n$$\\nabla F(x, y, z) = \\langle F_x, F_y, F_z \\rangle = \\langle 6x,\\; 4y,\\; -1 \\rangle$$\nEvaluating $\\nabla F$ at the given point $P_0(1, 1, 1)$ gives the normal vector to the tangent plane:\n$$\\vec{n} = \\nabla F(1, 1, 1) = \\langle 6(1),\\; 4(1),\\; -1 \\rangle = \\langle 6,\\; 4,\\; -1 \\rangle$$<div class=\"step-divider\"></div><strong>Step 3 — Compute the Dot Product $|\\vec{n} \\cdot \\vec{k}|$ and the Magnitude $\\|\\vec{n}\\|$:</strong><br>\nTaking the absolute value of the dot product of $\\vec{n} = \\langle 6, 4, -1 \\rangle$ with $\\vec{k} = \\langle 0, 0, 1 \\rangle$ yields:\n$$|\\vec{n} \\cdot \\vec{k}| = |6(0) + 4(0) + (-1)(1)| = |-1| = 1$$\nComputing the Euclidean norm of $\\vec{n} = \\langle 6, 4, -1 \\rangle$ yields:\n$$\\|\\vec{n}\\| = \\sqrt{6^2 + 4^2 + (-1)^2} = \\sqrt{36 + 16 + 1} = \\sqrt{53}$$<div class=\"step-divider\"></div><strong>Step 4 — Form the Ratio for $\\cos\\theta$:</strong><br>\nSubstituting $|\\vec{n} \\cdot \\vec{k}| = 1$ and $\\|\\vec{n}\\| = \\sqrt{53}$ into the formula from Step 1 gives:\n$$\\cos\\theta = \\frac{|\\vec{n} \\cdot \\vec{k}|}{\\|\\vec{n}\\|\\,\\|\\vec{k}\\|} = \\frac{1}{\\sqrt{53}}$$\nTherefore, $\\cos\\theta = \\frac{1}{\\sqrt{53}}$, which corresponds to Choice <strong>(E)</strong>."
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
    "solution": "<strong>Step 1 — Verify the Normal Vector and $x$-Intercept (Choices A and B):</strong><br>\nConsider the plane given by the linear equation $4x - y + 3z = 6$.\n<ul>\n<li><strong>Choice (A):</strong> The coefficients of $x, y, z$ directly give the normal vector $\\vec{n}_1 = \\langle 4, -1, 3 \\rangle$, so (A) is <strong>TRUE</strong>.</li>\n<li><strong>Choice (B):</strong> To find the $x$-axis intersection, set $y = 0$ and $z = 0$: $4x = 6 \\implies x = \\frac{6}{4} = \\frac{3}{2}$. Thus the plane intersects the $x$-axis at $\\left(\\frac{3}{2}, 0, 0\\right)$, so (B) is <strong>TRUE</strong>.</li>\n</ul><div class=\"step-divider\"></div><strong>Step 2 — Verify Point Membership on the Plane (Choices C and D):</strong><br>\nA point $(x_0, y_0, z_0)$ lies on the plane $4x - y + 3z = 6$ if and only if its coordinates satisfy the equation:\n<ul>\n<li><strong>Choice (C) — Point $(1, 1, 1)$:</strong> Substituting $x = 1, y = 1, z = 1$ gives $4(1) - (1) + 3(1) = 4 - 1 + 3 = 6$, which holds, so (C) is <strong>TRUE</strong>.</li>\n<li><strong>Choice (D) — Point $(0, -6, 0)$:</strong> Substituting $x = 0, y = -6, z = 0$ gives $4(0) - (-6) + 3(0) = 6$, which holds, so (D) is <strong>TRUE</strong>.</li>\n</ul><div class=\"step-divider\"></div><strong>Step 3 — Test the Parallelism Condition for Choice (E):</strong><br>\nTwo planes are parallel if and only if their normal vectors are nonzero scalar multiples of each other ($\\vec{n}_2 = c\\vec{n}_1$). For the given plane $4x - y + 3z = 6$ and the second plane $8x - 2y - 6z = 10$, the normal vectors are:\n$$\\vec{n}_1 = \\langle 4, -1, 3 \\rangle \\quad \\text{and} \\quad \\vec{n}_2 = \\langle 8, -2, -6 \\rangle$$<div class=\"step-divider\"></div><strong>Step 4 — Compare the Component Ratios of $\\vec{n}_1$ and $\\vec{n}_2$:</strong><br>\nChecking the ratios of corresponding components between $\\vec{n}_2$ and $\\vec{n}_1$:\n$$\\frac{8}{4} = 2, \\qquad \\frac{-2}{-1} = 2, \\qquad \\text{but} \\qquad \\frac{-6}{3} = -2 \\neq 2$$\nBecause the third component has the opposite sign ($-6$ instead of $+6$), $\\vec{n}_2$ is not parallel to $\\vec{n}_1$, so the two planes are not parallel. Therefore, statement (E) is FALSE, which corresponds to Choice <strong>(E)</strong>."
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
    "solution": "<strong>Step 1 — State the Chain Rule for $\\frac{\\partial w}{\\partial t}$:</strong><br>\nGiven $w = x^2 - 3y^2$ where $x = s\\cos t$ and $y = s\\sin t$, $w$ is a composite function of the independent variables $s$ and $t$. By the two-variable Chain Rule, the partial derivative of $w$ with respect to $t$ is:\n$$\\frac{\\partial w}{\\partial t} = \\frac{\\partial w}{\\partial x}\\frac{\\partial x}{\\partial t} + \\frac{\\partial w}{\\partial y}\\frac{\\partial y}{\\partial t}$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the Individual Partial Derivatives:</strong><br>\nDifferentiating $w = x^2 - 3y^2$ with respect to $x$ and $y$ yields:\n$$\\frac{\\partial w}{\\partial x} = 2x, \\qquad \\frac{\\partial w}{\\partial y} = -6y$$\nDifferentiating $x = s\\cos t$ and $y = s\\sin t$ with respect to $t$ (treating $s$ as constant) yields:\n$$\\frac{\\partial x}{\\partial t} = -s\\sin t, \\qquad \\frac{\\partial y}{\\partial t} = s\\cos t$$<div class=\"step-divider\"></div><strong>Step 3 — Substitute into the Chain Rule and Express in Terms of $s$ and $t$:</strong><br>\nSubstituting these derivatives and $x = s\\cos t$, $y = s\\sin t$ into the Chain Rule formula gives:\n$$\\begin{aligned}\n\\frac{\\partial w}{\\partial t} &= (2x)(-s\\sin t) + (-6y)(s\\cos t) \\\\\n&= 2(s\\cos t)(-s\\sin t) - 6(s\\sin t)(s\\cos t) \\\\\n&= -2s^2\\sin t\\cos t - 6s^2\\sin t\\cos t = -8s^2\\sin t\\cos t\n\\end{aligned}$$<div class=\"step-divider\"></div><strong>Step 4 — Apply the Double-Angle Trigonometric Identity:</strong><br>\nRecalling the double-angle identity for sine, $\\sin(2t) = 2\\sin t\\cos t$, we rewrite $-8s^2\\sin t\\cos t$ as:\n$$\\frac{\\partial w}{\\partial t} = -4s^2(2\\sin t\\cos t) = -4s^2\\sin(2t)$$\nwhich corresponds to Choice <strong>(A)</strong>."
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
    "solution": "<strong>Step 1 — State the Implicit Differentiation Formula for $\\frac{\\partial z}{\\partial y}$:</strong><br>\nWe are given the implicit equation $x\\ln y + y^2 z + z^2 = 6$, which defines $z$ as a differentiable function of $x$ and $y$. Define the level surface function:\n$$F(x, y, z) = x\\ln y + y^2 z + z^2 - 6 = 0$$\nBy the Implicit Function Theorem, at any point where $F_z \\neq 0$, the partial derivative $\\frac{\\partial z}{\\partial y}$ is given by:\n$$\\frac{\\partial z}{\\partial y} = -\\frac{F_y(x, y, z)}{F_z(x, y, z)}$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the Partial Derivatives $F_y$ and $F_z$:</strong><br>\nDifferentiating $F(x, y, z) = x\\ln y + y^2 z + z^2 - 6$ with respect to $y$ (holding $x$ and $z$ constant) gives:\n$$F_y(x, y, z) = \\frac{\\partial}{\\partial y}\\left(x\\ln y + y^2 z + z^2 - 6\\right) = \\frac{x}{y} + 2yz$$\nDifferentiating $F(x, y, z)$ with respect to $z$ (holding $x$ and $y$ constant) gives:\n$$F_z(x, y, z) = \\frac{\\partial}{\\partial z}\\left(x\\ln y + y^2 z + z^2 - 6\\right) = y^2 + 2z$$<div class=\"step-divider\"></div><strong>Step 3 — Evaluate $F_y$ and $F_z$ at the Given Point $(4, 1, 2)$:</strong><br>\nSubstituting $x = 4$, $y = 1$, and $z = 2$ into both partial derivatives yields:\n$$F_y(4, 1, 2) = \\frac{4}{1} + 2(1)(2) = 4 + 4 = 8$$\n$$F_z(4, 1, 2) = (1)^2 + 2(2) = 1 + 4 = 5$$<div class=\"step-divider\"></div><strong>Step 4 — Substitute the Evaluated Values into the Quotient Formula:</strong><br>\nDividing $F_y(4, 1, 2)$ by $F_z(4, 1, 2)$ with the negative sign from Step 1 gives:\n$$\\left.\\frac{\\partial z}{\\partial y}\\right|_{(4,1,2)} = -\\frac{F_y(4, 1, 2)}{F_z(4, 1, 2)} = -\\frac{8}{5}$$\nTherefore, $\\frac{\\partial z}{\\partial y}$ at $(4, 1, 2)$ is equal to $-\\frac{8}{5}$, which corresponds to Choice <strong>(A)</strong>."
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
    "solution": "<strong>Step 1 — State the Non-Negativity Condition for a Real Square Root:</strong><br>\nFor the function $f(x, y) = \\sqrt{16 - 4x^2 - y^2}$ to yield a real number, the expression inside the square root (the radicand) must be greater than or equal to zero:\n$$16 - 4x^2 - y^2 \\ge 0$$<div class=\"step-divider\"></div><strong>Step 2 — Rearrange the Inequality to Isolate the Quadratic Terms:</strong><br>\nAdding $4x^2 + y^2$ to both sides (or subtracting $16$ and multiplying by $-1$, which reverses the inequality sign) gives:\n$$4x^2 + y^2 \\le 16$$<div class=\"step-divider\"></div><strong>Step 3 — Normalize to the Standard Form of an Ellipse:</strong><br>\nTo identify the boundary curve in standard conic form $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, divide both sides of the inequality $4x^2 + y^2 \\le 16$ by the positive constant $16$:\n$$\\frac{4x^2}{16} + \\frac{y^2}{16} \\le \\frac{16}{16} \\iff \\frac{x^2}{4} + \\frac{y^2}{16} \\le 1$$<div class=\"step-divider\"></div><strong>Step 4 — Interpret the Inequality Geometrically in the $xy$-Plane:</strong><br>\n<ul>\n<li>The equality $\\frac{x^2}{4} + \\frac{y^2}{16} = 1$ represents an <strong>ellipse</strong> centered at $(0, 0)$ with semi-minor axis $a = 2$ along the $x$-axis and semi-major axis $b = 4$ along the $y$-axis.</li>\n<li>The strict inequality $\\frac{x^2}{4} + \\frac{y^2}{16} < 1$ represents all points strictly <strong>inside</strong> this ellipse (such as the origin $(0, 0)$).</li>\n</ul>\nCombining both cases, the domain consists of all points <strong>lying on or inside the ellipse $\\frac{x^2}{4} + \\frac{y^2}{16} = 1$</strong>, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — State the Tangent Plane Formula for an Explicit Surface $z = f(x, y)$:</strong><br>\nFor a differentiable surface given explicitly by $z = f(x, y) = y e^{2xy}$, the equation of the tangent plane at a point $P_0(x_0, y_0, z_0)$ is:\n$$z - z_0 = f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0)$$\nEquivalently, writing $F(x, y, z) = y e^{2xy} - z = 0$, the normal vector is $\\nabla F(x_0, y_0, z_0) = \\langle f_x(x_0, y_0),\\; f_y(x_0, y_0),\\; -1 \\rangle$.<div class=\"step-divider\"></div><strong>Step 2 — Compute the First-Order Partial Derivatives $f_x$ and $f_y$:</strong><br>\nUsing the Chain Rule and Product Rule on $f(x, y) = y e^{2xy}$:\n$$f_x(x, y) = \\frac{\\partial}{\\partial x}\\left(y e^{2xy}\\right) = y \\cdot \\left(2y e^{2xy}\\right) = 2y^2 e^{2xy}$$\n$$f_y(x, y) = \\frac{\\partial}{\\partial y}\\left(y e^{2xy}\\right) = (1)e^{2xy} + y\\left(2x e^{2xy}\\right) = (1 + 2xy)e^{2xy}$$<div class=\"step-divider\"></div><strong>Step 3 — Evaluate the Partial Derivatives at the Point $(0, 2, 2)$:</strong><br>\nSubstituting $x_0 = 0$ and $y_0 = 2$ (where $2x_0 y_0 = 0$ and $e^0 = 1$) gives:\n$$f_x(0, 2) = 2(2)^2 e^{2(0)(2)} = 2(4)(1) = 8$$\n$$f_y(0, 2) = \\left(1 + 2(0)(2)\\right)e^{2(0)(2)} = (1 + 0)(1) = 1$$<div class=\"step-divider\"></div><strong>Step 4 — Assemble and Simplify the Tangent Plane Equation:</strong><br>\nSubstituting $(x_0, y_0, z_0) = (0, 2, 2)$, $f_x(0, 2) = 8$, and $f_y(0, 2) = 1$ into the tangent plane equation from Step 1 yields:\n$$z - 2 = 8(x - 0) + 1(y - 2)$$\n$$z - 2 = 8x + y - 2$$\nAdding $2$ to both sides and rearranging into standard linear form gives:\n$$8x + y - z = 0$$\nwhich corresponds to Choice <strong>(B)</strong>."
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
    "solution": "<strong>Step 1 — Use Clairaut's Theorem to Combine the Mixed Partial Derivatives:</strong><br>\nWe are given the polynomial $f(x, y, z) = x^3 - 4xy + 3y^3 + x y^2 z^2$ and asked to compute\n$$S = f_{xyzz}(1, 1, 1) + f_{xzyz}(1, 1, 1)$$\nBecause every polynomial is infinitely differentiable everywhere on $\\mathbb{R}^3$, Clairaut's Theorem ensures that any two fourth-order partial derivatives involving one $x$, one $y$, and two $z$ differentiations are identical:\n$$f_{xzyz}(x, y, z) = f_{xyzz}(x, y, z) \\implies S = 2\\,f_{xyzz}(1, 1, 1)$$<div class=\"step-divider\"></div><strong>Step 2 — Eliminate Terms Independent of $z$ Before Differentiating:</strong><br>\nObserve that $f_{xyzz}$ differentiates twice with respect to $z$. In $f(x, y, z) = (x^3 - 4xy + 3y^3) + x y^2 z^2$, the first three terms $x^3 - 4xy + 3y^3$ do not depend on $z$ at all, so their derivative with respect to $z$ is identically $0$. Thus, only the final term $g(x, y, z) = x y^2 z^2$ contributes to $f_{xyzz}$.<div class=\"step-divider\"></div><strong>Step 3 — Compute the Fourth-Order Mixed Partial Derivative $f_{xyzz}$ Step by Step:</strong><br>\nDifferentiating $f(x, y, z) = x^3 - 4xy + 3y^3 + x y^2 z^2$ sequentially with respect to $x$, $y$, $z$, and $z$:\n$$\\begin{aligned}\nf_x(x, y, z) &= 3x^2 - 4y + y^2 z^2 \\\\\nf_{xy}(x, y, z) &= -4 + 2y z^2 \\\\\nf_{xyz}(x, y, z) &= 4yz \\\\\nf_{xyzz}(x, y, z) &= 4y\n\\end{aligned}$$<div class=\"step-divider\"></div><strong>Step 4 — Evaluate at $(1, 1, 1)$ and Multiply by $2$:</strong><br>\nAt the point $(x, y, z) = (1, 1, 1)$, we have:\n$$f_{xyzz}(1, 1, 1) = 4(1) = 4$$\nTherefore, the sum of the two mixed partial derivatives is:\n$$f_{xyzz}(1, 1, 1) + f_{xzyz}(1, 1, 1) = 2(4) = 8$$\nwhich corresponds to Choice <strong>(E)</strong>."
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
    "solution": "<strong>Step 1 — State the Total Differential Formula for $z = f(x, y)$:</strong><br>\nWhen a differentiable function $z = f(x, y)$ experiences small changes $\\Delta x = dx$ and $\\Delta y = dy$ from an initial point $(x_0, y_0)$, the actual change $\\Delta z$ is approximated by the total differential $dz$:\n$$\\Delta z \\approx dz = f_x(x_0, y_0)\\,dx + f_y(x_0, y_0)\\,dy$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the Partial Derivatives and Evaluate at $(1, 1)$:</strong><br>\nFor the paraboloid $z = f(x, y) = x^2 + y^2$, the first-order partial derivatives are:\n$$f_x(x, y) = \\frac{\\partial}{\\partial x}(x^2 + y^2) = 2x, \\qquad f_y(x, y) = \\frac{\\partial}{\\partial y}(x^2 + y^2) = 2y$$\nEvaluating both partial derivatives at the starting point $(x_0, y_0) = (1, 1)$ gives:\n$$f_x(1, 1) = 2(1) = 2, \\qquad f_y(1, 1) = 2(1) = 2$$<div class=\"step-divider\"></div><strong>Step 3 — Determine the Differentials $dx$ and $dy$:</strong><br>\nAs $(x, y)$ changes from $(x_0, y_0) = (1, 1)$ to $(x_1, y_1) = (1.2, 0.9)$, the increments in $x$ and $y$ are:\n$$dx = \\Delta x = 1.2 - 1 = +0.2$$\n$$dy = \\Delta y = 0.9 - 1 = -0.1$$<div class=\"step-divider\"></div><strong>Step 4 — Substitute into the Total Differential Formula to Compute $dz$:</strong><br>\nSubstituting $f_x(1, 1) = 2$, $f_y(1, 1) = 2$, $dx = 0.2$, and $dy = -0.1$ into the total differential yields:\n$$dz = 2(0.2) + 2(-0.1) = 0.4 - 0.2 = 0.2$$\nThus, using differentials, the change in $z$ is approximately equal to $0.2$, which corresponds to Choice <strong>(E)</strong>."
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
    "solution": "<strong>Step 1 — Recognize the Indeterminate Form and Factor the Denominator:</strong><br>\nAs $(x, y) \\to (0, 0)$, both the numerator $3x^3 \\to 0$ and the denominator $2x^2 + 2y^2 = 2(x^2 + y^2) \\to 0$, producing a $\\frac{0}{0}$ indeterminate form. Because the denominator involves the radial sum of squares $x^2 + y^2$, we can evaluate the limit rigorously using either polar coordinates or the Squeeze Theorem.<div class=\"step-divider\"></div><strong>Step 2 — Convert the Expression to Polar Coordinates $(r, \\theta)$:</strong><br>\nSubstituting $x = r\\cos\\theta$ and $y = r\\sin\\theta$ (where $r^2 = x^2 + y^2 > 0$ and $r \\to 0^+$ as $(x, y) \\to (0, 0)$) transforms the rational expression into:\n$$\\frac{3x^3}{2x^2 + 2y^2} = \\frac{3(r\\cos\\theta)^3}{2(r^2\\cos^2\\theta + r^2\\sin^2\\theta)} = \\frac{3r^3\\cos^3\\theta}{2r^2(1)} = \\frac{3}{2}r\\cos^3\\theta$$<div class=\"step-divider\"></div><strong>Step 3 — Bound the Expression Using the Squeeze Theorem:</strong><br>\nSince $|\\cos\\theta| \\le 1$ for all angles $\\theta \\in \\mathbb{R}$, we have $|\\cos^3\\theta| \\le 1$ (or equivalently, in Cartesian coordinates, $x^2 \\le x^2 + y^2 \\implies \\frac{|x^3|}{x^2 + y^2} \\le |x|$). Therefore, for all $(x, y) \\neq (0, 0)$:\n$$0 \\le \\left|\\frac{3x^3}{2x^2 + 2y^2}\\right| = \\frac{3}{2}r|\\cos^3\\theta| \\le \\frac{3}{2}r$$<div class=\"step-divider\"></div><strong>Step 4 — Take the Limit as $r \\to 0^+$:</strong><br>\nAs $(x, y) \\to (0, 0)$, the radial distance $r = \\sqrt{x^2 + y^2} \\to 0^+$, so the upper bound $\\lim_{r \\to 0^+} \\frac{3}{2}r = 0$. By the Squeeze Theorem:\n$$\\lim_{(x,y)\\to(0,0)} \\frac{3x^3}{2x^2 + 2y^2} = 0$$\nwhich corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Compute the Partial Derivative $\\frac{\\partial z}{\\partial x}$ Using the Chain Rule:</strong><br>\nGiven $z = \\ln(2x^2 + y^2)$, let the inner argument be $u = 2x^2 + y^2$. Differentiating $z = \\ln u$ partially with respect to $x$ (treating $y$ as constant) yields:\n$$\\frac{\\partial z}{\\partial x} = \\frac{1}{2x^2 + y^2} \\cdot \\frac{\\partial}{\\partial x}(2x^2 + y^2) = \\frac{4x}{2x^2 + y^2}$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the Partial Derivative $\\frac{\\partial z}{\\partial y}$ Using the Chain Rule:</strong><br>\nSimilarly, differentiating $z = \\ln(2x^2 + y^2)$ partially with respect to $y$ (treating $x$ as constant) yields:\n$$\\frac{\\partial z}{\\partial y} = \\frac{1}{2x^2 + y^2} \\cdot \\frac{\\partial}{\\partial y}(2x^2 + y^2) = \\frac{2y}{2x^2 + y^2}$$<div class=\"step-divider\"></div><strong>Step 3 — Multiply by $x$ and $y$ Respectively and Add the Two Fractions:</strong><br>\nSubstituting $\\frac{\\partial z}{\\partial x}$ and $\\frac{\\partial z}{\\partial y}$ into the required linear combination $x\\frac{\\partial z}{\\partial x} + y\\frac{\\partial z}{\\partial y}$ gives:\n$$x\\frac{\\partial z}{\\partial x} + y\\frac{\\partial z}{\\partial y} = x\\left(\\frac{4x}{2x^2 + y^2}\\right) + y\\left(\\frac{2y}{2x^2 + y^2}\\right) = \\frac{4x^2 + 2y^2}{2x^2 + y^2}$$<div class=\"step-divider\"></div><strong>Step 4 — Factor the Numerator and Cancel the Common Denominator:</strong><br>\nFactoring $2$ out of the numerator $4x^2 + 2y^2 = 2(2x^2 + y^2)$ allows us to cancel the nonzero quantity $(2x^2 + y^2)$:\n$$x\\frac{\\partial z}{\\partial x} + y\\frac{\\partial z}{\\partial y} = \\frac{2(2x^2 + y^2)}{2x^2 + y^2} = 2$$\nTherefore, the expression simplifies identically to the constant $2$, which corresponds to Choice <strong>(A)</strong>."
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
    "solution": "<strong>Step 1 — Recall the Formula for the Maximum Value of the Directional Derivative:</strong><br>\nFor a differentiable function $f(x, y)$, the directional derivative at a point $(x_0, y_0)$ in the direction of a unit vector $\\vec{u}$ is $D_{\\vec{u}} f(x_0, y_0) = \\nabla f(x_0, y_0) \\cdot \\vec{u} = \\|\\nabla f(x_0, y_0)\\|\\cos\\theta$. Its maximum value occurs when $\\vec{u}$ is parallel to $\\nabla f(x_0, y_0)$ ($\\cos\\theta = 1$) and equals:\n$$\\max_{\\|\\vec{u}\\|=1} D_{\\vec{u}} f(x_0, y_0) = \\|\\nabla f(x_0, y_0)\\| = \\sqrt{\\left[f_x(x_0, y_0)\\right]^2 + \\left[f_y(x_0, y_0)\\right]^2}$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the First-Order Partial Derivatives of $f(x, y) = y^2 - x\\sqrt{y}$:</strong><br>\nWriting $f(x, y) = y^2 - x y^{1/2}$ for $y > 0$, we differentiate with respect to $x$ and $y$:\n$$f_x(x, y) = \\frac{\\partial}{\\partial x}\\left(y^2 - x y^{1/2}\\right) = -y^{1/2} = -\\sqrt{y}$$\n$$f_y(x, y) = \\frac{\\partial}{\\partial y}\\left(y^2 - x y^{1/2}\\right) = 2y - \\frac{x}{2\\sqrt{y}}$$<div class=\"step-divider\"></div><strong>Step 3 — Evaluate the Gradient Vector $\\nabla f$ at the Point $(0, 1)$:</strong><br>\nSubstituting $x = 0$ and $y = 1$ into the partial derivatives yields:\n$$f_x(0, 1) = -\\sqrt{1} = -1$$\n$$f_y(0, 1) = 2(1) - \\frac{0}{2\\sqrt{1}} = 2 - 0 = 2$$\nThus, the gradient vector at $(0, 1)$ is $\\nabla f(0, 1) = \\langle -1, 2 \\rangle$.<div class=\"step-divider\"></div><strong>Step 4 — Compute the Magnitude $\\|\\nabla f(0, 1)\\|$:</strong><br>\nTaking the Euclidean norm of $\\nabla f(0, 1) = \\langle -1, 2 \\rangle$ gives the maximum directional derivative:\n$$\\|\\nabla f(0, 1)\\| = \\sqrt{(-1)^2 + 2^2} = \\sqrt{1 + 4} = \\sqrt{5}$$\nTherefore, the maximum value of the directional derivative at $(0, 1)$ is $\\sqrt{5}$, which corresponds to Choice <strong>(B)</strong>."
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
    "solution": "<strong>Step 1 — State the Definition of a Level Surface:</strong><br>\nA level surface of a function of three variables $f(x, y, z)$ is the set of all points $(x, y, z) \\in \\mathbb{R}^3$ where the function takes a constant value $k$:\n$$f(x, y, z) = k$$\nFor $f(x, y, z) = 4x^2 + 4y^2 - z^2$, any level surface has the equation:\n$$4x^2 + 4y^2 - z^2 = k$$<div class=\"step-divider\"></div><strong>Step 2 — Determine the Constant $k$ Using the Given Point $(1, 1, 3)$:</strong><br>\nBecause the level surface passes through the point $P_0(1, 1, 3)$, the constant $k$ must equal the value of $f$ evaluated at $(1, 1, 3)$:\n$$k = f(1, 1, 3) = 4(1)^2 + 4(1)^2 - (3)^2 = 4 + 4 - 9 = 8 - 9 = -1$$<div class=\"step-divider\"></div><strong>Step 3 — Substitute $k = -1$ into the Level Surface Equation:</strong><br>\nSubstituting $k = -1$ into $4x^2 + 4y^2 - z^2 = k$ gives the equation of the level surface passing through $(1, 1, 3)$:\n$$4x^2 + 4y^2 - z^2 = -1$$<div class=\"step-divider\"></div><strong>Step 4 — Rearrange the Equation to Isolate $z^2$:</strong><br>\nTo match the format of the answer choices (all written with $z^2$ isolated on the left-hand side), add $z^2 + 1$ to both sides of $4x^2 + 4y^2 - z^2 = -1$:\n$$z^2 = 4x^2 + 4y^2 + 1$$\nVerifying at $(1, 1, 3)$: $3^2 = 9$ and $4(1)^2 + 4(1)^2 + 1 = 9$. This equation corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Set Up the System of Equations for the Intersection of $L_1$ and $L_2$:</strong><br>\nAt the point of intersection $(a, b, c)$ between the two lines $L_1$ (with parameter $t$) and $L_2$ (with parameter $s$), their $x$-, $y$-, and $z$-coordinates must simultaneously coincide:\n$$\\begin{aligned}\nx:\\quad 1 + 2t &= 8 - 3s \\implies 2t + 3s = 7 \\quad &\\text{(Equation 1)} \\\\\ny:\\quad 1 - 3t &= -8 + 4s \\implies 3t + 4s = 9 \\quad &\\text{(Equation 2)} \\\\\nz:\\quad 2 - 5t &= -14 + 7s \\implies 5t + 7s = 16 \\quad &\\text{(Equation 3)}\n\\end{aligned}$$<div class=\"step-divider\"></div><strong>Step 2 — Solve Equations (1) and (2) for the Parameters $t$ and $s$:</strong><br>\nTo eliminate $t$ between Equations (1) and (2), multiply Equation (1) by $3$ and Equation (2) by $2$:\n$$\\begin{aligned}\n6t + 9s &= 21 \\\\\n6t + 8s &= 18\n\\end{aligned}$$\nSubtracting the second equation from the first yields $s = 3$. Substituting $s = 3$ back into Equation (1) gives:\n$$2t + 3(3) = 7 \\implies 2t = -2 \\implies t = -1$$<div class=\"step-divider\"></div><strong>Step 3 — Verify Consistency in the $z$-Coordinate and Find $(a, b, c)$:</strong><br>\nChecking $t = -1$ and $s = 3$ in the $z$-equations of both lines confirms they intersect:\n$$z(L_1) = 2 - 5(-1) = 7, \\qquad z(L_2) = -14 + 7(3) = -14 + 21 = 7 \\quad (\\checkmark)$$\nSubstituting $t = -1$ into $L_1$ gives the coordinates of the intersection point $(a, b, c)$:\n$$a = 1 + 2(-1) = -1, \\qquad b = 1 - 3(-1) = 4, \\qquad c = 7$$<div class=\"step-divider\"></div><strong>Step 4 — Compute the Product $abc$:</strong><br>\nMultiplying the coordinates $(a, b, c) = (-1, 4, 7)$ together gives:\n$$abc = (-1)(4)(7) = -28$$\nwhich corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Find Two Non-Parallel Vectors Parallel to the Required Plane:</strong><br>\nFirst, since the plane passes through $P(2, 1, 0)$ and $Q(0, 3, 4)$, the displacement vector $\\overrightarrow{PQ}$ lies in the plane:\n$$\\overrightarrow{PQ} = \\langle 0 - 2,\\; 3 - 1,\\; 4 - 0 \\rangle = \\langle -2,\\; 2,\\; 4 \\rangle$$\nSecond, the required plane is perpendicular to the $xz$-plane ($y = 0$). Therefore, the normal vector of the $xz$-plane, $\\vec{n}_{xz} = \\vec{j} = \\langle 0, 1, 0 \\rangle$, is parallel to our plane (and orthogonal to our plane's normal vector $\\vec{n}$).<div class=\"step-divider\"></div><strong>Step 2 — Compute the Normal Vector $\\vec{n}$ via the Cross Product:</strong><br>\nTaking the cross product of $\\overrightarrow{PQ} = \\langle -2, 2, 4 \\rangle$ and $\\vec{n}_{xz} = \\langle 0, 1, 0 \\rangle$ produces a normal vector to the required plane:\n$$\\vec{n} = \\overrightarrow{PQ} \\times \\vec{n}_{xz} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ -2 & 2 & 4 \\\\ 0 & 1 & 0 \\end{vmatrix} = \\vec{i}(0 - 4) - \\vec{j}(0 - 0) + \\vec{k}(-2 - 0) = \\langle -4,\\; 0,\\; -2 \\rangle$$\nDividing by $-2$ gives the simpler normal vector $\\vec{n}_0 = \\langle 2, 0, 1 \\rangle$.<div class=\"step-divider\"></div><strong>Step 3 — Write the Plane Equation Using Point $P(2, 1, 0)$ and Scale to Constant $8$:</strong><br>\nUsing the point-normal equation with $P(2, 1, 0)$ and $\\vec{n}_0 = \\langle 2, 0, 1 \\rangle$:\n$$2(x - 2) + 0(y - 1) + 1(z - 0) = 0 \\iff 2x + z = 4$$\nTo match the specified right-hand side constant $8$ in $ax + by + cz = 8$, multiply both sides of $2x + 0y + z = 4$ by $2$:\n$$4x + 0y + 2z = 8$$<div class=\"step-divider\"></div><strong>Step 4 — Identify $a, b, c$ and Compute $a + b + c$:</strong><br>\nComparing $4x + 0y + 2z = 8$ with $ax + by + cz = 8$ gives:\n$$a = 4, \\qquad b = 0, \\qquad c = 2$$\nAdding the three coefficients yields:\n$$a + b + c = 4 + 0 + 2 = 6$$\nwhich corresponds to Choice <strong>(A)</strong>."
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
    "solution": "<strong>Step 1 — Test Continuity and Differentiability of $f$ and $g$ at $(0, 0)$ (Choices C and D):</strong><br>\nAlong the line $y = x$ ($x \\neq 0$), the expression $\\frac{4xy}{x^2 + y^2}$ equals $\\frac{4x^2}{2x^2} = 2$, whereas along the $x$-axis ($y = 0, x \\neq 0$), it equals $\\frac{0}{x^2} = 0$. Since $2 \\neq 0$, the limit\n$$\\lim_{(x,y)\\to(0,0)} \\frac{4xy}{x^2 + y^2} \\quad \\text{does not exist}$$\nTherefore, <strong>neither $f$ nor $g$ is continuous at $(0, 0)$</strong>. Because differentiability at a point strictly requires continuity at that point, <strong>neither $f$ nor $g$ is differentiable at $(0, 0)$</strong>! Thus, Choice (C) (\"$f$ is not differentiable at $(0, 0)$\") is TRUE, while Choice (D) (\"$g$ is differentiable at $(0, 0)$\") is <strong>FALSE</strong>.<div class=\"step-divider\"></div><strong>Step 2 — Verify $f_x(0, 0) = 0$ (Choice B):</strong><br>\nUsing the limit definition of the partial derivative at $(0, 0)$ with $f(0, 0) = 0$ and $f(h, 0) = \\frac{4(h)(0)}{h^2 + 0} = 0$:\n$$f_x(0, 0) = \\lim_{h \\to 0} \\frac{f(h, 0) - f(0, 0)}{h} = \\lim_{h \\to 0} \\frac{0 - 0}{h} = 0$$\nThus, Statement (B) is TRUE.<div class=\"step-divider\"></div><strong>Step 3 — Verify $D_{\\vec{u}} f(0, 0)$ Does Not Exist (Choice E):</strong><br>\nFor $\\vec{u} = \\left\\langle \\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}} \\right\\rangle$ and $h \\neq 0$, note that $f\\left(\\frac{h}{\\sqrt{2}}, \\frac{h}{\\sqrt{2}}\\right) = \\frac{4(h^2/2)}{h^2/2 + h^2/2} = 2$. By the limit definition of the directional derivative:\n$$D_{\\vec{u}} f(0, 0) = \\lim_{h \\to 0} \\frac{f(h/\\sqrt{2},\\; h/\\sqrt{2}) - f(0, 0)}{h} = \\lim_{h \\to 0} \\frac{2 - 0}{h} = \\lim_{h \\to 0} \\frac{2}{h} \\quad \\text{(DNE)}$$\nThus, Statement (E) is TRUE.<div class=\"step-divider\"></div><strong>Step 4 — Verify $D_{\\vec{u}} g(0, 0) = 0$ (Choice A) and Conclude:</strong><br>\nFor $g(x, y)$, we are given $g(0, 0) = 2$, which matches the value $g(h/\\sqrt{2}, h/\\sqrt{2}) = 2$ along the line $y = x$. Therefore:\n$$D_{\\vec{u}} g(0, 0) = \\lim_{h \\to 0} \\frac{g(h/\\sqrt{2},\\; h/\\sqrt{2}) - g(0, 0)}{h} = \\lim_{h \\to 0} \\frac{2 - 2}{h} = \\lim_{h \\to 0} 0 = 0$$\nThus, Statement (A) is also TRUE. Consequently, the only FALSE statement is that $g$ is differentiable at $(0, 0)$, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Analyze Choice (A): $16x^2 + y^2 + 16z^2 = 4$:</strong><br>\nDividing both sides of $16x^2 + y^2 + 16z^2 = 4$ by $4$ puts the equation into standard quadric form:\n$$4x^2 + \\frac{y^2}{4} + 4z^2 = 1 \\iff \\frac{x^2}{(1/2)^2} + \\frac{y^2}{2^2} + \\frac{z^2}{(1/2)^2} = 1$$\nBecause all three variables $x^2, y^2, z^2$ are present with positive coefficients and sum to $1$, this surface is a bounded <strong>ellipsoid</strong> (specifically a spheroid), <strong>NOT a cylinder</strong> (a cylinder along a coordinate axis would have one variable missing). Thus, statement (A) is <strong>FALSE</strong>.<div class=\"step-divider\"></div><strong>Step 2 — Verify Choices (B) and (C):</strong><br>\n<ul>\n<li><strong>Choice (B):</strong> $16x^2 - y^2 + 16z^2 = 0 \\iff y^2 = 16x^2 + 16z^2$. Since the constant term is $0$ and two positive squares equal one square, this is an <strong>elliptic (circular) cone</strong> opening along the $y$-axis (TRUE).</li>\n<li><strong>Choice (C):</strong> $16x^2 - y^2 + 16z^2 = 4 \\iff 4x^2 - \\frac{y^2}{4} + 4z^2 = 1$. Having two positive squared terms and one negative squared term equal to $1$ defines a <strong>hyperboloid of one sheet</strong> along the $y$-axis (TRUE).</li>\n</ul><div class=\"step-divider\"></div><strong>Step 3 — Verify Choice (D): $16x^2 - y + 16z^2 = 4$:</strong><br>\nSolving for the linear variable $y$ gives:\n$$y = 16x^2 + 16z^2 - 4$$\nBecause $y$ is first-degree and $x^2, z^2$ have the same positive sign, the graph is an <strong>elliptic (circular) paraboloid</strong> with vertex at $(0, -4, 0)$ opening in the $+y$ direction (TRUE).<div class=\"step-divider\"></div><strong>Step 4 — Verify Choice (E): $16x^2 - y^2 - 16z^2 = 4$:</strong><br>\nDividing by $4$ gives:\n$$4x^2 - \\frac{y^2}{4} - 4z^2 = 1$$\nHaving one positive squared term ($4x^2$) and two negative squared terms ($-\\frac{y^2}{4}$ and $-4z^2$) equal to $+1$ defines a <strong>hyperboloid of two sheets</strong> opening along the $x$-axis (TRUE). Therefore, the only FALSE statement is Choice <strong>(A)</strong>."
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
    "solution": "<p><strong>Step 1 — Determine the Normal Vector of the Plane and Line Direction:</strong><br>\nThe given plane equation is $-x + 2y + z = 5$. Recall that for any plane written in standard linear form $Ax + By + Cz = D$, the vector of coefficients $\\vec{n} = \\langle A, B, C \\rangle$ is orthogonal (normal) to the plane:\n$$\\vec{n} = \\langle -1, 2, 1 \\rangle$$\nSince the required line $L$ is perpendicular to this plane, its direction vector $\\vec{v}$ must be parallel to the plane's normal vector $\\vec{n}$. Thus, we take $\\vec{v} = \\langle -1, 2, 1 \\rangle$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Construct the Parametric Equations of the Line:</strong><br>\nA line passing through the base point $P_0(x_0, y_0, z_0) = (-4, 5, 2)$ with direction vector $\\vec{v} = \\langle -1, 2, 1 \\rangle$ has parametric equations $x = x_0 + v_1 t$, $y = y_0 + v_2 t$, and $z = z_0 + v_3 t$:\n$$x(t) = -4 - t, \\qquad y(t) = 5 + 2t, \\qquad z(t) = 2 + t \\qquad (t \\in \\mathbb{R})$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Solve for the Parameter $t$ at the Point $(-3, a, b)$:</strong><br>\nBecause the point $Q(-3, a, b)$ lies on the line $L$, there exists a unique parameter value $t$ that produces its coordinates. Equating the $x$-coordinate to $-3$:\n$$-4 - t = -3 \\implies -t = -3 + 4 = 1 \\implies t = -1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Evaluate $a$, $b$, and Compute the Sum $a + b$:</strong><br>\nSubstitute $t = -1$ into the parametric equations for $y(t)$ and $z(t)$ to find $a$ and $b$:\n$$a = y(-1) = 5 + 2(-1) = 5 - 2 = 3$$\n$$b = z(-1) = 2 + (-1) = 1$$\nAdding these two coordinate values together yields:\n$$a + b = 3 + 1 = 4$$\nTherefore, $a + b = 4$, which corresponds to Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Identify Vectors Lying in or Parallel to the Desired Plane:</strong><br>\nLet $\\mathcal{P}_1$ be the desired plane $ax + by + cz = 21$. Since $\\mathcal{P}_1$ passes through the points $P(4, 1, 3)$ and $Q(2, -2, 1)$, the displacement vector $\\vec{PQ}$ lies entirely within $\\mathcal{P}_1$:\n$$\\vec{PQ} = \\langle 2 - 4, \\; -2 - 1, \\; 1 - 3 \\rangle = \\langle -2, -3, -2 \\rangle$$\nFurthermore, $\\mathcal{P}_1$ is perpendicular to the plane $\\mathcal{P}_2: x + 2y - z = 2$, whose normal vector is $\\vec{n}_2 = \\langle 1, 2, -1 \\rangle$. Consequently, the normal vector $\\vec{n}_1$ of $\\mathcal{P}_1$ must be orthogonal to both $\\vec{PQ}$ and $\\vec{n}_2$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Compute the Normal Vector $\\vec{n}_1$ via the Cross Product:</strong><br>\nTaking the cross product of $\\vec{PQ}$ and $\\vec{n}_2$ produces a normal vector to $\\mathcal{P}_1$:\n$$\\vec{n}_1 = \\vec{PQ} \\times \\vec{n}_2 = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ -2 & -3 & -2 \\\\ 1 & 2 & -1 \\end{vmatrix}$$\n$$\\vec{n}_1 = \\mathbf{i}\\big((-3)(-1) - (-2)(2)\\big) - \\mathbf{j}\\big((-2)(-1) - (-2)(1)\\big) + \\mathbf{k}\\big((-2)(2) - (-3)(1)\\big)$$\n$$\\vec{n}_1 = \\mathbf{i}(3 + 4) - \\mathbf{j}(2 + 2) + \\mathbf{k}(-4 + 3) = \\langle 7, -4, -1 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Formulate the Plane Equation and Normalize to Constant $21$:</strong><br>\nUsing the point $P(4, 1, 3)$ and normal vector $\\vec{n}_1 = \\langle 7, -4, -1 \\rangle$, the point-normal equation of the plane is:\n$$7(x - 4) - 4(y - 1) - 1(z - 3) = 0 \\iff 7x - 4y - z - 28 + 4 + 3 = 0 \\iff 7x - 4y - z = 21$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Extract Coefficients and Compute $a + b + c$:</strong><br>\nSince the right-hand side already equals $21$, we directly compare $7x - 4y - z = 21$ with $ax + by + cz = 21$:\n$$a = 7, \\qquad b = -4, \\qquad c = -1$$\nSumming the coefficients gives:\n$$a + b + c = 7 + (-4) + (-1) = 2$$\nThis result equals $2$, which corresponds to Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Extract a Reference Point and Direction Vector from the Line:</strong><br>\nThe line $L$ is given parametrically by $x = 1 - t$, $y = 2 + t$, and $z = -2t$. Setting $t = 0$ gives the reference point $P_0(1, 2, 0)$ on $L$, and reading the coefficients of $t$ gives the direction vector:\n$$\\vec{v} = \\langle -1, 1, -2 \\rangle$$\nFrom $P_0(1, 2, 0)$ to the external point $P(-2, 1, 3)$, the displacement vector is:\n$$\\vec{P_0 P} = \\langle -2 - 1, \\; 1 - 2, \\; 3 - 0 \\rangle = \\langle -3, -1, 3 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Evaluate the Cross Product $\\vec{P_0 P} \\times \\vec{v}$:</strong><br>\nThe perpendicular distance from $P$ to the line $L$ relies on the magnitude of the cross product $\\vec{P_0 P} \\times \\vec{v}$:\n$$\\vec{P_0 P} \\times \\vec{v} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ -3 & -1 & 3 \\\\ -1 & 1 & -2 \\end{vmatrix}$$\n$$= \\mathbf{i}\\big((-1)(-2) - (3)(1)\\big) - \\mathbf{j}\\big((-3)(-2) - (3)(-1)\\big) + \\mathbf{k}\\big((-3)(1) - (-1)(-1)\\big)$$\n$$= \\mathbf{i}(2 - 3) - \\mathbf{j}(6 + 3) + \\mathbf{k}(-3 - 1) = \\langle -1, -9, -4 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Compute Vector Magnitudes:</strong><br>\nCalculate the Euclidean norm of the cross product and the direction vector $\\vec{v}$:\n$$\\|\\vec{P_0 P} \\times \\vec{v}\\| = \\sqrt{(-1)^2 + (-9)^2 + (-4)^2} = \\sqrt{1 + 81 + 16} = \\sqrt{98} = \\sqrt{49 \\times 2} = 7\\sqrt{2}$$\n$$\\|\\vec{v}\\| = \\sqrt{(-1)^2 + 1^2 + (-2)^2} = \\sqrt{1 + 1 + 4} = \\sqrt{6} = \\sqrt{2}\\sqrt{3}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Apply the Point-to-Line Distance Formula:</strong><br>\nDividing the parallelogram area $\\|\\vec{P_0 P} \\times \\vec{v}\\|$ by the base length $\\|\\vec{v}\\|$ yields the perpendicular distance $d$:\n$$d = \\frac{\\|\\vec{P_0 P} \\times \\vec{v}\\|}{\\|\\vec{v}\\|} = \\frac{7\\sqrt{2}}{\\sqrt{2}\\sqrt{3}} = \\frac{7}{\\sqrt{3}}$$\nThus, the distance is $\\frac{7}{\\sqrt{3}}$, which corresponds to Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Identify Points and Direction Vectors for Both Skew Lines:</strong><br>\nFrom the parametric equations of $L_1: x = 2t, y = 4t, z = 6t$ (at $t = 0$) and $L_2: x = 1 - s, y = 4 + s, z = -1 + s$ (at $s = 0$), we extract a base point and direction vector for each line:\n$$P_1 = (0, 0, 0), \\qquad \\vec{v}_1 = \\langle 2, 4, 6 \\rangle$$\n$$P_2 = (1, 4, -1), \\qquad \\vec{v}_2 = \\langle -1, 1, 1 \\rangle$$\nThe vector connecting the two base points is $\\vec{P_1 P_2} = \\langle 1 - 0, \\; 4 - 0, \\; -1 - 0 \\rangle = \\langle 1, 4, -1 \\rangle$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Find the Common Normal Vector $\\vec{n} = \\vec{v}_1 \\times \\vec{v}_2$:</strong><br>\nSkew lines lie in parallel planes whose common normal vector $\\vec{n}$ is orthogonal to both $\\vec{v}_1$ and $\\vec{v}_2$:\n$$\\vec{n} = \\vec{v}_1 \\times \\vec{v}_2 = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 2 & 4 & 6 \\\\ -1 & 1 & 1 \\end{vmatrix}$$\n$$\\vec{n} = \\mathbf{i}\\big(4(1) - 6(1)\\big) - \\mathbf{j}\\big(2(1) - 6(-1)\\big) + \\mathbf{k}\\big(2(1) - 4(-1)\\big) = \\langle -2, -8, 6 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Compute the Scalar Projection Numerator and Normal Magnitude:</strong><br>\nThe distance between $L_1$ and $L_2$ is the absolute scalar projection of $\\vec{P_1 P_2}$ onto $\\vec{n}$:\n$$\\vec{P_1 P_2} \\cdot \\vec{n} = (1)(-2) + (4)(-8) + (-1)(6) = -2 - 32 - 6 = -40$$\n$$\\|\\vec{n}\\| = \\sqrt{(-2)^2 + (-8)^2 + 6^2} = \\sqrt{4 + 64 + 36} = \\sqrt{104} = \\sqrt{4 \\times 26} = 2\\sqrt{26}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Evaluate the Skew-Line Distance Formula:</strong><br>\nDividing $|\\vec{P_1 P_2} \\cdot \\vec{n}|$ by $\\|\\vec{n}\\|$ gives:\n$$d = \\frac{|\\vec{P_1 P_2} \\cdot \\vec{n}|}{\\|\\vec{n}\\|} = \\frac{|-40|}{2\\sqrt{26}} = \\frac{20}{\\sqrt{26}}$$\nThis simplifies to $\\frac{20}{\\sqrt{26}}$, which corresponds to Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Group Variables and Factor Out Leading Quadratic Coefficients:</strong><br>\nStart with the given second-degree equation in $x$, $y$, and $z$:\n$$2x^2 + 4y^2 + 2z^2 - 8x + 8y - 4z = c$$\nGroup terms by variable and factor out the leading coefficient of each squared term:\n$$2(x^2 - 4x) + 4(y^2 + 2y) + 2(z^2 - 2z) = c$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Complete the Square for $x$, $y$, and $z$:</strong><br>\nAdd the required square-completion constants inside each parenthesis and balance them on the right-hand side:\n$$2(x^2 - 4x + 4) + 4(y^2 + 2y + 1) + 2(z^2 - 2z + 1) = c + 2(4) + 4(1) + 2(1)$$\n$$2(x - 2)^2 + 4(y + 1)^2 + 2(z - 1)^2 = c + 8 + 4 + 2$$\n$$2(x - 2)^2 + 4(y + 1)^2 + 2(z - 1)^2 = c + 14$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Establish the Positivity Condition for a Real Non-Degenerate Ellipsoid:</strong><br>\nOn the left-hand side, all three squared terms $(x - 2)^2$, $(y + 1)^2$, and $(z - 1)^2$ have strictly positive coefficients ($2, 4, 2 > 0$). For this equation to represent a non-degenerate real ellipsoid of the form $\\frac{(x-2)^2}{a^2} + \\frac{(y+1)^2}{b^2} + \\frac{(z-1)^2}{c_0^2} = 1$, the right-hand side must be strictly positive:\n$$c + 14 > 0 \\iff c > -14$$\n(If $c = -14$, the graph degenerates to the single point $(2, -1, 1)$; if $c < -14$, the graph is the empty set.)</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Test the Given Options Against $c > -14$:</strong><br>\nInspecting the five choices $\\{-21, -11, -15, -17, -19\\}$, only $c = -11$ satisfies $-11 > -14$ (giving $c + 14 = 3 > 0$), which corresponds to Choice <strong>(B)</strong>.</p>"
  },
  {
    "id": "243_6",
    "term": "243",
    "number": 6,
    "section": "13.4",
    "topic": "13.4 Differentials & Linear Approx",
    "question": "Using differentials, $(2.01)^2(6.01) - 2^2(6)$ is approximately",
    "choices": [
      "$0.28$",
      "$0.14$",
      "$0.26$",
      "$0.24$",
      "$0.30$"
    ],
    "correct_answer": "A",
    "solution": "<p><strong>Step 1 — Define the Multivariable Function and Base Point:</strong><br>\nWe wish to approximate the increment $\\Delta f = (2.01)^2(6.01) - 2^2(6)$ using total differentials. Define the two-variable function:\n$$f(x, y) = x^2 y$$\nChoose the clean integer base point $(x_0, y_0) = (2, 6)$, where the exact base value is:\n$$f(2, 6) = (2)^2(6) = 4 \\times 6 = 24$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Compute the First-Order Partial Derivatives at $(2, 6)$:</strong><br>\nDifferentiate $f(x, y) = x^2 y$ partially with respect to $x$ and $y$:\n$$f_x(x, y) = \\frac{\\partial}{\\partial x}(x^2 y) = 2xy, \\qquad f_y(x, y) = \\frac{\\partial}{\\partial y}(x^2 y) = x^2$$\nEvaluating both partial derivatives at the base point $(x_0, y_0) = (2, 6)$ gives:\n$$f_x(2, 6) = 2(2)(6) = 24, \\qquad f_y(2, 6) = (2)^2 = 4$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Identify the Differentials $dx$ and $dy$:</strong><br>\nAs $(x, y)$ moves from $(2, 6)$ to $(2.01, 6.01)$, the coordinate increments are:\n$$dx = \\Delta x = 2.01 - 2 = 0.01, \\qquad dy = \\Delta y = 6.01 - 6 = 0.01$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Evaluate the Total Differential $df \\approx \\Delta f$:</strong><br>\nBy local linear approximation, the change in the function $\\Delta f = f(2.01, 6.01) - f(2, 6) = (2.01)^2(6.01) - 2^2(6)$ is approximated by the total differential $df$:\n$$\\Delta f \\approx df = f_x(2, 6)\\,dx + f_y(2, 6)\\,dy$$\n$$df = 24(0.01) + 4(0.01) = 0.24 + 0.04 = 0.28$$\nThus, $(2.01)^2(6.01) - 2^2(6) \\approx 0.28$, which corresponds to Choice <strong>(A)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Express the Function with Fractional Exponents:</strong><br>\nWe are given the three-variable function:\n$$w(x, y, z) = \\sqrt{x - y} + \\sqrt{y - z} = (x - y)^{1/2} + (y - z)^{1/2}$$\nAt the point $(x, y, z) = (5, 3, 1)$, both radicands are strictly positive ($x - y = 2 > 0$ and $y - z = 2 > 0$), so $w$ is smooth and differentiable.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Compute Each First-Order Partial Derivative Using the Chain Rule:</strong><br>\nDifferentiate $w$ partially with respect to $x$, $y$, and $z$ while holding the remaining variables constant:\n$$\\frac{\\partial w}{\\partial x} = \\frac{1}{2}(x - y)^{-1/2} \\cdot (1) + 0 = \\frac{1}{2\\sqrt{x - y}}$$\n$$\\frac{\\partial w}{\\partial y} = \\frac{1}{2}(x - y)^{-1/2} \\cdot (-1) + \\frac{1}{2}(y - z)^{-1/2} \\cdot (1) = -\\frac{1}{2\\sqrt{x - y}} + \\frac{1}{2\\sqrt{y - z}}$$\n$$\\frac{\\partial w}{\\partial z} = 0 + \\frac{1}{2}(y - z)^{-1/2} \\cdot (-1) = -\\frac{1}{2\\sqrt{y - z}}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Evaluate the Partial Derivatives at $(5, 3, 1)$:</strong><br>\nSubstitute $x = 5$, $y = 3$, and $z = 1$ (so $\\sqrt{x - y} = \\sqrt{2}$ and $\\sqrt{y - z} = \\sqrt{2}$):\n$$\\frac{\\partial w}{\\partial x}(5, 3, 1) = \\frac{1}{2\\sqrt{2}}, \\qquad \\frac{\\partial w}{\\partial y}(5, 3, 1) = -\\frac{1}{2\\sqrt{2}} + \\frac{1}{2\\sqrt{2}} = 0, \\qquad \\frac{\\partial w}{\\partial z}(5, 3, 1) = -\\frac{1}{2\\sqrt{2}}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Sum the Three Partial Derivatives:</strong><br>\nAdding the three partial derivatives together yields a telescoping cancellation:\n$$\\frac{\\partial w}{\\partial x} + \\frac{\\partial w}{\\partial y} + \\frac{\\partial w}{\\partial z} = \\frac{1}{2\\sqrt{2}} + 0 - \\frac{1}{2\\sqrt{2}} = 0$$\nThus, the value of the sum is $0$, which corresponds to Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — State the Domain Condition for the Inverse Cosine Function:</strong><br>\nThe inverse cosine function $\\arccos(u) = \\cos^{-1}(u)$ is real-valued and well-defined if and only if its argument $u$ lies within the closed interval $[-1, 1]$:\n$$-1 \\le u \\le 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Solve the Compound Inequality for $y$ in Terms of $x$:</strong><br>\nFor $f(x, y) = \\arccos(x - y)$, substitute $u = x - y$ into the domain restriction:\n$$-1 \\le x - y \\le 1$$\nMultiply the entire compound inequality by $-1$ (which reverses the direction of both inequality signs):\n$$1 \\ge y - x \\ge -1 \\iff -1 \\le y - x \\le 1$$\nNow add $x$ to all three parts of the inequality:\n$$-1 + x \\le y \\le 1 + x$$\nHence, the domain of $f$ is $D = \\{(x, y) : -1 + x \\le y \\le 1 + x\\}$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Determine the Range $R$ of $f(x, y) = \\arccos(x - y)$:</strong><br>\nAs $(x, y)$ varies over the strip $D$, the quantity $u = x - y$ attains every real number in the full interval $[-1, 1]$ (for instance, setting $x = 0$ allows $y = -u \\in [-1, 1]$). Because the principal branch of $\\arccos(u)$ maps $[-1, 1]$ onto $[0, \\pi]$, the range is:\n$$R = [0, \\pi]$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Match Domain $D$ and Range $R$ to the Choices:</strong><br>\nCombining $D = \\{(x, y) : -1 + x \\le y \\le 1 + x\\}$ and $R = [0, \\pi]$ gives the exact description in Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Formulate the General Level Surface Equation:</strong><br>\nFor a function of three variables $f(x, y, z) = 4x^2 + 4y^2 - z^2$, the level surfaces are defined by setting $f(x, y, z) = k$, where $k \\in \\mathbb{R}$ is an arbitrary real constant:\n$$4x^2 + 4y^2 - z^2 = k$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Analyze the Positive Case for Constant $k$ (Hyperboloids of One Sheet):</strong><br>\nWhen $k > 0$, divide both sides by $k$ to obtain the standard canonical form:\n$$\\frac{x^2}{k/4} + \\frac{y^2}{k/4} - \\frac{z^2}{k} = 1$$\nAn equation with two positive squared terms and one negative squared term equal to $+1$ is a <strong>hyperboloid of one sheet</strong> centered at the origin along the $z$-axis.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Analyze the Zero and Negative Cases for Constant $k$:</strong><br>\n<ul>\n<li>When $k = 0$: The equation becomes $4x^2 + 4y^2 - z^2 = 0 \\iff z^2 = 4x^2 + 4y^2$, which represents a circular (elliptic) <strong>cone</strong> with vertex at the origin.</li>\n<li>When $k < 0$: Write $k = -c$ with $c > 0$. Dividing $4x^2 + 4y^2 - z^2 = -c$ by $-c$ gives:\n$$-\\frac{x^2}{c/4} - \\frac{y^2}{c/4} + \\frac{z^2}{c} = 1$$\nWith one positive squared term and two negative squared terms equal to $+1$, this surface is a <strong>hyperboloid of two sheets</strong>.</li>\n</ul></p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Synthesize the Complete Family of Level Surfaces:</strong><br>\nAs $k$ ranges over all real numbers, the level surfaces consist of hyperboloids of one sheet ($k > 0$), cones ($k = 0$), and hyperboloids of two sheets ($k < 0$), which corresponds to Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — State the Multivariable Chain Rule for $w_s$:</strong><br>\nSince $w = f(x, y)$ is a differentiable function of the intermediate variables $x = g(s, t)$ and $y = h(s, t)$, the partial derivative of $w$ with respect to $s$ is given by the Chain Rule:\n$$w_s(s, t) = \\frac{\\partial w}{\\partial s} = \\frac{\\partial f}{\\partial x}\\frac{\\partial x}{\\partial s} + \\frac{\\partial f}{\\partial y}\\frac{\\partial y}{\\partial s} = f_x\\big(g(s, t), h(s, t)\\big)\\,g_s(s, t) + f_y\\big(g(s, t), h(s, t)\\big)\\,h_s(s, t)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Determine the Intermediate Point $(x, y)$ at $(s, t) = (1, 2)$:</strong><br>\nEvaluate the intermediate coordinates $x$ and $y$ when $(s, t) = (1, 2)$ using the given function values:\n$$x = g(1, 2) = 4, \\qquad y = h(1, 2) = 3$$\nThus, the outer partial derivatives $f_x$ and $f_y$ must be evaluated at $(x, y) = (4, 3)$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Substitute the Given Derivative Values into the Chain Rule:</strong><br>\nAt $(s, t) = (1, 2)$, the problem provides:\n$$f_x(4, 3) = -4, \\qquad f_y(4, 3) = 6, \\qquad g_s(1, 2) = -3, \\qquad h_s(1, 2) = 5$$\nSubstituting these values into the formula from Step 1 gives:\n$$w_s(1, 2) = f_x(4, 3)\\,g_s(1, 2) + f_y(4, 3)\\,h_s(1, 2) = (-4)(-3) + (6)(5)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Compute the Final Numerical Value:</strong><br>\nPerforming the arithmetic:\n$$w_s(1, 2) = 12 + 30 = 42$$\nHence, $w_s(1, 2) = 42$, which corresponds to Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Check Direct Substitution and Identify the Indeterminate Form:</strong><br>\nConsider the two-variable limit:\n$$L = \\lim_{(x, y) \\to (1, 1)} \\frac{2x - y - 1}{\\sqrt{2x - y} - 1}$$\nSubstituting $(x, y) = (1, 1)$ directly yields $\\frac{2(1) - 1 - 1}{\\sqrt{2(1) - 1} - 1} = \\frac{0}{1 - 1} = \\frac{0}{0}$, which is an indeterminate form requiring algebraic simplification.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Multiply Numerator and Denominator by the Radical Conjugate:</strong><br>\nTo rationalize the denominator $\\sqrt{2x - y} - 1$, multiply both the numerator and the denominator by its conjugate $\\sqrt{2x - y} + 1$:\n$$\\frac{2x - y - 1}{\\sqrt{2x - y} - 1} \\cdot \\frac{\\sqrt{2x - y} + 1}{\\sqrt{2x - y} + 1} = \\frac{(2x - y - 1)\\big(\\sqrt{2x - y} + 1\\big)}{\\big(\\sqrt{2x - y}\\big)^2 - 1^2} = \\frac{(2x - y - 1)\\big(\\sqrt{2x - y} + 1\\big)}{2x - y - 1}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Cancel the Common Non-Zero Factor Near $(1, 1)$:</strong><br>\nFor all points $(x, y)$ in a punctured neighborhood of $(1, 1)$ where $2x - y \\ne 1$, the factor $(2x - y - 1)$ cancels identically from numerator and denominator:\n$$\\frac{(2x - y - 1)\\big(\\sqrt{2x - y} + 1\\big)}{2x - y - 1} = \\sqrt{2x - y} + 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Evaluate the Limit by Continuity:</strong><br>\nSince $g(x, y) = \\sqrt{2x - y} + 1$ is continuous at $(1, 1)$ (where $2x - y = 1 > 0$), we evaluate the limit by direct substitution:\n$$L = \\lim_{(x, y) \\to (1, 1)} \\big(\\sqrt{2x - y} + 1\\big) = \\sqrt{2(1) - 1} + 1 = \\sqrt{1} + 1 = 2$$\nThus, the limit is $2$, which corresponds to Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — State the Definition of Continuity at the Origin:</strong><br>\nA function $f(x, y)$ is continuous at $(0, 0)$ if and only if its value at $(0, 0)$ equals the two-variable limit as $(x, y) \\to (0, 0)$:\n$$f(0, 0) = \\lim_{(x, y) \\to (0, 0)} |xy|\\left(\\frac{x^2 - y^2}{x^2 + y^2}\\right)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Transform the Expression into Polar Coordinates:</strong><br>\nSubstitute $x = r\\cos\\theta$ and $y = r\\sin\\theta$ with $r^2 = x^2 + y^2 > 0$. As $(x, y) \\to (0, 0)$, the radial distance satisfies $r \\to 0^+$:\n$$f(r\\cos\\theta, r\\sin\\theta) = |r\\cos\\theta \\cdot r\\sin\\theta| \\cdot \\frac{r^2\\cos^2\\theta - r^2\\sin^2\\theta}{r^2}$$\nFactoring $r^2$ from numerator and denominator and using $\\cos^2\\theta - \\sin^2\\theta = \\cos(2\\theta)$ gives:\n$$f(r\\cos\\theta, r\\sin\\theta) = r^2 |\\cos\\theta\\sin\\theta|\\,\\cos(2\\theta)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Bound the Expression and Apply the Squeeze Theorem:</strong><br>\nFor all angles $\\theta \\in \\mathbb{R}$, trigonometric functions are bounded by $1$ in absolute value, so $|\\cos\\theta\\sin\\theta| \\le 1$ and $|\\cos(2\\theta)| \\le 1$. Therefore:\n$$0 \\le \\big|f(r\\cos\\theta, r\\sin\\theta)\\big| = r^2 |\\cos\\theta\\sin\\theta|\\,|\\cos(2\\theta)| \\le r^2$$\nSince $\\lim_{r \\to 0^+} r^2 = 0$, the Squeeze Theorem guarantees that:\n$$\\lim_{(x, y) \\to (0, 0)} |xy|\\left(\\frac{x^2 - y^2}{x^2 + y^2}\\right) = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Conclude the Required Value of $f(0, 0)$:</strong><br>\nTo make $f$ continuous at the origin, we must set $f(0, 0) = 0$, which corresponds to Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Set Up the Implicit Function $F(x, y, z) = 0$:</strong><br>\nMove all terms of the given equation $x\\ln y + y^2 z + z^2 = 8$ to the left-hand side to define the differentiable three-variable function:\n$$F(x, y, z) = x\\ln y + y^2 z + z^2 - 8 = 0$$\nBy the Implicit Function Theorem, when $F_z \\ne 0$, the partial derivative of $z$ with respect to $x$ is:\n$$\\frac{\\partial z}{\\partial x} = -\\frac{F_x(x, y, z)}{F_z(x, y, z)}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Compute the Partial Derivative $F_x$:</strong><br>\nDifferentiate $F(x, y, z)$ partially with respect to $x$, treating both $y$ and $z$ as constants:\n$$F_x = \\frac{\\partial}{\\partial x}\\big(x\\ln y + y^2 z + z^2 - 8\\big) = 1 \\cdot \\ln y + 0 + 0 - 0 = \\ln y$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Compute the Partial Derivative $F_z$:</strong><br>\nDifferentiate $F(x, y, z)$ partially with respect to $z$, treating both $x$ and $y$ as constants:\n$$F_z = \\frac{\\partial}{\\partial z}\\big(x\\ln y + y^2 z + z^2 - 8\\big) = 0 + y^2(1) + 2z - 0 = y^2 + 2z$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Substitute $F_x$ and $F_z$ into the Implicit Differentiation Formula:</strong><br>\nCombining the results from Steps 2 and 3 yields:\n$$\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z} = -\\frac{\\ln y}{y^2 + 2z}$$\nThis expression matches $-\\frac{\\ln y}{y^2 + 2z}$, which corresponds to Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Compute the First-Order Partial Derivatives $z_x$ and $z_y$:</strong><br>\nGiven $z = \\arctan\\left(\\frac{y}{x}\\right)$, recall that $\\frac{d}{du}[\\arctan u] = \\frac{1}{1 + u^2}$. Applying the Chain Rule with $u = \\frac{y}{x}$:\n$$\\frac{\\partial z}{\\partial x} = \\frac{1}{1 + (y/x)^2} \\cdot \\left(-\\frac{y}{x^2}\\right) = \\frac{-y/x^2}{\\frac{x^2 + y^2}{x^2}} = \\frac{-y}{x^2 + y^2}$$\n$$\\frac{\\partial z}{\\partial y} = \\frac{1}{1 + (y/x)^2} \\cdot \\left(\\frac{1}{x}\\right) = \\frac{1/x}{\\frac{x^2 + y^2}{x^2}} = \\frac{x}{x^2 + y^2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Compute the Second-Order Partial Derivative $\\frac{\\partial^2 z}{\\partial x^2}$:</strong><br>\nWrite $\\frac{\\partial z}{\\partial x} = -y(x^2 + y^2)^{-1}$ and differentiate with respect to $x$ holding $y$ constant:\n$$\\frac{\\partial^2 z}{\\partial x^2} = -y\\big(-(x^2 + y^2)^{-2} \\cdot 2x\\big) = \\frac{2xy}{(x^2 + y^2)^2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Compute the Second-Order Partial Derivative $\\frac{\\partial^2 z}{\\partial y^2}$:</strong><br>\nWrite $\\frac{\\partial z}{\\partial y} = x(x^2 + y^2)^{-1}$ and differentiate with respect to $y$ holding $x$ constant:\n$$\\frac{\\partial^2 z}{\\partial y^2} = x\\big(-(x^2 + y^2)^{-2} \\cdot 2y\\big) = \\frac{-2xy}{(x^2 + y^2)^2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Sum the Second Partials (Laplace Operator $\\nabla^2 z$):</strong><br>\nAdding the two second-order partial derivatives together gives:\n$$\\frac{\\partial^2 z}{\\partial x^2} + \\frac{\\partial^2 z}{\\partial y^2} = \\frac{2xy}{(x^2 + y^2)^2} + \\frac{-2xy}{(x^2 + y^2)^2} = 0$$\nThus, $z = \\arctan(y/x)$ is harmonic and satisfies Laplace's equation with value $0$, which corresponds to Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Substitute the Intermediate Equations into $w$:</strong><br>\nWe are given $w = z e^{xy}$ where $x = s - t$, $y = s + t$, and $z = st$. Because the answer choices are expressed purely in terms of $s$ and $t$, it is highly efficient to first express the exponent $xy$ in terms of $s$ and $t$ using the difference of squares identity:\n$$xy = (s - t)(s + t) = s^2 - t^2$$\nSubstituting $z = st$ and $xy = s^2 - t^2$ into $w = z e^{xy}$ yields:\n$$w(s, t) = s t\\,e^{s^2 - t^2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Apply the Product Rule with Respect to $s$:</strong><br>\nDifferentiate $w(s, t) = (st)\\,e^{s^2 - t^2}$ partially with respect to $s$ while treating $t$ as a constant:\n$$w_s = \\frac{\\partial}{\\partial s}(st) \\cdot e^{s^2 - t^2} + (st) \\cdot \\frac{\\partial}{\\partial s}\\left(e^{s^2 - t^2}\\right)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Evaluate the Derivative of Each Factor:</strong><br>\nSince $t$ is held constant:\n$$\\frac{\\partial}{\\partial s}(st) = t, \\qquad \\frac{\\partial}{\\partial s}\\left(e^{s^2 - t^2}\\right) = e^{s^2 - t^2} \\cdot \\frac{\\partial}{\\partial s}(s^2 - t^2) = 2s\\,e^{s^2 - t^2}$$\nSubstituting these back into the Product Rule expression gives:\n$$w_s = t\\,e^{s^2 - t^2} + (st)\\big(2s\\,e^{s^2 - t^2}\\big) = t\\,e^{s^2 - t^2} + 2s^2 t\\,e^{s^2 - t^2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Factor Out the Common Term $t e^{s^2 - t^2}$:</strong><br>\nFactoring $t e^{s^2 - t^2}$ from both terms produces:\n$$w_s = t(1 + 2s^2)e^{s^2 - t^2}$$\nThis matches $t(1 + 2s^2)e^{s^2 - t^2}$, which corresponds to Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Extract the Normal Vector and Intercepts of the Plane:</strong><br>\nThe given plane has equation $2x - y + z = 4$. Reading the coefficients of $x$, $y$, and $z$ directly gives the normal vector:\n$$\\vec{n}_1 = \\langle 2, -1, 1 \\rangle$$\nThis confirms that Choice (D) is TRUE. To find the $x$-axis intersection, set $y = 0$ and $z = 0$:\n$$2x - 0 + 0 = 4 \\implies x = 2$$\nThus, the plane intersects the $x$-axis at $(2, 0, 0)$, confirming Choice (A) is TRUE.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Verify Point Membership for Choices (C) and (E):</strong><br>\nSubstitute the coordinates of each test point into $2x - y + z = 4$:\n<ul>\n<li>For $(2, 1, 1)$: $2(2) - (1) + (1) = 4 - 1 + 1 = 4$, which holds true (Choice (C) is TRUE).</li>\n<li>For $(0, -4, 0)$: $2(0) - (-4) + 0 = 4$, which also holds true (Choice (E) is TRUE).</li>\n</ul></p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Test the Parallelism Condition in Choice (B):</strong><br>\nChoice (B) claims that $2x - y + z = 4$ is parallel to the plane $x - 2y + 2z = 2$, whose normal vector is $\\vec{n}_2 = \\langle 1, -2, 2 \\rangle$. Two planes are parallel if and only if their normal vectors are scalar multiples ($\\vec{n}_1 = k\\vec{n}_2$):\n$$\\frac{2}{1} = 2 \\qquad \\text{whereas} \\qquad \\frac{-1}{-2} = \\frac{1}{2}$$\nBecause $2 \\ne \\frac{1}{2}$, the normal vectors $\\vec{n}_1$ and $\\vec{n}_2$ are not proportional.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Identify the False Statement:</strong><br>\nSince $\\vec{n}_1$ and $\\vec{n}_2$ are not parallel, the two planes are not parallel. Therefore, the statement in Choice <strong>(B)</strong> is FALSE, which corresponds to Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Equate the $x$- and $y$-Coordinates of $L_1$ and $L_2$:</strong><br>\nAt the point of intersection $(a, b, c)$, the coordinates of $L_1: x = 1 + 2t, y = 1 - t, z = 2 - 3t$ and $L_2: x = 4 - s, y = -1 + 2s, z = -4 + 6s$ must coincide simultaneously:\n$$\\begin{cases} 1 + 2t = 4 - s \\implies 2t + s = 3 & \\text{(Equation 1)} \\\\ 1 - t = -1 + 2s \\implies t + 2s = 2 & \\text{(Equation 2)} \\end{cases}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Solve the Linear System for Parameters $t$ and $s$:</strong><br>\nFrom Equation 1, express $s = 3 - 2t$ and substitute into Equation 2:\n$$t + 2(3 - 2t) = 2 \\implies t + 6 - 4t = 2 \\implies -3t = -4 \\implies t = \\frac{4}{3}$$\nBack-substituting $t = \\frac{4}{3}$ gives $s = 3 - 2\\left(\\frac{4}{3}\\right) = \\frac{9 - 8}{3} = \\frac{1}{3}$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Verify $z$-Coordinate Consistency and Compute $(a, b, c)$:</strong><br>\nCheck that both lines yield the same $z$-coordinate at $(t, s) = \\left(\\frac{4}{3}, \\frac{1}{3}\\right)$:\n$$z(L_1) = 2 - 3\\left(\\frac{4}{3}\\right) = -2, \\qquad z(L_2) = -4 + 6\\left(\\frac{1}{3}\\right) = -2 \\quad \\checkmark$$\nNow evaluate $a$ and $b$ using $L_1$ at $t = \\frac{4}{3}$:\n$$a = 1 + 2\\left(\\frac{4}{3}\\right) = \\frac{11}{3}, \\qquad b = 1 - \\frac{4}{3} = -\\frac{1}{3}, \\qquad c = -2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Multiply the Coordinates to Find $abc$:</strong><br>\nMultiplying the three coordinates of the intersection point gives:\n$$abc = \\left(\\frac{11}{3}\\right)\\left(-\\frac{1}{3}\\right)(-2) = \\frac{22}{9}$$\nThus, $abc = \\frac{22}{9}$, which corresponds to Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Determine Two Vectors Orthogonal to the Desired Plane's Normal:</strong><br>\nSince the desired plane $\\mathcal{P}$ passes through $P(2, 2, 1)$ and $Q(-1, 1, -1)$, the displacement vector $\\vec{PQ}$ lies in $\\mathcal{P}$:\n$$\\vec{PQ} = \\langle -1 - 2, \\; 1 - 2, \\; -1 - 1 \\rangle = \\langle -3, -1, -2 \\rangle$$\nBecause $\\mathcal{P}$ is also perpendicular to the plane $2x - 3y + z = 3$, the normal vector $\\vec{m} = \\langle 2, -3, 1 \\rangle$ of the given plane is parallel to $\\mathcal{P}$. Therefore, the normal vector $\\vec{n}$ of $\\mathcal{P}$ is orthogonal to both $\\vec{PQ}$ and $\\vec{m}$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Calculate the Normal Vector $\\vec{n} = \\vec{PQ} \\times \\vec{m}$:</strong><br>\nCompute the cross product of $\\vec{PQ}$ and $\\vec{m}$:\n$$\\vec{n} = \\vec{PQ} \\times \\vec{m} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ -3 & -1 & -2 \\\\ 2 & -3 & 1 \\end{vmatrix}$$\n$$\\vec{n} = \\mathbf{i}\\big((-1)(1) - (-2)(-3)\\big) - \\mathbf{j}\\big((-3)(1) - (-2)(2)\\big) + \\mathbf{k}\\big((-3)(-3) - (-1)(2)\\big)$$\n$$\\vec{n} = \\mathbf{i}(-1 - 6) - \\mathbf{j}(-3 + 4) + \\mathbf{k}(9 + 2) = \\langle -7, -1, 11 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Write the Plane Equation and Match the Constant $5$:</strong><br>\nUsing point $P(2, 2, 1)$ and normal vector $\\vec{n} = \\langle -7, -1, 11 \\rangle$:\n$$-7(x - 2) - 1(y - 2) + 11(z - 1) = 0 \\iff -7x - y + 11z + 14 + 2 - 11 = 0$$\n$$-7x - y + 11z = -5 \\iff 7x + y - 11z = 5$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Identify $a, b, c$ and Compute $a + b + c$:</strong><br>\nComparing $7x + y - 11z = 5$ with $ax + by + cz = 5$ gives $a = 7$, $b = 1$, and $c = -11$. Their sum is:\n$$a + b + c = 7 + 1 + (-11) = -3$$\nThus, $a + b + c = -3$, which corresponds to Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Formulate the Distance from $(x, y, z)$ to the Point and the Plane:</strong><br>\nLet $P(x, y, z)$ be an arbitrary point in $\\mathbb{R}^3$. The Euclidean distance $d_1$ from $P(x, y, z)$ to the fixed focus point $F(0, 1, 0)$ is:\n$$d_1 = \\sqrt{(x - 0)^2 + (y - 1)^2 + (z - 0)^2} = \\sqrt{x^2 + (y - 1)^2 + z^2}$$\nThe perpendicular distance $d_2$ from $P(x, y, z)$ to the $xz$-plane (whose equation is $y = 0$) is:\n$$d_2 = |y - 0| = |y|$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Equate the Squared Distances and Simplify Algebraically:</strong><br>\nA point $P(x, y, z)$ is equidistant from $(0, 1, 0)$ and the $xz$-plane if and only if $d_1 = d_2$, or equivalently $d_1^2 = d_2^2$:\n$$x^2 + (y - 1)^2 + z^2 = y^2$$\nExpand $(y - 1)^2 = y^2 - 2y + 1$:\n$$x^2 + y^2 - 2y + 1 + z^2 = y^2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Solve for the Linear Variable $y$ in Standard Quadric Form:</strong><br>\nSubtract $y^2$ from both sides and isolate $y$:\n$$x^2 + z^2 + 1 = 2y \\iff y - \\frac{1}{2} = \\frac{x^2}{2} + \\frac{z^2}{2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Classify the Resulting Quadric Surface:</strong><br>\nIn the canonical equation $y - \\frac{1}{2} = \\frac{x^2}{2} + \\frac{z^2}{2}$, the variable $y$ appears to the first power while $x^2$ and $z^2$ both appear with positive coefficients. Cross-sections parallel to the $xz$-plane ($y = k > 1/2$) are circles/ellipses, and traces in planes containing the $y$-axis are parabolas. Therefore, the surface is an <strong>elliptic paraboloid</strong>, which corresponds to Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Rearrange the Equation into Standard Quadric Form:</strong><br>\nWe are given the second-degree surface equation:\n$$z^2 = 1 - 2x^2 - 3y^2$$\nMove all variable terms to the left-hand side so that the constant $+1$ remains isolated on the right-hand side:\n$$2x^2 + 3y^2 + z^2 = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Rewrite in Canonical Semi-Axis Form:</strong><br>\nExpress each squared variable term in the form $\\frac{u^2}{a^2}$:\n$$\\frac{x^2}{\\left(1/\\sqrt{2}\\right)^2} + \\frac{y^2}{\\left(1/\\sqrt{3}\\right)^2} + \\frac{z^2}{1^2} = 1$$\nHere, the semi-axes along the $x$-, $y$-, and $z$-directions are $a = \\frac{1}{\\sqrt{2}}$, $b = \\frac{1}{\\sqrt{3}}$, and $c = 1$, respectively.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Analyze the Principal Coordinate Traces:</strong><br>\n<ul>\n<li>In the $xy$-plane ($z = 0$): $2x^2 + 3y^2 = 1$, which is an ellipse.</li>\n<li>In the $xz$-plane ($y = 0$): $2x^2 + z^2 = 1$, which is an ellipse.</li>\n<li>In the $yz$-plane ($x = 0$): $3y^2 + z^2 = 1$, which is an ellipse.</li>\n</ul>\nFurthermore, all three variables are bounded ($|x| \\le 1/\\sqrt{2}$, $|y| \\le 1/\\sqrt{3}$, $|z| \\le 1$).</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Classify the Quadric Surface:</strong><br>\nBecause all three squared variables have positive coefficients and sum to $+1$, the graph is an <strong>ellipsoid</strong> centered at the origin, which corresponds to Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Identify the Algebraic Restrictions on $f(x, y)$:</strong><br>\nConsider the two-variable function:\n$$f(x, y) = \\frac{y - 1}{\\sqrt{x + 1}}$$\nFor $f(x, y)$ to yield a well-defined real number, two conditions must hold simultaneously:\n1. The radicand inside the square root $\\sqrt{x + 1}$ must be non-negative: $x + 1 \\ge 0$.\n2. The denominator $\\sqrt{x + 1}$ cannot be zero: $\\sqrt{x + 1} \\ne 0 \\iff x + 1 \\ne 0$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Combine Conditions to Determine the Interval for $x$:</strong><br>\nCombining $x + 1 \\ge 0$ and $x + 1 \\ne 0$ gives the strict inequality:\n$$x + 1 > 0 \\iff x > -1$$\nIn interval notation, the allowable values for $x$ form the open ray $x \\in (-1, \\infty)$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Examine Restrictions on the Variable $y$:</strong><br>\nThe variable $y$ appears only in the polynomial numerator $y - 1$. Since $y - 1$ is defined for every real number $y$ (even when $y = 1$, which simply makes $f(x, 1) = 0$), there is no restriction on $y$:\n$$y \\in (-\\infty, \\infty)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Express the Domain in Set-Builder Notation:</strong><br>\nCombining the independent conditions on $x$ and $y$ yields:\n$$\\operatorname{Dom}(f) = \\big\\{(x, y) : x \\in (-1, \\infty), \\; y \\in (-\\infty, \\infty)\\big\\}$$\nThis matches Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Set Up the General Level Curve Equation:</strong><br>\nA level curve of a two-variable function $f(x, y)$ is the locus of points in the $xy$-plane where the function takes a constant value $k$:\n$$f(x, y) = k \\implies \\ln(x - y) = k$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Determine the Constant $k$ Using the Given Point $(e^2, 0)$:</strong><br>\nBecause the level curve passes through the point $(x, y) = (e^2, 0)$, we substitute $x = e^2$ and $y = 0$ into $f(x, y)$:\n$$k = f(e^2, 0) = \\ln(e^2 - 0) = \\ln(e^2) = 2\\ln e = 2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Exponentiate to Eliminate the Natural Logarithm:</strong><br>\nSubstitute $k = 2$ back into the level curve equation $\\ln(x - y) = k$:\n$$\\ln(x - y) = 2$$\nExponentiating both sides with base $e$ yields:\n$$e^{\\ln(x - y)} = e^2 \\iff x - y = e^2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Solve Explicitly for $y$ in Terms of $x$:</strong><br>\nRearranging $x - y = e^2$ to isolate $y$ gives the linear equation:\n$$y = x - e^2$$\nThis equation matches $y = x - e^2$, which corresponds to Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Inspect the Indeterminate Form at the Origin:</strong><br>\nWe wish to evaluate the two-variable limit:\n$$L = \\lim_{(x, y) \\to (0, 0)} \\frac{y^3}{x^2 + y^2}$$\nDirect substitution of $(x, y) = (0, 0)$ gives the indeterminate form $\\frac{0}{0}$. Because the denominator is the radial sum of squares $x^2 + y^2$ and the numerator has degree $3 > 2$, polar coordinates provide a direct proof.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Convert the Limit to Polar Coordinates:</strong><br>\nLet $x = r\\cos\\theta$ and $y = r\\sin\\theta$, where $x^2 + y^2 = r^2$ and $r = \\sqrt{x^2 + y^2} > 0$. As $(x, y) \\to (0, 0)$, $r \\to 0^+$ independently of the angle $\\theta$:\n$$\\frac{y^3}{x^2 + y^2} = \\frac{(r\\sin\\theta)^3}{r^2} = \\frac{r^3 \\sin^3\\theta}{r^2} = r\\sin^3\\theta$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Bound the Trigonometric Factor and Apply the Squeeze Theorem:</strong><br>\nFor all real angles $\\theta$, we have $|\\sin\\theta| \\le 1$, which implies $|\\sin^3\\theta| \\le 1$. Multiplying by $r > 0$ gives the uniform bound:\n$$0 \\le \\left|\\frac{y^3}{x^2 + y^2}\\right| = r|\\sin^3\\theta| \\le r$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Conclude the Value of the Limit as $r \\to 0^+$:</strong><br>\nSince $\\lim_{r \\to 0^+} 0 = 0$ and $\\lim_{r \\to 0^+} r = 0$, the Squeeze Theorem guarantees that:\n$$\\lim_{(x, y) \\to (0, 0)} \\frac{y^3}{x^2 + y^2} = 0$$\nThus, the limit equals $0$, which corresponds to Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Simplify the Function Using Logarithmic Laws:</strong><br>\nBefore differentiating $z = \\ln\\sqrt{x^2 + y^2}$, rewrite the square root as a fractional exponent $\\frac{1}{2}$ and apply the power rule of logarithms $\\ln(u^{1/2}) = \\frac{1}{2}\\ln u$:\n$$z = \\ln\\left((x^2 + y^2)^{1/2}\\right) = \\frac{1}{2}\\ln(x^2 + y^2)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Compute the First-Order Partial Derivatives $\\frac{\\partial z}{\\partial x}$ and $\\frac{\\partial z}{\\partial y}$:</strong><br>\nUsing the Chain Rule $\\frac{\\partial}{\\partial u}[\\ln g] = \\frac{g_u}{g}$:\n$$\\frac{\\partial z}{\\partial x} = \\frac{1}{2} \\cdot \\frac{1}{x^2 + y^2} \\cdot \\frac{\\partial}{\\partial x}(x^2 + y^2) = \\frac{1}{2} \\cdot \\frac{2x}{x^2 + y^2} = \\frac{x}{x^2 + y^2}$$\nBy symmetry between $x$ and $y$:\n$$\\frac{\\partial z}{\\partial y} = \\frac{1}{2} \\cdot \\frac{1}{x^2 + y^2} \\cdot \\frac{\\partial}{\\partial y}(x^2 + y^2) = \\frac{1}{2} \\cdot \\frac{2y}{x^2 + y^2} = \\frac{y}{x^2 + y^2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Form the Linear Combination $x\\frac{\\partial z}{\\partial x} + y\\frac{\\partial z}{\\partial y}$:</strong><br>\nMultiply $\\frac{\\partial z}{\\partial x}$ by $x$ and $\\frac{\\partial z}{\\partial y}$ by $y$, then add the two fractions over their common denominator $x^2 + y^2$:\n$$x\\frac{\\partial z}{\\partial x} + y\\frac{\\partial z}{\\partial y} = x\\left(\\frac{x}{x^2 + y^2}\\right) + y\\left(\\frac{y}{x^2 + y^2}\\right) = \\frac{x^2 + y^2}{x^2 + y^2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Simplify for All $(x, y) \\ne (0, 0)$:</strong><br>\nFor any point $(x, y)$ in the domain of $z$ (where $x^2 + y^2 > 0$), cancelling $x^2 + y^2$ gives:\n$$x\\frac{\\partial z}{\\partial x} + y\\frac{\\partial z}{\\partial y} = 1$$\nThis value is $1$, which corresponds to Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Inspect the Polynomial Structure and Apply Clairaut's Theorem:</strong><br>\nWe are given the polynomial function of three variables:\n$$f(x, y, z) = x^4 - 2xy + 3y^3 + xy^2 z^4$$\nWe need to compute the fourth-order mixed partial derivative $f_{xyzz} = \\frac{\\partial^4 f}{\\partial z^2 \\partial y \\partial x}$. Notice that the first three terms ($x^4$, $-2xy$, and $3y^3$) do not depend on $z$ at all, so their derivatives with respect to $z$ vanish identically.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Differentiate Partially with Respect to $x$ and $y$:</strong><br>\nFirst, differentiate $f(x, y, z)$ with respect to $x$ (treating $y$ and $z$ as constants):\n$$f_x(x, y, z) = 4x^3 - 2y + 0 + y^2 z^4 = 4x^3 - 2y + y^2 z^4$$\nNext, differentiate $f_x$ with respect to $y$ (treating $x$ and $z$ as constants):\n$$f_{xy}(x, y, z) = 0 - 2 + 2y z^4 = -2 + 2y z^4$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Differentiate Twice with Respect to $z$:</strong><br>\nDifferentiate $f_{xy}(x, y, z) = -2 + 2y z^4$ with respect to $z$ to find $f_{xyz}$:\n$$f_{xyz}(x, y, z) = \\frac{\\partial}{\\partial z}(-2 + 2y z^4) = 0 + 2y(4z^3) = 8y z^3$$\nNow differentiate once more with respect to $z$ to obtain $f_{xyzz}$:\n$$f_{xyzz}(x, y, z) = \\frac{\\partial}{\\partial z}(8y z^3) = 8y(3z^2) = 24yz^2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Match the Resulting Expression:</strong><br>\nTherefore, $f_{xyzz}(x, y, z) = 24yz^2$, which corresponds to Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — State the Total Differential Formula for $z = f(x, y)$:</strong><br>\nFor a differentiable function $z = f(x, y) = x^2 + y^2$, the total differential $dz$ approximates the true change $\\Delta z$ when $(x, y)$ undergoes a small displacement $(dx, dy)$ from a base point $(x_0, y_0)$:\n$$\\Delta z \\approx dz = \\frac{\\partial z}{\\partial x}(x_0, y_0)\\,dx + \\frac{\\partial z}{\\partial y}(x_0, y_0)\\,dy$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Compute the First-Order Partial Derivatives at $(2, 1)$:</strong><br>\nDifferentiate $z = x^2 + y^2$ partially with respect to $x$ and $y$:\n$$\\frac{\\partial z}{\\partial x} = 2x, \\qquad \\frac{\\partial z}{\\partial y} = 2y$$\nEvaluating these partial derivatives at the initial point $(x_0, y_0) = (2, 1)$ yields:\n$$\\frac{\\partial z}{\\partial x}(2, 1) = 2(2) = 4, \\qquad \\frac{\\partial z}{\\partial y}(2, 1) = 2(1) = 2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Determine the Coordinate Increments $dx$ and $dy$:</strong><br>\nAs $(x, y)$ changes from $(2, 1)$ to $(2.1, 1.05)$, the differentials of the independent variables are:\n$$dx = \\Delta x = 2.1 - 2 = 0.1, \\qquad dy = \\Delta y = 1.05 - 1 = 0.05$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Evaluate the Total Differential $dz$:</strong><br>\nSubstitute the partial derivatives and increments into the total differential formula:\n$$dz = (4)(0.1) + (2)(0.05) = 0.4 + 0.1 = 0.5$$\nThus, using differentials, the change in $z$ is approximately $0.5$, which corresponds to Choice <strong>(A)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Formulate the Multivariable Chain Rule for $\\frac{\\partial z}{\\partial t}$:</strong><br>\nGiven $z = \\sin(x^2 y)$ where $x = s^2 t$ and $y = s + \\frac{1}{t^2} = s + t^{-2}$, the partial derivative of $z$ with respect to $t$ by the Chain Rule is:\n$$\\frac{\\partial z}{\\partial t} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial t} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial t}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Compute the Outer and Inner Partial Derivatives:</strong><br>\nDifferentiate the outer function $z = \\sin(x^2 y)$ with respect to $x$ and $y$:\n$$\\frac{\\partial z}{\\partial x} = 2xy\\cos(x^2 y), \\qquad \\frac{\\partial z}{\\partial y} = x^2\\cos(x^2 y)$$\nDifferentiate the inner functions $x = s^2 t$ and $y = s + t^{-2}$ with respect to $t$ (holding $s$ constant):\n$$\\frac{\\partial x}{\\partial t} = s^2, \\qquad \\frac{\\partial y}{\\partial t} = -2t^{-3} = -\\frac{2}{t^3}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Combine Terms and Substitute $x(s, t)$ and $y(s, t)$ into the Coefficient:</strong><br>\nFactoring out $\\cos(x^2 y)$ from the Chain Rule sum gives:\n$$\\frac{\\partial z}{\\partial t} = \\left[2xy(s^2) - \\frac{2x^2}{t^3}\\right]\\cos(x^2 y)$$\nSubstitute $x = s^2 t$ and $y = s + \\frac{1}{t^2}$ into the bracketed coefficient:\n$$2(s^2 t)\\left(s + \\frac{1}{t^2}\\right)s^2 - \\frac{2(s^2 t)^2}{t^3} = 2s^4 t\\left(s + \\frac{1}{t^2}\\right) - \\frac{2s^4 t^2}{t^3} = 2s^5 t + \\frac{2s^4}{t} - \\frac{2s^4}{t} = 2s^5 t$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Write the Simplified Final Expression:</strong><br>\nCancelling the $\\frac{2s^4}{t}$ and $\\frac{2s^4}{t}$ terms leaves:\n$$\\frac{\\partial z}{\\partial t} = 2s^5 t \\cos(x^2 y)$$\nThis matches $2s^5 t \\cos(x^2 y)$, which corresponds to Choice <strong>(A)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Define the Implicit Level Function $F(x, y, z) = 0$:</strong><br>\nRewrite the given equation $\\sin(2x + y) - 2x\\cos(z^2) = 1$ in the standard implicit form $F(x, y, z) = 0$:\n$$F(x, y, z) = \\sin(2x + y) - 2x\\cos(z^2) - 1 = 0$$\nBy the Implicit Function Theorem, the partial derivative of $z$ with respect to $x$ is:\n$$\\frac{\\partial z}{\\partial x} = -\\frac{F_x(x, y, z)}{F_z(x, y, z)}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Compute the Partial Derivative $F_x$:</strong><br>\nDifferentiate $F(x, y, z)$ partially with respect to $x$, holding both $y$ and $z$ constant:\n$$F_x = \\frac{\\partial}{\\partial x}\\big[\\sin(2x + y)\\big] - \\frac{\\partial}{\\partial x}\\big[2x\\cos(z^2)\\big] - 0 = 2\\cos(2x + y) - 2\\cos(z^2)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Compute the Partial Derivative $F_z$:</strong><br>\nDifferentiate $F(x, y, z)$ partially with respect to $z$, holding both $x$ and $y$ constant and applying the Chain Rule to $\\cos(z^2)$:\n$$F_z = 0 - 2x\\frac{\\partial}{\\partial z}\\big[\\cos(z^2)\\big] - 0 = -2x\\big(-\\sin(z^2) \\cdot 2z\\big) = 4xz\\sin(z^2)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Form the Quotient and Simplify by Factoring Out $2$:</strong><br>\nSubstitute $F_x$ and $F_z$ into $\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}$:\n$$\\frac{\\partial z}{\\partial x} = -\\frac{2\\cos(2x + y) - 2\\cos(z^2)}{4xz\\sin(z^2)} = \\frac{2\\cos(z^2) - 2\\cos(2x + y)}{4xz\\sin(z^2)} = \\frac{\\cos(z^2) - \\cos(2x + y)}{2xz\\sin(z^2)}$$\nThis matches $\\frac{\\cos(z^2) - \\cos(2x + y)}{2xz\\sin(z^2)}$, which corresponds to Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Recall the Principle of Maximum Directional Derivative:</strong><br>\nFor a differentiable multivariable function $f(x, y)$, the directional derivative $D_{\\mathbf{u}} f(x_0, y_0) = \\nabla f(x_0, y_0) \\cdot \\mathbf{u}$ achieves its maximum value when the unit vector $\\mathbf{u}$ points in the direction of the gradient vector $\\nabla f(x_0, y_0)$. That maximum value is the Euclidean norm of the gradient:\n$$\\max_{\\|\\mathbf{u}\\| = 1} D_{\\mathbf{u}} f(1, 2) = \\|\\nabla f(1, 2)\\| = \\sqrt{\\big(f_x(1, 2)\\big)^2 + \\big(f_y(1, 2)\\big)^2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Compute the First-Order Partial Derivatives $f_x$ and $f_y$:</strong><br>\nGiven $f(x, y) = x e^{y/x}$, apply the Product Rule and Chain Rule with respect to $x$:\n$$f_x(x, y) = (1)e^{y/x} + x \\cdot e^{y/x}\\left(-\\frac{y}{x^2}\\right) = e^{y/x}\\left(1 - \\frac{y}{x}\\right)$$\nDifferentiate with respect to $y$ (holding $x$ constant):\n$$f_y(x, y) = x \\cdot e^{y/x}\\left(\\frac{1}{x}\\right) = e^{y/x}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Evaluate the Gradient Vector $\\nabla f(1, 2)$:</strong><br>\nSubstitute $(x, y) = (1, 2)$ into $f_x(x, y)$ and $f_y(x, y)$:\n$$f_x(1, 2) = e^{2/1}\\left(1 - \\frac{2}{1}\\right) = e^2(1 - 2) = -e^2$$\n$$f_y(1, 2) = e^{2/1} = e^2$$\nThus, the gradient vector at $(1, 2)$ is $\\nabla f(1, 2) = \\langle -e^2, e^2 \\rangle$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Compute the Magnitude $\\|\\nabla f(1, 2)\\|$:</strong><br>\nTaking the Euclidean norm of $\\nabla f(1, 2)$ yields:\n$$\\|\\nabla f(1, 2)\\| = \\sqrt{(-e^2)^2 + (e^2)^2} = \\sqrt{e^4 + e^4} = \\sqrt{2e^4} = e^2\\sqrt{2}$$\nTherefore, the maximum value of the directional derivative is $e^2\\sqrt{2}$, which corresponds to Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1 — Define the Level Surface Function and Compute Its Gradient $\\nabla F$:</strong><br>\nLet $F(x, y, z) = x^2 + y^2 + z^2 - 8x - 12y + 4z + 42 = 0$. For a smooth level surface $F(x, y, z) = 0$, the gradient vector $\\nabla F(x_0, y_0, z_0)$ is normal to the tangent plane at $(x_0, y_0, z_0)$:\n$$\\nabla F(x, y, z) = \\langle F_x, F_y, F_z \\rangle = \\langle 2x - 8, \\; 2y - 12, \\; 2z + 4 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2 — Evaluate the Normal Vector at the Point $(2, 3, -3)$:</strong><br>\nSubstitute $(x_0, y_0, z_0) = (2, 3, -3)$ into the components of $\\nabla F$:\n$$F_x(2, 3, -3) = 2(2) - 8 = -4$$\n$$F_y(2, 3, -3) = 2(3) - 12 = -6$$\n$$F_z(2, 3, -3) = 2(-3) + 4 = -2$$\nThus, $\\nabla F(2, 3, -3) = \\langle -4, -6, -2 \\rangle$. Dividing by $-2$ gives the simplified normal vector $\\vec{n} = \\langle 2, 3, 1 \\rangle$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3 — Formulate the Tangent Plane Equation and Normalize to Constant $10$:</strong><br>\nUsing point $P_0(2, 3, -3)$ and normal $\\vec{n} = \\langle 2, 3, 1 \\rangle$, the tangent plane equation is:\n$$2(x - 2) + 3(y - 3) + 1(z - (-3)) = 0 \\iff 2x - 4 + 3y - 9 + z + 3 = 0$$\n$$2x + 3y + z - 10 = 0 \\iff 2x + 3y + z = 10$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4 — Extract Coefficients $a, b, c$ and Compute $a + b + c$:</strong><br>\nComparing $2x + 3y + z = 10$ with the given form $ax + by + cz = 10$ gives:\n$$a = 2, \\qquad b = 3, \\qquad c = 1$$\nSumming these three coefficients yields:\n$$a + b + c = 2 + 3 + 1 = 6$$\nThus, $a + b + c = 6$, which corresponds to Choice <strong>(E)</strong>.</p>"
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
    "solution": "<strong>Step 1 — Formulate the Vector and Parametric Equations of the Line:</strong><br>\nA line in three-dimensional Euclidean space $\\mathbb{R}^3$ is uniquely determined by a base point $P_0(x_0, y_0, z_0)$ lying on the line and a nonzero direction vector $\\vec{u} = \\langle u_1, u_2, u_3 \\rangle$ parallel to the line. Given the base point $P_0(5, -3, -4)$ and direction vector $\\vec{u} = \\langle 2, -1, 3 \\rangle$, the vector equation of the line is $\\mathbf{r}(t) = \\langle 5, -3, -4 \\rangle + t\\langle 2, -1, 3 \\rangle$, which yields the scalar parametric equations for $t \\in \\mathbb{R}$:\n$$x(t) = 5 + 2t, \\qquad y(t) = -3 - t, \\qquad z(t) = -4 + 3t$$<div class=\"step-divider\"></div><strong>Step 2 — Determine the Parameter $t$ Corresponding to the Point $(7, -4, a)$:</strong><br>\nBecause the line passes through the second point $Q(7, -4, a)$, there must exist a single real parameter value $t$ at which $(x(t), y(t), z(t)) = (7, -4, a)$. Equating the $x$-coordinate expression to $7$ gives:\n$$5 + 2t = 7 \\implies 2t = 7 - 5 = 2 \\implies t = 1$$<div class=\"step-divider\"></div><strong>Step 3 — Verify Consistency with the $y$-Coordinate:</strong><br>\nTo confirm that $t = 1$ consistently generates the point $Q(7, -4, a)$, substitute $t = 1$ into the $y$-coordinate equation:\n$$y(1) = -3 - (1) = -4$$\nThis matches the given $y$-coordinate of $-4$ in $(7, -4, a)$, confirming that the point lies on the line at parameter $t = 1$.<div class=\"step-divider\"></div><strong>Step 4 — Evaluate the Unknown $z$-Coordinate $a$:</strong><br>\nFinally, substitute $t = 1$ into the parametric equation for $z(t)$ to find the value of $a$:\n$$a = z(1) = -4 + 3(1) = -4 + 3 = -1$$\nAlternatively, the displacement vector $\\overrightarrow{P_0 Q} = \\langle 7 - 5, -4 - (-3), a - (-4) \\rangle = \\langle 2, -1, a + 4 \\rangle$ must be a scalar multiple of $\\vec{u} = \\langle 2, -1, 3 \\rangle$, which immediately requires $a + 4 = 3 \\implies a = -1$. Thus, $a = -1$, which corresponds to Choice <strong>(B)</strong>."
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
    "solution": "<strong>Step 1 — Identify the Equation and Normal Vector of the $xy$-Coordinate Plane:</strong><br>\nIn the three-dimensional Cartesian coordinate system $\\mathbb{R}^3$, the horizontal $xy$-plane consists of all points $(x, y, z)$ whose height coordinate is zero, so its equation is $z = 0$. Therefore, any vector orthogonal to the $xy$-plane is parallel to the standard vertical unit vector $\\mathbf{k}$:\n$$\\vec{n}_{xy} = \\mathbf{k} = \\langle 0, 0, 1 \\rangle$$<div class=\"step-divider\"></div><strong>Step 2 — Relate Parallel Planes via Their Normal Vectors:</strong><br>\nTwo planes in $\\mathbb{R}^3$ are parallel if and only if their normal vectors are nonzero scalar multiples of one another. Since the required plane is parallel to the $xy$-plane, we can choose its normal vector to be identical to $\\vec{n}_{xy}$:\n$$\\vec{n} = \\langle A, B, C \\rangle = \\langle 0, 0, 1 \\rangle$$<div class=\"step-divider\"></div><strong>Step 3 — Apply the Point-Normal Form of a Plane:</strong><br>\nThe standard point-normal equation of a plane passing through a given point $P_0(x_0, y_0, z_0)$ with normal vector $\\vec{n} = \\langle A, B, C \\rangle$ is:\n$$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$$\nSubstituting the given point $P_0(1, 2, 3)$ and the normal vector $\\vec{n} = \\langle 0, 0, 1 \\rangle$ into this equation yields:\n$$0(x - 1) + 0(y - 2) + 1(z - 3) = 0$$<div class=\"step-divider\"></div><strong>Step 4 — Simplify the Algebraic Equation of the Plane:</strong><br>\nSince the coefficients of $(x - 1)$ and $(y - 2)$ are both zero, those terms vanish identically, leaving:\n$$z - 3 = 0 \\iff z = 3$$\nGeometrically, every point on a horizontal plane parallel to the $xy$-plane and passing through $(1, 2, 3)$ must share the constant $z$-coordinate $z = 3$, which corresponds to Choice <strong>(C)</strong>."
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
    "solution": "<strong>Step 1 — Rearrange the Equation into Standard Canonical Form:</strong><br>\nWe are given the second-degree equation in three variables:\n$$x - y^2 - 4z^2 = 2$$\nNotice that the variable $x$ appears only to the first power (linear), whereas $y$ and $z$ appear to the second power (quadratic). Moving the quadratic terms $-y^2 - 4z^2$ to the right-hand side and the constant $2$ to the left-hand side isolates the linear variable $x$:\n$$x - 2 = y^2 + 4z^2 \\iff x - 2 = \\frac{y^2}{1^2} + \\frac{z^2}{(1/2)^2}$$<div class=\"step-divider\"></div><strong>Step 2 — Compare Against the Canonical Equations of Quadric Surfaces:</strong><br>\nRecall the standard classification of quadric surfaces in $\\mathbb{R}^3$:\n<ul>\n<li>An <strong>ellipsoid</strong>, <strong>hyperboloid of one sheet</strong>, <strong>hyperboloid of two sheets</strong>, or <strong>elliptic cone</strong> requires all three variables $x, y, z$ to appear as squared terms ($x^2, y^2, z^2$).</li>\n<li>A <strong>paraboloid</strong> has one linear variable equated to a quadratic combination of the other two variables: if both squared terms have the same sign, it is an <strong>elliptic paraboloid</strong>; if they have opposite signs, it is a <strong>hyperbolic paraboloid</strong>.</li>\n</ul><div class=\"step-divider\"></div><strong>Step 3 — Analyze the Cross-Sectional Traces Parallel to Coordinate Planes:</strong><br>\nLet us inspect the traces of $x - 2 = y^2 + 4z^2$:\n<ul>\n<li><strong>Traces parallel to the $yz$-plane ($x = k$):</strong> For $k > 2$, the cross-section $y^2 + 4z^2 = k - 2 \\iff \\frac{y^2}{k-2} + \\frac{z^2}{(k-2)/4} = 1$ is a non-degenerate <strong>ellipse</strong>; at $k = 2$, it is the single vertex point $(2, 0, 0)$; for $k < 2$, the trace is empty.</li>\n<li><strong>Traces in the $xy$-plane ($z = 0$) and $xz$-plane ($y = 0$):</strong> Setting $z = 0$ gives the parabola $x - 2 = y^2$, and setting $y = 0$ gives the parabola $x - 2 = 4z^2$, both opening in the positive $x$-direction.</li>\n</ul><div class=\"step-divider\"></div><strong>Step 4 — Conclude the Geometric Classification:</strong><br>\nBecause one variable ($x$) is linear and the other two variables ($y^2$ and $4z^2$) are squared with the same positive sign, the surface is an <strong>Elliptic paraboloid</strong> with vertex at $(2, 0, 0)$ opening along the positive $x$-axis, which corresponds to Choice <strong>(A)</strong>."
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
    "solution": "<strong>Step 1 — Determine the Natural Domain of the Function $f(x, y)$:</strong><br>\nConsider the real-valued two-variable function:\n$$f(x, y) = \\sqrt{4 - x^2 - y^2} = \\sqrt{4 - (x^2 + y^2)}$$\nFor the principal square root $\\sqrt{u}$ to be defined as a real number, its radicand $u = 4 - (x^2 + y^2)$ must be non-negative:\n$$4 - (x^2 + y^2) \\ge 0 \\iff x^2 + y^2 \\le 4$$\nThus, the natural domain $D$ of $f$ is the closed disk of radius $2$ centered at the origin $(0, 0)$ in the $xy$-plane.<div class=\"step-divider\"></div><strong>Step 2 — Bound the Radicand Across the Domain Disk $D$:</strong><br>\nSince squares of real numbers are always non-negative ($x^2 \\ge 0$ and $y^2 \\ge 0$), the radial sum of squares $r^2 = x^2 + y^2$ over the closed disk $D$ satisfies the two-sided inequality:\n$$0 \\le x^2 + y^2 \\le 4$$\nMultiplying by $-1$ reverses the inequalities ($-4 \\le -(x^2 + y^2) \\le 0$), and adding $4$ across all three parts yields the exact range of values taken by the radicand $u = 4 - x^2 - y^2$:\n$$0 \\le 4 - x^2 - y^2 \\le 4$$<div class=\"step-divider\"></div><strong>Step 3 — Apply the Monotonicity of the Principal Square Root:</strong><br>\nBecause the principal square root function $g(u) = \\sqrt{u}$ is continuous and strictly increasing on $[0, 4]$, applying $\\sqrt{\\cdot}$ across the compound inequality $0 \\le 4 - x^2 - y^2 \\le 4$ preserves the order:\n$$\\sqrt{0} \\le \\sqrt{4 - x^2 - y^2} \\le \\sqrt{4} \\implies 0 \\le f(x, y) \\le 2$$<div class=\"step-divider\"></div><strong>Step 4 — Verify Attainability of the Endpoints and State the Range:</strong><br>\n<ul>\n<li>The <strong>minimum value</strong> $0$ is attained everywhere on the boundary circle $x^2 + y^2 = 4$ (e.g., at $(2, 0)$, where $f(2, 0) = \\sqrt{4 - 4} = 0$).</li>\n<li>The <strong>maximum value</strong> $2$ is attained at the center $(0, 0)$, where $f(0, 0) = \\sqrt{4 - 0 - 0} = 2$.</li>\n</ul>\nBy the Intermediate Value Theorem on the connected domain disk $D$, $f(x, y)$ attains every real number between $0$ and $2$ inclusive. Hence, the range of $f$ is the closed interval $[0, 2]$, which corresponds to Choice <strong>(E)</strong>."
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
    "solution": "<strong>Step 1 — Transform the Two-Variable Limit into Polar Coordinates:</strong><br>\nWe wish to evaluate the multivariable limit:\n$$L = \\lim_{(x,y)\\to(0,0)} (x^2 + y^2)\\ln(x^2 + y^2)$$\nNotice that the expression depends solely on the squared radial distance $r^2 = x^2 + y^2$ from the origin. Introducing polar coordinates $x = r\\cos\\theta$ and $y = r\\sin\\theta$ with $r = \\sqrt{x^2 + y^2} > 0$, we see that $(x, y) \\to (0, 0)$ is equivalent to $r \\to 0^+$ (or letting $u = r^2 = x^2 + y^2 \\to 0^+$):\n$$L = \\lim_{r \\to 0^+} r^2 \\ln(r^2) = \\lim_{u \\to 0^+} u \\ln u$$<div class=\"step-divider\"></div><strong>Step 2 — Rewrite the Indeterminate Product $0 \\cdot (-\\infty)$ as a Quotient:</strong><br>\nAs $u \\to 0^+$, the factor $u \\to 0^+$ while $\\ln u \\to -\\infty$, producing an indeterminate product of the form $0 \\cdot (-\\infty)$. To apply L'H&ocirc;pital's Rule, we rewrite $u \\ln u$ as a quotient of type $\\frac{-\\infty}{\\infty}$ by moving $u$ to the denominator as $u^{-1} = \\frac{1}{u}$:\n$$L = \\lim_{u \\to 0^+} \\frac{\\ln u}{1/u} = \\lim_{u \\to 0^+} \\frac{\\ln u}{u^{-1}}$$<div class=\"step-divider\"></div><strong>Step 3 — Apply L'H&ocirc;pital's Rule and Differentiate with Respect to $u$:</strong><br>\nSince both the numerator $g(u) = \\ln u$ and the denominator $h(u) = u^{-1}$ are differentiable on $(0, \\infty)$ with $\\lim_{u \\to 0^+} \\ln u = -\\infty$ and $\\lim_{u \\to 0^+} u^{-1} = +\\infty$, L'H&ocirc;pital's Rule gives:\n$$L = \\lim_{u \\to 0^+} \\frac{\\frac{d}{du}(\\ln u)}{\\frac{d}{du}(u^{-1})} = \\lim_{u \\to 0^+} \\frac{1/u}{-1/u^2}$$<div class=\"step-divider\"></div><strong>Step 4 — Simplify the Algebraic Quotient and Evaluate the Limit:</strong><br>\nSimplifying the complex fraction for $u > 0$ yields:\n$$\\frac{1/u}{-1/u^2} = \\frac{1}{u} \\cdot (-u^2) = -u$$\nTaking the limit as $u \\to 0^+$ gives:\n$$L = \\lim_{u \\to 0^+} (-u) = 0$$\nTherefore, $\\lim_{(x,y)\\to(0,0)} (x^2 + y^2)\\ln(x^2 + y^2) = 0$, which corresponds to Choice <strong>(A)</strong>."
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
    "solution": "<strong>Step 1 — Recall the Definition of a Level Curve Through a Given Point:</strong><br>\nFor a function of two variables $z = f(x, y)$, the level curve corresponding to a constant height $c$ is the set of all points $(x, y)$ in the $xy$-plane satisfying $f(x, y) = c$. When the level curve is specified as passing through $(x_0, y_0) = (2, \\sqrt{5})$, the constant level $c$ is the value of the function at that point:\n$$c = f(2, \\sqrt{5})$$<div class=\"step-divider\"></div><strong>Step 2 — Evaluate $c = f(2, \\sqrt{5})$ for $f(x, y) = \\sqrt{9 - x^2 - y^2}$:</strong><br>\nSubstituting $x = 2$ and $y = \\sqrt{5}$ into the given function $f(x, y) = \\sqrt{9 - x^2 - y^2}$ yields:\n$$c = f(2, \\sqrt{5}) = \\sqrt{9 - (2)^2 - \\left(\\sqrt{5}\\right)^2} = \\sqrt{9 - 4 - 5} = \\sqrt{0} = 0$$<div class=\"step-divider\"></div><strong>Step 3 — Set Up and Simplify the Level Curve Equation $f(x, y) = 0$:</strong><br>\nSetting $f(x, y) = c = 0$ gives the equation of the level curve in the $xy$-plane:\n$$\\sqrt{9 - x^2 - y^2} = 0$$\nSquaring both sides and rearranging the terms into standard form yields:\n$$9 - x^2 - y^2 = 0 \\iff x^2 + y^2 = 9$$<div class=\"step-divider\"></div><strong>Step 4 — Identify the Radius of the Circle:</strong><br>\nComparing $x^2 + y^2 = 9$ with the standard equation of a circle centered at the origin $(0, 0)$, namely $x^2 + y^2 = R^2$, we find:\n$$R^2 = 9 \\implies R = \\sqrt{9} = 3$$\nThus, the level curve is a circle of radius $3$, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Test Statement (I): Evaluate $\\lim_{(x,y)\\to(0,0)} f(x, y, 0)$:</strong><br>\nWe are given the three-variable rational function:\n$$f(x, y, z) = \\frac{xy + yz^2 + xz^2}{x^2 + y^2 + z^2}$$\nSetting $z = 0$ in $f(x, y, z)$ reduces the function to:\n$$f(x, y, 0) = \\frac{xy + y(0)^2 + x(0)^2}{x^2 + y^2 + 0^2} = \\frac{xy}{x^2 + y^2}$$\nTo test whether $\\lim_{(x,y)\\to(0,0)} \\frac{xy}{x^2 + y^2}$ exists, approach $(0, 0)$ along straight lines $y = mx$ ($x \\neq 0$):\n$$\\lim_{\\substack{(x,y)\\to(0,0)\\\\y=mx}} \\frac{xy}{x^2 + y^2} = \\lim_{x \\to 0} \\frac{m x^2}{x^2(1 + m^2)} = \\frac{m}{1 + m^2}$$\nSince $m = 0$ gives $0$ whereas $m = 1$ gives $\\frac{1}{2} \\neq 0$, the limit does not exist. Thus, <strong>Statement (I) is FALSE</strong>.<div class=\"step-divider\"></div><strong>Step 2 — Test Statement (II): Evaluate $\\lim_{(x,z)\\to(0,0)} f(x, 0, z)$:</strong><br>\nSetting $y = 0$ in $f(x, y, z)$ gives:\n$$f(x, 0, z) = \\frac{x(0) + (0)z^2 + xz^2}{x^2 + 0^2 + z^2} = \\frac{xz^2}{x^2 + z^2}$$\nNotice that the numerator has degree $3$ while the denominator $x^2 + z^2$ has degree $2$. For all $(x, z) \\neq (0, 0)$, since $0 \\le \\frac{z^2}{x^2 + z^2} \\le 1$, we have the inequality:\n$$0 \\le \\left|\\frac{xz^2}{x^2 + z^2}\\right| = |x| \\cdot \\frac{z^2}{x^2 + z^2} \\le |x|$$\nAs $(x, z) \\to (0, 0)$, $|x| \\to 0$, so by the Squeeze Theorem, $\\lim_{(x,z)\\to(0,0)} f(x, 0, z) = 0$. Thus, <strong>Statement (II) is TRUE</strong>.<div class=\"step-divider\"></div><strong>Step 3 — Test Statement (III): Evaluate $\\lim_{x\\to 0} f(x, x, x)$:</strong><br>\nSetting $y = x$ and $z = x$ for $x \\neq 0$ gives the single-variable expression:\n$$f(x, x, x) = \\frac{x(x) + x(x^2) + x(x^2)}{x^2 + x^2 + x^2} = \\frac{x^2 + 2x^3}{3x^2}$$\nFactoring $x^2$ from numerator and denominator and canceling it for $x \\neq 0$ yields:\n$$\\lim_{x \\to 0} f(x, x, x) = \\lim_{x \\to 0} \\frac{x^2(1 + 2x)}{3x^2} = \\lim_{x \\to 0} \\frac{1 + 2x}{3} = \\frac{1 + 0}{3} = \\frac{1}{3}$$\nThus, <strong>Statement (III) is TRUE</strong>.<div class=\"step-divider\"></div><strong>Step 4 — Combine Results to Select the Correct Option:</strong><br>\nSummarizing our rigorous verification of all three statements:\n<ul>\n<li>Statement (I) is <strong>FALSE</strong> (the limit does not exist).</li>\n<li>Statement (II) is <strong>TRUE</strong> (the limit equals $0$).</li>\n<li>Statement (III) is <strong>TRUE</strong> (the limit equals $\\frac{1}{3}$).</li>\n</ul>\nTherefore, <strong>(II) and (III) are true</strong>, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Understand the Subscript Notation for Higher-Order Partial Derivatives:</strong><br>\nWe are given the three-variable function:\n$$f(x, y, z) = e^{-x}\\sin(yz)$$\nBy convention, the third-order mixed partial derivative $f_{xyy}$ denotes differentiating $f$ first with respect to $x$, then with respect to $y$, and finally a second time with respect to $y$:\n$$f_{xyy} = \\frac{\\partial}{\\partial y}\\left(\\frac{\\partial}{\\partial y}\\left(\\frac{\\partial f}{\\partial x}\\right)\\right)$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the First-Order Partial Derivative $f_x(x, y, z)$:</strong><br>\nDifferentiating $f(x, y, z) = e^{-x}\\sin(yz)$ partially with respect to $x$ while holding both $y$ and $z$ constant (so $\\sin(yz)$ acts as a constant multiplier) gives:\n$$f_x(x, y, z) = \\frac{\\partial}{\\partial x}\\left(e^{-x}\\right) \\cdot \\sin(yz) = -e^{-x}\\sin(yz)$$<div class=\"step-divider\"></div><strong>Step 3 — Compute the Second-Order Mixed Partial Derivative $f_{xy}(x, y, z)$:</strong><br>\nNext, differentiate $f_x(x, y, z) = -e^{-x}\\sin(yz)$ partially with respect to $y$, holding $x$ and $z$ constant. By the Chain Rule, $\\frac{\\partial}{\\partial y}[\\sin(yz)] = \\cos(yz) \\cdot \\frac{\\partial}{\\partial y}(yz) = z\\cos(yz)$:\n$$f_{xy}(x, y, z) = -e^{-x} \\cdot \\frac{\\partial}{\\partial y}\\left[\\sin(yz)\\right] = -e^{-x} \\cdot z\\cos(yz) = -z e^{-x}\\cos(yz)$$<div class=\"step-divider\"></div><strong>Step 4 — Compute the Third-Order Mixed Partial Derivative $f_{xyy}(x, y, z)$:</strong><br>\nFinally, differentiate $f_{xy}(x, y, z) = -z e^{-x}\\cos(yz)$ partially with respect to $y$ once more, holding $x$ and $z$ constant. Using $\\frac{\\partial}{\\partial y}[\\cos(yz)] = -z\\sin(yz)$:\n$$f_{xyy}(x, y, z) = -z e^{-x} \\cdot \\frac{\\partial}{\\partial y}\\left[\\cos(yz)\\right] = -z e^{-x}\\left(-z\\sin(yz)\\right) = e^{-x} z^2 \\sin(yz)$$\nThus, $f_{xyy} = e^{-x}z^2\\sin(yz)$, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Formulate the Two-Variable Function and Identify the Base Point:</strong><br>\nWe wish to approximate the numerical difference\n$$\\Delta f = 5\\sqrt{(4.03)^2 + (3.1)^2} - 5\\sqrt{4^2 + 3^2}$$\nusing the total differential. Define the differentiable two-variable function:\n$$f(x, y) = 5\\sqrt{x^2 + y^2} = 5(x^2 + y^2)^{1/2}$$\nWe choose the base point $(x_0, y_0) = (4, 3)$, where $\\sqrt{x_0^2 + y_0^2} = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$, and the target point $(x_1, y_1) = (4.03, 3.1)$.<div class=\"step-divider\"></div><strong>Step 2 — Determine the Coordinate Increments $dx$ and $dy$:</strong><br>\nMoving from the initial point $(x_0, y_0) = (4, 3)$ to the perturbed point $(x_1, y_1) = (4.03, 3.1)$, the differentials of the independent variables are:\n$$dx = \\Delta x = 4.03 - 4 = 0.03$$\n$$dy = \\Delta y = 3.1 - 3 = 0.10$$<div class=\"step-divider\"></div><strong>Step 3 — Compute and Evaluate the First-Order Partial Derivatives at $(4, 3)$:</strong><br>\nApplying the Chain Rule to $f(x, y) = 5(x^2 + y^2)^{1/2}$ yields the partial derivatives:\n$$f_x(x, y) = 5 \\cdot \\frac{2x}{2\\sqrt{x^2 + y^2}} = \\frac{5x}{\\sqrt{x^2 + y^2}}, \\qquad f_y(x, y) = 5 \\cdot \\frac{2y}{2\\sqrt{x^2 + y^2}} = \\frac{5y}{\\sqrt{x^2 + y^2}}$$\nEvaluating both partial derivatives at $(x_0, y_0) = (4, 3)$ (where $\\sqrt{4^2 + 3^2} = 5$) gives:\n$$f_x(4, 3) = \\frac{5(4)}{5} = 4, \\qquad f_y(4, 3) = \\frac{5(3)}{5} = 3$$<div class=\"step-divider\"></div><strong>Step 4 — Evaluate the Total Differential $df$ to Approximate $\\Delta f$:</strong><br>\nBy local linear approximation, the actual change $\\Delta f = f(4.03, 3.1) - f(4, 3)$ is approximated by the total differential $df = f_x(4, 3)\\,dx + f_y(4, 3)\\,dy$:\n$$\\Delta f \\approx df = 4(0.03) + 3(0.10) = 0.12 + 0.30 = 0.42$$\nTherefore, the expression is approximately equal to $0.42$, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — State the Multivariable Chain Rule for $\\frac{\\partial w}{\\partial t}$:</strong><br>\nWe are given $w = x^2 - y^2$, where the intermediate variables $x = s\\cos t$ and $y = s\\sin t$ are differentiable functions of the parameters $s$ and $t$. By the two-variable Chain Rule, the partial derivative of $w$ with respect to $t$ (holding $s$ constant) is:\n$$\\frac{\\partial w}{\\partial t} = \\frac{\\partial w}{\\partial x}\\frac{\\partial x}{\\partial t} + \\frac{\\partial w}{\\partial y}\\frac{\\partial y}{\\partial t}$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the Partial Derivatives and Simplify via the Chain Rule:</strong><br>\nDifferentiating $w = x^2 - y^2$ with respect to $x$ and $y$ gives:\n$$\\frac{\\partial w}{\\partial x} = 2x, \\qquad \\frac{\\partial w}{\\partial y} = -2y$$\nDifferentiating $x = s\\cos t$ and $y = s\\sin t$ partially with respect to $t$ gives:\n$$\\frac{\\partial x}{\\partial t} = -s\\sin t, \\qquad \\frac{\\partial y}{\\partial t} = s\\cos t$$\nSubstituting these into the Chain Rule expression yields:\n$$\\frac{\\partial w}{\\partial t} = 2x(-s\\sin t) - 2y(s\\cos t) = 2(s\\cos t)(-s\\sin t) - 2(s\\sin t)(s\\cos t) = -4s^2\\sin t\\cos t = -2s^2\\sin(2t)$$<div class=\"step-divider\"></div><strong>Step 3 — Verify via Direct Substitution and Double-Angle Identities:</strong><br>\nWe can independently confirm this formula by substituting $x = s\\cos t$ and $y = s\\sin t$ directly into $w = x^2 - y^2$ before differentiating:\n$$w(s, t) = (s\\cos t)^2 - (s\\sin t)^2 = s^2(\\cos^2 t - \\sin^2 t) = s^2\\cos(2t)$$\nDifferentiating $w(s, t) = s^2\\cos(2t)$ partially with respect to $t$ immediately gives:\n$$\\frac{\\partial w}{\\partial t} = s^2\\big(-2\\sin(2t)\\big) = -2s^2\\sin(2t)$$<div class=\"step-divider\"></div><strong>Step 4 — Evaluate $\\frac{\\partial w}{\\partial t}$ at $s = 3$ and $t = \\frac{\\pi}{4}$:</strong><br>\nSubstituting $s = 3$ and $t = \\frac{\\pi}{4}$ (so that $2t = \\frac{\\pi}{2}$ and $\\sin\\left(\\frac{\\pi}{2}\\right) = 1$) into $\\frac{\\partial w}{\\partial t} = -2s^2\\sin(2t)$ gives:\n$$\\left.\\frac{\\partial w}{\\partial t}\\right|_{(s, t) = (3, \\pi/4)} = -2(3)^2\\sin\\left(2 \\cdot \\frac{\\pi}{4}\\right) = -2(9)\\sin\\left(\\frac{\\pi}{2}\\right) = -18(1) = -18$$\nThus, the value of $\\frac{\\partial w}{\\partial t}$ is $-18$, which corresponds to Choice <strong>(A)</strong>."
  },
  {
    "id": "241_11",
    "term": "241",
    "number": 11,
    "section": "13.3",
    "topic": "13.3 Partial Derivatives",
    "question": "If $\\tan(x + y) + \\cos z = 2$, then $\\frac{\\partial z}{\\partial x} + \\frac{\\partial z}{\\partial y} =$",
    "choices": [
      "$\\frac{2\\tan(x + y)}{\\cos z}$",
      "$\\frac{\\csc^2(x + y)}{\\sin z}$",
      "$-\\frac{\\sec^2(x + y)}{\\sin z}$",
      "$\\frac{\\tan^2(x + y)}{\\cos z}$",
      "$\\frac{2\\sec^2(x + y)}{\\sin z}$"
    ],
    "correct_answer": "E",
    "solution": "<strong>Step 1 — Formulate the Implicit Level Surface Equation $F(x, y, z) = 0$:</strong><br>\nWe are given the implicit relation $\\tan(x + y) + \\cos z = 2$, which defines $z$ implicitly as a differentiable function of the independent variables $x$ and $y$. Moving the constant $2$ to the left-hand side defines the three-variable function:\n$$F(x, y, z) = \\tan(x + y) + \\cos z - 2 = 0$$\nBy the Implicit Function Theorem, anywhere $F_z \\neq 0$, the first-order partial derivatives of $z$ with respect to $x$ and $y$ are given by:\n$$\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z} \\qquad \\text{and} \\qquad \\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the Partial Derivatives $F_x$, $F_y$, and $F_z$:</strong><br>\nDifferentiating $F(x, y, z) = \\tan(x + y) + \\cos z - 2$ partially with respect to $x$, $y$, and $z$ individually while holding the remaining variables constant yields:\n$$F_x = \\frac{\\partial}{\\partial x}\\big[\\tan(x + y) + \\cos z - 2\\big] = \\sec^2(x + y) \\cdot \\frac{\\partial}{\\partial x}(x + y) = \\sec^2(x + y)$$\n$$F_y = \\frac{\\partial}{\\partial y}\\big[\\tan(x + y) + \\cos z - 2\\big] = \\sec^2(x + y) \\cdot \\frac{\\partial}{\\partial y}(x + y) = \\sec^2(x + y)$$\n$$F_z = \\frac{\\partial}{\\partial z}\\big[\\tan(x + y) + \\cos z - 2\\big] = -\\sin z$$<div class=\"step-divider\"></div><strong>Step 3 — Determine $\\frac{\\partial z}{\\partial x}$ and $\\frac{\\partial z}{\\partial y}$ Using the Implicit Derivative Formulas:</strong><br>\nSubstituting $F_x$, $F_y$, and $F_z$ into the Implicit Function Theorem formulas from Step 1 gives:\n$$\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z} = -\\frac{\\sec^2(x + y)}{-\\sin z} = \\frac{\\sec^2(x + y)}{\\sin z}$$\n$$\\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z} = -\\frac{\\sec^2(x + y)}{-\\sin z} = \\frac{\\sec^2(x + y)}{\\sin z}$$<div class=\"step-divider\"></div><strong>Step 4 — Sum the Two Partial Derivatives to Find $\\frac{\\partial z}{\\partial x} + \\frac{\\partial z}{\\partial y}$:</strong><br>\nAdding $\\frac{\\partial z}{\\partial x}$ and $\\frac{\\partial z}{\\partial y}$ over their common denominator $\\sin z$ yields:\n$$\\frac{\\partial z}{\\partial x} + \\frac{\\partial z}{\\partial y} = \\frac{\\sec^2(x + y)}{\\sin z} + \\frac{\\sec^2(x + y)}{\\sin z} = \\frac{2\\sec^2(x + y)}{\\sin z}$$\nTherefore, $\\frac{\\partial z}{\\partial x} + \\frac{\\partial z}{\\partial y} = \\frac{2\\sec^2(x + y)}{\\sin z}$, which corresponds to Choice <strong>(E)</strong>."
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
    "solution": "<strong>Step 1 — Construct the Displacement Vector $\\overrightarrow{PQ}$ and Normalize It to a Unit Vector $\\mathbf{u}$:</strong><br>\nTo find the directional derivative of $f(x, y) = e^y\\sin x$ at the point $P(0, 0)$ in the direction of the vector $\\overrightarrow{PQ}$ where $Q(2, 1)$, we first compute the displacement vector from $P(0, 0)$ to $Q(2, 1)$:\n$$\\overrightarrow{PQ} = \\langle 2 - 0,\\; 1 - 0 \\rangle = \\langle 2, 1 \\rangle$$\nIts Euclidean norm is $\\|\\overrightarrow{PQ}\\| = \\sqrt{2^2 + 1^2} = \\sqrt{4 + 1} = \\sqrt{5}$. Dividing $\\overrightarrow{PQ}$ by its magnitude gives the unit direction vector $\\mathbf{u}$:\n$$\\mathbf{u} = \\frac{\\overrightarrow{PQ}}{\\|\\overrightarrow{PQ}\\|} = \\left\\langle \\frac{2}{\\sqrt{5}},\\; \\frac{1}{\\sqrt{5}} \\right\\rangle$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the First-Order Partial Derivatives of $f(x, y) = e^y\\sin x$:</strong><br>\nDifferentiating $f(x, y) = e^y\\sin x$ partially with respect to $x$ (holding $y$ constant) and with respect to $y$ (holding $x$ constant) gives the components of the gradient vector $\\nabla f(x, y)$:\n$$f_x(x, y) = \\frac{\\partial}{\\partial x}\\left(e^y\\sin x\\right) = e^y\\cos x$$\n$$f_y(x, y) = \\frac{\\partial}{\\partial y}\\left(e^y\\sin x\\right) = e^y\\sin x$$<div class=\"step-divider\"></div><strong>Step 3 — Evaluate the Gradient Vector $\\nabla f(0, 0)$ at the Point $P(0, 0)$:</strong><br>\nSubstituting the coordinates of $P(0, 0)$ into both partial derivatives (using $e^0 = 1$, $\\cos 0 = 1$, and $\\sin 0 = 0$) yields:\n$$f_x(0, 0) = e^0\\cos(0) = 1 \\cdot 1 = 1, \\qquad f_y(0, 0) = e^0\\sin(0) = 1 \\cdot 0 = 0$$\nThus, the gradient vector at $P(0, 0)$ is:\n$$\\nabla f(0, 0) = \\langle f_x(0, 0),\\; f_y(0, 0) \\rangle = \\langle 1, 0 \\rangle$$<div class=\"step-divider\"></div><strong>Step 4 — Compute the Directional Derivative $D_{\\mathbf{u}} f(0, 0)$ via the Dot Product:</strong><br>\nBy definition, the directional derivative of a differentiable function $f$ at $P(0, 0)$ in the direction of the unit vector $\\mathbf{u}$ is the scalar dot product $\\nabla f(0, 0) \\cdot \\mathbf{u}$:\n$$D_{\\mathbf{u}} f(0, 0) = \\nabla f(0, 0) \\cdot \\mathbf{u} = \\langle 1, 0 \\rangle \\cdot \\left\\langle \\frac{2}{\\sqrt{5}},\\; \\frac{1}{\\sqrt{5}} \\right\\rangle = 1\\left(\\frac{2}{\\sqrt{5}}\\right) + 0\\left(\\frac{1}{\\sqrt{5}}\\right) = \\frac{2}{\\sqrt{5}}$$\nThus, the directional derivative is equal to $\\frac{2}{\\sqrt{5}}$, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Define the Implicit Level Surface Function $F(x, y, z) = 0$:</strong><br>\nWe are given the quadric surface $z^2 - 2x^2 - 2y^2 = 12$ and the point of tangency $P_0(1, -1, 4)$. Moving the constant $12$ to the left-hand side expresses the surface as the level surface $F(x, y, z) = 0$:\n$$F(x, y, z) = z^2 - 2x^2 - 2y^2 - 12 = 0$$\nChecking that $P_0(1, -1, 4)$ lies on the surface: $4^2 - 2(1)^2 - 2(-1)^2 - 12 = 16 - 2 - 2 - 12 = 0$.<div class=\"step-divider\"></div><strong>Step 2 — Compute the Gradient Vector $\\nabla F$ and Evaluate at $P_0(1, -1, 4)$:</strong><br>\nThe normal vector to the tangent plane of the level surface $F(x, y, z) = 0$ at $P_0(1, -1, 4)$ is given by the gradient vector $\\nabla F(1, -1, 4)$:\n$$\\nabla F(x, y, z) = \\left\\langle \\frac{\\partial F}{\\partial x},\\; \\frac{\\partial F}{\\partial y},\\; \\frac{\\partial F}{\\partial z} \\right\\rangle = \\langle -4x,\\; -4y,\\; 2z \\rangle$$\nEvaluating $\\nabla F$ at $(x_0, y_0, z_0) = (1, -1, 4)$ carefully (paying close attention to $y_0 = -1$) gives:\n$$\\nabla F(1, -1, 4) = \\langle -4(1),\\; -4(-1),\\; 2(4) \\rangle = \\langle -4,\\; 4,\\; 8 \\rangle$$<div class=\"step-divider\"></div><strong>Step 3 — Formulate the Tangent Plane Equation and Normalize to $x + ay + bz + c = 0$:</strong><br>\nUsing the point-normal equation of the tangent plane at $P_0(1, -1, 4)$ with normal $\\nabla F(1, -1, 4) = \\langle -4, 4, 8 \\rangle$:\n$$-4(x - 1) + 4(y - (-1)) + 8(z - 4) = 0 \\iff -4(x - 1) + 4(y + 1) + 8(z - 4) = 0$$\nExpanding all terms gives:\n$$-4x + 4 + 4y + 4 + 8z - 32 = 0 \\iff -4x + 4y + 8z - 24 = 0$$\nDividing the entire equation by $-4$ so that the coefficient of $x$ is $+1$ (matching $x + ay + bz + c = 0$) yields:\n$$x - y - 2z + 6 = 0$$<div class=\"step-divider\"></div><strong>Step 4 — Extract $a, b, c$ and Compute the Sum $a + b + c$:</strong><br>\nComparing $x - y - 2z + 6 = 0$ term by term with the given template $x + ay + bz + c = 0$, we identify:\n$$a = -1, \\qquad b = -2, \\qquad c = 6$$\nAdding these three constants together gives:\n$$a + b + c = (-1) + (-2) + 6 = 3$$\nThus, $a + b + c = 3$, which corresponds to Choice <strong>(E)</strong>."
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
    "solution": "<strong>Step 1 — Express Both Intersecting Surfaces in Level-Surface Form and Compute Their Gradients:</strong><br>\nThe curve of intersection $C$ lies simultaneously on the sphere $F_1(x, y, z) = x^2 + y^2 + z^2 - 14 = 0$ and the plane $F_2(x, y, z) = x - y - z = 0$. At the given point $P_0(3, 1, 2)$, we compute the normal vectors to both surfaces via their gradients:\n$$\\nabla F_1(x, y, z) = \\langle 2x, 2y, 2z \\rangle \\implies \\vec{n}_1 = \\nabla F_1(3, 1, 2) = \\langle 6, 2, 4 \\rangle$$\n$$\\nabla F_2(x, y, z) = \\langle 1, -1, -1 \\rangle \\implies \\vec{n}_2 = \\nabla F_2(3, 1, 2) = \\langle 1, -1, -1 \\rangle$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the Tangent Line Direction Vector via the Cross Product:</strong><br>\nBecause the curve of intersection $C$ lies on both surfaces, its tangent line at $P_0(3, 1, 2)$ must lie in the tangent planes of both surfaces, meaning its direction vector $\\vec{v}$ is orthogonal to both $\\vec{n}_1$ and $\\vec{n}_2$. Taking the cross product (using $\\frac{1}{2}\\vec{n}_1 = \\langle 3, 1, 2 \\rangle$ and $\\vec{n}_2 = \\langle 1, -1, -1 \\rangle$) gives:\n$$\\vec{v} = \\langle 3, 1, 2 \\rangle \\times \\langle 1, -1, -1 \\rangle = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 3 & 1 & 2 \\\\ 1 & -1 & -1 \\end{vmatrix}$$<div class=\"step-divider\"></div><strong>Step 3 — Evaluate the Cross Product Determinant Components:</strong><br>\nExpanding the $3 \\times 3$ determinant along the first row yields:\n$$\\vec{v} = \\mathbf{i}\\big((1)(-1) - (2)(-1)\\big) - \\mathbf{j}\\big((3)(-1) - (2)(1)\\big) + \\mathbf{k}\\big((3)(-1) - (1)(1)\\big)$$\n$$\\vec{v} = \\mathbf{i}(-1 + 2) - \\mathbf{j}(-3 - 2) + \\mathbf{k}(-3 - 1) = \\langle 1, 5, -4 \\rangle$$\n(Equivalently, $\\vec{n}_1 \\times \\vec{n}_2 = \\langle 6, 2, 4 \\rangle \\times \\langle 1, -1, -1 \\rangle = \\langle 2, 10, -8 \\rangle = 2\\langle 1, 5, -4 \\rangle$.)<div class=\"step-divider\"></div><strong>Step 4 — Write the Symmetric Equations of the Tangent Line at $(3, 1, 2)$:</strong><br>\nA line passing through $P_0(x_0, y_0, z_0) = (3, 1, 2)$ with direction vector $\\vec{v} = \\langle 1, 5, -4 \\rangle$ has symmetric equations:\n$$\\frac{x - 3}{1} = \\frac{y - 1}{5} = \\frac{z - 2}{-4} \\iff x - 3 = \\frac{y - 1}{5} = \\frac{z - 2}{-4}$$\nTherefore, the symmetric equations are $x - 3 = \\frac{y - 1}{5} = \\frac{z - 2}{-4}$, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Normalize the Two Plane Equations to Share an Identical Normal Vector:</strong><br>\nWe are given two planes in $\\mathbb{R}^3$:\n$$\\Pi_1: -x + 6y + 2z = 3 \\qquad \\text{and} \\qquad \\Pi_2: -\\frac{1}{2}x + 3y + z = 4$$\nTo apply the distance formula between parallel planes, their normal vectors must have identical coefficients $A, B, C$. Multiplying the second plane equation $\\Pi_2$ through by $2$ yields:\n$$\\Pi_2: 2\\left(-\\frac{1}{2}x + 3y + z\\right) = 2(4) \\iff -x + 6y + 2z = 8$$\nNow both $\\Pi_1$ and $\\Pi_2$ share the common normal vector $\\vec{n} = \\langle -1, 6, 2 \\rangle$, confirming they are parallel planes with constants $D_1 = 3$ and $D_2 = 8$.<div class=\"step-divider\"></div><strong>Step 2 — State the Perpendicular Distance Formula Between Parallel Planes:</strong><br>\nThe perpendicular distance $D$ between two parallel planes written with matching normal vectors $Ax + By + Cz = D_1$ and $Ax + By + Cz = D_2$ is given by:\n$$D = \\frac{|D_2 - D_1|}{\\|\\vec{n}\\|} = \\frac{|D_2 - D_1|}{\\sqrt{A^2 + B^2 + C^2}}$$<div class=\"step-divider\"></div><strong>Step 3 — Compute the Numerator Difference and Normal Vector Magnitude:</strong><br>\nEvaluating the absolute difference between the plane constants $D_2 = 8$ and $D_1 = 3$ gives:\n$$|D_2 - D_1| = |8 - 3| = 5$$\nEvaluating the Euclidean norm $\\|\\vec{n}\\|$ of the common normal vector $\\vec{n} = \\langle -1, 6, 2 \\rangle$ gives:\n$$\\|\\vec{n}\\| = \\sqrt{(-1)^2 + 6^2 + 2^2} = \\sqrt{1 + 36 + 4} = \\sqrt{41}$$<div class=\"step-divider\"></div><strong>Step 4 — Form the Exact Distance Quotient:</strong><br>\nDividing the absolute constant difference $|D_2 - D_1| = 5$ by the normal vector magnitude $\\|\\vec{n}\\| = \\sqrt{41}$ yields the exact perpendicular distance between the two planes:\n$$D = \\frac{5}{\\sqrt{41}}$$\nThus, the distance between the planes is $\\frac{5}{\\sqrt{41}}$, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Extract the Normal Vector of the Given Plane:</strong><br>\nA plane in three-dimensional space given by the linear equation $Ax + By + Cz = D$ has normal vector $\\vec{n} = \\langle A, B, C \\rangle$, which is orthogonal to every vector lying in the plane. For the given plane\n$$3x + 2y - z = 6$$\nreading the coefficients of $x$, $y$, and $z$ directly gives the normal vector:\n$$\\vec{n} = \\langle 3, 2, -1 \\rangle$$<div class=\"step-divider\"></div><strong>Step 2 — Determine the Direction Vector of the Perpendicular Line:</strong><br>\nBecause the required line is <em>perpendicular</em> (orthogonal) to the plane $3x + 2y - z = 6$, its direction vector $\\vec{v} = \\langle a, b, c \\rangle$ must be parallel to the plane's normal vector $\\vec{n}$. Choosing the simplest scalar multiple ($\\lambda = 1$) gives:\n$$\\vec{v} = \\vec{n} = \\langle 3, 2, -1 \\rangle$$<div class=\"step-divider\"></div><strong>Step 3 — Formulate the Parametric Equations of the Line Through $(2, 3, 4)$:</strong><br>\nThe standard parametric equations of a line passing through a base point $P_0(x_0, y_0, z_0)$ with direction vector $\\vec{v} = \\langle a, b, c \\rangle$ are:\n$$x(t) = x_0 + at, \\qquad y(t) = y_0 + bt, \\qquad z(t) = z_0 + ct \\qquad (t \\in \\mathbb{R})$$\nSubstituting $P_0(x_0, y_0, z_0) = (2, 3, 4)$ and $\\vec{v} = \\langle 3, 2, -1 \\rangle$ yields:\n$$x = 2 + 3t, \\qquad y = 3 + 2t, \\qquad z = 4 - t$$<div class=\"step-divider\"></div><strong>Step 4 — Verify Against the Given Choices:</strong><br>\nAt $t = 0$, the parametric equations give $(x, y, z) = (2, 3, 4)$, and the coefficients of $t$ form $\\langle 3, 2, -1 \\rangle$, which is normal to $3x + 2y - z = 6$. Therefore, the parametric equations are $x = 2 + 3t, y = 3 + 2t, z = 4 - t$, which corresponds to Choice <strong>(B)</strong>."
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
    "solution": "<strong>Step 1 — Construct Two Non-Collinear Displacement Vectors Lying in the Plane:</strong><br>\nThe plane passes through the three non-collinear points $P(0, 0, 0)$, $Q(1, 0, 1)$, and $R(-1, 1, 0)$. Using the origin $P(0, 0, 0)$ as our reference point, the displacement vectors $\\overrightarrow{PQ}$ and $\\overrightarrow{PR}$ lie entirely within the plane:\n$$\\overrightarrow{PQ} = \\langle 1 - 0,\\; 0 - 0,\\; 1 - 0 \\rangle = \\langle 1, 0, 1 \\rangle$$\n$$\\overrightarrow{PR} = \\langle -1 - 0,\\; 1 - 0,\\; 0 - 0 \\rangle = \\langle -1, 1, 0 \\rangle$$<div class=\"step-divider\"></div><strong>Step 2 — Compute a Normal Vector $\\vec{n}$ to the Plane Using the Cross Product:</strong><br>\nSince the normal vector $\\vec{n}$ is orthogonal to both $\\overrightarrow{PQ}$ and $\\overrightarrow{PR}$, we compute their cross product:\n$$\\vec{n} = \\overrightarrow{PQ} \\times \\overrightarrow{PR} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 0 & 1 \\\\ -1 & 1 & 0 \\end{vmatrix}$$\n$$\\vec{n} = \\mathbf{i}\\big(0(0) - 1(1)\\big) - \\mathbf{j}\\big(1(0) - 1(-1)\\big) + \\mathbf{k}\\big(1(1) - 0(-1)\\big) = \\langle -1, -1, 1 \\rangle$$<div class=\"step-divider\"></div><strong>Step 3 — Write the Plane Equation and Normalize the Coefficient of $x$ to $+1$:</strong><br>\nUsing the base point $P(0, 0, 0)$ and normal vector $\\vec{n} = \\langle -1, -1, 1 \\rangle$, the point-normal equation of the plane is:\n$$-1(x - 0) - 1(y - 0) + 1(z - 0) = 0 \\iff -x - y + z = 0$$\nMultiplying both sides by $-1$ so that the coefficient of $x$ is $+1$ (matching the template $x + by + cz = d$) gives:\n$$x + y - z = 0$$<div class=\"step-divider\"></div><strong>Step 4 — Identify $b, c, d$ and Compute the Sum $b + c + d$:</strong><br>\nComparing $x + 1y + (-1)z = 0$ with $x + by + cz = d$ term by term yields:\n$$b = 1, \\qquad c = -1, \\qquad d = 0$$\nAdding these three constants together gives:\n$$b + c + d = 1 + (-1) + 0 = 0$$\nThus, $b + c + d = 0$, which corresponds to Choice <strong>(C)</strong>."
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
    "solution": "<strong>Step 1 — Substitute the Parametric Equations of the Line into the Plane Equation:</strong><br>\nWe seek the point of intersection $(a, b, c)$ between the plane $x + 3y + z = 6$ and the line given parametrically by:\n$$x(t) = t, \\qquad y(t) = 1 - t, \\qquad z(t) = 2 + 3t$$\nAt the point of intersection, the coordinates $(x(t), y(t), z(t))$ of the line must satisfy the linear equation of the plane:\n$$t + 3(1 - t) + (2 + 3t) = 6$$<div class=\"step-divider\"></div><strong>Step 2 — Solve the Resulting Linear Equation for the Parameter $t$:</strong><br>\nExpanding the parentheses and collecting the $t$-terms and constant terms on the left-hand side gives:\n$$t + 3 - 3t + 2 + 3t = 6$$\n$$(t - 3t + 3t) + (3 + 2) = 6 \\implies t + 5 = 6 \\implies t = 1$$<div class=\"step-divider\"></div><strong>Step 3 — Evaluate the Intersection Coordinates $(a, b, c)$ at $t = 1$:</strong><br>\nSubstituting $t = 1$ back into the parametric equations of the line from Step 1 yields each coordinate of the intersection point $(a, b, c)$:\n$$a = x(1) = 1, \\qquad b = y(1) = 1 - 1 = 0, \\qquad c = z(1) = 2 + 3(1) = 5$$\nThus, the point of intersection is $(a, b, c) = (1, 0, 5)$.<div class=\"step-divider\"></div><strong>Step 4 — Verify in the Plane Equation and Compute $a + b + c$:</strong><br>\nChecking $(1, 0, 5)$ in the plane equation confirms $1 + 3(0) + 5 = 6$. Summing the three coordinates gives:\n$$a + b + c = 1 + 0 + 5 = 6$$\nNote also that since $(a, b, c)$ lies on the plane $x + 3y + z = 6$ with $y = b = 0$, we immediately have $a + b + c = a + 3(0) + c = 6$, which corresponds to Choice <strong>(A)</strong>."
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
    "solution": "<strong>Step 1 — Rearrange the Second-Degree Equation into Standard Canonical Form:</strong><br>\nWe are given the homogeneous second-degree equation in three variables:\n$$4x^2 - 3y^2 - 12z^2 = 0$$\nMoving the two negative terms to the right-hand side so that all squared terms have positive coefficients gives:\n$$4x^2 = 3y^2 + 12z^2$$\nDividing both sides by $12$ (or $4$) expresses the equation in canonical form:\n$$\\frac{x^2}{3} = \\frac{y^2}{4} + \\frac{z^2}{1} \\iff \\frac{y^2}{2^2} + \\frac{z^2}{1^2} = \\frac{x^2}{(\\sqrt{3})^2}$$<div class=\"step-divider\"></div><strong>Step 2 — Analyze the Degree and Constant Term of the Equation:</strong><br>\nObserve two defining algebraic properties of $4x^2 - 3y^2 - 12z^2 = 0$:\n<ol>\n<li>Every variable ($x, y, z$) is squared, and there is <strong>no nonzero constant term</strong> (the constant term is $0$, unlike a hyperboloid of one or two sheets or an ellipsoid, which require a nonzero constant $\\pm 1$ on the right-hand side).</li>\n<li>Two squared terms ($3y^2$ and $12z^2$) share the same sign and equal the third squared term ($4x^2$).</li>\n</ol><div class=\"step-divider\"></div><strong>Step 3 — Inspect Cross-Sectional Traces Parallel to the Coordinate Planes:</strong><br>\n<ul>\n<li><strong>Traces in planes $x = k$ ($k \\neq 0$):</strong> $\\frac{y^2}{4k^2/3} + \\frac{z^2}{k^2/3} = 1$, which are <strong>ellipses</strong> whose axes grow linearly with $|k|$. At $x = 0$, $3y^2 + 12z^2 = 0 \\implies (y, z) = (0, 0)$, giving the single vertex point $(0, 0, 0)$.</li>\n<li><strong>Traces in the $xy$-plane ($z = 0$) and $xz$-plane ($y = 0$):</strong> $y = \\pm \\frac{2}{\\sqrt{3}}x$ and $z = \\pm \\frac{1}{\\sqrt{3}}x$, which are pairs of intersecting straight lines through the origin (the generating rulings of the cone).</li>\n</ul><div class=\"step-divider\"></div><strong>Step 4 — Classify the Quadric Surface:</strong><br>\nBecause cross-sections perpendicular to the $x$-axis are ellipses that shrink to a single vertex at $(0, 0, 0)$ and cross-sections containing the $x$-axis are pairs of intersecting lines, the graph is <strong>an elliptic cone</strong> opening along the $x$-axis, which corresponds to Choice <strong>(A)</strong>."
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
    "solution": "<strong>Step 1 — State the Domain Restriction for a Natural Logarithm Function:</strong><br>\nWe are asked to find the natural domain of the two-variable function:\n$$f(x, y) = \\ln(y - x + 2)$$\nIn the real number system $\\mathbb{R}$, the natural logarithm $\\ln(u)$ is defined if and only if its inner argument $u$ is <strong>strictly positive</strong> ($u > 0$). It is undefined when $u = 0$ (since $\\lim_{u \\to 0^+} \\ln u = -\\infty$) and undefined in $\\mathbb{R}$ when $u < 0$.<div class=\"step-divider\"></div><strong>Step 2 — Set Up the Strict Inequality for the Inner Argument:</strong><br>\nApplying the condition $u > 0$ to the inner linear expression $u(x, y) = y - x + 2$ yields the domain inequality:\n$$y - x + 2 > 0$$<div class=\"step-divider\"></div><strong>Step 3 — Solve the Inequality Explicitly for $y$ in Terms of $x$:</strong><br>\nAdding $x$ and subtracting $2$ from both sides of the strict inequality $y - x + 2 > 0$ isolates $y$ on the left-hand side:\n$$y > x - 2$$\nGeometrically, in the $xy$-plane, the equation $y = x - 2$ is a straight boundary line with slope $m = 1$ and $y$-intercept $(0, -2)$ (drawn dashed since equality is excluded), and the strict inequality $y > x - 2$ represents the open upper half-plane lying strictly above this line.<div class=\"step-divider\"></div><strong>Step 4 — Express the Domain in Set-Builder Notation:</strong><br>\nWriting the set of all ordered pairs $(x, y) \\in \\mathbb{R}^2$ that satisfy $y > x - 2$ in standard set-builder notation gives:\n$$\\operatorname{Dom}(f) = \\big\\{(x, y) : y > x - 2\\big\\}$$\nThis exact set description matches $\\{(x, y) : y > x - 2\\}$, which corresponds to Choice <strong>(A)</strong>."
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
    "solution": "<strong>Step 1 — Formulate the General Level Curve Equation $f(x, y) = C$:</strong><br>\nBy definition, a level curve of the two-variable rational function\n$$f(x, y) = \\frac{x}{x^2 + y^2} \\qquad ((x, y) \\neq (0, 0))$$\nis the locus of points $(x, y)$ in the domain of $f$ where the function takes a constant real value $C$:\n$$\\frac{x}{x^2 + y^2} = C$$<div class=\"step-divider\"></div><strong>Step 2 — Evaluate the Constant $C$ Using the Given Point $(1, 1)$:</strong><br>\nSince the required level curve passes through the point $(x_0, y_0) = (1, 1)$, we substitute $x = 1$ and $y = 1$ into $f(x, y)$ to determine the constant $C$:\n$$C = f(1, 1) = \\frac{1}{1^2 + 1^2} = \\frac{1}{1 + 1} = \\frac{1}{2}$$<div class=\"step-divider\"></div><strong>Step 3 — Clear the Denominator and Rearrange into Implicit Polynomial Form:</strong><br>\nSubstituting $C = \\frac{1}{2}$ into the level curve equation from Step 1 gives:\n$$\\frac{x}{x^2 + y^2} = \\frac{1}{2}$$\nCross-multiplying by $2(x^2 + y^2)$ (for $(x, y) \\neq (0, 0)$) yields:\n$$2x = x^2 + y^2$$<div class=\"step-divider\"></div><strong>Step 4 — Collect All Terms on One Side to Match the Choices:</strong><br>\nSubtracting $2x$ from both sides rearranges the equation into the standard implicit form:\n$$x^2 - 2x + y^2 = 0$$\n(Geometrically, completing the square gives $(x - 1)^2 + y^2 = 1$, a circle of radius $1$ centered at $(1, 0)$ punctured at the origin.) Therefore, the equation of the level curve is $x^2 - 2x + y^2 = 0$, which corresponds to Choice <strong>(E)</strong>."
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
    "solution": "<strong>Step 1 — Reduce the Two-Variable Limit Using Radial Substitution:</strong><br>\nWe wish to evaluate the multivariable limit:\n$$L = \\lim_{(x, y) \\to (0, 0)} \\frac{\\ln(2x^2 + 2y^2 + 1)}{x^2 + y^2}$$\nObserve that both the numerator $\\ln\\big(2(x^2 + y^2) + 1\\big)$ and the denominator $x^2 + y^2$ depend solely on the non-negative radial quantity $u = x^2 + y^2$. Because $(x, y) \\to (0, 0)$ if and only if $u = x^2 + y^2 \\to 0^+$, the limit transforms into a single-variable limit:\n$$L = \\lim_{u \\to 0^+} \\frac{\\ln(2u + 1)}{u}$$<div class=\"step-divider\"></div><strong>Step 2 — Verify the Indeterminate Form $\\frac{0}{0}$:</strong><br>\nSubstituting $u = 0$ directly into the numerator and denominator gives:\n$$\\text{Numerator: } \\ln(2(0) + 1) = \\ln(1) = 0, \\qquad \\text{Denominator: } u = 0$$\nSince this is a $\\frac{0}{0}$ indeterminate form and both $\\ln(2u + 1)$ and $u$ are differentiable functions of $u$ near $u = 0$, L'H&ocirc;pital's Rule applies.<div class=\"step-divider\"></div><strong>Step 3 — Apply L'H&ocirc;pital's Rule by Differentiating with Respect to $u$:</strong><br>\nDifferentiating the numerator $\\ln(2u + 1)$ and denominator $u$ with respect to $u$ using the Chain Rule ($\\frac{d}{du}[\\ln(2u + 1)] = \\frac{2}{2u + 1}$) gives:\n$$L = \\lim_{u \\to 0^+} \\frac{\\frac{d}{du}\\big[\\ln(2u + 1)\\big]}{\\frac{d}{du}(u)} = \\lim_{u \\to 0^+} \\frac{\\frac{2}{2u + 1}}{1} = \\lim_{u \\to 0^+} \\frac{2}{2u + 1}$$<div class=\"step-divider\"></div><strong>Step 4 — Evaluate the Limit by Direct Substitution:</strong><br>\nBecause $\\frac{2}{2u + 1}$ is continuous at $u = 0$, substituting $u = 0$ yields:\n$$L = \\frac{2}{2(0) + 1} = \\frac{2}{1} = 2$$\nThus, $\\lim_{(x, y) \\to (0, 0)} \\frac{\\ln(2x^2 + 2y^2 + 1)}{x^2 + y^2} = 2$, which corresponds to Choice <strong>(C)</strong>."
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
    "solution": "<strong>Step 1 — Evaluate the Limit Along General Linear Paths $y = mx$:</strong><br>\nWe are given the rational function $f(x, y) = \\frac{x^2 y}{x^4 + y^2}$ for $(x, y) \\neq (0, 0)$. Let us first restrict $(x, y)$ to any non-vertical straight line $y = mx$ ($m \\neq 0$) passing through the origin as $x \\to 0$:\n$$\\lim_{\\substack{(x, y) \\to (0, 0) \\\\ y = mx}} f(x, y) = \\lim_{x \\to 0} \\frac{x^2(mx)}{x^4 + (mx)^2} = \\lim_{x \\to 0} \\frac{m x^3}{x^2(x^2 + m^2)} = \\lim_{x \\to 0} \\frac{mx}{x^2 + m^2} = \\frac{0}{0 + m^2} = 0$$<div class=\"step-divider\"></div><strong>Step 2 — Check the Specific Linear Paths in Choices (B) and (E):</strong><br>\n<ul>\n<li><strong>Along the line $y = 2x$ ($m = 2$):</strong> Substituting $y = 2x$ gives\n$$\\lim_{x \\to 0} f(x, 2x) = \\lim_{x \\to 0} \\frac{2x^3}{x^4 + 4x^2} = \\lim_{x \\to 0} \\frac{2x}{x^2 + 4} = \\frac{0}{4} = 0$$\nThus, the statement in Choice (B) is <strong>TRUE</strong>.</li>\n<li><strong>Along the line $y = -x$ ($m = -1$):</strong> $\\lim_{x \\to 0} f(x, -x) = \\lim_{x \\to 0} \\frac{-x}{x^2 + 1} = 0 \\neq -1$, so Choice (E) is FALSE.</li>\n</ul><div class=\"step-divider\"></div><strong>Step 3 — Evaluate the Limit Along the Parabolic Path $y = x^2$ (Choice C):</strong><br>\nRestricting $(x, y)$ to the parabola $y = x^2$ as $x \\to 0$ ($x \\neq 0$) balances the degrees in the denominator $x^4 + y^2$:\n$$\\lim_{\\substack{(x, y) \\to (0, 0) \\\\ y = x^2}} f(x, y) = \\lim_{x \\to 0} \\frac{x^2(x^2)}{x^4 + (x^2)^2} = \\lim_{x \\to 0} \\frac{x^4}{2x^4} = \\frac{1}{2} \\neq 2$$\nThus, Choice (C) is FALSE.<div class=\"step-divider\"></div><strong>Step 4 — Apply the Two-Path Test to Eliminate Choices (A) and (D):</strong><br>\nBecause approaching $(0, 0)$ along the line $y = 2x$ yields $0$ whereas approaching $(0, 0)$ along the parabola $y = x^2$ yields $\\frac{1}{2} \\neq 0$, the unrestricted two-variable limit $\\lim_{(x, y) \\to (0, 0)} f(x, y)$ <strong>does not exist</strong>, making Choices (A) and (D) FALSE. Therefore, the only true statement is that along the line $y = 2x$, $\\lim_{(x, y) \\to (0, 0)} f(x, y) = 0$, which corresponds to Choice <strong>(B)</strong>."
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
    "solution": "<strong>Step 1 — Interpret the Geometric Meaning of Slope in the $x$-Direction:</strong><br>\nFor a smooth surface $z = f(x, y)$ in $\\mathbb{R}^3$, slicing the surface with the vertical plane $y = y_0$ (parallel to the $xz$-plane) produces a curve whose tangent line slope at $(x_0, y_0, f(x_0, y_0))$ is the first-order partial derivative with respect to $x$:\n$$\\text{Slope in the } x\\text{-direction at } (1, 2, e^2) = f_x(1, 2) = \\left.\\frac{\\partial f}{\\partial x}\\right|_{(1, 2)}$$<div class=\"step-divider\"></div><strong>Step 2 — Apply the Product Rule and Chain Rule to Compute $f_x(x, y)$:</strong><br>\nWe are given $f(x, y) = x e^{x^2 y}$. Since $x$ appears both in the linear factor $u = x$ and in the exponential factor $v = e^{x^2 y}$, we differentiate with respect to $x$ (holding $y$ constant) using the Product Rule $\\frac{\\partial}{\\partial x}(uv) = u_x v + u v_x$:\n$$f_x(x, y) = \\frac{\\partial}{\\partial x}(x) \\cdot e^{x^2 y} + x \\cdot \\frac{\\partial}{\\partial x}\\left(e^{x^2 y}\\right)$$<div class=\"step-divider\"></div><strong>Step 3 — Simplify the Symbolic Expression for $f_x(x, y)$:</strong><br>\nBy the Chain Rule, $\\frac{\\partial}{\\partial x}\\left(e^{x^2 y}\\right) = e^{x^2 y} \\cdot \\frac{\\partial}{\\partial x}(x^2 y) = 2xy\\,e^{x^2 y}$. Substituting this back into the Product Rule gives:\n$$f_x(x, y) = 1 \\cdot e^{x^2 y} + x(2xy\\,e^{x^2 y}) = e^{x^2 y} + 2x^2 y\\,e^{x^2 y} = (1 + 2x^2 y)e^{x^2 y}$$<div class=\"step-divider\"></div><strong>Step 4 — Evaluate $f_x(1, 2)$ at the Point $(1, 2, e^2)$:</strong><br>\nSubstituting $x = 1$ and $y = 2$ into $f_x(x, y) = (1 + 2x^2 y)e^{x^2 y}$ yields:\n$$f_x(1, 2) = \\big(1 + 2(1)^2(2)\\big)e^{(1)^2(2)} = (1 + 4)e^2 = 5e^2$$\nTherefore, the slope of the surface at $(1, 2, e^2)$ in the $x$-direction is $5e^2$, which corresponds to Choice <strong>(A)</strong>."
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
    "solution": "<strong>Step 1 — Compute the First-Order Partial Derivative $\\frac{\\partial z}{\\partial t}$:</strong><br>\nWe are given the two-variable function of $t$ and $x$:\n$$z(t, x) = e^{-t}\\cos\\left(\\frac{x}{2}\\right)$$\nDifferentiating $z$ partially with respect to $t$ while holding $x$ constant (so $\\cos\\left(\\frac{x}{2}\\right)$ acts as a constant factor) gives:\n$$\\frac{\\partial z}{\\partial t} = \\frac{d}{dt}\\left(e^{-t}\\right) \\cdot \\cos\\left(\\frac{x}{2}\\right) = -e^{-t}\\cos\\left(\\frac{x}{2}\\right)$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the First-Order Partial Derivative $\\frac{\\partial z}{\\partial x}$:</strong><br>\nNext, differentiate $z = e^{-t}\\cos\\left(\\frac{x}{2}\\right)$ partially with respect to $x$ while holding $t$ constant. Using the Chain Rule on $\\cos\\left(\\frac{x}{2}\\right)$:\n$$\\frac{\\partial z}{\\partial x} = e^{-t} \\cdot \\frac{d}{dx}\\left[\\cos\\left(\\frac{x}{2}\\right)\\right] = e^{-t}\\left(-\\sin\\left(\\frac{x}{2}\\right) \\cdot \\frac{1}{2}\\right) = -\\frac{1}{2}e^{-t}\\sin\\left(\\frac{x}{2}\\right)$$<div class=\"step-divider\"></div><strong>Step 3 — Compute the Second-Order Partial Derivative $\\frac{\\partial^2 z}{\\partial x^2}$:</strong><br>\nDifferentiating $\\frac{\\partial z}{\\partial x} = -\\frac{1}{2}e^{-t}\\sin\\left(\\frac{x}{2}\\right)$ a second time with respect to $x$ (again holding $t$ constant) yields:\n$$\\frac{\\partial^2 z}{\\partial x^2} = -\\frac{1}{2}e^{-t} \\cdot \\frac{d}{dx}\\left[\\sin\\left(\\frac{x}{2}\\right)\\right] = -\\frac{1}{2}e^{-t}\\left(\\cos\\left(\\frac{x}{2}\\right) \\cdot \\frac{1}{2}\\right) = -\\frac{1}{4}e^{-t}\\cos\\left(\\frac{x}{2}\\right)$$<div class=\"step-divider\"></div><strong>Step 4 — Substitute Both Expressions into $\\frac{\\partial z}{\\partial t} - 4\\frac{\\partial^2 z}{\\partial x^2}$:</strong><br>\nSubstituting the results from Steps 1 and 3 into the linear partial differential operator $\\frac{\\partial z}{\\partial t} - 4\\frac{\\partial^2 z}{\\partial x^2}$ gives:\n$$\\frac{\\partial z}{\\partial t} - 4\\frac{\\partial^2 z}{\\partial x^2} = -e^{-t}\\cos\\left(\\frac{x}{2}\\right) - 4\\left(-\\frac{1}{4}e^{-t}\\cos\\left(\\frac{x}{2}\\right)\\right) = -e^{-t}\\cos\\left(\\frac{x}{2}\\right) + e^{-t}\\cos\\left(\\frac{x}{2}\\right) = 0$$\nThus, $z$ satisfies the heat equation $\\frac{\\partial z}{\\partial t} - 4\\frac{\\partial^2 z}{\\partial x^2} = 0$, which corresponds to Choice <strong>(E)</strong>."
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
    "solution": "<strong>Step 1 — Identify the Base Point, Initial Value, and Coordinate Differentials:</strong><br>\nWe are given the surface $z = f(x, y) = \\sqrt{29 - x^2 - y^2}$ as $(x, y)$ moves from the initial point $(x_0, y_0) = (3, 4)$ to $(x_1, y_1) = (3.01, 3.97)$. At $(3, 4)$, the value of the radical is:\n$$z(3, 4) = \\sqrt{29 - 3^2 - 4^2} = \\sqrt{29 - 9 - 16} = \\sqrt{4} = 2$$\nThe coordinate increments (differentials) are:\n$$dx = \\Delta x = 3.01 - 3 = 0.01 = \\frac{1}{100}, \\qquad dy = \\Delta y = 3.97 - 4 = -0.03 = -\\frac{3}{100}$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the First-Order Partial Derivatives $\\frac{\\partial z}{\\partial x}$ and $\\frac{\\partial z}{\\partial y}$:</strong><br>\nApplying the Chain Rule to $z = (29 - x^2 - y^2)^{1/2}$ gives:\n$$\\frac{\\partial z}{\\partial x} = \\frac{-2x}{2\\sqrt{29 - x^2 - y^2}} = \\frac{-x}{\\sqrt{29 - x^2 - y^2}}, \\qquad \\frac{\\partial z}{\\partial y} = \\frac{-2y}{2\\sqrt{29 - x^2 - y^2}} = \\frac{-y}{\\sqrt{29 - x^2 - y^2}}$$<div class=\"step-divider\"></div><strong>Step 3 — Evaluate Both Partial Derivatives at the Base Point $(3, 4)$:</strong><br>\nSubstituting $x_0 = 3$, $y_0 = 4$, and $\\sqrt{29 - 3^2 - 4^2} = 2$ into the partial derivative formulas from Step 2 gives:\n$$\\frac{\\partial z}{\\partial x}(3, 4) = -\\frac{3}{2}, \\qquad \\frac{\\partial z}{\\partial y}(3, 4) = -\\frac{4}{2} = -2$$<div class=\"step-divider\"></div><strong>Step 4 — Compute the Total Differential $dz$ as an Exact Fraction:</strong><br>\nApproximating the change $\\Delta z$ by the total differential $dz = \\frac{\\partial z}{\\partial x}(3, 4)\\,dx + \\frac{\\partial z}{\\partial y}(3, 4)\\,dy$ yields:\n$$\\Delta z \\approx dz = \\left(-\\frac{3}{2}\\right)\\left(\\frac{1}{100}\\right) + (-2)\\left(-\\frac{3}{100}\\right) = -\\frac{3}{200} + \\frac{6}{100} = \\frac{-3 + 12}{200} = \\frac{9}{200}$$\nThus, the change in $z$ is approximately equal to $\\frac{9}{200}$, which corresponds to Choice <strong>(B)</strong>."
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
    "solution": "<strong>Step 1 — State the Three-Variable Chain Rule for $\\frac{\\partial w}{\\partial t}$:</strong><br>\nSince $w = xy^2 + yz^2 + zx^2$ is a differentiable function of the three intermediate variables $(x, y, z)$, which are in turn differentiable functions of $(s, t)$ via $x = s + t^2$, $y = \\frac{s}{t}$, and $z = s^2$, the Multivariable Chain Rule gives:\n$$\\frac{\\partial w}{\\partial t} = \\frac{\\partial w}{\\partial x}\\frac{\\partial x}{\\partial t} + \\frac{\\partial w}{\\partial y}\\frac{\\partial y}{\\partial t} + \\frac{\\partial w}{\\partial z}\\frac{\\partial z}{\\partial t}$$<div class=\"step-divider\"></div><strong>Step 2 — Evaluate the Intermediate Coordinates and $t$-Derivatives at $(s, t) = (1, 1)$:</strong><br>\nWhen $s = 1$ and $t = 1$, the intermediate coordinates $(x, y, z)$ are:\n$$x(1, 1) = 1 + 1^2 = 2, \\qquad y(1, 1) = \\frac{1}{1} = 1, \\qquad z(1, 1) = 1^2 = 1$$\nDifferentiating $x = s + t^2$, $y = s t^{-1}$, and $z = s^2$ partially with respect to $t$ (holding $s$ constant) and evaluating at $(s, t) = (1, 1)$ gives:\n$$\\frac{\\partial x}{\\partial t} = 2t \\implies \\frac{\\partial x}{\\partial t}(1, 1) = 2, \\qquad \\frac{\\partial y}{\\partial t} = -\\frac{s}{t^2} \\implies \\frac{\\partial y}{\\partial t}(1, 1) = -1, \\qquad \\frac{\\partial z}{\\partial t} = 0$$<div class=\"step-divider\"></div><strong>Step 3 — Compute and Evaluate $\\frac{\\partial w}{\\partial x}$, $\\frac{\\partial w}{\\partial y}$, and $\\frac{\\partial w}{\\partial z}$ at $(2, 1, 1)$:</strong><br>\nDifferentiating $w = xy^2 + yz^2 + zx^2$ with respect to $x, y, z$ and evaluating at $(x, y, z) = (2, 1, 1)$ yields:\n$$\\frac{\\partial w}{\\partial x} = y^2 + 2xz \\implies \\frac{\\partial w}{\\partial x}(2, 1, 1) = (1)^2 + 2(2)(1) = 1 + 4 = 5$$\n$$\\frac{\\partial w}{\\partial y} = 2xy + z^2 \\implies \\frac{\\partial w}{\\partial y}(2, 1, 1) = 2(2)(1) + (1)^2 = 4 + 1 = 5$$\n$$\\frac{\\partial w}{\\partial z} = 2yz + x^2 \\implies \\frac{\\partial w}{\\partial z}(2, 1, 1) = 2(1)(1) + (2)^2 = 2 + 4 = 6$$<div class=\"step-divider\"></div><strong>Step 4 — Substitute All Evaluated Quantities into the Chain Rule Formula:</strong><br>\nCombining the evaluated derivatives from Steps 2 and 3 into the Chain Rule formula from Step 1 gives:\n$$\\left.\\frac{\\partial w}{\\partial t}\\right|_{(s, t) = (1, 1)} = (5)(2) + (5)(-1) + (6)(0) = 10 - 5 + 0 = 5$$\nTherefore, the value of $\\frac{\\partial w}{\\partial t}$ when $s = 1, t = 1$ is $5$, which corresponds to Choice <strong>(B)</strong>."
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
    "solution": "<strong>Step 1 — Formulate the Implicit Equation as $F(x, y, z) = 0$:</strong><br>\nWe are given that $z$ is defined implicitly as a differentiable function of $x$ and $y$ by the equation $xyz = \\sin(3x - 2y - z)$. Moving $xyz$ to the right-hand side defines the differentiable level-surface function:\n$$F(x, y, z) = \\sin(3x - 2y - z) - xyz = 0$$\nBy the Implicit Function Theorem, at any point where $F_z \\neq 0$, the partial derivative $\\frac{\\partial z}{\\partial x}$ is given by:\n$$\\frac{\\partial z}{\\partial x} = -\\frac{F_x(x, y, z)}{F_z(x, y, z)}$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the Partial Derivative $F_x(x, y, z)$:</strong><br>\nDifferentiating $F(x, y, z) = \\sin(3x - 2y - z) - xyz$ partially with respect to $x$ while holding both $y$ and $z$ constant (applying the Chain Rule to $\\sin(3x - 2y - z)$ with inner derivative $\\frac{\\partial}{\\partial x}(3x - 2y - z) = 3$) gives:\n$$F_x(x, y, z) = \\cos(3x - 2y - z) \\cdot 3 - yz = 3\\cos(3x - 2y - z) - yz$$<div class=\"step-divider\"></div><strong>Step 3 — Compute the Partial Derivative $F_z(x, y, z)$:</strong><br>\nDifferentiating $F(x, y, z) = \\sin(3x - 2y - z) - xyz$ partially with respect to $z$ while holding both $x$ and $y$ constant (applying the Chain Rule with inner derivative $\\frac{\\partial}{\\partial z}(3x - 2y - z) = -1$) gives:\n$$F_z(x, y, z) = \\cos(3x - 2y - z) \\cdot (-1) - xy = -\\cos(3x - 2y - z) - xy = -\\big[\\cos(3x - 2y - z) + xy\\big]$$<div class=\"step-divider\"></div><strong>Step 4 — Substitute into the Quotient Formula and Simplify Signs:</strong><br>\nSubstituting $F_x$ and $F_z$ into $\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}$ and canceling the negative signs yields:\n$$\\frac{\\partial z}{\\partial x} = -\\frac{3\\cos(3x - 2y - z) - yz}{-\\big[\\cos(3x - 2y - z) + xy\\big]} = \\frac{3\\cos(3x - 2y - z) - yz}{\\cos(3x - 2y - z) + xy}$$\nThus, $\\frac{\\partial z}{\\partial x} = \\frac{3\\cos(3x - 2y - z) - yz}{\\cos(3x - 2y - z) + xy}$, which corresponds to Choice <strong>(C)</strong>."
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
    "solution": "<strong>Step 1 — Extract a Base Point $P_0$ and Direction Vector $\\vec{u}$ of the Line $L$:</strong><br>\nThe line $L$ is given by the parametric equations $x = t, y = -t, z = 2t$ ($t \\in \\mathbb{R}$). Setting $t = 0$ gives the base point $P_0(0, 0, 0)$ on the line, and reading the coefficients of $t$ gives the direction vector of $L$:\n$$\\vec{u} = \\langle 1, -1, 2 \\rangle$$\nFrom $P_0(0, 0, 0)$ to the given external point $Q(1, 1, 1)$, the displacement vector is:\n$$\\overrightarrow{P_0 Q} = \\langle 1 - 0,\\; 1 - 0,\\; 1 - 0 \\rangle = \\langle 1, 1, 1 \\rangle$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the Cross Product $\\overrightarrow{P_0 Q} \\times \\vec{u}$:</strong><br>\nThe perpendicular distance from $Q$ to the line $L$ is given by $d = \\frac{\\|\\overrightarrow{P_0 Q} \\times \\vec{u}\\|}{\\|\\vec{u}\\|}$. First, we evaluate the cross product $\\overrightarrow{P_0 Q} \\times \\vec{u}$:\n$$\\overrightarrow{P_0 Q} \\times \\vec{u} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 1 & 1 \\\\ 1 & -1 & 2 \\end{vmatrix}$$\n$$= \\mathbf{i}\\big((1)(2) - (1)(-1)\\big) - \\mathbf{j}\\big((1)(2) - (1)(1)\\big) + \\mathbf{k}\\big((1)(-1) - (1)(1)\\big) = \\langle 3, -1, -2 \\rangle$$<div class=\"step-divider\"></div><strong>Step 3 — Compute the Magnitudes $\\|\\overrightarrow{P_0 Q} \\times \\vec{u}\\|$ and $\\|\\vec{u}\\|$:</strong><br>\nCalculating the Euclidean norms of both vectors gives:\n$$\\|\\overrightarrow{P_0 Q} \\times \\vec{u}\\| = \\sqrt{3^2 + (-1)^2 + (-2)^2} = \\sqrt{9 + 1 + 4} = \\sqrt{14}$$\n$$\\|\\vec{u}\\| = \\sqrt{1^2 + (-1)^2 + 2^2} = \\sqrt{1 + 1 + 4} = \\sqrt{6}$$<div class=\"step-divider\"></div><strong>Step 4 — Evaluate and Rationalize the Distance Quotient:</strong><br>\nDividing $\\|\\overrightarrow{P_0 Q} \\times \\vec{u}\\|$ by $\\|\\vec{u}\\|$ and rationalizing the denominator yields:\n$$d = \\frac{\\|\\overrightarrow{P_0 Q} \\times \\vec{u}\\|}{\\|\\vec{u}\\|} = \\frac{\\sqrt{14}}{\\sqrt{6}} = \\sqrt{\\frac{14}{6}} = \\sqrt{\\frac{7}{3}} = \\frac{\\sqrt{7} \\cdot \\sqrt{3}}{\\sqrt{3} \\cdot \\sqrt{3}} = \\frac{\\sqrt{21}}{3}$$\nThus, the distance from $Q(1, 1, 1)$ to the line $L$ is $\\frac{\\sqrt{21}}{3}$, which corresponds to Choice <strong>(D)</strong>."
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
    "solution": "<strong>Step 1 — Express the Distances from $(x, y, z)$ to the Point $(0, 0, 3)$ and the Plane $z = -1$:</strong><br>\nLet $P(x, y, z)$ be an arbitrary point in $\\mathbb{R}^3$.\n<ul>\n<li>The Euclidean distance $d_1$ from $P(x, y, z)$ to the fixed point $F(0, 0, 3)$ is:\n$$d_1 = \\sqrt{(x - 0)^2 + (y - 0)^2 + (z - 3)^2} = \\sqrt{x^2 + y^2 + (z - 3)^2}$$</li>\n<li>The perpendicular distance $d_2$ from $P(x, y, z)$ to the horizontal plane $z = -1$ (i.e., $z + 1 = 0$) is:\n$$d_2 = |z - (-1)| = |z + 1|$$</li>\n</ul><div class=\"step-divider\"></div><strong>Step 2 — Equate the Squared Distances and Expand the Binomials:</strong><br>\nA point $P(x, y, z)$ is equidistant from $(0, 0, 3)$ and the plane $z = -1$ if and only if $d_1 = d_2$, which (since both distances are non-negative) is equivalent to $d_1^2 = d_2^2$:\n$$x^2 + y^2 + (z - 3)^2 = (z + 1)^2$$\nExpanding $(z - 3)^2 = z^2 - 6z + 9$ and $(z + 1)^2 = z^2 + 2z + 1$ gives:\n$$x^2 + y^2 + z^2 - 6z + 9 = z^2 + 2z + 1$$<div class=\"step-divider\"></div><strong>Step 3 — Cancel the $z^2$ Terms and Put into Canonical Quadric Form:</strong><br>\nSubtracting $z^2$ from both sides eliminates the quadratic term in $z$, leaving $z$ as a linear variable:\n$$x^2 + y^2 - 6z + 9 = 2z + 1 \\iff x^2 + y^2 = 8z - 8 = 8(z - 1)$$\nDividing both sides by $8$ yields the standard canonical equation:\n$$z - 1 = \\frac{x^2}{8} + \\frac{y^2}{8}$$<div class=\"step-divider\"></div><strong>Step 4 — Classify the Resulting Quadric Surface:</strong><br>\nIn the canonical equation $z - 1 = \\frac{x^2}{8} + \\frac{y^2}{8}$, the variable $z$ is linear (first power) while $x^2$ and $y^2$ are both squared with positive coefficients ($\\frac{1}{8} > 0$). Horizontal cross-sections for $z > 1$ are circles (ellipses) and vertical traces are parabolas opening upward with vertex at $(0, 0, 1)$. Therefore, the surface is <strong>an elliptic paraboloid</strong>, which corresponds to Choice <strong>(C)</strong>."
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
    "solution": "<p><strong>Step 1: Compute the direction vector connecting the two given points.</strong></p>\n<p>A line in three-dimensional space is uniquely determined by a base point on the line and a direction vector parallel to the line. Given the points $P(2, 0, 1)$ and $Q(1, -1, 2)$, the displacement vector $\\vec{PQ}$ serves as a direction vector $\\vec{v} = \\langle a, b, c \\rangle$:\n$$\\vec{v} = \\vec{PQ} = \\langle 1 - 2, -1 - 0, 2 - 1 \\rangle = \\langle -1, -1, 1 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Set up the vector and parametric equations of the line.</strong></p>\n<p>Using the initial point $P(x_0, y_0, z_0) = (2, 0, 1)$ and direction vector $\\vec{v} = \\langle -1, -1, 1 \\rangle$, the vector equation of the line is $\\mathbf{r}(t) = \\mathbf{r}_0 + t\\vec{v}$, which expands into the standard parametric equations:\n$$x(t) = x_0 + at = 2 + (-1)t = 2 - t$$\n$$y(t) = y_0 + bt = 0 + (-1)t = -t$$\n$$z(t) = z_0 + ct = 1 + (1)t = 1 + t$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Verify that the parametric line passes through both $P$ and $Q$.</strong></p>\n<p><ul>\n<li>At $t = 0$: $(x(0), y(0), z(0)) = (2, 0, 1) = P$, confirming the base point.</li>\n<li>At $t = 1$: $(x(1), y(1), z(1)) = (2 - 1, -1, 1 + 1) = (1, -1, 2) = Q$, confirming the line passes through $Q$.</li>\n</ul></p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>The parametric equations $x = 2 - t, y = -t, z = 1 + t$ correspond to Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Isolate the constant term and normalize the quadric surface equation.</strong></p>\n<p>We are given the second-degree equation in three variables:\n$$4x^2 - 3y^2 + 12z^2 + 12 = 0$$\nSubtract $12$ from both sides to move the constant term to the right-hand side:\n$$4x^2 - 3y^2 + 12z^2 = -12$$\nDivide every term by $-12$ so that the right-hand side equals $+1$:\n$$\\frac{4x^2}{-12} - \\frac{3y^2}{-12} + \\frac{12z^2}{-12} = 1 \\iff -\\frac{x^2}{3} + \\frac{y^2}{4} - z^2 = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Analyze the signs of the quadratic terms and cross-sectional traces.</strong></p>\n<p>Rearranging the standard form gives:\n$$\\frac{y^2}{2^2} - \\frac{x^2}{(\\sqrt{3})^2} - \\frac{z^2}{1^2} = 1$$\nNotice that for cross-sections parallel to the $xz$-plane ($y = k$), we have:\n$$\\frac{x^2}{3} + z^2 = \\frac{k^2}{4} - 1$$\nThis trace is empty whenever $|k| < 2$, meaning no part of the surface exists between the planes $y = -2$ and $y = 2$, splitting the surface into two disconnected sheets with vertices at $(0, \\pm 2, 0)$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Classify the quadric surface.</strong></p>\n<p>In standard form with $+1$ on the right-hand side, having <strong>two negative squared terms</strong> ($-x^2/3$ and $-z^2$) and <strong>one positive squared term</strong> ($+y^2/4$) is the defining algebraic signature of a <strong>hyperboloid of two sheets</strong> opening along the $y$-axis.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Analyze the structure of the function to determine its domain $D$.</strong></p>\n<p>We are given the two-variable linear function:\n$$f(x, y) = 6 - 2x - 3y$$\nThis expression is a first-degree polynomial in $x$ and $y$. Because it involves no denominators that could vanish, no even-index radicals, and no logarithmic or inverse trigonometric restrictions, $f(x, y)$ is well-defined for all real ordered pairs $(x, y) \\in \\mathbb{R}^2$:\n$$D = \\{(x, y) : -\\infty < x < \\infty, -\\infty < y < \\infty\\}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Set up the level equation to determine the range $R$.</strong></p>\n<p>The range $R$ is the set of all possible output values $z = f(x, y)$ as $(x, y)$ varies across the entire domain $D$. Geometrically, $z = 6 - 2x - 3y$ is a non-horizontal plane in $\\mathbb{R}^3$ with normal vector $\\vec{n} = \\langle 2, 3, 1 \\rangle$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Prove surjectivity onto all real numbers $\\mathbb{R}$.</strong></p>\n<p>For any arbitrary real number $z_0 \\in (-\\infty, \\infty)$, we can fix $y = 0$ and solve for $x$:\n$$z_0 = 6 - 2x - 3(0) \\implies 2x = 6 - z_0 \\implies x = \\frac{6 - z_0}{2}$$\nSince $\\left(\\frac{6 - z_0}{2}, 0\\right) \\in D$ maps directly to $z_0$, every real number is attained, giving:\n$$R = (-\\infty, \\infty)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Check direct substitution and factor the arguments.</strong></p>\n<p>We want to evaluate the two-variable limit:\n$$L = \\lim_{(x, y) \\to (0, 0)} \\frac{\\sin(2x^2 + 2y^2)}{4x^2 + 4y^2}$$\nDirect substitution of $(x, y) = (0, 0)$ yields $\\frac{\\sin(0)}{0} = \\frac{0}{0}$, which is an indeterminate form. Factoring the expressions inside the numerator and denominator gives:\n$$\\frac{\\sin(2(x^2 + y^2))}{4(x^2 + y^2)} = \\frac{1}{2} \\cdot \\frac{\\sin(2(x^2 + y^2))}{2(x^2 + y^2)}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Convert to a single-variable limit via radial substitution.</strong></p>\n<p>Let $t = 2(x^2 + y^2)$. Because $x^2 + y^2 > 0$ for all $(x, y) \\ne (0, 0)$, as $(x, y) \\to (0, 0)$ along any path in the plane, the quantity $t = 2(x^2 + y^2)$ approaches $0^+$:\n$$L = \\lim_{t \\to 0^+} \\left(\\frac{1}{2} \\cdot \\frac{\\sin t}{t}\\right)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Apply the fundamental trigonometric limit.</strong></p>\n<p>Using the standard limit identity $\\lim_{t \\to 0} \\frac{\\sin t}{t} = 1$:\n$$L = \\frac{1}{2} \\left(\\lim_{t \\to 0^+} \\frac{\\sin t}{t}\\right) = \\frac{1}{2}(1) = \\frac{1}{2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Simplify the rational expression for $(x, y) \\ne (0, 0)$.</strong></p>\n<p>For any point $(x, y) \\ne (0, 0)$, the denominator $x^2 + y^2$ is strictly positive ($x^2 + y^2 > 0$). We can factor the numerator $x^4 - y^4$ as a difference of squares:\n$$x^4 - y^4 = (x^2 - y^2)(x^2 + y^2)$$\nCanceling the common non-zero factor $(x^2 + y^2)$ gives:\n$$f(x, y) = \\frac{(x^2 - y^2)(x^2 + y^2)}{x^2 + y^2} = x^2 - y^2 \\quad \\text{for } (x, y) \\ne (0, 0)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Evaluate the limit as $(x, y) \\to (0, 0)$.</strong></p>\n<p>Since the simplified expression $x^2 - y^2$ is a polynomial, we can evaluate the limit by direct substitution:\n$$\\lim_{(x, y) \\to (0, 0)} f(x, y) = \\lim_{(x, y) \\to (0, 0)} (x^2 - y^2) = 0^2 - 0^2 = 0$$\nThis shows that the limit exists and equals $0$ (eliminating choices A, B, and C).</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Test the definition of continuity at $(0, 0)$.</strong></p>\n<p>A function $f(x, y)$ is continuous at $(0, 0)$ if and only if $\\lim_{(x, y) \\to (0, 0)} f(x, y) = f(0, 0)$.\nHere, we are given $f(0, 0) = 1$, whereas $\\lim_{(x, y) \\to (0, 0)} f(x, y) = 0$.\nBecause $0 \\ne 1$, the limit does not equal the function value, so $f$ is <strong>not continuous at $(0, 0)$</strong>.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Define the function and identify the base point and increments.</strong></p>\n<p>To approximate the change $\\Delta f = (2.01)^2(9.02) - 2^2 \\cdot 9$, we define the two-variable function:\n$$f(x, y) = x^2 y$$\nChoose the clean integer base point $(x_0, y_0) = (2, 9)$, where $f(2, 9) = 2^2(9) = 36$. The differentials (increments) in $x$ and $y$ are:\n$$dx = \\Delta x = 2.01 - 2 = 0.01, \\qquad dy = \\Delta y = 9.02 - 9 = 0.02$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Compute the first-order partial derivatives at $(2, 9)$.</strong></p>\n<p>Differentiating $f(x, y) = x^2 y$ with respect to $x$ and $y$ gives:\n$$f_x(x, y) = 2xy \\implies f_x(2, 9) = 2(2)(9) = 36$$\n$$f_y(x, y) = x^2 \\implies f_y(2, 9) = 2^2 = 4$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Evaluate the total differential $df$ to approximate $\\Delta f$.</strong></p>\n<p>By the linear approximation formula $\\Delta f \\approx df = f_x(x_0, y_0)\\,dx + f_y(x_0, y_0)\\,dy$:\n$$df = 36(0.01) + 4(0.02) = 0.36 + 0.08 = 0.44$$\nThus, $(2.01)^2(9.02) - 2^2 \\cdot 9 \\approx 0.44$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Express the equation in standard implicit form $F(x, y, z) = 0$.</strong></p>\n<p>We are given the implicit relation $x\\ln y + y^2 z + z^2 = 8$. Subtracting $8$ from both sides defines the level surface $F(x, y, z) = 0$:\n$$F(x, y, z) = x\\ln y + y^2 z + z^2 - 8 = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Compute the partial derivatives $F_y$ and $F_z$.</strong></p>\n<p>Differentiate $F(x, y, z)$ with respect to $y$ (treating $x$ and $z$ as constants) and with respect to $z$ (treating $x$ and $y$ as constants):\n$$F_y = \\frac{\\partial}{\\partial y}\\left(x\\ln y + y^2 z + z^2 - 8\\right) = \\frac{x}{y} + 2yz = \\frac{x + 2y^2 z}{y}$$\n$$F_z = \\frac{\\partial}{\\partial z}\\left(x\\ln y + y^2 z + z^2 - 8\\right) = y^2 + 2z$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Apply the Implicit Function Theorem formula for $\\frac{\\partial z}{\\partial y}$.</strong></p>\n<p>By the Implicit Function Theorem:\n$$\\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z} = -\\frac{\\frac{x + 2y^2 z}{y}}{y^2 + 2z} = -\\frac{x + 2y^2 z}{y(y^2 + 2z)} = -\\frac{x + 2y^2 z}{y^3 + 2yz}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute the partial derivatives of the surface $z = f(x, y)$.</strong></p>\n<p>The surface is given explicitly by $z = f(x, y) = x^2 + y^2 + 3$, and the point of tangency is $P_0(x_0, y_0, z_0) = (2, 1, 8)$ (note that $2^2 + 1^2 + 3 = 8$).\nComputing the first-order partial derivatives of $f(x, y)$:\n$$f_x(x, y) = \\frac{\\partial}{\\partial x}(x^2 + y^2 + 3) = 2x$$\n$$f_y(x, y) = \\frac{\\partial}{\\partial y}(x^2 + y^2 + 3) = 2y$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Evaluate the partial derivatives at $(x_0, y_0) = (2, 1)$.</strong></p>\n<p>Substituting $x_0 = 2$ and $y_0 = 1$ gives the slopes of the tangent plane in the $x$- and $y$-directions:\n$$f_x(2, 1) = 2(2) = 4, \\qquad f_y(2, 1) = 2(1) = 2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Substitute into the tangent plane equation and simplify.</strong></p>\n<p>Using the standard tangent plane formula $z - z_0 = f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0)$:\n$$z - 8 = 4(x - 2) + 2(y - 1)$$\nExpand the right-hand side and collect all variable terms on one side:\n$$z - 8 = 4x - 8 + 2y - 2 \\implies z - 8 = 4x + 2y - 10 \\implies 4x + 2y - z = 2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Determine the domain condition for the logarithmic function.</strong></p>\n<p>We are given the function $f(x, y) = \\ln(6 - x - y)$. A natural logarithm $\\ln(u)$ is defined in the real numbers if and only if its argument is strictly positive ($u > 0$):\n$$6 - x - y > 0 \\iff x + y < 6$$\nThus, the domain of $f$ is the open half-plane lying below the boundary line $x + y = 6$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Intersect the domain with the first quadrant.</strong></p>\n<p>The first quadrant consists of all points $(x, y)$ satisfying $x \\ge 0$ and $y \\ge 0$. Combining these constraints with $x + y < 6$ defines a right triangular region bounded by:\n<ul>\n<li>The positive $x$-axis ($y = 0$),</li>\n<li>The positive $y$-axis ($x = 0$),</li>\n<li>The line $x + y = 6$, which has $x$-intercept $(6, 0)$ and $y$-intercept $(0, 6)$.</li>\n</ul></p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Compute the area of the bounded right triangle.</strong></p>\n<p>The region is a right triangle with vertices at $(0, 0)$, $(6, 0)$, and $(0, 6)$, so its base is $b = 6$ and its height is $h = 6$:\n$$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2}(6)(6) = 18$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Set up the level surface equation $f(x, y, z) = k$.</strong></p>\n<p>By definition, a level surface of a three-variable function $f(x, y, z)$ is the set of points satisfying $f(x, y, z) = k$ for a real constant $k \\in \\mathbb{R}$:\n$$\\ln(4x^2 + 4y^2 - z^2) = k$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Exponentiate both sides to rewrite in standard algebraic form.</strong></p>\n<p>Taking the base-$e$ exponential of both sides eliminates the natural logarithm:\n$$4x^2 + 4y^2 - z^2 = e^k$$\nBecause $e^k > 0$ for every real number $k$, we can let $c = e^k > 0$ and divide both sides by $c$:\n$$\\frac{4x^2}{c} + \\frac{4y^2}{c} - \\frac{z^2}{c} = 1 \\iff \\frac{x^2}{(c/4)} + \\frac{y^2}{(c/4)} - \\frac{z^2}{c} = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Classify the resulting family of quadric surfaces.</strong></p>\n<p>In standard quadric form $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} - \\frac{z^2}{c^2} = 1$ (where $a = b = \\frac{\\sqrt{c}}{2} > 0$ and $c > 0$), there are two positive squared terms and one negative squared term equal to $+1$. This represents a family of <strong>hyperboloids of one sheet</strong> centered at the origin with axis along the $z$-axis.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(E)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Identify the inner argument and its domain restriction.</strong></p>\n<p>Let $u(x, y) = 3 - 2x^2 - y^2$, so that $f(x, y) = 4\\ln(u)$. For the natural logarithm $\\ln(u)$ to be real-valued, its argument $u$ must be strictly positive:\n$$u = 3 - 2x^2 - y^2 > 0 \\iff 2x^2 + y^2 < 3$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Determine the exact set of values attained by the inner argument $u$.</strong></p>\n<p>Because squares of real numbers are always non-negative ($x^2 \\ge 0$ and $y^2 \\ge 0$), we have $2x^2 + y^2 \\ge 0$ for all $(x, y)$:\n<ul>\n<li>The maximum value of $u = 3 - (2x^2 + y^2)$ occurs at $(x, y) = (0, 0)$, giving $u_{\\max} = 3 - 0 = 3$.</li>\n<li>As $(x, y)$ approaches the boundary ellipse $2x^2 + y^2 = 3$, $u$ approaches $0^+$.</li>\n</ul>\nTherefore, $u$ takes all values in the half-open interval $(0, 3]$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Map the interval $u \\in (0, 3]$ through $4\\ln(u)$ to find the range.</strong></p>\n<p>Since $g(u) = 4\\ln(u)$ is continuous and strictly increasing on $(0, 3]$:\n$$\\lim_{u \\to 0^+} 4\\ln(u) = -\\infty \\quad \\text{and} \\quad g(3) = 4\\ln 3$$\nThus, the range of $f(x, y)$ is $(-\\infty, 4\\ln 3]$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Check direct substitution and apply radial substitution.</strong></p>\n<p>We wish to evaluate the limit:\n$$L = \\lim_{(x,y)\\to(0,0)} \\frac{e^{-x^2-y^2} - 1}{x^2 + y^2}$$\nDirect substitution of $(x, y) = (0, 0)$ yields $\\frac{e^0 - 1}{0} = \\frac{0}{0}$, an indeterminate form. Notice that the expression depends solely on the radial quantity $u = x^2 + y^2$. As $(x, y) \\to (0, 0)$ along any path, $u = x^2 + y^2 \\to 0^+$, reducing the two-variable limit to a single-variable limit:\n$$L = \\lim_{u \\to 0^+} \\frac{e^{-u} - 1}{u}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Apply L'H&ocirc;pital's Rule to the $\\frac{0}{0}$ indeterminate form.</strong></p>\n<p>Since both numerator $g(u) = e^{-u} - 1$ and denominator $h(u) = u$ are differentiable and approach $0$ as $u \\to 0^+$, we differentiate both with respect to $u$:\n$$L = \\lim_{u \\to 0^+} \\frac{\\frac{d}{du}(e^{-u} - 1)}{\\frac{d}{du}(u)} = \\lim_{u \\to 0^+} \\frac{-e^{-u}}{1}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Evaluate the resulting limit by direct substitution.</strong></p>\n<p>By continuity of the exponential function at $u = 0$:\n$$L = \\frac{-e^{-0}}{1} = -1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Inspect the weighted degrees of the numerator and denominator.</strong></p>\n<p>We examine the two-variable limit:\n$$L = \\lim_{(x,y)\\to(0,0)} \\frac{x^2 y}{x^4 + y^2}$$\nObserve that in the denominator $x^4 + y^2$, the first term has degree $4$ in $x$ while the second term has degree $2$ in $y$. They balance in order of magnitude along parabolic curves of the form $y = m x^2$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Evaluate the limit along the family of parabolic paths $y = m x^2$.</strong></p>\n<p>Substitute $y = m x^2$ (which passes through $(0, 0)$ as $x \\to 0$) into the function for $x \\ne 0$:\n$$\\lim_{x \\to 0} \\frac{x^2 (m x^2)}{x^4 + (m x^2)^2} = \\lim_{x \\to 0} \\frac{m x^4}{x^4 + m^2 x^4} = \\lim_{x \\to 0} \\frac{m x^4}{x^4(1 + m^2)} = \\frac{m}{1 + m^2}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Compare two specific paths and apply the Two-Path Test.</strong></p>\n<p><ul>\n<li><strong>Path 1 ($y = 0$, i.e., $m = 0$):</strong> The limit equals $\\frac{0}{1 + 0^2} = 0$.</li>\n<li><strong>Path 2 ($y = x^2$, i.e., $m = 1$):</strong> The limit equals $\\frac{1}{1 + 1^2} = \\frac{1}{2}$.</li>\n</ul>\nBecause approaching $(0, 0)$ along two different valid paths produces two distinct limiting values ($0 \\ne \\frac{1}{2}$), the limit <strong>does not exist</strong>.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(A)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: State the definition of continuity at $(0, 0)$.</strong></p>\n<p>We are given the piecewise function:\n$$f(x, y) = \\begin{cases} \\frac{\\sin(xy)}{xy}, & xy \\ne 0 \\\\ c, & xy = 0 \\end{cases}$$\nFor $f(x, y)$ to be continuous at the origin $(0, 0)$, the two-variable limit as $(x, y) \\to (0, 0)$ must exist and equal the function value $f(0, 0) = c$:\n$$c = \\lim_{(x, y) \\to (0, 0)} f(x, y)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Evaluate the limit along points where $xy \\ne 0$.</strong></p>\n<p>Let $u = xy$. As $(x, y) \\to (0, 0)$ through the region where $xy \\ne 0$, the product $u = xy$ approaches $0$ ($u \\to 0$). Using the fundamental trigonometric limit $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$:\n$$\\lim_{\\substack{(x, y) \\to (0, 0) \\\\ xy \\ne 0}} \\frac{\\sin(xy)}{xy} = \\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Check consistency along the coordinate axes ($xy = 0$).</strong></p>\n<p>Along the axes where $xy = 0$, the function is constantly equal to $f(x, y) = c$. Thus, for the full two-dimensional limit $\\lim_{(x, y) \\to (0, 0)} f(x, y)$ to exist and equal $f(0, 0) = c$, we must set:\n$$c = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Compute the partial derivatives of the cone volume formula.</strong></p>\n<p>The volume $V$ of a right circular cone with base radius $r$ and height $h$ is given by:\n$$V(r, h) = \\frac{1}{3}\\pi r^2 h$$\nDifferentiating $V(r, h)$ partially with respect to $r$ and $h$ yields:\n$$\\frac{\\partial V}{\\partial r} = \\frac{2}{3}\\pi r h, \\qquad \\frac{\\partial V}{\\partial h} = \\frac{1}{3}\\pi r^2$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Write the total differential $dV$ and evaluate at $r = 10, h = 25$.</strong></p>\n<p>The total differential estimates the change in volume due to small measurement errors $dr$ and $dh$:\n$$dV = \\frac{\\partial V}{\\partial r}\\,dr + \\frac{\\partial V}{\\partial h}\\,dh = \\left(\\frac{2}{3}\\pi r h\\right)dr + \\left(\\frac{1}{3}\\pi r^2\\right)dh$$\nAt the measured values $r = 10\\text{ cm}$ and $h = 25\\text{ cm}$:\n$$\\frac{\\partial V}{\\partial r}\\Bigg|_{(10, 25)} = \\frac{2}{3}\\pi(10)(25) = \\frac{500\\pi}{3}, \\qquad \\frac{\\partial V}{\\partial h}\\Bigg|_{(10, 25)} = \\frac{1}{3}\\pi(10)^2 = \\frac{100\\pi}{3}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Calculate the maximum possible error in volume.</strong></p>\n<p>Substituting the maximum measurement errors $|dr| = 0.1\\text{ cm}$ and $|dh| = 0.1\\text{ cm}$:\n$$|dV|_{\\max} = \\frac{500\\pi}{3}(0.1) + \\frac{100\\pi}{3}(0.1) = \\frac{50\\pi}{3} + \\frac{10\\pi}{3} = \\frac{60\\pi}{3} = 20\\pi\\text{ cm}^3$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: State the Multivariable Chain Rule for $W(s, t) = F(u(s, t), v(s, t))$.</strong></p>\n<p>Since $F$ is a differentiable function of $(u, v)$ and both $u$ and $v$ are differentiable functions of $(s, t)$, the first-order partial derivatives of $W$ with respect to $s$ and $t$ are given by the Chain Rule:\n$$W_s(s, t) = F_u(u(s, t), v(s, t)) \\cdot u_s(s, t) + F_v(u(s, t), v(s, t)) \\cdot v_s(s, t)$$\n$$W_t(s, t) = F_u(u(s, t), v(s, t)) \\cdot u_t(s, t) + F_v(u(s, t), v(s, t)) \\cdot v_t(s, t)$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Evaluate $W_s(1, 0)$ and $W_t(1, 0)$ using the given data.</strong></p>\n<p>At $(s, t) = (1, 0)$, the intermediate coordinates are $u(1, 0) = 2$ and $v(1, 0) = -3$. Substituting $F_u(2, -3) = 1$, $F_v(2, -3) = 3$, and the given partial derivatives at $(1, 0)$:\n$$W_s(1, 0) = F_u(2, -3)u_s(1, 0) + F_v(2, -3)v_s(1, 0) = (1)(-2) + (3)(5) = -2 + 15 = 13$$\n$$W_t(1, 0) = F_u(2, -3)u_t(1, 0) + F_v(2, -3)v_t(1, 0) = (1)(-6) + (3)(4) = -6 + 12 = 6$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Compute the required sum $W_s(1, 0) + W_t(1, 0)$.</strong></p>\n<p>Adding the two partial derivative values together:\n$$W_s(1, 0) + W_t(1, 0) = 13 + 6 = 19$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(A)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Rewrite the given equation in the implicit form $F(x, y, z) = 0$.</strong></p>\n<p>Given the equation $2yz + x\\ln y = z^2$, move all terms to the left-hand side to define the differentiable three-variable function:\n$$F(x, y, z) = 2yz + x\\ln y - z^2 = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Compute the partial derivatives $F_y$ and $F_z$.</strong></p>\n<p>By the Implicit Function Theorem, $\\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}$ wherever $F_z \\ne 0$. Differentiating $F(x, y, z)$ partially with respect to $y$ and $z$:\n$$F_y(x, y, z) = \\frac{\\partial}{\\partial y}\\left(2yz + x\\ln y - z^2\\right) = 2z + \\frac{x}{y}$$\n$$F_z(x, y, z) = \\frac{\\partial}{\\partial z}\\left(2yz + x\\ln y - z^2\\right) = 2y - 2z$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Evaluate at the point $(2, 1, 2)$ to find $\\frac{\\partial z}{\\partial y}$.</strong></p>\n<p>Substitute $(x, y, z) = (2, 1, 2)$ into $F_y$ and $F_z$:\n$$F_y(2, 1, 2) = 2(2) + \\frac{2}{1} = 4 + 2 = 6$$\n$$F_z(2, 1, 2) = 2(1) - 2(2) = 2 - 4 = -2$$\nTherefore:\n$$\\frac{\\partial z}{\\partial y}\\Bigg|_{(2, 1, 2)} = -\\frac{F_y(2, 1, 2)}{F_z(2, 1, 2)} = -\\frac{6}{-2} = 3$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(A)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Find a direction vector $\\vec{v}$ for the line passing through $P$ and $Q$.</strong></p>\n<p>Given the points $P(1, 3, 4)$ and $Q(0, 5, 7)$, the displacement vector $\\vec{PQ}$ gives a direction vector for the line:\n$$\\vec{v} = \\vec{PQ} = \\langle 0 - 1, 5 - 3, 7 - 4 \\rangle = \\langle -1, 2, 3 \\rangle$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Write the parametric equations of the line.</strong></p>\n<p>Using $P(1, 3, 4)$ as the initial point and $\\vec{v} = \\langle -1, 2, 3 \\rangle$ as the direction vector, any point $(x, y, z)$ on the line is given by:\n$$x(t) = 1 - t, \\qquad y(t) = 3 + 2t, \\qquad z(t) = 4 + 3t$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Determine the parameter $t$ corresponding to $R(2, 1, a)$ and solve for $a$.</strong></p>\n<p>Since the point $R(2, 1, a)$ lies on the line, its coordinates must satisfy the parametric equations for some real parameter $t$:\n<ul>\n<li>From the $x$-coordinate: $1 - t = 2 \\implies t = -1$.</li>\n<li>Check consistency in the $y$-coordinate: $y(-1) = 3 + 2(-1) = 1$, which matches the $y$-coordinate of $R$.</li>\n<li>Substitute $t = -1$ into the $z$-coordinate to find $a$:</li>\n</ul>\n$$a = z(-1) = 4 + 3(-1) = 4 - 3 = 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(A)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Set up the level curve equation $f(x, y) = C$.</strong></p>\n<p>By definition, the level curves of a two-variable function $f(x, y)$ are the curves in the $xy$-plane where the function takes a constant value $C$:\n$$e^{1 - x^2 + y^2} = C$$\nBecause the exponential function is strictly positive, $C$ must be a positive constant ($C > 0$).</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Take the natural logarithm of both sides to eliminate the exponential.</strong></p>\n<p>Applying the natural logarithm $\\ln(\\cdot)$ to both sides yields:\n$$1 - x^2 + y^2 = \\ln C$$\nSubtract $1$ from both sides to isolate the quadratic terms in $x$ and $y$:\n$$y^2 - x^2 = \\ln C - 1$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Classify the resulting family of conic sections in the $xy$-plane.</strong></p>\n<p>Let $k = \\ln C - 1$. For any general constant $k \\ne 0$ (i.e., $C \\ne e$), the equation:\n$$y^2 - x^2 = k$$\nhas squared terms $y^2$ and $x^2$ with opposite signs, which is the standard equation of a family of rectangular <strong>hyperbolas</strong> centered at the origin with asymptotes $y = \\pm x$.</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(C)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Understand the role of each variable when computing $f_y(x, y)$.</strong></p>\n<p>We are given the function $f(x, y) = x^y$ for $x > 0$. To compute the partial derivative $f_y(x, y) = \\frac{\\partial}{\\partial y}(x^y)$, we hold the base $x$ fixed as a positive constant and differentiate with respect to the exponent $y$. We can also rewrite $f(x, y)$ using the base-$e$ exponential identity:\n$$f(x, y) = x^y = e^{\\ln(x^y)} = e^{y\\ln x}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Differentiate with respect to $y$ holding $x$ constant.</strong></p>\n<p>Using the exponential differentiation rule $\\frac{\\partial}{\\partial y}\\left(e^{c y}\\right) = c\\,e^{c y}$ with constant $c = \\ln x$:\n$$f_y(x, y) = \\frac{\\partial}{\\partial y}\\left(e^{y\\ln x}\\right) = e^{y\\ln x} \\cdot \\frac{\\partial}{\\partial y}(y\\ln x) = x^y \\ln x$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Evaluate the partial derivative at $(x, y) = (e, 1)$.</strong></p>\n<p>Substitute $x = e$ and $y = 1$ into $f_y(x, y) = x^y \\ln x$, recalling that $\\ln(e) = 1$:\n$$f_y(e, 1) = e^1 \\cdot \\ln(e) = e \\cdot 1 = e$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(D)</strong>.</p>"
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
    "solution": "<p><strong>Step 1: Define the implicit surface equation in standard form $F(x, y, z) = 0$.</strong></p>\n<p>We are given that $z$ is defined implicitly as a differentiable function of $x$ and $y$ by the equation $x\\ln y + y^2 z - z^2 x = 10$. Subtracting $10$ from both sides defines:\n$$F(x, y, z) = x\\ln y + y^2 z - z^2 x - 10 = 0$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 2: Compute the partial derivatives $F_x$ and $F_z$.</strong></p>\n<p>Differentiate $F(x, y, z)$ partially with respect to $x$ (treating $y$ and $z$ as constants) and with respect to $z$ (treating $x$ and $y$ as constants):\n$$F_x(x, y, z) = \\frac{\\partial}{\\partial x}\\left(x\\ln y + y^2 z - z^2 x - 10\\right) = \\ln y - z^2$$\n$$F_z(x, y, z) = \\frac{\\partial}{\\partial z}\\left(x\\ln y + y^2 z - z^2 x - 10\\right) = y^2 - 2xz$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 3: Apply the Implicit Function Theorem to find $\\frac{\\partial z}{\\partial x}$.</strong></p>\n<p>Using the implicit differentiation formula $\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}$:\n$$\\frac{\\partial z}{\\partial x} = -\\frac{\\ln y - z^2}{y^2 - 2xz} = \\frac{z^2 - \\ln y}{y^2 - 2xz}$$</p>\n<div class=\"step-divider\"></div>\n<p><strong>Step 4: Match the correct choice.</strong></p>\n<p>This matches Choice <strong>(B)</strong>.</p>"
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
  ...{
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
        "solution": "<strong>Step 1 — Extract the Parametric Equations of the Line in Space:</strong><br>From the given vector equation of the line $\\mathbf{r}(t) = \\langle 1, 2, -1 \\rangle + t\\langle 2, -1, 2 \\rangle$, we express the position vector as $\\mathbf{r}(t) = \\langle x(t), y(t), z(t) \\rangle$. Equating each Cartesian component yields the parametric equations of the line for $t \\in \\mathbb{R}$:$$x(t) = 1 + 2t, \\qquad y(t) = 2 - t, \\qquad z(t) = -1 + 2t$$Here, $P_0(1, 2, -1)$ is the base point corresponding to $t = 0$, and $\\mathbf{v} = \\langle 2, -1, 2 \\rangle$ is the direction vector of the line.<div class=\"step-divider\"></div><strong>Step 2 — Substitute the Parametric Coordinates into the Plane Equation:</strong><br>A point lies on both the line and the plane $2x - y + 2z = 7$ if and only if its coordinates satisfy both equations simultaneously. Substituting $x(t)$, $y(t)$, and $z(t)$ into the linear equation of the plane gives a single linear equation in terms of the parameter $t$:$$2(1 + 2t) - (2 - t) + 2(-1 + 2t) = 7$$<div class=\"step-divider\"></div><strong>Step 3 — Solve for the Intersection Parameter $t$:</strong><br>Expanding the products and grouping the $t$-terms and constant terms separately, we obtain:$$2 + 4t - 2 + t - 2 + 4t = 7$$$$(4t + t + 4t) + (2 - 2 - 2) = 7$$$$9t - 2 = 7 \\implies 9t = 9 \\implies t = 1$$Because the coefficient of $t$ is non-zero ($\\mathbf{n} \\cdot \\mathbf{v} = 9 \\neq 0$), the line is not parallel to the plane and intersects it at a unique point corresponding to $t = 1$.<div class=\"step-divider\"></div><strong>Step 4 — Compute the Intersection Point and Verify:</strong><br>Substituting $t = 1$ back into the parametric equations from Step 1 yields the exact coordinates of the point of intersection:$$x(1) = 1 + 2(1) = 3, \\qquad y(1) = 2 - 1 = 1, \\qquad z(1) = -1 + 2(1) = 1$$Checking $(3, 1, 1)$ in the plane equation confirms $2(3) - (1) + 2(1) = 6 - 1 + 2 = 7$. Thus, the intersection point is $(3, 1, 1)$, which corresponds to Choice <strong>(A)</strong>."
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
        "solution": "<strong>Step 1 — State the Point-to-Plane Perpendicular Distance Formula:</strong><br>The shortest (perpendicular) distance $D$ from a given point $P(x_0, y_0, z_0)$ in three-dimensional space to a plane described by the general linear equation $Ax + By + Cz - d = 0$ is given by the orthogonal projection formula:$$D = \\frac{|Ax_0 + By_0 + Cz_0 - d|}{\\sqrt{A^2 + B^2 + C^2}}$$where $\\mathbf{n} = \\langle A, B, C \\rangle$ is the normal vector to the plane.<div class=\"step-divider\"></div><strong>Step 2 — Identify the Normal Vector, Plane Constant, and Point Coordinates:</strong><br>From the given plane equation $2x - 2y + z = 9$, we rewrite it in standard implicit form $2x - 2y + z - 9 = 0$ and extract the coefficients:$$A = 2, \\qquad B = -2, \\qquad C = 1, \\qquad d = 9$$The normal vector is $\\mathbf{n} = \\langle 2, -2, 1 \\rangle$, and the target point in space is $P(x_0, y_0, z_0) = (1, 2, 3)$.<div class=\"step-divider\"></div><strong>Step 3 — Evaluate the Absolute Value Numerator and Normal Vector Magnitude:</strong><br>Substituting the coordinates of $P(1, 2, 3)$ and the plane coefficients into the numerator gives:$$|Ax_0 + By_0 + Cz_0 - d| = |2(1) + (-2)(2) + 1(3) - 9| = |2 - 4 + 3 - 9| = |-8| = 8$$Next, computing the Euclidean norm $\\|\\mathbf{n}\\|$ in the denominator gives:$$\\|\\mathbf{n}\\| = \\sqrt{A^2 + B^2 + C^2} = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$$<div class=\"step-divider\"></div><strong>Step 4 — Compute the Exact Perpendicular Distance:</strong><br>Dividing the evaluated absolute value numerator by the magnitude of the normal vector yields the exact perpendicular distance from $P(1, 2, 3)$ to the plane:$$D = \\frac{8}{3}$$This simplified fraction is strictly positive and represents $\\frac{8}{3}$ units of distance, which corresponds to Choice <strong>(D)</strong>."
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
        "solution": "<strong>Step 1 — Normalize the Quadric Surface Equation into Canonical Form:</strong><br>We are given the second-degree equation in three variables $x^2 + y^2 - z^2 = 4$. Since there are no linear terms $x, y, z$, the quadric surface is centered at the origin $(0, 0, 0)$. Dividing both sides of the equation by the constant $4$ puts it into standard canonical form:$$\\frac{x^2}{4} + \\frac{y^2}{4} - \\frac{z^2}{4} = 1 \\iff \\frac{x^2}{2^2} + \\frac{y^2}{2^2} - \\frac{z^2}{2^2} = 1$$<div class=\"step-divider\"></div><strong>Step 2 — Analyze the Signs of the Quadratic Terms:</strong><br>In the canonical form $\\pm \\frac{x^2}{a^2} \\pm \\frac{y^2}{b^2} \\pm \\frac{z^2}{c^2} = 1$ with right-hand side equal to $+1$:<ul><li>Three positive terms ($+, +, +$) yield an <em>ellipsoid</em>.</li><li>Two positive terms and one negative term ($+, +, -$) yield a <em>hyperboloid of one sheet</em>.</li><li>One positive term and two negative terms ($+, -, -$) yield a <em>hyperboloid of two sheets</em>.</li></ul>Here, the coefficients of $x^2$ and $y^2$ are positive while the coefficient of $z^2$ is negative, matching the $(+, +, -)$ signature.<div class=\"step-divider\"></div><strong>Step 3 — Examine the Horizontal and Vertical Cross-Sectional Traces:</strong><br>Setting $z = k$ (horizontal planes parallel to the $xy$-plane) gives:$$x^2 + y^2 = 4 + k^2$$Since $4 + k^2 \\ge 4 > 0$ for every real number $k \\in (-\\infty, \\infty)$, horizontal cross-sections exist for all heights $z = k$ and form circles of radius $\\sqrt{4 + k^2}$ (with a minimum waist radius of $2$ at $z = 0$). Setting $x = 0$ or $y = 0$ yields the hyperbolas $y^2 - z^2 = 4$ and $x^2 - z^2 = 4$.<div class=\"step-divider\"></div><strong>Step 4 — Synthesize the Geometric Classification:</strong><br>Because horizontal circular traces exist continuously for all real values of $z$ and are connected along the $z$-axis by hyperbolic vertical profiles, the surface forms a single connected hourglass-shaped tube symmetric around the $z$-axis. Therefore, the quadric surface is a <strong>Hyperboloid of one sheet</strong>, which corresponds to Choice <strong>(E)</strong>."
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
        "solution": "<strong>Step 1 — Formulate the System Governing the Curve of Intersection:</strong><br>We seek the algebraic relation describing the intersection of the hyperbolic paraboloid (saddle surface) $z = x^2 - y^2$ and the vertical plane $y = x + 1$. Any point $(x, y, z) \\in \\mathbb{R}^3$ lying on the curve of intersection must simultaneously satisfy both equations:$$\\begin{cases} z = x^2 - y^2 \\\\ y = x + 1 \\end{cases}$$<div class=\"step-divider\"></div><strong>Step 2 — Eliminate the Variable $y$ via Direct Substitution:</strong><br>Since all answer choices express the height coordinate $z$ purely as a function of $x$, we substitute the linear expression $y = x + 1$ from the plane equation directly into the quadratic surface equation $z = x^2 - y^2$:$$z = x^2 - (x + 1)^2$$<div class=\"step-divider\"></div><strong>Step 3 — Expand the Binomial Square and Simplify Algebraically:</strong><br>Using the algebraic identity $(a + b)^2 = a^2 + 2ab + b^2$ on the term $(x + 1)^2$, we obtain $(x + 1)^2 = x^2 + 2x + 1$. Substituting this expansion and distributing the negative sign across all terms inside the parentheses yields:$$z = x^2 - (x^2 + 2x + 1) = x^2 - x^2 - 2x - 1 = -2x - 1$$<div class=\"step-divider\"></div><strong>Step 4 — Geometric Interpretation and Verification:</strong><br>The quadratic $x^2$ terms cancel completely because the plane $y = x + 1$ is parallel to one of the asymptotic ruling planes $y = x$ of the hyperbolic paraboloid $z = (x - y)(x + y)$. Consequently, the intersection curve is a straight line living in the plane $y = x + 1$ whose height satisfies $z = -2x - 1$, which corresponds to Choice <strong>(B)</strong>."
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
        "solution": "<strong>Step 1 — Identify the Algebraic Restrictions Defining the Natural Domain:</strong><br>We are given the two-variable real-valued function:$$f(x, y) = \\frac{\\sqrt{9 - x^2 - y^2}}{x - 1}$$For $f(x, y)$ to produce a well-defined real number, two independent conditions must be satisfied simultaneously: (1) the expression inside the even-indexed square root in the numerator must be non-negative, and (2) the denominator of the fraction must be non-zero.<div class=\"step-divider\"></div><strong>Step 2 — Analyze the Radical Condition in the Numerator:</strong><br>Requiring the radicand $9 - x^2 - y^2$ to be greater than or equal to zero gives:$$9 - x^2 - y^2 \\ge 0 \\iff x^2 + y^2 \\le 9$$Geometrically, $x^2 + y^2 \\le 3^2$ represents the closed disk of radius $r = 3$ centered at the origin $(0, 0)$ in the $xy$-plane, including its boundary circle $x^2 + y^2 = 9$.<div class=\"step-divider\"></div><strong>Step 3 — Analyze the Division-by-Zero Restriction in the Denominator:</strong><br>Requiring the linear denominator $x - 1$ to be non-zero gives:$$x - 1 \\neq 0 \\iff x \\neq 1$$Geometrically, this condition excludes every point lying on the vertical line $x = 1$ (which slices vertically through the closed disk of radius $3$).<div class=\"step-divider\"></div><strong>Step 4 — Combine Both Domain Constraints:</strong><br>Taking the intersection of the closed disk constraint from Step 2 and the line exclusion constraint from Step 3 yields the complete domain of $f$:$$\\operatorname{Dom}(f) = \\left\\{ (x, y) \\in \\mathbb{R}^2 \\;\\middle|\\; x^2 + y^2 \\le 9, \\quad x \\neq 1 \\right\\}$$This exact pair of inequalities matches $x^2 + y^2 \\le 9, \\; x \\neq 1$, which corresponds to Choice <strong>(E)</strong>."
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
        "solution": "<strong>Step 1 — Set Up the Level Curve Equation for $k = \\ln 3$:</strong><br>By definition, the level curve of a multivariable function $f(x, y)$ at height $k$ is the set of all points $(x, y)$ in the domain of $f$ where $f(x, y) = k$. For $f(x, y) = \\ln(4 - x^2 - y^2)$ and target level $k = \\ln 3$, we set:$$\\ln(4 - x^2 - y^2) = \\ln 3$$Note that the domain requires $4 - x^2 - y^2 > 0$, which is automatically satisfied whenever $4 - x^2 - y^2 = 3 > 0$.<div class=\"step-divider\"></div><strong>Step 2 — Eliminate the Natural Logarithm Using Injectivity:</strong><br>Because the natural logarithm function $\\ln(u)$ is strictly increasing and one-to-one on $(0, \\infty)$, we can exponentiate both sides of the equation with base $e$ to equate their arguments directly:$$e^{\\ln(4 - x^2 - y^2)} = e^{\\ln 3} \\implies 4 - x^2 - y^2 = 3$$<div class=\"step-divider\"></div><strong>Step 3 — Rearrange into Standard Geometric Form in the $xy$-Plane:</strong><br>Moving the quadratic terms $x^2 + y^2$ to one side and subtracting $3$ from $4$ gives:$$x^2 + y^2 = 4 - 3 \\implies x^2 + y^2 = 1$$Comparing this with the standard equation of a circle centered at the origin, $(x - 0)^2 + (y - 0)^2 = r^2$, we identify $r^2 = 1$.<div class=\"step-divider\"></div><strong>Step 4 — Characterize the Level Curve and Verify:</strong><br>Taking the positive square root of $r^2 = 1$ gives radius $r = \\sqrt{1} = 1$. Every point $(x, y)$ on this circle satisfies $x^2 + y^2 = 1$, which upon substitution into $f(x, y)$ yields $\\ln(4 - 1) = \\ln 3$. Therefore, the level curve is <strong>a circle of radius $1$</strong>, which corresponds to Choice <strong>(D)</strong>."
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
        "solution": "<strong>Step 1 — Check the Indeterminate Form and Transform to Polar Coordinates:</strong><br>Direct substitution of $(x, y) = (0, 0)$ into $\\dfrac{x^2 y}{x^2 + y^2}$ yields the indeterminate form $\\dfrac{0}{0}$. Because the denominator is the radial sum of squares $x^2 + y^2$, we convert to polar coordinates by setting:$$x = r\\cos\\theta, \\qquad y = r\\sin\\theta, \\qquad x^2 + y^2 = r^2$$where $r = \\sqrt{x^2 + y^2} > 0$ measures the Euclidean distance to the origin. As $(x, y) \\to (0, 0)$ along any path, $r \\to 0^+$ while $\\theta$ may vary arbitrarily.<div class=\"step-divider\"></div><strong>Step 2 — Simplify the Rational Expression in Terms of $r$ and $\\theta$:</strong><br>Substituting the polar expressions for $x$ and $y$ into the quotient gives:$$\\frac{x^2 y}{x^2 + y^2} = \\frac{(r\\cos\\theta)^2 (r\\sin\\theta)}{r^2} = \\frac{r^3 \\cos^2\\theta \\sin\\theta}{r^2}$$Since $r > 0$ for all $(x, y) \\neq (0, 0)$, we cancel the common factor $r^2$ between numerator and denominator:$$\\frac{x^2 y}{x^2 + y^2} = r\\cos^2\\theta \\sin\\theta$$<div class=\"step-divider\"></div><strong>Step 3 — Establish Uniform Bounds Using Trigonometric Inequalities:</strong><br>For all real angles $\\theta \\in \\mathbb{R}$, the sine and cosine functions satisfy $|\\cos\\theta| \\le 1$ and $|\\sin\\theta| \\le 1$, so their product satisfies $|\\cos^2\\theta \\sin\\theta| \\le 1$. Taking the absolute value of our simplified expression gives:$$0 \\le \\left| \\frac{x^2 y}{x^2 + y^2} \\right| = r |\\cos^2\\theta \\sin\\theta| \\le r$$Equivalently, in Cartesian coordinates, since $0 \\le \\frac{x^2}{x^2 + y^2} \\le 1$, we have $0 \\le \\left|\\frac{x^2 y}{x^2 + y^2}\\right| \\le |y|$.<div class=\"step-divider\"></div><strong>Step 4 — Apply the Squeeze Theorem to Evaluate the Limit:</strong><br>Because the upper bounding function $r = \\sqrt{x^2 + y^2}$ depends only on the radial distance and satisfies $\\lim_{r \\to 0^+} r = 0$ independently of the angle $\\theta$, the Squeeze Theorem guarantees that:$$\\lim_{(x, y) \\to (0, 0)} \\left| \\frac{x^2 y}{x^2 + y^2} \\right| = 0 \\implies \\lim_{(x, y) \\to (0, 0)} \\frac{x^2 y}{x^2 + y^2} = 0$$Thus, the limit exists and equals $0$, which corresponds to Choice <strong>(D)</strong>."
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
        "solution": "<strong>Step 1 — Analyze the Degree Balance of the Rational Function Near $(0, 0)$:</strong><br>We wish to evaluate the multivariable limit:$$\\lim_{(x, y) \\to (0, 0)} \\frac{x^2 y}{x^4 + y^2}$$Direct substitution gives the indeterminate form $\\frac{0}{0}$. Observe that in the denominator $x^4 + y^2$, the first term has degree $4$ in $x$ while the second term has degree $2$ in $y$. These two terms have equal weight when $y$ scales quadratically with $x$, i.e., along parabolic paths of the form $y = kx^2$.<div class=\"step-divider\"></div><strong>Step 2 — Evaluate the Limit Along the Family of Parabolic Paths $y = kx^2$:</strong><br>Every parabola $y = kx^2$ (for any real constant $k \\in \\mathbb{R}$) passes directly through the origin $(0, 0)$ as $x \\to 0$. Restricting the function to the path $y = kx^2$ with $x \\neq 0$ yields:$$\\lim_{\\substack{(x, y) \\to (0, 0) \\\\ y = kx^2}} \\frac{x^2 y}{x^4 + y^2} = \\lim_{x \\to 0} \\frac{x^2 (kx^2)}{x^4 + (kx^2)^2} = \\lim_{x \\to 0} \\frac{kx^4}{x^4 + k^2 x^4}$$<div class=\"step-divider\"></div><strong>Step 3 — Factor Out $x^4$ and Compare Distinct Path Values:</strong><br>Factoring $x^4$ from the denominator and canceling it with the $x^4$ in the numerator (valid since $x \\neq 0$ as $x \\to 0$) gives a constant value that depends explicitly on the path parameter $k$:$$\\lim_{x \\to 0} \\frac{kx^4}{x^4(1 + k^2)} = \\frac{k}{1 + k^2}$$Specifically, choosing two distinct parabolic paths through the origin:<ul><li>Along Path 1 ($y = x^2$, where $k = 1$): the limit is $\\dfrac{1}{1 + 1^2} = \\dfrac{1}{2}$.</li><li>Along Path 2 ($y = -x^2$, where $k = -1$): the limit is $\\dfrac{-1}{1 + (-1)^2} = -\\dfrac{1}{2}$ (and along $y = 0$, the limit is $0$).</li></ul><div class=\"step-divider\"></div><strong>Step 4 — Conclude via the Two-Path Test for Non-Existence of Limits:</strong><br>For a multivariable limit $\\lim_{(x, y) \\to (0, 0)} f(x, y)$ to exist, the function must approach the exact same real number $L$ along every possible curve approaching $(0, 0)$. Since approaching $(0, 0)$ along $y = x^2$ gives $\\frac{1}{2}$ whereas approaching along $y = -x^2$ gives $-\\frac{1}{2} \\neq \\frac{1}{2}$, the limit <strong>Does not exist</strong>, which corresponds to Choice <strong>(A)</strong>."
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
        "solution": "<strong>Step 1 — Recall Notation and Clairaut's Theorem for Mixed Partial Derivatives:</strong><br>For a smooth function $f(x, y) = x^2 e^{xy}$, the subscript notation $f_{xy}$ denotes $\\frac{\\partial}{\\partial y}\\left(\\frac{\\partial f}{\\partial x}\\right)$, which by Clairaut's Theorem is identical to $f_{yx} = \\frac{\\partial}{\\partial x}\\left(\\frac{\\partial f}{\\partial y}\\right)$ everywhere on $\\mathbb{R}^2$ because $f$ is a product of polynomial and exponential functions with continuous partial derivatives of all orders.<div class=\"step-divider\"></div><strong>Step 2 — Compute the First-Order Partial Derivative $f_x(x, y)$:</strong><br>Differentiating $f(x, y) = x^2 e^{xy}$ with respect to $x$ while holding $y$ constant requires the Product Rule $\\frac{\\partial}{\\partial x}[u \\cdot v] = u_x v + u v_x$ with $u = x^2$ and $v = e^{xy}$:$$f_x(x, y) = \\frac{\\partial}{\\partial x}\\left(x^2\\right) \\cdot e^{xy} + x^2 \\cdot \\frac{\\partial}{\\partial x}\\left(e^{xy}\\right) = 2x e^{xy} + x^2 (y e^{xy}) = (2x + x^2 y)e^{xy}$$<div class=\"step-divider\"></div><strong>Step 3 — Differentiate with Respect to $y$ to Obtain $f_{xy}(x, y)$:</strong><br>Now we differentiate $f_x(x, y) = 2x e^{xy} + x^2 y e^{xy}$ partially with respect to $y$, holding $x$ constant:$$f_{xy}(x, y) = \\frac{\\partial}{\\partial y}\\left(2x e^{xy}\\right) + \\frac{\\partial}{\\partial y}\\left(x^2 y e^{xy}\\right)$$$$f_{xy}(x, y) = 2x(x e^{xy}) + x^2 \\left(1 \\cdot e^{xy} + y \\cdot x e^{xy}\\right) = 2x^2 e^{xy} + x^2 e^{xy} + x^3 y e^{xy} = (3x^2 + x^3 y)e^{xy}$$(Equivalently, computing $f_y = x^3 e^{xy}$ first and differentiating with respect to $x$ yields $(3x^2 + x^3 y)e^{xy}$ in one step.)<div class=\"step-divider\"></div><strong>Step 4 — Evaluate the Mixed Partial Derivative at $(1, 0)$:</strong><br>Substituting $x = 1$ and $y = 0$ into our symbolic expression $f_{xy}(x, y) = (3x^2 + x^3 y)e^{xy}$ gives:$$f_{xy}(1, 0) = \\left(3(1)^2 + (1)^3(0)\\right) e^{1 \\cdot 0} = (3 + 0) \\cdot e^0 = 3 \\cdot 1 = 3$$Therefore, $f_{xy}(1, 0) = 3$, which corresponds to Choice <strong>(D)</strong>."
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
        "solution": "<strong>Step 1 — Compute the First-Order Partial Derivative $f_x(x, y)$:</strong><br>We are given the polynomial function $f(x, y) = x^3 y^2 - 2x y^3$ and asked to evaluate the third-order mixed partial derivative $f_{xxy}(1, 2) = \\frac{\\partial^3 f}{\\partial y \\, \\partial x^2}(1, 2)$. First, we differentiate $f(x, y)$ with respect to $x$ while treating $y$ as a constant:$$f_x(x, y) = \\frac{\\partial}{\\partial x}\\left(x^3 y^2 - 2x y^3\\right) = 3x^2 y^2 - 2y^3$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the Second-Order Partial Derivative $f_{xx}(x, y)$:</strong><br>Next, we differentiate $f_x(x, y) = 3x^2 y^2 - 2y^3$ a second time with respect to $x$, again holding $y$ constant. Note that the term $-2y^3$ contains no $x$ factor, so its partial derivative with respect to $x$ vanishes:$$f_{xx}(x, y) = \\frac{\\partial}{\\partial x}\\left(3x^2 y^2 - 2y^3\\right) = 6x y^2 - 0 = 6xy^2$$<div class=\"step-divider\"></div><strong>Step 3 — Compute the Third-Order Mixed Partial Derivative $f_{xxy}(x, y)$:</strong><br>Now we differentiate $f_{xx}(x, y) = 6xy^2$ partially with respect to $y$, holding $x$ constant:$$f_{xxy}(x, y) = \\frac{\\partial}{\\partial y}\\left(6xy^2\\right) = 6x \\cdot \\frac{d}{dy}\\left(y^2\\right) = 6x(2y) = 12xy$$<div class=\"step-divider\"></div><strong>Step 4 — Evaluate at the Point $(x, y) = (1, 2)$:</strong><br>Substituting the given coordinates $x = 1$ and $y = 2$ into the simplified third-order partial derivative $f_{xxy}(x, y) = 12xy$ yields:$$f_{xxy}(1, 2) = 12(1)(2) = 24$$Thus, the third-order partial derivative at $(1, 2)$ equals $24$, which corresponds to Choice <strong>(A)</strong>."
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
        "solution": "<strong>Step 1 — Evaluate the Function at the Base Point $(x_0, y_0) = (3, 0)$:</strong><br>To construct the local linear approximation $L(x, y)$ of the upper hemisphere function $z(x, y) = \\sqrt{25 - x^2 - y^2}$ near the base point $(x_0, y_0) = (3, 0)$, we first evaluate the exact height $z(3, 0)$:$$z(3, 0) = \\sqrt{25 - 3^2 - 0^2} = \\sqrt{25 - 9 - 0} = \\sqrt{16} = 4$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the First-Order Partial Derivatives at $(3, 0)$:</strong><br>Applying the Chain Rule to $z(x, y) = (25 - x^2 - y^2)^{1/2}$, we find the first-order partial derivatives $z_x$ and $z_y$:$$z_x(x, y) = \\frac{-2x}{2\\sqrt{25 - x^2 - y^2}} = \\frac{-x}{\\sqrt{25 - x^2 - y^2}}, \\qquad z_y(x, y) = \\frac{-2y}{2\\sqrt{25 - x^2 - y^2}} = \\frac{-y}{\\sqrt{25 - x^2 - y^2}}$$Evaluating both partial derivatives at the base point $(3, 0)$ gives:$$z_x(3, 0) = \\frac{-3}{\\sqrt{16}} = -\\frac{3}{4} = -0.75, \\qquad z_y(3, 0) = \\frac{-0}{\\sqrt{16}} = 0$$<div class=\"step-divider\"></div><strong>Step 3 — Formulate the Local Linearization Function $L(x, y)$:</strong><br>The standard linearization (tangent plane approximation) of $z(x, y)$ at $(x_0, y_0) = (3, 0)$ is given by:$$L(x, y) = z(3, 0) + z_x(3, 0)(x - 3) + z_y(3, 0)(y - 0)$$Substituting the values from Steps 1 and 2 yields:$$L(x, y) = 4 - 0.75(x - 3) + 0(y - 0) = 4 - 0.75(x - 3)$$<div class=\"step-divider\"></div><strong>Step 4 — Approximate $z(3.1, 0.2)$ Using the Linearization:</strong><br>Substituting the target point $(x, y) = (3.1, 0.2)$ where $\\Delta x = 3.1 - 3 = 0.1$ and $\\Delta y = 0.2 - 0 = 0.2$ into $L(x, y)$ gives:$$z(3.1, 0.2) \\approx L(3.1, 0.2) = 4 - 0.75(3.1 - 3) + 0(0.2) = 4 - 0.75(0.1) = 4 - 0.075 = 3.925$$Thus, the local linear approximation predicts $z(3.1, 0.2) \\approx 3.925$, which corresponds to Choice <strong>(D)</strong>."
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
        "solution": "<strong>Step 1 — Express the Box Volume and Its Total Differential $dV$:</strong><br>Let $x$, $y$, and $z$ denote the lengths of the three mutually perpendicular edges of the rectangular box, with initial dimensions $x = 2\\text{ cm}$, $y = 3\\text{ cm}$, and $z = 4\\text{ cm}$. The volume of the box is the product $V(x, y, z) = xyz$. By the multivariable differential formula, the total differential $dV$ is:$$dV = \\frac{\\partial V}{\\partial x}\\,dx + \\frac{\\partial V}{\\partial y}\\,dy + \\frac{\\partial V}{\\partial z}\\,dz = yz\\,dx + xz\\,dy + xy\\,dz$$<div class=\"step-divider\"></div><strong>Step 2 — Convert to the Relative Change Formula $\\dfrac{dV}{V}$:</strong><br>To find the approximate percentage change in volume, we divide both sides of the total differential equation by the initial volume $V = xyz$:$$\\frac{dV}{V} = \\frac{yz\\,dx + xz\\,dy + xy\\,dz}{xyz} = \\frac{yz\\,dx}{xyz} + \\frac{xz\\,dy}{xyz} + \\frac{xy\\,dz}{xyz} = \\frac{dx}{x} + \\frac{dy}{y} + \\frac{dz}{z}$$This logarithmic differential identity shows that the relative change in the product of three variables equals the sum of the relative changes of the individual variables.<div class=\"step-divider\"></div><strong>Step 3 — Substitute the Given Relative Increases for Each Side:</strong><br>We are told that each of the three sides increases by $1\\%$, which means the relative differentials are:$$\\frac{dx}{x} = 0.01 = 1\\%, \\qquad \\frac{dy}{y} = 0.01 = 1\\%, \\qquad \\frac{dz}{z} = 0.01 = 1\\%$$(Specifically, $dx = 0.02\\text{ cm}$, $dy = 0.03\\text{ cm}$, and $dz = 0.04\\text{ cm}$ at $V_0 = 2 \\times 3 \\times 4 = 24\\text{ cm}^3$.)<div class=\"step-divider\"></div><strong>Step 4 — Compute the Approximate Percentage Increase in Volume:</strong><br>Summing the three relative percentage changes yields:$$\\frac{dV}{V} = 1\\% + 1\\% + 1\\% = 3\\%$$(Checking in absolute units: $dV = (12)(0.02) + (8)(0.03) + (6)(0.04) = 0.24 + 0.24 + 0.24 = 0.72\\text{ cm}^3$, and $\\frac{dV}{V_0} = \\frac{0.72}{24} = 0.03 = 3\\%$.) Thus, the volume increases by approximately $3\\%$, which corresponds to Choice <strong>(D)</strong>."
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
        "solution": "<strong>Step 1 — State the Multivariable Chain Rule for $\\dfrac{\\partial z}{\\partial t}$:</strong><br>Since $z = x^2 y + e^{xy}$ is a differentiable function of the intermediate variables $x$ and $y$, which in turn are differentiable functions of the independent parameters $s$ and $t$ via $x = s + t$ and $y = s - t$, the Chain Rule gives:$$\\frac{\\partial z}{\\partial t} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial t} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial t}$$<div class=\"step-divider\"></div><strong>Step 2 — Determine the Values of $(x, y)$ at the Parameter Point $(s, t) = (1, 0)$:</strong><br>Substituting $s = 1$ and $t = 0$ into the coordinate transformation equations $x(s, t) = s + t$ and $y(s, t) = s - t$ yields the corresponding point $(x, y)$:$$x(1, 0) = 1 + 0 = 1, \\qquad y(1, 0) = 1 - 0 = 1$$We also compute the partial derivatives of $x$ and $y$ with respect to $t$:$$\\frac{\\partial x}{\\partial t} = \\frac{\\partial}{\\partial t}(s + t) = 1, \\qquad \\frac{\\partial y}{\\partial t} = \\frac{\\partial}{\\partial t}(s - t) = -1$$<div class=\"step-divider\"></div><strong>Step 3 — Compute and Evaluate $\\dfrac{\\partial z}{\\partial x}$ and $\\dfrac{\\partial z}{\\partial y}$ at $(x, y) = (1, 1)$:</strong><br>Differentiating $z = x^2 y + e^{xy}$ partially with respect to $x$ and $y$ gives:$$\\frac{\\partial z}{\\partial x} = 2xy + y e^{xy}, \\qquad \\frac{\\partial z}{\\partial y} = x^2 + x e^{xy}$$Evaluating both partial derivatives at $(x, y) = (1, 1)$ gives:$$\\left.\\frac{\\partial z}{\\partial x}\\right|_{(1, 1)} = 2(1)(1) + (1)e^{1 \\cdot 1} = 2 + e, \\qquad \\left.\\frac{\\partial z}{\\partial y}\\right|_{(1, 1)} = (1)^2 + (1)e^{1 \\cdot 1} = 1 + e$$<div class=\"step-divider\"></div><strong>Step 4 — Substitute All Components into the Chain Rule Formula:</strong><br>Combining the evaluated derivatives from Steps 2 and 3 into the Chain Rule expression from Step 1 gives:$$\\left.\\frac{\\partial z}{\\partial t}\\right|_{(s, t) = (1, 0)} = (2 + e)(1) + (1 + e)(-1) = 2 + e - 1 - e = 1$$The transcendental $e$ terms cancel exactly, leaving $\\dfrac{\\partial z}{\\partial t} = 1$, which corresponds to Choice <strong>(A)</strong>."
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
        "solution": "<strong>Step 1 — Formulate the Implicit Function $F(x, y, z) = 0$ and Implicit Derivative Formula:</strong><br>We move the constant $8$ to the left-hand side of the given equation $x^2 + y^2 + z^2 + xyz = 8$ to define the level surface $F(x, y, z) = 0$, where:$$F(x, y, z) = x^2 + y^2 + z^2 + xyz - 8$$By the Implicit Function Theorem, anywhere $F_z \\neq 0$, the partial derivative of $z$ with respect to $x$ is given by:$$z_x = \\frac{\\partial z}{\\partial x} = -\\frac{F_x(x, y, z)}{F_z(x, y, z)}$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the Partial Derivatives $F_x$ and $F_z$:</strong><br>Differentiating $F(x, y, z) = x^2 + y^2 + z^2 + xyz - 8$ with respect to $x$ while holding $y$ and $z$ constant yields:$$F_x(x, y, z) = \\frac{\\partial}{\\partial x}\\left(x^2 + y^2 + z^2 + xyz - 8\\right) = 2x + yz$$Differentiating $F(x, y, z)$ with respect to $z$ while holding $x$ and $y$ constant yields:$$F_z(x, y, z) = \\frac{\\partial}{\\partial z}\\left(x^2 + y^2 + z^2 + xyz - 8\\right) = 2z + xy$$<div class=\"step-divider\"></div><strong>Step 3 — Evaluate $F_x$ and $F_z$ at the Given Point $(1, 1, 2)$:</strong><br>First, observe that $(1, 1, 2)$ lies on the surface since $1^2 + 1^2 + 2^2 + (1)(1)(2) = 1 + 1 + 4 + 2 = 8$. Substituting $(x, y, z) = (1, 1, 2)$ into $F_x$ and $F_z$ gives:$$F_x(1, 1, 2) = 2(1) + (1)(2) = 2 + 2 = 4$$$$F_z(1, 1, 2) = 2(2) + (1)(1) = 4 + 1 = 5 \\neq 0$$<div class=\"step-divider\"></div><strong>Step 4 — Calculate the Implicit Partial Derivative $z_x(1, 1)$:</strong><br>Substituting the evaluated values $F_x(1, 1, 2) = 4$ and $F_z(1, 1, 2) = 5$ into the implicit differentiation formula from Step 1 gives:$$z_x(1, 1) = -\\frac{F_x(1, 1, 2)}{F_z(1, 1, 2)} = -\\frac{4}{5}$$Thus, $z_x(1, 1) = -\\dfrac{4}{5}$, which corresponds to Choice <strong>(D)</strong>."
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
        "solution": "<strong>Step 1 — State the Theorem for the Maximum Directional Derivative:</strong><br>For a differentiable multivariable function $f(x, y)$, the directional derivative in the direction of a unit vector $\\mathbf{u}$ is given by $D_{\\mathbf{u}} f(x, y) = \\nabla f(x, y) \\cdot \\mathbf{u} = \\|\\nabla f(x, y)\\| \\cos\\theta$. Because $\\cos\\theta$ attains its maximum value of $+1$ when $\\theta = 0$ (i.e., when $\\mathbf{u}$ points in the exact direction of the gradient $\\nabla f$), the maximum directional derivative at any point $P$ equals the magnitude of the gradient vector:$$\\max_{\\|\\mathbf{u}\\|=1} D_{\\mathbf{u}} f(P) = \\|\\nabla f(P)\\|$$<div class=\"step-divider\"></div><strong>Step 2 — Compute the First-Order Partial Derivatives and Gradient Vector $\\nabla f(x, y)$:</strong><br>Given the quadratic surface $f(x, y) = x^2 + 2xy + 3y^2$, we differentiate partially with respect to $x$ and $y$:$$f_x(x, y) = \\frac{\\partial}{\\partial x}\\left(x^2 + 2xy + 3y^2\\right) = 2x + 2y$$$$f_y(x, y) = \\frac{\\partial}{\\partial y}\\left(x^2 + 2xy + 3y^2\\right) = 2x + 6y$$Thus, the gradient vector is $\\nabla f(x, y) = \\langle 2x + 2y, \\; 2x + 6y \\rangle$.<div class=\"step-divider\"></div><strong>Step 3 — Evaluate the Gradient Vector at the Point $(1, -1)$:</strong><br>Substituting $x = 1$ and $y = -1$ into the components of $\\nabla f(x, y)$ gives:$$f_x(1, -1) = 2(1) + 2(-1) = 2 - 2 = 0$$$$f_y(1, -1) = 2(1) + 6(-1) = 2 - 6 = -4$$Hence, the gradient vector at $(1, -1)$ is $\\nabla f(1, -1) = \\langle 0, -4 \\rangle$.<div class=\"step-divider\"></div><strong>Step 4 — Compute the Magnitude of the Gradient Vector:</strong><br>Taking the Euclidean norm of $\\nabla f(1, -1) = \\langle 0, -4 \\rangle$ yields the maximum directional derivative at $(1, -1)$:$$\\|\\nabla f(1, -1)\\| = \\sqrt{0^2 + (-4)^2} = \\sqrt{0 + 16} = \\sqrt{16} = 4$$Thus, the maximum directional derivative at $(1, -1)$ is $4$, which corresponds to Choice <strong>(B)</strong>."
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
        "solution": "<strong>Step 1 — Recall the Geometric Orthogonality Property of the Gradient Vector:</strong><br>For a differentiable function $f(x, y)$ and a point $P(x_0, y_0)$ on the level curve $f(x, y) = c$ where $\\nabla f(P) \\neq \\mathbf{0}$, the gradient vector $\\nabla f(P) = \\langle f_x(P), f_y(P) \\rangle$ is orthogonal (normal) to the tangent line of the level curve $f(x, y) = c$ at $P$ and points in the direction of steepest ascent (toward increasing values of $f$).<div class=\"step-divider\"></div><strong>Step 2 — Compute the Gradient Vector $\\nabla f(x, y)$:</strong><br>Given $f(x, y) = x^2 + xy + y^2$ and the level curve $x^2 + xy + y^2 = 7$, we differentiate $f(x, y)$ partially with respect to $x$ and $y$:$$f_x(x, y) = \\frac{\\partial}{\\partial x}\\left(x^2 + xy + y^2\\right) = 2x + y$$$$f_y(x, y) = \\frac{\\partial}{\\partial y}\\left(x^2 + xy + y^2\\right) = x + 2y$$Therefore, $\\nabla f(x, y) = \\langle 2x + y, \\; x + 2y \\rangle$.<div class=\"step-divider\"></div><strong>Step 3 — Evaluate the Gradient Vector at $P = (1, 2)$:</strong><br>First, verify that $P(1, 2)$ lies on the level curve: $1^2 + (1)(2) + 2^2 = 1 + 2 + 4 = 7$. Substituting $x = 1$ and $y = 2$ into $\\nabla f(x, y)$ yields the normal vector pointing toward increasing values of $f$:$$f_x(1, 2) = 2(1) + 2 = 4, \\qquad f_y(1, 2) = 1 + 2(2) = 5 \\implies \\nabla f(1, 2) = \\langle 4, 5 \\rangle$$<div class=\"step-divider\"></div><strong>Step 4 — Normalize $\\nabla f(1, 2)$ to Obtain the Required Unit Normal Vector:</strong><br>Computing the magnitude of $\\nabla f(1, 2) = \\langle 4, 5 \\rangle$ gives:$$\\|\\nabla f(1, 2)\\| = \\sqrt{4^2 + 5^2} = \\sqrt{16 + 25} = \\sqrt{41}$$Dividing $\\nabla f(1, 2)$ by its magnitude produces the unit normal vector pointing toward increasing values of $f$:$$\\mathbf{u} = \\frac{\\nabla f(1, 2)}{\\|\\nabla f(1, 2)\\|} = \\frac{\\langle 4, 5 \\rangle}{\\sqrt{41}}$$This exact vector expression matches $\\dfrac{\\langle 4, 5 \\rangle}{\\sqrt{41}}$, which corresponds to Choice <strong>(E)</strong>."
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
  }
},
  all_questions: window.MATH201_BANK,
  section_distribution: {"11.5":37,"11.6":18,"13.1":25,"13.2":25,"13.3":23,"13.4":15,"13.5":28,"13.6":16,"13.7":14}
};
