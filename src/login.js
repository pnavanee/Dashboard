import React from 'react';
import {Form,Button,Container,Row,Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const validUser = {
 "username":"hruday@gmail.com",
 "password" :'hruday123'
}

class Login extends React.Component {
    constructor(...args) {
    super(...args);

    this.state = { validated: false,userName:"",password:"",error:"" };
  }

   handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }

  handleUsername = (e) => {
    this.setState({userName:e.target.value})
  }

  handlePassword = (e) =>{
    this.setState({password:e.target.value})
  }

  checkValidity = () => {
    let error = "";
        if(!this.state.userName || !this.state.password){
           error = "Please fill all the fields"
        }
        else if(this.state.userName !== validUser.username || this.state.password !== validUser.password)
        {
          error = "Invalid Username/Password"
        }
        else if(this.state.userName && this.state.password)
        {
           error = ""
        }
    this.setState({error})

    if(this.state.userName === validUser.username && this.state.password === validUser.password)
    {
       this.props.history.push('/dashboard')
    }
  }

  render() {

     const { validated } = this.state;
    return (
<Container>
<Row>
  <Col xs={4}/>
  <Col xs={4}>
  <Form  noValidate
        validated={validated}
        onSubmit={e => this.handleSubmit(e)}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="email" placeholder="UserName" required onChange={(e)=>{this.handleUsername(e)}}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" required onChange={(e)=>{this.handlePassword(e)}} />
  </Form.Group>
  <p style={{color:"red",fontSize:14,textAlign:"center"}}>{this.state.error}</p>
  <Button variant="primary" type="submit" onClick={()=>{this.checkValidity()}}>
    Login
  </Button>
</Form>
</Col>
<Col xs={4}/>
</Row>
</Container>
    );
  }
}

export default withRouter(Login);