
import styles from './hero.module.css';
import Link from 'next/link';

export const Hero = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.toastWrapper}>
                    <div className={styles.toast} />
                    <div className={styles.toast} />
                    <div className={styles.toast} />
                </div>
                <h1 className={styles.heading}>
                    React Smooth Scrolll
                </h1>
                <p className='w-11/12 md:max-w-[500px] mx-auto text-center'>
                    A lightweight and configurable smooth scrolling component for React and Next.js, powered by <Link href="https://lenis.darkroom.engineering/" className="font-medium text-blue-500 after:content-['_↗']" target='_blank'>Lenis</Link>.
                </p>
                <div className={styles.buttons}>
                    <button
                        data-primary=""
                        className={styles.button}
                    >
                        <Link href="https://www.npmjs.com/package/react-smooth-scrolll" target='_blank'>
                            Npm Package
                        </Link>
                    </button>
                    <a className={styles.button} href="https://github.com/psparwez/react-smooth-scrolll" target="_blank">
                        GitHub
                    </a>
                </div>
                <Link href="#installation" className={styles.link}>
                    Documentation
                </Link>

            </div>
        </>
    );
};