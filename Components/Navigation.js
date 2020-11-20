import React from 'react';
import { Link } from 'react-scroll';

import { AppBar, Toolbar, Typography, Button, Grid, List, ListItem, SwipeableDrawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


export default class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mobile : false,
            menu : false
        };
        this.getMobileMenu = this.getMobileMenu.bind(this);
        this.getMenu = this.getMenu.bind(this);
    }

    componentWillMount(){
        if(window.innerWidth <= 900){
          this.setState({mobile:true});
        }
    
        window.addEventListener('resize',()=>{
          if(window.innerWidth <= 900){
            this.setState({mobile:true});
          }
          else{
            this.setState({mobile:false})
          }
        });
    }

    getMobileMenu(){
        return(
            <div>
            <AppBar style={{ background: '#161616' }}>
              <Toolbar>
                <Grid container direction = "row" justify = "space-between" alignItems="center">
                    <Typography variant = "h6" className='last-name'>
                        Naveenan Yogeswaran
                    </Typography>
                  <MenuIcon
                    onClick={()=>{this.setState({menu:true})}} />
                </Grid>
              </Toolbar>
            </AppBar>
    
            <SwipeableDrawer
             open={this.state.menu}
             onClose={()=>{this.setState({menu:false})}}
             onOpen={()=>{this.setState({menu:true})}} 
             >
    
               <div
                 tabIndex={0}
                 role="button"
                 onClick={()=>{this.setState({menu:false})}}
                 onKeyDown={()=>{this.setState({menu:false})}}>
    
                <List>
                  <ListItem 
                    component={Link} 
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}>
                      Home 
                  </ListItem>
                  <ListItem 
                    component={Link} 
                    activeClass="active"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}> 
                      Education 
                    </ListItem>
                  <ListItem 
                    component={Link} 
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}>
                      Projects
                  </ListItem>
                  <ListItem 
                    component={Link} 
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}> 
                      Skills 
                  </ListItem>
                  <ListItem 
                    component={Link} 
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}>
                      Experience
                  </ListItem>
                  <ListItem 
                    component={Link} 
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}> 
                      Contact Me 
                  </ListItem>

                 </List>
    
             </div>
           </SwipeableDrawer>
    
          </div>
        );
    }

    getMenu(){
        return(
            <AppBar position="fixed" style={{ background: '#161616' }} backgroundColor="transparent">
                <Toolbar>
                  <Grid
                    justify="space-between" 
                    container 
                    spacing={10}
                    >
                        <Grid item>
                            <Typography variant="h6" color="inherit">
                                Naveenan Yogeswaran
                            </Typography>
                        </Grid>

                        <Grid item>
                            <div>
                            <Button raised="true" color="inherit" >
                                <Link
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-10}
                                    duration={500}
                                    >
                                    Home
                                </Link>
                            </Button>
                            <Button raised="true" color="inherit" >
                                <Link
                                    activeClass="active"
                                    to="education"
                                    spy={true}
                                    smooth={true}
                                    offset={-10}
                                    duration={500}
                                    >
                                    Education
                                </Link>
                            </Button>
                            <Button raised="true" color="inherit" >
                                <Link
                                    activeClass="active"
                                    to="project"
                                    spy={true}
                                    smooth={true}
                                    offset={-10}
                                    duration={500}
                                    >
                                    Projects
                                </Link>
                            </Button>
                            <Button raised="true" color="inherit" >
                                <Link
                                    activeClass="active"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-10}
                                    duration={500}
                                    >
                                    Skills
                                </Link>
                            </Button>
                            <Button raised="true" color="inherit" >
                                <Link
                                    activeClass="active"
                                    to="experience"
                                    spy={true}
                                    smooth={true}
                                    offset={-10}
                                    duration={500}
                                    >
                                    Experience
                                </Link>
                            </Button>
                            <Button raised="true" color="inherit" >
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-10}
                                    duration={500}
                                    >
                                    Contact Me
                                </Link>
                            </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }

    render(){
        return(
            <div>
                {this.state.mobile ? this.getMobileMenu() : this.getMenu()}
            </div>
        );
    }
}