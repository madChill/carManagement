import React from 'react'
import { Button, Loader, Form, Select, TextArea, DropdownProps, Dimmer } from 'semantic-ui-react'
import { optionStatus } from '../../utils/constants';

import { uselogicForm } from './hooks';

const FormScan: React.FC<{}> = () => {
  const { formik, loading, initialValues } = uselogicForm()
  return loading ? (<Dimmer active>
    <Loader />
  </Dimmer>) : (
    <Form onSubmit={(e) => formik.handleSubmit(e)}>
      {/* <Form.Field>
        <label>Status</label>
        <Select options={optionStatus} placeholder='First Name'
          name="Status"
          onChange={(event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
            formik.setFieldValue('Status', data.value)
          }}
          />
      </Form.Field> */}
      <Form.Field>
        <label>FirstName</label>
        <input placeholder='FirstName'
          name="firstName"
          defaultValue={initialValues.firstName}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          // onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
          //   console.log(e.target.value, "===e.target.value===")
          //   formik.setFieldValue('firstName', e.target.value)
          // }} 
          />
      </Form.Field>

      <Form.Field>
        <label>LastName</label>
        <input placeholder='LastName'
          name="lastName"
          defaultValue={initialValues.lastName}
          value={formik.values.lastName}
          onChange={formik.handleChange} />
      </Form.Field>
      
      {/* <Form.Field>
        <label>Onwer</label>
        <Select options={users} placeholder='user'
          name="user"
          value={formik.values.user}
          onChange={(event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
            formik.setFieldValue('user', data.value)
          }}
        />
      </Form.Field> */}

      <Form.Field>
        <label>Dob</label>
        <input type="datetime-local" defaultValue={'2022-10-23T18:40'}
          placeholder='dob'
          name="dob"
          value={formik.values.dob}
          onChange={formik.handleChange} />
      </Form.Field>

      <Form.Field>
        <label>Image</label>
        <input placeholder='avatar'
          name="avatar"
          value={formik.values.avatar}
          defaultValue={initialValues.avatar}
          onChange={formik.handleChange} />
      </Form.Field>


      <Button type='submit' >Submit</Button>
    </Form>
  )
}

FormScan.prototype = {

}

export default FormScan