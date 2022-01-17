import { convert } from '../../src';

it('render image', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'image',
      data: {
        src: 'https://gaia.blockstack.org/hub/18D2Jwi8xaF9k1natrajDSsg7gUmr3KQGw/photos/eEb-WTOLPe24j7x8pM5Mm/pWhvyVS2N1vYqHEnFHFxz-Leo.png',
        id: 'pWhvyVS2N1vYqHEnFHFxz',
      },
      nodes: [
        {
          object: 'text',
          text: '',
          marks: [],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});

it('encode image url', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'image',
      data: {
        src: 'https://gaia.blockstack.org/hub/18D2Jwi8xaF9k1natrajDSsg7gUmr3KQGw/photos/rpO_vXV7gOCRm2nXOmvEB/Yui0XyebIsqGYuwrf8R_J-Screenshot 2020-04-06 at 10.46.03.png',
        id: 'pWhvyVS2N1vYqHEnFHFxz',
      },
      nodes: [
        {
          object: 'text',
          text: '',
          marks: [],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});
