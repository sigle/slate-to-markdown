import { convert } from '../../src';

it('render blockquote', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'block-quote',
      data: {},
      nodes: [
        {
          object: 'text',
          text: 'Blockquote',
          marks: [],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});
