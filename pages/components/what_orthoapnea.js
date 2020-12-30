import styles from '../../styles/Home.module.css';
import Image from 'next/image';

export default function WhatOrthoApnea () {
  return (
    <div className={styles.WhatOContainer}>
    <div className={styles.WhatOImage}>
      <Image
        src='/../public/OrthoApnea-Edificio2-1200x704.jpg'
        width = {900}
        height = {528}
        alt = 'Edificio OrthoApnea'
      />
      <div className={styles.WhatOBlock}>
        <h1>Qué es OrthoApnea</h1>
          <p>
            Somos una compañía especializada en el diseño y fabricación de dispositivos para el tratamiento del ronquido y la Apnea del sueño.<br></br>
            Un largo recorrido en investigación y tratamiento de miles de pacientes en más de 45 países, hacen de los dispositivos OrthoApnea la mejor opción.
          </p>
      </div>
    </div>
    <div>
      <h1>¿Cómo lo hacemos?</h1>
      <iframe width="478" height="269" src="https://www.youtube.com/embed/IXVNoziiYqo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
  );
}