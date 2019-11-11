import * as React from 'react';

import styles from './footer.module.css';

const GitHubIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <path d="M7.9995089,0 C3.58207489,0 0,3.6723364 0,8.20321298 C0,11.8267058 2.29195826,14.9008335 5.47133211,15.9859679 C5.87157766,16.0609957 6.01743401,15.8077138 6.01743401,15.5901834 C6.01743401,15.3958159 6.01055862,14.8796847 6.00662983,14.1953703 C3.78146102,14.6908562 3.31197053,13.0956332 3.31197053,13.0956332 C2.9480663,12.1479659 2.42357274,11.8961946 2.42357274,11.8961946 C1.69723757,11.387113 2.47857581,11.3971839 2.47857581,11.3971839 C3.28152241,11.4555948 3.7038674,12.242632 3.7038674,12.242632 C4.41743401,13.4959496 5.57593616,13.1339024 6.03216697,12.9244287 C6.1048496,12.3941983 6.31111111,12.0326547 6.53996317,11.8277128 C4.76365869,11.6207568 2.89600982,10.9168042 2.89600982,7.77369112 C2.89600982,6.87839233 3.20785758,6.14624134 3.71958257,5.57270629 C3.63707796,5.36524672 3.36255371,4.53138013 3.79766728,3.40193401 C3.79766728,3.40193401 4.46949048,3.18138234 5.99779006,4.2428502 C6.63572744,4.06056777 7.32031921,3.96993009 8.0004911,3.9664053 C8.67968079,3.96993009 9.36427256,4.06056777 10.0031921,4.2428502 C11.5305095,3.18138234 12.2008594,3.40193401 12.2008594,3.40193401 C12.6374463,4.53138013 12.362922,5.36524672 12.2804174,5.57270629 C12.7931246,6.14624134 13.103008,6.87839233 13.103008,7.77369112 C13.103008,10.9248609 11.2324125,11.6182391 9.45021486,11.8211668 C9.73750767,12.0744487 9.99337017,12.5749701 9.99337017,13.3403549 C9.99337017,14.4365672 9.98354819,15.3212916 9.98354819,15.5901834 C9.98354819,15.809728 10.1274401,16.0650241 10.5335789,15.9849608 C13.709515,14.8978123 16,11.8256987 16,8.20321298 C16,3.6723364 12.4179251,0 7.9995089,0" />
  </svg>
);

export function MainFooter(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div>
        strichliste-web (MIT License, by{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/schinken"
        >
          schinken
        </a>{' '}
        and{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/sanderdrummer"
        >
          sanderdrummer
        </a>
        )
      </div>
      <div>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/strichliste"
        >
          {GitHubIcon} Code
        </a>
      </div>
    </footer>
  );
}