import React from 'react';
import {withRouter} from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux'
import {getData} from './action';


class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        data :[]
    }
  }
   
   componentDidMount()
   {
      this.props.dispatch(getData())
   }

  render() {
    let trArray = [];
    if(this.props.data && this.props.data.length > 0)
    {
       this.props.data.map((item)=>{
          trArray.push(<tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.gender}</td>
          <td>{item.email}</td>
          <td>{item.phoneNo}</td>
          </tr>)
        })
    }
    return (
   <Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Age</th>
      <th>Gender</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
   {trArray}
  </tbody>
</Table>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
      data : state.user.dashboardData
  }
}

export default connect (mapStateToProps) (withRouter(Dashboard));