import React from 'react'


const UserForm = (props) => {
  return (
    <div>
      <form onSubmit={props.getUser}>
        <input type="text" name="username"/>
        <button>Submit</button>
      </form>
    </div>
  )
}
export default UserForm;