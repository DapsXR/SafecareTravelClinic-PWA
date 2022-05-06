import { Grid, Card, Text } from "@nextui-org/react";
import HeroImage from '../images/hero';
import GradButton  from '../navigation/buttons';



export default function HeroSection() {

    return(
    <>
    <Grid.Container display="flex" Direction="row" AlignItems="flex-start" Justify="space-evenly">
       <Grid direction='column'xs>
		 <h1> 
           Your First Travel Destination
		 </h1>
     <span>
        Easily book a consultation to get up to date destination information and
        all your necessary vaccinations.
     </span>
		<GradButton/> 
     </Grid>
       
      <Grid xs>
         <HeroImage/>
     </Grid>
   </Grid.Container>
   </>
  );
}


   