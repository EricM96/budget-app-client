import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Envelope } from '../envelope/envelope';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export function EnvelopeView() {
  const envelopes = [
    {
      'name': 'groceries',
      'balance': '1500.00'
    },
    {
      'name': 'rent',
      'balance': '2000.00'
    }
  ];

  const renderEnvelopes = () => {
    return envelopes.map((envelope) => {
      return (
        <Envelope name={envelope.name} balance={envelope.balance}/>
      );
    });
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component='nav' aria-label='main mailbox folders'>
        {renderEnvelopes()}
      </List>
    </div>
  );
};
