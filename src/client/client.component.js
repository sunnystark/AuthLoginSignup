import React, { Component } from 'react';
import { vendorAction } from '../_actions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';  
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AppBar from '../_components/appbar';
import Nav from '../_components/nav'; 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});


class Client extends Component {
   
  componentDidMount() {
    const { match : {params } } = this.props;
    if(params.id){
      const { dispatch } = this.props;
      dispatch(vendorAction.getTaskById(params.id));
  }
    
}

  render() {
    const { classes } = this.props;
    const  vendor  = this.props.vendor;
      console.log('vendor client fetch', vendor);
    const userData = vendor.vender ? vendor.vender.map(n=>{
     return (
       <TableRow key={n.userId} >
       <TableCell component="th" scope="row">
        {n.client}
       </TableCell>
       {/* <TableCell >{n.task}</TableCell> */}
       <TableCell> 
        <IconButton className={classes.button} aria-label="Edit" component='a' href={`/add-client/${n._id}`}>
        <EditIcon />
        </IconButton> 
        </TableCell>
         
         {/* <IconButton className={classes.button} aria-label="Edit" component='a'>
           <EditIcon />
         </IconButton> */}
         {/* <IconButton className={classes.button} aria-label="Delete" onClick={(event) => this.handleClick(event, n._id)}> */}
         {/* <IconButton className={classes.button} aria-label="Delete" >
           <DeleteIcon />
         </IconButton> */}
       {/* </TableCell> */}
   </TableRow>
)}):null;
   
     return (

       <div className={classes.root}>
           <div className={classes.appFrame}>
           <AppBar/>
           <Nav />
           <main className={classes.content}>
               <div className={classes.toolbar} />
               <Grid container spacing={24}>
                   <Grid item xs={3}>
                     <Typography>{'Client\'s Details'}</Typography>
                   </Grid>
                   <Grid item xs={6}>
                   </Grid>
                   <Grid item xs={3} container justify="flex-end">
                           
                   </Grid>
               </Grid>
               <Grid container spacing={24}>
                   <Grid item xs={3}>
                   </Grid>
                   <Grid item xs={6}>
                   </Grid>
                   <Grid item xs={3} container justify="flex-end">
                     <Button variant="contained" color="primary" className={classes.button} component='a' href="/add-client">
                       Add Client
                     </Button>      
                   {/* {userData} */}
                   </Grid>
               </Grid>
               <br />
               <br />
               <Grid container spacing={24}>
                 <Paper className={classes.root}>
                     <Table className={classes.table}>
                         <TableHead>
                         <TableRow>
                             <TableCell>Client's</TableCell>
                             {/* <TableCell >User Task</TableCell>
                             <TableCell >Action</TableCell> */}
                             
                         </TableRow>
                         </TableHead>
                         <TableBody>
                         {userData}
                         </TableBody>
                     </Table>
                 </Paper>
               </Grid>
           </main>
           </div>
       </div>
     );
  }
}
 
Client.propTypes = {
     classes: PropTypes.object.isRequired,
};
   
 
const mapStateToProps = (state) =>{
    

 return {
     vendor : state.vendor
 };
}
const connectedClientPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(Client)));

export { connectedClientPage as Client };
  