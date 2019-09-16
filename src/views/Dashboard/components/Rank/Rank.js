import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  ButtonGroup,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import mockData from './data'

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 300,
    maxHeight: 255,
    minHeight: 255,
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));


const NextHacks = props => {
  const { className, ...rest } = props

  const classes = useStyles()

  const [companies] = useState(mockData)

  const [typeRank, setTypeRank] = useState('global')

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Ranking"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Button onClick={() => setTypeRank('global')}>Rank Global</Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => setTypeRank('friends')}>Rank Amigo</Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { (typeRank == 'global') ?
                  companies.slice(0,5).map(company => (
                  <TableRow
                    hover
                    key={company.id}
                  >
                    <TableCell>{company.ref}</TableCell>
                    <TableCell>{company.customer.name}</TableCell>
                  </TableRow>
                ))
                :
                companies.slice(3,5).map(company => (
                  <TableRow
                    hover
                    key={company.id}
                  >
                    <TableCell>{company.ref}</TableCell>
                    <TableCell>{company.customer.name}</TableCell>
                  </TableRow>
                ))
                }
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
      </CardActions>
    </Card>
  );
};

NextHacks.propTypes = {
  className: PropTypes.string
};

export default NextHacks;