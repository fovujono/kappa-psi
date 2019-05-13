import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import SignUpModal from "../SignUpModal/SignUpModal"


const divStyle = {
  boxShadow: '1px 1px 1px 1px lightgrey'
};

const SignUpDiv = () => (
  <Segment placeholder style={divStyle}>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' />
          <Form.Input icon='lock' iconPosition='left' label='Password' type='password' />

          <Button content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button className="sign-up-button" content='Sign up' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
)

export default SignUpDiv