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
import { connect } from 'react-redux';
import { vendorAction } from '../_actions';
import { withRouter } from 'react-router-dom';
// import DateFnsUtils from "@date-io/date-fns"; // import
// import { DatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";




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

class AddClient extends Component {
  
    handleChange = prop => event => {
        const { dispatch } = this.props;
        dispatch(vendorAction.onChangeProps(prop, event));
    };

    componentDidMount() {
        const { match : {params } } = this.props;

        if(params.id){
            const { dispatch } = this.props;
            dispatch(vendorAction.getVendorById(params.id));
        }
    }


    handleClick(event){
        const { match : {params } } = this.props;
        const { dispatch } = this.props;
            
        let payload={
            // task: this.props.vendor.task,
            client: this.props.vendor.client,
            // issues: this.props.vendor.issues,
            // help: this.props.vendor.help,
        }

        if(params.id){
            dispatch(vendorAction.editVendorInfo(params.id, payload));
        }else{
            dispatch(vendorAction.createVendor(payload));
        }
    }


   render() {
     const { classes } = this.props;
     const { match : {params } } = this.props;
    //  console.log(this.props.vendor);
    //  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    // const [selectedDate, handleDateChange] = React.useState(new Date())


//   function handleDateChange(date) {
//     setSelectedDate(date);
//   }

     function InsertText(props) {
        return <Typography>{'Add New Client'}</Typography>;
      }
      
      function EditText(props) {
          return <Typography>{'Edit Client'}</Typography>;
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
                                                id="Client"
                                                label="Current Client"
                                                className={classes.textField}
                                                value={this.props.vendor.client}
                                                onChange={this.handleChange('client')}
                                                margin="normal"
                                            />
                                        </Grid>
                                       
                                        <Grid item xs={3}>
                                        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker value={selectedDate} onChange={handleDateChange} />
  </MuiPickersUtilsProvider> */}
                                         <TextField
                                                id="Date"
                                                label=" Start Date"
                                                className={classes.textField}
                                                value={this.props.vendor.startDate}
                                                onChange={this.handleChange('currentDate')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                        <TextField
                                                id="Date"
                                                label=" End Date"
                                                className={classes.textField}
                                                value={this.props.vendor.endDate}
                                                onChange={this.handleChange('EndDate')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                id="Comment"
                                                label="Comment"
                                                className={classes.textField}
                                                value={this.props.vendor.comment}
                                                onChange={this.handleChange('comment')}
                                                margin="normal"
                                            />
                                        </Grid>
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
                                                        Submit
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </form>
                            </Paper>
                        </div>
                    </Grid>
                </Grid>
            </main>
            </div>
        </div>
      );
   }
}

//export default Home;

AddClient.propTypes = {
    classes: PropTypes.object.isRequired,
};


//export default BoxCon
const mapStateToProps = (state) =>{
    return state;
}


const connectedAddClientPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(AddClient)));

export { connectedAddClientPage as AddClient };