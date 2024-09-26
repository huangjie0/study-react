import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {
    addPerson = ()=>{
        const name = this.nameRef.value
        const age = this.ageRef.value
        const person = {
            id:uuidv4(),
            name,
            age
        }
        this.props.addPersonObj(person)
    }
  render() {
    return (
      <div>
        <input type="text" placeholder='输入名字' ref={ c => this.nameRef = c  }/>
        <input type="text" placeholder='输入年龄' ref={ c => this.ageRef = c }/>
        <button onClick={ this.addPerson }>添加</button>
        <ul>
            {
                this.props.personList.map((item)=>{
                    return (
                        <li key={item.id}>名字:{ item.name}  年龄:{ item.age }</li>
                    )
                })
            }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({personList:state.showPerson})
const mapDispatchToProps = dispatch => (
    {
        addPersonObj:(personObj)=>{
            dispatch(createAddPersonAction(personObj))
        }
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Person)
