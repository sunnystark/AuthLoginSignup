import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { history } from '../_helpers';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import './register.component.css'


const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing.unit,
    },
    withoutLabel: {
      marginTop: theme.spacing.unit * 3,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },

    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    button: {
        margin: theme.spacing.unit,
    },

    input: {
        display: 'none',
    },
  });

  
class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            name:'',
            email: '',
            password: '',
            confirm_Password: '',
        }
    }
    componentDidMount() {
        const { dispatch } = this.props;
        // let user={
        //     task: this.props.vendor.name,
        //     email: this.props.vendor.email,
        //     password: this.props.vendor.issues,
        //     confirm_password: this.props.vendor.confirm_password,
        // }
        // dispatch(userActions.register(user));
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    register = event =>{
        event.preventDefault();
        const { dispatch } = this.props;
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            confirm_password: this.state.confirm_password
        }
        
        dispatch(userActions.register(user));
    
    }
    

   render() {
      const { classes } = this.props;
      return (
        <div className="login-margin">
            <Grid container spacing={24}>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography><h1>{'Register'}</h1></Typography>
                    </Paper>
                    <Paper className={classes.paper}>
                        <div>
                        <TextField
                            label="name"
                            value={this.state.name}
                            className={classes.textField}
                            onChange = {this.handleChange('name')}
                            />
                        <br/>
                        <br/>    
                        <TextField
                            label="email"
                            value={this.state.email}
                            className={classes.textField}
                            onChange = {this.handleChange('email')}
                            />
                        <br/>
                        <br/>
                        <TextField
                            label="Password"
                            // autoComplete="current-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            className={classes.textField}
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                        />
                        <br/>
                        <br/>
                        <TextField
                            label="Confirm_Password"
                            // autoComplete="current-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            className={classes.textField}
                            value={this.state.confirm_password}
                            onChange={this.handleChange('confirm_password')}
                        />
                        <br/>
                        <br/>
                        <Button variant="contained" color="primary" className={classes.button} onClick={(event)=>{this.register(event)}} >
                            Register
                        </Button>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                </Grid>
            </Grid>
        </div>
      );
   }
}

Register.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
const mapStateToProps = (state) =>{
    const { Register } = state.authentication;
    return {
        Register
    };
}

const connectedRegisterPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(Register)));

export { connectedRegisterPage as Register };