import Image from 'next/image'
import logo from '/Users/Daps/Desktop/stc-app/public/sclogo.png'
import { Grid } from "@nextui-org/react";
import Link from 'next/link';
import { useState } from "react";
import styles from '/Users/Daps/Desktop/stc-app/styles/MainLayout.module.css'


const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);
    return (  
     <Grid.Container gap={2} display='flex' >
          <Grid className='logopos'  xs={2}>
              < Image
              src={logo}
              alt="logo" 
              width={150}
              height={150}
              margin={0}
              padding={0}
              responsive
             /> 
          </Grid>    
        
          <Grid className='menu'  alignItems='center' alignContent='space-around' justify='flex-end' xs={9}>

              <nav className={styles.navbar}>
               
              <ul className={isOpen === false ? 
                      styles.navmenu : styles.navmenu +' '+ styles.active}>
                  <li className={styles.navitem}>
                    <Link href='/'>
                      <a className={isOpen === false ? 
                                  styles.navlink : styles.navlink+' '+styles.active}
                                  onClick={openMenu}>Services</a>
                      </Link>
                  </li>
                  <li className={styles.navitem}>
                      <Link href='/about'>
                        <a className={isOpen === false ? 
                                  styles.navlink : styles.navlink+' '+styles.active}
                                  onClick={openMenu}>Contact</a>
                      </Link>
                  </li>
                  <li className={styles.navitem}>
                      <Link href='/book'>
                      <a className={isOpen === false ? 
                                  styles.navlink : styles.navlink+' '+styles.active}
                                  onClick={openMenu}>Book Now</a>
                      </Link>
                  </li>
              </ul>
              <button className={isOpen === false ? 
                                  styles.hamburger : styles.hamburger+' '+styles.active}
                                  onClick={openMenu}
                                  >
                  <span className={styles.bar}></span>
                  <span className={styles.bar}></span>
                  <span className={styles.bar}></span>
              </button>
              </nav>

          </Grid>   
   </Grid.Container>
    );
}
 
export default Navbar;