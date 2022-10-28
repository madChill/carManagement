import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import {
  Input, Label, Menu, Table, Loader, Search,
  PaginationProps, Dimmer, Pagination, Button, InputProps,
  Feed
} from 'semantic-ui-react'
import { timeStampPredict, countFinding } from '../../utils/helpers';
import { ICarItem } from '../../utils/types/carsItem';
import { IUser } from '../../utils/types/userItem';
import { uselogicForm } from './hooks';
import classes from './style.module.css'
import { ROUTE } from '../../utils/constants';

const FormScan: React.FC<{}> = () => {
  const { loading, setPage, scans, total, onDelete, setsearch } = uselogicForm()
  return (
    <>
      <Link to={ROUTE.SubmitUser}>
        <Button color='green'
        >Create new user</Button>
      </Link>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className={classes.searchBar}>Edit
            {/* <Input
              loading={loading}
              placeholder='Search...'
              onChange={(props: InputProps | Readonly<InputProps>) => {
                setsearch({ brand: props.target.value })
              }} /> */}
            </Table.HeaderCell>
            <Table.HeaderCell>FirstName <Input
              loading={loading}
              placeholder='Search...'
              onChange={(props: InputProps | Readonly<InputProps>) => {
                setsearch({ firstName: props.target.value })
              }} /></Table.HeaderCell>
            <Table.HeaderCell>LastName <Input
              loading={loading}
              placeholder='Search...'
              onChange={(props: InputProps | Readonly<InputProps>) => {
                setsearch({ lastName: props.target.value })
              }} /></Table.HeaderCell>
            <Table.HeaderCell>Role 
              {/* <Input
              loading={loading}
              placeholder='Search...'
              onChange={(props: InputProps | Readonly<InputProps>) => {
                setsearch({ loc: props.target.value })
              }} /> */}
              </Table.HeaderCell>
            <Table.HeaderCell>Dob</Table.HeaderCell>
            <Table.HeaderCell>Image</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
            {/* <Table.HeaderCell>Start date</Table.HeaderCell> */}
            {/* <Table.HeaderCell>End date</Table.HeaderCell> */}
          </Table.Row>
        </Table.Header>
        {loading ? (<Dimmer active>
          <Loader />
        </Dimmer>) : (
          <Table.Body>
            {scans.map((item: IUser, index: number) => {
              return (<Table.Row>
                <Table.Cell>
                  <Label ribbon>{item.id}</Label>
                  <Link to={`${ROUTE.SubmitUser}?id=${item.id}`}>{item.firstName+item.lastName}</Link>
                </Table.Cell>
                <Table.Cell>{item.firstName}</Table.Cell>
                <Table.Cell>{item.lastName}</Table.Cell>
                <Table.Cell>{item.role||'user'}</Table.Cell>
                <Table.Cell>{moment(item.dob).format('YYYY-MM-DD')}</Table.Cell>
                <Table.Cell>
                  <Feed.Label>
                    <img alt='feed' src={item.avatar} className={classes.imageAva}/>
                  </Feed.Label>
                  {/* {moment(item.dob).format('YYYY-MM-DD')} */}
                  </Table.Cell>
                <Table.Cell><Button color='red'
                  onClick={() => onDelete(item.id)}
                  loading={loading}>Delete</Button></Table.Cell>

                {/* <Table.Cell>{moment(item.startDate).format('MM/DD/YYYY hh:ss')}</Table.Cell> */}
                {/* <Table.Cell>{moment(item.endDate).format('MM/DD/YYYY hh:ss')}</Table.Cell> */}
              </Table.Row>)
            })}

          </Table.Body>
        )}
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='9'>
              <Menu key={"menuPage"} floated='right' pagination>
                <Pagination defaultActivePage={0} totalPages={Math.ceil(total / 10)}
                  onPageChange={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: PaginationProps) => {
                    setPage(Number(data.activePage))
                  }}
                />
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>

      </Table>
    </>
  )
}

FormScan.prototype = {

}

export default FormScan