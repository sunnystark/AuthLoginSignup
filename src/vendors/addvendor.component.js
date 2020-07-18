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

class AddVendor extends Component {
  
    handleChange = prop => event => {
        const { dispatch } = this.props;
        dispatch(vendorAction.onChangeProps(prop, event));
    };

    componentDidMount() {
        const { match : {params } } = this.props;
         console.log(params,'this is params')
         const { dispatch } = this.props;
        dispatch(vendorAction.getVendor());
        if(params.id){
            const { dispatch } = this.props;
            dispatch(vendorAction.getVendorById(params.id));
            // dispatch(vendorAction.getVendorById(params.id));
        }

    }


    handleClick(event){
        event.preventDefault();

        console.log(event,'event task');
        const { match : {params } } = this.props;
        const { dispatch } = this.props;
            console.log(params,'this is edit param');
        let payload={
            // id: this.props.vendor._id,
            task: this.props.vendor.task,

            
            // client: this.props.vendor.client,
            // issues: this.props.vendor.issues,
            // help: this.props.vendor.help,
        }
           console.log(payload,'payload');
        if(params.id){
            dispatch(vendorAction.editVendorInfo(params.id, payload));
        }else{
            dispatch(vendorAction.createVendor(payload));
        }
    }


   render() {
     const { classes } = this.props;
     const { match : {params } } = this.props;
     const { vendor } = this.props.vendor;
     const userData = vendor.data ? vendor.data.map(n=>{

        return (
          <TableRow key={n._id}>
              <TableCell component="th" scope="row">
              {n.task}
              </TableCell>
              <TableCell >{n.client}</TableCell>
              <TableCell >{n.issues}</TableCell>
              <TableCell>{n.help}</TableCell>
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
    //  console.log(this.props.vendor);
     

     function InsertText(props) {
        return <Typography>{'Add New Module'}</Typography>;
      }
      
      function EditText(props) {
          return <Typography>{'Edit Module'}</Typography>;
      }


    function SegHeader() {
        if(params.id){
            return <EditText />;
        }
        return <InsertText />;
    }
     
      return (
        
        <div className={classes.root}>
            <div className={classes.appFrame}>
            <AppBar/>
            <Nav />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        <SegHeader />
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
                        <div>
                            <Paper className={classes.contentRoot} elevation={1}>
                                <form className={classes.container}>
                                    <Grid container spacing={24}>
                                        <Grid item xs={3}>
                                            <TextField
                                                id="name"
                                                label="Task"
                                                className={classes.textField}
                                                value={this.props.vendor.task}
                                                onChange={this.handleChange('task')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        {/* <Grid item xs={3}>
                                            <TextField
                                                id="mobile"
                                                label="Client"
                                                className={classes.textField}
                                                value={this.props.vendor.client}
                                                onChange={this.handleChange('client')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                id="phone_number"
                                                label="Issues"
                                                className={classes.textField}
                                                value={this.props.vendor.issues}
                                                onChange={this.handleChange('issues')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                id="address"
                                                label="Help"
                                                multiline
                                                rowsMax="4"
                                                className={classes.textField}
                                                value={this.props.vendor.help}
                                                onChange={this.handleChange('help')}
                                                margin="normal"
                                            />
                                        </Grid> */}
                                    </Grid>
                                    <br />
                                    <Grid container spacing={24}>
                                        <Grid item xs={3}>
                                        </Grid>
                                        <Grid item xs={6}>
                                        </Grid>
                                        <Grid item xs={3} container justify="center">
                                            <Grid container spacing={24}>
                                                <Grid item xs={6} container justify="center">
                                                    <Button variant="contained" color="secondary" className={classes.button} component='a' href="/vendor">
                                                        Cancel
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={6} container justify="flex-start">
                                                    <Button variant="contained" color="primary" className={classes.button} onClick={(event) => this.handleClick(event)}>
                                                        Save
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </form>
                            </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                  <Paper className={classes.root}>
                      <Table className={classes.table}>
                          <TableHead>
                          <TableRow>
                              <TableCell>UserTask</TableCell>
                              <TableCell >Client</TableCell>
                              <TableCell >Issues</TableCell>
                              <TableCell>Help</TableCell>
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

AddVendor.propTypes = {
    classes: PropTypes.object.isRequired,
};


//export default BoxCon
const mapStateToProps = (state) =>{
    return state;
}


const connectedAddVendorPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(AddVendor)));

export { connectedAddVendorPage as AddVendor };