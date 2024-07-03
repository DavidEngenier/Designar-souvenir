import Link from 'next/link'; // Importamos Link de Next.js para navegación entre páginas
import styles from '@/app/css/additional-styles/Dropdown.module.css'; // Importamos los estilos del dropdown

const Dropdown = () => {
  return (
    <ul className={styles.dropdown}> {/* Aplicamos la clase CSS del dropdown */}
      <li className={styles.dropdownItem}>
        <Link href="/services/web-development">Web Development</Link> {/* Enlace a Web Development */}
      </li>
      <li className={styles.dropdownItem}>
        <Link href="/services/app-development">App Development</Link> {/* Enlace a App Development */}
      </li>
      <li className={styles.dropdownItem}>
        <Link href="/services/seo">SEO</Link> {/* Enlace a SEO */}
      </li>
    </ul>
  );
};

export default Dropdown; // Exportamos el componente Dropdown
