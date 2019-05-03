const initialState = {
    dashboardData :[]
    
}

const user = (state = initialState,action) => {
    switch(action.type)
    {
      case "GET_DATA" : 
      return Object.assign({},state,action.payload);
      break;
    }
    return state;
}

export default user;