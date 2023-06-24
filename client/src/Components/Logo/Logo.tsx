import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { colMaps } from '@/Utils/colormap';

export const Logo = () => {
  const [stops, setStops] = useState([]);

  function updateLogoCurve() {
    // starting point of curve wrt SVG canvas
    const x0 = 29.7;
    const y0 = 92.5;
    let sinCurve = document.getElementById('logo-sin-curve');
    let cosCurve = document.getElementById('logo-cos-curve');
    let sinString = 'M ' + x0 + ',' + y0;
    let cosString = 'M ' + x0 + ',' + y0;
    const t = new Date().getTime();
    if (Math.random() > 0.95) {
      for (let i = 0; i < 99; i++) {
        sinString += ' L ' + (x0 + i) + ',' + (y0 + Math.random() * 3 - 1.5);
        cosString += ' L ' + (x0 + i) + ',' + (y0 + Math.random() * 3 - 1.5);
      }
    } else {
      for (let i = 0; i < 99; i++) {
        sinString += ' L ' + (x0 + i) + ',' + (y0 + Math.random() * 0.3 - 0.15);
        cosString += ' L ' + (x0 + i) + ',' + (y0 + Math.random() * 0.3 - 0.15);
      }
    }
    sinCurve.setAttribute('d', sinString);
    cosCurve.setAttribute('d', cosString);
  }

  useEffect(() => {
    const timerId = setInterval(updateLogoCurve, 50); // in ms
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    const cMap = colMaps['viridis'];
    const newStops = [];
    // start a little past beginning and a little before end
    for (let i = 50; i < 206; i++) {
      const rgbString = 'rgb(' + cMap[i][0] + ',' + cMap[i][1] + ',' + cMap[i][2] + ')';
      const offset = String(((i / 255) * 100).toFixed(0)) + '%';
      newStops.push({ offset: offset, stopColor: rgbString });
    }
    setStops(newStops);
  }, []);

  return (
    <>
      {stops && (
        <svg width="400" height="100" viewBox="70 68 20 27">
          <defs>
            <linearGradient id="logoGradient">
              {stops.map((v, index) => (
                <stop offset={v.offset} stopColor={v.stopColor} stopOpacity="1" key={index} />
              ))}
            </linearGradient>
          </defs>
          <g>
            <path id="logo-sin-curve" stroke="url(#logoGradient)" strokeWidth="0.5" fill="none" />
            <path id="logo-cos-curve" stroke="url(#logoGradient)" strokeWidth="0.5" fill="none" />
          </g>
          <g aria-label="IQEngine" fill="#AFAFAF">
            <path d="M 33.526375,72.431076 V 89.360275 H 29.570028 V 72.431076 Z" />
            <path d="m 50.108309,92.696506 q -0.719336,0.16123 -1.413867,0.16123 -2.269629,0 -3.038574,-0.979785 -0.768946,-0.967383 -0.892969,-2.443262 -0.95498,0.111621 -1.599902,0.111621 -3.212207,0 -5.134571,-2.505273 -1.909961,-2.517676 -1.909961,-6.151562 0,-3.547071 1.84795,-6.126758 1.847949,-2.59209 5.444629,-2.59209 3.54707,0 5.407421,2.579688 1.860352,2.567285 1.860352,6.176367 0,2.902148 -1.066602,4.836914 -1.054199,1.922363 -2.492871,2.75332 0,1.302246 1.488281,1.302246 0.434082,0 1.500684,-0.124023 z M 43.398641,75.407639 q -3.12539,0 -3.12539,5.481836 0,5.50664 3.112988,5.50664 3.150195,0 3.150195,-5.432226 0,-5.55625 -3.137793,-5.55625 z" />
            <path d="m 65.363191,75.655686 h -8.073926 v 3.472656 h 6.35 v 3.187402 h -6.35 v 3.695899 h 8.073926 v 3.348632 H 53.258504 V 72.431076 h 12.104687 z" />
            <path d="m 78.460065,89.360275 h -3.695899 v -7.032129 q 0,-1.277441 -0.09922,-1.74873 -0.09922,-0.471289 -0.483691,-0.79375 -0.384473,-0.334863 -0.967383,-0.334863 -1.947168,0 -1.947168,2.877343 v 7.032129 H 67.570807 V 76.833908 h 3.435449 v 2.120801 q 0.855762,-1.513086 1.686719,-1.947168 0.830957,-0.434082 1.79834,-0.434082 1.785937,0 2.877343,0.967383 1.091407,0.95498 1.091407,3.770312 z" />
            <path d="m 94.025007,77.119162 q -0.582911,-0.124023 -0.979785,-0.124023 -1.227833,0 -1.438672,1.091406 1.004589,1.054199 1.004589,2.38125 0,1.773535 -1.488281,2.827734 -1.475879,1.054199 -4.266406,1.054199 -0.992187,0 -1.934766,-0.186035 -0.632519,0.372071 -0.632519,0.954981 0,0.644922 0.533301,0.855761 0.5333,0.21084 2.567285,0.310059 2.889746,0.148828 3.981152,0.359668 1.091406,0.21084 1.835547,1.016992 0.744141,0.806153 0.744141,2.00918 0,1.723926 -1.599903,2.914551 -1.5875,1.190625 -5.643066,1.190625 -3.80752,0 -5.13457,-0.830957 -1.327051,-0.818555 -1.327051,-2.083594 0,-1.674317 2.145605,-2.257227 -1.5875,-0.79375 -1.5875,-2.232422 0,-1.798339 2.505274,-2.802929 -2.22002,-0.917774 -2.22002,-3.063379 0,-1.74873 1.525489,-2.840137 1.53789,-1.091406 4.241601,-1.091406 1.711523,0 3.311426,0.545703 0.111621,-1.066601 0.620117,-1.74873 0.520898,-0.694532 2.195215,-0.694532 0.545703,0 1.041797,0.09922 z m -7.19336,1.451074 q -0.95498,0 -1.500683,0.520899 -0.533301,0.508496 -0.533301,1.351855 0,1.909961 2.046387,1.909961 0.992187,0 1.550293,-0.558105 0.570507,-0.558106 0.570507,-1.351856 0,-0.74414 -0.5333,-1.302246 -0.533301,-0.570508 -1.599903,-0.570508 z m -2.468066,10.703223 q -0.223242,0 -0.570508,0.297656 -0.334863,0.297656 -0.334863,0.719336 0,0.843359 1.079004,1.054199 1.079004,0.21084 2.530078,0.21084 1.897558,0 2.654101,-0.285254 0.768946,-0.285254 0.768946,-0.917773 0,-0.483692 -0.644922,-0.744141 -0.63252,-0.260449 -3.398242,-0.260449 l -0.744141,0.0124 q -0.682129,0 -0.917773,-0.03721 -0.26045,-0.04961 -0.42168,-0.04961 z" />
            <path d="M 99.258797,76.833908 V 89.360275 H 95.562899 V 76.833908 Z" />
            <path d="m 113.18663,89.360275 h -3.6959 v -7.032129 q 0,-1.277441 -0.0992,-1.74873 -0.0992,-0.471289 -0.48369,-0.79375 -0.38447,-0.334863 -0.96738,-0.334863 -1.94717,0 -1.94717,2.877343 v 7.032129 h -3.6959 V 76.833908 h 3.43545 v 2.120801 q 0.85576,-1.513086 1.68672,-1.947168 0.83096,-0.434082 1.79834,-0.434082 1.78594,0 2.87734,0.967383 1.09141,0.95498 1.09141,3.770312 z" />
            <path d="m 127.48653,83.717209 h -8.06152 c -0.008,0.223242 -0.0124,0.417545 -0.0124,0.58291 0,0.892969 0.23565,1.566829 0.70694,2.021582 0.47955,0.454753 1.05006,0.682129 1.71152,0.682129 1.23197,0 1.97197,-0.657324 2.22002,-1.971973 l 3.43262,0.0026 -0.084,0.245439 c -0.93431,2.89388 -2.83186,4.34082 -5.69267,4.34082 -1.24851,0 -2.31097,-0.248047 -3.1874,-0.74414 -0.86817,-0.504362 -1.5875,-1.2361 -2.15801,-2.195215 -0.56224,-0.959115 -0.84336,-2.108398 -0.84336,-3.447851 0,-1.992643 0.56637,-3.600814 1.69912,-4.824512 1.14101,-1.223698 2.60449,-1.835547 4.39043,-1.835547 1.61231,0 2.9931,0.570508 4.14238,1.711523 1.15755,1.132748 1.73633,2.94349 1.73633,5.432227 z m -8.07393,-2.145605 h 4.45245 c -0.11576,-1.719792 -0.82269,-2.579688 -2.1208,-2.579688 -1.38907,0 -2.16628,0.859896 -2.33165,2.579688 z" />
            <path d="m 97.42186,72.009139 c -0.01757,5.5e-5 -0.03498,5.72e-4 -0.05271,10e-4 -0.56732,0.01473 -1.051743,0.22634 -1.453142,0.634586 -0.401398,0.408246 -0.598344,0.899251 -0.590145,1.473295 0.0082,0.574007 0.21656,1.061598 0.624769,1.46296 0.386911,0.380422 0.853953,0.575577 1.400948,0.584977 l 0.553454,-0.05788 c 0.365688,-0.08724 0.688211,-0.272621 0.967383,-0.556556 0.408011,-0.414971 0.607647,-0.909696 0.599447,-1.48363 -0.0082,-0.574081 -0.22142,-1.066629 -0.639755,-1.477946 -0.395487,-0.388855 -0.865441,-0.582553 -1.410249,-0.580843 z m -0.02274,0.976168 a 1.1025438,1.1025438 0 0 1 1.102258,1.102258 1.1025438,1.1025438 0 0 1 -1.102258,1.102775 1.1025438,1.1025438 0 0 1 -1.102775,-1.102775 1.1025438,1.1025438 0 0 1 1.102775,-1.102258 z" />
            <path d="m 96.852221,69.418145 c 1.312647,-0.375528 2.879149,0.01978 4.027479,1.148848 1.14459,1.125392 1.56729,2.678565 1.22025,3.994618 l 1.1737,-0.02493 c 0.31138,-1.627338 -0.2313,-3.453548 -1.58895,-4.788421 -1.3674,-1.344462 -3.219253,-1.853891 -4.849676,-1.500241 z" />
            <path d="M 100.27282,71.170102 C 99.272639,70.1867 97.942617,69.809031 96.855164,70.090279 l 0.01714,1.167352 c 0.752068,-0.308611 1.799914,-0.03738 2.588682,0.738155 0.796644,0.78329 1.083334,1.839496 0.772724,2.598396 l 1.17655,-0.025 c 0.26288,-1.092129 -0.13719,-2.41561 -1.13744,-3.399085 z" />
          </g>
        </svg>
      )}
    </>
  );
};
