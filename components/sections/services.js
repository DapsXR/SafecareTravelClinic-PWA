import { Grid, Card, Text } from "@nextui-org/react";


export function servicesSection() {
     
    return(
          <Grid.Container gap={2} wrap='wrap'  justify="center">
            <Grid xs>
               <h3>
                  Book a consult
                  or injection 
               </h3>
            </Grid>
            <Grid xs> 
             <h3>
                 Review Medical history and Travel Destination
             </h3> 
            </Grid>
            <Grid xs>
               <h3>
                  Enjoy your trip safely
               </h3>
            </Grid>
          </Grid.Container>
 
        ); 
  }