import React from 'react'
import { Button, Loader, Form, Select, TextArea, DropdownProps, Dimmer } from 'semantic-ui-react'
import { optionStatus } from '../../utils/constants';

import { uselogicForm } from './hooks';

const FormScan: React.FC<{}> = () => {
  const { formik, loading, users } = uselogicForm()
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
        <label>Brand</label>
        <input placeholder='Brand'
          name="brand"
          // value={formik.values.brand}
          defaultValue={formik.values.brand}
          onChange={formik.handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Build</label>
        <input placeholder='build'
          name="build"
          // value={formik.values.build}
          defaultValue={formik.values.build}

          onChange={formik.handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Price per day</label>
        <input placeholder='dayPrice'
          name="dayPrice"
          // value={formik.values.dayPrice}
          defaultValue={formik.values.dayPrice}

          onChange={formik.handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Location</label>
        <input placeholder='loc'
          name="loc"
          // value={formik.values.loc}
          defaultValue={formik.values.loc}

          onChange={formik.handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Mode</label>
        <input placeholder='mode'
          name="mode"
          // value={formik.values.mode}
          defaultValue={formik.values.mode}

          onChange={formik.handleChange} />
      </Form.Field>

      <Form.Field>
        <label>Onwer</label>
        <Select options={users} placeholder='user'
          name="user"
          value={formik.values.user}
          onChange={(event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
            formik.setFieldValue('user', data.value)
          }}
        />
      </Form.Field>

      <Form.Field>
        <label>Image</label>
        <input placeholder='ava'
          name="ava"
          // value={formik.values.ava}
          defaultValue={formik.values.ava}

          onChange={formik.handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Renting</label>
        <Select options={[{ text: 'renting', value: false }, { text: 'avaiable', value: true }]} placeholder='renting'
          name="available"
          value={formik.values.available}
          onChange={(event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
            formik.setFieldValue('available', data.value)
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Start Date</label>
        <input type="datetime-local" defaultValue={'2022-10-23T18:40'}
          placeholder='startDate'
          name="startDate"
          value={formik.values.startDate}
          onChange={formik.handleChange} />
      </Form.Field>
      <Form.Field>
        <label>EndDate</label>
        <input type="datetime-local" defaultValue={'2022-10-23T18:40'}
          placeholder='endDate'
          name="endDate"
          value={formik.values.endDate}
          onChange={formik.handleChange} />
      </Form.Field>
      <Button type='submit' >Submit</Button>
    </Form>
  )
}

FormScan.prototype = {

}

export default FormScan