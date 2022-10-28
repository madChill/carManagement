import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { uselogicForm } from './hooks'
const LoginForm = () => {
    const { formik, loading, users } = uselogicForm()

    return <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src='/sport-car-1768.svg' /> Log-in to your account
            </Header>
            <Form onSubmit={(e) => formik.handleSubmit(e)} size='large'>
                <Segment stacked>
                    <Form.Input
                        error={formik.errors.userName}
                        onChange={formik.handleChange}
                        name="userName" fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
                        error={formik.errors.password}
                        onChange={formik.handleChange}
                        name="password"
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />

                    <Button color='teal' fluid size='large'>
                        Login
                    </Button>
                </Segment>
            </Form>
            {/* <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message> */}
        </Grid.Column>
    </Grid>
}

export default LoginForm