import React, { Component } from 'react';
import AppBar from '../_components/appbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nav from '../_components/nav'; 
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { vendorAction } from '../_actions';
import { withRouter } from 'react-router-dom';


const drawerWidth = 240;

const styles = theme => ({

    root: {
        flexGrow: 1,
      },

  contentRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
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

class UserList extends Component {


    componentDidMount() {
       
         const { dispatch } = this.props;
        dispatch(vendorAction.getUsers());
    

    }



   render() {
     const { classes } = this.props;
    //  const { match : {params } } = this.props;
     const { vendor } = this.props.vendor;
     const userData = vendor.data ? vendor.data.map(n=>{

        return (
          <TableRow key={n._id}>
              <TableCell component="th" scope="row">
              {n.name}
              </TableCell>
              <TableCell >{n.role}</TableCell>
              <TableCell >{n.email}</TableCell>
              {/* <TableCell>{n.help}</TableCell> */}
              <TableCell>
                <IconButton className={classes.button} aria-label="Edit" component='a' href={`/edit-vendor/${n._id}`}>
                  <EditIcon />
                </IconButton>
                <IconButton className={classes.button} aria-label="Delete" onClick={(event) => this.handleClick(event, n._id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
          </TableRow>
          );
      }): null;
 
     
      return (
        
        <div className={classes.root}>
            <div className={classes.appFrame}>
            <AppBar/>
            <Nav />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                   
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={3} container justify="flex-end">                            
                    </Grid>
                </Grid> 
                <br />
                <br />
                <Grid container spacing={24}>
                    
                    <Grid item xs={12}>
                  <Paper className={classes.root}>
                      <Table className={classes.table}>
                          <TableHead>
                          <TableRow>
                              <TableCell>Name</TableCell>
                              <TableCell >Role</TableCell>
                              <TableCell >Email</TableCell>
                              {/* <TableCell>Help</TableCell> */}
                              <TableCell>Action</TableCell>
                          </TableRow>
                          </TableHead>
                          {/* {userData} */}
                          <TableBody>
                          {userData}
                          </TableBody>
                      </Table>
                  </Paper>
                </Grid>
                </Grid>
            </main>
            </div>
        </div>
      );
   }
}

//export default Home;

UserList.propTypes = {
    classes: PropTypes.object.isRequired,
};


//export default BoxCon
const mapStateToProps = (state) =>{
    return state;
}


const connectedUserListPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(UserList)));

export { connectedUserListPage as UserList };