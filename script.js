/* Made by Yago Estévez (Twitter: @yagoestevez.com) */

*,
*::before,
*::after,
:root {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@import 'https://fonts.googleapis.com/css?family=Overlock:400,400i,700|Oleo+Script';

html, body {
  height: 100%;
}

body {
  color: #252934;
  background: #fafafa;
  font-size: 62.5%;
  font-family: 'Overlock', Arial, Helvetica, sans-serif;
  overflow-x: hidden;
}

a,
a:visited {
  color: #252934;
  font-size: 1.4rem;
  text-decoration: none;
  transition: 200ms;
}

a:hover,
a:active {
  color: #f300b4;
}

/* ... (Styles for Menu, Nav, and Header remain the same) ... */

/*****************
 *****************
   ABOUT STYLES
 *****************
 *****************/

#about {
  height: auto;
  min-height: 100vh;
  font-size: 1.4rem;
  position: relative;
  background: #fafafa;
  -webkit-clip-path: polygon(0 0, 20% 5%, 100% 0, 100% 100%, 80% 95%, 0 100%);
  clip-path: polygon(0 0, 20% 5%, 100% 0, 100% 100%, 80% 95%, 0 100%);
  z-index: 5;
  background: #fafafa url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Author_BG.jpg) center right no-repeat;
  background-attachment: fixed;
}

#about .wrapper {
  padding: 15rem 10rem 12rem;
  height: auto;
  min-height: auto;
  max-width: 1400px;
  margin: 0 auto;
}

#about article {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  padding: 3rem 0;
}

/* ... (Styles for about section remain the same) ... */

/*****************
 *****************
  PROJECTS STYLES
 *****************
 *****************/

/* ... (No changes to Projects styles) ... */

/*****************
 *****************
   CONTACT STYLES
 *****************
 *****************/

#contact {
  background: #181d23 url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/envelope.svg?sanitize=true) no-repeat right;
  -webkit-clip-path: polygon(0 0, 20% 100px, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 20% 100px, 100% 0, 100% 100%, 0 100%);
  color: #fafafa;
  min-height: 100vh;
  width: 100%;
  padding: 5rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: -100px 0 50px;
  z-index: 1;
}

#contact .container {
  width: 70%;
  max-width: 1200px;
  padding: 25vh 0;
}

/* ... (Styles for contact section remain the same) ... */

/*****************
 *****************
   FOOTER STYLES
 *****************
 *****************/

footer {
  font-size: 1rem;
  display: flex;
  justify-content: center;
  position: relative;
  bottom: auto;
  left: 0;
  width: 100%;
  height: auto;
  background: #fafafa;
  z-index: 0;
}

footer .wrapper {
  display: flex;
  width: 100%;
  padding: 2rem;
  max-width: 1400px;
  align-items: center;
  justify-content: space-between;
}

@media only screen and (max-width: 649px) {
  footer .wrapper {
    flex-direction: column;
  }

  footer .wrapper h3 {
    padding-bottom: .8rem;
  }
}
