import React from 'react';
import { Link } from 'react-router-dom';

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
            <AppBar position="static" style={{ background: '#000000' }}>
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
                   <ListItem component={Link} exact to="/" key = {1} button divider> Home </ListItem>
                   <ListItem component={Link} to="/education" key = {2} button divider> Education </ListItem>
                   <ListItem component={Link} to="/projects" key = {3} button divider> Projects </ListItem>
                   <ListItem component={Link} to="/experience" key = {4} button divider> Experience </ListItem>
                   <ListItem component={Link} to="/skills" key = {5} button divider> Skills </ListItem>
                   <ListItem component={Link} to="/contactme" key = {6} button divider> Contact Me </ListItem>
                 </List>
    
             </div>
           </SwipeableDrawer>
    
          </div>
        );
    }

    getMenu(){
        return(
            <AppBar position="static" style={{ background: '#000000' }}>
                <Toolbar>
                    <Grid container spacing = {24} justify = "space-between">
                        <Grid item>
                            <Typography variant="h6" className='last-name'>
                                Naveenan Yogeswaran
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button color="inherit" component={Link} exact to="/">Home</Button>
                            <Button color="inherit" component={Link} to="/education">Education</Button>
                            <Button color="inherit" component={Link} to="/projects">Projects</Button>
                            <Button color="inherit" component={Link} to="/experience">Experience</Button>
                            <Button color="inherit" component={Link} to="/skills">Skills</Button>
                            <Button color="inherit" component={Link} to="/contactme">Contact Me</Button>
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