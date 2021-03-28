# Fieldlines

------------

## Inspirasjon

[Josh Comeau si nettside](https://www.joshwcomeau.com/) har eit rutenett med linjer som rettar seg etter musepeikaren, som magnetfeltlinjer. Prosjektet er ei nokonlunde gjenskaping.

## Matematisk grunnlag

### Magnetisme

Det fyrste som slo meg å gjere, var å bruke formelen for magnetisk kraft mellom to objekt; ![magnetisk kraft]
Samtidig vart dette problematisk fordi ![r -> 0 F -> infty].
_Det var klart at noko måtte gjerast_

### Logistisk vekst

Dermed fekk eg ein idé! ![F_vec] må auke når ![r_vec] vert mindre, samtidig som han konvergerer mot ei øvre grense.
Så merkeleg bruksområde dette er for logistisk vekst, møter denne funksjonstypen krava.
[Wikipedia om logistisk funksjon (engelsk)](https://en.wikipedia.org/wiki/Logistic_function):
![logistisk]


[magnetisk kraft]: https://latex.codecogs.com/svg.latex?\vec{F}=\frac{kQq}{\vec{r}^2}
[r -> 0 F -> infty]: https://latex.codecogs.com/svg.latex?\lim_{r\to0}{\vec{F}}=\infty
[F_vec]: https://latex.codecogs.com/svg.latex?\vec{F}
[r_vec]: https://latex.codecogs.com/svg.latex?\vec{r}
[logistisk]: https://latex.codecogs.com/svg.latex?f(x)=\frac{L}{1+e^{-k(x-x_0)}}
