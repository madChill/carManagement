import React from 'react'
import { Icon, Image, Menu, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import classes from './style.module.css'
import { ROUTE } from '../../utils/constants'

const SidebarExampleVisible = () => (
  <>
    <nav className={classes.nav}>
      <div className={classes.contentFlui}>
        <div className={classes.logoLayout}>
          <img className="avatar flex-shrink-0 mb-3 mr-3 mb-md-0 mr-md-4"
            src="/sport-car-1768.svg" width="100" height="100" alt="@guardrailsio" />
        </div>
        <div className={classes.dashboardText}>car management</div>
        <List className={classes.navbar}>
          <List.Item className={classes.navbarItem}>
            <List.Icon name='add' />
            <List.Content>
              <List.Header><Link to={ROUTE.CarsDashboard}>Cars dashboard</Link></List.Header>
              <List.Description>
                Add a new scan
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item className={classes.navbarItem}>
            <List.Icon name='users' />
            <List.Content>
              <List.Header><Link to={ROUTE.UsersDashboard}>User</Link></List.Header>
              <List.Description>
                Add a new scan
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item className={classes.navbarItem}>
            <List.Icon name='truck' />
            <List.Content>
              <List.Header><Link to={ROUTE.CarsAvailability}>Cars availability</Link></List.Header>
              <List.Description>
                List avaiable scans
              </List.Description>
            </List.Content>
          </List.Item>
        </List>

      </div>
    </nav>
    <nav className={classes.navBackground}></nav>
  </>
)

export default SidebarExampleVisible