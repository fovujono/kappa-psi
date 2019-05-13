import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const SignUpModal = () => (
  <Modal trigger={<Button>Sign Up</Button>}>
    <Modal.Header>Sign Up</Modal.Header>
    <Modal.Content image>
    <Image wrapped size='medium' src='/images/ky.png' />
      <Modal.Description>
        <form class="ui form">
            <div class="field">
                <label>First Name</label><input placeholder="First Name" />
            </div>
            <div class="field">
                <label>Last Name</label><input placeholder="Last Name" />
            </div>
            <div class="field">
                <label>Username</label><input placeholder="Username" />
            </div>
            <div class="field">
                <label>Password</label><input placeholder="Password" />
            </div>
            <button type="submit" class="ui button">Submit</button>
        </form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default SignUpModal;