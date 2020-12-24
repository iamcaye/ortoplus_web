import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Nav (props) {
	return (
    <div className={styles.nav_main}>
      <div className={styles.main_logo}
        onClick={console.log("Hello?")}
      >
		  <Image
			  src='/../public/orthoapnea-logo-claim-200x68.png'
			  alt='logo'
			  width={200}
			  height={68}
		  />
      </div>
      <span>
        <Link href='/'>
          <a>Inicio</a>
        </Link>
        <Link href='/pacientes'>
          <a>Pacientes</a>
        </Link>
        <Link href='/productos'>
          <a>Productos</a>
        </Link>
        <Link href='contacto'>
          <a>Contacto</a>
        </Link>
      </span>
      <div className={styles.ApneaDockLink}>
        <Link href='https://apneadock.es/login'>
          <a>
            APNEADOCK
          </a>
        </Link>
      </div>
      <div className={styles.rightNav}>
        <Link href='/tel:+34951204334'>
          <a>
            Informate
          </a>
        </Link>
      </div>
    </div>
	);
}
