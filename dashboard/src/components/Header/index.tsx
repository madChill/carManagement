import React from 'react'
import { Grid, Search, Feed } from 'semantic-ui-react'
import classes from './style.module.css'

const SidebarExampleVisible = () => {
  const userName = localStorage.getItem('userName')
  return (
    <div className={classes.headerLayout}>
      <Grid.Column width={6}>
        <Search
          // loading={loading}
          placeholder='Search...'
        // onResultSelect={(e, data) =>{
        //   // dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
        // }
        // onSearchChange={handleSearchChange}
        // results={results}
        // value={value}
        />

      </Grid.Column>
      <Grid.Column width={6} className={classes.headerLayoutRight}>
        <Feed>
          <Feed.Event>
            <Feed.Label>
              <img alt='feed' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>Hello, {userName}</Feed.User> 
                {/* added you as a friend */}
                <Feed.Date>1 Hour Ago</Feed.Date>
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Grid.Column>
    </div>
  )
}

export default SidebarExampleVisible