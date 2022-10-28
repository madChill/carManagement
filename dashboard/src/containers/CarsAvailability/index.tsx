import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import {
  Input, Label, Menu, Table, Loader, Feed,
  PaginationProps, Dimmer, Pagination, Button, InputProps
} from 'semantic-ui-react'
import { timeStampPredict, countFinding } from '../../utils/helpers';
import { ICarItem } from '../../utils/types/carsItem';
import { uselogicForm } from './hooks';
import classes from './style.module.css'
import { ROUTE } from '../../utils/constants';

const FormScan: React.FC<{}> = () => {
  const { loading, setPage, scans, total, onDelete, setsearch } = uselogicForm()
  return (
    <>
      <Link to={ROUTE.SubmitScan}>
        <Button color='green'
        >Create new car</Button>
      </Link>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className={classes.searchBar}>Brand <Input
              loading={loading}
              placeholder='Search...'
              onChange={(props: InputProps | Readonly<InputProps>) => {
                setsearch({ brand: props.target.value })
              }} />
            </Table.HeaderCell>
            <Table.HeaderCell>Renting 
              {/* <Input
              loading={loading}
              placeholder='Search...'
              onChange={(props: InputProps | Readonly<InputProps>) => {
                setsearch({ build: props.target.value })
              }} /> */}
              </Table.HeaderCell>
            {/* <Table.HeaderCell>Location <Input
              loading={loading}
              placeholder='Search...'
              onChange={(props: InputProps | Readonly<InputProps>) => {
                setsearch({ loc: props.target.value })
              }} /></Table.HeaderCell> */}
            <Table.HeaderCell>Price per day($)</Table.HeaderCell>
            <Table.HeaderCell>Owner</Table.HeaderCell>
            <Table.HeaderCell>Image </Table.HeaderCell>

            <Table.HeaderCell>Delete</Table.HeaderCell>
            {/* <Table.HeaderCell>Start date</Table.HeaderCell> */}
            {/* <Table.HeaderCell>End date</Table.HeaderCell> */}
          </Table.Row>
        </Table.Header>
        {loading ? (<Dimmer active>
          <Loader />
        </Dimmer>) : (
          <Table.Body>
            {scans.map((item: ICarItem, index: number) => {
              return (<Table.Row>
                <Table.Cell>
                  <Label ribbon>{item.brand}</Label>
                  <Link to={`${ROUTE.SubmitScan}?id=${item.id}`}>{item.brand}</Link>
                </Table.Cell>
                {/* <Table.Cell>{item.build}</Table.Cell> */}
                <Table.Cell>{item.available ? (<Label as='a' color='teal' tag>
                  avaiable
                </Label>) : (<Label as='a' color='red' tag>renting</Label>)}</Table.Cell>
               
                <Table.Cell>{item.dayPrice}</Table.Cell>
                <Table.Cell>{item.user?.firstName} {item.user?.lastName}</Table.Cell>
                <Table.Cell><Feed.Label>
                  <img alt='feed' src={item.ava} className={classes.imgAva} />
                </Feed.Label></Table.Cell>
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