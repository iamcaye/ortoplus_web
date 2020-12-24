import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Nav (props) {
	return (
    <nav className={styles.nav_main}>
      <ul>
        <span>
		      <Image
			      src='/../public/orthoapnea-logo-claim-200x68.png'
			      alt='logo'
			      width={200}
            height={68}
		      />
        </span>
           <div className={styles.ApneaDockLink}>
            <Link href='https://apneadock.es/login'>
              <a target='blank' rel='noreferrer'>
                APNEADOCK
              </a>
            </Link>
          </div>
        <li>
          <Link href="/">
            <a>
              <p>
              Home
              </p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/pacientes">
            <a>
              <p>
              Pacientes
              </p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/productos">
            <a>
              <p>
              Productos
              </p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contacto">
            <a>
              <p>
              Contacto
              </p>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
	);
}
