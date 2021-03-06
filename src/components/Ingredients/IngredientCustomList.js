import React, { Component } from 'react'
import { List } from 'antd';
// import uuidv1 from 'uuid/v1';
// https://ant.design/components/list/
// https://ant.design/components/collapse/

class IngredientCustomList extends Component {

  render() {

    return (
      <List
        header={<div>{this.props.department}</div>}
        bordered
        dataSource={this.props.ingredients}
        renderItem={item => (<List.Item>{item}</List.Item>)}
      />

    )
  }

}

export default IngredientCustomList;
