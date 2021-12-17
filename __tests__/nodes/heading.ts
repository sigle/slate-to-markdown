import { convert } from '../../src';

it('render heading', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'heading-one',
      data: {},
      nodes: [
        {
          object: 'text',
          text: 'Title 1',
          marks: [],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});
