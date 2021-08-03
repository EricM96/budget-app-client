import { Envelope } from '../envelope/envelope';

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

  return (
    <div className='envelope-view'>
      <h1>User Envelopes</h1>
      <ul>
        {renderEnvelopes()}
      </ul>
    </div>
  );
}
