import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import moment from 'moment';
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
  Tooltip,
  TableSortLabel
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import ArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'

import mockData from './data'

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 300
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
  const { className, ...rest } = props;

  const classes = useStyles();

  const [companies] = useState(mockData);

  const [initialCompany, setInitialCompany] = useState(0)
  const [rowPerPage, setRowPerPage] = useState(3)

  const [disableLeft, setDisableLeft] = useState(true)
  const [disableRight, setDisableRight] = useState(false)

  useEffect(() => {
    if (initialCompany > 0) {
      setDisableLeft(false)
    } else {
      setDisableLeft(true)
    }
  }, [initialCompany])

  useEffect(() => {
    if (rowPerPage >= companies.length) {
      setDisableRight(true)
    } else {
      setDisableRight(false)
    }
  }, [rowPerPage,companies.length])

  function handleNextPage() {
    setInitialCompany(initialCompany + 3)
    setRowPerPage(rowPerPage + 3)
  }
  
  function handlePreviousPage() {
    setInitialCompany(initialCompany - 3)
    setRowPerPage(rowPerPage - 3)
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Next Hacks"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Company</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell sortDirection="desc">
                    <Tooltip
                      enterDelay={300}
                      title="Sort"
                    >
                      <TableSortLabel
                        active
                        direction="desc"
                      >
                        Date
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell size={'small'}>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {companies.slice(initialCompany,rowPerPage).map(company => (
                  <TableRow
                    hover
                    key={company.id}
                  >
                    <TableCell>{company.ref}</TableCell>
                    <TableCell>{company.customer.name}</TableCell>
                    <TableCell>
                      {moment(company.createdAt).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell>
                      <div className={classes.statusContainer}>
                        {company.amount}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <ButtonGroup variant="contained" size="small" aria-label="small contained button group">
          <Button variant="contained" disabled={disableLeft} color="default" onClick={() => handlePreviousPage()}>
            <ArrowLeftIcon />
          </Button>
          <Button variant="contained" disabled={disableRight} color="default" onClick={() => handleNextPage()}>
            <ArrowRightIcon />
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

NextHacks.propTypes = {
  className: PropTypes.string
};

export default NextHacks;